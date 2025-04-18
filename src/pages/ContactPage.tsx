
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, MessageSquare, Users } from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@vrmir.ru",
      description: "Пишите нам в любое время",
    },
    {
      icon: Phone,
      title: "Телефон",
      details: "+7 (999) 123-45-67",
      description: "Пн-Пт с 9:00 до 18:00",
    },
    {
      icon: MapPin,
      title: "Адрес",
      details: "Москва, ул. Виртуальная, 42",
      description: "Приходите в гости!",
    },
  ];

  const faqItems = [
    {
      question: "Как выбрать подходящий VR шлем?",
      answer: "При выборе VR шлема обратите внимание на разрешение дисплея, поле зрения, частоту обновления, комфорт ношения и совместимость с вашими устройствами. Для начинающих пользователей мы рекомендуем автономные шлемы, не требующие подключения к компьютеру."
    },
    {
      question: "Какие минимальные требования к компьютеру для VR?",
      answer: "Для комфортного использования проводных VR шлемов рекомендуется компьютер с процессором не ниже Intel Core i5 / AMD Ryzen 5, видеокартой не ниже NVIDIA GTX 1660 / AMD RX 5600, 16 ГБ оперативной памяти и SSD накопителем."
    },
    {
      question: "Можно ли протестировать ваши продукты перед покупкой?",
      answer: "Да, в нашем шоу-руме вы можете протестировать все представленные VR устройства. Предварительная запись на демонстрацию доступна через форму на сайте или по телефону."
    }
  ];

  return (
    <div className="py-12">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="vr-gradient-text">Связаться</span> с нами
          </h1>
          <p className="text-xl text-muted-foreground">
            У вас есть вопросы о виртуальной реальности или наших продуктах? Мы всегда готовы помочь!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <Card key={index} className="border-border/50 hover:border-vr-primary/50 transition-colors vr-card-hover">
              <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                <div className="w-12 h-12 rounded-lg bg-vr-primary/10 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-vr-primary" />
                </div>
                <div className="space-y-1">
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-medium">{item.details}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <MessageSquare className="mr-2 h-6 w-6 text-vr-primary" />
                Напишите нам
              </h2>
              <p className="text-muted-foreground">
                Заполните форму ниже, и мы свяжемся с вами в ближайшее время.
              </p>
            </div>

            <Card className="border-border/50">
              <CardContent className="pt-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <Users className="mr-2 h-6 w-6 text-vr-primary" />
                Часто задаваемые вопросы
              </h2>
              <p className="text-muted-foreground">
                Ответы на самые популярные вопросы о виртуальной реальности и наших продуктах.
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <Card key={index} className="border-border/50 hover:border-vr-primary/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Наш <span className="vr-gradient-text">шоу-рум</span>
            </h2>
            <p className="text-muted-foreground">
              Приходите и испытайте новейшие технологии виртуальной реальности в нашем современном шоу-руме.
            </p>
          </div>

          <div className="relative aspect-[16/9] bg-muted rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <MapPin className="w-16 h-16 text-vr-primary" />
            </div>
            <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm p-4 rounded-lg max-w-xs">
              <h3 className="font-bold mb-2">VR Мир Шоу-рум</h3>
              <p className="text-sm">Москва, ул. Виртуальная, 42</p>
              <Button className="mt-4 w-full bg-gradient-to-r from-vr-primary to-vr-secondary hover:opacity-90 transition-opacity">
                Проложить маршрут
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
