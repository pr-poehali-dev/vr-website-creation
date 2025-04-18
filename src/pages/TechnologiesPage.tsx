
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Headset, Glasses, Gamepad, Cpu, Server, Smartphone, Brain, Globe } from "lucide-react";

const TechnologiesPage = () => {
  const technologies = [
    {
      id: "vr",
      name: "Виртуальная реальность",
      icon: Headset,
      description: "Погружение в полностью виртуальный мир с помощью VR шлемов и контроллеров.",
      content: [
        {
          title: "VR Шлемы",
          description: "Современные VR шлемы оснащены высококачественными дисплеями с разрешением до 8K на глаз, широким полем зрения до 210 градусов и высокой частотой обновления до 144 Гц для максимально плавного отображения.",
          image: "/placeholder.svg"
        },
        {
          title: "Контроллеры движения",
          description: "Точные и отзывчивые контроллеры с haptic-обратной связью позволяют взаимодействовать с виртуальными объектами так же естественно, как в реальном мире.",
          image: "/placeholder.svg"
        },
        {
          title: "Трекинг движений",
          description: "Системы внутреннего и внешнего трекинга отслеживают положение головы, рук и тела с миллиметровой точностью для реалистичного отображения движений в виртуальном мире.",
          image: "/placeholder.svg"
        }
      ]
    },
    {
      id: "ar",
      name: "Дополненная реальность",
      icon: Glasses,
      description: "Наложение виртуальных объектов на реальный мир через AR очки или смартфоны.",
      content: [
        {
          title: "AR Очки",
          description: "Прозрачные дисплеи проецируют цифровую информацию прямо в поле зрения пользователя, сохраняя при этом видимость реального мира.",
          image: "/placeholder.svg"
        },
        {
          title: "Мобильные AR приложения",
          description: "Благодаря современным смартфонам, оснащенным набором датчиков и камер, AR стал доступен миллионам пользователей через приложения для повседневного использования.",
          image: "/placeholder.svg"
        },
        {
          title: "Пространственное картирование",
          description: "Технологии SLAM (одновременная локализация и картирование) позволяют устройствам AR точно определять свое положение в пространстве и привязывать виртуальные объекты к реальным поверхностям.",
          image: "/placeholder.svg"
        }
      ]
    },
    {
      id: "hardware",
      name: "Аппаратное обеспечение",
      icon: Cpu,
      description: "Специализированные компьютеры и компоненты для запуска VR/AR приложений.",
      content: [
        {
          title: "VR-оптимизированные GPU",
          description: "Графические процессоры, специально разработанные для обработки VR-контента, способны обеспечивать стабильную частоту кадров даже при рендеринге двух высокодетализированных изображений одновременно.",
          image: "/placeholder.svg"
        },
        {
          title: "Системы охлаждения",
          description: "Продвинутые системы охлаждения для предотвращения перегрева при интенсивных вычислениях, необходимых для VR-рендеринга.",
          image: "/placeholder.svg"
        },
        {
          title: "Беспроводные решения",
          description: "Модули Wi-Fi 6E и специализированные передатчики обеспечивают беспроводную передачу VR-контента с минимальной задержкой и без потери качества.",
          image: "/placeholder.svg"
        }
      ]
    }
  ];

  return (
    <div className="py-12">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="vr-gradient-text">Технологии</span> виртуальной реальности
          </h1>
          <p className="text-xl text-muted-foreground">
            Исследуйте передовые технологии, которые делают возможным погружение в виртуальные миры.
          </p>
        </div>

        <Tabs defaultValue="vr" className="w-full">
          <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-8">
            {technologies.map((tech) => (
              <TabsTrigger 
                key={tech.id} 
                value={tech.id}
                className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-vr-primary/10 data-[state=active]:text-vr-primary"
              >
                <tech.icon className="h-6 w-6" />
                <span className="text-center text-sm">{tech.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {technologies.map((tech) => (
            <TabsContent key={tech.id} value={tech.id} className="mt-6">
              <div className="grid gap-6">
                <div className="max-w-3xl">
                  <h2 className="text-3xl font-bold mb-4 vr-gradient-text">{tech.name}</h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    {tech.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {tech.content.map((item, index) => (
                    <Card key={index} className="border-border/50 vr-card-hover">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Button className="bg-gradient-to-r from-vr-primary to-vr-secondary hover:opacity-90 transition-opacity">
                    Подробнее о {tech.name.toLowerCase()}
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        {/* Глобальная карта применения VR */}
        <section className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Виртуальная реальность <span className="vr-gradient-text">в мире</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              VR технологии активно внедряются во всех уголках земного шара, меняя способы работы, обучения и развлечений.
            </p>
          </div>
          
          <div className="relative aspect-[16/9] bg-muted rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe className="w-full h-full max-w-4xl text-vr-primary opacity-10" />
            </div>
            
            {/* Маркеры на карте */}
            <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-vr-primary rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-vr-accent rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-vr-secondary rounded-full animate-pulse"></div>
            
            <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm p-4 rounded-lg max-w-xs">
              <h3 className="font-bold mb-2">Глобальный рост</h3>
              <p className="text-sm">К 2030 году ожидается, что рынок VR достигнет $150 млрд, с наибольшим ростом в Азиатско-Тихоокеанском регионе.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TechnologiesPage;
