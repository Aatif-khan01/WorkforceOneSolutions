import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import officeImage from "@/assets/gallery-office-view.jpg";

const ScheduleMeetingSection = () => {
  return (
    <section className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-card/50 backdrop-blur-xl border border-border rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Content */}
            <div className="p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-primary">Studio</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Explore our creative studio, where innovation meets precision. A space designed to foster collaboration, balance, and growth, reflecting our commitment to delivering exceptional results through every project.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/booking">
                  <Button size="lg" className="bg-[#66CB00] hover:bg-[#66CB00]/90 text-white gap-2 transition-all duration-300">
                    Schedule a Meeting
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="gap-2 border-[#66CB00] text-[#66CB00] hover:bg-[#66CB00] hover:text-white transition-all duration-300">
                    Request a Callback
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative h-full min-h-[300px] md:min-h-[400px]">
              <img
                src={officeImage}
                alt="Our modern office studio workspace"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleMeetingSection;
