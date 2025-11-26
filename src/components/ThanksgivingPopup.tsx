import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
            <div className="relative max-w-3xl w-full pointer-events-auto">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute -top-4 -right-4 md:top-2 md:right-2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 group"
                aria-label="Close popup"
              >
                <X size={24} className="text-gray-700 group-hover:text-red-600 transition-colors" />
              </button>

              {/* Content Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-50 to-amber-50 p-8 md:p-12">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-orange-200 rounded-full -translate-x-16 -translate-y-16 opacity-50" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-amber-200 rounded-full translate-x-20 translate-y-20 opacity-50" />
                
                {/* Content */}
                <div className="relative text-center space-y-6">
                  {/* Logo/Brand Name */}
                  <div className="text-2xl md:text-3xl font-bold">
                    <span className="text-gray-800">Workforce One</span>
                    <span className="text-[#66CB00]"> Solutions</span>
                  </div>

                  {/* Wishes Text */}
                  <p className="text-sm md:text-base text-gray-600 font-medium uppercase tracking-wider">
                    WISHES YOU A
                  </p>

                  {/* Main Message */}
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                    <span className="text-orange-600">HAPPY</span>
                    <br />
                    <span className="text-amber-600">THANKSGIVING</span>
                  </h1>

                  {/* Bottom Text */}
                  <p className="text-base md:text-lg text-gray-700 font-medium pt-4">
                    Let us celebrate the blessings we often take for granted<br className="hidden sm:block" /> 
                    and the people who make life beautiful.
                  </p>

                  {/* Decorative Icon */}
                  <div className="text-6xl pt-4">🦃</div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ThanksgivingPopup;
