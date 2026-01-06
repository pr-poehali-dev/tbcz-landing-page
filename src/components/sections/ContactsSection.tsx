import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ContactsSection() {
  return (
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
  );
}
