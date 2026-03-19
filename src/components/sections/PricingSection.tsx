import { Check } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

interface PricingSectionProps {
  onScrollTo: (id: string) => void;
}

const PLANS = [
  {
    title: "Лендинг",
    price: "от 15 000 ₽",
    features: ["Одна страница", "Адаптивный дизайн", "SEO-настройка", "Форма обратной связи"],
    highlighted: false,
  },
  {
    title: "Сайт для бизнеса",
    price: "от 30 000 ₽",
    features: ["До 7 страниц", "Личный кабинет", "Интеграции", "Поддержка 1 месяц"],
    highlighted: true,
    badge: "Популярный выбор",
  },
  {
    title: "Интернет-магазин",
    price: "от 50 000 ₽",
    features: ["Каталог товаров", "Корзина и оплата", "CRM-интеграция", "Поддержка 3 месяца"],
    highlighted: false,
  },
];

export default function PricingSection({ onScrollTo: _onScrollTo }: PricingSectionProps) {
  const { openModal } = useContactModal();

  return (
    <section id="pricing" className="py-20 px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <span className="text-primary text-sm tracking-widest uppercase font-mono font-semibold">07.</span>
          <h2 className="text-3xl font-bold">Стоимость</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid sm:grid-cols-3 gap-6 mb-6">
          {PLANS.map((plan) => (
            <div
              key={plan.title}
              className={`relative rounded-2xl p-6 flex flex-col transition-all duration-200 ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/30 scale-[1.03] ring-4 ring-primary/20"
                  : "bg-card border border-border card-shadow card-shadow-hover hover:-translate-y-1"
              }`}
            >
              {plan.highlighted && plan.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs bg-foreground text-background px-3 py-1 rounded-full font-semibold whitespace-nowrap">
                  {plan.badge}
                </span>
              )}
              <h3 className={`font-bold text-lg mb-1 ${plan.highlighted ? "text-primary-foreground" : ""}`}>
                {plan.title}
              </h3>
              <p className={`text-3xl font-black mb-5 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`}>
                {plan.price}
              </p>
              <ul className="space-y-2.5 flex-1 mb-6">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`text-sm flex items-center gap-2.5 ${
                      plan.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"
                    }`}
                  >
                    <Check className={`w-4 h-4 shrink-0 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={openModal}
                className={`w-full py-3 rounded-xl text-sm font-bold transition-all ${
                  plan.highlighted
                    ? "bg-primary-foreground text-primary hover:opacity-90 shadow-sm"
                    : "border-2 border-border hover:border-primary hover:text-primary text-muted-foreground hover:bg-primary/5"
                }`}
              >
                Обсудить проект
              </button>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground text-sm">
          Точную цену называю после обсуждения задачи — пишите, согласую бюджет под вас.
        </p>
      </div>
    </section>
  );
}
