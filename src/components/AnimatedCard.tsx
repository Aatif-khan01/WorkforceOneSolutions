import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useAnimations } from "../hook/use-animations";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
  delay?: number;
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "fadeIn";
}

const AnimatedCard = ({
  children,
  className = "",
  hover = true,
  style,
  delay = 0,
  animation = "fadeInUp",
}: AnimatedCardProps) => {
  const animations = useAnimations();
  const selectedAnimation = animations[animation] || animations.fadeInUp;

  return (
    <motion.div
      {...selectedAnimation}
      className={`relative rounded-2xl bg-glass/40 backdrop-blur-xl border border-glass-border shadow-glass overflow-hidden ${
        hover
          ? "hover:scale-[1.02] hover:shadow-elevation transition-all duration-500"
          : ""
      } ${className}`}
      style={{ transform: "translateZ(0)", willChange: "transform", ...style }}
      transition={{ 
        ...selectedAnimation.transition,
        delay: delay / 1000 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-50" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default AnimatedCard;