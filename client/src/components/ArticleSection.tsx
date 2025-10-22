import { useState } from "react";
import ArticleCard from "./ArticleCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import bazaarImage from "@assets/generated_images/Traditional_Afghan_bazaar_historical_2d9fbb65.png";
import architectureImage from "@assets/generated_images/Afghan_architectural_monument_historical_59fac4c1.png";
import mountainImage from "@assets/generated_images/Afghanistan_mountain_landscape_historical_f7a3acc6.png";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  period: string;
  readTime: string;
  date: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
}

export default function ArticleSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Mock data - in a real app this would come from props or API
  const articles: Article[] = [
    {
      id: "1",
      title: "The Silk Road Through Afghanistan",
      excerpt: "Discover how Afghanistan served as a crucial crossroads for trade between East and West, facilitating cultural exchange and economic prosperity for centuries.",
      period: "Ancient History",
      readTime: "8 min read",
      date: "March 15, 2024",
      imageUrl: bazaarImage,
      imageAlt: "Traditional Afghan bazaar showcasing historical trade",
      category: "ancient"
    },
    {
      id: "2",
      title: "Islamic Architecture in Medieval Afghanistan",
      excerpt: "Explore the magnificent architectural achievements of medieval Afghanistan, from intricate geometric patterns to soaring minarets that defined an era.",
      period: "Medieval Period",
      readTime: "10 min read", 
      date: "March 12, 2024",
      imageUrl: architectureImage,
      imageAlt: "Afghan Islamic architectural monument with ornate details",
      category: "medieval"
    },
    {
      id: "3", 
      title: "The Hindu Kush: Geography as Destiny",
      excerpt: "Understanding how Afghanistan's dramatic geography shaped its history, from ancient migrations to modern geopolitical significance.",
      period: "Timeless",
      readTime: "12 min read",
      date: "March 10, 2024", 
      imageUrl: mountainImage,
      imageAlt: "Majestic Hindu Kush mountains defining Afghanistan's landscape",
      category: "geography"
    }
  ];

  const categories = [
    { id: "all", label: "All Articles" },
    { id: "ancient", label: "Ancient History" },
    { id: "medieval", label: "Medieval Period" },
    { id: "modern", label: "Modern Era" },
    { id: "geography", label: "Geography" }
  ];

  const filteredArticles = selectedCategory === "all" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const handleArticleClick = (article: Article) => {
    console.log("Opening article:", article.title);
    // In a real app, this would navigate to the full article
  };

  return (
    <section id="content" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Historical Articles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delve deep into Afghanistan's fascinating history through carefully researched articles 
            that bring the past to life with compelling narratives and historical context.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              data-testid={`filter-${category.id}`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              excerpt={article.excerpt}
              period={article.period}
              readTime={article.readTime}
              date={article.date}
              imageUrl={article.imageUrl}
              imageAlt={article.imageAlt}
              onClick={() => handleArticleClick(article)}
            />
          ))}
        </div>

        {/* Load More */}
        {filteredArticles.length > 0 && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => console.log("Loading more articles...")}
              data-testid="button-load-more"
            >
              Load More Articles
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}