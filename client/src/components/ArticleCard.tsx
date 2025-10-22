import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  period: string;
  readTime: string;
  date: string;
  imageUrl: string;
  imageAlt: string;
  onClick: () => void;
}

export default function ArticleCard({
  title,
  excerpt,
  period,
  readTime,
  date,
  imageUrl,
  imageAlt,
  onClick
}: ArticleCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate cursor-pointer group" onClick={onClick}>
      <div className="aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">
            {period}
          </Badge>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-serif font-semibold line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground line-clamp-3 leading-relaxed">
          {excerpt}
        </p>
        
        <Button 
          variant="ghost" 
          className="p-0 h-auto text-primary hover:text-primary/80 justify-start"
          data-testid="button-read-article"
        >
          Read Article →
        </Button>
      </CardContent>
    </Card>
  );
}