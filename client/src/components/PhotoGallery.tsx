import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import bazaarImage from "@assets/generated_images/Traditional_Afghan_bazaar_historical_2d9fbb65.png";
import architectureImage from "@assets/generated_images/Afghan_architectural_monument_historical_59fac4c1.png";
import mountainImage from "@assets/generated_images/Afghanistan_mountain_landscape_historical_f7a3acc6.png";

interface Photo {
  id: string;
  url: string;
  title: string;
  description: string;
  period: string;
  date: string;
}

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(0);

  // Mock data - in a real app this would come from props or API
  const photos: Photo[] = [
    {
      id: "1",
      url: bazaarImage,
      title: "Traditional Afghan Bazaar",
      description: "A bustling marketplace showcasing the vibrant commercial life of traditional Afghanistan, with merchants displaying colorful textiles, carpets, and metalwork.",
      period: "Early 20th Century",
      date: "1920s-1930s"
    },
    {
      id: "2", 
      url: architectureImage,
      title: "Islamic Architecture Monument",
      description: "Magnificent example of Afghan Islamic architecture featuring intricate geometric patterns, ornate tilework in blues and turquoise, demonstrating the sophisticated craftsmanship of Afghan artisans.",
      period: "Medieval Period",
      date: "12th-15th Century"
    },
    {
      id: "3",
      url: mountainImage,
      title: "Hindu Kush Mountains",
      description: "The majestic Hindu Kush mountain range that has shaped Afghanistan's geography and culture for millennia, with traditional architecture nestled in the valleys.",
      period: "Timeless",
      date: "Ancient to Present"
    }
  ];

  const openLightbox = (photo: Photo, index: number) => {
    setSelectedPhoto(photo);
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (selectedPhotoIndex - 1 + photos.length) % photos.length
      : (selectedPhotoIndex + 1) % photos.length;
    
    setSelectedPhotoIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  };

  return (
    <section id="gallery" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Historical Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A visual journey through Afghanistan's rich heritage, captured in historical photographs 
            and architectural marvels that tell the story of this ancient land.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <Card 
              key={photo.id} 
              className="overflow-hidden hover-elevate cursor-pointer group"
              onClick={() => openLightbox(photo, index)}
              data-testid={`photo-card-${photo.id}`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {photo.period}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{photo.date}</span>
                </div>
                <h3 className="font-serif font-semibold mb-2 group-hover:text-primary transition-colors">
                  {photo.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {photo.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:text-primary"
                onClick={closeLightbox}
                data-testid="button-close-lightbox"
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-primary"
                onClick={() => navigatePhoto('prev')}
                data-testid="button-prev-photo"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-primary"
                onClick={() => navigatePhoto('next')}
                data-testid="button-next-photo"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Image */}
              <div className="bg-card rounded-lg overflow-hidden">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  className="w-full max-h-[70vh] object-contain"
                />
                
                {/* Caption */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{selectedPhoto.period}</Badge>
                    <span className="text-sm text-muted-foreground">{selectedPhoto.date}</span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedPhoto.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}