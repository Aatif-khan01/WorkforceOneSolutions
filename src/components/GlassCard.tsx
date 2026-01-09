import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}

const GlassCard = ({ children, className = "", hover = true, style }: GlassCardProps) => {
  return (
    <div
      className={`
        relative rounded-2xl bg-glass/40 backdrop-blur-xl border border-glass-border 
        shadow-glass overflow-hidden
        ${hover ? "hover:scale-[1.02] hover:shadow-elevation transition-all duration-500" : ""}
        ${className}
      `}
      style={{
        transform: "translateZ(0)",
        willChange: "transform",
        ...style,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-50" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassCard;
