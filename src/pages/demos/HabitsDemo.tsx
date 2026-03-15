import { useState } from "react";
import DemoCTA from "./DemoCTA";

const HABITS = ["Зарядка", "Чтение", "Медитация", "Вода 2л", "Без соцсетей"];
const DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

export default function HabitsDemo() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => setChecked((p) => ({ ...p, [key]: !p[key] }));

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-[#e8e8ff] font-sans">
      {/* Header */}
      <header className="px-8 py-5 border-b border-[#2a2a4a] flex justify-between items-center">
        <span className="text-xl font-bold text-[#7c6aff]">✦ HabitFlow</span>
        <div className="flex gap-3">
          <button className="text-sm text-[#7c6aff] border border-[#7c6aff] px-4 py-1.5 rounded-lg hover:bg-[#7c6aff] hover:text-white transition-colors">
            + Новая привычка
          </button>
        </div>
      </header>

      <main className="px-8 py-10 max-w-3xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { label: "Серия дней", value: "12 🔥" },
            { label: "Выполнено сегодня", value: "3 / 5" },
            { label: "Процент успеха", value: "74%" },
          ].map((s) => (
            <div key={s.label} className="bg-[#1a1a2e] border border-[#2a2a4a] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-[#7c6aff]">{s.value}</div>
              <div className="text-xs text-[#8080a8] mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Habits Grid */}
        <h2 className="text-xl font-bold mb-6">Привычки на эту неделю</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left text-sm text-[#8080a8] font-medium pb-4 pr-4 min-w-[140px]">Привычка</th>
                {DAYS.map((d) => (
                  <th key={d} className="text-center text-sm text-[#8080a8] font-medium pb-4 w-10">{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {HABITS.map((habit) => (
                <tr key={habit} className="border-t border-[#2a2a4a]">
                  <td className="py-3 pr-4 text-sm font-medium">{habit}</td>
                  {DAYS.map((d, di) => {
                    const key = `${habit}-${d}`;
                    const pre = di < 4;
                    const isChecked = pre || checked[key];
                    return (
                      <td key={d} className="py-3 text-center">
                        <button
                          onClick={() => !pre && toggle(key)}
                          className={`w-7 h-7 rounded-lg border-2 mx-auto transition-all ${
                            isChecked
                              ? "bg-[#7c6aff] border-[#7c6aff]"
                              : "border-[#2a2a4a] hover:border-[#7c6aff]"
                          }`}
                        >
                          {isChecked && <span className="text-white text-xs">✓</span>}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <DemoCTA />
    </div>
  );
}
