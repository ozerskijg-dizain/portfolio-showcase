import { useState, useEffect } from "react";
import { Github, Mail, ExternalLink, ChevronDown, Globe, ShoppingCart, Palette, Download, Send, Bot } from "lucide-react";

const NAV_LINKS = [
  { label: "О себе", id: "about" },
  { label: "Проекты", id: "projects" },
  { label: "Навыки", id: "skills" },
  { label: "Контакты", id: "contact" },
];

const PROJECTS = [
  {
    title: "Сайт для ресторана",
    description: "Современный лендинг с меню, галереей и онлайн-бронированием столиков.",
    tags: ["React", "Figma", "CSS"],
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: "Интернет-магазин",
    description: "Полнофункциональный магазин с каталогом, корзиной и оплатой онлайн.",
    tags: ["React", "Node.js", "PostgreSQL"],
    icon: <ShoppingCart className="w-5 h-5" />,
  },
  {
    title: "Портфолио дизайнера",
    description: "Стильный сайт-визитка с анимациями и галереей работ.",
    tags: ["HTML/CSS", "JavaScript", "Figma"],
    icon: <Palette className="w-5 h-5" />,
  },
];

const SKILLS = [
  { name: "HTML / CSS", level: 95 },
  { name: "JavaScript / React", level: 88 },
  { name: "Figma", level: 80 },
  { name: "Telegram-боты", level: 85 },
];

export default function Index() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">

      {/* NAV */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur border-b border-border" : ""}`}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-primary font-bold text-lg tracking-tight font-mono">&lt;gennady /&gt;</span>
          <div className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-20 relative">
        <p className="text-primary text-sm mb-3 tracking-widest uppercase font-mono">Веб-разработка</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Разработка сайтов<br />
          <span className="text-primary">под ключ</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
          Создаю современные сайты и Telegram-ботов для вашего бизнеса
        </p>
        <div className="flex gap-4 mb-16 flex-wrap">
          <button
            onClick={() => scrollTo("projects")}
            className="px-6 py-3 bg-primary text-primary-foreground rounded text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Портфолио
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-6 py-3 border border-border text-foreground rounded text-sm hover:border-primary hover:text-primary transition-colors"
          >
            Связаться
          </button>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
          <ChevronDown className="w-5 h-5" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary text-sm tracking-widest uppercase font-mono">01.</span>
          <h2 className="text-3xl font-bold">О себе</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p className="text-foreground text-xl font-semibold">Привет, я Геннадий 👋</p>
            <p>
              Занимаюсь разработкой сайтов и веб-приложений более <span className="text-primary font-semibold">3 лет</span>. Создаю проекты с нуля — от дизайна до запуска.
            </p>
            <p>
              Помогаю бизнесу получить качественный digital-продукт: лендинги, интернет-магазины, корпоративные сайты и Telegram-боты.
            </p>
            <p>
              Работаю чётко по срокам, всегда на связи и довожу проекты до результата.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Проектов сдано", value: "20+" },
              { label: "Лет опыта", value: "3+" },
              { label: "Довольных клиентов", value: "15+" },
              { label: "Telegram-ботов", value: "10+" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card border border-border rounded-lg p-5">
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary text-sm tracking-widest uppercase font-mono">02.</span>
          <h2 className="text-3xl font-bold">Проекты</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-primary">{project.icon}</div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs text-primary font-mono">{tag}</span>
                ))}
              </div>
              <button className="w-full py-2 border border-border rounded text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                Посмотреть
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary text-sm tracking-widest uppercase font-mono">03.</span>
          <h2 className="text-3xl font-bold">Навыки</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="max-w-2xl space-y-6">
          {SKILLS.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-primary font-mono">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary text-sm tracking-widest uppercase font-mono">04.</span>
          <h2 className="text-3xl font-bold">Контакты</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="max-w-xl">
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Готов обсудить ваш проект. Напишите мне — отвечу в течение нескольких часов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:gennady@example.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded hover:bg-primary hover:text-primary-foreground transition-colors font-semibold text-sm"
            >
              <Mail className="w-4 h-4" />
              gennady@example.com
            </a>
            <a
              href="https://t.me/username"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity font-semibold text-sm"
            >
              <Send className="w-4 h-4" />
              Написать в Telegram
            </a>
          </div>
          <div className="mt-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-muted-foreground rounded hover:border-primary hover:text-primary transition-colors text-sm"
            >
              <Download className="w-4 h-4" />
              Скачать резюме
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8 px-6 text-center text-muted-foreground text-sm">
        <p>© 2025 Геннадий — Разработка сайтов под ключ</p>
      </footer>
    </div>
  );
}
