import DemoCTA from "./DemoCTA";

const AGENTS = [
  { name: "Агент поддержки", model: "GPT-4o", status: "Активен", requests: 1423, success: 98 },
  { name: "Агент продаж", model: "Claude 3.5", status: "Активен", requests: 847, success: 94 },
  { name: "Агент аналитики", model: "GPT-4o-mini", status: "Пауза", requests: 321, success: 99 },
  { name: "Email-агент", model: "GPT-4o", status: "Активен", requests: 2105, success: 97 },
];

export default function AIAdminDemo() {
  return (
    <div className="min-h-screen bg-[#080c14] text-[#c8d8f0] font-sans">
      {/* Sidebar + Main */}
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-52 bg-[#0d1220] border-r border-[#1a2840] hidden md:flex flex-col p-4">
          <div className="text-[#4a90d8] font-bold text-lg mb-8 px-2">⚡ AgentHub</div>
          {["Дашборд", "Агенты", "Логи", "API-ключи", "Биллинг", "Настройки"].map((item, i) => (
            <button
              key={item}
              className={`text-left px-3 py-2.5 rounded-lg text-sm mb-1 transition-colors ${
                i === 1 ? "bg-[#4a90d8] text-white font-semibold" : "text-[#6080a8] hover:bg-[#1a2840] hover:text-[#c8d8f0]"
              }`}
            >
              {item}
            </button>
          ))}
          <div className="mt-auto p-3 bg-[#1a2840] rounded-xl">
            <div className="text-xs text-[#6080a8] mb-1">API-запросов сегодня</div>
            <div className="text-xl font-bold text-[#4a90d8]">4 696</div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 p-6 md:p-8 overflow-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-white">AI-агенты</h1>
            <button className="bg-[#4a90d8] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#3a80c8] transition-colors">
              + Создать агента
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Активных агентов", val: "3" },
              { label: "Запросов / час", val: "196" },
              { label: "Ср. успешность", val: "97%" },
              { label: "Токенов / день", val: "2.1M" },
            ].map((s) => (
              <div key={s.label} className="bg-[#0d1220] border border-[#1a2840] rounded-xl p-4">
                <div className="text-2xl font-bold text-[#4a90d8]">{s.val}</div>
                <div className="text-xs text-[#6080a8] mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Agents table */}
          <div className="bg-[#0d1220] border border-[#1a2840] rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="border-b border-[#1a2840]">
                <tr>
                  {["Агент", "Модель", "Запросы", "Успешность", "Статус", ""].map((h) => (
                    <th key={h} className="text-left px-5 py-3.5 text-[#6080a8] font-semibold text-xs uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {AGENTS.map((a, i) => (
                  <tr key={a.name} className={`border-b border-[#1a2840] hover:bg-[#1a2840]/50 transition-colors ${i === AGENTS.length - 1 ? "border-0" : ""}`}>
                    <td className="px-5 py-4 font-medium text-white">{a.name}</td>
                    <td className="px-5 py-4">
                      <span className="bg-[#1a2840] text-[#4a90d8] px-2.5 py-1 rounded-md text-xs font-mono">{a.model}</span>
                    </td>
                    <td className="px-5 py-4 text-[#c8d8f0]">{a.requests.toLocaleString("ru")}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-[#1a2840] rounded-full overflow-hidden">
                          <div className="h-1.5 bg-green-500 rounded-full" style={{ width: `${a.success}%` }} />
                        </div>
                        <span className="text-xs text-green-400">{a.success}%</span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                        a.status === "Активен" ? "bg-green-900/50 text-green-400" : "bg-yellow-900/50 text-yellow-400"
                      }`}>
                        {a.status}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <button className="text-xs text-[#4a90d8] hover:underline">Настроить</button>
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
