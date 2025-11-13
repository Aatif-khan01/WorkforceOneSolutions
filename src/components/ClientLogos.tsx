import { useState, useMemo, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import client1 from "@/assets/clients/client-1.png";
import client2 from "@/assets/clients/client-2.png";
import client3 from "@/assets/clients/client-3.png";
import client4 from "@/assets/clients/client-4.png";
import client5 from "@/assets/clients/client-5.png";
import client6 from "@/assets/clients/client-6.png";

const ClientLogos = () => {
  const clients = useMemo(() => [
    { src: client1, alt: "TechCorp Solutions" },
    { src: client2, alt: "Global Dynamics" },
    { src: client3, alt: "SecureDefense Systems" },
    { src: client4, alt: "MediTech Innovations" },
    { src: client5, alt: "Capital Partners Group" },
    { src: client6, alt: "Aerospace Dynamics" }
  ], []);

  const extendedClients = useMemo(() => [...clients, ...clients, ...clients], [clients]);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 2000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-16 md:py-20 overflow-hidden bg-card/50 backdrop-blur-sm border-t border-border relative">
      {/* Header */}
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
          <span className="bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
            Serving Government Contractors collaborating with:
          </span>
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="container mx-auto px-4">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
            dragFree: false,
            skipSnaps: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {extendedClients.map((client, index) => (
              <CarouselItem
                key={`${client.alt}-${index}`}
                className="pl-2 md:pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
              >
                <div className="flex items-center justify-center w-full h-[120px] sm:h-[140px] md:h-[160px] hover:scale-105 transition-all duration-300">
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="w-full h-full object-contain transition-all duration-300"
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
