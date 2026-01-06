import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">О банке</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6">
            Почему выбирают TBC UZ
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы объединяем традиции надежности с инновационными технологиями для вашего финансового успеха
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: 'Shield',
              title: 'Надежность',
              description: 'Лицензия Центробанка РУз и полное страхование депозитов'
            },
            {
              icon: 'Zap',
              title: 'Скорость',
              description: 'Моментальные переводы и открытие счета за 5 минут онлайн'
            },
            {
              icon: 'Award',
              title: 'Премиум сервис',
              description: 'Персональный менеджер и эксклюзивные условия обслуживания'
            },
            {
              icon: 'Globe',
              title: 'Международность',
              description: 'Операции в 150+ странах мира и мультивалютные счета'
            }
          ].map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} className="text-accent" size={28} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
