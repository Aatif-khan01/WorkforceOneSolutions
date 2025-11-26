import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ThanksgivingPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup today
    const lastSeen = localStorage.getItem("thanksgivingPopupSeen");
    const today = new Date().toDateString();

    if (lastSeen !== today) {
      // Preload images before showing popup
      const desktopImg = new Image();
      const mobileImg = new Image();
      
      desktopImg.src = "/src/assets/Thanksgiving.jpg";
      mobileImg.src = "/src/assets/Thanksgiving-phone.jpg";

      // Show popup after images are loaded
      Promise.all([
        new Promise((resolve) => {
          desktopImg.onload = resolve;
        }),
        new Promise((resolve) => {
          mobileImg.onload = resolve;
        })
      ]).then(() => {
        setImageLoaded(true);
        // Small delay after images are loaded
        setTimeout(() => setIsOpen(true), 500);
      });
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Save that user has seen the popup today
    localStorage.setItem("thanksgivingPopupSeen", new Date().toDateString());
  };

  if (!imageLoaded) return null;

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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                {/* Desktop Image */}
                <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet="/src/assets/Thanksgiving.jpg"
                  />
                  <img
                    src="/src/assets/Thanksgiving-phone.jpg"
                    alt="Happy Thanksgiving from Workforce One Solutions"
                    className="w-full h-auto"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ThanksgivingPopup;
