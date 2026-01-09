import { ReactNode } from "react";
import GlassCard from "./GlassCard";

interface ImageGridInfoProps {
  images: {
    src: string;
    alt: string;
    label?: string;
  }[];
  title?: string;
  subtitle?: string;
  sections: {
    title: string;
    icon?: ReactNode;
    content: string;
  }[];
  reverse?: boolean;
  hideTitle?: boolean;
}

const ImageGridInfo = ({ images, title, subtitle, sections, reverse = false, hideTitle = false }: ImageGridInfoProps) => {
  return (
    <section className="py-24 scroll-smooth">
      <div className="container mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image Grid */}
          <div className={`grid grid-cols-2 gap-4 ${reverse ? 'lg:order-2' : ''}`}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden group animate-fade-in ${
                  index === 0 ? 'col-span-2 h-[300px]' : 'h-[200px]'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {image.label && (
                  <div className="absolute bottom-6 left-6 text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {image.label}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Info Content */}
          <div className={`space-y-6 ${reverse ? 'lg:order-1' : ''}`}>
            {!hideTitle && title && (
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-accent via-accent-glow to-secondary bg-clip-text text-transparent">
                    {title}
                  </span>
                </h2>
                {subtitle && (
                  <p className="text-xl text-muted-foreground">{subtitle}</p>
                )}
              </div>
            )}

            <div className="space-y-6">
              {sections.map((section, index) => (
                <GlassCard
                  key={index}
                  className="p-6"
                >
                  <div className="flex items-start space-x-4">
                    {section.icon && (
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center flex-shrink-0">
                        {section.icon}
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-accent">
                        {section.title}
                      </h3>
                      <p className="text-foreground leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGridInfo;
