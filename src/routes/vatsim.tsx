import { createFileRoute } from "@tanstack/react-router";
import { Page, SectionHead } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/vatsim")({
  head: () => ({
    meta: [
      { title: "VATSIM Operations — Saudia Virtual" },
      {
        name: "description",
        content:
          "Saudia Virtual's public VATSIM information, callsign usage, membership and operational structure.",
      },
    ],
    links: [{ rel: "canonical", href: "https://saudiavia.org/vatsim" }],
  }),
  component: Vatsim,
});

function Vatsim() {
  return (
    <Page>
      <main className="mx-auto max-w-[1100px] px-5 py-24">
        <p className="eyebrow">Network operations</p>
        <h1 className="h-display mt-4">Saudia Virtual on VATSIM.</h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
          Saudia Virtual is built to encourage members to fly online and participate in the wider
          VATSIM community. This page provides the public VA information needed to understand our
          network operations and organizational structure.
        </p>

        <section className="mt-14">
          <SectionHead eyebrow="Identification" title="Virtual Airline information" align="left" />
          <div className="grid gap-6 md:grid-cols-3">
            <div className="surface p-7">
              <p className="text-[11px] font-bold tracking-[0.22em] text-accent uppercase">VA</p>
              <p className="mt-2 text-xl font-semibold">Saudia Virtual</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Flight-simulation virtual airline inspired by Saudi aviation.
              </p>
            </div>
            <div className="surface p-7">
              <p className="text-[11px] font-bold tracking-[0.22em] text-accent uppercase">ICAO callsign</p>
              <p className="mt-2 text-xl font-semibold">SVA</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Intended VA callsign prefix for Saudia Virtual network operations.
              </p>
            </div>
            <div className="surface p-7">
              <p className="text-[11px] font-bold tracking-[0.22em] text-accent uppercase">Hubs</p>
              <p className="mt-2 text-xl font-semibold">OEJN · OERK</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Jeddah and Riyadh are our two operational hubs.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <SectionHead eyebrow="Membership" title="Roster and administration" align="left" />
          <div className="surface p-8">
            <p className="text-base leading-relaxed text-muted-foreground">
              Membership registration and account administration are handled through VAMSYS. The VA
              website remains publicly accessible for essential organizational and operational
              information, while member account data is managed by the external membership platform.
            </p>
            <a
              href="https://vamsys.io/register/vsva"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              VAMSYS Registration →
            </a>
          </div>
        </section>

        <section className="mt-20">
          <SectionHead eyebrow="Operations" title="Public audit information" align="left" />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="surface p-7">
              <h3 className="text-xl">Flight logging</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Flights are logged and administered through the VA's membership platform. Relevant
                operational records can be supplied to VATSIM Virtual Airlines Department audit staff
                when requested.
              </p>
            </div>
            <div className="surface p-7">
              <h3 className="text-xl">Callsings &amp; network use</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Pilots are encouraged to use the VA callsign prefix consistently when flying on VATSIM.
                Any additional callsign ICAOs used by the VA will be maintained and provided to VATSIM
                as required.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Page>
  );
}
