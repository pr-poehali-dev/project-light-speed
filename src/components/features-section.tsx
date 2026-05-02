import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Индивидуальный дизайн",
    description: "Любая форма, любой размер — воплощаем ваши идеи в реальность. Работаем по чертежам или разрабатываем модели с нуля.",
    icon: "🎨",
    badge: "На заказ",
  },
  {
    title: "Быстрое производство",
    description: "Печать занимает от нескольких часов. Готовые изделия отправляем в течение 1-2 рабочих дней после оплаты заказа.",
    icon: "⚡",
    badge: "Скорость",
  },
  {
    title: "Прочные материалы",
    description: "PLA, ABS, PETG, нейлон и гибкие пластики — подберём материал под ваши требования прочности и условий эксплуатации.",
    icon: "🔩",
    badge: "Качество",
  },
  {
    title: "Точность до 0.1 мм",
    description: "Профессиональные принтеры обеспечивают высочайшую точность печати для деталей, прототипов и декоративных изделий.",
    icon: "🎯",
    badge: "Точность",
  },
  {
    title: "Широкий ассортимент",
    description: "Декор, игрушки, запчасти, сувениры, органайзеры, прототипы — готовые товары и изделия под ваш заказ.",
    icon: "🛒",
    badge: "Ассортимент",
  },
  {
    title: "Постобработка",
    description: "Шлифовка, покраска, грунтовка — придаём изделиям идеальный вид. Финишная обработка по вашим пожеланиям.",
    icon: "✨",
    badge: "Отделка",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему выбирают нас</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Качественная 3D-печать для бизнеса и частных заказов — быстро, точно, надёжно
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">{feature.icon}</span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
