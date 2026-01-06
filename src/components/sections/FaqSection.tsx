import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FaqSection() {
  return (
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
  );
}
