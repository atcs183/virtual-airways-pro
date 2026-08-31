import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Saudia Virtual" },
      {
        name: "description",
        content:
          "Privacy information for the Saudia Virtual flight simulation community, including VAMSYS and third-party services.",
      },
      { property: "og:title", content: "Privacy Policy — Saudia Virtual" },
      {
        property: "og:description",
        content: "How Saudia Virtual handles privacy and third-party services.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <Page>
      <main className="mx-auto max-w-[900px] px-5 py-24">
        <p className="eyebrow">Privacy</p>
        <h1 className="h-display mt-4">Privacy Policy</h1>
        <p className="mt-5 text-sm text-muted-foreground">Last updated: 31 August 2026</p>

        <div className="mt-12 space-y-10 text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-2xl text-foreground">1. About Saudia Virtual</h2>
            <p className="mt-4">
              Saudia Virtual is a flight-simulation community. This website provides information about
              the VA and links members to external services used for registration, login, flight
              tracking and community communications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-foreground">2. Information we may process</h2>
            <p className="mt-4">
              When you contact us directly, we may receive the information you choose to provide,
              such as your name, email address, VATSIM CID, Discord username or message contents.
              Website infrastructure may also process technical information needed to deliver and
              secure the site, such as IP address, request information and basic browser details.
            </p>
            <p className="mt-4">
              We do not use this website as the primary VA registration database. Membership and flight
              management are handled through external services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-foreground">3. External services</h2>
            <p className="mt-4">
              Our registration/login links may take you to VAMSYS. VAMSYS processes information under
              its own terms and privacy practices. Our Discord community is operated through Discord,
              which likewise processes account and communications data under Discord's own policies.
              VATSIM data is subject to VATSIM's own policies and systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-foreground">4. How information is used</h2>
            <p className="mt-4">
              Information supplied directly to Saudia Virtual is used only for legitimate community
              and operational purposes, including responding to enquiries, administering the VA,
              maintaining security, communicating with members and meeting applicable platform or
              network requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-foreground">5. Legal basis</h2>
            <p className="mt-4">
              Where GDPR or similar data-protection law applies, we rely on the legal basis appropriate
              to the activity. This may include legitimate interests for operating and securing the VA
              and its website, contractual necessity where relevant, and consent where consent is
              actually required for an optional activity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-foreground">6. Your rights</h2>
            <p className="mt-4">
              Depending on applicable law, you may have rights to request access to, correction of,
              restriction of or deletion of personal information, and to object to or withdraw consent
              for processing where consent is the legal basis. Requests can be made using the contact
              details below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-foreground">7. Data retention</h2>
            <p className="mt-4">
              We retain information only for as long as reasonably necessary for the purpose for which
              it was collected, to maintain operational records, resolve disputes, maintain security,
              or comply with legal or network requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-foreground">8. Contact</h2>
            <p className="mt-4">
              For privacy questions or requests, contact Saudia Virtual at
              <a
                className="ml-1 text-accent hover:underline"
                href="mailto:saudiavirtualva@gmail.com"
              >
                saudiavirtualva@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-foreground">9. Changes to this policy</h2>
            <p className="mt-4">
              We may update this policy when our services, third-party providers or applicable
              requirements change. The latest version will always be published on this page.
            </p>
          </section>
        </div>
      </main>
    </Page>
  );
}
