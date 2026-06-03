import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const Card = ({ children, className = "" }: any) => (
  <div className={`bg-white rounded-xl border border-border shadow-sm ${className}`}>
    {children}
  </div>
);

export default function Certifications() {
  const certifications = [
    {
      name: "Microsoft 365 Certified Associate",
      provider: "Microsoft",
      examCode: "MS-900",
      examName: "Microsoft 365 Fundamentals",
      description: "Demonstrate foundational knowledge of Microsoft 365 services and cloud concepts.",
      icon: "🔷",
      courses: [
        "Basic Computer Skills",
        "Internet Usage",
        "Microsoft Office",
        "Cyber Security",
        "Software Quality Assurance",
        "Business English",
        "Modern AI Tools"
      ],
      benefits: [
        "Industry-recognized credential",
        "Validates Microsoft 365 knowledge",
        "Enhances career prospects",
        "Demonstrates cloud competency",
        "Improves job marketability"
      ],
      examDetails: {
        duration: "60 minutes",
        questions: "40-60 questions",
        passingScore: "700/1000",
        cost: "$99 USD",
        retakePolicy: "Can retake after 24 hours"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-50 h-16 flex items-center px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="flex items-center gap-2">
              <img src="/manus-storage/logo-option-2_8664fe11.png" alt="IT Insight Academy" className="h-8 w-8 object-contain" />
              <div className="flex flex-col">
                <span className="font-bold text-sm text-foreground">IT Insight Academy</span>
                <span className="text-xs text-primary font-medium">Learn Technology from Scratch</span>
              </div>
            </div>
          </Link>
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Industry Certifications
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Earn industry-recognized certifications by completing our comprehensive courses. Validate your skills and advance your career with credentials from Microsoft.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Overview */}
      <section className="py-12 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          {certifications.map((cert, idx) => (
            <Card key={idx} className="p-8 mb-12 border-2 border-primary/30">
              {/* Header */}
              <div className="flex items-start gap-6 mb-8">
                <div className="text-6xl">{cert.icon}</div>
                <div className="flex-grow">
                  <h2 className="text-4xl font-bold text-foreground mb-2">{cert.name}</h2>
                  <p className="text-lg text-muted-foreground mb-4">{cert.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg">
                      <span className="font-semibold">Provider:</span> {cert.provider}
                    </div>
                    <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg">
                      <span className="font-semibold">Exam Code:</span> {cert.examCode}
                    </div>
                  </div>
                </div>
              </div>

              {/* Exam Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8 pb-8 border-b border-border">
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-bold text-foreground mb-2">Exam Duration</h4>
                  <p className="text-foreground/80">{cert.examDetails.duration}</p>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-bold text-foreground mb-2">Questions</h4>
                  <p className="text-foreground/80">{cert.examDetails.questions}</p>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-bold text-foreground mb-2">Passing Score</h4>
                  <p className="text-foreground/80">{cert.examDetails.passingScore}</p>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-bold text-foreground mb-2">Exam Cost</h4>
                  <p className="text-foreground/80">{cert.examDetails.cost}</p>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-bold text-foreground mb-2">Retake Policy</h4>
                  <p className="text-foreground/80">{cert.examDetails.retakePolicy}</p>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Why Get This Certification?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cert.benefits.map((benefit, bidx) => (
                    <div key={bidx} className="flex gap-3">
                      <div className="text-primary text-2xl">✓</div>
                      <p className="text-foreground/80">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Courses That Prepare You */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Courses That Prepare You</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cert.courses.map((course, cidx) => (
                    <div key={cidx} className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-center gap-3">
                      <span className="text-2xl">📚</span>
                      <span className="font-semibold text-foreground">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 text-center">
                <h4 className="text-xl font-bold text-foreground mb-3">Ready to Earn Your Certification?</h4>
                <p className="text-foreground/80 mb-6">
                  Start with any of our courses and prepare for the {cert.examCode} exam.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Link href="/courses">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      View All Courses
                    </Button>
                  </Link>
                  <Button variant="outline">
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Study Path Section */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Your Certification Journey</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="text-5xl mb-4">1️⃣</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Choose a Course</h3>
              <p className="text-foreground/70">Select from our 7 comprehensive courses that align with your goals.</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="text-5xl mb-4">2️⃣</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Learn & Practice</h3>
              <p className="text-foreground/70">Complete the course with hands-on projects and practical exercises.</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="text-5xl mb-4">3️⃣</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Study for Exam</h3>
              <p className="text-foreground/70">Use included study resources and practice exams to prepare.</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="text-5xl mb-4">4️⃣</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Get Certified</h3>
              <p className="text-foreground/70">Pass the exam and earn your industry-recognized certification.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 px-4 sm:px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 border border-primary/20">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Start Your Certification Path Today
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Invest in your future. Earn industry-recognized certifications that validate your skills and open new career opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Explore Courses
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Schedule Free Consultation
            </Button>
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
