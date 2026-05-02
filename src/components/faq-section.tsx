import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Какие материалы вы используете для печати?",
      answer:
        "Мы работаем с широким спектром материалов: PLA (экологичный, яркие цвета), ABS (прочный, термостойкий), PETG (гибкий и прочный), нейлон (высокая износостойкость), а также гибкие TPU-пластики. Поможем выбрать подходящий под вашу задачу.",
    },
    {
      question: "Сколько времени занимает изготовление заказа?",
      answer:
        "Срок зависит от сложности и размера изделия. Небольшие товары готовы за 1-2 дня, крупные или сложные модели — 3-5 дней. После готовности отправляем в течение 1-2 рабочих дней.",
    },
    {
      question: "Можно ли заказать печать по своему файлу?",
      answer:
        "Да! Принимаем файлы в форматах STL, OBJ, 3MF и STEP. Если у вас нет готовой 3D-модели — наши специалисты разработают её по вашему эскизу, фото или описанию.",
    },
    {
      question: "Какое минимальное количество для заказа?",
      answer:
        "Минимальный заказ — 1 штука. Мы работаем как с единичными изделиями, так и с крупными партиями. При заказе от 10 штук действуют скидки.",
    },
    {
      question: "Как вы упаковываете и доставляете товары?",
      answer:
        "Каждое изделие бережно упаковываем в защитные материалы. Доставляем по всей России через СДЭК, Boxberry и Почту России. Также возможен самовывоз. После отправки предоставляем трек-номер.",
    },
    {
      question: "Что если меня не устроит качество?",
      answer:
        "Гарантируем качество каждого изделия. Если товар пришёл повреждённым или не соответствует описанию — бесплатно перепечатаем или вернём деньги. Свяжитесь с нами в течение 7 дней после получения.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о 3D-печати, заказе и доставке.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
