import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

const NAV = [
  { to: "/", label: "Dispatch", code: "00" },
  { to: "/fleet", label: "Fleet", code: "01" },
  { to: "/network", label: "Network", code: "02" },
  { to: "/operations", label: "Operations", code: "03" },
  { to: "/join", label: "Crew Intake", code: "04" },
] as const;

function Wordmark() {
  return (
    <Link to="/" className="group flex items-baseline gap-2">
      <span className="font-display text-xl font-bold tracking-tight text-foreground">
        MERIDIAN
      </span>
      <span className="label-tag text-primary">VA · MRD</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-5">
        <Wordmark />
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="label-tag transition-colors"
            >
              <span className="mr-1.5 opacity-45">{n.code}</span>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/join"
            className="hidden border border-primary px-4 py-1.5 font-mono text-[11px] tracking-[0.18em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-block"
          >
            File Application
          </Link>
          <button
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="label-tag border border-border px-3 py-1.5 text-foreground md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-panel px-5 py-3 md:hidden">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="label-tag block border-b border-border py-3 text-foreground last:border-0"
            >
              <span className="mr-2 opacity-45">{n.code}</span>
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  const [utc, setUtc] = useState("--:--:--");
  useEffect(() => {
    const tick = () => setUtc(new Date().toISOString().slice(11, 19));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="label-tag">Operations Control Centre</p>
            <p className="mt-3 max-w-sm font-sans text-sm text-muted-foreground">
              Meridian Virtual is a simulation-only organisation. We are not affiliated with any
              real-world air carrier and we sell nothing. Everything here is flown for the craft.
            </p>
            <div className="mt-6 flex gap-3 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
              <span className="border border-border px-2 py-1">MSFS</span>
              <span className="border border-border px-2 py-1">X-Plane 12</span>
              <span className="border border-border px-2 py-1">P3D v5</span>
              <span className="border border-border px-2 py-1">VATSIM</span>
            </div>
          </div>
          <div>
            <p className="label-tag mb-4">Sections</p>
            <ul className="space-y-2">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="font-sans text-sm text-muted-foreground hover:text-primary"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-tag mb-4">Status Board</p>
            <dl className="space-y-2 font-mono text-xs text-muted-foreground">
              <div className="flex justify-between border-b border-border pb-2">
                <dt>UTC</dt>
                <dd className="text-primary tabular-nums">{utc}</dd>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <dt>HUB</dt>
                <dd>EGLL / KBOS</dd>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <dt>INTAKE</dt>
                <dd className="text-primary">OPEN</dd>
              </div>
              <div className="flex justify-between">
                <dt>DISCORD</dt>
                <dd>meridian.va</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className="overflow-hidden border-t border-border">
        <p className="font-display -mb-3 w-full px-5 pt-6 text-center leading-none font-bold tracking-tight text-panel-line [font-size:clamp(3.5rem,17vw,15rem)]">
          MERIDIAN
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
  index,
  title,
  intro,
}: {
  index: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mb-10 grid gap-4 border-b border-border pb-6 md:grid-cols-[auto_1fr_1fr] md:items-end md:gap-10">
      <span className="label-tag text-primary">{index}</span>
      <h2 className="font-display text-[clamp(1.9rem,4.4vw,3.4rem)] font-bold">{title}</h2>
      {intro && <p className="max-w-md text-sm text-muted-foreground">{intro}</p>}
    </div>
  );
}
