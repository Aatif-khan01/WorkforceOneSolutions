import { ReactNode, useState } from "react";
import { LucideIcon } from "lucide-react";

interface FlipCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  backContent?: string;
  gradient?: string;
}

const FlipCard = ({ 
  icon: Icon, 
  title, 
  description, 
  backContent,
  gradient = "from-accent to-accent-glow"
}: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[280px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden">
          <div className="h-full w-full p-8 rounded-2xl border border-glass-border bg-glass/50 backdrop-blur-sm shadow-lg">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 transition-transform duration-300`}>
              <Icon size={32} className="text-background" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>

        {/* Back Side - Now uses #66CB00 green */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="h-full w-full p-8 rounded-2xl bg-[#66CB00] shadow-lg flex flex-col justify-center items-center text-center">
            <Icon size={48} className="text-white mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
            <p className="text-white/90 text-base leading-relaxed">
              {backContent || description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
