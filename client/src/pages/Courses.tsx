import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";

const Card = ({ children, className = "" }: any) => (
  <div className={`bg-white rounded-xl border border-border shadow-sm ${className}`}>
    {children}
  </div>
);

const coursesData = [
  {
    title: "Basic Computer Skills",
    description: "Master hardware, operating systems, file management, and essential computer fundamentals.",
    fullDescription: "Learn about computer hardware components, Windows/Mac operating systems, file management, internet basics, and keyboard shortcuts.",
    icon: "💻",
    duration: "Flexible",
    price: "$200",
    slug: "basic-computer-skills",
    fundingEligible: ["student-loans", "ei-training"],
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
    slug: "internet-usage",
    fundingEligible: ["student-loans", "ei-training"],
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
    slug: "microsoft-office",
    fundingEligible: ["student-loans", "ei-training", "employer-training"],
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
    slug: "cyber-security",
    fundingEligible: ["student-loans", "ei-training", "employer-training"],
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
    slug: "software-qa",
    fundingEligible: ["student-loans", "ei-training", "employer-training"],
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
    slug: "business-english",
    fundingEligible: ["student-loans", "ei-training"],
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
    slug: "modern-ai-tools",
    fundingEligible: ["student-loans", "ei-training", "employer-training"],
    outcomes: [
      "Understand AI and machine learning basics",
      "Use ChatGPT, Gemini, and Claude effectively",
      "Master prompt engineering across all platforms",
      "Apply multiple AI tools for different productivity tasks"
    ]
  }
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation showFullNav={false} breadcrumb="All Courses" />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              All Courses
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Seven comprehensive courses designed to take you from beginner to confident tech professional. Choose the course that fits your learning goals.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesData.map((course, idx) => (
              <Card key={idx} id={course.slug} className="p-6 hover:shadow-lg transition-shadow flex flex-col relative">
                <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold border border-primary/20">
                    🏆 Certified
                  </div>
                </div>
                <div className="text-4xl mb-4">{course.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{course.title}</h3>
                <p className="text-foreground/70 mb-4 flex-grow">{course.description}</p>

                <div className="flex justify-between items-center text-sm text-primary font-semibold mb-4">
                  <span>⏱️ {course.duration}</span>
                  <span>💰 {course.price}</span>
                </div>
                <Link href={`/course/${course.slug}`} className="w-full">
                  <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    View Details
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 border border-primary/20">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Choose a course and begin your journey to mastering technology. All courses are designed with your success in mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90" size="lg">
              Get Started Today
            </Button>
            <Link href="/">
              <Button variant="outline" size="lg">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2026 IT Insight Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
