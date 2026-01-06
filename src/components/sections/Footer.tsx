export default function Footer() {
  return (
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
  );
}
