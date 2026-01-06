import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
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
  );
}
