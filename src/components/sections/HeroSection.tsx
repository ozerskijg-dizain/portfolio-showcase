import { ChevronDown, FolderOpen, MessageCircle, CheckCircle } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

interface HeroSectionProps {
  onScrollTo: (id: string) => void;
}

const HIGHLIGHTS = ["Быстрый запуск", "Современный дизайн", "SEO включён"];

export default function HeroSection({ onScrollTo }: HeroSectionProps) {
  const { openModal } = useContactModal();

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-20 overflow-hidden">
      {/* Background accent */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-primary/4 blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase font-mono mb-6 border border-primary/20">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Веб-разработка &amp; автоматизация бизнеса
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 text-foreground tracking-tight">
          Сайты, которые<br />
          <span className="text-primary relative">
            приводят клиентов
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full" />
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
          Создаю быстрые, современные сайты и решения для автоматизации бизнеса — от идеи до запуска.
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          {HIGHLIGHTS.map((h) => (
            <div key={h} className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary shrink-0" />
              {h}
            </div>
          ))}
        </div>

        <div className="flex gap-4 mb-16 flex-wrap">
          <button
            onClick={() => onScrollTo("projects")}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            <FolderOpen className="w-4 h-4" />
            Смотреть портфолио
          </button>
          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-border text-foreground rounded-xl text-sm font-semibold hover:border-primary hover:text-primary transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            Написать мне
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
}
