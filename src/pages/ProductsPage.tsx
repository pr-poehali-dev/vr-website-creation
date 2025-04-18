
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
import ProductCard from "@/components/ProductCard";
import { Search, Filter, ThumbsUp } from "lucide-react";

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
    }
  ];

  const categories = [
    { id: "all", name: "Все продукты" },
    { id: "headsets", name: "VR шлемы" },
    { id: "controllers", name: "Контроллеры" },
    { id: "accessories", name: "Аксессуары" }
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
            <div className="sticky top-20 space-y-8">
              <div className="space-y-4 bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold flex items-center">
                  <Search className="mr-2 h-5 w-5" />
                  Поиск
                </h3>
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

              <div className="space-y-4 bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold flex items-center">
                  <Filter className="mr-2 h-5 w-5" />
                  Фильтры
                </h3>
                
                <div className="space-y-4">
                  <div className="space-y-2">
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

                  <div className="space-y-2">
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

                  <div className="space-y-2">
                    <Label>Особенности</Label>
                    <div className="space-y-2">
                      {["Беспроводной", "Высокое разрешение", "Haptic отдача"].map((feature) => (
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

                  <Button className="w-full bg-gradient-to-r from-vr-primary to-vr-secondary hover:opacity-90 transition-opacity">
                    Применить фильтры
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="border-vr-primary/50 text-vr-primary hover:bg-vr-primary/10">
                Загрузить больше
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
