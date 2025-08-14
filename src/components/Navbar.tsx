import { useEffect, useRef, useState } from "react";
import logo from "@/assets/logo-fluxo.png";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "hero", label: "Inicio" },
  { id: "solutions", label: "Soluciones" },
  { id: "automation", label: "Automatización" },
  { id: "benefits", label: "Beneficios" },
  { id: "plans", label: "Planes" },
  { id: "faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("hero");
  const menuRef = useRef<HTMLDivElement>(null);

  // Scrollspy + control de "scrolled"
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const getHeaderOffset = () => {
      const h = document.querySelector("header") as HTMLElement | null;
      return (h?.offsetHeight ?? 80);
    };

    let ticking = false;

    const computeActive = () => {
      try {
        const headerOffset = getHeaderOffset();
        const y = window.scrollY + headerOffset + 1;

        const sectionEls = sections
          .map(s => ({ id: s.id, el: document.getElementById(s.id) as HTMLElement | null }))
          .filter((x): x is { id: string; el: HTMLElement } => !!x.el);

        // 🔒 Mientras el menú móvil está abierto, no activamos "scrolled" (evita cambios de altura en móvil)
        setScrolled(window.scrollY > 8 && !open);

        let current = "hero";
        for (const s of sectionEls) {
          const top = s.el.getBoundingClientRect().top + window.scrollY;
          if (y >= top) current = s.id;
        }
        setActive(current);
      } catch {}
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => { computeActive(); ticking = false; });
        ticking = true;
      }
    };

    const onResize = () => computeActive();

    computeActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [open]); // ← clave para que "scrolled" se congele cuando el menú está abierto

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!open) return;
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const NavLink = ({ id, label }: { id: string; label: string }) => (
    <a
      href={`#${id}`}
      onClick={() => { setOpen(false); setActive(id); }}
      className="relative px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
    >
      {label}
      <span
        className={
          "absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-primary transition-all duration-300 " +
          (active === id ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0")
        }
      />
    </a>
  );

  return (
    <header
  className={
    "fixed top-0 inset-x-0 z-50 bg-white/90 md:backdrop-blur border-b border-border transform-gpu [will-change:transform] " +
    (scrolled ? "md:py-2" : "md:py-4")
  }
  style={{
    paddingTop: "calc(env(safe-area-inset-top, 0px) + 8px)", // margen superior seguro para notch
    paddingBottom: "8px" // altura controlada en móvil
  }}
>
  <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[48px] md:h-auto">
    <a href="#hero" className="flex items-center gap-2">
      <img
        src={logo}
        alt="Fluxo"
        className={"w-auto transition-all " + (scrolled ? "md:h-10 h-8" : "md:h-12 h-8")}
      />
    </a>

    <div className="hidden md:flex items-center gap-1">
      {sections.map((s) => <NavLink key={s.id} id={s.id} label={s.label} />)}
      <a href="https://fluxodemo.carrd.co" target="_blank" rel="noopener noreferrer" className="ml-4 btn-outline rounded-full px-5 py-2">Probar demo</a>
      <a href="https://wa.me/message/YC7W3UVLEHFKB1" target="_blank" rel="noopener noreferrer" className="btn-primary rounded-full px-5 py-2">Contactar</a>
    </div>

    <button onClick={() => setOpen(v => !v)} className="md:hidden p-2 rounded-xl border border-border">
      {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  </nav>
</header>
  );
}
