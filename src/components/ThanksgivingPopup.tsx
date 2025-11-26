import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ThanksgivingPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Always show popup after 1 second (for testing)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Optionally save to localStorage
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
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
            onClick={handleClose}
          />

          {/* Popup Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div className="relative max-w-3xl w-full">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 z-10 p-3 bg-white rounded-full shadow-2xl hover:bg-gray-100 transition-colors duration-200 group border-2 border-gray-200"
                aria-label="Close popup"
              >
                <X size={28} className="text-gray-700 group-hover:text-red-600 transition-colors" />
              </button>

              {/* Content - No images, pure CSS design */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-8 md:p-16 border-4 border-orange-300">
                {/* Decorative autumn leaves */}
                <div className="absolute top-4 left-4 text-4xl opacity-50 animate-bounce">🍂</div>
                <div className="absolute top-4 right-4 text-4xl opacity-50 animate-bounce" style={{animationDelay: '0.2s'}}>🍁</div>
                <div className="absolute bottom-4 left-4 text-4xl opacity-50 animate-bounce" style={{animationDelay: '0.4s'}}>🌾</div>
                <div className="absolute bottom-4 right-4 text-4xl opacity-50 animate-bounce" style={{animationDelay: '0.6s'}}>🎃</div>
                
                {/* Content */}
                <div className="relative text-center space-y-6">
                  {/* Logo */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="text-2xl md:text-3xl font-bold">
                      <span className="text-gray-800">Workforce One</span>
                      <span className="text-[#66CB00]"> Solutions</span>
                    </div>
                  </div>

                  {/* Subtitle */}
                  <p className="text-sm md:text-base text-gray-600 font-medium uppercase tracking-widest">
                    WISHES YOU A
                  </p>

                  {/* Main Message */}
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    <span className="text-orange-600 drop-shadow-lg">HAPPY</span>
                    <br />
                    <span className="text-amber-600 drop-shadow-lg">THANKSGIVING</span>
                  </h1>

                  {/* Turkey emoji */}
                  <div className="text-6xl md:text-8xl my-6 animate-pulse">🦃</div>

                  {/* Bottom Message */}
                  <p className="text-base md:text-lg text-gray-700 font-medium max-w-xl mx-auto leading-relaxed">
                    Let us celebrate the blessings we often take for granted and the people who make life beautiful.
                  </p>

                  {/* Quote */}
                  <p className="text-sm md:text-base text-gray-600 italic pt-4 border-t-2 border-orange-200 mt-6">
                    "Gratitude turns what we have into enough"
                  </p>
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
