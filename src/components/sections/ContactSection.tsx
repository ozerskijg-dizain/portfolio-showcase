import { useContactModal } from "@/context/ContactModalContext";

export default function ContactSection() {
  const { openModal } = useContactModal();

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-primary text-sm tracking-widest uppercase font-mono font-semibold">09.</span>
        <h2 className="text-3xl font-bold">Связаться со мной</h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="flex flex-col items-center text-center gap-6 py-12 bg-card border border-border rounded-2xl px-8">
        <p className="text-muted-foreground leading-relaxed max-w-lg">
          Расскажите о своём проекте — отвечу в течение 30–60 минут.
        </p>
        <button
          onClick={openModal}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-sm"
        >
          Написать сообщение
        </button>
      </div>
    </section>
  );
}
