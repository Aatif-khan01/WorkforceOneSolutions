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
    <div className="fixed bottom-24 right-8 z-50 animate-float">
      <Button
        onClick={scrollToTop}
        className="w-12 h-12 rounded-full bg-[#66CB00] hover:bg-[#66CB00]/90 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 border-2 border-[#66CB00]/20 backdrop-blur-sm"
        size="icon"
      >
        <ChevronUp size={24} className="text-white" />
      </Button>
    </div>
  );
};

export default ScrollToTop;
