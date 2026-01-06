import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function TariffsSection() {
  return (
    <section id="tariffs" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">Тарифы</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6">
            Выберите свой план
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Индивидуальные решения для физических и юридических лиц
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: 'Стандарт',
              price: '0',
              period: 'навсегда',
              description: 'Для ежедневных операций',
              features: [
                'Бесплатное обслуживание карты',
                'Переводы внутри банка',
                'Мобильное приложение',
                'Кэшбэк 1%',
                'Снятие до 5 млн сум/месяц'
              ],
              popular: false
            },
            {
              name: 'Премиум',
              price: '99 000',
              period: 'в месяц',
              description: 'Для активных клиентов',
              features: [
                'Все возможности Стандарт',
                'Персональный менеджер',
                'Кэшбэк до 5%',
                'Приоритетная поддержка 24/7',
                'Безлимитное снятие наличных',
                'Доступ в VIP-залы аэропортов'
              ],
              popular: true
            },
            {
              name: 'Бизнес',
              price: 'От 199 000',
              period: 'в месяц',
              description: 'Для вашего бизнеса',
              features: [
                'Расчетный счет',
                'Корпоративные карты',
                'Эквайринг от 1%',
                'Бухгалтерское сопровождение',
                'Кредитные линии',
                'Интеграция с 1C'
              ],
              popular: false
            }
          ].map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-2 ${plan.popular ? 'border-accent shadow-2xl scale-105' : 'border-border'} transition-all duration-300 hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-primary text-sm font-bold px-4 py-1 rounded-full">
                    Популярный
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                <Button 
                  className={`w-full mt-6 ${plan.popular ? 'bg-accent text-primary hover:bg-accent/90' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
