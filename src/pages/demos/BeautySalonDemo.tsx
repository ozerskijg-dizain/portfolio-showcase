import DemoCTA from "./DemoCTA";

export default function BeautySalonDemo() {
  return (
    <div className="min-h-screen bg-[#fdf6f0] text-[#2d1b12] font-sans">
      {/* Header */}
      <header className="px-8 py-5 flex justify-between items-center border-b border-[#f0d8c8]">
        <span className="text-2xl font-bold tracking-tight text-[#c97a5a]">✦ Bloom Studio</span>
        <nav className="hidden md:flex gap-8 text-sm text-[#7a5a4a]">
          <a href="#services" className="hover:text-[#c97a5a] transition-colors">Услуги</a>
          <a href="#masters" className="hover:text-[#c97a5a] transition-colors">Мастера</a>
          <a href="#prices" className="hover:text-[#c97a5a] transition-colors">Цены</a>
        </nav>
        <button className="bg-[#c97a5a] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#b06040] transition-colors">
          Записаться
        </button>
      </header>

      {/* Hero */}
      <section className="px-8 py-24 max-w-4xl mx-auto text-center">
        <p className="text-[#c97a5a] text-sm tracking-widest uppercase mb-4">Салон красоты · Москва</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-[#2d1b12]">
          Ваша красота —<br />
          <span className="text-[#c97a5a]">наша работа</span>
        </h1>
        <p className="text-[#7a5a4a] text-xl mb-10 max-w-xl mx-auto">
          Профессиональный уход за волосами, лицом и телом. Запись онлайн за 1 минуту.
        </p>
        <button className="bg-[#c97a5a] text-white px-10 py-4 rounded-full font-semibold text-sm hover:bg-[#b06040] transition-colors shadow-lg">
          Записаться онлайн
        </button>
      </section>

      {/* Services */}
      <section id="services" className="px-8 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Наши услуги</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "Стрижка", price: "от 1 500 ₽", emoji: "✂️" },
            { name: "Окрашивание", price: "от 4 000 ₽", emoji: "🎨" },
            { name: "Маникюр", price: "от 1 200 ₽", emoji: "💅" },
            { name: "Уход за лицом", price: "от 2 500 ₽", emoji: "✨" },
            { name: "Брови и ресницы", price: "от 800 ₽", emoji: "👁️" },
            { name: "Свадебный образ", price: "от 8 000 ₽", emoji: "💍" },
          ].map((s) => (
            <div key={s.name} className="bg-white border border-[#f0d8c8] rounded-2xl p-6 text-center hover:border-[#c97a5a] hover:shadow-md transition-all">
              <div className="text-3xl mb-3">{s.emoji}</div>
              <div className="font-semibold mb-1">{s.name}</div>
              <div className="text-[#c97a5a] text-sm font-medium">{s.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#f0d8c8] px-8 py-8 text-center text-[#7a5a4a] text-sm mt-8">
        <p>© 2025 Bloom Studio · ул. Цветочная, 5 · Ежедневно 9:00–21:00</p>
      </footer>

      <DemoCTA />
    </div>
  );
}
