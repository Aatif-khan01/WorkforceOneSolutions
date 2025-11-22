import { Link } from "react-router-dom";
import { Shield, Heart, Award, Users, Rocket, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import ImageGridInfo from "@/components/ImageGridInfo";
import StickyContactButton from "@/components/StickyContactButton";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-about.jpg";
import teamCollaborationImage from "@/assets/team-collaboration.jpg";
import galleryPartnership from "@/assets/gallery-partnership.jpg";
import galleryOfficeView from "@/assets/gallery-office-view.jpg";
import galleryCreativeTeam from "@/assets/gallery-creative-team.jpg";

const About = () => {
  const principles = [
    {
      title: "Your Success Is Our Priority",
      description: "We regard you as a partner, your goals are our goals. We invest time to understand your mission, culture and outcomes.",
      icon: Heart
    },
    {
      title: "Your Data & Info Are Secure",
      description: "We handle your information responsibly and implement strong controls to protect confidentiality.",
      icon: Shield
    },
    {
      title: "Transparent Communication",
      description: "We keep you informed, respond promptly and work in the channels you prefer. No surprises, no hidden fees.",
      icon: Users
    },
    {
      title: "Quality First",
      description: "We apply disciplined processes and continuous improvement to ensure our work meets and exceeds expectations.",
      icon: Award
    }
  ];

  const industries = [
    "Defense & Aerospace",
    "Intelligence & Cybersecurity",
    "Government Contracting",
    "Healthcare & Life Sciences",
    "Information Technology"
  ];

  return (
    <>
      <Helmet>
        <title>About Workforce One Solutions | Trusted Talent & Technology Partner</title>
        <meta
          name="description"
          content="Learn how Workforce One Solutions empowers government contractors and commercial enterprises with proposal development, cleared staffing, and software expertise."
        />
        <meta
          name="keywords"
          content="about Workforce One Solutions, proposal experts, cleared staffing partner, software consultancy"
        />
        <link rel="canonical" href="https://www.workforceonesolutions.com/about" />
        <meta property="og:title" content="About Workforce One Solutions" />
        <meta
          property="og:description"
          content="Discover the mission, values, and team behind Workforce One Solutions."
        />
        <meta property="og:url" content="https://www.workforceonesolutions.com/about" />
        <meta property="og:image" content="https://www.workforceonesolutions.com/og-image.jpg" />
        <meta name="twitter:title" content="About Workforce One Solutions" />
        <meta
          name="twitter:description"
          content="Discover the mission, values, and team behind Workforce One Solutions."
        />
        <meta name="twitter:image" content="https://www.workforceonesolutions.com/og-image.jpg" />
      </Helmet>
      <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={heroImage} alt="About Us" className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover" loading="eager" decoding="async" fetchPriority="high" width={1600} height={900} />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  About Us
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Workforce One Solutions was founded with a clear purpose that is to empower
                  organizations to succeed in today's fast-paced and ever-evolving business and
                  technology landscape through talent and innovation. As a trusted partner to both
                  federal contractors and commercial enterprises, we bring together proven expertise,
                  agility, and a results-driven solutions.
                  <br /><br />
                  Our diverse range of services include Proposal Development, Cleared Recruitment,
                  Flexible Staffing Solutions, and Custom Software Development that are designed to
                  help our clients build stronger teams, streamline operations, and achieve mission-critical
                  objectives with efficiency and precision.
                  <br /><br />
                  At Workforce One Solutions, we pride ourselves on being more than just a service
                  provider. We're a strategic partner committed to innovation, measurable impact and
                  delivering excellence in every engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Collaboration Image */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="relative rounded-3xl overflow-hidden max-w-6xl mx-auto">
            <img src={teamCollaborationImage} alt="Team Collaboration" className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover" loading="lazy" decoding="async" width={1600} height={900} />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-secondary to-coral bg-clip-text text-transparent">
                Why Choose Us
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <GlassCard className="p-6 md:p-8">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-3 md:mb-4">10+</div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Years of Experience</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Combined experience in proposal management, cleared staffing, workforce deployment
                and software engineering.
              </p>
            </GlassCard>

            <GlassCard className="p-6 md:p-8">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-3 md:mb-4">100%</div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Tailor-Made Solutions</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Our services are not off-the-shelf — we align precisely with your business goals and
                operating model.
              </p>
            </GlassCard>

            <GlassCard className="p-6 md:p-8">
              <div className="text-3xl md:text-4xl font-bold text-coral mb-3 md:mb-4">$$$</div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Efficiency & Value</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Delivering high quality at competitive cost while maintaining rigorous standards.
              </p>
            </GlassCard>

            <GlassCard className="p-6 md:p-8">
              <div className="text-3xl md:text-4xl font-bold text-accent-glow mb-3 md:mb-4">✓</div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Values-Driven</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Integrity, Collaboration, Excellence and Flexibility guide every engagement.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Industries We Serve
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-5 md:gap-6 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="px-8 py-4 rounded-full border-[3px] border-border bg-background/50 backdrop-blur-sm hover:border-[#66CB00] hover:bg-[#66CB00]/10 transition-all duration-300 cursor-default shadow-md"
              >
                <span className="text-base md:text-lg font-semibold text-foreground">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Bill of Rights */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-accent to-coral bg-clip-text text-transparent">
                Our Promise to You
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">Client Bill of Rights</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
            {principles.map((principle, index) => (
              <GlassCard key={index} className="p-6 md:p-8 group">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="p-2 md:p-3 rounded-xl bg-gradient-to-br from-accent to-accent-glow group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <principle.icon size={24} className="text-background sm:w-7 sm:h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3 group-hover:text-accent transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <GlassCard className="p-6 md:p-8 max-w-3xl mx-auto">
              <p className="text-base md:text-lg text-foreground italic">
                "We are committed to delivering a standout client experience, one rooted in
                responsiveness, transparency and real results."
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Image Grid Info Section */}
      <ImageGridInfo 
        images={[
          {
            src: galleryPartnership,
            alt: "Business partnership",
            label: "Our Culture"
          },
          {
            src: galleryOfficeView,
            alt: "Modern workspace"
          },
          {
            src: galleryCreativeTeam,
            alt: "Creative collaboration"
          }
        ]} 
        title="Our Core Values" 
        subtitle="The Principles That Guide Us" 
        sections={[
          {
            title: "Integrity First",
            icon: <Shield size={24} className="text-background" />,
            content: "We operate with transparency, honesty, and ethical standards in all our interactions. Your trust is our most valuable asset, and we earn it through consistent, principled action."
          },
          {
            title: "Client-Centric Focus",
            icon: <Heart size={24} className="text-background" />,
            content: "Your success is our success. We listen deeply, understand your unique challenges, and tailor solutions that align with your goals, culture, and mission."
          },
          {
            title: "Continuous Innovation",
            icon: <Rocket size={24} className="text-background" />,
            content: "We embrace change and continuously evolve our methods, tools, and approaches to stay ahead of industry trends and deliver cutting-edge solutions."
          },
          {
            title: "Excellence & Quality",
            icon: <Award size={24} className="text-background" />,
            content: "We are committed to delivering exceptional results with precision and integrity, ensuring every solution reflects our highest standards of quality."
          }
        ]} 
        reverse={true} 
      />

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <GlassCard className="p-8 sm:p-12 md:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Join Us in Shaping the Future
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
              Partner with a team that's committed to your success.
            </p>

            <Link to="/contact">
              <Button size="lg" className="bg-[#66CB00] hover:bg-[#66CB00]/90 hover:shadow-lg text-white text-base md:text-lg px-8 sm:px-12 py-5 md:py-6 group w-full sm:w-auto transition-all duration-300">
                Get in Touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </GlassCard>
        </div>
      </section>

      {/* Sticky Buttons */}
      <StickyContactButton />
      <ScrollToTop />

      <Footer />
    </div>
    </>
  );
};

export default About;
