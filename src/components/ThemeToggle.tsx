import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-between w-16 h-8 rounded-full bg-background/80 backdrop-blur-sm border-2 border-border hover:border-accent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background group shadow-sm hover:shadow-md"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Background gradient that shifts */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 to-accent-glow/20"
        initial={false}
        animate={{
          opacity: isDark ? 0.3 : 0.1,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Icons container */}
      <div className="relative flex items-center justify-between w-full px-1.5 z-10">
        {/* Sun Icon */}
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 0.7 : 1,
            opacity: isDark ? 0.4 : 1,
            rotate: isDark ? -90 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          <Sun className="h-4 w-4 text-amber-500" />
        </motion.div>

        {/* Moon Icon */}
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 1 : 0.7,
            opacity: isDark ? 1 : 0.4,
            rotate: isDark ? 0 : 90,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          <Moon className="h-4 w-4 text-blue-400" />
        </motion.div>
      </div>

      {/* Sliding indicator */}
      <motion.div
        className="absolute top-0.5 bottom-0.5 w-7 rounded-full bg-gradient-to-r from-accent to-accent-glow shadow-lg z-20"
        initial={false}
        animate={{
          x: isDark ? "calc(100% - 0.5rem)" : "0.125rem",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />
    </button>
  );
}
