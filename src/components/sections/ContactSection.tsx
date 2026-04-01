import { MessageCircle, Clock, CheckCircle } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

export default function ContactSection() {
  const { openModal } = useContactModal();

  return (
    <section id="contact" className="py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <span className="text-primary text-sm tracking-widest uppercase font-mono font-semibold">11.</span>
          <h2 className="text-3xl font-bold">Связаться со мной</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-primary p-10 text-center text-primary-foreground shadow-2xl shadow-primary/30">
          {/* Background decoration */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 mb-6">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-3">Готовы обсудить проект?</h3>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md mx-auto mb-8 text-sm">
              Расскажите о своей задаче — отвечу, оценю и предложу решение.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { icon: <Clock className="w-4 h-4" />, text: "Ответ за 30–60 минут" },
                { icon: <CheckCircle className="w-4 h-4" />, text: "Бесплатная консультация" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-1.5 text-primary-foreground/80 text-sm">
                  {item.icon}
                  {item.text}
                </div>
              ))}
            </div>

            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              Написать сообщение
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
