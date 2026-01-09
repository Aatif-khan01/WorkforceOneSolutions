import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logoLight from "@/assets/WfOS-LOGO.png";
import logoDark from "@/assets/Logo-dark.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "@/components/ThemeProvider";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < 100 || currentScrollY < lastScrollY);
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowServicesDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const serviceLinks = [
    { path: "/services/proposal", label: "Proposal Development" },
    { path: "/services/recruitment", label: "Cleared Recruitment" },
    { path: "/services/staffing", label: "Workforce Staffing" },
    { path: "/services/software", label: "Software Development" },
  ];

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    {
      path: "/services",
      label: "Services",
      hasDropdown: true,
      onMouseEnter: () => setShowServicesDropdown(true),
      onMouseLeave: () => setShowServicesDropdown(false),
    },
    { path: "/contact", label: "Contact" },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
  };

  const getTextColor = () => {
    if (isHomePage && !isScrolled) {
      return "text-white";
    }
    return "text-foreground";
  };

  const getHoverTextColor = () => {
    return "hover:text-[#66CB00]";
  };

  const getActiveTextColor = () => {
    return "text-[#66CB00]";
  };

  const getUnderlineColor = () => {
    return "bg-[#66CB00]";
  };

  const getMobileButtonColor = () => {
    if (isHomePage && !isScrolled) {
      return "text-foreground bg-white/10 backdrop-blur-sm hover:bg-white/20";
    }
    return "text-foreground hover:text-[#66CB00]";
  };

  // Choose logo based on theme
  const currentLogo = theme === "dark" ? logoDark : logoLight;

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-background/95 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Only show on non-home pages, with fixed size */}
          {!isHomePage && (
            <Link
              to="/"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img
                src={currentLogo}
                alt="Company logo"
                className="h-12 w-auto object-contain transition-opacity duration-300"
                style={{ maxHeight: "48px" }}
                width={144}
                height={48}
                decoding="async"
                loading="eager"
              />
            </Link>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={link.onMouseEnter}
                onMouseLeave={link.onMouseLeave}
              >
                <Link
                  to={link.path}
                  className={`relative text-base font-semibold transition-colors duration-300 group flex items-center ${
                    location.pathname === link.path || 
                    (link.path === "/services" && location.pathname.startsWith("/services"))
                      ? getActiveTextColor()
                      : `${getTextColor()} ${getHoverTextColor()}`
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown
                      size={18}
                      className={`ml-1 transition-transform duration-300 ${
                        showServicesDropdown ? "rotate-180" : ""
                      }`}
                    />
                  )}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 ${getUnderlineColor()} transition-transform duration-300 origin-left ${
                      location.pathname === link.path ||
                      (link.path === "/services" && location.pathname.startsWith("/services"))
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
                {link.hasDropdown && (
                  <AnimatePresence>
                    {showServicesDropdown && (
                      <motion.div
                        ref={dropdownRef}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-2 w-64 bg-background/95 backdrop-blur-xl border border-border rounded-lg shadow-xl"
                      >
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className={`block px-4 py-2 text-sm rounded-md mx-2 transition-all duration-200 ${
                              location.pathname === service.path
                                ? "text-[#66CB00] bg-[#66CB00]/20 font-semibold"
                                : "text-foreground hover:!text-[#66CB00] hover:!bg-[#66CB00]/20"
                            }`}
                            style={{
                              transition: "all 0.2s ease"
                            }}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <ThemeToggle />
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-[#66CB00] hover:bg-[#66CB00]/90 hover:shadow-xl text-white text-base font-semibold transition-all duration-300 hover:scale-105 px-8 py-6"
              >
                LET'S TALK
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2 ml-auto">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${getMobileButtonColor()}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 space-y-2 bg-background/95 backdrop-blur-xl rounded-lg p-4"
            >
              {navLinks.map((link) => (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => !link.hasDropdown && setIsOpen(false)}
                    className={`block py-3 px-4 text-base font-medium rounded-lg transition-colors duration-300 ${
                      location.pathname === link.path ||
                      (link.path === "/services" && location.pathname.startsWith("/services"))
                        ? "text-[#66CB00] bg-[#66CB00]/20"
                        : "text-foreground hover:text-[#66CB00] hover:bg-[#66CB00]/20"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          onClick={() => setIsOpen(false)}
                          className={`block py-2 px-4 text-sm rounded-lg transition-colors duration-200 ${
                            location.pathname === service.path
                              ? "text-[#66CB00] bg-[#66CB00]/20 font-semibold"
                              : "text-foreground hover:text-[#66CB00] hover:bg-[#66CB00]/20"
                          }`}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button
                  size="lg"
                  className="w-full bg-[#66CB00] hover:bg-[#66CB00]/90 hover:shadow-xl text-white py-6 mt-4 transition-all duration-300 hover:scale-105 text-base font-semibold"
                >
                  LET'S TALK
                </Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
