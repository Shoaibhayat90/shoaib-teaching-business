import React, { useRef, useEffect } from 'react';
import { SphericalGallery } from '@/components/SphericalGallery';
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

export default function Home() {
  const [, setLocation] = useLocation();
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  const handleCardClick = (card: GalleryCard) => {
    // Navigate to course detail page
    setLocation(`/courses#${card.id}`);
  };

  return (
    <div className="w-full">
      {/* Navigation Bar */}
      <div className="fixed top-0 w-full z-50">
        <Navigation />
      </div>

      {/* Spherical Gallery Hero Section */}
      <div className="w-full h-screen flex flex-col">
        <SphericalGallery cards={GALLERY_CARDS} onCardClick={handleCardClick} />

        {/* Instructions Overlay */}
        <div className="fixed bottom-8 left-8 text-white text-sm z-10 pointer-events-none">
          <p className="font-semibold text-shadow">Drag to rotate • Scroll to zoom • Click to explore</p>
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
                  src="/manus-storage/IMG_0190_8664fe11.png"
                  alt="Shoaib Hayat"
                  className="w-full max-w-sm rounded-lg shadow-lg object-cover"
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
                  <a href="mailto:info@itinsightacademy.com" className="hover:text-primary transition-colors">
                    info@itinsightacademy.com
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
