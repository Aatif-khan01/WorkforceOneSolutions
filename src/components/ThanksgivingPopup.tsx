import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import thanksgivingDesktop from "@/assets/Thanksgiving.jpg";
import thanksgivingMobile from "@/assets/Thanksgiving-phone.jpg";

const ThanksgivingPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup today
    const lastSeen = localStorage.getItem("thanksgivingPopupSeen");
    const today = new Date().toDateString();

    if (lastSeen !== today) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000); // 1 second delay after page load

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Save that user has seen the popup today
    localStorage.setItem("thanksgivingPopupSeen", new Date().toDateString());
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Popup Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative max-w-5xl w-full pointer-events-auto">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute -top-4 -right-4 md:top-2 md:right-2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 group"
                aria-label="Close popup"
              >
                <X size={24} className="text-gray-700 group-hover:text-red-600 transition-colors" />
              </button>

              {/* Image Container - Responsive */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Desktop Image */}
                <img
                  src={thanksgivingDesktop}
                  alt="Happy Thanksgiving from Workforce One Solutions"
                  className="hidden md:block w-full h-auto"
                />
                
                {/* Mobile Image */}
                <img
                  src={thanksgivingMobile}
                  alt="Happy Thanksgiving from Workforce One Solutions"
                  className="block md:hidden w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ThanksgivingPopup;

