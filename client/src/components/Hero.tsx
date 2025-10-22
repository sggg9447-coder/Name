import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/Afghanistan_mountain_landscape_historical_f7a3acc6.png";

export default function Hero() {
  const scrollToContent = () => {
    const contentSection = document.getElementById('content');
    contentSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Historic Afghanistan landscape with Hindu Kush mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight">
          Stories Through
          <span className="block text-primary">Time</span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200 leading-relaxed">
          Journey through Afghanistan's rich history, from ancient civilizations to modern times. 
          Discover the cultural heritage and pivotal moments that shaped this remarkable nation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary/90 hover:bg-primary text-primary-foreground border border-primary-border backdrop-blur-sm"
            onClick={scrollToContent}
            data-testid="button-explore-history"
          >
            Explore History
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="bg-background/20 hover:bg-background/30 text-white border-white/30 backdrop-blur-sm"
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-view-gallery"
          >
            View Gallery
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:text-primary"
          onClick={scrollToContent}
          data-testid="button-scroll-down"
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
}