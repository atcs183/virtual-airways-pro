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
          <img
            src="/images/saudia_virtual.png"
            alt="Saudia Virtual"
            className="h-10 w-auto object-contain md:h-11"
          />
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
            to="/join"
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
          <Link
            to="/join"
            onClick={() => setOpen(false)}
            className="block py-3.5 text-sm font-semibold text-accent"
          >
            Join Us!
          </Link>
        </nav>
      )}
    </header>
  );
}

function PrivacyNotice() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      setVisible(window.localStorage.getItem("sva-privacy-notice") !== "accepted");
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    try {
      window.localStorage.setItem("sva-privacy-notice", "accepted");
    } catch {
      // Keep the notice visible only for the current page session when storage is unavailable.
    }
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-[900px] rounded-2xl border border-border bg-background/95 p-5 shadow-2xl backdrop-blur-xl md:flex md:items-center md:gap-6">
      <div className="flex-1">
        <p className="text-sm font-semibold text-foreground">Privacy & data notice</p>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          Saudia Virtual collects and uses information in accordance with its Privacy Policy. Membership
          registration is handled through VAMSYS and requires separate member consent before registration.
          Read our{" "}
          <Link to="/privacy" className="font-semibold text-accent hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
      <button
        type="button"
        onClick={dismiss}
        className="mt-4 rounded-full bg-accent px-5 py-2.5 text-xs font-bold text-accent-foreground md:mt-0"
      >
        I understand
      </button>
    </div>
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
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-accent">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/vatsim" className="text-sm text-muted-foreground hover:text-accent">
                  VATSIM Operations
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Crew Centre</p>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://discord.gg/saudiava"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Discord Community
                </a>
              </li>
              <li>saudiavirtualva@gmail.com</li>
              <li>Hubs: OEJN · OERK</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/60 pt-8">
          <p className="eyebrow mb-5">Partners and Friends</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="https://vatsim.net/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-6 rounded-xl border border-border bg-background/30 p-5 transition-colors hover:border-accent"
            >
              <div>
                <p className="font-display text-base font-semibold text-foreground group-hover:text-accent">
                  VATSIM
                </p>
                <p className="mt-1 text-xs text-muted-foreground">Online flight simulation network</p>
              </div>
              <img
                src="https://commons.wikimedia.org/wiki/Special:Redirect/file/VATSIM_Logo_Official.png"
                alt="VATSIM"
                className="h-12 w-auto max-w-[150px] object-contain"
              />
            </a>
            <a
              href="https://vamsys.io/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-6 rounded-xl border border-border bg-background/30 p-5 transition-colors hover:border-accent"
            >
              <div>
                <p className="font-display text-base font-semibold text-foreground group-hover:text-accent">
                  VAMSYS
                </p>
                <p className="mt-1 text-xs text-muted-foreground">VA registration, roster and flight management</p>
              </div>
              <img
                src="https://vamsys.io/favicon.ico"
                alt="VAMSYS"
                className="h-12 w-12 object-contain"
              />
            </a>
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
      <PrivacyNotice />
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
