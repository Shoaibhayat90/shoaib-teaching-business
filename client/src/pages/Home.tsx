import { ChevronRight, Zap, Users, Award, Mail, Phone, MapPin, CheckCircle, Clock, DollarSign, BookOpen, Lightbulb, Rocket, Brain } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background backdrop-blur-md z-50 border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src="/manus-storage/logo-option-2_8664fe11.png" alt="IT Insight Academy" className="w-12 h-12 object-contain" />
            <div className="flex flex-col gap-0.5 hidden sm:block">
              <span className="font-bold text-sm text-foreground">IT Insight Academy</span>
              <div className="h-px bg-border/30 w-12" />
              <span className="text-xs text-primary font-medium">Learn Technology from Scratch</span>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <a href="/mission" className="text-sm font-medium hover:text-primary transition-colors hidden sm:inline">
              Our Mission
            </a>
            <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors hidden sm:inline">
              Courses
            </a>
            <a href="#methods" className="text-sm font-medium hover:text-primary transition-colors hidden sm:inline">
              Learning
            </a>
            <a href="#pillars" className="text-sm font-medium hover:text-primary transition-colors hidden sm:inline">
              Pillars
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

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
        <div className="absolute inset-0 left-0 w-2/3 bg-gradient-to-r from-background/95 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-b from-white/5 via-white/10 to-white/5 flex items-center justify-center pr-12">
          <div className="relative w-80 h-80">
            {/* AI Tools Row */}
            <div className="absolute top-4 left-0 right-0 flex justify-around items-start">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663595675120/jsnE2mQCg3EKG4kieWXE3D/minsk-belarus-openai-chatgpt-logo-artifical-chatbot-system-chat-bot-button-web-app-phone-icon-symbol-editorial-vector-278857334-URJBYUioRsk6CVrYoviprD.webp" alt="ChatGPT" className="w-12 h-12 opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663595675120/jsnE2mQCg3EKG4kieWXE3D/gemini_aurora_thumbnail_4g_e74822ff0ca4259beb718-URJBYUioRsk6CVrYoviprD.png" alt="Gemini" className="w-12 h-12 opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663595675120/jsnE2mQCg3EKG4kieWXE3D/claude-logo-png_seeklogo-554540-URJBYUioRsk6CVrYoviprD.png" alt="Claude" className="w-12 h-12 opacity-70 hover:opacity-100 transition-opacity" />
            </div>
            {/* Middle Row */}
            <div className="absolute top-1/3 left-0 right-0 flex justify-around items-center">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663595675120/jsnE2mQCg3EKG4kieWXE3D/pi6jTImSRZx12uZHAflnZa8GMA-URJBYUioRsk6CVrYoviprD.avif" alt="Manus" className="w-12 h-12 opacity-70 hover:opacity-100 transition-opacity" />
              <span className="text-4xl">✨</span>
              <span className="text-4xl">⚡</span>
            </div>
            {/* Microsoft Office Row */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-around items-end">
              <span className="text-4xl">📊</span>
              <span className="text-4xl">📄</span>
              <span className="text-4xl">📈</span>
            </div>
          </div>
        </div>
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
                We empower beginners, students, and job seekers with practical IT skills designed for real-world success. Simple, structured, and focused on your growth.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Start Learning <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  Schedule Free Consultation
                </Button>
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

      {/* Courses & Subjects Section */}
      <section id="courses" className="py-20 bg-background z-10 scroll-mt-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Courses & Subjects
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Seven comprehensive courses designed to take you from beginner to confident tech professional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Basic Computer Skills",
                description: "Master hardware, operating systems, file management, and essential computer fundamentals.",
                details: "Learn about computer hardware components, Windows/Mac operating systems, file management, internet basics, and keyboard shortcuts.",
                outcomes: ["Understand computer hardware and components", "Navigate operating systems confidently", "Manage files and folders efficiently", "Use keyboard shortcuts for productivity"],
                icon: "💻",
                duration: "Flexible",
                price: "$200",
                slug: "basic-computer-skills"
              },
              {
                title: "Internet Usage",
                description: "Navigate the web safely, manage email, online security, and digital citizenship.",
                details: "Learn web browsing, email management, online safety, password security, recognizing phishing, and responsible internet usage.",
                outcomes: ["Browse the internet safely and efficiently", "Create and manage email accounts", "Identify and avoid online scams", "Practice secure password management"],
                icon: "🌐",
                duration: "Flexible",
                price: "$150",
                slug: "internet-usage"
              },
              {
                title: "Microsoft Office",
                description: "Master Word, Excel, PowerPoint, and Outlook for professional productivity.",
                details: "Comprehensive training on Word document creation, Excel spreadsheets and formulas, PowerPoint presentations, and Outlook email management.",
                outcomes: ["Create professional documents in Word", "Build and analyze data in Excel", "Design engaging presentations in PowerPoint", "Manage emails and calendars in Outlook"],
                icon: "📊",
                duration: "Flexible",
                price: "$300",
                slug: "microsoft-office"
              },
              {
                title: "Cyber Security",
                description: "Protect yourself online: passwords, phishing, privacy, and safe browsing practices.",
                details: "Learn cybersecurity fundamentals, password best practices, recognizing phishing attacks, data privacy, secure browsing, and personal digital safety.",
                outcomes: ["Create strong, secure passwords", "Identify and avoid phishing attacks", "Protect personal data online", "Understand cybersecurity best practices"],
                icon: "🔐",
                duration: "Flexible",
                price: "$500",
                slug: "cyber-security"
              },
              {
                title: "Software Quality Assurance",
                description: "Learn testing methodologies, bug reporting, and quality assurance processes.",
                details: "Master QA fundamentals, manual testing techniques, bug identification and reporting, test case creation, and quality assurance best practices.",
                outcomes: ["Understand QA and testing principles", "Create effective test cases", "Identify and report bugs professionally", "Apply quality assurance methodologies"],
                icon: "✅",
                duration: "Flexible",
                price: "$500",
                slug: "software-qa"
              },
              {
                title: "Business English",
                description: "Professional communication, business writing, and workplace English skills.",
                details: "Learn professional communication, business email writing, presentation skills, workplace etiquette, and effective business English.",
                outcomes: ["Write professional business emails", "Communicate effectively in meetings", "Deliver confident presentations", "Understand workplace communication norms"],
                icon: "📝",
                duration: "Flexible",
                price: "$100",
                slug: "business-english"
              },
              {
                title: "Modern AI Tools",
                description: "AI productivity tools, prompt engineering, and AI fundamentals.",
                details: "Explore AI fundamentals, ChatGPT usage, prompt engineering techniques, AI productivity tools, and practical AI applications.",
                outcomes: ["Understand AI and machine learning basics", "Use ChatGPT effectively", "Master prompt engineering", "Apply AI tools for productivity"],
                icon: "🤖",
                duration: "Flexible",
                price: "$500",
                slug: "modern-ai-tools"
              }
            ].map((course, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{course.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{course.title}</h3>
                <p className="text-foreground/70 mb-4">{course.description}</p>
                <div className="flex justify-between items-center text-sm text-primary font-semibold mb-4">
                  <span>⏱️ {course.duration}</span>
                  <span>💰 {course.price}</span>
                </div>
                <a href={`/course/${course.slug}`} className="w-full">
                  <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Get Started
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Methods Section */}
      <section id="methods" className="py-20 bg-white z-10 scroll-mt-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Learning Methods
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Choose the learning format that works best for your lifestyle and learning style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">👤</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">One-on-One Sessions</h3>
              <p className="text-foreground/70 mb-6">Personalized instruction tailored to your pace and learning style. Perfect for busy professionals.</p>
              <a href="/one-on-one" className="w-full">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Learn More
                </Button>
              </a>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">In-Person Home Tutoring</h3>
              <p className="text-foreground/70 mb-6">Learn in the comfort of your own home with face-to-face instruction from our expert instructors.</p>
              <a href="/home-tutoring" className="w-full">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Learn More
                </Button>
              </a>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Live Online Classes</h3>
              <p className="text-foreground/70 mb-6">Join interactive online sessions from anywhere. Great for remote learners who want community support.</p>
              <a href="/online-classes" className="w-full">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Learn More
                </Button>
              </a>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">👨‍🏫</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Instructor-Led Training</h3>
              <p className="text-foreground/70 mb-6">Real-time instruction that replicates a classroom experience with peer interaction and group learning.</p>
              <a href="/instructor-led" className="w-full">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Learn More
                </Button>
              </a>
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

      {/* Slogans Section */}
      <section className="py-20 bg-white z-10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl">
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">Learn Smart</h3>
                <p className="text-foreground/70">Efficient, structured learning that respects your time.</p>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl">
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">Grow Fast</h3>
                <p className="text-foreground/70">Accelerate your skills and career with intensive, focused training.</p>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl">
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">Succeed</h3>
                <p className="text-foreground/70">Achieve your goals with confidence and professional readiness.</p>
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
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started Today <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Free Consultation
              </Button>
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
                <li><a href="#courses" className="hover:text-background transition">Courses</a></li>
                <li><a href="#methods" className="hover:text-background transition">Learning Methods</a></li>
                <li><a href="#pillars" className="hover:text-background transition">Our Pillars</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-background/80">Ready to start learning?</p>
              <Button size="sm" className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/80">
            <p>&copy; 2026 IT Insight Academy. All rights reserved. Learn Smart. Grow Fast. Succeed.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
