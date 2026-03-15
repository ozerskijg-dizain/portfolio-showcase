import { useState } from "react";
import DemoCTA from "./DemoCTA";

const SERVICES = [
  { label: "Лендинг", price: 15000 },
  { label: "Корпоративный сайт", price: 30000 },
  { label: "Интернет-магазин", price: 50000 },
];

const EXTRAS = [
  { label: "SEO-оптимизация", price: 5000 },
  { label: "Интеграция CRM", price: 8000 },
  { label: "Онлайн-оплата", price: 6000 },
  { label: "Чат-бот", price: 10000 },
];

export default function CalculatorDemo() {
  const [service, setService] = useState(0);
  const [extras, setExtras] = useState<number[]>([]);
  const [pages, setPages] = useState(1);

  const toggleExtra = (i: number) =>
    setExtras((p) => p.includes(i) ? p.filter((x) => x !== i) : [...p, i]);

  const base = SERVICES[service].price;
  const extrasTotal = extras.reduce((s, i) => s + EXTRAS[i].price, 0);
  const pagesExtra = (pages - 1) * 3000;
  const total = base + extrasTotal + pagesExtra;

  return (
    <div className="min-h-screen bg-[#f0f4ff] text-[#1a1a3e] font-sans">
      {/* Header */}
      <header className="bg-[#1a1a3e] text-white px-8 py-5 flex justify-between items-center">
        <span className="text-xl font-bold">🔢 Калькулятор сайта</span>
        <span className="text-sm text-blue-300">Вебожитель</span>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">Рассчитайте стоимость</h1>
        <p className="text-[#6060a0] mb-10">Настройте параметры и получите предварительную оценку</p>

        {/* Service type */}
        <div className="bg-white rounded-2xl p-6 mb-5 shadow-sm border border-[#dde4ff]">
          <h2 className="font-semibold mb-4">Тип сайта</h2>
          <div className="grid grid-cols-3 gap-3">
            {SERVICES.map((s, i) => (
              <button
                key={s.label}
                onClick={() => setService(i)}
                className={`p-4 rounded-xl border-2 text-sm font-medium transition-all text-center ${
                  service === i
                    ? "border-blue-600 bg-blue-50 text-blue-700"
                    : "border-[#dde4ff] hover:border-blue-300"
                }`}
              >
                <div className="font-bold text-base mb-1">{s.label}</div>
                <div className="text-xs text-[#8080b0]">от {s.price.toLocaleString("ru")} ₽</div>
              </button>
            ))}
          </div>
        </div>

        {/* Pages */}
        <div className="bg-white rounded-2xl p-6 mb-5 shadow-sm border border-[#dde4ff]">
          <h2 className="font-semibold mb-4">Количество страниц: <span className="text-blue-600">{pages}</span></h2>
          <input
            type="range" min={1} max={20} value={pages}
            onChange={(e) => setPages(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
          <div className="flex justify-between text-xs text-[#8080b0] mt-1">
            <span>1 стр.</span><span>20 стр.</span>
          </div>
        </div>

        {/* Extras */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm border border-[#dde4ff]">
          <h2 className="font-semibold mb-4">Дополнительно</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {EXTRAS.map((e, i) => (
              <button
                key={e.label}
                onClick={() => toggleExtra(i)}
                className={`flex justify-between items-center p-3 rounded-xl border-2 text-sm transition-all ${
                  extras.includes(i)
                    ? "border-blue-600 bg-blue-50 text-blue-700"
                    : "border-[#dde4ff] hover:border-blue-300"
                }`}
              >
                <span>{e.label}</span>
                <span className="font-semibold">+{e.price.toLocaleString("ru")} ₽</span>
              </button>
            ))}
          </div>
        </div>

        {/* Result */}
        <div className="bg-[#1a1a3e] text-white rounded-2xl p-6 flex justify-between items-center">
          <div>
            <p className="text-blue-300 text-sm mb-1">Итоговая стоимость</p>
            <p className="text-4xl font-bold">{total.toLocaleString("ru")} ₽</p>
          </div>
          <a
            href="https://t.me/webozhitel"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
          >
            Заказать
          </a>
        </div>
      </main>

      <DemoCTA />
    </div>
  );
}
