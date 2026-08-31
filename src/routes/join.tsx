import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Page } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join Saudia Virtual" },
      {
        name: "description",
        content: "Join Saudia Virtual through our VAMSYS registration system.",
      },
    ],
    links: [{ rel: "canonical", href: "https://saudiavia.org/join" }],
  }),
  component: Join,
});

function Join() {
  const [consented, setConsented] = useState(false);

  return (
    <Page>
      <main className="mx-auto max-w-[820px] px-5 py-24">
        <p className="eyebrow">Recruitment</p>
        <h1 className="h-display mt-4">Join Saudia Virtual.</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Registration is handled securely through VAMSYS. Before continuing, please review how
          Saudia Virtual may process information you provide directly to us.
        </p>

        <section className="surface mt-10 p-7 md:p-9">
          <label className="flex items-start gap-4">
            <input
              type="checkbox"
              checked={consented}
              onChange={(e) => setConsented(e.target.checked)}
              className="mt-1 h-4 w-4 accent-[hsl(var(--accent))]"
            />
            <span className="text-sm leading-relaxed text-muted-foreground">
              I have reviewed the Saudia Virtual{" "}
              <a href="/privacy" className="font-semibold text-accent hover:underline">
                Privacy Policy
              </a>{" "}
              and consent to Saudia Virtual collecting and using information I provide directly for
              legitimate VA administration, communication, security and network-compliance purposes.
            </span>
          </label>

          <a
            href="https://vamsys.io/register/vsva"
            target="_blank"
            rel="noreferrer"
            aria-disabled={!consented}
            onClick={(e) => {
              if (!consented) e.preventDefault();
            }}
            className={`mt-7 inline-flex rounded-full px-8 py-4 text-sm font-bold transition-transform ${
              consented
                ? "bg-accent text-accent-foreground hover:scale-[1.03]"
                : "pointer-events-auto cursor-not-allowed bg-muted text-muted-foreground"
            }`}
          >
            Continue to VAMSYS Registration →
          </a>
        </section>
      </main>
    </Page>
  );
}
