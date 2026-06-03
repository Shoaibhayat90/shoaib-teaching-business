import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function OnlineClasses() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-50 h-16 flex items-center px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="IT Insight Academy" className="h-8 w-8" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Live Online Classes
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Join interactive online sessions from anywhere in the world. Learn with community support, recorded sessions, and real-time Q&A.
              </p>
              <div className="flex items-center gap-4">
                <Button className="bg-primary hover:bg-primary/90" size="lg">
                  Get Started
                </Button>
              </div>
            </div>
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663595675120/jsnE2mQCg3EKG4kieWXE3D/learning-method-online-classes-5yraHh5WWvF9knU9TB7eKL.webp"
                alt="Live Online Classes"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Real-time interactive classes with instructor and fellow learners",
              "Learn from anywhere with just an internet connection",
              "Collaborative learning environment with peer support and interaction",
              "Recorded sessions available for review and catch-up learning",
              "Chat and Q&A features for real-time questions and discussions",
              "Shared screen demonstrations and interactive whiteboard sessions",
              "Community of learners for networking and mutual support"
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                </div>
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-12 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Learn Anywhere", desc: "Global access from home" },
              { title: "Community", desc: "Connect with fellow learners" },
              { title: "Recorded", desc: "Review sessions anytime" },
              { title: "Interactive", desc: "Real-time Q&A and chat" },
              { title: "Affordable", desc: "Cost-effective learning" },
              { title: "Flexible", desc: "Fit learning into your schedule" }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-border">
                <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Enroll", desc: "Join the course cohort" },
              { step: 2, title: "Connect", desc: "Log in to live sessions" },
              { step: 3, title: "Participate", desc: "Engage with instructor and peers" },
              { step: 4, title: "Review", desc: "Access recorded sessions" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-12 px-4 sm:px-6 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Remote learners worldwide",
              "Budget-conscious students",
              "People who value community learning",
              "Professionals with flexible schedules",
              "Learners who want recorded content",
              "Those seeking peer interaction"
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border-l-4 border-primary">
                <p className="text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 border border-primary/20">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Join Our Next Live Online Class
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Connect with learners worldwide and master new skills through interactive live sessions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90" size="lg">
              Enroll Now
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2026 IT Insight Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
