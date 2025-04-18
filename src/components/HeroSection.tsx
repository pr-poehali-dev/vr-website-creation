
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden py-20 md:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,0,224,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,201,255,0.15),transparent_50%)]"></div>
      
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Будущее уже здесь с{" "}
              <span className="vr-gradient-text">виртуальной реальностью</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Исследуйте новые миры, учитесь и работайте в иммерсивной среде. 
              Виртуальная реальность меняет наше восприятие мира.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-vr-primary to-vr-secondary hover:opacity-90 transition-opacity text-white px-8 py-6 text-lg">
                Начать погружение
              </Button>
              <Button variant="outline" className="border-vr-primary text-vr-primary hover:bg-vr-primary/10 px-8 py-6 text-lg">
                Узнать больше
              </Button>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-vr-primary to-vr-secondary border-2 border-background"></div>
                ))}
              </div>
              <p>Более 10,000+ пользователей уже с нами</p>
            </div>
          </div>
          
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-gradient-to-r from-vr-primary/20 to-vr-accent/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 animate-float">
              <img 
                src="/placeholder.svg" 
                alt="VR шлем" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
