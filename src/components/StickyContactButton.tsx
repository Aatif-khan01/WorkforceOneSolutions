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
        <div className="fixed top-20 right-6 z-40 animate-slide-up">
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-[#66CB00] hover:bg-[#66CB00]/90 text-white font-bold text-base px-8 py-6 rounded-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
            >
              LET'S TALK
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default StickyContactButton;
