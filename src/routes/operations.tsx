import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Page, SectionHead } from "@/components/site/SiteChrome";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/operations")({
  head: () => ({
    meta: [
      { title: "Operations — Standards, Ranks & Tracking at Saudia Virtual" },
      {
        name: "description",
        content:
          "How Saudia Virtual flies: published SOPs, ACARS flight tracking and stable-approach gates.",
      },
      { property: "og:title", content: "Operations — Saudia Virtual" },
      {
        property: "og:description",
        content: "SOPs, ACARS tracking, approach gates and the rank ladder explained.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/operations" },
      { property: "og:image", content: photos.kingdomTower },
      { name: "twitter:image", content: photos.kingdomTower },
    ],
    links: [{ rel: "canonical", href: "/operations" }],
  }),
  component: Operations,
});

const PILLARS = [
  {
    t: "Published SOPs",
    d: "Every type carries a written flow: cockpit prep, taxi, takeoff briefing, descent planning and shutdown. Read once, fly forever.",
  },
  {
    t: "ACARS Tracking",
    d: "The client records the whole sector — fuel, altitude profile, flap and gear schedule, touchdown rate — and files it as your PIREP.",
  },
  {
    t: "Human Review",
    d: "Widebody upgrades and Captain promotions are signed off by the training department, not by a counter hitting a threshold.",
  },
];


const GATES = [
  ["1,000 ft AAL", "Landing configuration set, on profile, on speed"],
  ["500 ft AAL", "Sink rate below 1,000 fpm, wings level, cleared to land"],
  ["Touchdown", "Target below 250 fpm; above 600 fpm triggers a debrief"],
  ["Taxi in", "Single-engine taxi where the SOP permits, APU on stand"],
];

function Operations() {
  return (
    <Page>
      <section className="relative isolate overflow-hidden border-b border-border">
        <img
          src={photos.kingdomTower}
          alt="Modern Riyadh skyline architecture at dusk"
          width={1200}
          height={800}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="deck-fade absolute inset-0" />
        <div className="relative mx-auto max-w-[1320px] px-5 py-28 md:py-36">
          <p className="arabic text-2xl">العمليات</p>
          <h1 className="h-display mt-3 max-w-3xl">
            Serious flying.
            <br />
            <span className="gold-text">No gatekeeping.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            We hold a real standard in the air and keep the paperwork out of your way on the ground.
            Fly when you can; nobody here counts your absences.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-24">
        <SectionHead
          eyebrow="How we operate"
          title="Three commitments"
          intro="The framework behind every sector flown under an SVA callsign."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <motion.article
              key={p.t}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="surface p-8"
            >
              <span className="font-display text-sm font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-panel">
        <div className="mx-auto max-w-[1320px] px-5 py-24">
          <SectionHead eyebrow="Progression" title="From Cadet to Training Captain" />
          <div className="surface overflow-hidden">
            {RANKS.map((r, i) => (
              <div
                key={r.r}
                className="grid gap-2 border-b border-border px-7 py-6 last:border-0 md:grid-cols-[1.2fr_0.8fr_1.6fr] md:items-center"
              >
                <div className="flex items-center gap-4">
                  <span className="font-display text-sm font-semibold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg">{r.r}</h3>
                </div>
                <p className="text-sm font-semibold text-foreground">{r.h}</p>
                <p className="text-sm text-muted-foreground">{r.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-24">
        <SectionHead
          eyebrow="Stable approach"
          title="The gates we hold"
          intro="A go-around is never held against a pilot here. Continuing an unstable approach is."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {GATES.map(([g, d]) => (
            <div key={g} className="surface p-7">
              <p className="text-[11px] font-bold tracking-[0.22em] text-accent uppercase">{g}</p>
              <p className="mt-3 text-base text-foreground">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link
            to="/network"
            className="rounded-full bg-accent px-8 py-4 text-sm font-bold text-accent-foreground transition-transform hover:scale-[1.04]"
          >
            Explore the network
          </Link>
        </div>
      </section>
    </Page>
  );
}
