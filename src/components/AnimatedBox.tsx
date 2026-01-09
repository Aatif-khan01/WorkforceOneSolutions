import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useAnimations } from "../hook/use-animations";

interface AnimatedBoxProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "fadeIn";
  duration?: number;
}

const AnimatedBox = ({
  children,
  className = "",
  delay = 0,
  animation = "fadeInUp",
  duration = 500,
}: AnimatedBoxProps) => {
  const animations = useAnimations();
  const selectedAnimation = animations[animation] || animations.fadeInUp;

  return (
    <motion.div
      {...selectedAnimation}
      className={className}
      style={{
        transform: "translateZ(0)",
        willChange: "transform",
      }}
      transition={{
        ...selectedAnimation.transition,
        duration: duration / 1000,
        delay: delay / 1000,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBox;
