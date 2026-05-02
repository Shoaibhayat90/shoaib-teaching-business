import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Zap, Users, Award, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design Philosophy: Modern Minimalist with Warm Accents
 * - Color Palette: Warm teal (#1B9B8F) primary, soft cream (#FBF8F3) background, coral orange (#FF6B5B) accents
 * - Typography: Outfit (bold headings), Inter (body text)
 * - Layout: Asymmetric hero, card-based courses, diagonal dividers
 * - Feel: Professional yet approachable, trustworthy yet energetic
 * - Branding: IT Insight Academy - Learn Technology from Scratch
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
              IT
            </div>
            <div className="flex flex-col leading-tight hidden sm:block">
              <span className="font-bold text-sm text-foreground">IT Insight Academy</span>
              <span className="text-xs text-primary font-medium">Learn Technology from Scratch</span>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors hidden sm:inline">
              About
            </a>
            <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors hidden sm:inline">
              Courses
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors hidden sm:inline">
              Testimonials
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
                  Welcome to IT Insight Academy
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

            {/* Right Profile Image - Professional Photo (Half) */}
            <div className="relative h-96 md:h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
                <img
                  src="/manus-storage/shoaib-casual-cropped_7738099e.png"
                  alt="Shoaib Hayat - IT Insight Academy Founder"
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
            {/* Level 1: Computer Basics */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-40 bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                <span className="text-5xl">💻</span>
              </div>
              <div className="p-8">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                  LEVEL 1
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Computer Basics</h3>
                <p className="text-foreground/70 mb-6 text-sm">
                  Perfect for complete beginners. Master the fundamentals of computers and technology.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="text-sm font-semibold text-foreground">What You'll Learn:</div>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Computer hardware & components</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Operating systems (Windows/Mac)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Internet, browsers & email</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Microsoft Office basics</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3 mb-6 pb-6 border-b border-border">
                  <div className="text-sm font-semibold text-foreground">Learning Outcomes:</div>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>✓ Confidently use a computer</li>
                    <li>✓ Navigate the internet safely</li>
                    <li>✓ Send emails & manage files</li>
                    <li>✓ Use basic productivity tools</li>
                  </ul>
                </div>

                <div className="text-xs text-foreground/60 mb-4">Duration: 8-10 weeks | Format: Group or 1-on-1</div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Explore Course
                </Button>
              </div>
            </Card>

            {/* Level 2: Intermediate Skills */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-primary">
              <div className="h-40 bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center">
                <span className="text-5xl">🚀</span>
              </div>
              <div className="p-8">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                  LEVEL 2 - POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Intermediate Skills</h3>
                <p className="text-foreground/70 mb-6 text-sm">
                  Build practical skills with productivity tools, design basics, and digital literacy.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="text-sm font-semibold text-foreground">What You'll Learn:</div>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Advanced Excel & Google Sheets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>PowerPoint presentations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Canva for graphic design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Digital safety & cybersecurity</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3 mb-6 pb-6 border-b border-border">
                  <div className="text-sm font-semibold text-foreground">Learning Outcomes:</div>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>✓ Create professional documents</li>
                    <li>✓ Analyze data with spreadsheets</li>
                    <li>✓ Design visual content</li>
                    <li>✓ Stay safe online</li>
                  </ul>
                </div>

                <div className="text-xs text-foreground/60 mb-4">Duration: 8-10 weeks | Format: Group or 1-on-1</div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Explore Course
                </Button>
              </div>
            </Card>

            {/* Level 3: AI & Advanced Tech */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-40 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <span className="text-5xl">🤖</span>
              </div>
              <div className="p-8">
                <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold mb-3">
                  LEVEL 3 - ADVANCED
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">AI & Advanced Tech</h3>
                <p className="text-foreground/70 mb-6 text-sm">
                  Master emerging technologies and prepare for the future of work.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="text-sm font-semibold text-foreground">What You'll Learn:</div>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>AI fundamentals & ChatGPT</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Image generation tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Python programming basics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Automation & workflow tools</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3 mb-6 pb-6 border-b border-border">
                  <div className="text-sm font-semibold text-foreground">Learning Outcomes:</div>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>✓ Leverage AI for productivity</li>
                    <li>✓ Understand machine learning</li>
                    <li>✓ Write basic Python code</li>
                    <li>✓ Automate repetitive tasks</li>
                  </ul>
                </div>

                <div className="text-xs text-foreground/60 mb-4">Duration: 10-12 weeks | Format: Group or 1-on-1</div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Explore Course
                </Button>
              </div>
            </Card>
          </div>

          {/* Tech Expertise Showcase */}
          <div className="mt-16 py-12 rounded-2xl overflow-hidden relative">
            <img
              src="/manus-storage/shoaib-tech-expertise_b016d69d.png"
              alt="Shoaib's Tech Expertise - Algorithms, Data Structures, and Advanced Concepts"
              className="w-full h-auto object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent rounded-2xl" />
            <div className="absolute inset-0 flex items-center justify-start p-8 md:p-12">
              <div className="max-w-xl">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Expert Knowledge Across All Tech Domains
                </h3>
                <p className="text-lg text-white/90">
                  From fundamental algorithms to advanced data structures, operating systems to networking—master the complete tech stack with guidance from someone who understands it all.
                </p>
              </div>
            </div>
          </div>

          {/* Mini-Courses */}
          <div className="mt-16 pt-16 border-t border-border/30">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
              Specialized Mini-Courses
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-lg bg-white/50 border border-border hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">👴</div>
                <h4 className="font-bold text-foreground mb-2">Tech for Seniors</h4>
                <p className="text-sm text-foreground/70">4-6 weeks | Tailored for older adults</p>
              </div>
              <div className="p-6 rounded-lg bg-white/50 border border-border hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">📱</div>
                <h4 className="font-bold text-foreground mb-2">Social Media Mastery</h4>
                <p className="text-sm text-foreground/70">4-6 weeks | Facebook, Instagram, TikTok</p>
              </div>
              <div className="p-6 rounded-lg bg-white/50 border border-border hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">🔒</div>
                <h4 className="font-bold text-foreground mb-2">Cybersecurity Basics</h4>
                <p className="text-sm text-foreground/70">4-6 weeks | Stay safe online</p>
              </div>
              <div className="p-6 rounded-lg bg-white/50 border border-border hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">💼</div>
                <h4 className="font-bold text-foreground mb-2">Freelancing with Tech</h4>
                <p className="text-sm text-foreground/70">4-6 weeks | Build your online career</p>
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              What Students Say
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Real feedback from learners who've transformed their tech skills with IT Insight Academy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-l-4 border-primary">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-foreground/80 mb-4 italic">
                "Mr. Shoaib Hayat was my first instructor. I had a fantastic experience with him as a teacher. He was always helpful and timely with responses as well as having conducted the course material in a very clear and concise way."
              </p>
              <p className="font-semibold text-foreground">Rose Jurtsuk</p>
            </Card>

            <Card className="p-8 border-l-4 border-primary">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-foreground/80 mb-4 italic">
                "Mr. Shoaib Hayat expertise and kindness made returning to post secondary as a mature student a pleasant and engaging transition. I am thankful for their patience and ongoing support."
              </p>
              <p className="font-semibold text-foreground">Emma Y</p>
            </Card>

            <Card className="p-8 border-l-4 border-primary">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-foreground/80 mb-4 italic">
                "Mr. Shoaib Hayat was my instructor and I couldn't have asked for a better start. He is knowledgeable, supportive and always available to address concerns. He takes the time to ensure his students fully understand the material."
              </p>
              <p className="font-semibold text-foreground">Rachel Anne</p>
            </Card>

            <Card className="p-8 border-l-4 border-primary">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-foreground/80 mb-4 italic">
                "I appreciate my Instructor Shoaib Hayat's dedication to his students' success. He's always available to answer questions and provide support. He explains concepts clearly and demonstrates great expertise in his field."
              </p>
              <p className="font-semibold text-foreground">Ruthie Taday</p>
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
        id="contact"
        className="py-20 relative"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663595675120/jsnE2mQCg3EKG4kieWXE3D/cta-section-bg-dFyBi7gKJhNqLmOpQrStUv.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/95" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Start Learning?
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              Join IT Insight Academy and transform your tech skills. Whether you're a complete beginner or looking to master AI, we have the perfect course for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Schedule Free Consultation <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                View All Courses
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-border/30">
              <div className="flex flex-col items-center gap-3">
                <Mail className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm text-foreground/70">Email</p>
                  <p className="font-semibold text-foreground">shoaib.hayyat@gmail.com</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Phone className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm text-foreground/70">Phone</p>
                  <p className="font-semibold text-foreground">514-701-2500</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <MapPin className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm text-foreground/70">Location</p>
                  <p className="font-semibold text-foreground">Calgary, AB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  IT
                </div>
                <span className="font-bold text-foreground">IT Insight Academy</span>
              </div>
              <p className="text-sm text-foreground/70">Learn Technology from Scratch</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Courses</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-primary transition-colors">Computer Basics</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Intermediate Skills</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">AI & Advanced Tech</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-primary transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/70">
            <p>&copy; 2026 IT Insight Academy. Learn Technology from Scratch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
