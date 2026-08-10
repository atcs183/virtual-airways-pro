import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Page, SectionHead } from "@/components/site/SiteChrome";
import flightdeck from "@/assets/flightdeck.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meridian Virtual Airline — Flight Sim Operations Flown to Standard" },
      {
        name: "description",
        content:
          "Meridian Virtual is a procedure-driven virtual airline for MSFS, X-Plane and P3D. Real-world routes, published SOPs, PIREP-verified logbooks and a rated crew.",
      },
      { property: "og:title", content: "Meridian Virtual Airline — Flown to Standard" },
      {
        property: "og:description",
        content:
          "Procedure-driven virtual airline flying real-world schedules on VATSIM and IVAO. Crew intake open.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Meridian Virtual Airline",
          alternateName: "MRD",
          description:
            "Simulation-only virtual airline operating real-world schedules for MSFS, X-Plane 12 and P3D.",
          url: "/",
        }),
      },
    ],
  }),
  component: Dispatch,
});

const READOUT = [
  { k: "Active crew", v: "412", u: "pilots" },
  { k: "Legs filed", v: "68,540", u: "PIREPs" },
  { k: "Network hours", v: "91,206", u: "hrs" },
  { k: "On-time perf.", v: "94.2", u: "%" },
];

const PILLARS = [
  {
    code: "OPS-01",
    title: "Published SOPs",
    body: "Every type on the certificate has a written flow: preflight, takeoff briefing, climb profile, stable-approach gates at 1,000 ft IMC / 500 ft VMC. No house rules invented mid-flight.",
  },
  {
    code: "OPS-02",
    title: "Real schedules",
    body: "Timetables are rebuilt each season from published carrier data — correct city pairs, correct block times, correct equipment. You fly a duty, not a random leg.",
  },
  {
    code: "OPS-03",
    title: "Verified logbook",
    body: "The ACARS client records fuel burn, landing rate, flap and gear schedule. PIREPs are auto-validated and reviewed by a Standards pilot before hours credit.",
  },
  {
    code: "OPS-04",
    title: "Rank progression",
    body: "Second Officer through Training Captain. Hours plus a checkride move you up; upgrades unlock heavier metal and long-haul rosters.",
  },
];

const MARQUEE = [
  "EGLL",
  "OTHH",
  "KBOS",
  "LFPG",
  "VHHH",
  "SBGR",
  "RJTT",
  "KSEA",
  "LOWW",
  "OMDB",
  "CYYZ",
  "WSSS",
];

function Dispatch() {
  return (
    <Page>
      {/* HERO — dispatch release slip over a night flight deck */}
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={flightdeck}
          alt="Night flight deck on approach, instrument panel illuminated"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="grid-plate absolute inset-0 opacity-40" />
        <div className="scanline pointer-events-none absolute inset-0 opacity-60" />

        <div className="relative mx-auto max-w-[1400px] px-5 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <p className="label-tag mb-6 flex flex-wrap items-center gap-3">
              <span className="border border-primary/60 px-2 py-1 text-primary">
                DISPATCH RELEASE
              </span>
              <span>MRD · OPS SPEC 121</span>
              <span className="hidden sm:inline">SIMULATION ONLY</span>
            </p>
            <h1 className="h-display">
              Flown to
              <br />
              <span className="phosphor">standard.</span>
              <br />
              Not to vibes.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Meridian Virtual is a procedure-driven virtual airline. Real-world timetables,
              published SOPs, ACARS-verified PIREPs and a Standards department that actually reads
              them. Bring any sim — bring discipline.
            </p>
            <div className="mt-10">
              <Link
                to="/join"
                className="group inline-flex items-center gap-4 border border-primary bg-primary px-7 py-4 font-mono text-xs tracking-[0.2em] text-primary-foreground uppercase transition-all hover:bg-transparent hover:text-primary"
              >
                File an application
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </motion.div>

          {/* Instrument readout strip */}
          <div className="panel mt-16 grid grid-cols-2 divide-x divide-y divide-panel-line md:grid-cols-4 md:divide-y-0">
            {READOUT.map((r, i) => (
              <motion.div
                key={r.k}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.08, duration: 0.5 }}
                className="px-5 py-6"
              >
                <p className="label-tag">{r.k}</p>
                <p className="font-display mt-2 text-4xl font-bold tabular-nums text-primary md:text-5xl">
                  {r.v}
                  <span className="ml-2 font-mono text-xs tracking-widest text-muted-foreground">
                    {r.u}
                  </span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Station marquee */}
      <div className="overflow-hidden border-b border-border bg-panel py-3">
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE].map((s, i) => (
            <span key={i} className="label-tag flex items-center gap-8 text-muted-foreground">
              {s}
              <span className="text-primary">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Operating philosophy */}
      <section className="mx-auto max-w-[1400px] px-5 py-24">
        <SectionHead
          index="01 / DOCTRINE"
          title="How Meridian operates"
          intro="Four standing orders. They are the reason our roster looks like an airline and not a Discord server with a livery."
        />
        <div className="grid gap-px bg-panel-line md:grid-cols-2">
          {PILLARS.map((p) => (
            <motion.article
              key={p.code}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="group bg-background p-8 transition-colors hover:bg-panel md:p-12"
            >
              <p className="label-tag text-accent">{p.code}</p>
              <h3 className="mt-4 text-3xl font-bold">{p.title}</h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Duty snapshot */}
      <section className="border-y border-border bg-panel">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-20 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div>
            <p className="label-tag text-primary">02 / TODAY&apos;S BOARD</p>
            <h2 className="mt-5 text-[clamp(1.9rem,4vw,3.2rem)] font-bold">
              A roster you can actually plan around
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Bid windows open every 14 days. Claim a duty, get the OFP, fly it inside the window.
              Miss it and it returns to the pool — no penalty, no drama.
            </p>
            <Link
              to="/network"
              className="mt-8 inline-block border-b border-primary pb-1 font-mono text-xs tracking-[0.2em] text-primary uppercase"
            >
              Inspect the network →
            </Link>
          </div>
          <div className="panel divide-y divide-panel-line">
            {[
              ["MRD 118", "EGLL → KBOS", "A339", "07:20z", "OPEN"],
              ["MRD 244", "EGLL → LOWW", "A20N", "09:05z", "BID"],
              ["MRD 902", "KBOS → SBGR", "B78X", "22:40z", "OPEN"],
              ["MRD 517", "OTHH → VHHH", "B77W", "18:15z", "FULL"],
            ].map(([no, pair, eq, t, st]) => (
              <div
                key={no}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-4 font-mono text-xs md:grid-cols-[80px_1fr_60px_70px_60px]"
              >
                <span className="text-primary">{no}</span>
                <span className="text-foreground">{pair}</span>
                <span className="hidden text-muted-foreground md:block">{eq}</span>
                <span className="hidden text-muted-foreground md:block">{t}</span>
                <span className={st === "FULL" ? "text-muted-foreground" : "text-accent"}>
                  {st}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1400px] px-5 py-24">
        <div className="grid-plate panel flex flex-col items-start gap-6 p-10 md:flex-row md:items-center md:justify-between md:p-16">
          <div>
            <p className="label-tag text-accent">CREW INTAKE · OPEN</p>
            <h2 className="mt-4 text-[clamp(2rem,5vw,4rem)] font-bold">
              Line check starts <span className="phosphor">here</span>
            </h2>
            <p className="mt-4 max-w-lg text-sm text-muted-foreground">
              No hour minimum. One observed sector with a Standards pilot, then you&apos;re on the
              roster.
            </p>
          </div>
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
