import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

const StickyContactButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Check if we're on the contact page
  const isContactPage = location.pathname === "/contact";

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Don't render the button on the contact page
  if (isContactPage) {
    return null;
  }

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-40 animate-slide-up">
          <div className="animate-float">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-[#66CB00] hover:bg-[#66CB00]/90 hover:shadow-xl text-white text-base font-semibold transition-all duration-300 hover:scale-105 px-8 py-6 rounded-lg shadow-2xl"
              >
                LET'S TALK
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default StickyContactButton;
