import DemoCTA from "./DemoCTA";

export default function SeafoodDemo() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-[#e8f4f8] font-sans">
      {/* Header */}
      <header className="px-8 py-5 flex justify-between items-center border-b border-[#1a3048]">
        <span className="text-2xl font-bold text-[#4ab8d8]">🐟 АтлантМаркет</span>
        <nav className="hidden md:flex gap-8 text-sm text-[#7ab8d0]">
          <a href="#catalog" className="hover:text-[#e8f4f8] transition-colors">Каталог</a>
          <a href="#delivery" className="hover:text-[#e8f4f8] transition-colors">Доставка</a>
          <a href="#about" className="hover:text-[#e8f4f8] transition-colors">О нас</a>
        </nav>
        <button className="bg-[#4ab8d8] text-[#0a1628] px-5 py-2 rounded-lg text-sm font-bold hover:bg-[#6acde8] transition-colors">
          В корзину
        </button>
      </header>

      {/* Hero */}
      <section className="px-8 py-20 max-w-4xl mx-auto text-center">
        <p className="text-[#4ab8d8] text-sm tracking-widest uppercase mb-4">Свежие морепродукты · Доставка за 2 часа</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Океан —<br />
          <span className="text-[#4ab8d8]">на вашем столе</span>
        </h1>
        <p className="text-[#7ab8d0] text-xl mb-10 max-w-xl mx-auto">
          Свежая рыба, креветки, устрицы и морепродукты прямо с рыболовецких предприятий.
        </p>
        <button className="bg-[#4ab8d8] text-[#0a1628] px-10 py-4 rounded-xl font-bold text-sm hover:bg-[#6acde8] transition-colors">
          Смотреть каталог
        </button>
      </section>

      {/* Products */}
      <section id="catalog" className="px-8 py-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Хиты продаж</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[
            { name: "Лосось охл.", weight: "1 кг", price: "890 ₽", badge: "Хит" },
            { name: "Тигровые креветки", weight: "500 г", price: "640 ₽", badge: "Свежее" },
            { name: "Устрицы", weight: "6 шт", price: "780 ₽", badge: "" },
            { name: "Краб варёный", weight: "1 кг", price: "2 400 ₽", badge: "Премиум" },
            { name: "Мидии", weight: "1 кг", price: "350 ₽", badge: "" },
            { name: "Гребешок", weight: "500 г", price: "1 100 ₽", badge: "Свежее" },
          ].map((p) => (
            <div key={p.name} className="bg-[#0e2035] border border-[#1a3048] rounded-xl p-5 hover:border-[#4ab8d8] transition-colors">
              <div className="flex justify-between items-start mb-3">
                <span className="font-semibold">{p.name}</span>
                {p.badge && <span className="text-xs bg-[#4ab8d8] text-[#0a1628] px-2 py-0.5 rounded-full font-semibold">{p.badge}</span>}
              </div>
              <p className="text-[#7ab8d0] text-sm mb-3">{p.weight}</p>
              <div className="flex justify-between items-center">
                <span className="text-[#4ab8d8] font-bold text-lg">{p.price}</span>
                <button className="bg-[#4ab8d8] text-[#0a1628] px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-[#6acde8] transition-colors">
                  В корзину
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1a3048] px-8 py-8 text-center text-[#7ab8d0] text-sm mt-8">
        <p>© 2025 АтлантМаркет · Доставка 7 дней в неделю</p>
      </footer>

      <DemoCTA />
    </div>
  );
}
