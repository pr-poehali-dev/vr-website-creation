
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import NewsCard from "@/components/NewsCard";
import { Search, CalendarDays, Tag, TrendingUp, Bookmark, Clock, ChevronRight } from "lucide-react";

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
    },
    {
      id: 7,
      title: "Архитекторы все чаще используют VR для презентации проектов клиентам",
      summary: "Архитектурные бюро сообщают о значительном росте удовлетворенности клиентов благодаря использованию VR для презентации проектов, позволяющей заказчикам виртуально прогуляться по будущим зданиям.",
      date: "12 апреля 2023",
      image: "/placeholder.svg",
      category: "Архитектура",
      tags: ["Проектирование", "Визуализация"],
      readTime: "5 мин чтения"
    },
    {
      id: 8,
      title: "Рынок VR игр достиг отметки в 10 миллиардов долларов",
      summary: "Согласно новому отчету аналитиков, глобальный рынок VR игр преодолел отметку в 10 миллиардов долларов, показав рост на 35% по сравнению с прошлым годом.",
      date: "8 апреля 2023",
      image: "/placeholder.svg",
      category: "Бизнес",
      tags: ["Игры", "Рынок", "Статистика"],
      readTime: "6 мин чтения",
      featured: true
    },
    {
      id: 9,
      title: "Новая технология тактильной обратной связи имитирует различные текстуры",
      summary: "Стартап VRTouch представил революционную технологию, позволяющую пользователям ощущать различные текстуры в виртуальной реальности, от шероховатости камня до гладкости шелка.",
      date: "3 апреля 2023",
      image: "/placeholder.svg",
      category: "Технологии",
      tags: ["Haptic", "Инновации", "Тактильная обратная связь"],
      readTime: "7 мин чтения"
    }
  ];

  const categories = [
    "Все", "Технологии", "Медицина", "Образование", "Развлечения", "Бизнес", "Архитектура"
  ];
  
  const featuredArticles = newsArticles.filter(article => article.featured);
  
  const filteredArticles = newsArticles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    article.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const allTags = Array.from(new Set(newsArticles.flatMap(article => article.tags || [])));

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
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="overflow-hidden border-border/50 hover:border-vr-primary/50 transition-colors h-full">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={featuredArticles[0]?.image} 
                      alt={featuredArticles[0]?.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-vr-primary/90 text-white text-sm px-3 py-1 rounded-full">
                      {featuredArticles[0]?.category}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{featuredArticles[0]?.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="h-4 w-4" />
                      <span>{featuredArticles[0]?.date}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                      <span>{featuredArticles[0]?.readTime}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {featuredArticles[0]?.summary}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {featuredArticles[0]?.tags?.map((tag, index) => (
                        <Badge key={index} variant="outline" className="border-vr-primary/30 text-vr-primary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-gradient-to-r from-vr-primary to-vr-secondary hover:opacity-90 transition-opacity">
                      Читать полностью
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="space-y-6">
                {featuredArticles.slice(1, 3).map((article) => (
                  <NewsCard key={article.id} {...article} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* News Content with Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="space-y-8 sticky top-20">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5" />
                    Поиск
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Поиск новостей..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Tag className="h-5 w-5" />
                    Популярные теги
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {allTags.slice(0, 10).map((tag, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="border-vr-primary/30 text-vr-primary hover:bg-vr-primary/10 hover:border-vr-primary cursor-pointer"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bookmark className="h-5 w-5" />
                    Подписка на новости
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>
                    Получайте самые свежие новости о виртуальной реальности на свою почту
                  </CardDescription>
                  <Input placeholder="your@email.com" />
                  <Button className="w-full bg-gradient-to-r from-vr-primary to-vr-secondary hover:opacity-90 transition-opacity">
                    Подписаться
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Архив
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {["Май 2023", "Апрель 2023", "Март 2023", "Февраль 2023", "Январь 2023"].map((month) => (
                      <div key={month} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground hover:text-vr-primary cursor-pointer">{month}</span>
                        <Badge variant="outline" className="text-xs">{Math.floor(Math.random() * 20) + 5}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* News List */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <Tabs defaultValue="all" className="mb-8">
              <TabsList className="mb-6">
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
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredArticles.map((article) => (
                    <NewsCard key={article.id} {...article} />
                  ))}
                </div>
              </TabsContent>
              
              {categories.slice(1).map((category) => (
                <TabsContent key={category} value={category.toLowerCase()} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredArticles
                      .filter(article => article.category === category)
                      .map((article) => (
                        <NewsCard key={article.id} {...article} />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
            
            <div className="mt-12 flex justify-center">
              <Button variant="outline" className="gap-2 border-vr-primary/50 text-vr-primary hover:bg-vr-primary/10">
                Загрузить больше <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <section className="mt-24 bg-muted/50 p-12 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Не пропустите важные <span className="vr-gradient-text">новости и обзоры</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Подпишитесь на нашу еженедельную рассылку и получайте самые интересные новости, аналитику и обзоры из мира виртуальной реальности прямо на вашу почту.
              </p>
              <div className="flex gap-4">
                <Input placeholder="your@email.com" className="max-w-xs" />
                <Button className="bg-gradient-to-r from-vr-primary to-vr-secondary hover:opacity-90 transition-opacity">
                  Подписаться
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Мы отправляем только самый важный контент. Вы можете отписаться в любое время.
              </p>
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
                <div className="absolute inset-0 bg-gradient-to-r from-vr-primary/20 to-vr-accent/20 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewsPage;
