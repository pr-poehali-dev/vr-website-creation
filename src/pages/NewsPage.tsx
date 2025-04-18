
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewsCard from "@/components/NewsCard";
import { Search, TrendingUp } from "lucide-react";

const NewsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const newsArticles = [
    {
      id: 1,
      title: "Анонсирована новая модель VR шлема с технологией отслеживания глаз",
      summary: "Компания VR Tech представила революционный шлем, который отслеживает движение глаз для более реалистичного погружения. Это позволяет не только улучшить графику в области зрения пользователя, но и обеспечивает более естественное взаимодействие с виртуальными объектами.",
      date: "15 мая 2023",
      image: "/placeholder.svg",
      category: "Технологии",
      tags: ["VR шлемы", "Инновации", "Eye tracking"],
      readTime: "5 мин чтения",
      featured: true
    },
    {
      id: 2,
      title: "VR терапия показывает отличные результаты в лечении фобий",
      summary: "Новое исследование подтверждает эффективность применения виртуальной реальности в психотерапевтической практике. Пациенты с различными фобиями демонстрируют значительное улучшение после серии сеансов в контролируемой виртуальной среде.",
      date: "10 мая 2023",
      image: "/placeholder.svg",
      category: "Медицина",
      tags: ["Терапия", "Исследования", "Психология"],
      readTime: "7 мин чтения",
      featured: true
    },
    {
      id: 3,
      title: "Образовательная платформа запускает 50 новых VR курсов",
      summary: "EduVR объявила о запуске 50 новых образовательных курсов в виртуальной реальности, охватывающих темы от анатомии до астрофизики. Курсы будут доступны на всех популярных VR платформах.",
      date: "5 мая 2023",
      image: "/placeholder.svg",
      category: "Образование",
      tags: ["Обучение", "Курсы", "EduVR"],
      readTime: "4 мин чтения"
    },
    {
      id: 4,
      title: "Виртуальные концерты привлекли более 10 миллионов зрителей в прошлом месяце",
      summary: "Популярность виртуальных концертов продолжает расти. В апреле более 10 миллионов человек посетили музыкальные мероприятия в VR, что на 40% больше по сравнению с прошлым годом.",
      date: "29 апреля 2023",
      image: "/placeholder.svg",
      category: "Развлечения",
      tags: ["Музыка", "Концерты", "Статистика"],
      readTime: "6 мин чтения"
    },
    {
      id: 5,
      title: "Новый стандарт для беспроводной передачи VR контента утвержден",
      summary: "Международный консорциум утвердил новый стандарт для беспроводной передачи VR контента с высоким разрешением и минимальной задержкой, что может значительно ускорить развитие беспроводных VR устройств.",
      date: "22 апреля 2023",
      image: "/placeholder.svg",
      category: "Технологии",
      tags: ["Стандарты", "Беспроводные технологии"],
      readTime: "8 мин чтения"
    },
    {
      id: 6,
      title: "VR симуляция помогает хирургам готовиться к сложным операциям",
      summary: "Ведущие медицинские центры начали использовать детальные VR симуляции для подготовки хирургов к сложным операциям, что позволяет снизить риски и улучшить результаты лечения.",
      date: "18 апреля 2023",
      image: "/placeholder.svg",
      category: "Медицина",
      tags: ["Хирургия", "Симуляции", "Обучение"],
      readTime: "10 мин чтения"
    }
  ];

  const categories = [
    "Все", "Технологии", "Медицина", "Образование", "Развлечения"
  ];
  
  const featuredArticles = newsArticles.filter(article => article.featured);
  
  const filteredArticles = newsArticles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    article.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-12">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="vr-gradient-text">Новости</span> виртуальной реальности
          </h1>
          <p className="text-xl text-muted-foreground">
            Будьте в курсе последних событий, инноваций и трендов в мире виртуальной и дополненной реальности.
          </p>
        </div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <TrendingUp className="mr-2 h-6 w-6 text-vr-primary" />
              Главные новости
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredArticles.map((article) => (
                <NewsCard key={article.id} {...article} />
              ))}
            </div>
          </section>
        )}

        {/* Search and filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="relative w-full md:w-72">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Поиск новостей..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Tabs defaultValue="all" className="w-full md:w-auto">
            <TabsList>
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category.toLowerCase()}
                  className="data-[state=active]:bg-vr-primary/10 data-[state=active]:text-vr-primary"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <NewsCard key={article.id} {...article} />
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
          <Button variant="outline" className="border-vr-primary/50 text-vr-primary hover:bg-vr-primary/10">
            Загрузить больше
          </Button>
        </div>

        {/* Newsletter */}
        <section className="mt-24 bg-muted/50 p-12 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Не пропустите важные <span className="vr-gradient-text">новости и обзоры</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Подпишитесь на нашу еженедельную рассылку и получайте самые интересные новости из мира виртуальной реальности.
              </p>
              <div className="flex gap-4">
                <Input placeholder="ваш@email.com" className="max-w-xs" />
                <Button className="bg-gradient-to-r from-vr-primary to-vr-secondary hover:opacity-90 transition-opacity">
                  Подписаться
                </Button>
              </div>
            </div>
            <div className="text-center">
              <div className="relative inline-block">
                <div className="animate-float">
                  <img 
                    src="/placeholder.svg" 
                    alt="VR Newsletter" 
                    className="mx-auto w-64 h-64 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewsPage;
