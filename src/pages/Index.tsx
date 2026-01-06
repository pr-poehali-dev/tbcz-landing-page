import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-accent/20">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold text-white">TBC UZ</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white/90 hover:text-accent transition-colors duration-300"
              >
                О банке
              </button>
              <button 
                onClick={() => scrollToSection('tariffs')}
                className="text-white/90 hover:text-accent transition-colors duration-300"
              >
                Тарифы
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-white/90 hover:text-accent transition-colors duration-300"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className="text-white/90 hover:text-accent transition-colors duration-300"
              >
                Контакты
              </button>
              <Button className="bg-accent text-primary hover:bg-accent/90 font-semibold">
                Открыть счет
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <span className="text-accent text-sm font-semibold tracking-wider uppercase border border-accent/30 px-4 py-2 rounded-full">
                  Премиальный банкинг
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-primary leading-tight">
                Банк вашего
                <span className="block text-accent">будущего</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                TBC Bank Uzbekistan — это современные финансовые решения с высочайшим уровнем сервиса и надежности для вашего бизнеса и личных целей
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-accent text-primary hover:bg-accent/90 font-semibold text-lg px-8 py-6"
                >
                  Стать клиентом
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary/20 hover:bg-primary/5 font-semibold text-lg px-8 py-6"
                >
                  Узнать больше
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-8">
                <div>
                  <div className="text-3xl font-bold text-primary">500K+</div>
                  <div className="text-sm text-muted-foreground">Клиентов</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div>
                  <div className="text-3xl font-bold text-primary">$2B+</div>
                  <div className="text-sm text-muted-foreground">Активов</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/26036b82-9a48-4b94-96d9-dc7384594001/files/7d8bf0a3-1c8a-4cce-9a68-68c520ce5f75.jpg" 
                alt="Modern banking" 
                className="relative rounded-3xl shadow-2xl w-full object-cover h-[600px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="TrendingUp" className="text-accent" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Процентная ставка</div>
                    <div className="text-2xl font-bold text-primary">до 18%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section id="faq" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">FAQ</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6">
              Частые вопросы
            </h2>
            <p className="text-lg text-muted-foreground">
              Ответы на самые популярные вопросы наших клиентов
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: 'Как открыть счет в TBC UZ?',
                answer: 'Открыть счет можно онлайн через наше мобильное приложение за 5 минут. Просто скачайте приложение TBC UZ, пройдите идентификацию по паспорту через видеозвонок, и счет будет открыт. Карта доставляется бесплатно в течение 2-3 рабочих дней.'
              },
              {
                question: 'Какие документы нужны для открытия счета?',
                answer: 'Для физических лиц достаточно паспорта гражданина Узбекистана. Для юридических лиц потребуются: свидетельство о регистрации, устав, решение о назначении директора, паспорт директора и печать компании.'
              },
              {
                question: 'Застрахованы ли мои депозиты?',
                answer: 'Да, все депозиты застрахованы в системе гарантирования вкладов Узбекистана на сумму до 400 миллионов сум на одного вкладчика. TBC Bank является участником системы страхования депозитов.'
              },
              {
                question: 'Как работает кэшбэк?',
                answer: 'Кэшбэк начисляется автоматически на все покупки по карте. В тарифе Стандарт — 1% от суммы покупки, в Премиум — до 5% в зависимости от категории (супермаркеты, АЗС, рестораны). Кэшбэк можно использовать для оплаты покупок или перевести на счет.'
              },
              {
                question: 'Могу ли я управлять счетом из-за границы?',
                answer: 'Да, наше мобильное приложение и интернет-банк работают из любой точки мира. Вы можете совершать переводы, оплачивать счета и управлять картами без ограничений. Поддержка клиентов доступна 24/7 на русском и узбекском языках.'
              },
              {
                question: 'Какие комиссии за международные переводы?',
                answer: 'Комиссии зависят от валюты и суммы перевода. SWIFT-переводы — от 0.5% (минимум $20). Для клиентов тарифа Премиум действуют сниженные тарифы. Переводы внутри банка TBC между странами бесплатны.'
              }
            ].map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-xl px-6 bg-background/50"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-primary pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 animate-fade-in">
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">Контакты</span>
              <h2 className="text-4xl lg:text-5xl font-bold">
                Свяжитесь с нами
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Наша команда всегда готова ответить на ваши вопросы и помочь с выбором лучших финансовых решений
              </p>

              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-accent" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон поддержки</div>
                    <a href="tel:+998712007001" className="text-accent hover:text-accent/80 text-lg">
                      +998 (71) 200-70-01
                    </a>
                    <div className="text-white/60 text-sm mt-1">Круглосуточно, без выходных</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-accent" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@tbcbank.uz" className="text-accent hover:text-accent/80 text-lg">
                      info@tbcbank.uz
                    </a>
                    <div className="text-white/60 text-sm mt-1">Ответим в течение 1 часа</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-accent" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Главный офис</div>
                    <div className="text-white/90">
                      г. Ташкент, Мирабадский район<br />
                      ул. Афросиаб, 4А
                    </div>
                    <div className="text-white/60 text-sm mt-1">Пн-Пт: 09:00 - 18:00</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors">
                  <Icon name="Facebook" className="text-white" size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors">
                  <Icon name="Instagram" className="text-white" size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors">
                  <Icon name="Linkedin" className="text-white" size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors">
                  <Icon name="Twitter" className="text-white" size={20} />
                </a>
              </div>
            </div>

            <Card className="bg-white shadow-2xl animate-scale-in">
              <CardHeader>
                <CardTitle className="text-2xl">Оставьте заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <input 
                    type="text" 
                    placeholder="Введите ваше имя"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <input 
                    type="tel" 
                    placeholder="+998 (__) ___-__-__"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <textarea 
                    rows={4}
                    placeholder="Расскажите, чем мы можем помочь..."
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  />
                </div>
                <Button className="w-full bg-accent text-primary hover:bg-accent/90 font-semibold py-6">
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={18} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">T</span>
                </div>
                <span className="text-2xl font-bold">TBC UZ</span>
              </div>
              <p className="text-white/70 text-sm">
                Современный банк с грузинскими корнями и узбекским сердцем
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-accent transition-colors">Карты</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Кредиты</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Депозиты</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Переводы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">О банке</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-accent transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Пресс-центр</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Безопасность</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Документы</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 TBC Bank Uzbekistan. Все права защищены. Лицензия ЦБ РУз №123
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-accent transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}