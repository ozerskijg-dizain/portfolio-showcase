import { MessageCircle, ClipboardList, Rocket } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Свяжитесь со мной",
    description: "Напишите через форму — расскажите о своём проекте. Отвечаю быстро.",
    iconBg: "bg-primary/10 text-primary",
  },
  {
    number: "02",
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Обсудим проект",
    description: "Уточним задачи, сроки и бюджет. Подготовлю предложение под ваши цели.",
    iconBg: "bg-amber-50 text-amber-600",
  },
  {
    number: "03",
    icon: <Rocket className="w-6 h-6" />,
    title: "Запуск сайта",
    description: "Разрабатываю, тестирую и запускаю. Вы получаете готовый работающий сайт.",
    iconBg: "bg-emerald-50 text-emerald-600",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how" className="py-20 px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <span className="text-primary text-sm tracking-widest uppercase font-mono font-semibold">05.</span>
          <h2 className="text-3xl font-bold">Как я работаю</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid sm:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative flex flex-col">
              {i < STEPS.length - 1 && (
                <div className="hidden sm:block absolute top-8 left-full w-8 h-px bg-primary/20 -translate-x-4 z-10">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary/30" />
                </div>
              )}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl font-black text-primary/10 font-mono leading-none select-none">{step.number}</span>
                <div className={`${step.iconBg} p-2.5 rounded-xl`}>{step.icon}</div>
              </div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
