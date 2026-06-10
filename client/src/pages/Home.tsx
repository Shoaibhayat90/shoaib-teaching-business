import { useEffect, useState, useRef } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Navigation } from "@/components/Navigation";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight, Zap, Users, Award, BookOpen, Lightbulb, Rocket, Brain, Star, Mail, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Design Philosophy: Mission-Driven Tech Education
 * - Core Structure: Mission → Courses → Learning Methods → Key Pillars → Slogans
 * - Color Palette: Teal (#1B9B8F), Coral (#FF6B5B), Dark Slate (#2C3E50)
 * - Typography: Bold mission statements, clear course descriptions
 * - Layout: Hierarchical, mission-focused, action-oriented
 * - Feel: Professional, inspiring, growth-oriented
 */

// 3D Hero Scene Component
const HeroScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0xfafafa);

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current = renderer;
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Create animated geometries
    const geometries = [
      new THREE.IcosahedronGeometry(1, 4),
      new THREE.TetrahedronGeometry(1.5),
      new THREE.OctahedronGeometry(1.2),
    ];

    const materials = [
      new THREE.MeshPhongMaterial({ color: 0x1b9b8f, emissive: 0x1b9b8f, emissiveIntensity: 0.3 }),
      new THREE.MeshPhongMaterial({ color: 0xff6b5b, emissive: 0xff6b5b, emissiveIntensity: 0.3 }),
      new THREE.MeshPhongMaterial({ color: 0x2c3e50, emissive: 0x2c3e50, emissiveIntensity: 0.3 }),
    ];

    const meshes: THREE.Mesh[] = [];
    geometries.forEach((geometry, idx) => {
      const mesh = new THREE.Mesh(geometry, materials[idx]);
      mesh.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      scene.add(mesh);
      meshes.push(mesh);

      // Animate each mesh
      gsap.to(mesh.rotation, {
        x: Math.random() * Math.PI * 2,
        y: Math.random() * Math.PI * 2,
        z: Math.random() * Math.PI * 2,
        duration: 20 + Math.random() * 10,
        repeat: -1,
        ease: "none",
      });
    });

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x1b9b8f, 1);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff6b5b, 1);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Mouse interaction
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Gentle camera movement based on mouse
      gsap.to(camera.position, {
        x: mouse.x * 2,
        y: mouse.y * 2,
        duration: 1,
      });

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full absolute inset-0" />;
};

// Animated Counter Component
const AnimatedCounter = ({ end, label }: { end: number; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to({ value: 0 }, {
            value: end,
            duration: 2.5,
            onUpdate: function () {
              setCount(Math.floor(this.targets()[0].value));
            },
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{count}+</div>
      <p className="text-foreground/70 text-sm md:text-base">{label}</p>
    </div>
  );
};

const Button = ({ children, size = "md", variant = "default", className = "", ...props }: any) => {
  const baseClasses = "font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center";
  const sizeClasses: any = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };
  const variantClasses: any = {
    default: "bg-primary hover:bg-primary/90 text-primary-foreground",
    outline: "border-2 border-primary text-primary hover:bg-primary/5",
  };
  return (
    <button className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }: any) => (
  <div className={`bg-white rounded-xl border border-border shadow-sm ${className}`}>
    {children}
  </div>
);

const AnimatedIconCarousel = () => {
  return null;
};

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Smooth scroll animations
    gsap.registerPlugin(ScrollTrigger);

    // Animate sections on scroll
    gsap.utils.toArray<HTMLElement>(".scroll-animate").forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section with 3D */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <HeroScene />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                🚀 Welcome to the Future of Learning
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Learn Technology <br />
              <span className="text-primary">From Scratch</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Master in-demand IT skills with industry-recognized certifications from Microsoft and Google
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get Started Today <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a href="/courses">
                <Button size="lg" variant="outline" className="border-primary text-primary">
                  Explore Courses
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Statistics Section */}
      <section className="py-20 bg-white scroll-animate">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={500} label="Students Trained" />
            <AnimatedCounter end={95} label="Certification Pass Rate %" />
            <AnimatedCounter end={7} label="Professional Courses" />
            <AnimatedCounter end={20} label="Avg Salary Increase %" />
          </div>
        </div>
      </section>

      {/* Core Mission Section */}
      <section id="mission" className="relative py-20 bg-white z-10 scroll-mt-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Core Mission
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              We are dedicated to transforming tech education through four fundamental pillars that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow scroll-animate">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Simplify Learning</h3>
              <p className="text-foreground/70">
                We break down complex tech concepts into simple, digestible lessons that anyone can understand, regardless of background.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow scroll-animate">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Build Real Skills</h3>
              <p className="text-foreground/70">
                Every course is designed with practical, hands-on projects that you'll actually use in your career and daily life.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow scroll-animate">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Real-World Application</h3>
              <p className="text-foreground/70">
                Learn skills that directly apply to professional environments, with examples and case studies from actual industry scenarios.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow scroll-animate">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Career Preparation</h3>
              <p className="text-foreground/70">
                We prepare you not just with technical knowledge, but with the confidence and professional skills needed to advance your career.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Pillars Section */}
      <section id="pillars" className="py-20 bg-background z-10 scroll-mt-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Key Pillars
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Three principles that guide our teaching philosophy and define our brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-t-4 border-primary scroll-animate">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-3xl font-bold mb-3 text-primary">Inspire</h3>
              <p className="text-foreground/70">
                We inspire confidence in every student, showing them that technology is accessible and achievable for everyone.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-t-4 border-primary scroll-animate">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-3xl font-bold mb-3 text-primary">Learn</h3>
              <p className="text-foreground/70">
                We provide structured, practical learning experiences that build real skills and genuine understanding.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-t-4 border-primary scroll-animate">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-3xl font-bold mb-3 text-primary">Succeed</h3>
              <p className="text-foreground/70">
                We empower students to achieve their goals, land better jobs, and build successful careers in technology.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section id="courses" className="py-20 bg-white z-10 scroll-mt-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Most Popular Courses
            </h2>
            <p className="text-lg text-foreground/70">
              Start with these in-demand courses that transform careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <Card className="p-8 hover:shadow-lg transition-shadow scroll-animate">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Microsoft Office</h3>
              <p className="text-foreground/70 mb-4">
                Master Word, Excel, PowerPoint, and Outlook for professional productivity
              </p>
              <a href="/courses" className="text-primary font-semibold hover:text-primary/80">
                Learn More →
              </a>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow scroll-animate">
              <div className="text-5xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Cyber Security</h3>
              <p className="text-foreground/70 mb-4">
                Protect yourself and organizations from digital threats
              </p>
              <a href="/courses" className="text-primary font-semibold hover:text-primary/80">
                Learn More →
              </a>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow scroll-animate">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Modern AI Tools</h3>
              <p className="text-foreground/70 mb-4">
                Learn to leverage ChatGPT and AI for productivity
              </p>
              <a href="/courses" className="text-primary font-semibold hover:text-primary/80">
                Learn More →
              </a>
            </Card>
          </div>

          <div className="text-center">
            <a href="/courses">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Explore All 7 Courses <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background z-10 scroll-mt-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Student Success Stories
            </h2>
            <p className="text-lg text-foreground/70">
              Join hundreds of students who transformed their careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 scroll-animate">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 italic">
                "The Microsoft Office course helped me land a job as an office administrator. Best investment ever!"
              </p>
              <div>
                <p className="font-bold text-foreground">Sarah Johnson</p>
                <p className="text-sm text-foreground/60">Career Changer</p>
              </div>
            </Card>

            <Card className="p-8 scroll-animate">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 italic">
                "The cyber security training was comprehensive and practical. I now work as a security analyst."
              </p>
              <div>
                <p className="font-bold text-foreground">Ahmed Hassan</p>
                <p className="text-sm text-foreground/60">Recent Graduate</p>
              </div>
            </Card>

            <Card className="p-8 scroll-animate">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 italic">
                "Learned AI tools that transformed my business operations. Highly recommend!"
              </p>
              <div>
                <p className="font-bold text-foreground">Emily Chen</p>
                <p className="text-sm text-foreground/60">Business Owner</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Your Instructor */}
      <section className="py-20 bg-white z-10 scroll-mt-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
              Meet Your Instructor
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="scroll-animate">
                <img
                  src="/manus-storage/IMG_0190_ea14d968.PNG"
                  alt="Shoaib Hayat"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>

              <div className="scroll-animate">
                <h3 className="text-3xl font-bold mb-4 text-foreground">Shoaib Hayat</h3>
                <p className="text-lg text-primary font-semibold mb-4">Tech Education Specialist</p>
                
                <div className="space-y-4 text-foreground/80 mb-8">
                  <p>
                    With over 10 years of experience in IT and technology education, Shoaib is passionate about making complex concepts accessible to everyone.
                  </p>
                  <p>
                    He holds multiple industry certifications and has trained hundreds of students to achieve their career goals in technology.
                  </p>
                  <p>
                    Shoaib believes that quality education should be practical, engaging, and focused on real-world applications.
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="font-semibold text-foreground">Key Expertise:</p>
                  <ul className="space-y-2 text-foreground/80">
                    <li>✓ Microsoft Office Suite Mastery</li>
                    <li>✓ Cyber Security Fundamentals</li>
                    <li>✓ Modern AI Tools & ChatGPT</li>
                    <li>✓ Professional Development Training</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5 z-10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Transform Your Career?
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              Start learning today and join hundreds of successful graduates
            </p>
            <a href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started Now <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 z-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">IT Insight Academy</h4>
              <p className="text-background/80 text-sm">
                Learn Technology from Scratch
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/courses" className="text-background/80 hover:text-background">Courses</a></li>
                <li><a href="/mission" className="text-background/80 hover:text-background">Our Mission</a></li>
                <li><a href="/certifications" className="text-background/80 hover:text-background">Certifications</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-background/80">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:info@itinsightacademy.com" className="hover:text-background">
                    info@itinsightacademy.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-background/80">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+15147012500" className="hover:text-background">
                    +1 514 701 2500
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background">
                  LinkedIn
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background">
                  YouTube
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background">
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/80">
            <p>© 2026 IT Insight Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
