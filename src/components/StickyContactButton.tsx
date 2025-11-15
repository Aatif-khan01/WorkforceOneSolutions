import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const StickyContactButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
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

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-40 animate-slide-up">
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-[#66CB00] hover:bg-[#66CB00]/90 text-white font-bold px-6 py-6 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 flex items-center gap-2 group"
            >
              <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
              <span className="text-base">LET'S TALK</span>
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default StickyContactButton;
