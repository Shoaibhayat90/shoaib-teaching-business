import { CheckCircle, DollarSign, Users, FileText, Phone, Mail } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Funding() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Affordable Learning with <span className="text-primary">Alberta Funding</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Don't let cost be a barrier to your tech education. Explore funding options available to Alberta residents.
            </p>
          </div>
        </div>
      </section>

      {/* Funding Programs Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
              Funding Programs Available
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Alberta Student Loans */}
              <div className="bg-white rounded-xl p-8 border border-border shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Alberta Student Loans</h3>
                <p className="text-foreground/70 mb-4">
                  Low-interest loans for eligible post-secondary students. Repay after graduation.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Up to $210/week available</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Flexible repayment options</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Interest relief available</span>
                  </div>
                </div>
                <p className="text-sm text-foreground/60 mb-4">
                  <strong>Eligibility:</strong> Alberta resident, Canadian citizen/permanent resident, full-time student
                </p>
                <a href="https://www.alberta.ca/student-loans-and-grants" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">Learn More →</Button>
                </a>
              </div>

              {/* Alberta Grants */}
              <div className="bg-white rounded-xl p-8 border border-border shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Alberta Grants</h3>
                <p className="text-foreground/70 mb-4">
                  Non-repayable grants for students with financial need. You don't have to pay it back.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Up to $3,200/year</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Need-based assistance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">No repayment required</span>
                  </div>
                </div>
                <p className="text-sm text-foreground/60 mb-4">
                  <strong>Eligibility:</strong> Financial need, Alberta resident, eligible program
                </p>
                <a href="https://www.alberta.ca/student-loans-and-grants" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">Learn More →</Button>
                </a>
              </div>

              {/* EI Training Support */}
              <div className="bg-white rounded-xl p-8 border border-border shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">EI Training Support</h3>
                <p className="text-foreground/70 mb-4">
                  Employment Insurance can cover training costs for unemployed or underemployed workers.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Full tuition coverage possible</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Continued EI benefits during training</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Career-focused programs</span>
                  </div>
                </div>
                <p className="text-sm text-foreground/60 mb-4">
                  <strong>Eligibility:</strong> Currently receiving EI, approved training program
                </p>
                <a href="https://www.canada.ca/en/services/benefits/ei/ei-training.html" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">Learn More →</Button>
                </a>
              </div>

              {/* Employer Training */}
              <div className="bg-white rounded-xl p-8 border border-border shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Employer-Sponsored Training</h3>
                <p className="text-foreground/70 mb-4">
                  Many Calgary employers offer professional development budgets for employee training.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Employer pays for training</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Group discounts available</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Flexible scheduling</span>
                  </div>
                </div>
                <p className="text-sm text-foreground/60 mb-4">
                  <strong>Eligibility:</strong> Employed, employer has training budget
                </p>
                <a href="/contact">
                  <Button variant="outline" className="w-full">Contact for Group Training →</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Checker Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-foreground">
              Check Your Eligibility
            </h2>
            
            <div className="bg-white rounded-xl p-8 border border-border shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Quick Eligibility Check</h3>
                  <p className="text-foreground/70 mb-4">
                    Answer a few quick questions to see which funding programs you might qualify for.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <p className="font-semibold text-foreground mb-2">Are you an Alberta resident?</p>
                    <p className="text-sm text-foreground/70">You must be a Canadian citizen or permanent resident living in Alberta.</p>
                  </div>

                  <div className="p-4 bg-background rounded-lg border border-border">
                    <p className="font-semibold text-foreground mb-2">What is your current employment status?</p>
                    <p className="text-sm text-foreground/70">Employed • Unemployed • Underemployed • Student • Other</p>
                  </div>

                  <div className="p-4 bg-background rounded-lg border border-border">
                    <p className="font-semibold text-foreground mb-2">Do you have financial need?</p>
                    <p className="text-sm text-foreground/70">Grants are available for students with demonstrated financial need.</p>
                  </div>
                </div>

                <Button 
                  onClick={() => setShowForm(true)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3"
                  size="lg"
                >
                  Start Eligibility Check →
                </Button>
              </div>
            </div>

            {showForm && (
              <div className="mt-8 bg-white rounded-xl p-8 border border-border shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Funding Eligibility Form</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="your@email.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Are you an Alberta resident?</label>
                    <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Select...</option>
                      <option>Yes, I live in Alberta</option>
                      <option>No, I live outside Alberta</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Employment Status</label>
                    <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Select...</option>
                      <option>Employed</option>
                      <option>Unemployed</option>
                      <option>Underemployed</option>
                      <option>Currently a Student</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Are you receiving EI benefits?</label>
                    <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Select...</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="+1 (555) 000-0000" />
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3" size="lg">
                    Check My Eligibility
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">How do I apply for Alberta Student Loans?</h3>
                <p className="text-foreground/70">
                  You can apply online at <a href="https://www.alberta.ca" className="text-primary hover:underline">alberta.ca</a>. You'll need to provide proof of residency, income information, and enrollment confirmation from our academy.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">Can I combine multiple funding sources?</h3>
                <p className="text-foreground/70">
                  Yes! Many students combine Alberta Student Loans with grants and employer funding. Our funding advisor chatbot can help you find the best combination for your situation.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">How long does the funding approval process take?</h3>
                <p className="text-foreground/70">
                  Alberta Student Loans typically take 2-4 weeks to process. EI training approval can vary. We recommend starting the application process before your course begins.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">What if I don't qualify for any funding?</h3>
                <p className="text-foreground/70">
                  We offer payment plans and discounts for multiple courses. Contact us to discuss flexible payment options that work for your budget.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">Can I use funding for group/corporate training?</h3>
                <p className="text-foreground/70">
                  Yes! We offer special group rates for employers. Contact us to discuss corporate training packages and employer funding options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Ready to Start Your Tech Journey?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Our Funding Advisor chatbot is available 24/7 to answer your questions about Alberta funding options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get Started Today
                </Button>
              </a>
              <a href="/courses">
                <Button size="lg" variant="outline">
                  Explore Courses
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
