import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function LearningMethods() {
  const methods = [
    {
      id: 1,
      title: "One-on-One Sessions",
      icon: "👤",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663595675120/jsnE2mQCg3EKG4kieWXE3D/learning-method-one-on-one-YGoQgsFCUU2TLfGG5AubnL.webp",

      description: "Personalized instruction tailored to your pace and learning style.",
      route: "/one-on-one",
      fullDetails: [
        "Completely customized learning experience based on your specific needs and goals",
        "Flexible scheduling that works around your busy lifestyle",
        "Direct access to expert instructors who adapt teaching methods to your learning style",
        "Immediate feedback and personalized guidance on every topic",
        "Perfect for professionals with demanding schedules or specific skill gaps",
        "Accelerated learning through focused, one-to-one attention",
        "Build confidence in a comfortable, pressure-free environment"
      ],
      benefits: [
        "100% personalized curriculum",
        "Flexible scheduling",
        "Immediate feedback",
        "Direct instructor access",
        "Customized pace"
      ]
    },
    {
      id: 2,
      title: "In-Person Home Tutoring",
      icon: "🏠",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663595675120/jsnE2mQCg3EKG4kieWXE3D/learning-method-home-tutoring-egAhzWf9SBTtpe2uunrXrn.webp",

      description: "Learn in the comfort of your own home with face-to-face instruction.",
      route: "/home-tutoring",
      fullDetails: [
        "Instructor comes to your home for personalized, one-on-one training",
        "Learn in a comfortable, familiar environment with zero commute stress",
        "Hands-on guidance with your own computer and setup",
        "Flexible scheduling that fits your daily routine",
        "Perfect for seniors or those who prefer in-person interaction",
        "Build strong rapport with your instructor in a relaxed setting",
        "Immediate hands-on practice with real-world applications"
      ],
      benefits: [
        "No commute required",
        "Comfortable home environment",
        "Hands-on guidance",
        "Flexible scheduling",
        "Personal attention"
      ]
    },
    {
      id: 3,
      title: "Live Online Classes",
      icon: "💻",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663595675120/jsnE2mQCg3EKG4kieWXE3D/learning-method-online-classes-5yraHh5WWvF9knU9TB7eKL.webp",

      description: "Join interactive online sessions from anywhere with community support.",
      route: "/online-classes",
      fullDetails: [
        "Real-time interactive classes with instructor and fellow learners",
        "Learn from anywhere with just an internet connection",
        "Collaborative learning environment with peer support and interaction",
        "Recorded sessions available for review and catch-up learning",
        "Chat and Q&A features for real-time questions and discussions",
        "Shared screen demonstrations and interactive whiteboard sessions",
        "Community of learners for networking and mutual support"
      ],
      benefits: [
        "Learn from anywhere",
        "Community support",
        "Recorded sessions",
        "Interactive Q&A",
        "Peer collaboration"
      ]
    },
    {
      id: 4,
      title: "Instructor-Led Training",
      icon: "👨‍🏫",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663595675120/jsnE2mQCg3EKG4kieWXE3D/learning-method-instructor-led-YxDYnorksNwzQMBUuaV8gq.webp",

      description: "Real-time instruction that replicates a classroom experience.",
      route: "/instructor-led",
      fullDetails: [
        "Structured classroom-like environment with group learning dynamics",
        "Expert instructor leading comprehensive, well-organized lessons",
        "Peer interaction and collaborative problem-solving with classmates",
        "Group projects and discussions that enhance learning retention",
        "Scheduled sessions that create accountability and consistency",
        "Networking opportunities with fellow learners in your cohort",
        "Certificate of completion recognized by industry professionals"
      ],
      benefits: [
        "Classroom structure",
        "Group dynamics",
        "Peer learning",
        "Scheduled consistency",
        "Certificate of completion"
      ]
    }
  ];

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
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Learning Methods That Work for You
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the learning format that fits your lifestyle, schedule, and learning preferences. All methods are designed to help you succeed.
          </p>
        </div>
      </section>

      {/* Learning Methods Details */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {methods.map((method, index) => (
            <div key={method.id} className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <img
                  src={method.image}
                  alt={method.title}
                  className="w-full rounded-lg shadow-lg object-cover h-80"
                />
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{method.icon}</span>
                  <h2 className="text-3xl font-bold text-foreground">{method.title}</h2>
                </div>

                <p className="text-lg text-muted-foreground mb-6">{method.description}</p>

                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-3">What You Get:</h3>
                  <ul className="space-y-2">
                    {method.fullDetails.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">✓</span>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-3">Key Benefits:</h3>
                  <div className="flex flex-wrap gap-2">
                    {method.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  <Link href={method.route}>
                    <Button className="bg-primary hover:bg-primary/90">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-12 px-4 sm:px-6 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Find Your Perfect Learning Method
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Budget-Conscious", method: "Live Online Classes" },
              { title: "Busy Professional", method: "One-on-One Sessions" },
              { title: "Prefer Home Learning", method: "In-Person Home Tutoring" },
              { title: "Social Learner", method: "Instructor-Led Training" }
            ].map((item, idx) => (
              <div key={idx} className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-primary font-medium">{item.method}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 border border-primary/20">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Choose your preferred learning method and begin your journey to tech mastery today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90" size="lg">
              Schedule Free Consultation
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 mt-12">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2026 IT Insight Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
