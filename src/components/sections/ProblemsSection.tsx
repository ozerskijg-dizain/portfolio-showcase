import { AlertCircle, ArrowRight } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

interface ProblemsSectionProps {
  onScrollTo: (id: string) => void;
}

const PROBLEMS = [
  { text: "Нет сайта для бизнеса", detail: "Клиенты не могут найти вас онлайн" },
  { text: "Сайт не приводит клиентов", detail: "Посетители есть, а заявок нет" },
  { text: "Устаревший дизайн", detail: "Сайт выглядит как из 2010-х" },
  { text: "Медленный сайт", detail: "Пользователи уходят, не дождавшись загрузки" },
  { text: "Нужно запустить быстро", detail: "Горят сроки и нет времени ждать" },
  { text: "Нет мобильной версии", detail: "Больше половины — это мобильный трафик" },
];

export default function ProblemsSection({ onScrollTo: _onScrollTo }: ProblemsSectionProps) {
  const { openModal } = useContactModal();

  return (
    <section id="problems" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-10">
        <span className="text-primary text-sm tracking-widest uppercase font-mono font-semibold">06.</span>
        <h2 className="text-3xl font-bold">Знакомые проблемы?</h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {PROBLEMS.map((problem) => (
          <div
            key={problem.text}
            className="flex items-start gap-3 bg-card border border-border rounded-2xl p-5 hover:border-primary hover:-translate-y-0.5 transition-all card-shadow card-shadow-hover group"
          >
            <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
            <div>
              <span className="text-foreground font-semibold text-sm leading-snug block">{problem.text}</span>
              <span className="text-muted-foreground text-xs mt-0.5 block">{problem.detail}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={openModal}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/25 hover:-translate-y-0.5"
        >
          Решить эту проблему
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
