import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/fleet", label: "Fleet" },
  { to: "/network", label: "Destinations" },
  { to: "/operations", label: "Operations" },
] as const;


export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-3">
          <span className="arabic text-2xl leading-none">السعودية</span>
          <span className="h-6 w-px bg-border" />
          <span className="font-display text-sm font-semibold tracking-[0.22em] text-foreground uppercase">
            Saudia Virtual
          </span>
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-accent" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="text-[13px] font-semibold tracking-wide transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/network"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-[13px] font-bold text-accent-foreground transition-transform hover:scale-[1.03] sm:inline-block"
          >
            Join Us!
          </Link>

          <button
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-panel px-5 py-2 md:hidden">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-3.5 text-sm font-semibold text-foreground last:border-0"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="dune-glow absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-[1320px] px-5 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="arabic text-3xl">السعودية الافتراضية</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Saudia Virtual is a flight-simulation community inspired by the spirit of Saudi
              aviation. We are not affiliated with Saudia (Saudi Arabian Airlines) and nothing here
              is for sale — every flight is flown for the love of it.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-4">Explore</p>
            <ul className="space-y-2.5">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-sm text-muted-foreground hover:text-accent">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Crew Centre</p>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href="https://discord.gg/nuuJpGcGYK" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                  Discord Community
                </a>
              </li>
              <li>saudiavirtualva@gmail.com</li>
              <li>Hubs: OEJN · OERK</li>
              
            </ul>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden border-t border-border/60">
        <p className="font-display -mb-4 w-full px-5 pt-8 text-center leading-[0.8] font-semibold tracking-tighter text-panel-line [font-size:clamp(3rem,15vw,13rem)]">
          SAUDIA VIRTUAL
        </p>
      </div>
    </footer>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`mb-14 ${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-[clamp(2rem,4.4vw,3.4rem)]">{title}</h2>
      {intro && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}
