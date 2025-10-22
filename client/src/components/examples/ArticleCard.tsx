import ArticleCard from '../ArticleCard';
import bazaarImage from "@assets/generated_images/Traditional_Afghan_bazaar_historical_2d9fbb65.png";

export default function ArticleCardExample() {
  return (
    <div className="max-w-sm">
      <ArticleCard
        title="The Silk Road Through Afghanistan"
        excerpt="Discover how Afghanistan served as a crucial crossroads for trade between East and West, facilitating cultural exchange and economic prosperity for centuries."
        period="Ancient History"
        readTime="8 min read"
        date="March 15, 2024"
        imageUrl={bazaarImage}
        imageAlt="Traditional Afghan bazaar showcasing historical trade"
        onClick={() => console.log('Article clicked')}
      />
    </div>
  );
}