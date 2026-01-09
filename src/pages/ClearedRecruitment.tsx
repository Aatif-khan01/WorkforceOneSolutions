import { Link } from "react-router-dom";
import { useState } from "react";
import { Shield, Users, Search, CheckCircle, Award, ArrowRight, Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ClientLogos from "@/components/ClientLogos";
import GlassCard from "@/components/GlassCard";
import ImageGridInfo from "@/components/ImageGridInfo";
import StickyContactButton from "@/components/StickyContactButton";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import gallerySecurity from "@/assets/gallery-security.jpg";
import galleryInterview from "@/assets/gallery-interview.jpg";
import galleryPartnership from "@/assets/gallery-partnership.jpg";

// Process Step Flip Card - NO SCROLL
const ProcessFlipCard = ({ 
  icon: Icon, 
  title, 
  description,
  backContent,
  iconColor = "text-accent"
}: { 
  icon: any;
  title: string;
  description: string;
  backContent?: string;
  iconColor?: string;
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
          <div className="h-full w-full p-8 rounded-2xl border border-glass-border bg-glass/50 backdrop-blur-sm shadow-lg flex flex-col">
            <Icon className={`w-16 h-16 mb-6 flex-shrink-0 ${iconColor}`} />
            <h3 className="text-xl font-bold mb-3 flex-shrink-0">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="h-full w-full p-6 rounded-2xl bg-[#66CB00] shadow-lg flex flex-col justify-center items-center text-center overflow-hidden">
            <Icon className="w-12 h-12 mb-3 text-white flex-shrink-0" />
            <h3 className="text-base font-bold mb-3 text-white flex-shrink-0">{title}</h3>
            <p className="text-white/90 text-xs leading-tight line-clamp-6">
              {backContent || description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Role Flip Card - NO SCROLL
const RoleFlipCard = ({ 
  role,
  backContent
}: { 
  role: string;
  backContent?: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[100px] perspective-1000"
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
          <div className="h-full w-full p-6 rounded-2xl border border-glass-border bg-glass/50 backdrop-blur-sm shadow-lg flex items-center space-x-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center flex-shrink-0">
              <CheckCircle size={24} className="text-background" />
            </div>
            <span className="text-lg font-semibold truncate">{role}</span>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="h-full w-full p-5 rounded-2xl bg-[#66CB00] shadow-lg flex items-center justify-center text-center overflow-hidden">
            <p className="text-white font-medium text-sm line-clamp-3 px-2">
              {backContent || `Specialized ${role.toLowerCase()} recruitment`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClearedRecruitment = () => {
  const roles = [
    { name: "Cybersecurity Experts", backContent: "Elite security professionals protecting critical infrastructure and classified systems" },
    { name: "Intelligence Analysts", backContent: "Expert analysts processing and evaluating classified intelligence data" },
    { name: "Software Engineers", backContent: "Cleared developers building secure mission-critical applications" },
    { name: "Systems Administrators", backContent: "Professionals managing classified networks and secure IT infrastructure" },
    { name: "Project Managers", backContent: "Leadership for sensitive government and defense programs" },
    { name: "Technical Support Specialists", backContent: "Cleared support staff for classified systems and operations" },
  ];

  const processes = [
    {
      icon: Search,
      title: "Needs Assessment",
      description: "Understanding your specific requirements and project goals.",
      backContent: "We conduct comprehensive consultations to understand clearance levels, technical skills, timeline requirements, and cultural fit for your organization.",
      iconColor: "text-accent"
    },
    {
      icon: Users,
      title: "Candidate Sourcing",
      description: "Utilizing our database and industry connections to find qualified candidates.",
      backContent: "Our proprietary database of cleared professionals and extensive network enable rapid identification of candidates matching your exact requirements.",
      iconColor: "text-secondary"
    },
    {
      icon: CheckCircle,
      title: "Screening & Vetting",
      description: "Thorough background checks and interviews to ensure candidates meet all requirements.",
      backContent: "Multi-stage evaluation including technical assessments, clearance verification, reference checks, and comprehensive security protocol validation.",
      iconColor: "text-coral"
    },
    {
      icon: Award,
      title: "Placement & Onboarding",
      description: "Facilitating smooth transitions for new hires with full security protocol compliance.",
      backContent: "Seamless integration with security briefings, clearance transfers, and ongoing support to ensure immediate productivity in your environment.",
      iconColor: "text-accent-glow"
    },
  ];

  return (
    <>
      <Helmet>
        <title>Cleared Recruitment Services | Workforce One Solutions</title>
        <meta
          name="description"
          content="Access fully vetted professionals with active security clearances, from Secret to TS/SCI with polygraph, through Workforce One Solutions."
        />
        <meta
          name="keywords"
          content="cleared recruitment, security clearance staffing, TS/SCI hiring, cleared talent provider"
        />
        <link rel="canonical" href="https://www.workforceonesolutions.com/services/recruitment" />
        <meta property="og:title" content="Cleared Recruitment Services" />
        <meta
          property="og:description"
          content="Rapidly deploy mission-ready talent with active security clearances."
        />
        <meta property="og:url" content="https://www.workforceonesolutions.com/services/recruitment" />
        <meta property="og:image" content="https://www.workforceonesolutions.com/og-image.jpg" />
        <meta name="twitter:title" content="Cleared Recruitment Services" />
        <meta
          name="twitter:description"
          content="Rapidly deploy mission-ready talent with active security clearances."
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
                <Shield size={40} className="text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-center">
              Cleared Recruitment
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground text-center">
              Securing Your Mission-Critical Talent
            </p>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden text-center space-y-8 max-w-3xl mx-auto">
            {/* Small Hexagon for Mobile */}
            <div className="flex justify-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#66CB00] clip-hexagon flex items-center justify-center shadow-xl">
                <Shield size={32} className="text-white sm:w-10 sm:h-10" />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Cleared Recruitment
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground">
              Securing Your Mission-Critical Talent
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 scroll-smooth">
        <div className="container mx-auto px-6">
          <GlassCard className="p-12 max-w-5xl mx-auto animate-fade-in">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              For projects demanding the highest levels of security and trust, our Cleared Recruitment services provide rapid and reliable access to the nation's most trusted professionals. We specialize in sourcing, vetting, and placing experts with the full spectrum of required U.S. Government security clearances. This includes foundational levels like NACI and Public Trust, through to high-level clearances such as Secret, Top Secret, Top Secret with SCI (TS/SCI), Counter Intelligence Polygraph (CI Poly), and Full Scope Polygraph (FS Poly). We understand that time is critical for mission support, which is why we offer flexible staffing solutions for short-term, long-term, and full-time durations, ensuring your organization remains fully compliant and operationally ready without delay.
            </p>
            <p className="text-lg text-foreground leading-relaxed"> 
              Our dedicated expertise in this highly specialized domain sets us apart. We operate with an unrivaled understanding of the security clearance landscape and the unique demands of government and defense contracting. Our network consists exclusively of actively cleared professionals, significantly reducing your time-to-hire for critical roles.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Client Logos Section */}
      <ClientLogos />

      {/* Recruitment Process */}
      <section className="py-24 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary to-coral bg-clip-text text-transparent">
                End-to-End Recruitment Process
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {processes.map((process, index) => (
              <ProcessFlipCard
                key={index}
                icon={process.icon}
                title={process.title}
                description={process.description}
                backContent={process.backContent}
                iconColor={process.iconColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Roles */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-coral bg-clip-text text-transparent">
                Specialized Roles We Fill
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {roles.map((role, index) => (
              <RoleFlipCard
                key={index}
                role={role.name}
                backContent={role.backContent}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-6">
          <GlassCard className="p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Why Choose Our Cleared Recruitment
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-accent">Expertise in Cleared Recruitment</h3>
                  <p className="text-muted-foreground">Years of experience in the industry with deep understanding of security clearance complexities.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-secondary">Extensive Network</h3>
                  <p className="text-muted-foreground">Vast database of cleared professionals allows us to quickly find the right candidates.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-coral">Compliance Assurance</h3>
                  <p className="text-muted-foreground">We adhere to all federal regulations and security protocols ensuring placements meet necessary standards.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-accent-glow">Tailored Solutions</h3>
                  <p className="text-muted-foreground">We work closely with you to understand specific requirements and provide customized staffing solutions.</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Image Grid Info Section */}
      <ImageGridInfo
        images={[
          { src: gallerySecurity, alt: "Security operations", label: "Cleared Professionals" },
          { src: galleryInterview, alt: "Professional interview" },
          { src: galleryPartnership, alt: "Trusted partnerships" },
        ]}
        title="Our Recruitment Excellence"
        subtitle="Finding Mission-Critical Talent"
        sections={[
          {
            title: "Rigorous Vetting",
            icon: <CheckCircle size={24} className="text-background" />,
            content: "Every candidate undergoes comprehensive screening including technical assessments, security verification, reference checks, and cultural fit evaluation to ensure they meet the highest standards.",
          },
          {
            title: "Clearance Expertise",
            icon: <Award size={24} className="text-background" />,
            content: "We specialize in all clearance levels from Confidential to TS/SCI with poly. Our team understands the nuances of security requirements and maintains relationships with pre-cleared talent pools.",
          },
          {
            title: "Speed to Mission",
            icon: <Target size={24} className="text-background" />,
            content: "Time is critical in cleared recruitment. Our extensive network and streamlined processes enable us to quickly identify, vet, and deliver qualified candidates who are ready to contribute from day one.",
          },
        ]}
      />

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <GlassCard className="p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Cleared Team?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's connect you with top-tier security-cleared professionals.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-[#66CB00] hover:bg-[#66CB00]/90 hover:shadow-lg text-white text-lg px-12 py-6 group transition-all duration-300">
                Start Recruiting
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

export default ClearedRecruitment;
