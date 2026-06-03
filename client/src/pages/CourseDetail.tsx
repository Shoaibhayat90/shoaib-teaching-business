import { useParams, useLocation } from "wouter";
import { ChevronLeft } from "lucide-react";

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

const coursesData: any = {
  "basic-computer-skills": {
    title: "Basic Computer Skills",
    icon: "💻",
    price: "$200",
    duration: "Flexible",
    shortDescription: "Master hardware, operating systems, file management, and essential computer fundamentals.",
    fullDescription: "Learn about computer hardware components, Windows/Mac operating systems, file management, internet basics, and keyboard shortcuts.",
    whatYouWillLearn: [
      "Computer hardware components and their functions",
      "Operating system basics (Windows, macOS, Linux)",
      "File and folder management",
      "Basic keyboard shortcuts and navigation",
      "Internet and web browser fundamentals",
      "Peripheral devices and connectivity"
    ],
    outcomes: [
      "Understand computer hardware and components",
      "Navigate operating systems confidently",
      "Manage files and folders efficiently",
      "Use keyboard shortcuts for productivity",
      "Connect and use peripheral devices",
      "Troubleshoot basic computer issues"
    ]
  },
  "internet-usage": {
    title: "Internet Usage",
    icon: "🌐",
    price: "$150",
    duration: "Flexible",
    shortDescription: "Navigate the web safely, manage email, online security, and digital citizenship.",
    fullDescription: "Learn web browsing, email management, online safety, password security, recognizing phishing, and responsible internet usage.",
    whatYouWillLearn: [
      "Web browsing and search techniques",
      "Email account creation and management",
      "Online safety and security practices",
      "Password creation and management",
      "Recognizing phishing and scams",
      "Social media basics and etiquette",
      "Digital citizenship and online responsibility"
    ],
    outcomes: [
      "Browse the internet safely and efficiently",
      "Create and manage email accounts",
      "Identify and avoid online scams",
      "Practice secure password management",
      "Understand digital privacy rights",
      "Use social media responsibly"
    ]
  },
  "microsoft-office": {
    title: "Microsoft Office",
    icon: "📊",
    price: "$300",
    duration: "Flexible",
    shortDescription: "Master Word, Excel, PowerPoint, and Outlook for professional productivity.",
    fullDescription: "Comprehensive training on Word document creation, Excel spreadsheets and formulas, PowerPoint presentations, and Outlook email management.",
    whatYouWillLearn: [
      "Microsoft Word: Document creation, formatting, and templates",
      "Microsoft Excel: Spreadsheets, formulas, charts, and data analysis",
      "Microsoft PowerPoint: Presentation design and delivery",
      "Microsoft Outlook: Email management and calendar organization",
      "File sharing and collaboration features",
      "Professional document standards"
    ],
    outcomes: [
      "Create professional documents in Word",
      "Build and analyze data in Excel",
      "Design engaging presentations in PowerPoint",
      "Manage emails and calendars in Outlook",
      "Collaborate with colleagues using Office tools",
      "Apply professional formatting standards"
    ]
  },
  "cyber-security": {
    title: "Cyber Security",
    icon: "🔐",
    price: "$500",
    duration: "Flexible",
    shortDescription: "Protect yourself online: passwords, phishing, privacy, and safe browsing practices.",
    fullDescription: "Learn cybersecurity fundamentals, password best practices, recognizing phishing attacks, data privacy, secure browsing, and personal digital safety.",
    whatYouWillLearn: [
      "Cybersecurity fundamentals and threats",
      "Strong password creation and management",
      "Phishing and social engineering attacks",
      "Data privacy and protection",
      "Secure browsing practices",
      "Malware and virus protection",
      "Two-factor authentication and security tools"
    ],
    outcomes: [
      "Create strong, secure passwords",
      "Identify and avoid phishing attacks",
      "Protect personal data online",
      "Understand cybersecurity best practices",
      "Use security tools effectively",
      "Respond to security incidents"
    ]
  },
  "software-qa": {
    title: "Software Quality Assurance",
    icon: "✅",
    price: "$500",
    duration: "Flexible",
    shortDescription: "Learn testing methodologies, bug reporting, and quality assurance processes.",
    fullDescription: "Master QA fundamentals, manual testing techniques, bug identification and reporting, test case creation, and quality assurance best practices.",
    whatYouWillLearn: [
      "QA fundamentals and testing principles",
      "Manual testing techniques",
      "Test case creation and documentation",
      "Bug identification and reporting",
      "Testing methodologies and best practices",
      "Quality assurance processes",
      "Testing tools and automation basics"
    ],
    outcomes: [
      "Understand QA and testing principles",
      "Create effective test cases",
      "Identify and report bugs professionally",
      "Apply quality assurance methodologies",
      "Document test results accurately",
      "Contribute to software quality improvement"
    ]
  },
  "business-english": {
    title: "Business English",
    icon: "📝",
    price: "$100",
    duration: "Flexible",
    shortDescription: "Professional communication, business writing, and workplace English skills.",
    fullDescription: "Learn professional communication, business email writing, presentation skills, workplace etiquette, and effective business English.",
    whatYouWillLearn: [
      "Professional business communication",
      "Business email writing and etiquette",
      "Presentation skills and delivery",
      "Meeting participation and discussion",
      "Business writing and documentation",
      "Workplace communication norms",
      "Professional vocabulary and terminology"
    ],
    outcomes: [
      "Write professional business emails",
      "Communicate effectively in meetings",
      "Deliver confident presentations",
      "Understand workplace communication norms",
      "Use professional vocabulary",
      "Build strong professional relationships"
    ]
  },
  "modern-ai-tools": {
    title: "Modern AI Tools",
    icon: "🤖",
    price: "$500",
    duration: "Flexible",
    shortDescription: "Master ChatGPT, Gemini, Claude, Manus, OpenAI, and other AI productivity tools.",
    fullDescription: "Learn all modern AI productivity tools including ChatGPT, Google Gemini, Anthropic Claude, Manus, OpenAI, and other cutting-edge AI platforms. Master prompt engineering, AI fundamentals, and practical applications.",
    whatYouWillLearn: [
      "AI and machine learning fundamentals",
      "ChatGPT: Usage, capabilities, and advanced features",
      "Google Gemini: Features and applications",
      "Anthropic Claude: Strengths and use cases",
      "Manus AI platform: Features and integration",
      "OpenAI ecosystem: APIs and tools",
      "Prompt engineering techniques and best practices",
      "Comparing different AI tools and choosing the right one",
      "AI for content creation, coding, and analysis",
      "Ethical AI usage and responsible practices",
      "Practical AI implementation in workflows",
      "Automating tasks with AI tools"
    ],
    outcomes: [
      "Understand AI and machine learning basics",
      "Use ChatGPT, Gemini, and Claude effectively",
      "Master prompt engineering across all platforms",
      "Apply multiple AI tools for different productivity tasks",
      "Create content using various AI platforms",
      "Integrate AI tools into daily workflows and business processes",
      "Choose the right AI tool for specific tasks",
      "Automate repetitive tasks using AI",
      "Understand ethical considerations in AI usage",
      "Stay updated with latest AI developments"
    ]
  }
};

export default function CourseDetail() {
  const params = useParams<{ slug: string }>();
  const [, setLocation] = useLocation();
  const slug = params?.slug;
  const course = slug ? coursesData[slug] : null;

  if (!course) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Course not found</h1>
          <Button onClick={() => setLocation("/")} variant="outline">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background backdrop-blur-md z-50 border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>
          <h1 className="text-lg font-bold">{course.title}</h1>
          <div className="w-16" />
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-20">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-6xl">{course.icon}</div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{course.title}</h1>
                <div className="flex gap-6 text-lg">
                  <span className="text-primary font-semibold">💰 {course.price}</span>
                  <span className="text-primary font-semibold">⏱️ {course.duration}</span>
                </div>
              </div>
            </div>
            <p className="text-xl text-foreground/80">{course.fullDescription}</p>
          </div>

          {/* What You Will Learn */}
          <Card className="p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-foreground">What You Will Learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.whatYouWillLearn.map((item: string, idx: number) => (
                <div key={idx} className="flex gap-3">
                  <div className="text-primary text-xl font-bold">✓</div>
                  <p className="text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Course Outcomes */}
          <Card className="p-8 mb-8 bg-primary/5 border-primary/20">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Course Outcomes</h2>
            <p className="text-foreground/80 mb-6">
              After completing this course, you will be able to:
            </p>
            <div className="space-y-3">
              {course.outcomes.map((outcome: string, idx: number) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="text-primary text-2xl font-bold">→</div>
                  <p className="text-foreground/90 pt-1">{outcome}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-foreground/80 mb-6">
              Join our course and transform your skills. Flexible schedule, expert instructors, and practical learning.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Enroll Now
              </Button>
              <Button size="lg" variant="outline">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container max-w-4xl">
          <div className="text-center text-foreground/70">
            <p>© 2026 IT Insight Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
