
import express from "express";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { registerStorageProxy } from "./storageProxy";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";
import { createContactSubmission } from "../db";
import { notifyOwner } from "./notification";
import { sendContactFormEmail } from "./email";

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);
  // Configure body parser with larger size limit for file uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  registerStorageProxy(app);
  registerOAuthRoutes(app);
  app.post("/api/inquiries", async (req, res) => {
    const body = req.body ?? {};
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const course = typeof body.course === "string" ? body.course.trim() : "Course inquiry";
    const availability = typeof body.availability === "string" ? body.availability.trim() : "Flexible";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const consent = body.consent === true;
    if (!name || name.length > 255 || !/^\S+@\S+\.\S+$/.test(email) || email.length > 320 || !consent) {
      res.status(400).json({ error: "Please provide a valid name, email address, and consent." });
      return;
    }
    if (message.length > 2000) {
      res.status(400).json({ error: "Goals or questions must be 2,000 characters or fewer." });
      return;
    }
    const subject = `Enrollment request: ${course}`;
    const fullMessage = `Course: ${course}\nPreferred schedule: ${availability}\n\nGoals or questions:\n${message || "Not provided"}`;
    try {
      await createContactSubmission({ name, email, phone: null, subject, message: fullMessage });
      const emailSent = await sendContactFormEmail({ name, email, phone: null, subject, message: fullMessage });
      await notifyOwner({
        title: `New enrollment request from ${name}`,
        content: `Email: ${email}\nCourse: ${course}\nPreferred schedule: ${availability}\n\n${fullMessage}`,
      });
      if (!emailSent) console.warn("[Inquiry] Email delivery failed, but submission was saved");
      res.json({ success: true, reference: `ITA-${Date.now().toString(36).toUpperCase()}` });
    } catch (error) {
      console.error("[Inquiry] Failed to submit form:", error);
      res.status(500).json({ error: "We could not send your request right now. Please email shoaib.hayyat@gmail.com." });
    }
  });
  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  // development mode uses Vite, production mode uses static files
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
