import React, { useRef, useEffect, useState } from 'react';
import { ClassicBookGallery } from '@/components/ClassicBookGallery';
import { BookModal } from '@/components/BookModal';
import { useLocation } from 'wouter';
import { Navigation } from '@/components/Navigation';
import { useAuth } from "@/_core/hooks/useAuth";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight, Zap, Users, Award, BookOpen, Lightbulb, Rocket, Brain, Star, Mail, Phone, Linkedin, Youtube, Instagram } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface GalleryCard {
  id: string;
  title: string;
  description: string;
  image: string;
  color: string;
}

const GALLERY_CARDS: GalleryCard[] = [
  {
    id: 'microsoft-office',
    title: 'Microsoft Office Suite',
    description: 'Master Word, Excel, PowerPoint, and Outlook. Industry-standard tools for professionals.',
    image: '/manus-storage/logo-microsoft-word.png',
    color: '#2B579A',
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security Fundamentals',
    description: 'Learn network security, threat detection, and protection strategies for the modern workplace.',
    image: '/manus-storage/google-cybersecurity-logo.png',
    color: '#EA4335',
  },
  {
    id: 'modern-ai-tools',
    title: 'Modern AI Tools',
    description: 'Explore ChatGPT, Claude, Gemini, and other cutting-edge AI tools transforming work.',
    image: '/manus-storage/logo-chatgpt.png',
    color: '#10A37F',
  },
  {
    id: 'basic-computer-skills',
    title: 'Basic Computer Skills',
    description: 'Master hardware, operating systems, file management, and essential computer fundamentals.',
    image: '/manus-storage/logo-microsoft-word.png',
    color: '#4285F4',
  },
  {
    id: 'software-qa',
    title: 'Software Quality Assurance',
    description: 'Learn testing methodologies, bug reporting, and quality assurance processes.',
    image: '/manus-storage/logo-microsoft-excel.png',
    color: '#217346',
  },
  {
    id: 'business-english',
    title: 'Business English',
    description: 'Professional communication, business writing, and workplace English skills.',
    image: '/manus-storage/logo-option-2.png',
    color: '#FF6B5B',
  },
  {
    id: 'internet-usage',
    title: 'Internet Usage',
    description: 'Navigate the web safely, manage email, online security, and digital citizenship.',
    image: '/manus-storage/logo-manus.png',
    color: '#34A853',
  },
];

const coursesData = [
  {
    title: "Basic Computer Skills",
    description: "Master hardware, operating systems, file management, and essential computer fundamentals.",
    fullDescription: "Learn about computer hardware components, Windows/Mac operating systems, file management, internet basics, and keyboard shortcuts.",
    icon: "💻",
    duration: "Flexible",
    price: "$200",
    outcomes: [
      "Understand computer hardware and components",
      "Navigate operating systems confidently",
      "Manage files and folders efficiently",
      "Use keyboard shortcuts for productivity"
    ]
  },
  {
    title: "Internet Usage",
    description: "Navigate the web safely, manage email, online security, and digital citizenship.",
    fullDescription: "Learn web browsing, email management, online safety, password security, recognizing phishing, and responsible internet usage.",
    icon: "🌐",
    duration: "Flexible",
    price: "$150",
    outcomes: [
      "Browse the internet safely and efficiently",
      "Create and manage email accounts",
      "Identify and avoid online scams",
      "Practice secure password management"
    ]
  },
  {
    title: "Microsoft Office",
    description: "Master Word, Excel, PowerPoint, and Outlook for professional productivity.",
    fullDescription: "Comprehensive training on Word document creation, Excel spreadsheets and formulas, PowerPoint presentations, and Outlook email management.",
    icon: "📊",
    duration: "Flexible",
    price: "$300",
    outcomes: [
      "Create professional documents in Word",
      "Build and analyze data in Excel",
      "Design engaging presentations in PowerPoint",
      "Manage emails and calendars in Outlook"
    ]
  },
  {
    title: "Cyber Security",
    description: "Protect yourself online: passwords, phishing, privacy, and safe browsing practices.",
    fullDescription: "Learn cybersecurity fundamentals, password best practices, recognizing phishing attacks, data privacy, secure browsing, and personal digital safety.",
    icon: "🔐",
    duration: "Flexible",
    price: "$500",
    outcomes: [
      "Create strong, secure passwords",
      "Identify and avoid phishing attacks",
      "Protect personal data online",
      "Understand cybersecurity best practices"
    ]
  },
  {
    title: "Software Quality Assurance",
    description: "Learn testing methodologies, bug reporting, and quality assurance processes.",
    fullDescription: "Master QA fundamentals, manual testing techniques, bug identification and reporting, test case creation, and quality assurance best practices.",
    icon: "✅",
    duration: "Flexible",
    price: "$500",
    outcomes: [
      "Understand QA and testing principles",
      "Create effective test cases",
      "Identify and report bugs professionally",
      "Apply quality assurance methodologies"
    ]
  },
  {
    title: "Business English",
    description: "Professional communication, business writing, and workplace English skills.",
    fullDescription: "Learn professional communication, business email writing, presentation skills, workplace etiquette, and effective business English.",
    icon: "📝",
    duration: "Flexible",
    price: "$100",
    outcomes: [
      "Write professional business emails",
      "Communicate effectively in meetings",
      "Deliver confident presentations",
      "Understand workplace communication norms"
    ]
  },
  {
    title: "Modern AI Tools",
    description: "AI productivity tools, prompt engineering, and AI fundamentals.",
    fullDescription: "Learn all modern AI productivity tools including ChatGPT, Google Gemini, Anthropic Claude, Manus, OpenAI, and other cutting-edge AI platforms. Master prompt engineering, AI fundamentals, and practical applications.",
    icon: "🤖",
    duration: "Flexible",
    price: "$500",
    outcomes: [
      "Understand AI and machine learning basics",
      "Use ChatGPT, Gemini, and Claude effectively",
      "Master prompt engineering across all platforms",
      "Apply multiple AI tools for different productivity tasks"
    ]
  }
];

export default function Home() {
  const [, setLocation] = useLocation();
  const { user, loading, error, isAuthenticated, logout } = useAuth();
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (card: GalleryCard) => {
    const course = coursesData.find(c => c.title.toLowerCase().includes(card.title.toLowerCase()) || card.id.includes(c.title.toLowerCase().split(' ')[0]));
    if (course) {
      setSelectedCourse(course);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="w-full">
      {/* Navigation Bar */}
      <div className="fixed top-0 w-full z-50">
        <Navigation />
      </div>

      {/* Spherical Gallery Hero Section */}
      <div className="w-full h-screen flex flex-col relative">
        <ClassicBookGallery cards={GALLERY_CARDS} onCardClick={handleCardClick} />
        <BookModal isOpen={isModalOpen} course={selectedCourse} onClose={() => setIsModalOpen(false)} />

        {/* Hero Text & CTA Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <div className="text-center space-y-6 max-w-2xl px-5 sm:px-8 py-7 sm:py-9 rounded-3xl bg-slate-950/65 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/30">
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
              Learn Technology<br />
              <span className="text-teal-400">From Scratch</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
              Master in-demand IT skills with industry-recognized certifications. Interactive learning designed for real-world success.
            </p>
            <div className="flex gap-4 justify-center pt-4 pointer-events-auto">
              <a href="/courses">
                <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg">
                  Explore Courses
                </button>
              </a>
              <a href="/contact">
                <button className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-3 rounded-lg transition-colors border border-white/40 backdrop-blur-sm">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Instructions Overlay */}
        <div className="fixed bottom-8 left-8 md:bottom-12 md:left-12 z-10 pointer-events-none">
          <div className="bg-black/40 backdrop-blur-md text-white text-sm px-4 py-2 rounded-lg border border-white/20">
            <p className="font-semibold">Drag to rotate • Scroll to zoom • Click to explore</p>
          </div>
        </div>
      </div>

      {/* ===== CORE MISSION SECTION ===== */}
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
            <div className="bg-white rounded-xl border border-border shadow-sm p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Simplify Learning</h3>
              <p className="text-foreground/70">
                We break down complex tech concepts into simple, digestible lessons that anyone can understand, regardless of background.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-border shadow-sm p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Build Real Skills</h3>
              <p className="text-foreground/70">
                Every course is designed with practical, hands-on projects that you'll actually use in your career and daily life.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-border shadow-sm p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Real-World Application</h3>
              <p className="text-foreground/70">
                Learn skills that directly apply to professional environments, with examples and case studies from actual industry scenarios.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-border shadow-sm p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Career Preparation</h3>
              <p className="text-foreground/70">
                We prepare you not just with technical knowledge, but with the confidence and professional skills needed to advance your career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== KEY PILLARS SECTION ===== */}
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
            <div className="bg-white rounded-xl border border-border shadow-sm p-8 text-center hover:shadow-lg transition-shadow border-t-4 border-primary">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-3xl font-bold mb-3 text-primary">Inspire</h3>
              <p className="text-foreground/70">
                We inspire confidence in every student, showing them that technology is accessible and achievable for everyone.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-border shadow-sm p-8 text-center hover:shadow-lg transition-shadow border-t-4 border-primary">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-3xl font-bold mb-3 text-primary">Learn</h3>
              <p className="text-foreground/70">
                We provide structured, practical learning experiences that build real skills and genuine understanding.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-border shadow-sm p-8 text-center hover:shadow-lg transition-shadow border-t-4 border-primary">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-3xl font-bold mb-3 text-primary">Succeed</h3>
              <p className="text-foreground/70">
                We empower you to succeed in your career with confidence, skills, and industry-recognized certifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="py-20 bg-white z-10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Student Success Stories
            </h2>
            <p className="text-lg text-foreground/70">
              Hear from students who have transformed their careers with IT Insight Academy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-background rounded-xl border border-border shadow-sm p-8 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground/80 mb-4 italic">
                "The courses are incredibly well-structured. I went from zero knowledge to getting my Microsoft certification in just 8 weeks!"
              </p>
              <p className="font-bold text-foreground">Sarah Johnson</p>
              <p className="text-sm text-foreground/60">Career Changer, Calgary</p>
            </div>

            <div className="bg-background rounded-xl border border-border shadow-sm p-8 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground/80 mb-4 italic">
                "Shoaib's teaching style is amazing. He breaks down complex topics so anyone can understand them. Highly recommended!"
              </p>
              <p className="font-bold text-foreground">Michael Chen</p>
              <p className="text-sm text-foreground/60">Student, Edmonton</p>
            </div>

            <div className="bg-background rounded-xl border border-border shadow-sm p-8 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground/80 mb-4 italic">
                "I got a 20% salary increase after completing the Excel and AI tools courses. Best investment I've made!"
              </p>
              <p className="font-bold text-foreground">Emma Rodriguez</p>
              <p className="text-sm text-foreground/60">Professional, Calgary</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INSTRUCTOR SECTION ===== */}
      <section className="py-20 bg-background z-10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
              Meet Your Instructor
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <img
                  src="/manus-storage/shoaib-hayat-portrait_ba3d72be.png"
                  alt="Shoaib Hayat"
                  className="w-full max-w-sm aspect-[3/4] rounded-lg shadow-lg object-cover object-top"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">Shoaib Hayat</h3>
                  <p className="text-primary font-semibold text-lg">Tech Education Specialist</p>
                </div>

                <p className="text-foreground/80 leading-relaxed">
                  With over a decade of experience in IT and professional development, Shoaib is passionate about making technology education accessible to everyone. He has trained hundreds of students and professionals, helping them achieve their career goals through practical, hands-on learning.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Microsoft Certified Trainer</p>
                      <p className="text-sm text-foreground/60">Official Microsoft training partner</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Google Career Coach</p>
                      <p className="text-sm text-foreground/60">Certified in Google Career Readiness</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">500+ Students Trained</p>
                      <p className="text-sm text-foreground/60">95% certification pass rate</p>
                    </div>
                  </div>
                </div>

                <a href="/contact">
                  <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 rounded-lg transition-colors">
                    Get Started Today <ChevronRight className="w-5 h-5 ml-2 inline" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-foreground text-background py-12 z-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">IT Insight Academy</h4>
              <p className="text-sm opacity-80">
                Learn Technology from Scratch. Master in-demand IT skills with industry-recognized certifications.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/courses" className="hover:text-primary transition-colors">Courses</a></li>
                <li><a href="/learning-methods" className="hover:text-primary transition-colors">Learning Methods</a></li>
                <li><a href="/certifications" className="hover:text-primary transition-colors">Certifications</a></li>
                <li><a href="/mission" className="hover:text-primary transition-colors">Our Mission</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:shoaib.hayyat@gmail.com" className="hover:text-primary transition-colors">
                    shoaib.hayyat@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+15147012500" className="hover:text-primary transition-colors">
                    +1 514 701 2500
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2026 IT Insight Academy. All rights reserved. | Learn Technology from Scratch</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
