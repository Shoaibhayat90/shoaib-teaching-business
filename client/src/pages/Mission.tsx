import { ChevronRight, Lightbulb, Zap, Rocket, Award, CheckCircle, TrendingUp, Shield, Brain } from "lucide-react";

/**
 * Mission Page: Premium Strategic Vision
 * - Showcases the visionary foundation and strategic value proposition
 * - Presents the tiered learning roadmap
 * - Highlights core value pillars and career transformation narrative
 * - Premium, sophisticated tone aligned with prospectus
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

export default function Mission() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background backdrop-blur-md z-50 border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <img src="/manus-storage/logo-option-2_8664fe11.png" alt="IT Insight Academy" className="w-12 h-12 object-contain" />
            <div className="flex flex-col leading-tight hidden sm:block">
              <span className="font-bold text-sm text-foreground">IT Insight Academy</span>
              <span className="text-xs text-primary font-medium">Our Mission</span>
            </div>
          </a>
          <div className="flex items-center gap-4">
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Back to Home
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
              Our Visionary Foundation
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed mb-8">
              IT Insight Academy stands as a transformative force in technical education, dedicated to the core mission to <span className="font-bold text-primary">Inspire, Learn, and Innovate</span>. We bridge the gap between latent potential and market-ready proficiency.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              In an environment where digital fluency has become a non-negotiable prerequisite for professional survival, we serve as a vital catalyst for professional empowerment and personal growth. Unlike passive consumption models, IT Insight Academy offers a boutique, concierge-level educational experience.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem & Solution */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">The Challenge</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Many individuals are <span className="font-semibold">struggling with technology</span>, feeling alienated by a rapidly shifting digital landscape. The theory-practice gap is the primary hurdle for aspiring professionals.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  While academic knowledge provides a baseline, it is the strategic application of practical skills that drives immediate career velocity. Traditional education often prioritizes abstract complexity over real-world application.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Our Solution</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  IT Insight Academy is not just another online platform—it is a <span className="font-semibold">career-enabling institution</span> designed to facilitate tangible outcomes for those starting from zero.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  By prioritizing the development of skills that are immediately applicable in the workforce, we transform learners from hesitant users into active innovators. We strip away academic abstractions and focus on the specific competencies required to perform in real-world professional environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Value Proposition */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Strategic Value Proposition
            </h2>
            <p className="text-lg text-foreground/70">
              Practicality Over Theory
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Jargon-Free Instruction</h3>
                <p className="text-foreground/70">
                  By utilizing accessible, professional language, we eliminate cognitive load and confusion that prevent beginners from engaging with technology.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Step-by-Step Guidance</h3>
                <p className="text-foreground/70">
                  Each module builds logically upon the last, minimizing frustration and ensuring high speed-to-competency. No learner is left behind.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Rocket className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Real-World Application</h3>
                <p className="text-foreground/70">
                  Training focused exclusively on functional skills used in modern job roles, directly facilitating learner confidence and career transitions.
                </p>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Our commitment to practical value informs a tiered curriculum designed to meet the rigorous demands of the modern economy. We recognize that many individuals are currently <span className="font-semibold">struggling with technology</span>, and our mission is to transform them from hesitant users into confident, market-ready professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tiered Learning Roadmap */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center text-foreground">
              The IT Insight Academy Learning Roadmap
            </h2>
            <p className="text-lg text-center text-foreground/70 mb-16">
              A structured education that scales alongside your ambitions—from foundational digital literacy to high-level technical specializations.
            </p>

            <div className="space-y-6">
              {[
                {
                  tier: "Tier 1: Foundational Literacy",
                  focus: "Basic Computer Skills, Internet Usage",
                  impact: "Neutralizes the 'digital divide' by establishing the essential fluency required for any modern workplace.",
                  icon: "🎓",
                  color: "from-blue-500/10 to-blue-500/5"
                },
                {
                  tier: "Tier 2: Business Productivity",
                  focus: "Microsoft Office, Business English",
                  impact: "Optimizes administrative throughput and ensures the professional articulation of value in corporate settings.",
                  icon: "💼",
                  color: "from-teal-500/10 to-teal-500/5"
                },
                {
                  tier: "Tier 3: Technical Specialization",
                  focus: "Cyber Security, Software Quality Assurance",
                  impact: "Cultivates high-demand expertise for specialized technical roles within the global IT sector.",
                  icon: "🔧",
                  color: "from-purple-500/10 to-purple-500/5"
                },
                {
                  tier: "Tier 4: Advanced Intelligence",
                  focus: "Modern AI Tools",
                  impact: "Positions the learner at the vanguard of innovation, utilizing automated systems to maximize individual output.",
                  icon: "🚀",
                  color: "from-orange-500/10 to-orange-500/5"
                }
              ].map((item, idx) => (
                <div key={idx} className={`bg-gradient-to-r ${item.color} rounded-xl p-8 border border-border hover:shadow-lg transition-shadow`}>
                  <div className="flex items-start gap-6">
                    <div className="text-4xl">{item.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-foreground">{item.tier}</h3>
                      <p className="text-foreground/80 font-semibold mb-3">Focus Areas: <span className="text-foreground">{item.focus}</span></p>
                      <p className="text-foreground/70 leading-relaxed">{item.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-primary/5 rounded-xl p-8 border border-primary/20">
              <p className="text-lg text-foreground/80 leading-relaxed">
                <span className="font-bold text-primary">The Strategic Integration:</span> Business English and Modern AI Tools are deliberate strategic choices. Technical skills represent the "what," but Business English and AI serve as force multipliers. Business English enables the effective communication of technical value to stakeholders, while AI tools accelerate the execution of complex technical tasks. This integrated approach ensures that graduates are not just technically capable, but are complete, career-ready professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars of Success */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              The Pathway to Success
            </h2>
            <p className="text-lg text-foreground/70">
              Three principles that guide our commitment to "Grow fast. Succeed."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow text-center border-t-4 border-primary">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Confidence Building</h3>
              <p className="text-foreground/70">
                We move learners from the frustration of "struggling with technology" to the empowerment of "mastering tools," allowing them to approach new professional challenges with authority.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow text-center border-t-4 border-primary">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Skill Upgrading</h3>
              <p className="text-foreground/70">
                Our step-by-step instruction ensures that a learner's skill set is not only current but superior to baseline market requirements, facilitating rapid promotion and career growth.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow text-center border-t-4 border-primary">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Future-Proofing</h3>
              <p className="text-foreground/70">
                By integrating Cyber Security and AI, we prepare students for long-term shifts in the technological landscape, ensuring professional value remains resilient against automation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Certification Pathway */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Industry Certification & Career Advancement
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Every course at IT Insight Academy is strategically designed to prepare you for industry-recognized certification exams from Microsoft and Google.
              </p>
            </div>

            <Card className="p-12 mb-12 border-2 border-primary/30 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                    <span className="text-5xl">🏆</span>
                    Certification Readiness
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <span className="text-2xl text-primary">✓</span>
                      <div>
                        <p className="font-bold text-foreground">Comprehensive Curriculum</p>
                        <p className="text-foreground/70">Each course covers all exam objectives and real-world scenarios</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-2xl text-primary">✓</span>
                      <div>
                        <p className="font-bold text-foreground">Study Materials Included</p>
                        <p className="text-foreground/70">Official resources, practice exams, and hands-on labs included with every course</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-2xl text-primary">✓</span>
                      <div>
                        <p className="font-bold text-foreground">Expert Guidance</p>
                        <p className="text-foreground/70">Learn from instructors who are themselves certified professionals</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                    <span className="text-5xl">📈</span>
                    Your Path Forward
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <span className="text-2xl text-primary">✓</span>
                      <div>
                        <p className="font-bold text-foreground">Career Advancement</p>
                        <p className="text-foreground/70">Certifications validate your skills to employers and unlock new opportunities</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-2xl text-primary">✓</span>
                      <div>
                        <p className="font-bold text-foreground">Salary Growth</p>
                        <p className="text-foreground/70">Certified professionals earn significantly more than non-certified peers</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-2xl text-primary">✓</span>
                      <div>
                        <p className="font-bold text-foreground">Professional Credibility</p>
                        <p className="text-foreground/70">Industry-recognized credentials demonstrate your commitment to excellence</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="bg-white rounded-xl p-8 border border-primary/20 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-foreground text-center">The Certification Journey</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-5xl mb-4">1️⃣</div>
                  <h4 className="font-bold text-foreground mb-2">Enroll in Course</h4>
                  <p className="text-sm text-foreground/70">Choose a course aligned with your career goals</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-4">2️⃣</div>
                  <h4 className="font-bold text-foreground mb-2">Complete Training</h4>
                  <p className="text-sm text-foreground/70">Master all course material and hands-on projects</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-4">3️⃣</div>
                  <h4 className="font-bold text-foreground mb-2">Prepare for Exam</h4>
                  <p className="text-sm text-foreground/70">Use study resources and practice exams to prepare</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-4">4️⃣</div>
                  <h4 className="font-bold text-foreground mb-2">Get Certified</h4>
                  <p className="text-sm text-foreground/70">Pass the exam and earn your credential</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-foreground/80 mb-6">
                <span className="font-bold text-primary">Our Promise:</span> Complete any of our courses, and you will be fully prepared for the corresponding certification exam. We don't just teach—we certify.
              </p>
              <a href="/certifications" className="inline-block">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Explore Certifications
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Transform Your Future?
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              If you are ready to upgrade your skills, change your future, and step into the world of technology with confidence, you are exactly where you need to be. Welcome to IT Insight Academy.
            </p>
            <p className="text-2xl font-bold text-primary mb-8">
              Learn smart. Grow fast. Succeed.
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
      <footer className="py-12 bg-foreground text-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">IT Insight Academy</h4>
              <p className="text-background/80">Bridging the gap to digital mastery</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="/" className="hover:text-background transition">Home</a></li>
                <li><a href="/#courses" className="hover:text-background transition">Courses</a></li>
                <li><a href="/#methods" className="hover:text-background transition">Learning Methods</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Our Mission</h4>
              <p className="text-background/80">Inspire. Learn. Innovate.</p>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/80">
            <p>&copy; 2026 IT Insight Academy. Learn smart. Grow fast. Succeed.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
