import DemoCTA from "./DemoCTA";

export default function CoffeeDemo() {
  return (
    <div className="min-h-screen bg-[#1a0f00] text-[#f5e6d3] font-sans">
      {/* Header */}
      <header className="px-8 py-5 flex justify-between items-center border-b border-[#3d2a15]">
        <span className="text-2xl font-bold tracking-tight">☕ Кофейня «Зерно»</span>
        <nav className="hidden md:flex gap-8 text-sm text-[#c9a97a]">
          <a href="#menu" className="hover:text-[#f5e6d3] transition-colors">Меню</a>
          <a href="#about" className="hover:text-[#f5e6d3] transition-colors">О нас</a>
          <a href="#contacts" className="hover:text-[#f5e6d3] transition-colors">Контакты</a>
        </nav>
        <button className="bg-[#c9a97a] text-[#1a0f00] px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#e0c090] transition-colors">
          Заказать
        </button>
      </header>

      {/* Hero */}
      <section className="px-8 py-24 max-w-4xl mx-auto text-center">
        <p className="text-[#c9a97a] text-sm tracking-widest uppercase mb-4">Specialty coffee · Москва</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Каждая чашка —<br />
          <span className="text-[#c9a97a]">маленькое счастье</span>
        </h1>
        <p className="text-[#a08060] text-xl mb-10 max-w-xl mx-auto">
          Свежеобжаренный спешелти кофе, домашняя выпечка и уютная атмосфера в самом центре города.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-[#c9a97a] text-[#1a0f00] px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-[#e0c090] transition-colors">
            Смотреть меню
          </button>
          <button className="border border-[#3d2a15] px-8 py-3.5 rounded-xl text-sm text-[#c9a97a] hover:border-[#c9a97a] transition-colors">
            Забронировать стол
          </button>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="px-8 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Наше меню</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "Эспрессо", price: "150 ₽", desc: "Крепкий, насыщенный" },
            { name: "Капучино", price: "220 ₽", desc: "Нежная молочная пена" },
            { name: "Флэт уайт", price: "240 ₽", desc: "Двойной эспрессо с молоком" },
            { name: "Раф кофе", price: "280 ₽", desc: "Сливки, ваниль, эспрессо" },
            { name: "Матча латте", price: "290 ₽", desc: "Японский зелёный чай" },
            { name: "Круассан", price: "180 ₽", desc: "Свежая выпечка каждое утро" },
          ].map((item) => (
            <div key={item.name} className="bg-[#2a1a08] border border-[#3d2a15] rounded-xl p-5 hover:border-[#c9a97a] transition-colors">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{item.name}</span>
                <span className="text-[#c9a97a] font-bold">{item.price}</span>
              </div>
              <p className="text-[#a08060] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#3d2a15] px-8 py-8 text-center text-[#a08060] text-sm mt-8">
        <p>© 2025 Кофейня «Зерно» · ул. Кофейная, 12 · Пн–Вс 8:00–22:00</p>
      </footer>

      <DemoCTA />
    </div>
  );
}
