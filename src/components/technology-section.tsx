import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Органайзер для стола",
    price: "от 490 ₽",
    category: "Дом и офис",
    image: "https://cdn.poehali.dev/projects/925622ba-2131-4c58-bebd-33758c9ad7a0/files/03816f2b-0747-49df-b4b2-6f41892004dc.jpg",
    description: "Модульный органайзер для канцелярии и мелочей. Несколько цветов на выбор.",
  },
  {
    name: "Фигурка на заказ",
    price: "от 800 ₽",
    category: "Коллекционное",
    image: "https://cdn.poehali.dev/projects/925622ba-2131-4c58-bebd-33758c9ad7a0/files/03816f2b-0747-49df-b4b2-6f41892004dc.jpg",
    description: "Уникальная фигурка по вашей идее, персонажу или эскизу. Детальная проработка.",
  },
  {
    name: "Подставка для телефона",
    price: "от 290 ₽",
    category: "Гаджеты",
    image: "https://cdn.poehali.dev/projects/925622ba-2131-4c58-bebd-33758c9ad7a0/files/03816f2b-0747-49df-b4b2-6f41892004dc.jpg",
    description: "Эргономичная подставка для смартфона. Разные углы наклона и цвета.",
  },
  {
    name: "Прототип детали",
    price: "от 1 200 ₽",
    category: "Инженерное",
    image: "https://cdn.poehali.dev/projects/925622ba-2131-4c58-bebd-33758c9ad7a0/files/03816f2b-0747-49df-b4b2-6f41892004dc.jpg",
    description: "Точные прототипы и функциональные детали по вашим чертежам. Допуски от 0.1 мм.",
  },
  {
    name: "Декор для интерьера",
    price: "от 650 ₽",
    category: "Декор",
    image: "https://cdn.poehali.dev/projects/925622ba-2131-4c58-bebd-33758c9ad7a0/files/03816f2b-0747-49df-b4b2-6f41892004dc.jpg",
    description: "Вазы, рамки, светильники, настенные панели. Современный дизайн для вашего дома.",
  },
  {
    name: "Сувениры и подарки",
    price: "от 350 ₽",
    category: "Подарки",
    image: "https://cdn.poehali.dev/projects/925622ba-2131-4c58-bebd-33758c9ad7a0/files/03816f2b-0747-49df-b4b2-6f41892004dc.jpg",
    description: "Брелки, магниты, настольные таблички с именами и логотипами. Идеально для подарка.",
  },
]

export function TechnologySection() {
  return (
    <section id="technology" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-orbitron">Каталог товаров</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-space-mono">
            Готовые изделия и заказы по вашим проектам — любая сложность и тираж
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-900/60 border border-red-500/20 rounded-xl overflow-hidden hover:border-red-500/50 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-3 left-3 bg-red-500 text-white border-0">
                  {product.category}
                </Badge>
              </div>
              <div className="p-5">
                <h3 className="text-white font-orbitron font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-400 font-space-mono text-sm mb-4 leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-red-400 font-bold text-xl font-orbitron">{product.price}</span>
                  <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white border-0">
                    Заказать
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 font-space-mono mb-4">Не нашли нужное? Мы сделаем под ваш запрос!</p>
          <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent">
            Оставить индивидуальный заказ
          </Button>
        </div>
      </div>
    </section>
  )
}
