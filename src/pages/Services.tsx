import { Link } from "react-router-dom";
import { FileText, Users, Briefcase, Code, ArrowRight, Target, Zap, Shield, Check, Layers, Award, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ClientLogos from "@/components/ClientLogos";
import GlassCard from "@/components/GlassCard";
import ImageGridInfo from "@/components/ImageGridInfo";
import StickyContactButton from "@/components/StickyContactButton";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import galleryPresentation from "@/assets/gallery-presentation.jpg";
import galleryDevWork from "@/assets/gallery-dev-work.jpg";
import galleryConsultation from "@/assets/gallery-consultation.jpg";
import serviceProposal from "@/assets/service-proposal.jpg";
import serviceRecruitment from "@/assets/service-recruitment.jpg";
import serviceStaffing from "@/assets/service-staffing.jpg";
import serviceSoftware from "@/assets/service-software.jpg";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Strategic Proposal Development",
      description: "Accelerating your success in federal contracting through Strategic Proposal Development.",
      link: "/services/proposal",
      gradient: "from-accent to-accent-glow",
      image: serviceProposal,
    },
    {
      icon: Users,
      title: "Cleared Recruitment",
      description: "Accelerated access to highly qualified and cleared professionals for your mission-critical projects.",
      link: "/services/recruitment",
      gradient: "from-secondary to-coral",
      image: serviceRecruitment,
    },
    {
      icon: Briefcase,
      title: "Workforce Staffing",
      description: "Connecting your business with thoroughly vetted talent that fits your culture and mission.",
      link: "/services/staffing",
      gradient: "from-coral to-secondary",
      image: serviceStaffing,
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software development that accelerates your market growth and competitive advantage.",
      link: "/services/software",
      gradient: "from-accent-glow to-accent",
      image: serviceSoftware,
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We begin with an in-depth understanding of your needs, goals and constraints.",
      icon: Target,
    },
    {
      number: "02",
      title: "Planning & Design",
      description: "We develop a customised roadmap, whether that's a bid strategy, recruitment campaign, staffing model or software architecture.",
      icon: Zap,
    },
    {
      number: "03",
      title: "Execution & Delivery",
      description: "We activate the plan, carefully managing execution, quality, risk and stakeholder communication.",
      icon: Shield,
    },
    {
      number: "04",
      title: "Review & Optimize",
      description: "We monitor results, gather feedback, and refine the approach to ensure you're set up for sustained success.",
      icon: Check,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Professional Services | Proposal, Staffing, Software & Recruitment</title>
        <meta
          name="description"
          content="Explore Workforce One Solutions services spanning proposal development, cleared recruitment, workforce staffing, and custom software development."
        />
        <meta
          name="keywords"
          content="proposal development services, cleared recruitment services, workforce staffing provider, software development agency"
        />
        <link rel="canonical" href="https://www.workforceonesolutions.com/services" />
        <meta property="og:title" content="Services | Workforce One Solutions" />
        <meta
          property="og:description"
          content="One partner for proposal strategy, cleared talent, workforce staffing, and software delivery."
        />
        <meta property="og:url" content="https://www.workforceonesolutions.com/services" />
        <meta property="og:image" content="https://www.workforceonesolutions.com/og-image.jpg" />
        <meta name="twitter:title" content="Services | Workforce One Solutions" />
        <meta
          name="twitter:description"
          content="One partner for proposal strategy, cleared talent, workforce staffing, and software delivery."
        />
        <meta name="twitter:image" content="https://www.workforceonesolutions.com/og-image.jpg" />
      </Helmet>
      <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - Mobile Optimized */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden pt-20 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Desktop Layout - 3 Columns */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Side - Services */}
            <div className="space-y-12">
              {/* Proposal Development */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#66CB00] flex items-center justify-center flex-shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
                  </div>
                  <h3 className="text-xl font-bold">Proposal Development</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  From government bids to corporate contracts, we help you craft proposals that win.
                </p>
              </div>

              {/* Cleared Recruitment */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#66CB00] flex items-center justify-center flex-shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
                  </div>
                  <h3 className="text-xl font-bold">Cleared Recruitment</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We specialize in sourcing and vetting security-cleared professionals for sensitive projects.
                </p>
              </div>
            </div>

            {/* Center - Title and Hexagonal Icons */}
            <div className="flex flex-col items-center space-y-8">
              {/* Title at Top */}
              <h1 className="text-5xl md:text-6xl font-bold text-center">
                Our Services
              </h1>

              {/* Hexagonal Icons in Cross/Plus Pattern */}
              <div className="relative w-80 h-80">
                {/* Top Hexagon - File/Document */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-28 bg-[#66CB00] clip-hexagon flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-xl">
                  <FileText size={36} className="text-white" />
                </div>
                
                {/* Right Hexagon - Briefcase */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-28 h-28 bg-[#66CB00] clip-hexagon flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Briefcase size={36} className="text-white" />
                </div>
                
                {/* Bottom Hexagon - Users */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-28 bg-[#66CB00] clip-hexagon flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Users size={36} className="text-white" />
                </div>
                
                {/* Left Hexagon - Code */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-28 h-28 bg-[#66CB00] clip-hexagon flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Code size={36} className="text-white" />
                </div>
              </div>
            </div>

            {/* Right Side - Services */}
            <div className="space-y-12">
              {/* Workforce Staffing */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#66CB00] flex items-center justify-center flex-shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
                  </div>
                  <h3 className="text-xl font-bold">Workforce Staffing</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Flexible staffing built for today's evolving business needs.
                </p>
              </div>

              {/* Software Development */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#66CB00] flex items-center justify-center flex-shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
                  </div>
                  <h3 className="text-xl font-bold">Software Development</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We build scalable, secure, and high-performance software solutions tailored to your organization.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden text-center space-y-8 max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Our Services
            </h1>

            {/* Hexagons Grid for Mobile */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-md mx-auto py-8">
              <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto bg-[#66CB00] clip-hexagon flex items-center justify-center shadow-xl">
                <FileText size={32} className="text-white sm:w-10 sm:h-10" />
              </div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto bg-[#66CB00] clip-hexagon flex items-center justify-center shadow-xl">
                <Briefcase size={32} className="text-white sm:w-10 sm:h-10" />
              </div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto bg-[#66CB00] clip-hexagon flex items-center justify-center shadow-xl">
                <Users size={32} className="text-white sm:w-10 sm:h-10" />
              </div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto bg-[#66CB00] clip-hexagon flex items-center justify-center shadow-xl">
                <Code size={32} className="text-white sm:w-10 sm:h-10" />
              </div>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-4">
              We specialize in Proposal Development, Cleared Recruitment, Workforce Staffing, and Custom Software Development, all under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <ClientLogos />

      {/* Services Grid - SIMPLIFIED LIKE HOME PAGE */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <GlassCard className="p-0 h-full overflow-hidden transition-all duration-500 hover:scale-105 hover:bg-[#66CB00] hover:border-[#66CB00]">
                  <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-6 sm:p-8 transition-colors duration-500">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-foreground transition-colors duration-500 group-hover:text-white">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 sm:mb-6 text-base sm:text-lg transition-colors duration-500 group-hover:text-white">
                      {service.description}
                    </p>

                    <div className="flex items-center text-accent group-hover:translate-x-2 transition-all duration-500 group-hover:text-white">
                      <span className="font-semibold text-sm sm:text-base">Learn more</span>
                      <ArrowRight className="ml-2" size={18} />
                    </div>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 scroll-smooth">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">Our proven 4-phase process</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
            {processSteps.map((step, index) => (
              <GlassCard key={index} className="p-6 sm:p-8 text-center group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <step.icon size={24} className="text-background sm:w-7 sm:h-7" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-accent/20 mb-3 sm:mb-4">{step.number}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{step.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid Info Section - WITH CENTERED TITLE */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          {/* Centered Title and Subtitle */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Service Excellence
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              What Sets Us Apart
            </p>
          </div>

          <ImageGridInfo
            images={[
              { src: galleryPresentation, alt: "Business presentation", label: "Excellence in Delivery" },
              { src: galleryDevWork, alt: "Software development" },
              { src: galleryConsultation, alt: "Business consultation" },
            ]}
            hideTitle={true}
            sections={[
              {
                title: "Integrated Solutions",
                icon: <Layers size={24} className="text-background" />,
                content: "Our services work together seamlessly. Whether you need proposal support, staffing solutions, or custom software, we provide coordinated expertise that delivers comprehensive results.",
              },
              {
                title: "Proven Track Record",
                icon: <Award size={24} className="text-background" />,
                content: "With hundreds of successful projects and satisfied clients, we've demonstrated our ability to deliver quality results consistently across all service lines.",
              },
              {
                title: "Rapid Response",
                icon: <Clock size={24} className="text-background" />,
                content: "We understand the urgency of your needs. Our streamlined processes and experienced teams enable us to mobilize quickly without compromising quality.",
              },
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <GlassCard className="p-8 sm:p-12 md:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Let's Get Started
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
              Whether you're preparing to win your next contract, staffing up for growth, or building a digital platform for the future, Workforce One Solutions is ready.
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

export default Services;
