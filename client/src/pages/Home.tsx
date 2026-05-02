import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Zap, Users, Award, Mail, Phone, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design Philosophy: Modern Minimalist with Warm Accents
 * - Color Palette: Warm teal (#1B9B8F) primary, soft cream (#FBF8F3) background, coral orange (#FF6B5B) accents
 * - Typography: Outfit (bold headings), Inter (body text)
 * - Layout: Asymmetric hero, card-based courses, diagonal dividers
 * - Feel: Professional yet approachable, trustworthy yet energetic
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
              SH
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">Shoaib Hayat</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors hidden sm:inline">
              About
            </a>
            <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors hidden sm:inline">
              Courses
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors hidden sm:inline">
              Contact
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663595675120/jsnE2mQCg3EKG4kieWXE3D/hero-background-HgFf8FtouiYeGiHTJh2txR.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  Welcome to Tech Education
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
                Learn Technology<br />
                <span className="text-primary">From Scratch</span>
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
                Master computer skills and AI with personalized instruction designed for beginners. Whether you're a student or adult, I'll guide you from basics to expertise with patience and clarity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Start Learning <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Schedule Demo
                </Button>
              </div>
            </div>

            {/* Right Profile Image */}
            <div className="relative h-96 md:h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
                <img
                  src="/manus-storage/shoaib-profile_d2b4ad95.png"
                  alt="Shoaib Hayat - Tech Education Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagonal Divider */}
      <div className="h-20 bg-gradient-to-b from-background to-white relative">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <polygon points="0,50 1200,0 1200,100 0,100" fill="white" />
        </svg>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Your Instructor
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              With 5+ years of experience in quality assurance, education, and curriculum development, I combine technical expertise with proven teaching methodologies to make technology accessible to everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Expert Instructor</h3>
              <p className="text-foreground/70">
                Master's degree in Systems Quality Engineering with proven expertise in IT, QA, and business courses.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Student-Centered</h3>
              <p className="text-foreground/70">
                Personalized learning paths tailored to your pace and goals, whether you're a child or adult.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Practical Skills</h3>
              <p className="text-foreground/70">
                Hands-on instruction with real-world applications, from computer basics to advanced AI concepts.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Diagonal Divider */}
      <div className="h-20 bg-gradient-to-b from-white to-background relative">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <polygon points="0,0 1200,50 1200,100 0,100" fill="white" />
        </svg>
      </div>

      {/* Courses Section */}
      <section
        id="courses"
        className="py-20 relative"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663595675120/jsnE2mQCg3EKG4kieWXE3D/courses-section-bg-F9fNiWuUaVVhnmUvT5biuK.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/95" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Learning Pathways
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Structured courses designed to take you from complete beginner to confident tech user or advanced professional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Beginner Course */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-40 bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                <span className="text-5xl">💻</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Computer Basics</h3>
                <p className="text-foreground/70 mb-6">
                  Perfect for complete beginners. Learn hardware, software, internet, and essential applications.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-foreground/70">
                  <li>✓ Computer fundamentals</li>
                  <li>✓ Operating systems</li>
                  <li>✓ Internet & email</li>
                  <li>✓ Office applications</li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Explore Course
                </Button>
              </div>
            </Card>

            {/* Intermediate Course */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-primary">
              <div className="h-40 bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center">
                <span className="text-5xl">🚀</span>
              </div>
              <div className="p-8">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                  POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Intermediate Skills</h3>
                <p className="text-foreground/70 mb-6">
                  Build practical skills with productivity tools, design basics, and digital literacy.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-foreground/70">
                  <li>✓ Advanced Office tools</li>
                  <li>✓ Design fundamentals</li>
                  <li>✓ Web basics</li>
                  <li>✓ Digital security</li>
                </ul>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Explore Course
                </Button>
              </div>
            </Card>

            {/* Advanced Course */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-40 bg-gradient-to-br from-primary/80 to-accent/60 flex items-center justify-center">
                <span className="text-5xl">🤖</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-foreground">AI & Advanced Tech</h3>
                <p className="text-foreground/70 mb-6">
                  Master emerging technologies including AI, automation, and advanced programming concepts.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-foreground/70">
                  <li>✓ AI fundamentals</li>
                  <li>✓ Machine learning basics</li>
                  <li>✓ Programming intro</li>
                  <li>✓ Tech trends & future</li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Explore Course
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Diagonal Divider */}
      <div className="h-20 bg-gradient-to-b from-background to-white relative">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <polygon points="0,50 1200,0 1200,100 0,100" fill="white" />
        </svg>
      </div>

      {/* Testimonials Section */}
      <section
        className="py-20 bg-white relative"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663595675120/jsnE2mQCg3EKG4kieWXE3D/testimonials-bg-b4N7nXBfzjC75DmLzR5PVi.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/90" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Student Success Stories
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              See how students of all ages have transformed their relationship with technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-l-4 border-primary">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-lg font-bold text-primary">
                  RJ
                </div>
                <div>
                  <p className="font-bold text-foreground">Rose Jurtsuk</p>
                  <p className="text-sm text-foreground/60">CDI College Student</p>
                </div>
              </div>
              <p className="text-foreground/70">
                "Mr. Shoaib Hayat was my first instructor. I had a fantastic experience with him as a teacher. He was always helpful and timely with responses as well as having conducted the course material in a very clear and concise way."
              </p>
              <div className="mt-3 text-primary text-sm">★★★★★</div>
            </Card>

            <Card className="p-8 border-l-4 border-accent">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-lg font-bold text-accent">
                  EY
                </div>
                <div>
                  <p className="font-bold text-foreground">Emma Y</p>
                  <p className="text-sm text-foreground/60">Mature Student</p>
                </div>
              </div>
              <p className="text-foreground/70">
                "Mr. Shoaib Hayat expertise and kindness made returning to post secondary as a mature student a pleasant and engaging transition. I am thankful for his patience and ongoing support."
              </p>
              <div className="mt-3 text-accent text-sm">★★★★★</div>
            </Card>

            <Card className="p-8 border-l-4 border-primary">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-lg font-bold text-primary">
                  RA
                </div>
                <div>
                  <p className="font-bold text-foreground">Rachel Anne</p>
                  <p className="text-sm text-foreground/60">CDI College Student</p>
                </div>
              </div>
              <p className="text-foreground/70">
                "Mr. Shoaib Hayat was my instructor and I couldn't have asked for a better start. He is knowledgeable, supportive and always available to address concerns. His professionalism truly stands out."
              </p>
              <div className="mt-3 text-primary text-sm">★★★★★</div>
            </Card>

            <Card className="p-8 border-l-4 border-accent">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-lg font-bold text-accent">
                  NN
                </div>
                <div>
                  <p className="font-bold text-foreground">Naseema Nazary</p>
                  <p className="text-sm text-foreground/60">CDI College Student</p>
                </div>
              </div>
              <p className="text-foreground/70">
                "SHOAIB HAYAT is an amazing instructor! He is an excellent knowledgeable and skilled instructor. His guidance and encouragement make learning easier and boost my confidence."
              </p>
              <div className="mt-3 text-accent text-sm">★★★★★</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Diagonal Divider */}
      <div className="h-20 bg-gradient-to-b from-white to-background relative">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <polygon points="0,0 1200,50 1200,100 0,100" fill="white" />
        </svg>
      </div>

      {/* CTA Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663595675120/jsnE2mQCg3EKG4kieWXE3D/cta-section-bg-dYShhvYuikyXsqpPzocUyy.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Master Technology?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Join students of all ages who are transforming their tech skills. Schedule your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Schedule Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-foreground text-background py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-lg font-bold mb-4">Shoaib Hayat</h3>
              <p className="text-background/80 leading-relaxed">
                Tech Education Specialist dedicated to making technology accessible and enjoyable for everyone.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#about" className="hover:text-background transition-colors">About</a></li>
                <li><a href="#courses" className="hover:text-background transition-colors">Courses</a></li>
                <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <div className="space-y-3 text-background/80">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4" />
                  <span>514-701-2500</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4" />
                  <span>shoaib.hayyat@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4" />
                  <span>Calgary, AB</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>&copy; 2026 Shoaib Hayat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
