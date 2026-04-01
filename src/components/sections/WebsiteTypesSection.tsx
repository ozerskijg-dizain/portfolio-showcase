import { Layout, Building2, ShoppingBag, User, Wrench } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

const TYPES = [
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Лендинги для бизнеса",
    description:
      "Одностраничный сайт, который быстро загружается и конвертирует посетителей в клиентов. Идеален для рекламных кампаний.",
    iconBg: "bg-amber-50 text-amber-600",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Корпоративные сайты",
    description:
      "Многостраничный сайт компании с описанием услуг, командой, портфолио и контактами. Создаёт доверие.",
    iconBg: "bg-slate-100 text-slate-600",
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Интернет-магазины",
    description:
      "Полноценный магазин с каталогом, корзиной, оплатой и личным кабинетом. Продаёт 24/7.",
    iconBg: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: <User className="w-6 h-6" />,
    title: "Сайты-портфолио",
    description:
      "Личный сайт фрилансера, фотографа, дизайнера или специалиста. Показывает работы и привлекает клиентов.",
    iconBg: "bg-indigo-50 text-indigo-500",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Сайты для услуг",
    description:
      "Сайт для мастера, салона, клиники, студии или агентства. Онлайн-запись, прайс, отзывы — всё для привлечения.",
    iconBg: "bg-rose-50 text-rose-500",
  },
];

export default function WebsiteTypesSection() {
  const { openModal } = useContactModal();

  return (
    <section id="website-types" className="py-14 px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-primary text-sm tracking-widest uppercase font-mono font-semibold">09.</span>
          <h2 className="text-3xl font-bold">Какие сайты я создаю</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        <p className="text-muted-foreground mb-10 max-w-2xl text-sm leading-relaxed">
          Разрабатываю сайты под любые задачи бизнеса — от простого лендинга до полноценного интернет-магазина.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {TYPES.map((type) => (
            <div
              key={type.title}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-3 hover:border-primary hover:-translate-y-0.5 transition-all card-shadow card-shadow-hover"
            >
              <div className={`${type.iconBg} p-2.5 rounded-xl w-fit`}>{type.icon}</div>
              <div>
                <h3 className="font-semibold text-base mb-1.5">{type.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{type.description}</p>
              </div>
              <button
                onClick={openModal}
                className="mt-auto text-sm text-primary font-semibold hover:opacity-80 transition-opacity text-left"
              >
                Обсудить проект →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
