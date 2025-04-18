
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ProductCard from "@/components/ProductCard";
import { Search, Filter, Sliders, ThumbsUp, ChevronRight } from "lucide-react";

const ProductsPage = () => {
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [searchQuery, setSearchQuery] = useState("");
  
  const products = [
    {
      id: 1,
      title: "VR Шлем Pro X",
      description: "Новейший шлем виртуальной реальности с разрешением 8K, отслеживанием движений и встроенными наушниками.",
      price: "79 999 ₽",
      image: "/placeholder.svg",
      badges: ["Беспроводной", "8K", "120 Гц"],
      rating: 5,
      isNew: true,
      category: "headsets"
    },
    {
      id: 2,
      title: "VR Шлем Lite",
      description: "Доступный шлем виртуальной реальности для начинающих пользователей с разрешением 4K и встроенными динамиками.",
      price: "29 999 ₽",
      image: "/placeholder.svg",
      badges: ["Проводной", "4K", "90 Гц"],
      rating: 4,
      category: "headsets"
    },
    {
      id: 3,
      title: "Контроллеры Motion",
      description: "Точное отслеживание движений рук для полного погружения в виртуальную реальность.",
      price: "14 999 ₽",
      image: "/placeholder.svg",
      badges: ["Haptic", "Быстрый отклик"],
      rating: 4,
      category: "controllers"
    },
    {
      id: 4,
      title: "Беспроводные контроллеры VR Grip",
      description: "Эргономичные контроллеры с продвинутой системой отслеживания и длительным временем работы.",
      price: "19 999 ₽",
      image: "/placeholder.svg",
      badges: ["Беспроводные", "20 ч работы"],
      rating: 5,
      category: "controllers"
    },
    {
      id: 5,
      title: "VR Станция Base 2",
      description: "Мощная станция для обработки VR контента, совместимая со всеми популярными шлемами.",
      price: "159 999 ₽",
      image: "/placeholder.svg",
      badges: ["RTX 4090", "32 ГБ ОЗУ"],
      rating: 5,
      category: "accessories"
    },
    {
      id: 6,
      title: "Трекеры движения Body+",
      description: "Набор из 6 трекеров для полного отслеживания положения тела в виртуальном пространстве.",
      price: "39 999 ₽",
      image: "/placeholder.svg",
      badges: ["Полный комплект", "Точность 0.1 мм"],
      rating: 4,
      isNew: true,
      category: "accessories"
    },
    {
      id: 7,
      title: "VR Платформа 360",
      description: "Круговая платформа для свободного перемещения в виртуальном пространстве без риска столкновения с препятствиями.",
      price: "89 999 ₽",
      image: "/placeholder.svg",
      badges: ["360 градусов", "Датчики движения"],
      rating: 4,
      category: "accessories"
    },
    {
      id: 8,
      title: "Haptic Костюм Full Body",
      description: "Полноразмерный костюм с тактильной обратной связью для полного погружения в виртуальную реальность.",
      price: "199 999 ₽",
      image: "/placeholder.svg",
      badges: ["Полный комплект", "Тактильная отдача"],
      rating: 5,
      isNew: true,
      category: "accessories"
    },
    {
      id: 9,
      title: "AR Очки Vision",
      description: "Легкие и стильные очки дополненной реальности с высоким разрешением и длительным временем работы.",
      price: "69 999 ₽",
      image: "/placeholder.svg",
      badges: ["8 ч работы", "120° обзор"],
      rating: 4,
      category: "ar"
    }
  ];

  const categories = [
    { id: "all", name: "Все продукты" },
    { id: "headsets", name: "VR шлемы" },
    { id: "controllers", name: "Контроллеры" },
    { id: "accessories", name: "Аксессуары" },
    { id: "ar", name: "AR устройства" }
  ];

  const featuredProducts = products.filter(p => p.isNew).slice(0, 3);
  
  const filteredProducts = products.filter(product => {
    const price = parseInt(product.price.replace(/[^\d]/g, ""));
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
    
    return matchesSearch && matchesPrice;
  });

  return (
    <div className="py-12">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Наши <span className="vr-gradient-text">продукты</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Исследуйте передовое VR оборудование для полного погружения в виртуальную реальность.
          </p>
        </div>

        {/* Featured Products */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <ThumbsUp className="mr-2 h-6 w-6 text-vr-primary" />
            Рекомендуемые продукты
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* Filter and Products */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar filters */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Фильтры
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Поиск</Label>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Поиск продуктов..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Категория</Label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label>Цена</Label>
                    <span className="text-sm text-muted-foreground">
                      {priceRange[0]} ₽ - {priceRange[1]} ₽
                    </span>
                  </div>
                  <Slider
                    defaultValue={[0, 200000]}
                    max={200000}
                    step={5000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="py-4"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Особенности</Label>
                  <div className="space-y-2">
                    {["Беспроводной", "Высокое разрешение", "Haptic отдача", "Портативный"].map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox id={feature} />
                        <label
                          htmlFor={feature}
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {feature}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Рейтинг</Label>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox id={`rating-${rating}`} />
                        <label
                          htmlFor={`rating-${rating}`}
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex"
                        >
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i} className="text-lg">
                              {i < rating ? "★" : "☆"}
                            </span>
                          ))}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-vr-primary to-vr-secondary hover:opacity-90 transition-opacity">
                  Применить фильтры
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div className="flex items-center gap-2">
                <Sliders className="h-5 w-5 text-vr-primary" />
                <h2 className="text-xl font-semibold">
                  {filteredProducts.length} продуктов
                </h2>
              </div>
              
              <div className="flex items-center gap-4">
                <Select defaultValue="featured">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Сортировка" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Популярные</SelectItem>
                    <SelectItem value="price-low">Цена: по возрастанию</SelectItem>
                    <SelectItem value="price-high">Цена: по убыванию</SelectItem>
                    <SelectItem value="newest">Новые поступления</SelectItem>
                  </SelectContent>
                </Select>
                
                <Tabs defaultValue="grid" className="w-[100px]">
                  <TabsList>
                    <TabsTrigger value="grid" className="px-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7"></rect>
                        <rect x="14" y="3" width="7" height="7"></rect>
                        <rect x="14" y="14" width="7" height="7"></rect>
                        <rect x="3" y="14" width="7" height="7"></rect>
                      </svg>
                    </TabsTrigger>
                    <TabsTrigger value="list" className="px-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="21" y1="6" x2="3" y2="6"></line>
                        <line x1="21" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="18" x2="3" y2="18"></line>
                      </svg>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>

            <TabsContent value="grid" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="list" className="mt-0 space-y-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden border-border/50 hover:border-vr-primary/50 transition-colors">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative aspect-square md:aspect-auto">
                      <img src={product.image} alt={product.title} className="object-cover w-full h-full" />
                      {product.isNew && (
                        <div className="absolute top-3 right-3 bg-vr-accent text-white text-xs px-3 py-1 rounded-full">
                          Новинка
                        </div>
                      )}
                    </div>
                    <div className="md:w-2/3 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-semibold">{product.title}</h3>
                          <div className="text-lg font-bold vr-gradient-text">{product.price}</div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.badges?.map((badge, i) => (
                            <div key={i} className="text-xs bg-vr-primary/10 text-vr-primary px-2 py-1 rounded-full">
                              {badge}
                            </div>
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-4">{product.description}</p>
                        {product.rating && (
                          <div className="flex items-center gap-1 mb-4">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <span key={i} className="text-lg">
                                {i < product.rating ? "★" : "☆"}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="flex gap-3 mt-4">
                        <Button className="bg-gradient-to-r from-vr-primary to-vr-secondary hover:opacity-90 transition-opacity">
                          В корзину
                        </Button>
                        <Button variant="outline" className="border-vr-primary/50 text-vr-primary hover:bg-vr-primary/10">
                          Детали
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
            
            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="gap-2 border-vr-primary/50 text-vr-primary hover:bg-vr-primary/10">
                Загрузить больше <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <section className="mt-24 bg-muted/50 p-12 rounded-lg">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Что говорят <span className="vr-gradient-text">наши клиенты</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Шлем VR Pro X превзошел все мои ожидания. Качество изображения и комфорт на высшем уровне!",
                author: "Михаил К.",
                position: "Профессиональный геймер"
              },
              {
                quote: "Контроллеры Motion сделали мой опыт в VR намного более реалистичным. Отклик мгновенный!",
                author: "Елена С.",
                position: "VR художник"
              },
              {
                quote: "Haptic костюм полностью изменил мое представление о виртуальной реальности. Теперь я по-настоящему чувствую игру!",
                author: "Алексей П.",
                position: "Энтузиаст VR"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <blockquote className="text-lg italic mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <footer>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-vr-primary">{testimonial.position}</div>
                  </footer>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductsPage;
