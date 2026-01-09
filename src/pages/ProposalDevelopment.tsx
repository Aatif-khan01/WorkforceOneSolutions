import { useState } from "react";
import { Link } from "react-router-dom";
import { FileText, Target, Pen, Palette, CheckSquare, Calendar, ArrowRight, Lightbulb, Users as UsersIcon, Trophy } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ClientLogos from "@/components/ClientLogos";
import GlassCard from "@/components/GlassCard";
import FlipCard from "@/components/FlipCard";
import ImageGridInfo from "@/components/ImageGridInfo";
import StickyContactButton from "@/components/StickyContactButton";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import galleryPresentation from "@/assets/gallery-presentation.jpg";
import galleryTeam from "@/assets/gallery-team-1.jpg";
import galleryBuilding from "@/assets/gallery-building-1.jpg";

const ProposalDevelopment = () => {
  const services = [
    {
      icon: Target,
      title: "Capture Planning & Strategy",
      description: "Opportunity analysis, competitor intelligence, win themes, and proposal roadmap.",
      backContent: "We analyze market opportunities, assess competition, develop strategic win themes, and create comprehensive proposal roadmaps to maximize your success rate.",
      gradient: "from-accent to-accent-glow"
    },
    {
      icon: Pen,
      title: "Proposal Writing & Content",
      description: "Technical volumes, management plans, past performance and capability statements.",
      backContent: "Our expert writers craft compelling technical volumes, comprehensive management plans, and persuasive past performance narratives that showcase your capabilities.",
      gradient: "from-secondary to-coral"
    },
    {
      icon: Palette,
      title: "Graphics & Design",
      description: "Professional layouts, infographics, charts, and brand-aligned visuals.",
      backContent: "Transform complex data into stunning visuals with our professional design team. We create infographics, charts, and layouts that enhance readability and impact.",
      gradient: "from-coral to-accent"
    },
    {
      icon: CheckSquare,
      title: "Compliance Review & QA",
      description: "Section-by-section compliance mapping, Red/Pink/Gold team reviews.",
      backContent: "Ensure 100% compliance through rigorous section-by-section mapping and multi-level team reviews, eliminating risk and maximizing evaluation scores.",
      gradient: "from-accent-glow to-secondary"
    },
    {
      icon: Calendar,
      title: "Project Management",
      description: "Timeline management, resource allocation, collaboration and submission support.",
      backContent: "We orchestrate every aspect of proposal development with meticulous timeline management, strategic resource allocation, and seamless submission coordination.",
      gradient: "from-secondary to-accent"
    }
  ];

  const phases = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "Understanding goals, capture data, and establishing win themes.",
      backContent: "We begin by thoroughly understanding your objectives, analyzing capture intelligence, competitive landscape, and collaboratively establishing powerful win themes that differentiate your proposal.",
      gradient: "from-accent to-secondary"
    },
    {
      number: "02",
      title: "Development & Drafting",
      description: "Combining technical, management, and pricing inputs.",
      backContent: "Our team synthesizes technical expertise, management strategies, and pricing models into cohesive, compelling content that addresses all evaluation criteria and stakeholder requirements.",
      gradient: "from-secondary to-coral"
    },
    {
      number: "03",
      title: "Review & Refinement",
      description: "Iterative reviews to enhance clarity and compliance.",
      backContent: "Through multiple review cycles including Red/Pink/Gold team assessments, we refine every element to enhance clarity, strengthen messaging, and ensure complete compliance.",
      gradient: "from-coral to-accent-glow"
    },
    {
      number: "04",
      title: "Finalization & Submit",
      description: "Quality checks, formatting, packaging and submission.",
      backContent: "Final quality assurance, professional formatting, meticulous packaging, and timely submission ensure your proposal is delivered flawlessly and makes the strongest possible impression.",
      gradient: "from-accent-glow to-accent"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Proposal Development Services | Workforce One Solutions</title>
        <meta
          name="description"
          content="Win federal and commercial bids with capture planning, proposal writing, graphics, compliance, and project management from Workforce One Solutions."
        />
        <meta
          name="keywords"
          content="proposal development, capture planning, RFP support, federal proposal writing"
        />
        <link rel="canonical" href="https://www.workforceonesolutions.com/services/proposal" />
        <meta property="og:title" content="Proposal Development Services" />
        <meta
          property="og:description"
          content="Strategic capture planning, proposal writing, design, and compliance reviews to maximize awards."
        />
        <meta property="og:url" content="https://www.workforceonesolutions.com/services/proposal" />
        <meta property="og:image" content="https://www.workforceonesolutions.com/og-image.jpg" />
        <meta name="twitter:title" content="Proposal Development Services" />
        <meta
          name="twitter:description"
          content="Strategic capture planning, proposal writing, design, and compliance reviews to maximize awards."
        />
        <meta name="twitter:image" content="https://www.workforceonesolutions.com/og-image.jpg" />
      </Helmet>
      <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section - Icon Above Title */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden pt-20 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Desktop Layout - Centered */}
          <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center max-w-7xl mx-auto space-y-8">
            {/* Small Hexagon Above Title */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              <div className="w-28 h-28 bg-[#66CB00] clip-hexagon flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-xl">
                <FileText size={40} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-center">Proposal Development</h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-center">
              Strategy, Compliance, and Winning Federal Contracts
            </p>
          </div>
          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden text-center space-y-8 max-w-3xl mx-auto">
            <div className="flex justify-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#66CB00] clip-hexagon flex items-center justify-center shadow-xl">
                <FileText size={32} className="text-white sm:w-10 sm:h-10" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Proposal Development</h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Strategy, Compliance, and Winning Federal Contracts
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 scroll-smooth">
        <div className="container mx-auto px-6">
          <GlassCard className="p-12 max-w-5xl mx-auto">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Securing high-value federal government contracts demands far more than basic writing; it requires strategic mastery and guaranteed compliance. Our Proposal Development services provide the comprehensive partnership necessary to turn complex solicitations into successful contracts. We move beyond simple writing to offer end-to-end proposal management, from initial RFI analysis and focused "win theme" development to driving the entire RFP (Request for Proposal) process to a perfectly compliant submission. We integrate seamlessly with your internal teams to capture crucial information, develop robust pricing strategies, and ensure absolute compliance with every instruction outlined in the Statement of Work (SOW) or Performance Work Statement (PWS) eliminating the risks that often derails prospective wins.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Our team's mastery lies in specialized technical writing and strategic architecture for the federal evaluation board. We understand that evaluators discard non-compliant or confusing proposals instantly. We eliminate this risk by translating your most complex technical architectures, methodologies, and engineering concepts into compelling, highly scoreable, and indisputably compliant narratives. By leveraging a deep, intimate knowledge of federal evaluation criteria (FAR/DFARS), we structure and articulate every section, from Management Plans to Technical Solutions, to maximize your probability of award.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Client Logos Section */}
      <ClientLogos />

      {/* Core Services */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Our Core Services
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <FlipCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                backContent={service.backContent}
                gradient={service.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4-Phase Process */}
      <section className="py-24 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary to-coral bg-clip-text text-transparent">
                Our 4-Phase Process
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {phases.map((phase, index) => (
              <PhaseFlipCard
                key={index}
                number={phase.number}
                title={phase.title}
                description={phase.description}
                backContent={phase.backContent}
                gradient={phase.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <GlassCard className="p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-accent to-coral bg-clip-text text-transparent">
                Why Choose Our Proposal Services
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-foreground">Deep expertise in government and commercial contracting</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-foreground">Proven track record of winning proposals</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-foreground">Comprehensive compliance and quality assurance</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <p className="text-foreground">Strategic approach with data-driven insights</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <p className="text-foreground">Professional design and visual presentation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <p className="text-foreground">Full project management and submission support</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Image Grid Info Section */}
      <ImageGridInfo
        images={[
          { src: galleryPresentation, alt: "Proposal presentation", label: "Winning Strategies" },
          { src: galleryTeam, alt: "Proposal team collaboration" },
          { src: galleryBuilding, alt: "Corporate excellence" }
        ]}
        title="Our Proposal Approach"
        subtitle="Strategy-Driven Excellence"
        sections={[
          {
            title: "Strategic Insight",
            icon: <Lightbulb size={24} className="text-background" />,
            content: "We don't just write proposals, we develop winning strategies. Our team analyzes the competitive landscape, identifies your unique value proposition, and crafts compelling narratives that resonate with evaluators."
          },
          {
            title: "Collaborative Process",
            icon: <UsersIcon size={24} className="text-background" />,
            content: "We work as an extension of your team, collaborating closely with subject matter experts, executives, and stakeholders to ensure every proposal reflects your organization's strengths and capabilities."
          },
          {
            title: "Proven Success",
            icon: <Trophy size={24} className="text-background" />,
            content: "Our proposals have secured hundreds of millions in contract value for our clients. We bring battle-tested methodologies, compliance expertise, and creative excellence to every engagement."
          }
        ]}
        reverse={true}
      />

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <GlassCard className="p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Win Your Next Contract?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's craft a proposal that stands out and delivers results.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-[#66CB00] hover:bg-[#66CB00]/90 hover:shadow-lg text-white text-lg px-12 py-6 group transition-all duration-300">
                Start Your Proposal
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

// ---- Helper (Flip) Component for the phase cards ----
const PhaseFlipCard = ({
  number,
  title,
  description,
  backContent,
  gradient = "from-accent to-secondary"
}: {
  number: string;
  title: string;
  description: string;
  backContent?: string;
  gradient?: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div
      className="relative h-[280px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden">
          <div className="h-full w-full p-8 rounded-2xl border border-glass-border bg-glass/50 backdrop-blur-sm shadow-lg text-center">
            <div className="text-6xl font-bold text-accent/20 mb-4">{number}</div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>

        {/* Back Side - Changed to solid green */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="h-full w-full p-8 rounded-2xl bg-[#66CB00] shadow-lg flex flex-col justify-center items-center text-center">
            <div className="text-5xl font-bold text-white/30 mb-3">{number}</div>
            <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
            <p className="text-white/90 text-sm leading-relaxed">
              {backContent || description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalDevelopment;
