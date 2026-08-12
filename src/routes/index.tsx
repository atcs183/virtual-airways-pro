import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Page, SectionHead } from "@/components/site/SiteChrome";
import { photos } from "@/lib/photos";
import flyadealAsset from "@/assets/flyadeal-a320.jpg.asset.json";
import heroAsset from "@/assets/saudia-a321.avif.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saudia Virtual — A Virtual Airline for the Spirit of Saudi Aviation" },
      {
        name: "description",
        content:
          "Saudia Virtual flies real-world Saudia schedules across 120+ destinations on MSFS, X-Plane 12 and P3D.Currently only the Mainline Airline is available but subsidiary airlines will be added as the VA grows.",
      },
      { property: "og:title", content: "Saudia Virtual — Passion for Saudi Arabia" },
      {
        property: "og:description",
        content:
          "Real-world schedules, three operating divisions and an active Discord community. Fly with us.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: photos.heroWing },
      { name: "twitter:image", content: photos.heroWing },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Saudia Virtual",
          description:
            "Flight simulation virtual airline inspired by Saudi Arabian aviation, operating real-world schedules across 120+ destinations.",
          url: "/",
        }),
      },
    ],
  }),
  component: Home,
});

const DIFFERENCE = [
  {
    t: "Real-World Sync",
    d: "Timetables mirror published Saudia operations — Like Hajj and Umrah season surges.",
  },
  {
    t: "Automated Tracking",
    d: "Using Vamsys, We are able to have very accurate tracking for every part of your flight from pushback to arrival!",
  },
  {
    t: "Cabin Immersion",
    d: "Arabic and English boarding announcements, Saudia-style cabin soundpacks and a full livery set for every fleet type.",
  },
  {
    t: "A Real Community",
    d: "An active Discord with dedicated pilots that try and help make the VA more active every day.",
  },
];

const DIVISIONS = [
  {
    t: "Mainline Operations",
    d: "Fly the flagship schedule from Jeddah, Riyadh and Madinah to 120+ cities across five continents.",
    img: photos.kingdomTower,
    tag: "SVA",
  },
  {
    t: "Saudia Cargo",
    d: "Coming soon",
    img: photos.cargo,
    tag: "SVA",
  },
  {
    t: "flyadeal",
    d: "Coming soon",
    img: flyadealAsset.url,
    tag: "FAD",
  },
];

const DESTINATIONS = [
  { city: "Jeddah", country: "Saudi Arabia", img: photos.jeddah },
  { city: "Riyadh", country: "Saudi Arabia", img: photos.riyadh },
  { city: "Madinah", country: "Saudi Arabia", img: photos.madinah },
  { city: "Abha", country: "Saudi Arabia", img: photos.abha },
  { city: "London", country: "United Kingdom", img: photos.london },
  { city: "New York", country: "United States", img: photos.newyork },
  { city: "Singapore", country: "Singapore", img: photos.singapore },
];

const MARQUEE = [
  "أهلاً وسهلاً",
  "PASSION FOR SAUDI ARABIA",
  "OEJN · JEDDAH",
  "FLY THE KINGDOM",
  "OERK · RIYADH",
  "SINCE 1945 IN SPIRIT",
];

function Home() {
  return (
    <Page>
      {/* HERO */}
      <section className="relative isolate min-h-[92vh] overflow-hidden">
        <img
          src={heroAsset.url}
          alt="Saudia Airbus A321 in green and gold livery in flight above clouds"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="deck-fade absolute inset-0" />
        <div className="dune-glow absolute inset-0" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-[1320px] flex-col justify-center px-5 py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <img
              src="/images/saudia_virtual.png"
              alt="Saudia Virtual"
              className="mb-5 h-auto w-[220px] object-contain md:w-[300px]"
            />
            <h1 className="h-display mt-4">
              Saudia Virtual
              <br />
              <span className="gold-text">Passion for the Kingdom</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Fly the full network — mainline, cargo and executive charter — from one home. Real
              schedules, honest tracking, and a community built for pilots who love the freedom of
              the flight deck.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                to="/network"
                className="rounded-full bg-accent px-8 py-4 text-sm font-bold text-accent-foreground shadow-[var(--glow-gold)] transition-transform hover:scale-[1.04]"
              >
                Explore the Network
              </Link>
              <Link
                to="/operations"
                className="border-b border-accent/50 pb-1 text-sm font-semibold text-foreground transition-colors hover:text-accent"
              >
                What makes us different →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FROM THE FLIGHT DECK */}
      <section className="mx-auto max-w-[1320px] px-5 py-28">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-border"
          >
            <img
              src={photos.terminal}
              alt="Traditional Saudi arcaded architecture lit at night"
              width={1400}
              height={900}
              loading="lazy"
              className="h-[420px] w-full object-cover"
            />
            <p className="arabic absolute bottom-5 left-6 text-xl">من قمرة القيادة</p>
          </motion.div>
          <div>
            <p className="eyebrow">From the flight deck</p>
            <h2 className="mt-4 text-[clamp(1.9rem,3.8vw,3rem)]">
              &ldquo;Positive rate, gear up.&rdquo;
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Welcome aboard. Saudia Virtual exists because the aviation of this region deserves
                to be simulated properly — the desert departures at dawn, the Hajj season pressure,
                the long overwater legs to Asia and the Americas.
              </p>
              <p>
                Whether you fly a 45-minute hop from Jeddah to Madinah or thirteen hours to Los
                Angeles, you&rsquo;ll find the same standard here: high-quality operations, a warm
                community, and realism that respects both the airline and the culture behind it.
              </p>
              <p className="font-semibold text-foreground">
                &ldquo;Come and help us build the most respected virtual airline in the Middle
                East.&rdquo;
              </p>
            </div>
            <p className="mt-6 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Chief Executive Officer · Saudia Virtual
            </p>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="mx-auto max-w-[1320px] px-5 py-28">
        <SectionHead
          eyebrow="Live network"
          title={
            <>
              Where to <span className="gold-text">next?</span>
            </>
          }
          intro="From the Red Sea coast to six continents — a preview of the cities on the current schedule."
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {DESTINATIONS.map((d) => (
            <motion.div
              key={d.city}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="group relative overflow-hidden rounded-[var(--radius-xl)] border border-border"
            >
              <img
                src={d.img}
                alt={`${d.city}, ${d.country}`}
                width={900}
                height={1100}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="deck-fade absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[11px] font-bold tracking-[0.22em] text-accent uppercase">
                  {d.country}
                </p>
                <p className="font-display mt-1 text-lg font-semibold">{d.city}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/network"
            className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            View the full network
          </Link>
        </div>
      </section>

      {/* THE DIFFERENCE */}
      <section className="border-y border-border bg-panel">
        <div className="mx-auto max-w-[1320px] px-5 py-28">
          <SectionHead
            eyebrow="Why pilots stay"
            title={
              <>
                The Saudia Virtual <span className="gold-text">difference.</span>
              </>
            }
            intro="Six reasons our pilots keep filing PIREPs long after the novelty of a new livery wears off."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DIFFERENCE.map((f, i) => (
              <motion.article
                key={f.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
                className="surface p-8 transition-colors hover:border-accent/50"
              >
                <span className="font-display text-sm font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl">{f.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className="mx-auto max-w-[1320px] px-5 py-28">
        <SectionHead
          eyebrow="Explore our operations"
          title="Three divisions. One crew ID."
          intro="Choose the flying that suits your week — and switch whenever you like."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {DIVISIONS.map((d) => (
            <motion.article
              key={d.t}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-[var(--radius-2xl)] border border-border"
            >
              <img
                src={d.img}
                alt={d.t}
                width={1000}
                height={700}
                loading="lazy"
                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="deck-fade absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <span className="rounded-full border border-accent/60 px-3 py-1 text-[11px] font-bold tracking-[0.2em] text-accent">
                  {d.tag}
                </span>
                <h3 className="mt-4 text-2xl">{d.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.d}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-border bg-panel py-5">
        <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span
              key={i}
              className="flex items-center gap-10 font-display text-sm font-semibold tracking-[0.28em] text-muted-foreground/70 uppercase"
            >
              {m}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* CONTACT / CTA */}
      <section className="mx-auto max-w-[1320px] px-5 pb-28">
        <div className="surface dune-glow overflow-hidden p-10 text-center md:p-20">
          <p className="arabic text-3xl">انضم إلينا</p>
          <h2 className="mt-4 text-[clamp(2rem,5vw,3.8rem)]">
            Your seat is <span className="gold-text">waiting.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
            Why wait? Join us today!
          </p>
          <Link
            to="/network"
            className="mt-9 inline-block rounded-full bg-accent px-9 py-4 text-sm font-bold text-accent-foreground transition-transform hover:scale-[1.04]"
          >
            Join Saudia Virtual
          </Link>
        </div>
      </section>
    </Page>
  );
}
