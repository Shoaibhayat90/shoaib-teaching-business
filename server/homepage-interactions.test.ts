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
    expect(homepage).toContain('id="mobile-menu-motion"');
    expect(homepage).toContain("header nav.open>a");
    expect(homepage).toContain("translateY(-12px)");
    expect(homepage).toContain("prefers-reduced-motion:reduce");
  });

  it("highlights the active hero journey step", () => {
    expect(homepage).toContain('id="hero-navigation-polish"');
    expect(homepage).toContain('.journey-steps button[aria-current="step"]');
  });

  it("keeps all three hero texts scroll-linked and visibly animated", () => {
    expect(homepage).toContain('id="hero-scroll-fix"');
    expect(homepage).toContain('.experience{height:210svh;min-height:1550px');
    expect(homepage).toContain('root.style.setProperty(\'--hero-progress\',String(p))');
    expect(homepage).toContain('root.dataset.heroStage=String(active)');
    expect(homepage).toContain("window.addEventListener('scroll',queueScroll,{passive:true})");
    expect(homepage.match(/class="story-slide/g)?.length).toBe(3);
    expect(homepage).toContain('id="hero-scroll-handoff"');
    expect(homepage).toContain("window.addEventListener('wheel'");
    expect(homepage).toContain("window.addEventListener('touchmove'");
    expect(homepage).toContain("academy-direct-scroll");
    expect(homepage).toContain('const current=Number(window.academyManualProgress??0)');
    expect(homepage).toContain('window.academyManualProgress=p');
    expect(homepage).toContain('id="hero-gap-fix"');
    expect(homepage).toContain('.experience{height:calc(100svh + 2px)!important;min-height:0!important}');
    expect(homepage).toContain('if(span<200){manualProgress=n/2;paintStory(manualProgress);return}');
  });

  it("tracks certification-resource clicks and forwards them to GA4 when configured", () => {
    expect(homepage).toContain("cert-resource-link");
    expect(homepage).toContain("academy-resource-click");
    expect(homepage).toContain("window.dataLayer=window.dataLayer||[]");
    expect(source).toContain("GA4_MEASUREMENT_ID");
    expect(source).toContain("googletagmanager.com/gtag/js");
    expect(source).toContain("window.gtag('event'");
  });

  it("includes Calgary-focused SEO signals and matching visible content", () => {
    expect(homepage).toContain("Technology Courses in Calgary");
    expect(homepage).toContain('id="calgary"');
    expect(homepage).toContain('id="calgary-faq"');
    expect(homepage).toContain('"@type":"EducationalOrganization"');
    expect(homepage).toContain('"@type":"FAQPage"');
    expect(homepage).toContain('"name":"Calgary"');
  });

  it("includes the requested Rani AI Services footer credit", () => {
    expect(homepage).toContain("homepage-footer");
    expect(homepage).toContain("Powered by");
    expect(homepage).toContain('href="https://raniaiservices.com"');
    expect(homepage).toContain("Rani AI Services");
  });

  it("adds breathing room before the Find your path section", () => {
    expect(homepage).toContain('id="courses-spacing-refinement"');
    expect(homepage).toContain('#courses{padding-top:clamp(96px,9vw,132px)!important}');
  });

  it("meets the strict root-page SEO keyword and heading limits", () => {
    const outerHead = source.slice(0, source.indexOf("</head>") + 7);
    const keywords = outerHead.match(/<meta name="keywords" content="([^"]+)"/i)?.[1]?.split(",").map(value => value.trim()) ?? [];
    expect(keywords.length).toBeGreaterThanOrEqual(3);
    expect(keywords.length).toBeLessThanOrEqual(8);
    const h1s = [...source.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
    const h2s = [...source.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi)];
    expect(h1s).toHaveLength(1);
    expect(h2s).toHaveLength(1);
    expect(h1s[0][1].replace(/<[^>]+>/g, "").trim().length).toBeLessThanOrEqual(80);
    expect(h2s[0][1].replace(/<[^>]+>/g, "").trim().length).toBeLessThanOrEqual(80);
  });
});
