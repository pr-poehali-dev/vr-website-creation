
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import NewsCard from "@/components/NewsCard";

const HomePage = () => {
  const popularProducts = [
    {
      title: "VR Шлем Pro X",
      description: "Новейший шлем виртуальной реальности с разрешением 8K, отслеживанием движений и встроенными наушниками.",
      price: "79 999 ₽",
      image: "/placeholder.svg",
      badges: ["Беспроводной", "8K", "120 Гц"],
      rating: 5,
      isNew: true,
    },
    {
      title: "Контроллеры Motion",
      description: "Точное отслеживание движений рук для полного погружения в виртуальную реальность.",
      price: "14 999 ₽",
      image: "/placeholder.svg",
      badges: ["Haptic", "Быстрый отклик"],
      rating: 4,
    },
    {
      title: "VR Станция Base 2",
      description: "Мощная станция для обработки VR контента, совместимая со всеми популярными шлемами.",
      price: "159 999 ₽",
      image: "/placeholder.svg",
      badges: ["RTX 4090", "32 ГБ ОЗУ"],
      rating: 5,
    },
  ];

  const latestNews = [
    {
      title: "Анонсирована новая модель VR шлема с технологией отслеживания глаз",
      summary: "Компания VR Tech представила революционный шлем, который отслеживает движение глаз для более реалистичного погружения.",
      date: "15 мая 2023",
      image: "/placeholder.svg",
      category: "Технологии",
      readTime: "5 мин чтения",
    },
    {
      title: "VR терапия показывает отличные результаты в лечении фобий",
      summary: "Новое исследование подтверждает эффективность применения виртуальной реальности в психотерапевтической практике.",
      date: "10 мая 2023",
      image: "/placeholder.svg",
      category: "Медицина",
      readTime: "7 мин чтения",
    },
  ];

  const testimonials = [
    {
      text: "VR полностью изменила мой подход к обучению. Теперь я могу посещать виртуальные лаборатории и проводить эксперименты, которые невозможны в обычной школе.",
      author: "Анна К., Преподаватель физики",
    },
    {
      text: "Благодаря VR тренингам наши сотрудники быстрее осваивают новое оборудование без риска его повреждения. Окупаемость инвестиций превзошла все ожидания.",
      author: "Игорь М., Директор производства",
    },
    {
      text: "С VR шлемом я могу путешествовать по миру, не выходя из дома. Это невероятные ощущения — будто действительно находишься в другой стране.",
      author: "Мария С., Путешественница",
    },
  ];

  return (
    <div>
      <HeroSection />
      
      <FeaturesSection />
      
      {/* Популярные продукты */}
      <section className="py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Популярные <span className="vr-gradient-text">продукты</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Исследуйте лучшее оборудование для виртуальной реальности, которое меняет способ взаимодействия с цифровым миром.
              </p>
            </div>
            <Button variant="outline" className="border-vr-primary text-vr-primary hover:bg-vr-primary/10">
              Все продукты →
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Отзывы */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Что говорят <span className="vr-gradient-text">пользователи</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Узнайте, как виртуальная реальность меняет жизнь и работу людей по всему миру.
            </p>
          </div>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <blockquote className="text-xl italic mb-6">
                        "{testimonial.text}"
                      </blockquote>
                      <footer className="text-right text-vr-primary font-medium">
                        — {testimonial.author}
                      </footer>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-vr-primary border-vr-primary" />
            <CarouselNext className="text-vr-primary border-vr-primary" />
          </Carousel>
        </div>
      </section>
      
      {/* Новости */}
      <section className="py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Последние <span className="vr-gradient-text">новости</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Будьте в курсе последних тенденций и инноваций в мире виртуальной реальности.
              </p>
            </div>
            <Button variant="outline" className="border-vr-primary text-vr-primary hover:bg-vr-primary/10">
              Все новости →
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestNews.map((news, index) => (
              <NewsCard key={index} {...news} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-vr-primary/20 to-vr-secondary/20">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы погрузиться в <span className="vr-gradient-text">виртуальную реальность</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Начните свое путешествие в мир безграничных возможностей прямо сейчас.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-gradient-to-r from-vr-primary to-vr-secondary hover:opacity-90 transition-opacity text-lg px-8 py-6">
              Начать погружение
            </Button>
            <Button variant="outline" className="border-vr-primary text-vr-primary hover:bg-vr-primary/10 text-lg px-8 py-6">
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
