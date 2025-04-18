
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Headset, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-12 border-t border-border">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Headset className="h-6 w-6 text-vr-primary" />
            <span className="text-xl font-bold vr-gradient-text">VR Мир</span>
          </div>
          <p className="text-muted-foreground">
            Погружение в мир виртуальной реальности никогда не было таким доступным и увлекательным.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:text-vr-primary">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:text-vr-primary">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:text-vr-primary">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:text-vr-primary">
              <Youtube className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Страницы</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-muted-foreground hover:text-vr-primary transition-colors">
                Главная
              </Link>
            </li>
            <li>
              <Link to="/technologies" className="text-muted-foreground hover:text-vr-primary transition-colors">
                Технологии
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-muted-foreground hover:text-vr-primary transition-colors">
                Продукты
              </Link>
            </li>
            <li>
              <Link to="/news" className="text-muted-foreground hover:text-vr-primary transition-colors">
                Новости
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-muted-foreground hover:text-vr-primary transition-colors">
                Контакты
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Технологии</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-muted-foreground hover:text-vr-primary transition-colors">
                VR шлемы
              </a>
            </li>
            <li>
              <a href="#" className="text-muted-foreground hover:text-vr-primary transition-colors">
                AR очки
              </a>
            </li>
            <li>
              <a href="#" className="text-muted-foreground hover:text-vr-primary transition-colors">
                Контроллеры
              </a>
            </li>
            <li>
              <a href="#" className="text-muted-foreground hover:text-vr-primary transition-colors">
                Программное обеспечение
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Контакты</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4 text-vr-primary" />
              <span>info@vrmir.ru</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4 text-vr-primary" />
              <span>+7 (999) 123-45-67</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-vr-primary" />
              <span>Москва, ул. Виртуальная, 42</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t border-border/50">
        <div className="text-center text-muted-foreground text-sm">
          © 2023 VR Мир. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
