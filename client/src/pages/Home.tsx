import Hero from "@/components/Hero";
import ArticleSection from "@/components/ArticleSection";
import PhotoGallery from "@/components/PhotoGallery";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ArticleSection />
      <PhotoGallery />
    </div>
  );
}