import { Link } from "react-router-dom";
import { useState } from "react";
import { Briefcase, Zap, Users, Target, Shield, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ClientLogos from "@/components/ClientLogos";
import GlassCard from "@/components/GlassCard";
import ImageGridInfo from "@/components/ImageGridInfo";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-staffing.jpg";
import diverseTeamImage from "@/assets/diverse-team.jpg";
import galleryCreativeTeam from "@/assets/gallery-creative-team.jpg";
import galleryOfficeView from "@/assets/gallery-office-view.jpg";
import galleryConsultation from "@/assets/gallery-consultation.jpg";

// Benefit Flip Card Component
const BenefitFlipCard = ({
  icon: Icon,
  title,
  description,
  backContent
}: {
  icon: any;
  title: string;
  description: string;
  backContent?: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return <div className="relative h-[240px] perspective-1000" onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden">
          <div className="h-full w-full p-8 rounded-2xl border border-glass-border bg-glass/50 backdrop-blur-sm shadow-lg text-center flex flex-col items-center">
            <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center flex-shrink-0">
              <Icon size={32} className="text-background" />
            </div>
            <h3 className="text-xl font-bold mb-3 flex-shrink-0">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="h-full w-full p-6 rounded-2xl bg-gradient-to-br from-accent to-accent-glow shadow-lg flex flex-col justify-center items-center text-center overflow-hidden">
            <Icon size={40} className="text-background mb-3 flex-shrink-0" />
            <h3 className="text-lg font-bold mb-3 text-background flex-shrink-0">{title}</h3>
            <p className="text-background/90 text-xs leading-tight line-clamp-5">
              {backContent || description}
            </p>
          </div>
        </div>
      </div>
    </div>;
};

// Process Step Flip Card
const ProcessStepFlipCard = ({
  number,
  title,
  description,
  backContent,
  numberColor = "text-accent/20"
}: {
  number: string;
  title: string;
  description: string;
  backContent?: string;
  numberColor?: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Map number color to gradient
  const getGradient = () => {
    if (numberColor.includes('accent/')) return 'from-accent to-accent-glow';
    if (numberColor.includes('secondary')) return 'from-secondary to-coral';
    if (numberColor.includes('coral')) return 'from-coral to-accent';
    return 'from-accent-glow to-secondary';
  };
  return <div className="relative h-[240px] perspective-1000" onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden">
          <div className="h-full w-full p-8 rounded-2xl border border-glass-border bg-glass/50 backdrop-blur-sm shadow-lg flex flex-col">
            <div className={`text-5xl font-bold ${numberColor} mb-4 flex-shrink-0`}>{number}</div>
            <h3 className="text-xl font-bold mb-3 flex-shrink-0">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className={`h-full w-full p-6 rounded-2xl bg-gradient-to-br ${getGradient()} shadow-lg flex flex-col justify-center items-center text-center overflow-hidden`}>
            <div className="text-4xl font-bold text-background/30 mb-3 flex-shrink-0">{number}</div>
            <h3 className="text-lg font-bold mb-3 text-background flex-shrink-0">{title}</h3>
            <p className="text-background/90 text-xs leading-tight line-clamp-5">
              {backContent || description}
            </p>
          </div>
        </div>
      </div>
    </div>;
};
const StaffingServices = () => {
  const benefits = [{
    icon: Zap,
    title: "Speed & Scalability",
    description: "High-velocity sourcing with a deep talent pool including security-cleared professionals",
    backContent: "Our extensive network and streamlined processes enable rapid deployment of qualified professionals. We maintain a ready pool of pre-vetted, security-cleared talent for immediate placement."
  }, {
    icon: Target,
    title: "Quality & Fit",
    description: "Assessed for technical skills, cultural alignment, clearance status, and project readiness",
    backContent: "Every candidate undergoes comprehensive evaluation including technical assessments, behavioral interviews, cultural fit analysis, and security clearance verification to ensure optimal placement success."
  }, {
    icon: Users,
    title: "Flexible Delivery",
    description: "Contract staff, direct hire, hybrid arrangements or managed team solutions",
    backContent: "We offer multiple engagement models tailored to your needs: short-term contracts, long-term placements, project-based teams, or fully managed workforce solutions with complete oversight."
  }, {
    icon: Shield,
    title: "End-to-End Management",
    description: "Onboarding, compliance, workforce analytics and performance tracking",
    backContent: "Complete lifecycle management from onboarding through offboarding, including compliance monitoring, performance analytics, timesheet management, and continuous optimization of your workforce."
  }];
  const solutions = [{
    title: "Cleared Recruitment & Deployment",
    description: "For government, defence, or high-sensitivity commercial projects with required security clearances.",
    features: ["Active-clearance mapping", "Rapid deployment", "Ongoing clearance management", "Full compliance"],
    gradient: "from-accent to-accent-glow"
  }, {
    title: "Project & Contract Staffing",
    description: "When you have an upcoming project, surge requirement, or short-term initiative.",
    features: ["Rapid sourcing of specialists", "Flexible contract terms", "Onboarding & monitoring", "Budget-friendly models"],
    gradient: "from-secondary to-coral"
  }, {
    title: "Long-Term & Direct Hire",
    description: "For strategic hires or building your core workforce aligned to your growth.",
    features: ["Full lifecycle recruitment", "Talent-mapping support", "Cultural integration", "Retention-focused"],
    gradient: "from-coral to-secondary"
  }, {
    title: "Managed Team Solutions",
    description: "We build, manage and optimize the team on your behalf with full governance.",
    features: ["Fully managed teams", "Performance KPIs", "Delivery oversight", "Global roll-outs"],
    gradient: "from-accent-glow to-accent"
  }];
  const processes = [{
    number: "01",
    title: "Discovery & Planning",
    description: "Understanding business objectives, project timelines, required competencies, and budget.",
    backContent: "We conduct in-depth consultations to understand your organizational goals, project scope, timeline constraints, technical requirements, budget parameters, and cultural considerations to develop optimal staffing strategies.",
    numberColor: "text-accent/20"
  }, {
    number: "02",
    title: "Talent Sourcing",
    description: "Using proprietary talent network and cleared-candidate databases to identify potential candidates.",
    backContent: "Leveraging our extensive database of pre-qualified candidates, industry networks, and active sourcing strategies to identify professionals who match your specific technical, clearance, and cultural requirements.",
    numberColor: "text-secondary/20"
  }, {
    number: "03",
    title: "Selection & Onboarding",
    description: "Reference checks, clearance verification, contract negotiation, and seamless onboarding.",
    backContent: "Comprehensive vetting including reference verification, security clearance validation, skills assessment, followed by streamlined contract negotiation and structured onboarding to ensure immediate productivity.",
    numberColor: "text-coral/20"
  }, {
    number: "04",
    title: "Deployment & Tracking",
    description: "Performance monitoring, timesheet management, and workforce analytics.",
    backContent: "Ongoing management with real-time performance tracking, automated timesheet processing, compliance monitoring, and detailed workforce analytics to optimize productivity and drive continuous improvement.",
    numberColor: "text-accent-glow/20"
  }];
  return <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Staffing Services" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-coral to-secondary mb-4">
              <Briefcase size={48} className="text-background" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-coral via-secondary to-accent bg-clip-text text-transparent">
                Staffing Services
              </span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-foreground">
              Agile Talent. Strategic Deployment. Sustainable Growth.
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access to the right people, at the right time, is a competitive advantage. Our staffing services deliver the talent, flexibility and strategic alignment your organisation needs to scale with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Stand Out */}
      <section className="py-24 scroll-smooth">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Why Our Staffing Services Stand Out
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => <BenefitFlipCard key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} backContent={benefit.backContent} />)}
          </div>
        </div>
      </section>

      {/* Diverse Team Image Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden max-w-6xl mx-auto">
            <img src={diverseTeamImage} alt="Diverse Team" className="w-full h-[500px] object-cover" />
          </div>
        </div>
      </section>

      {/* Core Staffing Solutions */}
      <section className="py-24 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary to-coral bg-clip-text text-transparent">
                Core Staffing Solutions
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => <GlassCard key={index} className="p-8 animate-scale-in" style={{
            animationDelay: `${index * 0.15}s`
          }}>
                <div className={`w-full h-2 rounded-full bg-gradient-to-r ${solution.gradient} mb-6`} />
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-muted-foreground mb-6">{solution.description}</p>
                <div className="space-y-2">
                  {solution.features.map((feature, idx) => <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>)}
                </div>
              </GlassCard>)}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-coral bg-clip-text text-transparent">
                Our Process: How We Deliver Value
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {processes.map((process, index) => <ProcessStepFlipCard key={index} number={process.number} title={process.title} description={process.description} backContent={process.backContent} numberColor={process.numberColor} />)}
          </div>
        </div>
      </section>

      {/* Benefits Summary */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <GlassCard className="p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Why Choose Workforce One Staffing
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-foreground">Access to a rich talent pool including cleared professionals</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-foreground">Flexible delivery models tailored to your needs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-foreground">End-to-end workforce management and support</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <p className="text-foreground">Rapid deployment when opportunities arise</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <p className="text-foreground">Quality-focused candidate assessment</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <p className="text-foreground">Aligned with your business strategy</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Image Grid Info Section */}
      <ImageGridInfo images={[{
      src: galleryCreativeTeam,
      alt: "Dynamic team collaboration",
      label: "Flexible Staffing"
    }, {
      src: galleryOfficeView,
      alt: "Professional workspace"
    }, {
      src: galleryConsultation,
      alt: "Staffing consultation"
    }]} title="Staffing That Scales" subtitle="Flexible Talent Solutions" sections={[{
      title: "Rapid Deployment",
      icon: <Zap size={24} className="text-background" />,
      content: "When you need talent fast, we deliver. Our extensive network and streamlined onboarding processes enable us to place qualified professionals quickly, minimizing disruption to your operations."
    }, {
      title: "Quality Assurance",
      icon: <Shield size={24} className="text-background" />,
      content: "Every candidate is thoroughly vetted for technical skills, cultural fit, and professional experience. We guarantee the quality of our placements and provide ongoing support to ensure success."
    }, {
      title: "Strategic Partnership",
      icon: <Target size={24} className="text-background" />,
      content: "We're not just a staffing vendor—we're your strategic talent partner. We take time to understand your business, culture, and goals to deliver staffing solutions that drive long-term success."
    }]} reverse={true} />

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <GlassCard className="p-16 text-center animate-scale-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Scale Your Team?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your staffing needs and find the perfect talent solution.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-coral to-secondary hover:shadow-glow text-lg px-12 py-6 group">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </GlassCard>
        </div>
      </section>

      <ClientLogos />
      <Footer />
    </div>;
};
export default StaffingServices;