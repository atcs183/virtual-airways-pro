import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Page, SectionHead } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Crew Intake — Apply to Meridian Virtual Airline" },
      {
        name: "description",
        content:
          "Crew intake is open at Meridian Virtual. No hour minimum, any sim platform. File an application, fly one observed sector, join the roster.",
      },
      { property: "og:title", content: "Crew Intake — Meridian Virtual Airline" },
      {
        property: "og:description",
        content: "No hour minimum, any sim. One observed sector and you're on the roster.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/join" },
    ],
    links: [{ rel: "canonical", href: "/join" }],
  }),
  component: Join,
});

const FAQ = [
  [
    "Is there an hour minimum?",
    "No. We take pilots who have never flown an IFR leg and pilots with four thousand logged hours. The observed sector tells us where to start you.",
  ],
  [
    "Do I need VATSIM or IVAO?",
    "Not to join. Offline flying counts for hours and rank. Network flying is required only for the Captain checkride.",
  ],
  [
    "Which sim do you support?",
    "MSFS 2020 and 2024, X-Plane 12, Prepar3D v5. The ACARS client is a single desktop app that reads whichever one you're running.",
  ],
  [
    "What is the activity requirement?",
    "One validated PIREP every 30 days. Leave of absence is granted on request, no reason needed.",
  ],
  [
    "Does any of this cost money?",
    "No. Meridian takes no payments, sells nothing and runs no premium tier.",
  ],
];

function Join() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Page>
      <section className="relative border-b border-border">
        <div className="grid-plate absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-[1400px] px-5 py-24 md:py-32">
          <p className="label-tag text-accent">SECTION 04 · CREW INTAKE — OPEN</p>
          <h1 className="h-display mt-6 max-w-4xl">Request a crew ID</h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Applications are reviewed by a Training Captain within 48 hours. You&apos;ll receive the
            Flight Operations Manual, an ACARS client key and a slot for your observed sector.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr]">
          <form
            className="panel p-8 md:p-10"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <p className="label-tag text-primary">FORM MRD-1 · APPLICATION</p>
            <div className="mt-8 space-y-6">
              {[
                { id: "callsign", label: "Preferred callsign / name", ph: "e.g. J. Renard" },
                { id: "network", label: "VATSIM / IVAO ID (optional)", ph: "1503992" },
                { id: "sim", label: "Primary simulator", ph: "MSFS 2024" },
                { id: "hours", label: "Approx. logged hours", ph: "220" },
              ].map((f) => (
                <div key={f.id}>
                  <label
                    htmlFor={f.id}
                    className="label-tag mb-2 block text-muted-foreground"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    placeholder={f.ph}
                    className="w-full border border-input bg-background px-4 py-3 font-mono text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-primary"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="why" className="label-tag mb-2 block text-muted-foreground">
                  Why Meridian
                </label>
                <textarea
                  id="why"
                  name="why"
                  rows={4}
                  placeholder="Tell the Standards desk what kind of flying you want to do."
                  className="w-full resize-none border border-input bg-background px-4 py-3 font-mono text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-8 w-full border border-primary bg-primary px-7 py-4 font-mono text-xs tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-transparent hover:text-primary"
            >
              Submit form MRD-1
            </button>
            <p className="label-tag mt-4 normal-case">
              Form is a demo — connect it to your crew centre or Discord webhook before launch.
            </p>
          </form>

          <div>
            <SectionHead index="INTAKE / FAQ" title="Before you file" />
            <div className="divide-y divide-panel-line border-y border-panel-line">
              {FAQ.map(([q, a], i) => (
                <div key={q}>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-display text-lg font-bold uppercase">{q}</span>
                    <span className="font-mono text-primary">{open === i ? "−" : "+"}</span>
                  </button>
                  {open === i && (
                    <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="panel mt-10 p-6">
              <p className="label-tag text-accent">OPS CONTACT</p>
              <p className="mt-3 font-mono text-sm text-foreground">
                standards@meridian.va
                <br />
                discord.gg/meridian-va
              </p>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
