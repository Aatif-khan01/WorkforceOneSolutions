import { ReactNode, useEffect, useRef, useState } from "react";

const DISABLE_ANIMATIONS = true;

interface StaggeredAnimationProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn";
}

const StaggeredAnimation = ({ 
  children, 
  className = "", 
  staggerDelay = 50,
  animation = "fadeInUp"
}: StaggeredAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (DISABLE_ANIMATIONS) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.children;
            Array.from(children).forEach((_, index) => {
              // Use requestAnimationFrame for better performance and to avoid blocking main thread
              requestAnimationFrame(() => {
                setTimeout(() => {
                  setVisibleItems(prev => new Set([...prev, index]));
                }, index * staggerDelay);
              });
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [staggerDelay]);

  const getAnimationClasses = (index: number) => {
    if (DISABLE_ANIMATIONS) return "";
    const baseClasses = "transition-all duration-500 ease-out";
    const isVisible = visibleItems.has(index);
    
    if (!isVisible) {
      switch (animation) {
        case "fadeInUp":
          return `${baseClasses} opacity-0 translate-y-8`;
        case "fadeInLeft":
          return `${baseClasses} opacity-0 translate-x-8`;
        case "fadeInRight":
          return `${baseClasses} opacity-0 -translate-x-8`;
        case "scaleIn":
          return `${baseClasses} opacity-0 scale-95`;
        default:
          return `${baseClasses} opacity-0 translate-y-8`;
      }
    } else {
      switch (animation) {
        case "fadeInUp":
          return `${baseClasses} opacity-100 translate-y-0`;
        case "fadeInLeft":
          return `${baseClasses} opacity-100 translate-x-0`;
        case "fadeInRight":
          return `${baseClasses} opacity-100 translate-x-0`;
        case "scaleIn":
          return `${baseClasses} opacity-100 scale-100`;
        default:
          return `${baseClasses} opacity-100 translate-y-0`;
      }
    }
  };

  return DISABLE_ANIMATIONS ? (
    <div ref={containerRef} className={className}>{children}</div>
  ) : (
    <div ref={containerRef} className={className}>
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <div key={index} className={getAnimationClasses(index)}>
              {child}
            </div>
          ))
        : <div className={getAnimationClasses(0)}>{children}</div>
      }
    </div>
  );
};

export default StaggeredAnimation;
