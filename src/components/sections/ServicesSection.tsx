import { Globe, ShoppingCart, Layers, ArrowRight } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

interface ServicesSectionProps {
  onScrollTo: (id: string) => void;
}

const SERVICES = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Лендинг",
    price: "от 15 000 ₽",
    description: "Одностраничный сайт для продвижения товара или услуги. Быстро, красиво, конверсионно.",
    accent: "from-amber-400/20 to-orange-300/10",
    iconBg: "bg-amber-50 text-amber-600",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Сайт для бизнеса",
    price: "от 30 000 ₽",
    description: "Многостраничный сайт: о компании, услуги, портфолио, контакты. Под ключ.",
    accent: "from-primary/15 to-primary/5",
    iconBg: "bg-primary/10 text-primary",
    featured: true,
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Интернет-магазин",
    price: "от 50 000 ₽",
    description: "Полноценный магазин с каталогом, корзиной, оплатой и личным кабинетом.",
    accent: "from-emerald-400/20 to-teal-300/10",
    iconBg: "bg-emerald-50 text-emerald-600",
  },
];

export default function ServicesSection({ onScrollTo: _onScrollTo }: ServicesSectionProps) {
  const { openModal } = useContactModal();

  return (
    <section id="services" className="py-20 px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <span className="text-primary text-sm tracking-widest uppercase font-mono font-semibold">03.</span>
          <h2 className="text-3xl font-bold">Услуги</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className={`relative bg-card border rounded-2xl p-6 hover:-translate-y-1 transition-all duration-200 card-shadow card-shadow-hover flex flex-col overflow-hidden ${
                s.featured ? "border-primary/40 ring-1 ring-primary/20" : "border-border"
              }`}
            >
              {s.featured && (
                <span className="absolute top-4 right-4 text-xs bg-primary text-primary-foreground px-2.5 py-0.5 rounded-full font-semibold">
                  Популярное
                </span>
              )}
              <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} pointer-events-none rounded-2xl`} />
              <div className="relative z-10 flex flex-col flex-1">
                <div className={`${s.iconBg} p-3 rounded-xl w-fit mb-4`}>{s.icon}</div>
                <h3 className="font-bold text-lg mb-1">{s.title}</h3>
                <p className="text-primary font-bold text-xl mb-3">{s.price}</p>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5"
          >
            Обсудить проект
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
