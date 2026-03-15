import { Send } from "lucide-react";

export default function DemoCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white text-gray-900 shadow-2xl rounded-2xl px-5 py-3.5 border border-gray-200 max-w-xs">
      <div className="flex flex-col">
        <span className="text-xs text-gray-500 leading-tight">Нравится сайт?</span>
        <span className="text-sm font-semibold leading-tight">Я сделаю такой для вас</span>
      </div>
      <a
        href="https://t.me/webozhitel"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 shrink-0 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors whitespace-nowrap"
      >
        <Send className="w-3.5 h-3.5" />
        Обсудить проект
      </a>
    </div>
  );
}
