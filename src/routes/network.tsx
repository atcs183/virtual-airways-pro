import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Page, SectionHead } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/network")({
  head: () => ({
    meta: [
      { title: "Route Network & Timetable — Meridian Virtual Airline" },
      {
        name: "description",
        content:
          "Meridian's seasonal timetable from London Heathrow and Boston Logan: 140 city pairs, real block times, bid windows every 14 days.",
      },
      { property: "og:title", content: "Route Network & Timetable — Meridian Virtual" },
      {
        property: "og:description",
        content: "Two hubs, 140 city pairs, real-world block times and a 14-day bid cycle.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/network" },
    ],
    links: [{ rel: "canonical", href: "/network" }],
  }),
  component: Network,
});

const HUBS = [
  { icao: "EGLL", city: "London Heathrow", legs: "86", note: "Primary hub · T3 stands" },
  { icao: "KBOS", city: "Boston Logan", legs: "41", note: "Secondary hub · Terminal E" },
  { icao: "OTHH", city: "Doha Hamad", legs: "13", note: "Focus city · long-haul turnarounds" },
];

const TIMETABLE = [
  ["MRD 118", "EGLL", "KBOS", "A339", "06h 55", "Daily", "OPEN"],
  ["MRD 244", "EGLL", "LOWW", "A20N", "02h 15", "Daily x2", "BID"],
  ["MRD 310", "EGLL", "LFPG", "B738", "01h 20", "Daily x4", "OPEN"],
  ["MRD 517", "OTHH", "VHHH", "B77W", "08h 05", "Mon Wed Fri", "FULL"],
  ["MRD 620", "KBOS", "CYYZ", "A20N", "01h 45", "Daily x3", "OPEN"],
  ["MRD 741", "EGLL", "OMDB", "B78X", "06h 45", "Daily", "BID"],
  ["MRD 902", "KBOS", "SBGR", "B78X", "09h 40", "Tue Thu Sun", "OPEN"],
  ["MRD 1180", "EGLL", "RJTT", "B77W", "13h 25", "Wed Sat", "OPEN"],
];

function Network() {
  return (
    <Page>
      <section className="relative overflow-hidden border-b border-border">
        <div className="grid-plate absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-[1400px] px-5 py-24 md:py-32">
          <p className="label-tag text-primary">SECTION 02 · NETWORK</p>
          <h1 className="h-display mt-6 max-w-4xl">
            Two hubs.
            <br />
            One-forty city pairs.
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            The timetable is rebuilt every northern season from published carrier data. Block times
            are real, equipment assignment is real, and the overnight rotations actually make sense
            on a duty clock.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20">
        <SectionHead index="HUBS" title="Where the metal sleeps" />
        <div className="grid gap-px bg-panel-line md:grid-cols-3">
          {HUBS.map((h) => (
            <motion.div
              key={h.icao}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="bg-background p-8"
            >
              <p className="font-display text-5xl font-bold text-primary">{h.icao}</p>
              <p className="mt-3 text-lg font-bold">{h.city}</p>
              <p className="label-tag mt-2">{h.note}</p>
              <p className="mt-6 font-mono text-xs text-accent">{h.legs} weekly departures</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-panel">
        <div className="mx-auto max-w-[1400px] px-5 py-20">
          <SectionHead
            index="TIMETABLE / S26"
            title="Departure board"
            intro="Claim a duty during the bid window, download the OFP, fly it within 14 days."
          />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse font-mono text-xs">
              <thead>
                <tr className="border-b border-panel-line text-left">
                  {["Flight", "From", "To", "Eq", "Block", "Frequency", "Status"].map((h) => (
                    <th
                      key={h}
                      className="py-3 pr-4 text-[11px] tracking-[0.2em] text-muted-foreground uppercase"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TIMETABLE.map((r) => (
                  <tr
                    key={r[0]}
                    className="border-b border-panel-line transition-colors last:border-0 hover:bg-background"
                  >
                    <td className="py-4 pr-4 text-primary">{r[0]}</td>
                    <td className="py-4 pr-4 text-foreground">{r[1]}</td>
                    <td className="py-4 pr-4 text-foreground">{r[2]}</td>
                    <td className="py-4 pr-4 text-muted-foreground">{r[3]}</td>
                    <td className="py-4 pr-4 tabular-nums text-muted-foreground">{r[4]}</td>
                    <td className="py-4 pr-4 text-muted-foreground">{r[5]}</td>
                    <td
                      className={`py-4 pr-4 ${r[6] === "FULL" ? "text-muted-foreground" : "text-accent"}`}
                    >
                      {r[6]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="label-tag mt-6">Extract of 140 published pairs · full board in the crew centre</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24">
        <div className="panel flex flex-col items-start gap-6 p-10 md:flex-row md:items-center md:justify-between md:p-14">
          <h2 className="max-w-lg text-[clamp(1.7rem,3.6vw,2.8rem)] font-bold">
            Want the whole board? It ships with your crew ID.
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
