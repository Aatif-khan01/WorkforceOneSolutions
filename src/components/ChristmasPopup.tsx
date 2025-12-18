import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import christmasDesktop from "@/assets/Christmas.jpg";
import christmasMobile from "@/assets/Christmas-phone.jpg";

const ChristmasPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already closed the popup in this session
    const hasSeenPopup = sessionStorage.getItem("christmasPopupSeen");
    
    if (!hasSeenPopup) {
      // Show popup after 1 second if not seen in this session
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Mark popup as seen only for this browsing session
    sessionStorage.setItem("christmasPopupSeen", "true");
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
            <div className="relative w-full max-w-3xl">
              {/* Close Button - Top Right Corner Inside Modal */}
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 md:top-3 md:right-3 z-10 p-2 md:p-2.5 bg-white/95 rounded-full shadow-lg hover:bg-red-500 hover:scale-110 transition-all duration-200 group border border-gray-200"
                aria-label="Close Christmas popup"
              >
                <X size={24} className="text-gray-700 group-hover:text-white transition-colors" />
              </button>

              {/* Image Container - Responsive */}
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl bg-white">
                {/* Desktop Image */}
                <img
                  src={christmasDesktop}
                  alt="Merry Christmas from Workforce One Solutions"
                  className="hidden md:block w-full h-auto max-h-[80vh] object-contain"
                  loading="eager"
                  decoding="async"
                />
                
                {/* Mobile Image */}
                <img
                  src={christmasMobile}
                  alt="Merry Christmas from Workforce One Solutions"
                  className="block md:hidden w-full h-auto max-h-[85vh] object-contain"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ChristmasPopup;
