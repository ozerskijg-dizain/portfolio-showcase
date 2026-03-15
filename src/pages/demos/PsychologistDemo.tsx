import DemoCTA from "./DemoCTA";

export default function PsychologistDemo() {
  return (
    <div className="min-h-screen bg-[#fafbff] text-[#1a1a35] font-sans">
      {/* Header */}
      <header className="px-8 py-5 flex justify-between items-center border-b border-[#e8eaf8]">
        <span className="text-xl font-semibold text-[#5a5aaa]">🧠 Елена Васильева</span>
        <nav className="hidden md:flex gap-8 text-sm text-[#7a7aaa]">
          <a href="#about" className="hover:text-[#5a5aaa] transition-colors">Обо мне</a>
          <a href="#services" className="hover:text-[#5a5aaa] transition-colors">Услуги</a>
          <a href="#book" className="hover:text-[#5a5aaa] transition-colors">Запись</a>
        </nav>
        <button className="bg-[#5a5aaa] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#4a4a9a] transition-colors">
          Записаться
        </button>
      </header>

      {/* Hero */}
      <section className="px-8 py-20 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#5a5aaa] text-sm tracking-widest uppercase mb-4">Психолог · Гештальт-терапевт</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Помогаю найти<br />
              <span className="text-[#5a5aaa]">внутренний ресурс</span>
            </h1>
            <p className="text-[#7a7aaa] text-lg mb-8 leading-relaxed">
              Работаю с тревогой, отношениями, самооценкой и жизненными кризисами. Индивидуальные и групповые консультации.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-[#5a5aaa] text-white px-7 py-3 rounded-xl font-semibold text-sm hover:bg-[#4a4a9a] transition-colors">
                Записаться онлайн
              </button>
              <button className="border border-[#5a5aaa] text-[#5a5aaa] px-7 py-3 rounded-xl font-semibold text-sm hover:bg-[#f0f0ff] transition-colors">
                Первая консультация бесплатно
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#e8e8ff] to-[#f0e8ff] rounded-3xl h-64 md:h-80 flex items-center justify-center text-6xl">
            🧘
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-8 py-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Направления работы</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { title: "Индивидуальная терапия", price: "3 500 ₽/сессия", icon: "👤" },
            { title: "Онлайн-консультация", price: "3 000 ₽/сессия", icon: "💻" },
            { title: "Групповая терапия", price: "1 500 ₽/встреча", icon: "👥" },
          ].map((s) => (
            <div key={s.title} className="bg-white border border-[#e8eaf8] rounded-xl p-6 text-center hover:border-[#5a5aaa] hover:shadow-sm transition-all">
              <div className="text-3xl mb-3">{s.icon}</div>
              <div className="font-semibold mb-2">{s.title}</div>
              <div className="text-[#5a5aaa] font-semibold text-sm">{s.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e8eaf8] px-8 py-8 text-center text-[#9090b8] text-sm mt-8">
        <p>© 2025 Елена Васильева · Психолог · Запись через сайт или Telegram</p>
      </footer>

      <DemoCTA />
    </div>
  );
}
