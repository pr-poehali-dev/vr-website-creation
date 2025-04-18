
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Gamepad2, Brain, Building2, Glasses, Zap, Users } from "lucide-react";

const features = [
  {
    title: "Игры и развлечения",
    description: "Погрузитесь в захватывающие миры с невероятной графикой и реалистичным звуком.",
    icon: Gamepad2,
  },
  {
    title: "Образование",
    description: "Обучение становится интерактивным и увлекательным с помощью VR технологий.",
    icon: Brain,
  },
  {
    title: "Бизнес-решения",
    description: "Виртуальные встречи, презентации и тренинги для современного бизнеса.",
    icon: Building2,
  },
  {
    title: "Здравоохранение",
    description: "VR-реабилитация и обучение медицинских специалистов в безопасной среде.",
    icon: Glasses,
  },
  {
    title: "Архитектура и дизайн",
    description: "Визуализация проектов в масштабе 1:1 для лучшего понимания пространства.",
    icon: Zap,
  },
  {
    title: "Социальные взаимодействия",
    description: "Встречайтесь с друзьями в виртуальных пространствах, несмотря на расстояния.",
    icon: Users,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Бесконечные возможности <span className="vr-gradient-text">виртуальной реальности</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            VR открывает двери в миры, которые раньше можно было только представить, и применяется во всех сферах жизни.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-vr-primary/50 transition-colors vr-card-hover">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-vr-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-vr-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
