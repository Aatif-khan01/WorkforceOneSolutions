import { useMemo } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import client1 from "@/assets/clients/client-1.png";
import client2 from "@/assets/clients/client-2.png";
import client3 from "@/assets/clients/client-3.png";
import client4 from "@/assets/clients/client-4.png";
import client5 from "@/assets/clients/client-5.png";
import client6 from "@/assets/clients/client-6.png";

const ClientLogos = () => {
  const clients = useMemo(() => [
    {
      src: client1,
      alt: "TechCorp Solutions"
    },
    {
      src: client2,
      alt: "Global Dynamics"
    },
    {
      src: client3,
      alt: "SecureDefense Systems"
    },
    {
      src: client4,
      alt: "MediTech Innovations"
    },
    {
      src: client5,
      alt: "Capital Partners Group"
    },
    {
      src: client6,
      alt: "Aerospace Dynamics"
    }
  ], []);

  // Create extended array for seamless loop (only duplicate once for better performance)
  const extendedClients = useMemo(() => [...clients, ...clients], [clients]);

  const autoplayPlugin = useMemo(() => Autoplay({
    delay: 2500, // Faster autoplay: 2.5 seconds
    stopOnInteraction: false,
    stopOnMouseEnter: false,
  }), []);

  return (
    <section className="py-16 md:py-20 overflow-hidden bg-card/50 backdrop-blur-sm border-t border-border relative">
      {/* Section Header */}
      <div className="text-center mb-10 md:mb-12">
        <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-accent/10 rounded-full border border-accent/20 mb-4 md:mb-6">
          <span className="text-xs md:text-sm font-semibold text-foreground tracking-wider uppercase">
            CLIENTS
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
          <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            Collaborating with Government Leaders
          </span>
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="container mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true, // Enable smooth dragging
            skipSnaps: false,
            duration: 15, // Faster scroll duration (reduced from default 25)
            slidesToScroll: 1,
          }}
          plugins={[autoplayPlugin]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {extendedClients.map((client, index) => (
              <CarouselItem
                key={`${client.alt}-${index}`}
                className="pl-2 md:pl-4 basis-auto"
              >
                <div className="flex items-center justify-center w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] rounded-full overflow-hidden bg-card shadow-lg border-2 border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:scale-105 group">
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="w-full h-full object-contain p-3 md:p-4 transition-transform duration-300 group-hover:scale-110"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                    loading="lazy"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ClientLogos;