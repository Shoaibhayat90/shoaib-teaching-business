import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const source = readFileSync(resolve(process.cwd(), "client/index.html"), "utf8");
const pagesStart = source.indexOf("const pages=") + "const pages=".length;
const pagesEnd = source.indexOf("};\nconst frame", pagesStart) + 1;
const pages = JSON.parse(source.slice(pagesStart, pagesEnd)) as Record<string, string>;
const homepage = pages["index.html"];

describe("homepage interaction enhancements", () => {
  it("includes section-aware navigation state", () => {
    expect(homepage).toContain("nav-active");
    expect(homepage).toContain("aria-current");
    expect(homepage).toContain("getBoundingClientRect");
  });

  it("includes compact responsive mobile navigation styles", () => {
    expect(homepage).toContain('id="navigation-polish"');
    expect(homepage).toContain("header nav.open>a");
    expect(homepage).toContain("min-height:44px");
  });

  it("tracks certification-resource clicks without requiring an analytics vendor", () => {
    expect(homepage).toContain("cert-resource-link");
    expect(homepage).toContain("academy-resource-click");
    expect(homepage).toContain("window.dataLayer=window.dataLayer||[]");
    expect(homepage).toContain("window.gtag");
  });
});
