
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Headset } from "lucide-react";

const navItems = [
  { name: "Главная", path: "/" },
  { name: "Технологии", path: "/technologies" },
  { name: "Продукты", path: "/products" },
  { name: "Новости", path: "/news" },
  { name: "Контакты", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Headset className="h-6 w-6 text-vr-primary" />
          <span className="text-xl font-bold vr-gradient-text">VR Мир</span>
        </Link>
        
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-vr-accent",
                location.pathname === item.path
                  ? "text-vr-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <Button className="bg-gradient-to-r from-vr-primary to-vr-secondary hover:opacity-90 transition-opacity">
            Пробная демо
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
