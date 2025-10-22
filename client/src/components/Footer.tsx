import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    explore: [
      { label: "Ancient History", href: "#ancient" },
      { label: "Medieval Period", href: "#medieval" },
      { label: "Modern Era", href: "#modern" },
      { label: "Photo Gallery", href: "#gallery" }
    ],
    resources: [
      { label: "About This Project", href: "#about" },
      { label: "Historical Sources", href: "#sources" },
      { label: "Research Methods", href: "#methods" },
      { label: "Bibliography", href: "#bibliography" }
    ]
  };

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-serif font-bold text-primary mb-4">
              Afghanistan History
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Preserving and sharing the rich historical heritage of Afghanistan through 
              carefully researched articles and authentic historical photography.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-primary fill-current" />
              <span>for historical preservation</span>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded -mx-2"
                    data-testid={`footer-explore-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded -mx-2"
                    data-testid={`footer-resource-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Afghanistan History Project. Educational content for historical preservation.
          </p>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-muted-foreground hover:text-foreground"
            data-testid="button-scroll-to-top"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}