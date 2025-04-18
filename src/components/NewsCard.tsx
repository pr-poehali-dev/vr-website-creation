
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { CalendarDays } from "lucide-react";

type NewsCardProps = {
  title: string;
  summary: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
};

const NewsCard = ({
  title,
  summary,
  date,
  image,
  category,
  readTime,
}: NewsCardProps) => {
  return (
    <Card className="overflow-hidden border-border/50 vr-card-hover h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img src={image} alt={title} className="object-cover w-full h-full transition-transform hover:scale-105 duration-500" />
        <div className="absolute top-3 right-3 bg-vr-primary/90 text-white text-xs px-3 py-1 rounded-full">
          {category}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl line-clamp-2">{title}</CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4" />
          <span>{date}</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
          <span>{readTime}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base line-clamp-3">{summary}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="text-vr-primary hover:bg-vr-primary/10 hover:text-vr-primary px-0">
          Читать дальше →
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
