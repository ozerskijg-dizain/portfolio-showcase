import { ExternalLink, Coffee, Sparkles, Newspaper, Fish, CalendarCheck, HeartPulse, Brain, Bot, Database, Settings } from "lucide-react";
import { ReactNode } from "react";

interface Project {
  title: string;
  description: string;
  demo: string;
  icon: ReactNode;
  color: string;
  bg: string;
  tag: string;
  heroBg: string;
  heroText: string;
}

const PROJECTS: Project[] = [
  {
    title: "Сайт кофейни",
    description: "Современный сайт кофейни с меню и онлайн-заказом",
    demo: "/test/coffee",
    icon: <Coffee className="w-8 h-8" />,
    color: "text-amber-600",
    bg: "bg-amber-50 border-amber-100",
    tag: "Лендинг",
    heroBg: "from-amber-800 via-amber-700 to-yellow-900",
    heroText: "☕ Кофейня мечты",
  },
  {
    title: "Сайт салона красоты",
    description: "Лендинг салона красоты с услугами и записью",
    demo: "/test/beauty-salon",
    icon: <Sparkles className="w-8 h-8" />,
    color: "text-pink-500",
    bg: "bg-pink-50 border-pink-100",
    tag: "Лендинг",
    heroBg: "from-pink-600 via-rose-500 to-fuchsia-600",
    heroText: "✨ Салон красоты",
  },
  {
    title: "Новостной портал",
    description: "Многостраничный сайт новостей с категориями",
    demo: "/test/news",
    icon: <Newspaper className="w-8 h-8" />,
    color: "text-slate-600",
    bg: "bg-slate-50 border-slate-200",
    tag: "Портал",
    heroBg: "from-slate-800 via-slate-700 to-gray-900",
    heroText: "📰 Новости дня",
  },
  {
    title: "Рыбный магазин",
    description: "Интернет-витрина магазина морепродуктов",
    demo: "/test/seafood",
    icon: <Fish className="w-8 h-8" />,
    color: "text-cyan-600",
    bg: "bg-cyan-50 border-cyan-100",
    tag: "Магазин",
    heroBg: "from-cyan-700 via-teal-600 to-blue-800",
    heroText: "🐟 Свежие морепродукты",
  },
  {
    title: "Планировщик и контроль",
    description: "Трекер планирования сайтов, блогов и каналов",
    demo: "/test/habits",
    icon: <CalendarCheck className="w-8 h-8" />,
    color: "text-emerald-600",
    bg: "bg-emerald-50 border-emerald-100",
    tag: "Веб-приложение",
    heroBg: "from-emerald-700 via-green-600 to-teal-700",
    heroText: "📋 Планировщик",
  },
  {
    title: "CRM для нутрициолога",
    description: "Система управления клиентами и программами питания",
    demo: "/test/nutrition-crm",
    icon: <HeartPulse className="w-8 h-8" />,
    color: "text-rose-500",
    bg: "bg-rose-50 border-rose-100",
    tag: "CRM",
    heroBg: "from-rose-600 via-pink-600 to-red-700",
    heroText: "💊 CRM нутрициолога",
  },
  {
    title: "Сайт психолога",
    description: "Персональный сайт специалиста с записью на консультацию",
    demo: "/test/psychologist",
    icon: <Brain className="w-8 h-8" />,
    color: "text-indigo-500",
    bg: "bg-indigo-50 border-indigo-100",
    tag: "Лендинг",
    heroBg: "from-indigo-700 via-violet-600 to-purple-800",
    heroText: "🧠 Психолог онлайн",
  },
  {
    title: "AI консультант",
    description: "Интерфейс AI-ассистента для бизнеса",
    demo: "/test/ai-consultant",
    icon: <Bot className="w-8 h-8" />,
    color: "text-blue-500",
    bg: "bg-blue-50 border-blue-100",
    tag: "AI",
    heroBg: "from-blue-700 via-indigo-600 to-cyan-700",
    heroText: "🤖 AI Консультант",
  },
  {
    title: "AI CRM система",
    description: "CRM-панель с AI-автоматизацией процессов",
    demo: "/test/ai-crm",
    icon: <Database className="w-8 h-8" />,
    color: "text-violet-500",
    bg: "bg-violet-50 border-violet-100",
    tag: "AI + CRM",
    heroBg: "from-violet-700 via-purple-600 to-fuchsia-700",
    heroText: "📊 AI CRM",
  },
  {
    title: "AI админ-панель",
    description: "Административная панель управления AI-агентами",
    demo: "/test/ai-admin",
    icon: <Settings className="w-8 h-8" />,
    color: "text-gray-600",
    bg: "bg-gray-50 border-gray-200",
    tag: "AI",
    heroBg: "from-gray-800 via-slate-700 to-zinc-900",
    heroText: "⚙️ AI Админ-панель",
  },
];

export default function PortfolioSection() {
  return (
    <section id="projects" className="py-14 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-primary text-sm tracking-widest uppercase font-mono font-semibold">02.</span>
        <h2 className="text-3xl font-bold">Портфолио</h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 card-shadow card-shadow-hover flex flex-col cursor-pointer hover:shadow-xl"
            onClick={() => window.open(project.demo, "_blank")}
          >
            {/* Hero visual - full card area */}
            <div className={`relative h-52 sm:h-64 bg-gradient-to-br ${project.heroBg} flex items-center justify-center overflow-hidden`}>
              {/* Decorative circles */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10 blur-xl" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-white/5 blur-lg" />

              {/* Icon and title */}
              <div className="relative z-10 flex flex-col items-center gap-3 text-white group-hover:scale-105 transition-transform duration-300">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl border border-white/20 shadow-lg">
                  {project.icon}
                </div>
                <span className="text-xl font-bold tracking-tight drop-shadow-lg">{project.heroText}</span>
              </div>

              {/* Tag */}
              <span className="absolute top-3 right-3 text-xs font-semibold bg-black/30 backdrop-blur-sm text-white px-2.5 py-1 rounded-full border border-white/10">
                {project.tag}
              </span>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            {/* Text below card */}
            <div className="p-5 flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-base group-hover:text-primary transition-colors leading-snug">{project.title}</h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5 ml-2" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
              <button
                onClick={(e) => { e.stopPropagation(); window.open(project.demo, "_blank"); }}
                className="w-full py-2.5 border border-border rounded-xl text-xs font-semibold text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all cursor-pointer"
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
