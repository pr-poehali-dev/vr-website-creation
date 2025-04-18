
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

type ProductCardProps = {
  title: string;
  description: string;
  price: string;
  image: string;
  badges?: string[];
  rating?: number;
  isNew?: boolean;
};

const ProductCard = ({
  title,
  description,
  price,
  image,
  badges = [],
  rating = 0,
  isNew = false,
}: ProductCardProps) => {
  return (
    <Card className="overflow-hidden border-border/50 vr-card-hover">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img src={image} alt={title} className="object-cover w-full h-full" />
        {isNew && (
          <Badge className="absolute top-3 right-3 bg-vr-accent text-vr-accent-foreground">
            Новинка
          </Badge>
        )}
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{title}</CardTitle>
          <div className="text-lg font-bold vr-gradient-text">{price}</div>
        </div>
        <div className="flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <Badge key={index} variant="outline" className="border-vr-primary/30 text-vr-primary">
              {badge}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base line-clamp-3">{description}</CardDescription>
        {rating > 0 && (
          <div className="flex items-center gap-1 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-xl">
                {i < rating ? "⭐" : "☆"}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex gap-3">
        <Button className="w-full bg-gradient-to-r from-vr-primary to-vr-secondary hover:opacity-90 transition-opacity">
          В корзину
        </Button>
        <Button variant="outline" className="w-1/3 border-vr-primary/50 text-vr-primary hover:bg-vr-primary/10">
          Детали
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
