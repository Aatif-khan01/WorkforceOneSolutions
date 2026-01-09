import { Shield, Lock, Eye, FileCheck } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Workforce One Solutions</title>
        <meta
          name="description"
          content="Review Workforce One Solutions' privacy practices covering confidentiality, data protection, and information handling standards."
        />
        <meta
          name="keywords"
          content="Workforce One Solutions privacy policy, data protection, confidentiality statement"
        />
        <link rel="canonical" href="https://www.workforceonesolutions.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy" />
        <meta
          property="og:description"
          content="Understand how Workforce One Solutions safeguards your data."
        />
        <meta property="og:url" content="https://www.workforceonesolutions.com/privacy-policy" />
        <meta property="og:image" content="https://www.workforceonesolutions.com/og-image.jpg" />
        <meta name="twitter:title" content="Privacy Policy" />
        <meta
          name="twitter:description"
          content="Understand how Workforce One Solutions safeguards your data."
        />
        <meta name="twitter:image" content="https://www.workforceonesolutions.com/og-image.jpg" />
      </Helmet>
      <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-accent to-accent-glow mb-4">
              <Shield size={48} className="text-background" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-accent via-accent-glow to-secondary bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your privacy and confidentiality are our paramount commitment
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 scroll-smooth">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Introduction */}
            <GlassCard className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                🔒 Privacy and Confidentiality Statement
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                At Workforce One Solutions, ensuring your privacy and the confidentiality of all information is our paramount commitment. We are dedicated to maintaining the highest standards of data protection and ethical information handling.
              </p>
            </GlassCard>

            {/* Our Commitment */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  Our Commitment to Your Information
                </span>
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <GlassCard className="p-8 group hover:border-accent transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-accent to-accent-glow flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Lock size={24} className="text-background" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-foreground">Confidentiality First</h3>
                      <p className="text-muted-foreground">
                        The confidentiality of any and all information we may possess about you is of prime importance to Workforce One Solutions.
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-8 group hover:border-secondary transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-secondary to-coral flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Shield size={24} className="text-background" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-foreground">No Third-Party Sharing</h3>
                      <p className="text-muted-foreground">
                        We do not share your personal or confidential information with external third parties.
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-8 group hover:border-coral transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-coral to-accent flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Eye size={24} className="text-background" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-foreground">Purpose-Limited Use</h3>
                      <p className="text-muted-foreground">
                        Your information will only be used internally, as strictly necessary, to perform our functions efficiently and to serve your account better.
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-8 group hover:border-accent-glow transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-accent-glow to-accent flex-shrink-0 group-hover:scale-110 transition-transform">
                      <FileCheck size={24} className="text-background" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-foreground">Strict Adherence</h3>
                      <p className="text-muted-foreground">
                        We process all information strictly in accordance with our comprehensive Privacy Policy and applicable data protection laws, underscoring our focus on privacy.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>

            {/* Website Information Gathering */}
            <GlassCard className="p-8 md:p-12 bg-gradient-to-br from-accent/5 to-secondary/5">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Website Information Gathering
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-accent">Standard Technologies</h3>
                  <p className="text-foreground leading-relaxed">
                    Like most websites, Workforce One Solutions may use common internet technologies, such as cookies and server logs, to collect general, non-personal information while you browse our website. This information is typically technical and aggregated.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-secondary">Client Information Protection</h3>
                  <p className="text-foreground leading-relaxed">
                    Any specific or personally identifiable information collected from our clients or account holders is thoroughly protected under all relevant information protection laws and is exclusively used to improve our service delivery and client experience.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* Key Points Summary */}
            <GlassCard className="p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6 text-center">
                <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  Key Privacy Principles
                </span>
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-foreground">
                    We prioritize the confidentiality and security of your personal information above all else
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <p className="text-foreground">
                    Your data is never shared with third parties without your explicit consent
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0" />
                  <p className="text-foreground">
                    Information is used solely for improving our services and your experience
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent-glow mt-2 flex-shrink-0" />
                  <p className="text-foreground">
                    We maintain strict compliance with all applicable data protection regulations
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-foreground">
                    Standard web technologies are used responsibly and transparently
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* Contact Section */}
            <GlassCard className="p-8 md:p-12 text-center bg-gradient-to-br from-background/50 to-primary/10">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Questions About Our Privacy Policy?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you have any questions or concerns about how we handle your information, please don't hesitate to reach out to us.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 rounded-lg bg-[#66CB00] hover:bg-[#66CB00]/90 text-white font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Contact Us
              </a>
            </GlassCard>

            {/* Last Updated */}
            <div className="text-center text-sm text-muted-foreground">
              <p>Last Updated: November 2025</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default PrivacyPolicy;
