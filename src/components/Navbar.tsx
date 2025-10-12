import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "hero", label: "Inicio" },
  { id: "productos", label: "Soluciones" },
  { id: "benefits", label: "Beneficios" },
  { id: "plans", label: "Planes" },
  { id: "faq", label: "FAQ" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("hero");
  const menuRef = useRef<HTMLDivElement>(null);

  // Scrollspy + control de "scrolled" + empuje del body en móvil
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const getHeaderOffset = () => {
      const h = document.querySelector("header") as HTMLElement | null;
      return h?.offsetHeight ?? 80;
    };

    let ticking = false;

    const computeActive = () => {
      try {
        const headerOffset = getHeaderOffset();
        const isMobile = window.matchMedia("(max-width: 767.98px)").matches;
        if (isMobile) {
          document.body.style.paddingTop = `${headerOffset}px`;
        } else {
          document.body.style.paddingTop = "";
        }

        const y = window.scrollY + headerOffset + 1;
        const sectionEls = sections
          .map((s) => ({ id: s.id, el: document.getElementById(s.id) as HTMLElement | null }))
          .filter((x): x is { id: string; el: HTMLElement } => !!x.el);

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
        window.requestAnimationFrame(() => {
          computeActive();
          ticking = false;
        });
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
      if (typeof document !== "undefined") document.body.style.paddingTop = "";
    };
  }, [open]);

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
      onClick={() => {
        setOpen(false);
        setActive(id);
      }}
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
      style={{ ["--sat" as any]: "env(safe-area-inset-top)" }}
      className={
        "fixed top-0 inset-x-0 z-50 bg-white/90 md:backdrop-blur border-b border-border transform-gpu [will-change:transform] " +
        "pt-[var(--sat)] md:!pt-0 " +
        (scrolled
          ? "md:py-1.5 py-1 md:h-[64px] h-[56px] md:shadow-sm"
          : "md:py-3 py-2 md:h-[80px] h-[64px]")
      }
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full transition-all duration-300">
        {/* ✅ Logo ocupa literalmente toda la altura de la navbar */}
        <a href="#hero" className="flex items-center h-full">
          <img
  src="/logo-fluxo.png?v=5"
  alt="Fluxo"
  className={
    // El logo rellena toda la barra visualmente.
    "block w-auto object-contain transition-all duration-300 " +
    (scrolled ? "scale-[1.1] opacity-95" : "scale-[1.6] opacity-100")
  }
  style={{
    height: "120%",              // fuerza que sobresalga visualmente del header
    maxHeight: "none",           // elimina límite de altura
    transformOrigin: "left center", 
  }}
/>


        <div className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <NavLink key={s.id} id={s.id} label={s.label} />
          ))}
          <a
            href="https://preview--gatrobot-999-lunes6-77548-81865-64714-11392.lovable.app/chatbot/a6697f05-6811-48dc-adc5-bdf585925c30"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 btn-outline rounded-full px-5 py-2"
          >
            Probar demo
          </a>
          <a
            href="https://wa.me/message/YC7W3UVLEHFKB1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary rounded-full px-5 py-2"
          >
            Contactar
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-xl border border-border"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
    </header>
  );
}
