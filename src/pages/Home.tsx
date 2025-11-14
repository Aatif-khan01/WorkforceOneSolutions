import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Users, FileText, Code, Briefcase, Target, Zap, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScheduleMeetingSection from "@/components/ScheduleMeetingSection";
import AnimatedCard from "@/components/AnimatedCard";
import AnimatedBox from "@/components/AnimatedBox";
import StaggeredAnimation from "@/components/StaggeredAnimation";
import StatCounter from "@/components/StatCounter";
import ImageGridInfo from "@/components/ImageGridInfo";
import ClientLogos from "@/components/ClientLogos";
import { Button } from "@/components/ui/button";

import heroImage from "@/assets/hero-home.jpg";
import clientSuccessImage from "@/assets/client-success.jpg";
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
      description: "From government bids to corporate contracts, we help you craft proposals that win.",
      link: "/services/proposal",
      gradient: "from-accent to-accent-glow",
      image: serviceProposal,
    },
    {
      icon: Users,
      title: "Cleared Recruitment",
      description: "We specialize in sourcing and vetting security-cleared professionals for sensitive projects.",
      link: "/services/recruitment",
      gradient: "from-secondary to-coral",
      image: serviceRecruitment,
    },
    {
      icon: Briefcase,
      title: "Workforce Staffing",
      description: "Flexible staffing built for today's evolving business needs.",
      link: "/services/staffing",
      gradient: "from-coral to-secondary",
      image: serviceStaffing,
    },
    {
      icon: Code,
      title: "Software Development",
      description: "We build scalable, secure, and high-performance software solutions tailored to your organization.",
      link: "/services/software",
      gradient: "from-accent-glow to-accent",
      image: serviceSoftware,
    },
  ];

  const stats = [
    { value: 500, suffix: "+", label: "Successful Proposals" },
    { value: 1200, suffix: "+", label: "Professionals Recruited" },
    { value: 50000, suffix: "+", label: "Hours Delivered" },
    { value: 98, suffix: "%", label: "Client Retention" },
  ];

  const values = [
    "Businesses grow faster when talent and strategy align.",
    "Recruitment isn't about filling positions; it's about building capability.",
    "Great proposals start with deep understanding and sharp storytelling.",
    "You don't need more resources; you need the right ones.",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <AnimatedBox animation="fadeInUp" delay={100}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              </p>
            </AnimatedBox>

            <AnimatedBox animation="fadeInUp" delay={150}>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              </p>
            </AnimatedBox>
          </div>
        </div>

        {/* Buttons positioned at the bottom */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 w-full px-6">
          <AnimatedBox animation="fadeInUp" delay={50}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <Link to="/contact" className="flex-1">
                <Button size="lg" className="w-full group bg-black hover:bg-black/80 hover:shadow-lg text-white text-lg px-8 py-6">
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services" className="flex-1">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full text-lg px-8 py-6 border-2 border-accent text-accent hover:bg-accent hover:text-background transition-colors"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </AnimatedBox>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-accent flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <StaggeredAnimation className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto" staggerDelay={50}>
            {stats.map((stat, index) => (
              <AnimatedCard key={index} className="p-6 text-center border border-accent/20" hover={false} animation="scaleIn">
                <StatCounter end={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground mt-2 text-sm">{stat.label}</p>
              </AnimatedCard>
            ))}
          </StaggeredAnimation>
        </div>
      </section>

      {/* Client Logos Section */}
      <ClientLogos />

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
                <AnimatedCard className="p-0 h-full overflow-hidden" animation="fadeInUp" delay={index * 50}>
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute top-6 left-6 w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon size={28} className="text-white" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div className="flex items-center text-accent group-hover:translate-x-2 transition-transform">
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
              <div className="text-5xl font-bold text-secondary mb-4 animate-float" style={{ animationDelay: '0.5s' }}>02</div>
              <h3 className="text-2xl font-bold mb-4">Quality Over Quantity</h3>
              <p className="text-muted-foreground">
                We deliver handpicked candidates, customized proposals, and software that aligns with your exact requirements. Every solution is crafted with precision and care.
              </p>
            </AnimatedCard>

            <AnimatedCard className="p-8" animation="fadeInUp" delay={100}>
              <div className="text-5xl font-bold text-coral mb-4 animate-float" style={{ animationDelay: '1s' }}>03</div>
              <h3 className="text-2xl font-bold mb-4">Building for the Future</h3>
              <p className="text-muted-foreground">
                Today, we help you meet deadlines. Tomorrow, we help you expand into new markets and build a future-ready workforce equipped for tomorrow's challenges.
              </p>
            </AnimatedCard>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={clientSuccessImage}
            alt="Client Success"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Trusted by Industry Leaders
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From government contractors to innovative startups, we've helped organizations achieve their most ambitious goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedCard className="p-8 text-center" animation="scaleIn" delay={50}>
              <div className="text-6xl mb-4 animate-bounce-in">🏆</div>
              <h3 className="text-2xl font-bold mb-3">Award-Winning Proposals</h3>
              <p className="text-muted-foreground">Helped clients secure over $2B in contract value through strategic proposal development</p>
            </AnimatedCard>

            <AnimatedCard className="p-8 text-center" animation="scaleIn" delay={100}>
              <div className="text-6xl mb-4 animate-bounce-in" style={{ animationDelay: '0.2s' }}>🚀</div>
              <h3 className="text-2xl font-bold mb-3">Rapid Deployment</h3>
              <p className="text-muted-foreground">Average placement time of 14 days for cleared professionals across all security levels</p>
            </AnimatedCard>

            <AnimatedCard className="p-8 text-center" animation="scaleIn" delay={150}>
              <div className="text-6xl mb-4 animate-bounce-in" style={{ animationDelay: '0.4s' }}>💡</div>
              <h3 className="text-2xl font-bold mb-3">Innovation Excellence</h3>
              <p className="text-muted-foreground">Developed mission-critical software platforms serving millions of users</p>
            </AnimatedCard>
          </div>
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
                <AnimatedBox key={index} animation="fadeInLeft" delay={400 + (index * 150)} className="flex items-start space-x-4">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1 animate-pulse-slow" size={24} />
                  <p className="text-lg text-foreground/90">{value}</p>
                </AnimatedBox>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Image Grid Info Section */}
      <ImageGridInfo
        images={[
          { src: galleryTechWork, alt: "Professional working on technology", label: "What We Deliver" },
          { src: galleryBuilding, alt: "Modern office building" },
          { src: galleryTeam, alt: "Team collaboration" },
        ]}
        title="Workforce One Solution"
        subtitle="Delivering Excellence in Every Engagement"
        sections={[
          {
            title: "About Us",
            icon: <Target size={24} className="text-background" />,
            content: "We are a trusted partner for organizations seeking to win contracts, build high-performing teams, and develop custom software solutions. With expertise across proposal development, cleared recruitment, staffing, and technology, we deliver end-to-end solutions tailored to your mission.",
          },
          {
            title: "Our Vision",
            icon: <Zap size={24} className="text-background" />,
            content: "To be recognized as the premier workforce solutions provider, known for our commitment to excellence, innovation, and measurable results that drive business success.",
          },
          {
            title: "Our Mission",
            icon: <Shield size={24} className="text-background" />,
            content: "To bridge the gap between opportunity and execution by providing specialized talent, strategic insights, and technology solutions that empower our clients to achieve their objectives.",
          },
        ]}
      />

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
              <Button size="lg" className="bg-gradient-to-r from-coral to-secondary hover:shadow-glow text-lg px-12 py-6 group animate-glow">
                Start Your Journey
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedCard>
        </div>
      </section>

      <ScheduleMeetingSection />
      <Footer />
    </div>
  );
};

export default Home;
