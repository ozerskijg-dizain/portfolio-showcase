import { ExternalLink, Coffee, Sparkles, Newspaper, Fish, CalendarCheck, Calculator, HeartPulse, Brain, Bot, Database, Settings } from "lucide-react";
import { ReactNode } from "react";

interface Project {
  title: string;
  description: string;
  demo: string;
  icon: ReactNode;
  color: string;
  bg: string;
  tag: string;
}

const PROJECTS: Project[] = [
  {
    title: "Сайт кофейни",
    description: "Современный сайт кофейни с меню и онлайн-заказом",
    demo: "/test/coffee",
    icon: <Coffee className="w-5 h-5" />,
    color: "text-amber-600",
    bg: "bg-amber-50 border-amber-100",
    tag: "Лендинг",
  },
  {
    title: "Сайт салона красоты",
    description: "Лендинг салона красоты с услугами и записью",
    demo: "/test/beauty-salon",
    icon: <Sparkles className="w-5 h-5" />,
    color: "text-pink-500",
    bg: "bg-pink-50 border-pink-100",
    tag: "Лендинг",
  },
  {
    title: "Новостной портал",
    description: "Многостраничный сайт новостей с категориями",
    demo: "/test/news",
    icon: <Newspaper className="w-5 h-5" />,
    color: "text-slate-600",
    bg: "bg-slate-50 border-slate-200",
    tag: "Портал",
  },
  {
    title: "Рыбный магазин",
    description: "Интернет-витрина магазина морепродуктов",
    demo: "/test/seafood",
    icon: <Fish className="w-5 h-5" />,
    color: "text-cyan-600",
    bg: "bg-cyan-50 border-cyan-100",
    tag: "Магазин",
  },
  {
    title: "Трекер привычек",
    description: "Приложение для отслеживания ежедневных привычек",
    demo: "/test/habits",
    icon: <CalendarCheck className="w-5 h-5" />,
    color: "text-emerald-600",
    bg: "bg-emerald-50 border-emerald-100",
    tag: "Веб-приложение",
  },
  {
    title: "Калькулятор услуг",
    description: "Интерактивный калькулятор стоимости услуг",
    demo: "/test/calculator",
    icon: <Calculator className="w-5 h-5" />,
    color: "text-violet-600",
    bg: "bg-violet-50 border-violet-100",
    tag: "Инструмент",
  },
  {
    title: "CRM для нутрициолога",
    description: "Система управления клиентами и программами питания",
    demo: "/test/nutrition-crm",
    icon: <HeartPulse className="w-5 h-5" />,
    color: "text-rose-500",
    bg: "bg-rose-50 border-rose-100",
    tag: "CRM",
  },
  {
    title: "Сайт психолога",
    description: "Персональный сайт специалиста с записью на консультацию",
    demo: "/test/psychologist",
    icon: <Brain className="w-5 h-5" />,
    color: "text-indigo-500",
    bg: "bg-indigo-50 border-indigo-100",
    tag: "Лендинг",
  },
  {
    title: "AI консультант",
    description: "Интерфейс AI-ассистента для бизнеса",
    demo: "/test/ai-consultant",
    icon: <Bot className="w-5 h-5" />,
    color: "text-primary",
    bg: "bg-primary/5 border-primary/15",
    tag: "AI",
  },
  {
    title: "AI CRM система",
    description: "CRM-панель с AI-автоматизацией процессов",
    demo: "/test/ai-crm",
    icon: <Database className="w-5 h-5" />,
    color: "text-primary",
    bg: "bg-primary/5 border-primary/15",
    tag: "AI + CRM",
  },
  {
    title: "AI админ-панель",
    description: "Административная панель управления AI-агентами",
    demo: "/test/ai-admin",
    icon: <Settings className="w-5 h-5" />,
    color: "text-primary",
    bg: "bg-primary/5 border-primary/15",
    tag: "AI",
  },
];

export default function PortfolioSection() {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-10">
        <span className="text-primary text-sm tracking-widest uppercase font-mono font-semibold">02.</span>
        <h2 className="text-3xl font-bold">Портфолио</h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary hover:-translate-y-1 transition-all duration-200 card-shadow card-shadow-hover flex flex-col"
          >
            {/* Visual header */}
            <div className={`relative h-28 flex items-center justify-center ${project.bg} border-b border-border overflow-hidden`}>
              <div className={`${project.color} opacity-10 absolute`}>
                <div className="w-32 h-32 scale-150">{project.icon}</div>
              </div>
              <div className={`${project.color} bg-white/70 backdrop-blur-sm p-3.5 rounded-2xl shadow-sm border border-white/60 relative z-10 group-hover:scale-110 transition-transform duration-200`}>
                {project.icon}
              </div>
              <span className="absolute top-3 right-3 text-xs font-semibold bg-white/80 backdrop-blur-sm border border-white/60 text-muted-foreground px-2.5 py-1 rounded-full">
                {project.tag}
              </span>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-base group-hover:text-primary transition-colors leading-snug">{project.title}</h3>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5 ml-2" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
              <button
                onClick={() => window.open(project.demo, "_blank")}
                className="w-full py-2 border border-border rounded-xl text-xs font-semibold text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all cursor-pointer"
              >
                Открыть демо →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
