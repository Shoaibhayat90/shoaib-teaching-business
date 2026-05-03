import { Card } from "@/components/ui/card";
import { ChevronRight, Zap, Users, Award, Mail, Phone, MapPin, CheckCircle, Clock, DollarSign, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design Philosophy: Modern Minimalist with Warm Accents
 * - Color Palette: Warm teal (#1B9B8F) primary, soft cream (#FBF8F3) background, coral orange (#FF6B5B) accents
 * - Typography: Outfit (bold headings), Inter (body text)
 * - Layout: Asymmetric hero, card-based courses, diagonal dividers
 * - Feel: Professional yet approachable, trustworthy yet energetic
 * - Branding: IT Insight Academy - Learn Technology from Scratch
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

      {/* Hero Section - No Photo */}
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
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
        <div className="container relative z-10">
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
                A practical IT learning platform focused on helping beginners, students, and job seekers build real-world skills that lead to career opportunities. Simple, structured, and designed for people with little to no technical background.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Start Learning <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Schedule Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* About Section */}
      <section id="about" className="py-20 bg-white scroll-mt-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About IT Insight Academy
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              We are a passionate team of IT educators focused on helping beginners, students, and job seekers build real-world skills that lead to career opportunities. Our training is simple, structured, and designed for people with little to no technical background.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Our mission is not just to teach theory, but to prepare students for real-life work environments by providing clear guidance, hands-on learning, and career-focused training. We're committed to making tech education accessible and engaging for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Expert Instructor</h3>
              <p className="text-foreground/70">
                Master's degree in Systems Quality Engineering with 5+ years of experience in IT, QA, and education.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Flexible Learning</h3>
              <p className="text-foreground/70">
                One-on-one tutoring, in-home sessions, live online classes, and group learning options tailored to your needs.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Job-Ready Skills</h3>
              <p className="text-foreground/70">
                Hands-on instruction with real-world applications, from computer basics to advanced AI and professional skills.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Teaching Style Section with Photo */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Photo */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/manus-storage/shoaib-teaching-online-no-iphone_e6110133.png"
                  alt="Shoaib teaching online with headphones and laptop"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <div>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold inline-block mb-4">
                  My Teaching Approach
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Learn at Your Own Pace
                </h2>
              </div>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We believe in creating a comfortable, judgment-free learning environment where every student feels supported. Whether you're learning online or in person, we adapt our teaching style to match your learning pace and preferences.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Patient & Supportive</h4>
                    <p className="text-foreground/70 text-sm">No question is too basic. We explain concepts multiple times in different ways until you truly understand.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Flexible Scheduling</h4>
                    <p className="text-foreground/70 text-sm">Students choose their own class times. Online or in-person, group or one-on-one—whatever works best for you.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Real-World Focus</h4>
                    <p className="text-foreground/70 text-sm">Learn skills you'll actually use, with practical projects and hands-on examples for real-life work environments.</p>
                  </div>
                </div>
              </div>
            </div>
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
        className="py-20 relative scroll-mt-20"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663595675120/jsnE2mQCg3EKG4kieWXE3D/courses-section-bg-F9fNiWuUaVVhnmUvT5biuK.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Course Pathways
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Structured learning pathways from computer basics to advanced AI. Each course is designed for practical, job-ready skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Level 1 */}
            <Card className="p-8 hover:shadow-xl transition-shadow border-t-4 border-primary">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-foreground">Level 1</h3>
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">Computer Basics</h4>
              <p className="text-foreground/70 mb-6 text-sm">
                Master the fundamentals: hardware, operating systems, internet basics, and essential office applications.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>8 Weeks</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <DollarSign className="w-4 h-4 text-primary" />
                  <span>$200/course (Group) | $55/hour (1-on-1)</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h5 className="font-semibold text-foreground mb-3 text-sm">Topics Covered:</h5>
                <div className="space-y-2 text-sm text-foreground/70">
                  <div>
                    <p className="font-medium text-foreground">Computer Hardware</p>
                    <p className="text-xs ml-2">• CPU, RAM, Storage, Peripherals • How computers work</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Operating Systems</p>
                    <p className="text-xs ml-2">• Windows & Mac basics • File management • System settings</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Internet & Email</p>
                    <p className="text-xs ml-2">• Web browsers • Email setup & management • Online safety</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Microsoft Office</p>
                    <p className="text-xs ml-2">• Word basics • Excel fundamentals • PowerPoint intro</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6 p-3 bg-primary/5 rounded-lg">
                <p className="text-xs font-semibold text-primary mb-2">Learning Outcomes:</p>
                <ul className="space-y-1 text-xs text-foreground/70">
                  <li>✓ Confidently use a computer for daily tasks</li>
                  <li>✓ Navigate the internet safely and efficiently</li>
                  <li>✓ Create and manage files and folders</li>
                  <li>✓ Use Office applications for basic productivity</li>
                </ul>
              </div>
              
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Enroll Now
              </Button>
            </Card>

            {/* Level 2 */}
            <Card className="p-8 hover:shadow-xl transition-shadow border-t-4 border-primary md:scale-105">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-foreground">Level 2</h3>
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">Intermediate Skills</h4>
              <p className="text-foreground/70 mb-6 text-sm">
                Advanced productivity tools, digital literacy, design basics, and web fundamentals for career advancement.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>10 Weeks</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <DollarSign className="w-4 h-4 text-primary" />
                  <span>$200/course (Group) | $55/hour (1-on-1)</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h5 className="font-semibold text-foreground mb-3 text-sm">Topics Covered:</h5>
                <div className="space-y-2 text-sm text-foreground/70">
                  <div>
                    <p className="font-medium text-foreground">Advanced Excel</p>
                    <p className="text-xs ml-2">• Formulas & functions • Data analysis • Charts & visualization</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Professional Presentations</p>
                    <p className="text-xs ml-2">• PowerPoint design • Storytelling • Presentation skills</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Digital Design</p>
                    <p className="text-xs ml-2">• Canva for graphics • Social media design • Visual communication</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Digital Security</p>
                    <p className="text-xs ml-2">• Password management • Phishing awareness • Data protection</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6 p-3 bg-primary/5 rounded-lg">
                <p className="text-xs font-semibold text-primary mb-2">Learning Outcomes:</p>
                <ul className="space-y-1 text-xs text-foreground/70">
                  <li>✓ Analyze data and create professional reports</li>
                  <li>✓ Design compelling visual presentations</li>
                  <li>✓ Create professional graphics and marketing materials</li>
                  <li>✓ Protect yourself and your data online</li>
                </ul>
              </div>
              
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Enroll Now
              </Button>
            </Card>

            {/* Level 3 */}
            <Card className="p-8 hover:shadow-xl transition-shadow border-t-4 border-primary">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-foreground">Level 3</h3>
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">AI & Advanced Tech</h4>
              <p className="text-foreground/70 mb-6 text-sm">
                AI fundamentals, machine learning basics, modern tools like ChatGPT, and introduction to programming.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>12 Weeks</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <DollarSign className="w-4 h-4 text-primary" />
                  <span>$200/course (Group) | $55/hour (1-on-1)</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h5 className="font-semibold text-foreground mb-3 text-sm">Topics Covered:</h5>
                <div className="space-y-2 text-sm text-foreground/70">
                  <div>
                    <p className="font-medium text-foreground">AI Fundamentals</p>
                    <p className="text-xs ml-2">• What is AI & ML • How AI works • Real-world applications</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">AI Tools & Prompting</p>
                    <p className="text-xs ml-2">• ChatGPT mastery • Prompt engineering • AI for productivity</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Python Programming</p>
                    <p className="text-xs ml-2">• Python basics • Variables & data types • Loops & functions</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Automation & Future Tech</p>
                    <p className="text-xs ml-2">• Task automation • APIs & integrations • Career in tech</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6 p-3 bg-primary/5 rounded-lg">
                <p className="text-xs font-semibold text-primary mb-2">Learning Outcomes:</p>
                <ul className="space-y-1 text-xs text-foreground/70">
                  <li>✓ Understand AI and machine learning concepts</li>
                  <li>✓ Leverage AI tools for productivity and innovation</li>
                  <li>✓ Write and run basic Python programs</li>
                  <li>✓ Prepare for tech careers and emerging opportunities</li>
                </ul>
              </div>
              
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Enroll Now
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Mini-Courses Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Specialized Mini-Courses
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Focused training for specific skills and career goals. 3-4 weeks each.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-3">Tech for Seniors</h3>
              <p className="text-foreground/70 mb-4">
                Tailored for older adults learning technology for the first time. Focus on practical, everyday skills.
              </p>
              <p className="text-sm font-semibold text-foreground">$250/course (Group) | 3-4 weeks | $55/hour (1-on-1)</p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-3">Social Media Mastery</h3>
              <p className="text-foreground/70 mb-4">
                Learn to navigate Facebook, Instagram, LinkedIn, and other platforms confidently and safely.
              </p>
              <p className="text-sm font-semibold text-foreground">$250/course (Group) | 3-4 weeks | $55/hour (1-on-1)</p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-3">Cybersecurity Basics</h3>
              <p className="text-foreground/70 mb-4">
                Protect yourself online: passwords, phishing, privacy settings, and safe browsing practices.
              </p>
              <p className="text-sm font-semibold text-foreground">$250/course (Group) | 3-4 weeks | $55/hour (1-on-1)</p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-3">Freelancing with Tech</h3>
              <p className="text-foreground/70 mb-4">
                Build a freelance career: online platforms, portfolio building, and finding your first clients.
              </p>
              <p className="text-sm font-semibold text-foreground">$250/course (Group) | 3-4 weeks | $55/hour (1-on-1)</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Options Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Flexible Learning Options
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Choose the learning format that works best for you. All options include personalized support and hands-on practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-4">One-on-One Tutoring</h3>
              <p className="text-foreground/70 mb-6">
                Personalized instruction tailored to your pace and learning style. Ideal for busy professionals and those needing extra support.
              </p>
              <p className="text-lg font-bold text-foreground mb-2">$50/hour</p>
              <p className="text-sm text-foreground/70">Flexible scheduling • Online or in-person • Custom curriculum</p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-4">In-Home In-Person Sessions</h3>
              <p className="text-foreground/70 mb-6">
                Learn in the comfort of your own home with face-to-face instruction. Perfect for those who prefer personal interaction.
              </p>
              <p className="text-lg font-bold text-foreground mb-2">$55/hour</p>
              <p className="text-sm text-foreground/70">Flexible scheduling • Personalized • Comfortable environment</p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-4">Live Online Classes</h3>
              <p className="text-foreground/70 mb-6">
                Join interactive online sessions from anywhere. Great for remote learners who want group support and community.
              </p>
              <p className="text-lg font-bold text-foreground mb-2">$200/course</p>
              <p className="text-sm text-foreground/70">Group learning • Flexible times • Interactive Q&A</p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-4">Synchronized Instructor-Led</h3>
              <p className="text-foreground/70 mb-6">
                Real-time instruction that replicates a classroom experience. Perfect for structured learning with peer interaction.
              </p>
              <p className="text-lg font-bold text-foreground mb-2">$200/course</p>
              <p className="text-sm text-foreground/70">Group setting • Scheduled times • Classroom feel</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              How to Get Started
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Free Consultation</h3>
              <p className="text-foreground/70">
                Contact us to discuss your learning goals and find the best course and learning format for you.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Meet & Plan</h3>
              <p className="text-foreground/70">
                We'll meet (online or in-person) to understand your needs and create a personalized learning plan.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Start Learning</h3>
              <p className="text-foreground/70">
                Begin your journey with flexible scheduling and personalized support every step of the way.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-foreground/70 mb-6">
              Ready to start your learning journey?
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Schedule Your Free Consultation <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-background scroll-mt-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              What Students Say
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Real feedback from learners who transformed their skills with IT Insight Academy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary">★</span>
                ))}
              </div>
              <p className="text-foreground/80 mb-4 italic">
                "Mr. Shoaib Hayat was my first instructor. I had a fantastic experience with him as a teacher. He was always helpful and timely with responses as well as having conducted the course material in a very clear and concise way. Mr. Hayat was great at including interesting videos to help students engage and learn material in an exciting, relatable way."
              </p>
              <p className="font-bold text-foreground">Rose Jurtsuk</p>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary">★</span>
                ))}
              </div>
              <p className="text-foreground/80 mb-4 italic">
                "Mr. Shoaib Hayat expertise and kindness made returning to post secondary as a 'mature student' a pleasant and engaging transition. I am thankful to Mr. Hayat for their patience and ongoing support. The first week is never easy but he have made a concerted effort to make it manageable, for which I am very grateful."
              </p>
              <p className="font-bold text-foreground">Emma Y</p>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary">★</span>
                ))}
              </div>
              <p className="text-foreground/80 mb-4 italic">
                "Mr. Shoaib Hayat was my instructor and I couldn't have asked for a better start. He is knowledgeable, supportive and always available to address concerns. He takes the time to ensure his students fully understand the material and consistently follows up on our progress."
              </p>
              <p className="font-bold text-foreground">Rachel Anne</p>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary">★</span>
                ))}
              </div>
              <p className="text-foreground/80 mb-4 italic">
                "SHOAIB HAYAT is an amazing instructor! He is an excellent knowledgeable and skilled instructor. He supports me with every question and patiently helps me whenever I struggle with something. His guidance and encouragement make learning easier and boost my confidence."
              </p>
              <p className="font-bold text-foreground">Naseema Nazary</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white scroll-mt-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Get in Touch
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Ready to start your learning journey? Contact us today for a free consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Phone</h3>
              <p className="text-foreground/70">514-701-2500</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
              <p className="text-foreground/70">shoaib.hayyat@gmail.com</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Location</h3>
              <p className="text-foreground/70">Calgary, AB, Canada</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Schedule Free Consultation <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  IT
                </div>
                <div>
                  <p className="font-bold text-sm">IT Insight Academy</p>
                  <p className="text-xs text-background/70">Learn Technology from Scratch</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#courses" className="hover:text-primary transition-colors">Courses</a></li>
                <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>📞 514-701-2500</li>
                <li>✉️ shoaib.hayyat@gmail.com</li>
                <li>📍 Calgary, AB, Canada</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
            <p>&copy; 2026 IT Insight Academy. All rights reserved. Learn Technology from Scratch.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
