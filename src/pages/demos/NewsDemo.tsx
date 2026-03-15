import DemoCTA from "./DemoCTA";

const ARTICLES = [
  { cat: "Технологии", title: "ИИ переписывает правила разработки ПО", time: "2 часа назад" },
  { cat: "Экономика", title: "Рубль укрепился на фоне роста нефтяных котировок", time: "4 часа назад" },
  { cat: "Спорт", title: "Сборная по хоккею вышла в финал чемпионата мира", time: "6 часов назад" },
  { cat: "Культура", title: "Новый фильм Звягинцева выходит в широкий прокат", time: "Вчера" },
  { cat: "Технологии", title: "Представлен новый процессор с рекордной производительностью", time: "Вчера" },
  { cat: "Общество", title: "В Москве открылся крупнейший цифровой музей", time: "2 дня назад" },
];

export default function NewsDemo() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#1a1a2e] font-sans">
      {/* Header */}
      <header className="bg-[#1a1a2e] text-white px-8 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <span className="text-2xl font-black tracking-tight">📰 ВЕСТНИК</span>
          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            {["Главное", "Технологии", "Экономика", "Спорт", "Культура"].map((c) => (
              <a key={c} href="#" className="hover:text-white transition-colors">{c}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* Featured */}
      <section className="bg-[#1a1a2e] text-white px-8 pb-16 pt-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#16213e] rounded-2xl p-8 md:p-12">
            <span className="text-xs bg-blue-500 text-white px-3 py-1 rounded-full uppercase tracking-wider font-semibold">Главное</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-4 leading-tight">
              Россия запустила новую орбитальную станцию
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Первый модуль новой российской орбитальной станции успешно выведен на орбиту. Космонавты приступят к работе уже через месяц.
            </p>
            <p className="text-gray-500 text-sm mt-4">1 час назад · Космос</p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="px-8 py-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Последние новости</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ARTICLES.map((a) => (
            <div key={a.title} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow cursor-pointer">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">{a.cat}</span>
              <h3 className="font-semibold mt-3 mb-2 leading-tight">{a.title}</h3>
              <p className="text-gray-400 text-xs">{a.time}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-8 py-8 text-center text-gray-400 text-sm mt-4">
        <p>© 2025 Вестник · Все права защищены</p>
      </footer>

      <DemoCTA />
    </div>
  );
}
