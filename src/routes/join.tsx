import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Page, SectionHead } from "@/components/site/SiteChrome";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join Us — Apply to Fly for Saudia Virtual" },
      {
        name: "description",
        content:
          "Apply to Saudia Virtual: no hour minimums, any simulator, free forever. Applications reviewed within 48 hours. Mainline, cargo and charter divisions open.",
      },
      { property: "og:title", content: "Join Us — Saudia Virtual" },
      {
        property: "og:description",
        content: "No hour minimum, any simulator, reviewed within 48 hours. Apply today.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/join" },
      { property: "og:image", content: photos.makkah },
      { name: "twitter:image", content: photos.makkah },
    ],
    links: [{ rel: "canonical", href: "/join" }],
  }),
  component: Join,
});

const FAQ = [
  {
    q: "Do I need a minimum number of hours?",
    a: "No. Cadets start on domestic A320neo sectors and build up from there. If you can hold the centreline, you can fly with us.",
  },
  {
    q: "Which simulators are supported?",
    a: "MSFS 2020/2024, X-Plane 12 and Prepar3D v5+. The ACARS client supports all three.",
  },
  {
    q: "Is there an activity requirement?",
    a: "One flight every 60 days keeps your roster spot. Away for longer? Tell us in Discord and we'll hold it.",
  },
  {
    q: "Do I have to fly online?",
    a: "Never mandatory. VATSIM and IVAO sectors are encouraged and earn bonus points, but offline flights count identically.",
  },
  {
    q: "Does it cost anything?",
    a: "No. Saudia Virtual is free and always will be. We are a hobby community, not a business.",
  },
  {
    q: "Are you affiliated with Saudia?",
    a: "No. We are an independent flight-simulation group inspired by Saudi aviation, with no connection to Saudi Arabian Airlines.",
  },
];

const FIELDS = [
  { id: "name", label: "Full name", type: "text", ph: "Faisal Al-Harbi" },
  { id: "email", label: "Email address", type: "email", ph: "you@example.com" },
  { id: "discord", label: "Discord handle", type: "text", ph: "@callsign" },
  { id: "hours", label: "Approximate sim hours", type: "text", ph: "e.g. 120" },
] as const;

function Join() {
  const [sent, setSent] = useState(false);

  return (
    <Page>
      <section className="relative isolate overflow-hidden border-b border-border">
        <img
          src={photos.makkah}
          alt="Illuminated Makkah skyline at night"
          width={1200}
          height={800}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="deck-fade absolute inset-0" />
        <div className="relative mx-auto max-w-[1320px] px-5 py-28 md:py-36">
          <p className="arabic text-2xl">انضم إلى الطاقم</p>
          <h1 className="h-display mt-3 max-w-3xl">
            Join the crew.
            <br />
            <span className="gold-text">Intake is open.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Fill in the form below and we&rsquo;ll have your crew ID, livery pack and Discord roles
            ready within 48 hours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-24">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="surface p-8 md:p-10">
            <p className="eyebrow">Application · Form SVA-1</p>
            <h2 className="mt-3 text-3xl">Pilot intake</h2>
            {sent ? (
              <div className="mt-8 rounded-[var(--radius-lg)] border border-accent/50 bg-accent/10 p-7">
                <p className="arabic text-2xl">شكراً لك</p>
                <p className="mt-3 text-base text-foreground">
                  Application received. Watch your inbox and Discord DMs — the recruitment team
                  responds within 48 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-5 text-sm font-semibold text-accent underline underline-offset-4"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form
                className="mt-8 space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  {FIELDS.map((f) => (
                    <div key={f.id}>
                      <label
                        htmlFor={f.id}
                        className="text-[11px] font-bold tracking-[0.2em] text-muted-foreground uppercase"
                      >
                        {f.label}
                      </label>
                      <input
                        id={f.id}
                        name={f.id}
                        type={f.type}
                        required
                        placeholder={f.ph}
                        className="mt-2 w-full rounded-[var(--radius-md)] border border-border bg-input px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-accent"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label
                    htmlFor="division"
                    className="text-[11px] font-bold tracking-[0.2em] text-muted-foreground uppercase"
                  >
                    Preferred division
                  </label>
                  <select
                    id="division"
                    name="division"
                    className="mt-2 w-full rounded-[var(--radius-md)] border border-border bg-input px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
                  >
                    <option>Mainline Operations (SVA)</option>
                    <option>Saudia Cargo (SVC)</option>
                    <option>Al-Khaleej Charter (AKC)</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="about"
                    className="text-[11px] font-bold tracking-[0.2em] text-muted-foreground uppercase"
                  >
                    Tell us about your flying
                  </label>
                  <textarea
                    id="about"
                    name="about"
                    rows={4}
                    placeholder="Simulator, favourite aircraft, online network experience…"
                    className="mt-2 w-full resize-none rounded-[var(--radius-md)] border border-border bg-input px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-accent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-accent px-8 py-4 text-sm font-bold text-accent-foreground transition-transform hover:scale-[1.02]"
                >
                  Submit application
                </button>
                <p className="text-xs text-muted-foreground">
                  This demo form does not yet store submissions. Connect a backend to receive real
                  applications.
                </p>
              </form>
            )}
          </div>

          <div>
            <SectionHead eyebrow="Before you apply" title="Questions we get asked" align="left" />
            <div className="space-y-3">
              {FAQ.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-[var(--radius-lg)] border border-border bg-panel px-6 py-5"
                >
                  <summary className="cursor-pointer list-none text-base font-semibold text-foreground marker:hidden">
                    <span className="flex items-start justify-between gap-4">
                      {f.q}
                      <span className="text-accent transition-transform group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
