import { useState } from "react";
import DemoCTA from "./DemoCTA";

const MESSAGES = [
  { role: "assistant", text: "Привет! Я ваш AI-консультант. Чем могу помочь?" },
  { role: "user", text: "Как вы можете помочь моему бизнесу?" },
  { role: "assistant", text: "Я могу отвечать на вопросы клиентов 24/7, помогать с продажами, обрабатывать заявки и предоставлять аналитику по обращениям. Что именно вас интересует?" },
];

export default function AIConsultantDemo() {
  const [messages, setMessages] = useState(MESSAGES);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    setMessages((p) => [
      ...p,
      { role: "user", text: input },
      { role: "assistant", text: "Отличный вопрос! Это демонстрационный интерфейс AI-консультанта. В реальном проекте здесь будет подключён AI с базой знаний вашего бизнеса." },
    ]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-[#0d0d1a] text-[#e8e8ff] font-sans flex flex-col">
      {/* Header */}
      <header className="px-6 py-4 border-b border-[#1e1e3a] flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-violet-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">AI</div>
          <div>
            <div className="font-semibold text-sm">Бизнес-консультант</div>
            <div className="text-xs text-green-400">● Онлайн</div>
          </div>
        </div>
        <span className="text-xs text-[#8080b8] bg-[#1e1e3a] px-3 py-1.5 rounded-full">Демо-режим</span>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-4 max-w-2xl mx-auto w-full">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-sm px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                m.role === "user"
                  ? "bg-violet-600 text-white rounded-br-sm"
                  : "bg-[#1e1e3a] text-[#e8e8ff] rounded-bl-sm border border-[#2e2e5a]"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t border-[#1e1e3a] px-6 py-4">
        <div className="max-w-2xl mx-auto flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Введите сообщение..."
            className="flex-1 bg-[#1e1e3a] border border-[#2e2e5a] rounded-xl px-4 py-3 text-sm text-[#e8e8ff] placeholder-[#5050a0] focus:outline-none focus:border-violet-500 transition-colors"
          />
          <button
            onClick={send}
            className="bg-violet-600 hover:bg-violet-500 text-white px-5 py-3 rounded-xl text-sm font-semibold transition-colors"
          >
            Отправить
          </button>
        </div>
      </div>

      <DemoCTA />
    </div>
  );
}
