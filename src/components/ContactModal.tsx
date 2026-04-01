import { useState, useCallback } from "react";
import { X, Send, CheckCircle, Loader2 } from "lucide-react";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const EDGE_FUNCTION_URL = "https://iddgkybfmafmoxyolsre.supabase.co/functions/v1/hyper-responder";

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleClose = useCallback(() => {
    onClose();
    if (status === "success") {
      setTimeout(() => {
        setMessage("");
        setStatus("idle");
      }, 300);
    }
  }, [onClose, status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(EDGE_FUNCTION_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: message.trim() }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Ошибка отправки");
      }

      setStatus("success");
      setMessage("");
    } catch (err) {
      console.error("Send error:", err);
      setErrorMsg("Не удалось отправить. Попробуйте ещё раз.");
      setStatus("error");
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative bg-card border border-border rounded-2xl shadow-2xl w-full max-w-md p-6 z-10">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-center text-center py-8 gap-4">
            <CheckCircle className="w-14 h-14 text-primary" />
            <p className="text-foreground font-semibold text-xl">Сообщение отправлено!</p>
            <p className="text-muted-foreground text-sm">Я свяжусь с вами в ближайшее время.</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Отправить ещё
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-1">Связаться со мной</h2>
              <p className="text-muted-foreground text-sm">Опишите ваш проект или задайте вопрос</p>
            </div>

            <textarea
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              rows={5}
              placeholder="Напишите сообщение..."
              className="w-full rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-colors"
              required
            />

            {status === "error" && (
              <p className="text-destructive text-xs -mt-2">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading" || !message.trim()}
              className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Отправка...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Отправить
                </>
              )}
            </button>

            <p className="text-muted-foreground text-xs text-center">
              Обычно отвечаю в течение 30–60 минут
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
