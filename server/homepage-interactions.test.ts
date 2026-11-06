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

  it("includes the requested footer link and corrected hero label", () => {
    expect(homepage).toContain("Calgary · IT BOOTCAMP · Open to everyone");
    expect(homepage).not.toContain("Calgary · IT BOOTCAM · Open to everyone");
    expect(homepage).toContain('href="https://raniaiservices.com/"');
    expect(homepage).toContain('target="_blank"');
    expect(homepage).toContain("IT Insight Academy is operated by <a");
  });

  it("shows an accessible loading spinner and clear success state after submission", () => {
    expect(homepage).toContain('class="submit-spinner" hidden aria-hidden="true"');
    expect(homepage).toContain('sent.classList.add("success")');
    expect(homepage).toContain("Success — your enrollment request was sent.");
    expect(homepage).toContain('submitSpinner.hidden = false');
    expect(homepage).toContain('submitSpinner.hidden = true');
  });

  it("provides Shoaib’s clickable professional profile modal", () => {
    expect(homepage).toContain('class="inst-main profile-trigger"');
    expect(homepage).toContain('role="button" tabindex="0"');
    expect(homepage).toContain('id="instructorModal"');
    expect(homepage).toContain("Shoaib Hayat — Founder &amp; Lead Instructor");
    expect(homepage).toContain("Founder of IT Insight Academy. Shoaib is a Calgary-based IT instructor and System Quality Engineer");
    expect(homepage).toContain("Founder — Rani AI Services (websites, AI &amp; automation) and IT Insight Academy");
    expect(homepage).toContain("Educator — IT instructor, Soft Skills and Career Coach, and subject matter expert for multiple education sectors (2022–present)");
    expect(homepage).toContain("QA Analyst — PTW, Montreal");
    expect(homepage).toContain("M.Eng, Quality Systems Engineering — Concordia University");
    expect(homepage).toContain("Artificial Intelligence for Beginners — Simplilearn");
    expect(homepage).not.toContain("IT Instructor — CDI College &amp; Reeves College (2022–present)");
    expect(homepage).toContain("instructorModalClose");
    expect(homepage).toContain("instructorModal.addEventListener(\"click\"");
    expect(homepage).toContain("closeInstructorProfile");
  });

  it("uses the supplied portrait on the card and beside the profile heading", () => {
    const portrait = "/manus-storage/pasted_file_dKGuU7_image_5cb797c3.png";
    expect(homepage.match(new RegExp(portrait.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&"), "g")) || []).toHaveLength(2);
    expect(homepage).toContain('class="instructor-card-photo"');
    expect(homepage).toContain('class="profile-popup-photo"');
    expect(homepage).toContain("object-fit: cover");
    expect(homepage).toContain("object-position: center 28%");
    expect(homepage).toContain('alt="Shoaib Hayat, Founder and Lead Instructor"');
  });

  it("presents all delivery modes and class formats consistently", () => {
    expect(homepage).toContain('content="IT Insight Academy offers practical technology courses — in person in Calgary, live online, or self-paced, one-on-one or in a group."');
    expect(homepage).toContain("Learn in person in Calgary, live online from anywhere, or self-paced with recorded lessons and materials");
    expect(homepage).toContain('id="waysToLearnTitle"');
    expect(homepage).toContain("Live classes in Calgary.");
    expect(homepage).toContain("Live classes by video, from anywhere.");
    expect(homepage).toContain("Self-paced: recorded lessons and materials you work through on your own schedule.");
    expect(homepage).toContain("Private instruction, at your pace.");
    expect(homepage).toContain("Scheduled classes with other students.");
    expect(homepage).toContain("Learn your way, finish with a project");
    expect(homepage).toContain("3 ways</strong><span>to learn · 1-on-1 or group");
    expect(homepage).toContain("In person in Calgary, live online, or self-paced</strong> — one-on-one or in a group");
    expect(homepage).not.toContain("Live, in-person teaching");
    expect(homepage).not.toContain("Live in-person instruction");
    expect(homepage).not.toContain("Classes run in person</strong> in Calgary");
    expect(homepage).not.toContain("Learn in person, finish with a project");
    expect(homepage).not.toContain("Practise in the room");
  });

  it("includes reduced-motion handling and the powered-by credit", () => {
    expect(homepage).toContain("prefers-reduced-motion");
    expect(homepage).toContain("Powered by Rani AI Services");
  });
});
