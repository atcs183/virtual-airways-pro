import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Page, SectionHead } from "@/components/site/SiteChrome";
import fleetImg from "@/assets/fleet-narrowbody.jpg";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Fleet & Type Ratings — Meridian Virtual Airline" },
      {
        name: "description",
        content:
          "Meridian's simulated certificate: A320neo, A330-900, 737-800, 787-10 and 777-300ER. Type specs, approved add-ons and the SOP set for each aircraft.",
      },
      { property: "og:title", content: "Fleet & Type Ratings — Meridian Virtual" },
      {
        property: "og:description",
        content: "Five types on the certificate, each with published SOPs and approved add-ons.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/fleet" },
    ],
    links: [{ rel: "canonical", href: "/fleet" }],
  }),
  component: Fleet,
});

const FLEET = [
  {
    type: "A20N",
    name: "Airbus A320neo",
    tail: "12 frames",
    role: "Short-haul backbone",
    range: "3,400 nm",
    seats: "180",
    addon: "Fenix A320 · iniBuilds A320neo",
    note: "Entry type for every new hire. European and domestic US turns, 1:10 to 3:30 block.",
  },
  {
    type: "B738",
    name: "Boeing 737-800",
    tail: "9 frames",
    role: "Short-haul alternate",
    range: "2,900 nm",
    seats: "174",
    addon: "PMDG 737-800",
    note: "Second narrowbody rating. Same rosters as the A20N, different flow deck and callouts.",
  },
  {
    type: "A339",
    name: "Airbus A330-900",
    tail: "6 frames",
    role: "Medium long-haul",
    range: "7,200 nm",
    seats: "287",
    addon: "iniBuilds A330-900",
    note: "First widebody upgrade. Transatlantic, ETOPS-180 planning required on the OFP.",
  },
  {
    type: "B78X",
    name: "Boeing 787-10",
    tail: "5 frames",
    role: "Long-haul",
    range: "6,430 nm",
    seats: "318",
    addon: "Kuro/Horizon 787 · iniBuilds",
    note: "Ultra-thin city pairs and overnight cargo-style repositioning legs.",
  },
  {
    type: "B77W",
    name: "Boeing 777-300ER",
    tail: "4 frames",
    role: "Flagship long-haul",
    range: "7,370 nm",
    seats: "368",
    addon: "PMDG 777-300ER",
    note: "Captain-rated only. Qatar, Hong Kong and São Paulo sectors from both hubs.",
  },
];

function Fleet() {
  return (
    <Page>
      <section className="relative border-b border-border">
        <img
          src={fleetImg}
          alt="Meridian narrowbody parked on a wet apron at dusk"
          width={1400}
          height={900}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="relative mx-auto max-w-[1400px] px-5 py-24 md:py-32">
          <p className="label-tag text-primary">SECTION 01 · CERTIFICATE</p>
          <h1 className="h-display mt-6 max-w-4xl">The fleet, by type</h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Five types, five SOP sets, one common philosophy: fly the aircraft the way its manual
            says. Ratings are earned in order — nobody starts on the triple.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20">
        <SectionHead
          index="AC / SPEC SHEET"
          title="Type list"
          intro="Approved add-ons are recommendations, not requirements — default aircraft are welcome on the narrowbody roster."
        />
        <div className="divide-y divide-panel-line border-y border-panel-line">
          {FLEET.map((a, i) => (
            <motion.article
              key={a.type}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="group grid gap-5 py-9 transition-colors hover:bg-panel md:grid-cols-[130px_1.1fr_1fr] md:gap-10 md:px-6"
            >
              <div>
                <p className="font-display text-4xl font-bold text-primary">{a.type}</p>
                <p className="label-tag mt-1">{a.tail}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">{a.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.note}</p>
              </div>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-3 font-mono text-[11px] tracking-widest uppercase">
                <div>
                  <dt className="text-muted-foreground">Role</dt>
                  <dd className="mt-1 text-foreground normal-case">{a.role}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Range</dt>
                  <dd className="mt-1 text-accent">{a.range}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Config</dt>
                  <dd className="mt-1 text-foreground">{a.seats} Y/J</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Approved add-on</dt>
                  <dd className="mt-1 text-foreground normal-case">{a.addon}</dd>
                </div>
              </dl>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-panel">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-5 py-16 md:grid-cols-3">
          {[
            ["LIVERY PACK", "Charcoal fuselage, phosphor cheatline. Available for all five types."],
            ["SIM SUPPORT", "MSFS 2020/2024, X-Plane 12, Prepar3D v5. Same SOPs on every platform."],
            ["HARDWARE", "No yoke requirement. Twist-stick pilots hold the same standard as anyone."],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="label-tag text-accent">{k}</p>
              <p className="mt-3 text-sm text-muted-foreground">{v}</p>
            </div>
          ))}
        </div>
      </section>
    </Page>
  );
}
