import DemoCTA from "./DemoCTA";

const CLIENTS = [
  { name: "Анна Смирнова", goal: "Снижение веса", calories: 1800, days: 12, status: "Активна" },
  { name: "Иван Петров", goal: "Набор мышц", calories: 2800, days: 28, status: "Активен" },
  { name: "Мария Козлова", goal: "Оздоровление", calories: 2100, days: 5, status: "Активна" },
  { name: "Дмитрий Нов.", goal: "Сушка", calories: 2200, days: 19, status: "Пауза" },
];

export default function NutritionCRMDemo() {
  return (
    <div className="min-h-screen bg-[#f5fbf7] text-[#1a2e20] font-sans">
      {/* Sidebar + Main */}
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-56 bg-[#1a3a2a] text-white hidden md:flex flex-col p-5">
          <div className="text-lg font-bold text-[#6ddb9a] mb-8">🥗 NutriCRM</div>
          {["Дашборд", "Клиенты", "Программы", "Приёмы пищи", "Аналитика", "Настройки"].map((item, i) => (
            <button
              key={item}
              className={`text-left px-4 py-2.5 rounded-lg text-sm mb-1 transition-colors ${
                i === 1 ? "bg-[#6ddb9a] text-[#1a3a2a] font-semibold" : "text-[#8dbfa0] hover:bg-[#2a4a3a]"
              }`}
            >
              {item}
            </button>
          ))}
        </aside>

        {/* Main */}
        <main className="flex-1 p-6 md:p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Мои клиенты</h1>
            <button className="bg-[#2a7a4a] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#1a6a3a] transition-colors">
              + Новый клиент
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Всего клиентов", val: "24" },
              { label: "Активных", val: "18" },
              { label: "Программ", val: "31" },
              { label: "Встреч сегодня", val: "4" },
            ].map((s) => (
              <div key={s.label} className="bg-white border border-[#c8e8d0] rounded-xl p-4">
                <div className="text-2xl font-bold text-[#2a7a4a]">{s.val}</div>
                <div className="text-xs text-[#607060] mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="bg-white border border-[#c8e8d0] rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-[#f0f8f2] border-b border-[#c8e8d0]">
                <tr>
                  {["Клиент", "Цель", "Ккал/день", "Дней в работе", "Статус"].map((h) => (
                    <th key={h} className="text-left px-5 py-3 text-[#607060] font-semibold text-xs uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CLIENTS.map((c, i) => (
                  <tr key={c.name} className={`border-b border-[#e8f5ec] hover:bg-[#f8fdf9] transition-colors ${i === CLIENTS.length - 1 ? "border-0" : ""}`}>
                    <td className="px-5 py-4 font-medium">{c.name}</td>
                    <td className="px-5 py-4 text-[#607060]">{c.goal}</td>
                    <td className="px-5 py-4">{c.calories}</td>
                    <td className="px-5 py-4">{c.days}</td>
                    <td className="px-5 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                        c.status === "Пауза"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}>
                        {c.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      <DemoCTA />
    </div>
  );
}
