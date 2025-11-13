import { Link } from "react-router-dom";
import { useState } from "react";
import { Shield, Users, Search, CheckCircle, Award, ArrowRight, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ClientLogos from "@/components/ClientLogos";
import GlassCard from "@/components/GlassCard";
import ImageGridInfo from "@/components/ImageGridInfo";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-recruitment.jpg";
import securityClearanceImage from "@/assets/security-clearance.jpg";
import gallerySecurity from "@/assets/gallery-security.jpg";
import galleryInterview from "@/assets/gallery-interview.jpg";
import galleryPartnership from "@/assets/gallery-partnership.jpg";

// Simple Icon Flip Card Component - NO SCROLL
const IconFlipCard = ({ 
  icon: Icon, 
  title, 
  description,
  backContent,
  gradient = "from-accent to-secondary"
}: { 
  icon: any;
  title: string;
  description?: string;
  backContent?: string;
  gradient?: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[200px] perspective-1000"
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
          <div className="h-full w-full p-6 rounded-2xl border border-glass-border bg-glass/50 backdrop-blur-sm shadow-lg text-center flex flex-col items-center justify-center">
            <Icon className="w-12 h-12 mb-4 text-accent flex-shrink-0" />
            <h3 className="text-lg font-bold">{title}</h3>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className={`h-full w-full p-5 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg flex flex-col justify-center items-center text-center overflow-hidden`}>
            <Icon className="w-10 h-10 mb-2 text-background flex-shrink-0" />
            <h3 className="text-sm font-bold mb-2 text-background flex-shrink-0">{title}</h3>
            <p className="text-background/90 text-xs leading-tight line-clamp-4">
              {backContent || description || "Learn more about our services"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

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

  // Map icon color to gradient
  const getGradient = () => {
    if (iconColor.includes('accent')) return 'from-accent to-accent-glow';
    if (iconColor.includes('secondary')) return 'from-secondary to-coral';
    if (iconColor.includes('coral')) return 'from-coral to-accent';
    return 'from-accent-glow to-secondary';
  };

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
          <div className={`h-full w-full p-6 rounded-2xl bg-gradient-to-br ${getGradient()} shadow-lg flex flex-col justify-center items-center text-center overflow-hidden`}>
            <Icon className="w-12 h-12 mb-3 text-background flex-shrink-0" />
            <h3 className="text-base font-bold mb-3 text-background flex-shrink-0">{title}</h3>
            <p className="text-background/90 text-xs leading-tight line-clamp-6">
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
          <div className="h-full w-full p-5 rounded-2xl bg-gradient-to-br from-secondary to-coral shadow-lg flex items-center justify-center text-center overflow-hidden">
            <p className="text-background font-medium text-sm line-clamp-3 px-2">
              {backContent || `Specialized ${role.toLowerCase()} recruitment`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClearedRecruitment = () => {
  const clearanceLevels = [
    { 
      name: "Secret", 
      backContent: "Basic level clearance for access to classified information that could cause damage to national security if disclosed."
    },
    { 
      name: "Top Secret", 
      backContent: "Higher level clearance for exceptionally grave damage protection. Requires extensive background investigation."
    },
    { 
      name: "Top Secret/SCI", 
      backContent: "Sensitive Compartmented Information access. Specialized intelligence sources and methods protection."
    },
    { 
      name: "Full-Scope Polygraph", 
      backContent: "Comprehensive polygraph examination covering all aspects of security and background for the highest sensitivity positions."
    },
    { 
      name: "Counterintelligence Polygraph", 
      backContent: "Focused polygraph for positions involving counterintelligence operations and national security matters."
    },
    { 
      name: "Public Trust", 
      backContent: "Position of public trust requiring reliability, trustworthiness, and good conduct for sensitive but unclassified work."
    },
  ];

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

  const industries = [
    "Defense & Aerospace",
    "Intelligence & Cybersecurity",
    "Government Contracting",
    "Healthcare & Life Sciences",
    "Information Technology",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section - Image Only, No Text or Icon */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Cleared Recruitment" className="w-full h-full object-cover object-center" />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 scroll-smooth">
        <div className="container mx-auto px-6">
          <GlassCard className="p-12 max-w-5xl mx-auto animate-fade-in">
            <p className="text-lg text-foreground leading-relaxed">
              Our Cleared Recruitment services are designed to help government contractors and agencies find qualified professionals with the necessary clearances to meet the demands of sensitive projects. Our extensive network and database, developed over years of experience, enable us to quickly identify and connect with candidates who meet your specific clearance requirements.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Security Clearance Image Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden max-w-6xl mx-auto">
            <img 
              src={securityClearanceImage}
              alt="Security Clearance" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <GlassCard className="p-8 max-w-2xl text-center">
                <h3 className="text-3xl font-bold mb-4 text-foreground">Security First</h3>
                <p className="text-lg text-muted-foreground">
                  We maintain the highest standards of security compliance and confidentiality in all our recruitment processes.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Clearance Levels */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Security Clearance Levels
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">We specialize in sourcing professionals with active clearances</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {clearanceLevels.map((level, index) => (
              <IconFlipCard
                key={index}
                icon={Shield}
                title={level.name}
                backContent={level.backContent}
                gradient="from-accent to-secondary"
              />
            ))}
          </div>
        </div>
      </section>

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

      {/* Industries We Serve */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Industries We Serve
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <div key={index} className="px-6 py-3 rounded-full bg-glass/40 backdrop-blur-xl border border-glass-border hover:border-accent transition-colors">
                <span className="text-foreground font-medium">{industry}</span>
              </div>
            ))}
          </div>
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
              <Button size="lg" className="bg-gradient-to-r from-coral to-secondary hover:shadow-glow text-lg px-12 py-6 group">
                Start Recruiting
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </GlassCard>
        </div>
      </section>

      <ClientLogos />
      <Footer />
    </div>
  );
};

export default ClearedRecruitment;
