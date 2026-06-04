import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

const Card = ({ children, className = "" }: any) => (
  <div className={`bg-white rounded-xl border border-border shadow-sm ${className}`}>
    {children}
  </div>
);

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

export default function Certifications() {
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
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-foreground/70 hover:text-foreground transition">Home</a>
            <a href="/mission" className="text-foreground/70 hover:text-foreground transition">Our Mission</a>
            <a href="/courses" className="text-foreground/70 hover:text-foreground transition">Courses</a>
            <a href="/learning-methods" className="text-foreground/70 hover:text-foreground transition">Learning</a>
            <a href="/certifications" className="text-foreground/70 hover:text-foreground transition">Certifications</a>
          </nav>
          <Button onClick={() => window.location.href = '/contact'} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Official Certification Exams
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl">
              After completing our courses, you'll be fully prepared to enroll in and pass official Google and Microsoft certification exams. We don't just teach—we prepare you for exam success.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Your Path to Certification Success</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="p-8 text-center border-t-4 border-primary">
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Step 1: Complete Our Course</h3>
                <p className="text-foreground/70">
                  Enroll in one of our 7 comprehensive courses designed to cover all exam objectives with hands-on projects and real-world scenarios.
                </p>
              </Card>

              <Card className="p-8 text-center border-t-4 border-primary">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Step 2: Master Exam Topics</h3>
                <p className="text-foreground/70">
                  Learn every topic covered in the official certification exam with our structured curriculum and detailed explanations.
                </p>
              </Card>

              <Card className="p-8 text-center border-t-4 border-primary">
                <div className="text-5xl mb-4">✍️</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Step 3: Practice & Prepare</h3>
                <p className="text-foreground/70">
                  Use practice exams, study guides, and resources to prepare for the official exam. We provide everything you need.
                </p>
              </Card>

              <Card className="p-8 text-center border-t-4 border-primary">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Step 4: Get Certified</h3>
                <p className="text-foreground/70">
                  Enroll in the official Google or Microsoft certification exam and pass with confidence. Earn your industry credential.
                </p>
              </Card>
            </div>
          </div>

          {/* Microsoft 365 Certification */}
          <div className="mb-16">
            <Card className="p-8 border-2 border-primary/30">
              <div className="flex items-start gap-6 mb-8">
                <div className="text-6xl">🔷</div>
                <div className="flex-grow">
                  <h2 className="text-3xl font-bold text-foreground mb-2">Microsoft 365 Certified Associate</h2>
                  <p className="text-lg text-foreground/70">
                    Demonstrate foundational knowledge of Microsoft 365 services and cloud concepts by passing the official MS-900 exam.
                  </p>
                </div>
              </div>

              {/* Exam Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8 pb-8 border-b border-border">
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-bold text-foreground mb-2">Exam Code</h4>
                  <p className="text-foreground/80 font-semibold">MS-900</p>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-bold text-foreground mb-2">Duration</h4>
                  <p className="text-foreground/80">60 minutes</p>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-bold text-foreground mb-2">Questions</h4>
                  <p className="text-foreground/80">40-60 questions</p>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-bold text-foreground mb-2">Passing Score</h4>
                  <p className="text-foreground/80">700/1000</p>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-bold text-foreground mb-2">Exam Cost</h4>
                  <p className="text-foreground/80">$99 USD</p>
                </div>
              </div>

              {/* What We Cover */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">What Our Courses Cover</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex gap-3">
                    <div className="text-primary text-2xl">✓</div>
                    <p className="text-foreground/80">Microsoft 365 cloud services and benefits</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-primary text-2xl">✓</div>
                    <p className="text-foreground/80">Core Microsoft 365 services (Teams, SharePoint, OneDrive)</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-primary text-2xl">✓</div>
                    <p className="text-foreground/80">Security, compliance, and privacy features</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-primary text-2xl">✓</div>
                    <p className="text-foreground/80">Pricing and support options</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-primary text-2xl">✓</div>
                    <p className="text-foreground/80">Exam-focused practice questions and scenarios</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-primary text-2xl">✓</div>
                    <p className="text-foreground/80">Real-world applications and case studies</p>
                  </div>
                </div>
              </div>

              {/* How We Prepare You */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">How We Ensure Your Success</h3>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-4">
                  <div className="flex gap-4">
                    <div className="text-3xl">🎓</div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Expert-Led Training</h4>
                      <p className="text-foreground/70">Learn from instructors with real-world experience and deep knowledge of exam content.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl">📋</div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Comprehensive Study Materials</h4>
                      <p className="text-foreground/70">Access detailed study guides, practice exams, flashcards, and reference materials aligned with official exam objectives.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl">🔄</div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Practice Exams</h4>
                      <p className="text-foreground/70">Take full-length practice exams that mirror the official test format, timing, and difficulty level.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl">💬</div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Ongoing Support</h4>
                      <p className="text-foreground/70">Get help from our instructors and community as you prepare. We're here to answer your questions.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl">🎯</div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Exam Readiness Assessment</h4>
                      <p className="text-foreground/70">Take diagnostic assessments to identify weak areas and focus your study time effectively.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 text-center">
                <h4 className="text-xl font-bold text-foreground mb-3">Ready to Earn Your Certification?</h4>
                <p className="text-foreground/80 mb-6">
                  Start with our courses today and prepare for exam success. We'll guide you every step of the way.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <a href="/courses">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      View All Courses <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </a>
                  <a href="/contact">
                    <Button size="lg" variant="outline">
                      Schedule Free Consultation
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <Card className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Will your course prepare me for the official exam?</h3>
                <p className="text-foreground/70">
                  Absolutely! Our curriculum is specifically designed to cover all exam objectives outlined by Microsoft. We focus on exam-relevant content and provide practice questions that mirror the official test format.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">What if I don't pass the exam on my first try?</h3>
                <p className="text-foreground/70">
                  We provide ongoing support and study resources. You can retake the exam after 24 hours. Our practice exams and study guides will help you identify weak areas and improve for your next attempt.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">How long does it take to prepare for the exam?</h3>
                <p className="text-foreground/70">
                  Most students complete our course in 4-8 weeks, depending on their pace and prior experience. We recommend spending 2-3 hours per week on coursework plus additional study time before the exam.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Do you provide study materials and practice exams?</h3>
                <p className="text-foreground/70">
                  Yes! All our courses include comprehensive study guides, practice exams, flashcards, and reference materials. These are designed to prepare you thoroughly for the official certification exam.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">How do I register for the official exam?</h3>
                <p className="text-foreground/70">
                  Once you've completed our course and feel ready, you can register for the official Microsoft exam directly through the Microsoft Learn platform or Pearson VUE testing centers. We'll guide you through the registration process.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">What's the success rate for students who complete your courses?</h3>
                <p className="text-foreground/70">
                  Our students have a high pass rate because we focus on practical, exam-relevant knowledge. Students who complete the full course and practice exams consistently pass on their first or second attempt.
                </p>
              </Card>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 text-center border border-primary/20">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Start Your Certification Journey Today
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Join hundreds of students who have successfully earned their Microsoft 365 certification through our courses. Invest in your future and unlock new career opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/courses">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Explore Courses
                </Button>
              </a>
              <a href="/contact">
                <Button size="lg" variant="outline">
                  Get Started
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 bg-background mt-16">
        <div className="max-w-7xl mx-auto text-center text-sm text-foreground/70">
          <p>© 2026 IT Insight Academy. All rights reserved. Learn Smart. Grow Fast. Succeed.</p>
        </div>
      </footer>
    </div>
  );
}
