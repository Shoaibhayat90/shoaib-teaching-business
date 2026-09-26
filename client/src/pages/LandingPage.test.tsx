import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import LandingPage from "./LandingPage";

// Mock Three.js
vi.mock("three", () => ({
  Scene: vi.fn(),
  PerspectiveCamera: vi.fn(),
  WebGLRenderer: vi.fn(() => ({
    setSize: vi.fn(),
    setPixelRatio: vi.fn(),
    render: vi.fn(),
    domElement: document.createElement("canvas"),
  })),
  IcosahedronGeometry: vi.fn(),
  TetrahedronGeometry: vi.fn(),
  OctahedronGeometry: vi.fn(),
  MeshPhongMaterial: vi.fn(),
  Mesh: vi.fn(() => ({
    position: { set: vi.fn() },
    rotation: { set: vi.fn() },
  })),
  AmbientLight: vi.fn(),
  PointLight: vi.fn(),
  Color: vi.fn(),
}));

// Mock GSAP
vi.mock("gsap", () => ({
  default: {
    registerPlugin: vi.fn(),
    to: vi.fn(),
    from: vi.fn(),
    utils: {
      toArray: vi.fn(() => []),
    },
  },
  ScrollTrigger: {},
}));

// Mock Navigation component
vi.mock("@/components/Navigation", () => ({
  Navigation: () => <div data-testid="navigation">Navigation</div>,
}));

describe("LandingPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the landing page with hero section", () => {
    render(<LandingPage />);
    
    expect(screen.getByText("Learn Technology")).toBeDefined();
    expect(screen.getByText("From Scratch")).toBeDefined();
  });

  it("displays the main call-to-action button", () => {
    render(<LandingPage />);
    
    const ctaButton = screen.getByText(/Get Started Today/i);
    expect(ctaButton).toBeDefined();
  });

  it("displays featured courses section", () => {
    render(<LandingPage />);
    
    expect(screen.getByText("Featured Courses")).toBeDefined();
    expect(screen.getByText("Microsoft Office")).toBeDefined();
    expect(screen.getByText("Cyber Security")).toBeDefined();
  });

  it("displays why choose us section", () => {
    render(<LandingPage />);
    
    expect(screen.getByText("Why Choose IT Insight Academy?")).toBeDefined();
    expect(screen.getByText("Practical Learning")).toBeDefined();
    expect(screen.getByText("Industry Certifications")).toBeDefined();
  });

  it("displays testimonials section", () => {
    render(<LandingPage />);
    
    expect(screen.getByText("Student Success Stories")).toBeDefined();
    expect(screen.getByText("Sarah Johnson")).toBeDefined();
    expect(screen.getByText("Ahmed Hassan")).toBeDefined();
  });

  it("displays CTA section", () => {
    render(<LandingPage />);
    
    expect(screen.getByText("Ready to Transform Your Career?")).toBeDefined();
  });

  it("displays footer with contact information", () => {
    render(<LandingPage />);
    
    expect(screen.getByText("shoaib.hayyat@gmail.com")).toBeDefined();
    expect(screen.getByText("+1 514 701 2500")).toBeDefined();
  });

  it("renders navigation component", () => {
    render(<LandingPage />);
    
    expect(screen.getByTestId("navigation")).toBeDefined();
  });
});
