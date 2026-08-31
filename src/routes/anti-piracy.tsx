import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/anti-piracy")({
  head: () => ({
    meta: [
      { title: "Software & Copyright Policy — Saudia Virtual" },
      {
        name: "description",
        content:
          "Saudia Virtual policy on software licensing, piracy, copyright-protected material and enforcement.",
      },
    ],
    links: [{ rel: "canonical", href: "https://saudiavia.org/anti-piracy" }],
  }),
  component: AntiPiracy,
});

function AntiPiracy() {
  return (
    <Page>
      <main className="mx-auto max-w-[900px] px-5 py-24">
        <p className="eyebrow">Compliance</p>
        <h1 className="h-display mt-4">Software & Copyright Policy</h1>
        <p className="mt-5 text-sm text-muted-foreground">Last updated: 31 August 2026</p>

        <div className="mt-12 space-y-10 text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-2xl text-foreground">1. Proper licensing</h2>
            <p className="mt-4">
              Saudia Virtual requires all software used by members, staff and designated community
              resources to be properly licensed and used in accordance with the applicable licence
              agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-foreground">2. What we consider software piracy</h2>
            <p className="mt-4">
              Software piracy means using software contrary to its licence, whether deliberate or
              unintentional. This includes unauthorised copies, cracks, licence circumvention and any
              other use that violates the rights or terms of the software owner.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-foreground">3. Prohibition</h2>
            <p className="mt-4">
              The use of pirated software is strictly forbidden in connection with Saudia Virtual.
              Members must not use the VA, its website or its community resources to distribute,
              request, recommend or facilitate pirated software or copyright-protected material without
              authorization from the rights holder.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-foreground">4. Enforcement</h2>
            <p className="mt-4">
              A member found deliberately and intentionally using pirated software may be removed from
              Saudia Virtual immediately. Where the member is also a VATSIM member, Saudia Virtual will
              notify VATSIM of the violation where required.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-foreground">5. Licence familiarity</h2>
            <p className="mt-4">
              Members and staff are responsible for understanding the licences attached to the software
              they use. Where a licence agreement was not supplied with software, the user should obtain
              the applicable terms from the vendor before using or distributing that software.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-foreground">6. Third-party software</h2>
            <p className="mt-4">
              Any software released by Saudia Virtual to third parties should normally include an
              appropriate licence agreement. The VA strongly discourages distributing or relying on
              software that has no identifiable licence terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-foreground">7. Copyright infringement notices</h2>
            <p className="mt-4">
              If Saudia Virtual receives a notice alleging copyright, trademark or patent infringement,
              including allegations involving piracy facilitated through the VA or its community, the VA
              will notify the VATSIM Virtual Airlines Department Director and Assistant Director in
              writing within 30 days where the matter falls under VATSIM's Partner requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-foreground">8. Cooperation</h2>
            <p className="mt-4">
              Saudia Virtual will cooperate with reasonable requests concerning licensing and copyright
              compliance. VATSIM notification does not provide immunity from any administrative action
              that VATSIM may consider appropriate.
            </p>
          </section>
        </div>
      </main>
    </Page>
  );
}
