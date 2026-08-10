import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Page, SectionHead } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/operations")({
  head: () => ({
    meta: [
      { title: "Standards, Training & Ranks — Meridian Virtual Airline" },
      {
        name: "description",
        content:
          "Meridian's Standards department: SOP library, stable-approach gates, checkride syllabus, PIREP validation and the rank ladder from Second Officer to Training Captain.",
      },
      { property: "og:title", content: "Standards & Training — Meridian Virtual" },
      {
        property: "og:description",
        content:
          "SOP library, checkride syllabus, ACARS-verified PIREPs and a five-step rank ladder.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/operations" },
    ],
    links: [{ rel: "canonical", href: "/operations" }],
  }),
  component: Operations,
});

const RANKS = [
  ["SO", "Second Officer", "0 hrs", "A20N / B738 · domestic and intra-Europe turns"],
  ["FO", "First Officer", "35 hrs", "Adds transatlantic narrowbody and A339 right seat"],
  ["SFO", "Senior First Officer", "120 hrs", "A339 / B78X command training begins"],
  ["CPT", "Captain", "300 hrs + checkride", "B77W unlocked · may sign off observed sectors"],
  ["TC", "Training Captain", "By appointment", "Runs line checks and writes SOP amendments"],
];

const GATES = [
  ["1,000 ft IMC", "Configured, on speed, on path, checklist complete"],
  ["500 ft VMC", "Same gates. Not met = go around, no discussion"],
  ["Landing rate", "Logged, not scored — a smooth touchdown off profile is still a bust"],
  ["Fuel policy", "Trip + contingency + alternate + 30 min final reserve, filed on the OFP"],
];

const SYLLABUS = [
  {
    n: "01",
    t: "Written",
    d: "Twenty questions on the Meridian FOM: fuel policy, diversion criteria, radio discipline, PIREP filing.",
  },
  {
    n: "02",
    t: "Observed sector",
    d: "One live leg with a Training Captain on the jumpseat, flown on VATSIM or IVAO where coverage allows.",
  },
  {
    n: "03",
    t: "Debrief",
    d: "ACARS trace reviewed line by line: flap schedule, thrust setting, descent planning, approach stability.",
  },
  {
    n: "04",
    t: "Release to line",
    d: "Crew ID issued, roster access granted, first bid window opens the following Monday 00:01z.",
  },
];

function Operations() {
  return (
    <Page>
      <section className="relative border-b border-border">
        <div className="scanline absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-[1400px] px-5 py-24 md:py-32">
          <p className="label-tag text-primary">SECTION 03 · STANDARDS</p>
          <h1 className="h-display mt-6 max-w-4xl">
            The manual is
            <br />
            the culture.
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Meridian publishes a Flight Operations Manual, amends it in public, and holds every rank
            to the same gates. Standards exists to make the flying better, not to hand out demerits.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20">
        <SectionHead
          index="SOP / GATES"
          title="Non-negotiables"
          intro="Four lines from the FOM that every Meridian pilot flies to, from the first observed sector onward."
        />
        <div className="grid gap-px bg-panel-line md:grid-cols-2">
          {GATES.map(([k, v]) => (
            <div key={k} className="bg-background p-8 md:p-10">
              <p className="font-display text-3xl font-bold text-accent">{k}</p>
              <p className="mt-3 text-sm text-muted-foreground">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-panel">
        <div className="mx-auto max-w-[1400px] px-5 py-20">
          <SectionHead index="INTAKE / SYLLABUS" title="Line check, four stages" />
          <ol className="grid gap-px bg-panel-line md:grid-cols-4">
            {SYLLABUS.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-panel p-8"
              >
                <p className="font-display text-5xl font-bold text-primary/40">{s.n}</p>
                <h3 className="mt-4 text-xl font-bold">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20">
        <SectionHead
          index="RANKS"
          title="Progression ladder"
          intro="Hours are logged from validated PIREPs only. Time spent on the ground in the sim does not count."
        />
        <div className="divide-y divide-panel-line border-y border-panel-line">
          {RANKS.map(([code, name, hrs, priv]) => (
            <div
              key={code}
              className="grid gap-3 py-6 transition-colors hover:bg-panel md:grid-cols-[90px_1fr_170px_1.3fr] md:items-center md:gap-8 md:px-5"
            >
              <span className="font-display text-3xl font-bold text-primary">{code}</span>
              <span className="text-lg font-bold uppercase">{name}</span>
              <span className="font-mono text-xs tracking-widest text-accent uppercase">{hrs}</span>
              <span className="text-sm text-muted-foreground">{priv}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-24">
        <div className="grid-plate panel flex flex-col items-start gap-6 p-10 md:flex-row md:items-center md:justify-between md:p-14">
          <h2 className="max-w-lg text-[clamp(1.7rem,3.6vw,2.6rem)] font-bold">
            Read the FOM before you fly it — it ships with your intake pack.
          </h2>
          <Link
            to="/join"
            className="border border-primary bg-primary px-7 py-4 font-mono text-xs tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-transparent hover:text-primary"
          >
            File an application
          </Link>
        </div>
      </section>
    </Page>
  );
}
