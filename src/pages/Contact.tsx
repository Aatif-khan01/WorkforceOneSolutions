import { useState } from "react";
import { Mail, MapPin, Phone, Send, MessageCircle, Clock, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScheduleMeetingSection from "@/components/ScheduleMeetingSection";
import AnimatedCard from "@/components/AnimatedCard";
import AnimatedBox from "@/components/AnimatedBox";
import StaggeredAnimation from "@/components/StaggeredAnimation";
import ImageGridInfo from "@/components/ImageGridInfo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import strategicPlanningImage from "@/assets/strategic-planning.jpg";
import galleryConsultation from "@/assets/gallery-consultation.jpg";
import galleryPartnership from "@/assets/gallery-partnership.jpg";
import galleryOfficeView from "@/assets/gallery-office-view.jpg";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    source: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch soon.", {
      description: "Your message has been received."
    });
    setFormData({
      name: "",
      email: "",
      service: "",
      source: "",
      message: ""
    });
  };
  return <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/20 to-background" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <AnimatedBox animation="fadeInUp" delay={200}>
              <h1 className="text-6xl md:text-7xl font-bold">
                <span className="bg-gradient-to-r from-accent via-accent-glow to-secondary bg-clip-text text-transparent">
                  Contact Us
                </span>
              </h1>
            </AnimatedBox>
            <AnimatedBox animation="fadeInUp" delay={400}>
              <p className="text-xl md:text-2xl text-muted-foreground">
                We're ready when you are
              </p>
            </AnimatedBox>
            <AnimatedBox animation="fadeInUp" delay={600}>
              <p className="text-lg text-foreground max-w-3xl mx-auto">
                Have a question about our services, a project you're planning, or just want to explore how we can help you win, recruit, staff or build software? Let's talk.
              </p>
            </AnimatedBox>
          </div>
        </div>
      </section>

      {/* Strategic Planning Image Section */}
      <section className="py-16 relative overflow-hidden scroll-smooth">
        <div className="container mx-auto px-6">
          <AnimatedBox animation="scaleIn" delay={200} className="relative rounded-3xl overflow-hidden max-w-6xl mx-auto">
            <img src={strategicPlanningImage} alt="Strategic Planning" className="w-full h-[400px] object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatedCard className="p-8 max-w-2xl text-center" animation="fadeInUp" delay={400}>
                <h3 className="text-3xl font-bold mb-4 text-foreground">Let's Start a Conversation</h3>
                <p className="text-lg text-muted-foreground">
                  Whether you have a question about our services, need a custom solution, or want to explore partnership opportunities, we're here to help.
                </p>
              </AnimatedCard>
            </div>
          </AnimatedBox>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 scroll-smooth">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <AnimatedCard className="p-10" animation="fadeInLeft" delay={200}>
              <h2 className="text-3xl font-bold mb-8">
                <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  Get in Touch
                </span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Your Name</label>
                  <Input type="text" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} placeholder="John Doe" required className="bg-glass/40 border-glass-border focus:border-accent" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Your Email</label>
                  <Input type="email" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} placeholder="john@example.com" required className="bg-glass/40 border-glass-border focus:border-accent" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Tell us about your requirement</label>
                  <Select value={formData.service} onValueChange={value => setFormData({
                  ...formData,
                  service: value
                })}>
                    <SelectTrigger className="bg-glass/40 border-glass-border focus:border-accent">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="proposal">Proposal Development</SelectItem>
                      <SelectItem value="recruitment">Cleared Recruitment</SelectItem>
                      <SelectItem value="staffing">Staffing</SelectItem>
                      <SelectItem value="software">Software Development</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">How did you hear about us?</label>
                  <Select value={formData.source} onValueChange={value => setFormData({
                  ...formData,
                  source: value
                })}>
                    <SelectTrigger className="bg-glass/40 border-glass-border focus:border-accent">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google</SelectItem>
                      <SelectItem value="linkedin">LinkedIn</SelectItem>
                      <SelectItem value="referral">Friend or Colleague</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Project details / Message</label>
                  <Textarea value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} placeholder="Tell us about your project..." rows={6} required className="bg-glass/40 border-glass-border focus:border-accent resize-none" />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-coral to-secondary hover:shadow-glow group animate-glow">
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </form>
            </AnimatedCard>

            {/* Contact Information */}
            <div className="space-y-8">
              <AnimatedCard className="p-8" animation="fadeInRight" delay={300}>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent to-accent-glow flex-shrink-0 animate-pulse-slow">
                    <MapPin size={24} className="text-background" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Head Office (India)</h3>
                    <p className="text-muted-foreground mb-2">Srinagar, Jammu and Kashmir, India</p>
                    <p className="text-muted-foreground">info@workforceonesolutions.com</p>
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard className="p-8" animation="fadeInRight" delay={500}>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-secondary to-coral flex-shrink-0 animate-pulse-slow" style={{
                  animationDelay: '0.5s'
                }}>
                    <MapPin size={24} className="text-background" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Global / US Office</h3>
                    <p className="text-muted-foreground mb-2">XXXXX</p>
                    <p className="text-muted-foreground">XXXXX</p>
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard className="p-8" animation="fadeInRight" delay={700}>
                <h3 className="text-2xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                    Stay Connected
                  </span>
                </h3>
                <p className="text-muted-foreground mb-6">
                  Follow us on social media for updates, insights and new opportunities.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 rounded-lg bg-glass/40 border border-glass-border hover:border-accent flex items-center justify-center transition-all hover:scale-110 animate-float">
                    <span className="text-accent font-bold">in</span>
                  </a>
                  
                  
                </div>
              </AnimatedCard>

              <AnimatedCard className="p-8 bg-gradient-to-br from-accent/10 to-secondary/10" animation="fadeInRight" delay={900}>
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6">
                  Our team typically responds within 24 hours during business days. For urgent inquiries, please mention it in your message.
                </p>
                <div className="flex items-center space-x-2 text-accent">
                  <Mail size={20} className="animate-pulse-slow" />
                  <span className="font-semibold">Average response time: 24 hours</span>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid Info Section */}
      <ImageGridInfo images={[{
      src: galleryConsultation,
      alt: "Business consultation",
      label: "Expert Guidance"
    }, {
      src: galleryPartnership,
      alt: "Partnership collaboration"
    }, {
      src: galleryOfficeView,
      alt: "Professional environment"
    }]} title="Why Connect With Us" subtitle="Your Success Is Our Priority" sections={[{
      title: "Responsive Communication",
      icon: <MessageCircle size={24} className="text-background" />,
      content: "We value your time and respond promptly to all inquiries. Our team is committed to providing clear, helpful communication throughout our engagement."
    }, {
      title: "Flexible Scheduling",
      icon: <Clock size={24} className="text-background" />,
      content: "We work around your schedule for consultations and meetings. Whether you prefer phone, video, or in-person discussions, we accommodate your preferences."
    }, {
      title: "Tailored Solutions",
      icon: <CheckCircle size={24} className="text-background" />,
      content: "Every client is unique. We take time to understand your specific needs and develop customized solutions that align with your goals and constraints."
    }]} />

      <ScheduleMeetingSection />
      <Footer />
    </div>;
};
export default Contact;