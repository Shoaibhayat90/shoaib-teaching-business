import { ChevronRight, Zap, Users, Award, Mail, Phone, MapPin, CheckCircle, Clock, DollarSign, BookOpen, Lightbulb, Rocket, Brain, Linkedin, Youtube, Instagram } from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Navigation } from "@/components/Navigation";

/**
 * Design Philosophy: Mission-Driven Tech Education
 * - Core Structure: Mission → Courses → Learning Methods → Key Pillars → Slogans
 * - Color Palette: Teal (#1B9B8F), Coral (#FF6B5B), Dark Slate (#2C3E50)
 * - Typography: Bold mission statements, clear course descriptions
 * - Layout: Hierarchical, mission-focused, action-oriented
 * - Feel: Professional, inspiring, growth-oriented
 */

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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation showFullNav={true} />

      {/* Hero Section */}
      <section
        className="relative pt-40 pb-20 overflow-hidden"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663595675120/jsnE2mQCg3EKG4kieWXE3D/hero-background-HgFf8FtouiYeGiHTJh2txR.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="container relative z-10">
          <AnimatedIconCarousel />
          <div className="max-w-2xl">
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
                We empower beginners, students, and job seekers with practical IT skills designed for real-world success. Earn industry-recognized certifications from Microsoft and Google. Simple, structured, and focused on your growth.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Get Started Today <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
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
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Simplify Learning</h3>
              <p className="text-foreground/70">
                We break down complex tech concepts into simple, digestible lessons that anyone can understand, regardless of background.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Build Real Skills</h3>
              <p className="text-foreground/70">
                Every course is designed with practical, hands-on projects that you'll actually use in your career and daily life.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Real-World Application</h3>
              <p className="text-foreground/70">
                Learn skills that directly apply to professional environments, with examples and case studies from actual industry scenarios.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
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
            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-t-4 border-primary">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-3xl font-bold mb-3 text-primary">Inspire</h3>
              <p className="text-foreground/70">
                We inspire confidence in every student, showing them that technology is accessible and achievable for everyone.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-t-4 border-primary">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-3xl font-bold mb-3 text-primary">Learn</h3>
              <p className="text-foreground/70">
                We provide structured, practical learning experiences that build real skills and genuine understanding.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-t-4 border-primary">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-3xl font-bold mb-3 text-primary">Innovate</h3>
              <p className="text-foreground/70">
                We stay ahead of tech trends, teaching modern tools and methodologies that prepare you for the future.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-white z-10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Most Popular Courses
            </h2>
            <p className="text-lg text-foreground/70">
              Start with any of these industry-leading courses designed to get you certified and career-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Course 1 */}
            <div className="bg-background rounded-xl p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Microsoft Office</h3>
              <p className="text-foreground/70 mb-6">Master Word, Excel, PowerPoint, and Outlook for professional productivity.</p>
              <div className="space-y-2 mb-6 text-sm text-foreground/60">
                <p>✓ Professional document creation</p>
                <p>✓ Data analysis & spreadsheets</p>
                <p>✓ Engaging presentations</p>
              </div>
              <a href="/courses" className="text-primary font-semibold hover:text-primary/80 transition">View All Courses →</a>
            </div>

            {/* Course 2 */}
            <div className="bg-background rounded-xl p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Cyber Security</h3>
              <p className="text-foreground/70 mb-6">Protect yourself online: passwords, phishing, privacy, and safe browsing.</p>
              <div className="space-y-2 mb-6 text-sm text-foreground/60">
                <p>✓ Strong password creation</p>
                <p>✓ Phishing identification</p>
                <p>✓ Data protection best practices</p>
              </div>
              <a href="/courses" className="text-primary font-semibold hover:text-primary/80 transition">View All Courses →</a>
            </div>

            {/* Course 3 */}
            <div className="bg-background rounded-xl p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Modern AI Tools</h3>
              <p className="text-foreground/70 mb-6">Master ChatGPT, Gemini, Claude, and other cutting-edge AI platforms.</p>
              <div className="space-y-2 mb-6 text-sm text-foreground/60">
                <p>✓ Prompt engineering</p>
                <p>✓ AI fundamentals</p>
                <p>✓ Productivity automation</p>
              </div>
              <a href="/courses" className="text-primary font-semibold hover:text-primary/80 transition">View All Courses →</a>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="/courses">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Explore All 7 Courses <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="py-20 bg-white z-10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Success Stories from Our Students
            </h2>
            <p className="text-lg text-foreground/70">
              Hear from real students who have transformed their careers with IT Insight Academy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-background rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "IT Insight Academy completely changed my career path. The hands-on approach and personalized attention helped me land my dream job in IT support. Highly recommended!"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">Sarah Johnson</p>
                <p className="text-sm text-foreground/60">IT Support Specialist</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-background rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "As someone with no tech background, I was nervous. But Shoaib's teaching style made everything clear and simple. I'm now confident using Microsoft Office professionally!"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">Michael Chen</p>
                <p className="text-sm text-foreground/60">Administrative Professional</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-background rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "The one-on-one sessions were perfect for my busy schedule. I earned my Google IT Support Professional certification and got a 15% salary increase!"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">Emily Rodriguez</p>
                <p className="text-sm text-foreground/60">IT Support Professional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor About Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5 z-10">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Instructor Image */}
              <div className="flex justify-center">
                <img
                  src="/manus-storage/IMG_0190_1ebad8b7.PNG"
                  alt="Shoaib Hayat - Tech Instructor"
                  className="w-64 h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Instructor Info */}
              <div>
                <h2 className="text-4xl font-bold mb-4 text-foreground">
                  Meet Your Instructor
                </h2>
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  Shoaib Hayat
                </h3>
                <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                  Shoaib Hayat is a passionate tech educator with years of experience helping beginners master IT fundamentals and earn industry-recognized certifications. His teaching philosophy centers on making complex technology concepts accessible and practical.
                </p>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  With a deep commitment to student success, Shoaib has guided hundreds of learners through their tech journey—from absolute beginners to certified professionals. He specializes in Microsoft Office, cybersecurity, IT support, and modern AI tools.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Certified IT Professional</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Google & Microsoft Certified Trainer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-foreground">10+ Years of Teaching Experience</span>
                  </div>
                </div>
                <a href="/contact" className="mt-8 inline-block">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Learn from Shoaib Today
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background z-10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Transform Your Tech Skills?
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              Join hundreds of students who have already started their journey with IT Insight Academy. Let's learn smart, grow fast, and succeed together.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get Started Today <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background z-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">IT Insight Academy</h4>
              <p className="text-background/80">Learn Technology from Scratch</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="/courses" className="hover:text-background transition">Courses</a></li>
                <li><a href="/learning-methods" className="hover:text-background transition">Learning Methods</a></li>
                <li><a href="/certifications" className="hover:text-background transition">Certifications</a></li>
                <li><a href="/mission" className="hover:text-background transition">Our Mission</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-3 text-background/80">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:info@itinsightacademy.com" className="hover:text-background transition">info@itinsightacademy.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+15147012500" className="hover:text-background transition">+1 514 701 2500</a>
                </li>
              </ul>
              <a href="/contact">
                <Button size="sm" className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get Started
                </Button>
              </a>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8">
            <div className="flex justify-center gap-6 mb-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition" title="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition" title="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition" title="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="text-center text-background/80">
              <p>&copy; 2026 IT Insight Academy. All rights reserved. Learn Smart. Grow Fast. Succeed.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
