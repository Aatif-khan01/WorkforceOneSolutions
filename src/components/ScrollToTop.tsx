import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-8 right-8 z-scroll-top">
      <Button
        onClick={scrollToTop}
        className="scroll-to-top-button w-12 h-12 rounded-full bg-gradient-to-r from-accent to-accent-glow hover:from-accent-glow hover:to-accent shadow-lg hover:shadow-xl transition-all duration-200 animate-float border-2 border-accent/20 backdrop-blur-sm"
        size="icon"
      >
        <ChevronUp size={24} className="text-background" />
      </Button>
    </div>
  );
};

export default ScrollToTop;
