import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code2, Layers, Terminal, Globe } from "lucide-react";

const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

const SKILLS = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "REST APIs"] },
  { category: "Tools", items: ["Git", "Docker", "Figma", "VS Code"] },
];

const PROJECTS = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack shopping platform with real-time inventory, payment integration, and admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL"],
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: "Task Management App",
    description: "Kanban-style project manager with drag-and-drop, team collaboration, and analytics.",
    tags: ["TypeScript", "React", "Tailwind"],
    icon: <Layers className="w-5 h-5" />,
  },
  {
    title: "CLI Developer Tool",
    description: "Command-line utility that automates boilerplate generation and project scaffolding.",
    tags: ["Python", "CLI", "Docker"],
    icon: <Terminal className="w-5 h-5" />,
  },
  {
    title: "Open Source UI Library",
    description: "A component library with 40+ accessible, customizable components used by 2k+ developers.",
    tags: ["React", "TypeScript", "Storybook"],
    icon: <Code2 className="w-5 h-5" />,
  },
];

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-mono">

      {/* NAV */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur border-b border-border" : ""}`}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-primary font-bold text-lg tracking-tight">&lt;dev /&gt;</span>
          <div className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-20">
        <p className="text-primary text-sm mb-3 tracking-widest uppercase">Hello, World</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          I'm <span className="text-primary">Alex Morgan</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
          Full-Stack Developer crafting clean, performant web experiences with modern technologies.
        </p>
        <div className="flex gap-4 mb-16">
          <button
            onClick={() => scrollTo("Projects")}
            className="px-6 py-3 bg-primary text-primary-foreground rounded text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            View Work
          </button>
          <button
            onClick={() => scrollTo("Contact")}
            className="px-6 py-3 border border-border text-foreground rounded text-sm hover:border-primary hover:text-primary transition-colors"
          >
            Get in Touch
          </button>
        </div>
        <div className="flex gap-5">
          {[
            { icon: <Github className="w-5 h-5" />, href: "#" },
            { icon: <Linkedin className="w-5 h-5" />, href: "#" },
            { icon: <Mail className="w-5 h-5" />, href: "#" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
          <ChevronDown className="w-5 h-5" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary text-sm tracking-widest uppercase">01.</span>
          <h2 className="text-3xl font-bold">About</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a full-stack developer with 5+ years of experience building web applications that users love. I focus on writing clean, maintainable code and delivering polished user experiences.
            </p>
            <p>
              My work spans startups and enterprise clients, ranging from consumer apps to internal tools. I'm passionate about open source and regularly contribute to the developer community.
            </p>
            <p>
              When I'm not coding, you'll find me reading about system design, contributing to open source, or brewing specialty coffee.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Projects Shipped", value: "40+" },
              { label: "Years Experience", value: "5+" },
              { label: "Open Source Stars", value: "2k+" },
              { label: "Happy Clients", value: "30+" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card border border-border rounded-lg p-5">
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary text-sm tracking-widest uppercase">02.</span>
          <h2 className="text-3xl font-bold">Skills</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {SKILLS.map((group) => (
            <div key={group.category} className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full border border-border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary text-sm tracking-widest uppercase">03.</span>
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-primary">{project.icon}</div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs text-primary font-mono">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary text-sm tracking-widest uppercase">04.</span>
          <h2 className="text-3xl font-bold">Contact</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="max-w-xl">
          <p className="text-muted-foreground mb-8 leading-relaxed">
            I'm currently open to new opportunities. Whether you have a project in mind or just want to say hi, my inbox is always open.
          </p>
          <a
            href="mailto:alex@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary rounded hover:bg-primary hover:text-primary-foreground transition-colors font-semibold"
          >
            <Mail className="w-4 h-4" />
            Say Hello
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8 px-6 text-center text-muted-foreground text-sm">
        <p>Built with React & TypeScript &mdash; Designed with intent.</p>
      </footer>
    </div>
  );
}
