import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const homepage = readFileSync(resolve(process.cwd(), "client/index.html"), "utf8");

describe("cream homepage", () => {
  it("uses the uploaded cream visual system", () => {
    expect(homepage).toContain("--cream: #faf9f5");
    expect(homepage).toContain('class="hero"');
    expect(homepage).toContain("Newsreader");
    expect(homepage).toContain('id="courseGrid"');
  });

  it("contains accessible navigation, course outlines, and responsive menu behavior", () => {
    expect(homepage).toContain('id="mainNav"');
    expect(homepage).toContain('id="navToggle"');
    expect(homepage).toContain('data-outline');
    expect(homepage).toContain('id="modalBackdrop"');
    expect(homepage).toContain("@media (max-width: 900px)");
  });

  it("submits the enrollment form to the real server endpoint", () => {
    expect(homepage).toContain('<form class="enroll-form" id="enrollForm">');
    expect(homepage).toContain('id="fName"');
    expect(homepage).toContain('id="fEmail"');
    expect(homepage).toContain('id="fCourse"');
    expect(homepage).toContain('id="fConsent"');
    expect(homepage).toContain('fetch("/api/inquiries"');
    expect(homepage).toContain('method: "POST"');
    expect(homepage).toContain('body: JSON.stringify(payload)');
    expect(homepage).toContain('id="formSent"');
    expect(homepage).toContain("Send enrollment request");
  });

  it("keeps direct contact links aligned with the academy inbox", () => {
    expect(homepage).toContain("info@itinsightacademy.com");
    expect(homepage).not.toContain("shoaib.hayyat@gmail.com");
  });

  it("includes reduced-motion handling and the powered-by credit", () => {
    expect(homepage).toContain("prefers-reduced-motion");
    expect(homepage).toContain("Powered by Rani AI Services");
  });
});
