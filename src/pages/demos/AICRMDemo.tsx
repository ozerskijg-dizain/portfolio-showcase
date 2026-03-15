import DemoCTA from "./DemoCTA";

const DEALS = [
  { name: "ООО «Технолоджи»", stage: "Переговоры", value: "150 000 ₽", score: 92 },
  { name: "ИП Соколов А.В.", stage: "КП отправлено", value: "45 000 ₽", score: 67 },
  { name: "Компания «Альфа»", stage: "Новый лид", value: "280 000 ₽", score: 84 },
  { name: "Стартап «Вектор»", stage: "Согласование", value: "95 000 ₽", score: 51 },
];

const STAGES = ["Новый лид", "КП отправлено", "Переговоры", "Согласование", "Закрыто"];

export default function AICRMDemo() {
  return (
    <div className="min-h-screen bg-[#f5f5ff] text-[#1a1a35] font-sans">
      {/* Header */}
      <header className="bg-[#1a1a35] text-white px-6 py-4 flex justify-between items-center">
        <span className="text-lg font-bold text-violet-300">⚡ AI CRM</span>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-violet-900/50 px-3 py-1.5 rounded-full">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-violet-300">AI-автоматизация активна</span>
          </div>
        </div>
      </header>

      <main className="px-6 py-8 max-w-5xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Лидов в работе", val: "24", delta: "+3 сегодня" },
            { label: "AI оценило", val: "19", delta: "из 24" },
            { label: "Конверсия", val: "34%", delta: "+8% за месяц" },
            { label: "Выручка/мес", val: "1.2M ₽", delta: "прогноз AI" },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-[#dddaff] rounded-xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-violet-700">{s.val}</div>
              <div className="text-xs text-[#8080a8] mt-0.5">{s.label}</div>
              <div className="text-xs text-green-600 mt-1 font-medium">{s.delta}</div>
            </div>
          ))}
        </div>

        {/* Deals */}
        <h2 className="text-xl font-bold mb-5">Сделки — AI-скоринг</h2>
        <div className="flex flex-col gap-3">
          {DEALS.map((d) => (
            <div key={d.name} className="bg-white border border-[#dddaff] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 shadow-sm">
              <div className="flex-1">
                <div className="font-semibold">{d.name}</div>
                <div className="text-sm text-[#8080a8] mt-0.5">{d.value}</div>
              </div>
              <span className="text-xs bg-violet-100 text-violet-700 px-3 py-1 rounded-full font-medium w-fit">{d.stage}</span>
              <div className="flex items-center gap-2 w-32">
                <div className="flex-1 h-2 bg-[#e8e8ff] rounded-full overflow-hidden">
                  <div
                    className={`h-2 rounded-full ${d.score >= 80 ? "bg-green-500" : d.score >= 60 ? "bg-yellow-500" : "bg-red-400"}`}
                    style={{ width: `${d.score}%` }}
                  />
                </div>
                <span className="text-xs font-bold text-[#5050a8]">{d.score}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Kanban hint */}
        <div className="mt-8 bg-white border border-[#dddaff] rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            🤖 AI-рекомендации
          </h3>
          <div className="flex flex-col gap-2">
            {[
              "ООО «Технолоджи» — высокая вероятность закрытия. Рекомендую назначить встречу.",
              "Компания «Альфа» — интерес высокий, но долгий цикл. Отправьте кейсы.",
              "ИП Соколов — нет активности 5 дней. Напомните о себе.",
            ].map((tip, i) => (
              <div key={i} className="flex gap-3 items-start bg-violet-50 border border-violet-100 rounded-lg px-4 py-3 text-sm text-violet-800">
                <span className="text-violet-400 mt-0.5">▸</span>
                {tip}
              </div>
            ))}
          </div>
        </div>
      </main>

      <DemoCTA />
    </div>
  );
}
