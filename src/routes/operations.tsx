import { createFileRoute } from "@tanstack/react-router";
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
          "How Saudia Virtual flies: operations standards, ACARS flight tracking and human review.",
      },
      { property: "og:title", content: "Operations — Saudia Virtual" },
      {
        property: "og:description",
        content: "Operations standards, ACARS tracking and the training framework explained.",
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
    t: "SOP Development",
    d: "Our formal SOPs are still being developed. We are building them around realistic Saudia procedures before publishing them to pilots.",
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
    </Page>
  );
}
