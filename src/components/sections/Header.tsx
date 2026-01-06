import { Button } from '@/components/ui/button';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  return (
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
  );
}
