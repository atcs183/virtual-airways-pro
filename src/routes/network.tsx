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
          "103 current Saudia destinations across 27 domestic and international markets, based on the August 2026 scheduled network.",
      },
      { property: "og:title", content: "Destinations — Saudia Virtual" },
      {
        property: "og:description",
        content: "100+ current Saudia destinations across domestic and international markets.",
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
    d: "The Red Sea gateway and major Saudia hub for domestic, regional and long-haul operations.",
    img: photos.jeddah,
  },
  {
    icao: "OERK",
    city: "Riyadh",
    name: "King Khalid International",
    d: "The capital hub with dense domestic service, Gulf connectivity and international long-haul flying.",
    img: photos.riyadh,
  },
];

const REGIONS = [
  {
    r: "Domestic Saudi Arabia",
    n: 27,
    cities: [
      "Abha",
      "Al Qaisumah / Hafr Al-Batin",
      "Al Ula",
      "Al Wajh",
      "Al-Baha",
      "Al-Jawf",
      "Arar",
      "Bisha",
      "Dammam",
      "Dawadmi",
      "Gassim",
      "Gurayat",
      "Ha'il",
      "Jeddah",
      "Jizan",
      "Medina",
      "Najran",
      "Neom",
      "Rafha",
      "Red Sea",
      "Riyadh",
      "Sharurah",
      "Ta'if",
      "Tabuk",
      "Turaif",
      "Wadi al-Dawasir",
      "Yanbu",
    ],
  },
  {
    r: "Middle East & Gulf",
    n: 11,
    cities: [
      "Bahrain",
      "Amman",
      "Kuwait City",
      "Salalah",
      "Doha",
      "Abu Dhabi",
      "Dubai",
      "Alexandria",
      "Cairo",
      "El Alamein",
      "Sharm el-Sheikh",
    ],
  },
  {
    r: "Europe",
    n: 22,
    cities: [
      "Vienna",
      "Nice",
      "Paris",
      "Frankfurt",
      "Munich",
      "Athens",
      "Mykonos",
      "Milan",
      "Rome",
      "Moscow",
      "Amsterdam",
      "Barcelona",
      "Madrid",
      "Málaga",
      "Geneva",
      "Zürich",
      "Antalya",
      "Bodrum",
      "Istanbul",
      "Birmingham",
      "London",
      "Manchester",
    ],
  },
  {
    r: "Africa",
    n: 17,
    cities: [
      "Algiers",
      "Constantine",
      "Oran",
      "Addis Ababa",
      "Nairobi",
      "Mauritius",
      "Agadir",
      "Casablanca",
      "Fes",
      "Marrakech",
      "Tangier",
      "Kano",
      "Enfidha",
      "Monastir",
      "Tunis",
      "Lagos",
      "Cotonou",
    ],
  },
  {
    r: "Asia Pacific",
    n: 24,
    cities: [
      "Dhaka",
      "Beijing Daxing",
      "Guangzhou",
      "Bengaluru",
      "Hyderabad",
      "Kochi",
      "Kozhikode",
      "Lucknow",
      "Mumbai",
      "New Delhi",
      "Denpasar",
      "Jakarta",
      "Tokyo",
      "Kuala Lumpur",
      "Malé",
      "Islamabad",
      "Karachi",
      "Lahore",
      "Multan",
      "Peshawar",
      "Manila",
      "Singapore",
      "Bangkok",
      "Phuket",
    ],
  },
  {
    r: "Americas",
    n: 3,
    cities: ["Toronto", "New York", "Washington"],
  },
];

const SHOWCASE = [
  { city: "Jeddah", code: "JED", img: photos.jeddah, note: "Major Red Sea hub" },
  { city: "Abha", code: "AHB", img: photos.abha, note: "Saudi highland destination" },
  { city: "Dubai", code: "DXB", img: photos.dubai, note: "Major Gulf international route" },
  { city: "Athens", code: "ATH", img: photos.athens, note: "European scheduled service" },
  { city: "Muscat", code: "MCT", img: photos.muscat, note: "Oman international service" },
  { city: "Delhi", code: "DEL", img: photos.delhi, note: "Major Indian market" },
  { city: "New York", code: "JFK", img: photos.newyork, note: "Flagship U.S. route" },
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
            100+ destinations.
            <br />
            <span className="gold-text">Real Saudia network.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            The network below mirrors the currently scheduled Saudia destination list, including
            domestic, regional, European, African, Asian and North American markets.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-24">
        <SectionHead eyebrow="Bases" title="Two hubs in the Kingdom" />
        <div className="grid gap-6 md:grid-cols-2">
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
            intro="Destination groups are based on the current Saudia scheduled network; seasonal destinations can vary by date."
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
        <SectionHead eyebrow="Featured routes" title="Real destinations worth flying" />
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
