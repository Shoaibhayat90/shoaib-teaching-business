import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight, Zap, Users, Award, BookOpen, Lightbulb, Rocket, Brain, Star } from "lucide-react";
import { Navigation } from "@/components/Navigation";

gsap.registerPlugin(ScrollTrigger);

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

// Course Card Component
const CourseCard = ({ title, description, icon, delay }: any) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.from(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: delay * 0.1,
    });
  }, [delay]);

  return (
    <div
      ref={ref}
      className="group relative bg-white rounded-2xl p-8 border border-border shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-foreground/70 mb-4">{description}</p>
        <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
          Learn More <ChevronRight className="w-4 h-4 ml-2" />
        </div>
      </div>
    </div>
  );
};

// Testimonial Component
const TestimonialCard = ({ name, role, quote, rating }: any) => {
  return (
    <div className="bg-white rounded-2xl p-8 border border-border shadow-lg">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-foreground/80 mb-6 italic">"{quote}"</p>
      <div>
        <p className="font-bold text-foreground">{name}</p>
        <p className="text-sm text-foreground/60">{role}</p>
      </div>
    </div>
  );
};

export default function LandingPage() {
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
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section with 3D */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <HeroScene />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-primary font-semibold text-sm">🚀 Welcome to the Future of Learning</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Learn Technology
              <br />
              <span className="bg-gradient-to-r from-primary via-red-500 to-primary bg-clip-text text-transparent">
                From Scratch
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Master in-demand IT skills with industry-recognized certifications from Microsoft and Google
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                Get Started Today <ChevronRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary/5 rounded-lg font-semibold transition-all duration-300">
                Explore Courses
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedCounter end={500} label="Students Trained" />
            <AnimatedCounter end={95} label="Certification Pass Rate %" />
            <AnimatedCounter end={7} label="Professional Courses" />
            <AnimatedCounter end={20} label="Avg Salary Increase %" />
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-background scroll-animate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Featured Courses</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Choose from our most popular and in-demand IT courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CourseCard
              title="Microsoft Office"
              description="Master Word, Excel, PowerPoint, and Outlook for professional productivity"
              icon="📊"
              delay={0}
            />
            <CourseCard
              title="Cyber Security"
              description="Protect yourself and organizations from digital threats"
              icon="🔐"
              delay={1}
            />
            <CourseCard
              title="Modern AI Tools"
              description="Learn to leverage ChatGPT and AI for productivity"
              icon="🤖"
              delay={2}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white scroll-animate">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8">Why Choose IT Insight Academy?</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Practical Learning</h3>
                    <p className="text-foreground/70">Real-world projects and hands-on experience</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Industry Certifications</h3>
                    <p className="text-foreground/70">Microsoft and Google recognized credentials</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Expert Instructor</h3>
                    <p className="text-foreground/70">Learn from Shoaib Hayat with 10+ years experience</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Rocket className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Career Growth</h3>
                    <p className="text-foreground/70">20% average salary increase for graduates</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/manus-storage/logo-option-2_8664fe11.png"
                alt="Academy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background scroll-animate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-xl text-foreground/70">Join hundreds of students who transformed their careers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              role="Career Changer"
              quote="The Microsoft Office course helped me land a job as an office administrator. Best investment ever!"
              rating={5}
            />
            <TestimonialCard
              name="Ahmed Hassan"
              role="Recent Graduate"
              quote="The cyber security training was comprehensive and practical. I now work as a security analyst."
              rating={5}
            />
            <TestimonialCard
              name="Emily Chen"
              role="Business Owner"
              quote="Learned AI tools that transformed my business operations. Highly recommend!"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-red-500 text-white scroll-animate">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Start learning today and join hundreds of successful graduates
          </p>
          <button className="px-8 py-4 bg-white text-primary hover:bg-gray-100 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
            Get Started Now <ChevronRight className="w-5 h-5 ml-2 inline" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">IT Insight Academy</h3>
              <p className="text-white/70">Learn Technology from Scratch</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="/courses" className="hover:text-white transition">Courses</a></li>
                <li><a href="/mission" className="hover:text-white transition">Our Mission</a></li>
                <li><a href="/certifications" className="hover:text-white transition">Certifications</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-white/70">shoaibhayat@icloud.com</p>
              <p className="text-white/70">+1 514 701 2500</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-white/70 hover:text-white transition">LinkedIn</a>
                <a href="#" className="text-white/70 hover:text-white transition">YouTube</a>
                <a href="#" className="text-white/70 hover:text-white transition">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/70">
            <p>&copy; 2026 IT Insight Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
