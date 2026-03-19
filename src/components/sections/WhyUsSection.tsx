import { Zap, Palette, Search, HeadphonesIcon } from "lucide-react";

const BENEFITS = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Быстрый запуск",
    description: "Запускаю проекты в сжатые сроки без потери качества.",
    iconBg: "bg-amber-50 text-amber-600",
    accent: "hover:border-amber-200",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Современный дизайн",
    description: "Чистый, понятный интерфейс, который нравится и пользователям, и поисковикам.",
    iconBg: "bg-pink-50 text-pink-500",
    accent: "hover:border-pink-200",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "SEO-оптимизация",
    description: "Структура сайта настроена под поисковые системы с первого дня.",
    iconBg: "bg-emerald-50 text-emerald-600",
    accent: "hover:border-emerald-200",
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6" />,
    title: "Поддержка после запуска",
    description: "Остаюсь на связи и помогаю развивать проект после сдачи.",
    iconBg: "bg-primary/10 text-primary",
    accent: "hover:border-primary/30",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-10">
        <span className="text-primary text-sm tracking-widest uppercase font-mono font-semibold">04.</span>
        <h2 className="text-3xl font-bold">Почему выбирают меня</h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
        {BENEFITS.map((b) => (
          <div
            key={b.title}
            className={`bg-card border border-border rounded-2xl p-6 transition-all duration-200 card-shadow card-shadow-hover hover:-translate-y-1 ${b.accent}`}
          >
            <div className={`${b.iconBg} p-3 rounded-xl w-fit mb-4`}>{b.icon}</div>
            <h3 className="font-bold mb-2">{b.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
