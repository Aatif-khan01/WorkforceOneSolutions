import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import thanksgivingDesktop from "@/assets/Thanksgiving.jpg";
import thanksgivingMobile from "@/assets/Thanksgiving-phone.jpg";

const ThanksgivingPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 1 second - ALWAYS (for testing)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
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
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[999]"
            onClick={handleClose}
          />

          {/* Popup Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
          >
            <div className="relative max-w-5xl w-full">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 z-10 p-3 bg-white rounded-full shadow-2xl hover:bg-gray-100 transition-colors duration-200 group border-2 border-gray-200"
                aria-label="Close popup"
              >
                <X size={28} className="text-gray-700 group-hover:text-red-600 transition-colors" />
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
