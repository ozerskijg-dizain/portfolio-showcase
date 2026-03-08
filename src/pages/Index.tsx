import { useState, useEffect } from "react";
import { ExternalLink, ChevronDown, Globe, ShoppingCart, Camera, Send, Download, Menu, X, Utensils, Briefcase, Home, Stethoscope, GraduationCap, Scissors, Car, Dumbbell } from "lucide-react";

const NAV_LINKS = [
  { label: "О себе", id: "about" },
  { label: "Проекты", id: "projects" },
  { label: "Навыки", id: "skills" },
  { label: "Контакты", id: "contact" },
];

const PROJECTS = [
  { title: "Сайт для фотостудии", description: "Презентационный сайт с портфолио, галереей работ, расписанием и онлайн-записью на съёмку.", tags: ["React", "CSS", "Адаптив"], icon: <Camera className="w-5 h-5" /> },
  { title: "Лендинг кофейни", description: "Стильная страница с меню, акциями, картой проезда и формой для бронирования столика.", tags: ["HTML", "CSS", "JavaScript"], icon: <Globe className="w-5 h-5" /> },
  { title: "Интернет-магазин цветов", description: "Каталог с фильтрами, корзиной, оформлением заказа и уведомлениями через Telegram-бот.", tags: ["React", "Node.js", "Telegram API"], icon: <ShoppingCart className="w-5 h-5" /> },
  { title: "Сайт ресторана", description: "Промо-страница с меню, историей заведения, фотогалереей и онлайн-бронированием стола.", tags: ["React", "CSS", "Адаптив"], icon: <Utensils className="w-5 h-5" /> },
  { title: "Корпоративный сайт агентства", description: "Многостраничный сайт с описанием услуг, командой, кейсами и формой обратной связи.", tags: ["React", "TypeScript", "Адаптив"], icon: <Briefcase className="w-5 h-5" /> },
  { title: "Сайт агентства недвижимости", description: "Каталог объектов с фильтрацией, картой и формой заявки на просмотр.", tags: ["React", "Google Maps API"], icon: <Home className="w-5 h-5" /> },
  { title: "Лендинг клиники", description: "Медицинский сайт с услугами, врачами, отзывами и онлайн-записью на приём.", tags: ["HTML", "CSS", "JavaScript"], icon: <Stethoscope className="w-5 h-5" /> },
  { title: "Сайт учебного центра", description: "Лендинг для онлайн-школы с описанием курсов, преподавателями и формой записи.", tags: ["React", "CSS"], icon: <GraduationCap className="w-5 h-5" /> },
  { title: "Сайт салона красоты", description: "Презентационная страница с услугами, прайсом, галереей работ и онлайн-записью.", tags: ["HTML", "CSS", "Адаптив"], icon: <Scissors className="w-5 h-5" /> },
  { title: "Сайт автомастерской", description: "Сайт с перечнем услуг, ценами, фотогалереей и формой заявки на ремонт.", tags: ["HTML", "CSS", "JavaScript"], icon: <Car className="w-5 h-5" /> },
  { title: "Лендинг фитнес-клуба", description: "Промо-страница с тарифами, расписанием занятий, тренерами и формой пробного визита.", tags: ["React", "CSS", "Адаптив"], icon: <Dumbbell className="w-5 h-5" /> },
];

const SKILLS = [
  { name: "HTML / CSS", level: 92 },
  { name: "JavaScript / React", level: 84 },
  { name: "Адаптивная вёрстка", level: 88 },
  { name: "Telegram-боты", level: 78 },
];

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">

      {/* NAV */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur shadow-sm border-b border-border" : "bg-background/0"}`}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-primary font-bold text-lg tracking-tight font-mono">&lt;вебожитель /&gt;</span>
          <div className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>
          <button
            className="md:hidden text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-background border-b border-border px-6 pb-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left font-medium py-1"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-20 relative">
        <p className="text-primary text-sm mb-3 tracking-widest uppercase font-mono font-semibold">Веб-разработка</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-foreground">
          Разработка сайтов<br />
          <span className="text-primary">под ключ</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
          Современные, быстрые и удобные сайты для вашего бизнеса
        </p>
        <div className="flex gap-4 mb-16 flex-wrap">
          <button
            onClick={() => scrollTo("projects")}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
          >
            Портфолио
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-6 py-3 border border-border text-foreground rounded-xl text-sm font-medium hover:border-primary hover:text-primary transition-colors"
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
          <span className="text-primary text-sm tracking-widest uppercase font-mono font-semibold">01.</span>
          <h2 className="text-3xl font-bold">О себе</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p className="text-foreground text-xl font-semibold">Привет, я Вебожитель 👋</p>
            <p>
              Занимаюсь веб-разработкой. Помогаю бизнесу и частным клиентам получить качественный цифровой продукт.
            </p>
            <p>
              В работе ценю <span className="text-primary font-semibold">чистый код</span>, продуманный интерфейс и внимание к деталям.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Проектов сдано", value: "10+" },
              { label: "Довольных клиентов", value: "8+" },
              { label: "Telegram-ботов", value: "5+" },
              { label: "Технологий", value: "10+" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card border border-border rounded-xl p-5 shadow-sm">
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
          <span className="text-primary text-sm tracking-widest uppercase font-mono font-semibold">02.</span>
          <h2 className="text-3xl font-bold">Проекты</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-primary bg-primary/10 p-2 rounded-lg">{project.icon}</div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded font-mono">{tag}</span>
                ))}
              </div>
              <button className="w-full py-2 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                Посмотреть
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary text-sm tracking-widest uppercase font-mono font-semibold">03.</span>
          <h2 className="text-3xl font-bold">Навыки</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="max-w-2xl space-y-6">
          {SKILLS.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="text-primary font-mono font-semibold">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
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
          <span className="text-primary text-sm tracking-widest uppercase font-mono font-semibold">04.</span>
          <h2 className="text-3xl font-bold">Контакты</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="max-w-xl">
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Готов обсудить ваш проект. Напишите мне — отвечу быстро.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://t.me/portfoliotelegarulit_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity font-semibold text-sm shadow-sm"
            >
              <Send className="w-4 h-4" />
              Написать в Telegram
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground rounded-xl hover:border-primary hover:text-primary transition-colors font-medium text-sm"
            >
              <Download className="w-4 h-4" />
              Скачать резюме
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8 px-6 text-center text-muted-foreground text-sm">
        <p>© 2025 Вебожитель — Разработка сайтов под ключ</p>
      </footer>
    </div>
  );
}
