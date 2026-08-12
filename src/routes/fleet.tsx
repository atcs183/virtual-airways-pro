import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Page, SectionHead } from "@/components/site/SiteChrome";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Fleet — Saudia Virtual Aircraft & Type Ratings" },
      {
        name: "description",
        content:
          "The Saudia Virtual fleet: A320neo, A321XLR, A330-300, 787-9, 777-300ER and the 747-8F freighter. Specs, roles and recommended add-ons for MSFS and X-Plane.",
      },
      { property: "og:title", content: "Fleet — Saudia Virtual" },
      {
        property: "og:description",
        content:
          "Six types from the A320neo to the 747-8F freighter, each with recommended add-ons and SOPs.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/fleet" },
      { property: "og:image", content: photos.riyadhWide },
      { name: "twitter:image", content: photos.riyadhWide },
    ],
    links: [{ rel: "canonical", href: "/fleet" }],
  }),
  component: Fleet,
});

const FLEET = [
  {
    type: "A320",
    name: "Airbus A320",
    frames: "37",
    role: "Domestic & Gulf shuttle",
    range: "3,400 nm",
    seats: "168",
    addon: "Fenix A320",
    note: "The workhorse of the Kingdom. Jeddah–Riyadh runs every hour, plus Cairo, Dubai and Amman.",
  },
  {
    type: "A21N",
    name: "Airbus A321neo",
    frames: "37",
    role: "Thin long-thin routes",
    range: "4,700 nm",
    seats: "195",
    addon: "iniBuilds A321XLR",
    note: "Opens secondary European cities — Milan, Vienna, Manchester — without committing a widebody.",
  },
  {
    type: "A333",
    name: "Airbus A330-300",
    frames: "16",
    role: "Regional widebody & Hajj",
    range: "6,100 nm",
    seats: "298",
    addon: "iniBuilds A330",
    note: "Umrah and Hajj season heavy-lift between Jeddah, Madinah and the subcontinent.",
  },
  {
    type: "B789",
    name: "Boeing 787-9",
    frames: "32",
    role: "Long-haul mainline",
    range: "7,565 nm",
    seats: "298",
    addon: "Kuro/Horizon 787 · iniBuilds",
    note: "Transatlantic and Far East backbone. First widebody rating for most First Officers.",
  },
  {
    type: "B77W",
    name: "Boeing 777-300ER",
    frames: "14",
    role: "Flagship long-haul",
    range: "7,370 nm",
    seats: "394",
    addon: "PMDG 777-300ER",
    note: "Captain-rated only. Jeddah–New York, Riyadh–London and the Manila rotation.",
  },
  {
    type: "B78X",
    name: "Boeing 787-10",
    frames: "8",
    role: "Long-haul mainline",
    range: "6,330 nm",
    seats: "357",
    addon: "Asobo Boeing 787-10",
    note: "Transatlantic and long haul backbone. One of the biggest aircraft in the Saudia fleet!",
  },
];

function Fleet() {
  return (
    <Page>
      <section className="relative isolate overflow-hidden border-b border-border">
        <img
          src={photos.flightDeckMood}
          alt="Aerial view of a coastal city at dusk from an aircraft"
          width={1400}
          height={900}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="deck-fade absolute inset-0" />
        <div className="relative mx-auto max-w-[1320px] px-5 py-28 md:py-36">
          <p className="arabic text-2xl">الأسطول</p>
          <h1 className="h-display mt-3 max-w-3xl">
            Six types.
            <br />
            <span className="gold-text">One standard.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Ratings are earned in order — narrowbody, then widebody, then the flagship. Recommended
            add-ons are just that: default aircraft are welcome on every domestic roster.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-24">
        <SectionHead
          eyebrow="Type list"
          title="Aircraft on the certificate"
          intro="Every type ships with a Saudia Virtual livery pack and a written SOP set for MSFS, X-Plane 12 and P3D."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {FLEET.map((a, i) => (
            <motion.article
              key={a.type}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.06 }}
              className="surface p-8 transition-colors hover:border-accent/50"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-2xl">{a.name}</h3>
                <span className="font-display text-sm font-bold tracking-widest text-accent">
                  {a.type}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.note}</p>
              <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-5 text-sm">
                {[
                  ["Role", a.role],
                  ["Range", a.range],
                  ["Config", a.seats],
                  ["Frames", a.frames],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[11px] font-bold tracking-[0.2em] text-muted-foreground uppercase">
                      {k}
                    </dt>
                    <dd className="mt-1 text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-xs text-muted-foreground">
                Recommended add-on · <span className="text-accent">{a.addon}</span>
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-panel">
        <div className="mx-auto flex max-w-[1320px] flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-lg text-[clamp(1.6rem,3.2vw,2.4rem)]">
            Liveries, checklists and soundpacks ship with your crew ID.
          </h2>
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
