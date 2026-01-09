
Home_WorkforceOneSolutions.tsx
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Users, FileText, Code, Briefcase, Target, Zap, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedCard from "@/components/AnimatedCard";
import AnimatedBox from "@/components/AnimatedBox";
import StaggeredAnimation from "@/components/StaggeredAnimation";
import ImageGridInfo from "@/components/ImageGridInfo";
import StickyContactButton from "@/components/StickyContactButton";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home.jpg";
import heroMobileImage from "@/assets/hero-mbhome.jpg";
import galleryTechWork from "@/assets/gallery-tech-work-1.jpg";
import galleryBuilding from "@/assets/gallery-building-1.jpg";
import galleryTeam from "@/assets/gallery-team-1.jpg";
import serviceProposal from "@/assets/service-proposal.jpg";
import serviceRecruitment from "@/assets/service-recruitment.jpg";
import serviceStaffing from "@/assets/service-staffing.jpg";
import serviceSoftware from "@/assets/service-software.jpg";

const Home = () => {
  const services = [
    {
      icon: FileText,
      title: "Strategic Proposal Development",
      description: "Accelerating your success in federal contracting through Strategic Proposal Development.",
      link: "/services/proposal",
      gradient: "from-accent to-accent-glow",
      image: serviceProposal
    },
    {
      icon: Users,
      title: "Cleared Recruitment",
      description: "Accelerated access to highly qualified and cleared professionals for your mission-critical projects.",
      link: "/services/recruitment",
      gradient: "from-secondary to-coral",
      image: serviceRecruitment
    },
    {
      icon: Briefcase,
      title: "Workforce Staffing",
      description: "Connecting your business with thoroughly vetted talent that fits your culture and mission.",
      link: "/services/staffing",
      gradient: "from-coral to-secondary",
      image: serviceStaffing
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software development that accelerates your market growth and competitive advantage.",
      link: "/services/software",
      gradient: "from-accent-glow to-accent",
      image: serviceSoftware
    }
  ];

  const values = [
    "Businesses grow faster when talent and strategy align.",
    "Recruitment isn't about filling positions; it's about building capability.",
    "Great proposals start with deep understanding and sharp storytelling.",
    "You don't need more resources; you need the right ones."
  ];

  return (
    <>
      <Helmet>
        <title>Workforce One Solutions | Proposal Development, Recruitment & Software</title>
        <meta
          name="description"
          content="Expert proposal development, cleared recruitment, workforce staffing, and custom software solutions for government contractors and commercial enterprises."
        />
        <meta
          name="keywords"
          content="proposal development, cleared recruitment, workforce staffing, software development, government contracting"
        />
        <link rel="canonical" href="https://www.workforceonesolutions.com/" />
        <meta property="og:title" content="Workforce One Solutions | Home" />
        <meta
          property="og:description"
          content="Accelerate contract wins, talent acquisition, and digital transformation with Workforce One Solutions."
        />
        <meta property="og:url" content="https://www.workforceonesolutions.com/" />
        <meta property="og:image" content="https://www.workforceonesolutions.com/og-image.jpg" />
        <meta name="twitter:title" content="Workforce One Solutions | Home" />
        <meta
          name="twitter:description"
          content="Accelerate contract wins, talent acquisition, and digital transformation with Workforce One Solutions."
        />
        <meta name="twitter:image" content="https://www.workforceonesolutions.com/og-image.jpg" />
        {/* Preload mobile hero image first for better LCP on mobile */}
        <link rel="preload" as="image" href={heroMobileImage} />
        <link rel="preload" as="image" href={heroImage} media="(min-width: 768px)" />
      </Helmet>

      <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
        <div className="absolute inset-0 z-0">
          {/* Mobile hero image - prioritized for LCP on mobile */}
          <img
            src={heroMobileImage}
            alt="Hero Background Mobile"
            className="md:hidden w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            width={1280}
            height={720}
          />
          {/* Desktop hero image */}
          <img
            src={heroImage}
            alt="Hero Background"
            className="hidden md:block w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width={1920}
            height={1080}
          />
        </div>

        <div className="absolute bottom-20 sm:bottom-24 left-1/2 transform -translate-x-1/2 z-20 w-full px-4 sm:px-6">
          <AnimatedBox animation="fadeInUp" delay={50}>
            <div className="flex flex-row gap-4 justify-center max-w-lg mx-auto">
              <Link to="/contact" className="flex-1">
                <Button 
                  size="lg" 
                  className="w-full group bg-[#66CB00] hover:bg-[#66CB00]/90 hover:shadow-lg hover:scale-105 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services" className="flex-1">
                <Button 
                  size="lg" 
                  className="w-full bg-black text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 hover:bg-gray-900 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </AnimatedBox>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <AnimatedBox animation="fadeInUp" delay={50} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                What We Deliver
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your growth and success
            </p>
          </AnimatedBox>

          <StaggeredAnimation className="grid md:grid-cols-2 gap-8" staggerDelay={75}>
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <AnimatedCard 
                  className="p-0 h-full overflow-hidden transition-all duration-500 hover:scale-105 hover:bg-[#66CB00] hover:border-[#66CB00]" 
                  animation="fadeInUp" 
                  delay={index * 50} 
                  hover={false}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-8 transition-colors duration-500">
                    <h3 className="text-2xl font-bold mb-4 text-foreground transition-colors duration-500 group-hover:text-white">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 transition-colors duration-500 group-hover:text-white">
                      {service.description}
                    </p>
                    <div className="flex items-center text-accent group-hover:translate-x-2 transition-all duration-500 group-hover:text-white">
                      <span className="font-semibold">Learn more</span>
                      <ArrowRight className="ml-2" size={20} />
                    </div>
                  </div>
                </AnimatedCard>
              </Link>
            ))}
          </StaggeredAnimation>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 relative scroll-smooth">
        <div className="container mx-auto px-6">
          <AnimatedBox animation="fadeInUp" delay={50} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary to-coral bg-clip-text text-transparent">
                How We Work
              </span>
            </h2>
          </AnimatedBox>

          <StaggeredAnimation className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" staggerDelay={75}>
            <AnimatedCard className="p-8" animation="fadeInUp" delay={0}>
              <div className="text-5xl font-bold text-accent mb-4 animate-float">01</div>
              <h3 className="text-2xl font-bold mb-4">Human Insight + Data Precision</h3>
              <p className="text-muted-foreground">
                Technology can optimize processes, but it's people who make them meaningful. We use data-driven targeting and human expertise to deliver results that matter.
              </p>
            </AnimatedCard>

            <AnimatedCard className="p-8" animation="fadeInUp" delay={50}>
              <div className="text-5xl font-bold text-secondary mb-4 animate-float" style={{animationDelay: '0.5s'}}>
                02
              </div>
              <h3 className="text-2xl font-bold mb-4">Quality Over Quantity</h3>
              <p className="text-muted-foreground">
                We deliver handpicked candidates, customized proposals, and software that aligns with your exact requirements. Every solution is crafted with precision and care.
              </p>
            </AnimatedCard>

            <AnimatedCard className="p-8" animation="fadeInUp" delay={100}>
              <div className="text-5xl font-bold text-coral mb-4 animate-float" style={{animationDelay: '1s'}}>
                03
              </div>
              <h3 className="text-2xl font-bold mb-4">Building for the Future</h3>
              <p className="text-muted-foreground">
                Today, we help you meet deadlines. Tomorrow, we help you expand into new markets and build a future-ready workforce equipped for tomorrow's challenges.
              </p>
            </AnimatedCard>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <AnimatedCard className="p-12 max-w-4xl mx-auto" animation="fadeInUp" delay={50}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-accent to-coral bg-clip-text text-transparent">
                What We Believe
              </span>
            </h2>
            <div className="space-y-6">
              {values.map((value, index) => (
                <AnimatedBox 
                  key={index} 
                  animation="fadeInLeft" 
                  delay={400 + index * 150} 
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="text-accent flex-shrink-0 mt-1 animate-pulse-slow" size={24} />
                  <p className="text-lg text-foreground">{value}</p>
                </AnimatedBox>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Image Grid Info Section - WITH REDUCED SPACING */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          {/* Centered Title and Subtitle with reduced spacing */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Quick Summary about Workforce One Solutions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
            </p>
          </div>

          <ImageGridInfo 
            images={[
              {
                src: galleryTechWork,
                alt: "Professional working on technology",
                label: "What We Deliver"
              },
              {
                src: galleryBuilding,
                alt: "Modern office building"
              },
              {
                src: galleryTeam,
                alt: "Team collaboration"
              }
            ]} 
            hideTitle={true}
            sections={[
              {
                title: "About Us",
                icon: <Target size={24} className="text-background" />,
                content: "Workforce One Solutions is purpose built to empower organizations, from federal contractors to commercial enterprises, to thrive amidst rapid technological and business change. We serve as a strategic partner, delivering proven expertise, agility, and innovative solutions that drive measurable results for our clients. Our core capabilities encompass Proposal Development, Cleared Recruitment, Flexible Staffing Solutions, and Custom Software Development. We leverage these services to help you build high performing teams, optimize operational efficiency, and successfully achieve mission critical objectives with precision and commitment."
              },
              {
                title: "Our Vision",
                icon: <Zap size={24} className="text-background" />,
                content: "To be the premier workforce and strategic solutions provider, recognized globally for our commitment to excellence, innovation, and measurable results that consistently drive business success for our clients."
              },
              {
                title: "Our Mission",
                icon: <Shield size={24} className="text-background" />,
                content: "To bridge the gap between opportunity and execution by providing specialized talent, strategic insights (Proposal Development), and cutting-edge technology solutions that empower our clients to achieve their most critical objectives with confidence."
              }
            ]} 
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <AnimatedCard className="p-16 text-center" animation="scaleIn" delay={50}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              The future belongs to companies that combine people, process, and technology seamlessly.
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-[#66CB00] hover:bg-[#66CB00]/90 hover:shadow-lg text-white text-lg px-12 py-6 group transition-all duration-300"
              >
                Start Your Journey
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedCard>
        </div>
      </section>

      {/* Sticky Contact Button */}
      <StickyContactButton />

      <Footer />
    </div>
    </>
  );
};
export default Home;
