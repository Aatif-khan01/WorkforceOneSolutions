import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import logo from "@/assets/WfOS-LOGO.png";
const Footer = () => {
  return <footer className="relative mt-24 bg-card/50 backdrop-blur-xl border-t border-glass-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center">
              <img src={logo} alt="Company logo" className="h-10 w-auto" />
            </Link>
            <p className="text-muted-foreground">
              Bridging the gap between opportunity and execution.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/proposal" className="text-muted-foreground hover:text-accent transition-colors">Proposal Development</Link></li>
              <li><Link to="/services/recruitment" className="text-muted-foreground hover:text-accent transition-colors">Cleared Recruitment</Link></li>
              <li><Link to="/services/staffing" className="text-muted-foreground hover:text-accent transition-colors">Workforce Staffing</Link></li>
              <li><Link to="/services/software" className="text-muted-foreground hover:text-accent transition-colors">Software Development</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-lg bg-glass/40 hover:bg-glass border border-glass-border hover:border-accent transition-all hover:scale-110">
                <Linkedin size={20} className="text-accent" />
              </a>
              
              
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-glass-border text-center text-muted-foreground">
          <p>&copy; 2025 Workforce One Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;