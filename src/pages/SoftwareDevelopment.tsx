import { Link } from "react-router-dom";
import { useState } from "react";
import { Code, Smartphone, Globe, Cloud, Palette, TestTube, RefreshCw, Wrench, ArrowRight, Layers, Award, Rocket } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ClientLogos from "@/components/ClientLogos";
import ImageGridInfo from "@/components/ImageGridInfo";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-software.jpg";
import developmentWorkspaceImage from "@/assets/development-workspace.jpg";
import galleryDevWork from "@/assets/gallery-dev-work.jpg";
import galleryDatacenter from "@/assets/gallery-datacenter.jpg";
import galleryTechWork from "@/assets/gallery-tech-work-1.jpg";

// Service Flip Card Component
const ServiceFlipCard = ({ 
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
          <div className="h-full w-full p-6 rounded-2xl border border-glass-border bg-glass/50 backdrop-blur-sm shadow-lg flex flex-col">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center mb-4 flex-shrink-0">
              <Icon size={28} className="text-background" />
            </div>
            <h3 className="text-lg font-bold mb-2 flex-shrink-0">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="h-full w-full p-5 rounded-2xl bg-gradient-to-br from-accent to-accent-glow shadow-lg flex flex-col justify-center items-center text-center overflow-hidden">
            <Icon size={32} className="text-background mb-2 flex-shrink-0" />
            <h3 className="text-base font-bold mb-2 text-background flex-shrink-0">{title}</h3>
            <p className="text-background/90 text-xs leading-tight line-clamp-4">
              {backContent || description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Process Step Flip Card
const ProcessStepFlipCard = ({ 
  number, 
  title, 
  description,
  backContent
}: { 
  number: string;
  title: string;
  description: string;
  backContent?: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Gradient based on number
  const getGradient = () => {
    const num = parseInt(number);
    if (num === 1) return 'from-accent to-accent-glow';
    if (num === 2) return 'from-secondary to-coral';
    if (num === 3) return 'from-coral to-accent';
    if (num === 4) return 'from-accent-glow to-secondary';
    return 'from-secondary to-accent';
  };

  return (
    <div 
      className="relative h-[220px] perspective-1000"
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
          <div className="h-full w-full p-6 rounded-2xl border border-glass-border bg-glass/50 backdrop-blur-sm shadow-lg text-center flex flex-col">
            <div className="text-5xl font-bold text-accent/20 mb-4 flex-shrink-0">{number}</div>
            <h3 className="text-lg font-bold mb-3 flex-shrink-0">{title}</h3>
            <p className="text-xs text-muted-foreground line-clamp-3">{description}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className={`h-full w-full p-5 rounded-2xl bg-gradient-to-br ${getGradient()} shadow-lg flex flex-col justify-center items-center text-center overflow-hidden`}>
            <div className="text-4xl font-bold text-background/30 mb-2 flex-shrink-0">{number}</div>
            <h3 className="text-base font-bold mb-2 text-background flex-shrink-0">{title}</h3>
            <p className="text-background/90 text-xs leading-tight line-clamp-5">
              {backContent || description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SoftwareDevelopment = () => {
  const services = [
    { 
      icon: Code, 
      title: "Custom Software Development", 
      description: "Bespoke solutions tailored to your business needs",
      backContent: "End-to-end custom software development from requirements analysis to deployment, creating solutions that perfectly align with your business processes and objectives."
    },
    { 
      icon: Smartphone, 
      title: "Mobile App Development", 
      description: "iOS and Android apps with seamless experiences",
      backContent: "Native and cross-platform mobile applications with intuitive interfaces, robust functionality, and seamless user experiences across all devices."
    },
    { 
      icon: Globe, 
      title: "Web Development", 
      description: "Dynamic websites and complex web applications",
      backContent: "Modern, responsive web applications built with cutting-edge frameworks, optimized for performance, security, and scalability."
    },
    { 
      icon: Cloud, 
      title: "SaaS Development", 
      description: "Scalable, multi-tenant cloud platforms",
      backContent: "Cloud-native SaaS solutions with multi-tenancy, subscription management, and enterprise-grade security for scalable business growth."
    },
    { 
      icon: Palette, 
      title: "UI/UX Design", 
      description: "Intuitive interfaces that enhance engagement",
      backContent: "User-centered design approach creating beautiful, accessible interfaces that drive engagement and deliver exceptional user experiences."
    },
    { 
      icon: TestTube, 
      title: "Software Testing", 
      description: "Comprehensive quality assurance and testing",
      backContent: "Rigorous testing methodologies including automated testing, performance testing, and security testing to ensure flawless software delivery."
    },
    { 
      icon: RefreshCw, 
      title: "Legacy Modernization", 
      description: "Upgrade systems to current standards",
      backContent: "Transform outdated systems into modern, efficient applications while preserving critical business logic and ensuring smooth migration."
    },
    { 
      icon: Wrench, 
      title: "DevOps as a Service", 
      description: "Streamline development and operations",
      backContent: "Implement CI/CD pipelines, infrastructure automation, and monitoring solutions to accelerate delivery and improve reliability."
    },
  ];

  const technologies = {
    frontend: ["React.js", "Angular", "Vue.js", "HTML5", "CSS3", "JavaScript"],
    backend: ["Node.js", "Express.js", "Django", "Laravel"],
    mobile: ["React Native", "Flutter", "Xamarin", "Swift", "Kotlin"],
    database: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    cloud: ["AWS", "Microsoft Azure", "Google Cloud Platform"],
    devops: ["Docker", "Kubernetes", "Jenkins", "Git"],
  };

  const process = [
    { 
      number: "01", 
      title: "Discovery & Planning", 
      description: "Understanding business objectives and defining project roadmap",
      backContent: "Comprehensive discovery phase including stakeholder interviews, requirements gathering, technical feasibility analysis, and detailed project planning with clear milestones."
    },
    { 
      number: "02", 
      title: "Design & Prototyping", 
      description: "Creating wireframes and prototypes to visualize the solution",
      backContent: "Collaborative design process creating wireframes, mockups, and interactive prototypes to validate concepts and ensure alignment before development begins."
    },
    { 
      number: "03", 
      title: "Development & Implementation", 
      description: "Building the software using agile methodologies",
      backContent: "Agile development sprints with continuous integration, regular demos, and iterative refinement to build high-quality software efficiently."
    },
    { 
      number: "04", 
      title: "Testing & QA", 
      description: "Rigorous testing to ensure quality and reliability",
      backContent: "Multi-layered testing approach including unit tests, integration tests, user acceptance testing, and performance validation to ensure production-ready quality."
    },
    { 
      number: "05", 
      title: "Deployment & Support", 
      description: "Launch and ongoing maintenance for continued success",
      backContent: "Smooth deployment to production with comprehensive documentation, training, and ongoing support to ensure long-term success and continuous improvement."
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Software Development" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-accent-glow to-accent mb-4">
              <Code size={48} className="text-background" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-accent-glow via-accent to-secondary bg-clip-text text-transparent">
                Software Development
              </span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-foreground">
              Innovative Solutions. Scalable Impact.
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in delivering custom software solutions that drive efficiency, enhance user experiences, and align with your strategic goals.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 scroll-smooth">
        <div className="container mx-auto px-6">
          <GlassCard className="p-12 max-w-5xl mx-auto">
            <p className="text-lg text-foreground leading-relaxed">
              Whether you're looking to modernize legacy systems, develop new applications, or integrate advanced technologies, our team is equipped to turn your vision into reality. From concept to deployment, we provide end-to-end product engineering services, ensuring your software meets market demands and user expectations.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Development Workspace Image Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden max-w-6xl mx-auto">
            <img 
              src={developmentWorkspaceImage}
              alt="Development Workspace" 
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Our Software Development Services
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceFlipCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                backContent={service.backContent}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary to-coral bg-clip-text text-transparent">
                Our Development Process
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {process.map((step, index) => (
              <ProcessStepFlipCard
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                backContent={step.backContent}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-coral bg-clip-text text-transparent">
                Technologies We Use
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(technologies).map(([category, techs], index) => (
              <GlassCard key={index} className="p-8">
                <h3 className="text-2xl font-bold mb-6 capitalize text-accent">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, idx) => (
                    <span key={idx} className="px-4 py-2 rounded-full bg-glass/40 border border-glass-border text-sm hover:border-accent transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-6">
          <GlassCard className="p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Why Choose Our Software Development
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-foreground">Expertise across industries including government contracting, healthcare, education</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-foreground">Proven track record of successful software solutions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-foreground">Client-centric approach tailored to your unique needs</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <p className="text-foreground">Commitment to quality with ISO certifications</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <p className="text-foreground">Agile methodologies ensuring flexibility and continuous improvement</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <p className="text-foreground">Ongoing support and maintenance for long-term success</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Image Grid Info Section */}
      <ImageGridInfo
        images={[
          { src: galleryDevWork, alt: "Software development team", label: "Modern Development" },
          { src: galleryDatacenter, alt: "Technology infrastructure" },
          { src: galleryTechWork, alt: "Technical excellence" },
        ]}
        title="Development Excellence"
        subtitle="Building Tomorrow's Solutions"
        sections={[
          {
            title: "Modern Architecture",
            icon: <Layers size={24} className="text-background" />,
            content: "We build scalable, maintainable systems using modern architectures and best practices. From microservices to cloud-native applications, our solutions are designed for growth and adaptability.",
          },
          {
            title: "Quality Engineering",
            icon: <Award size={24} className="text-background" />,
            content: "Quality is built into every phase of our development process. We employ comprehensive testing, code reviews, and continuous integration to ensure reliable, secure, and high-performing applications.",
          },
          {
            title: "Agile Delivery",
            icon: <Rocket size={24} className="text-background" />,
            content: "Our agile methodology ensures rapid iteration, continuous feedback, and on-time delivery. We work in sprints, maintain transparency, and adapt quickly to changing requirements.",
          },
        ]}
      />

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <GlassCard className="p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Solution?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your software development needs and create something exceptional.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-coral to-secondary hover:shadow-glow text-lg px-12 py-6 group">
                Start Your Project
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

export default SoftwareDevelopment;
