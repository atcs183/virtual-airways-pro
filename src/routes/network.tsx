import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Page, SectionHead } from "@/components/site/SiteChrome";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/network")({
  head: () => ({
    meta: [
      { title: "Destinations — The Saudia Virtual Route Network" },
      {
        name: "description",
        content:
          "39+ destinations across six continents from hubs at Jeddah (OEJN), Riyadh (OERK) and Madinah (OEMA). Explore the Saudia Virtual route network.",
      },
      { property: "og:title", content: "Destinations — Saudia Virtual" },
      {
        property: "og:description",
        content: "Three hubs, six continents, 39+ cities on the current schedule.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/network" },
      { property: "og:image", content: photos.jeddah },
      { name: "twitter:image", content: photos.jeddah },
    ],
    links: [{ rel: "canonical", href: "/network" }],
  }),
  component: Network,
});

const HUBS = [
  {
    icao: "OEJN",
    city: "Jeddah",
    name: "King Abdulaziz International",
    d: "The Red Sea gateway and pilgrim hub. Long-haul departures west and the whole cargo operation.",
    img: photos.jeddah,
  },
  {
    icao: "OERK",
    city: "Riyadh",
    name: "King Khalid International",
    d: "Capital base for business traffic — dense Gulf shuttle plus flagship 777 services east.",
    img: photos.riyadh,
  },
  {
    icao: "OEMA",
    city: "Madinah",
    name: "Prince Mohammad bin Abdulaziz",
    d: "Umrah and Hajj season focus city with seasonal widebody surges from Asia and North Africa.",
    img: photos.madinah,
  },
];

const REGIONS = [
  {
    r: "Domestic Kingdom",
    n: 7,
    cities: ["Jeddah", "Riyadh", "Madinah", "Dammam", "Abha", "Tabuk", "Gassim"],
  },
  {
    r: "Middle East & Levant",
    n: 8,
    cities: ["Dubai", "Doha", "Muscat", "Kuwait", "Amman", "Beirut", "Cairo", "Bahrain"],
  },
  {
    r: "Europe",
    n: 8,
    cities: ["London", "Paris", "Frankfurt", "Milan", "Madrid", "Geneva", "Athens", "Istanbul"],
  },
  {
    r: "Asia Pacific",
    n: 8,
    cities: [
      "Singapore",
      "Delhi",
      "Jakarta",
      "Manila",
      "Kuala Lumpur",
      "Dhaka",
      "Karachi",
      "Colombo",
    ],
  },
  {
    r: "Africa",
    n: 6,
    cities: ["Khartoum", "Nairobi", "Addis Ababa", "Casablanca", "Tunis", "Lagos"],
  },
  {
    r: "Americas",
    n: 5,
    cities: ["New York", "Washington", "Toronto", "Los Angeles", "São Paulo"],
  },
];

const SHOWCASE = [
  { city: "Makkah region", code: "JED", img: photos.makkah, note: "The Umrah and Hajj corridor" },
  { city: "Abha", code: "AHB", img: photos.abha, note: "Highland approach at 6,800 ft AMSL" },
  { city: "Dubai", code: "DXB", img: photos.dubai, note: "Six daily Gulf shuttle rotations" },
  { city: "Athens", code: "ATH", img: photos.athens, note: "Seasonal summer A321XLR service" },
  { city: "Muscat", code: "MCT", img: photos.muscat, note: "Coastal Gulf hop, 90 minutes block" },
  { city: "Delhi", code: "DEL", img: photos.delhi, note: "Nightly 787-9 subcontinent service" },
  { city: "New York", code: "JFK", img: photos.newyork, note: "Flagship 777-300ER transatlantic" },
];

function Network() {
  return (
    <Page>
      <section className="relative isolate overflow-hidden border-b border-border">
        <img
          src={photos.jeddah}
          alt="Jeddah, Saudi Arabia"
          width={1400}
          height={900}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="deck-fade absolute inset-0" />
        <div className="relative mx-auto max-w-[1320px] px-5 py-28 md:py-36">
          <p className="arabic text-2xl">الوجهات</p>
          <h1 className="h-display mt-3 max-w-3xl">
            39+ cities.
            <br />
            <span className="gold-text">Six continents.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            The schedule follows real-world Saudia operations, with seasonal Hajj and Umrah capacity
            layered on top of the year-round network.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-24">
        <SectionHead eyebrow="Bases" title="Three hubs in the Kingdom" />
        <div className="grid gap-6 md:grid-cols-3">
          {HUBS.map((h) => (
            <motion.article
              key={h.icao}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group overflow-hidden rounded-[var(--radius-2xl)] border border-border bg-panel"
            >
              <div className="relative">
                <img
                  src={h.img}
                  alt={`${h.city}, Saudi Arabia`}
                  width={900}
                  height={600}
                  loading="lazy"
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="font-display absolute top-4 left-4 rounded-full bg-background/80 px-3 py-1.5 text-xs font-bold tracking-widest text-accent">
                  {h.icao}
                </span>
              </div>
              <div className="p-7">
                <h3 className="text-xl">{h.city}</h3>
                <p className="mt-1 text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  {h.name}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{h.d}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-panel">
        <div className="mx-auto max-w-[1320px] px-5 py-24">
          <SectionHead
            eyebrow="Coverage"
            title="The network by region"
            intro="Counts reflect the current published schedule. Charter pilots may operate outside it entirely."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REGIONS.map((r) => (
              <div key={r.r} className="surface p-7">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg">{r.r}</h3>
                  <span className="font-display text-2xl font-semibold text-accent">{r.n}</span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {r.cities.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-24">
        <SectionHead eyebrow="Featured legs" title="Worth blocking out an evening for" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SHOWCASE.map((s) => (
            <motion.div
              key={s.code}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-[var(--radius-xl)] border border-border"
            >
              <img
                src={s.img}
                alt={s.city}
                width={900}
                height={1100}
                loading="lazy"
                className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="deck-fade absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[11px] font-bold tracking-[0.22em] text-accent uppercase">
                  {s.code}
                </p>
                <p className="font-display mt-1 text-lg font-semibold">{s.city}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/fleet"
            className="rounded-full bg-accent px-8 py-4 text-sm font-bold text-accent-foreground transition-transform hover:scale-[1.04]"
          >
            See the fleet
          </Link>
        </div>
      </section>
    </Page>
  );
}
