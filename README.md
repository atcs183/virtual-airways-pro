# Precision Flight Deck

You are designing an Awwwards-caliber marketing website. The single most important rule:




This site must look like it was made FOR THIS BUSINESS AND NO OTHER.**

A driving range and a card store should share ZERO visual DNA — different palettes, different

typography, different layout logic, different motion language, different section structures.

If your output could be reskinned for an unrelated business by swapping copy, you have failed.




============================================================

BUSINESS BRIEF  (← edit only this block per project)

============================================================

- Business link:        N/A

- Niche / category:  virtual airline for flight simulation

- One-line value prop:  virtual airline

- Tone:    precise and techincal

- Primary action: look professional to attract people inside the VA

============================================================




============================================================

STEP 1 — NICHE RESEARCH (do this BEFORE writing any code)

============================================================

Before touching styles.css or any component, do the following and state your conclusions

in the chat in 4–6 bullets so the user can see your reasoning:




1. Identify 3–5 best-in-class real-world reference sites in this exact niche (not generic

   "good websites" — actual leaders or award-winners in THIS category). Examples:

     - Driving range / golf  → Topgolf, Five Iron Golf, PGA Tour, indie golf clubs, Malbon

     - Card / hobby shop     → Card Kingdom, TCGplayer, Magic: The Gathering, Mondo, Kinokuniya

     - Restaurant fine dining → Eleven Madison Park, Noma, Atomix

     - HVAC / trades         → Sila, local premium contractors, Mr. Cool

     - SaaS                  → Linear, Vercel, Stripe, Resend

2. From those references, extract the VISUAL CONVENTIONS of the category:

     - What palette does this category actually use? (Golf → fairway greens, sand, sky.

       Hobby/card shops → saturated collectible-pack energy, foil holographics, retro arcade.

       Fine dining → ink/cream/ember. HVAC → steel + safety accent. NEVER copy another

       niche's palette.)

     - What typography feels native? (Sports → wide condensed athletic sans. Card shops →

       display serif + pixel/arcade or hand-drawn. Luxury → editorial serif. Tech → geometric

       mono.)

     - What layout patterns / interactions are expected? (Sports → stat blocks, big numbers,

       scoreboard energy. Card shops → grid of products, rarity badges, set-list browsing,

       trading-card hover flips. Restaurants → menu as the hero. SaaS → product screenshots.)

3. Now INVERT generic AI defaults: list 3 things you will deliberately NOT do because they

   would make this site feel generic ("no dark cinematic particle hero on the card shop —

   that's a tech-startup trope," etc.).




Only after this brief is written do you start building.




============================================================

STEP 2 — PICK A VISUAL ARCHETYPE (commit to ONE)

============================================================

Choose the archetype that fits this specific niche. Do NOT default to the same one every

time. Rotate honestly based on the brief. Each archetype implies a DIFFERENT palette,

type system, motion language, and layout grammar:




  A. CINEMATIC DARK            — near-black canvas, oversized display type, particle/WebGL

                                 hero, restrained accent. Fits: luxury, tech, agencies,

                                 nightlife, fine dining. DO NOT use for sports, kids,

                                 hobby/retail, trades, or anything daytime-energetic.




  B. EDITORIAL / MAGAZINE      — cream or paper background, large serif headlines, ruled

                                 lines, pull quotes, asymmetric column grids, archival

                                 photography. Fits: restaurants, wineries, law, finance,

                                 wellness, real estate.




  C. SPORT / KINETIC           — high-contrast, saturated team-style accent, wide condensed

                                 athletic sans (Druk-wide, Anton, Tungsten), big number

                                 readouts, scoreboard panels, action photography, motion

                                 that feels like broadcast lower-thirds. Fits: driving

                                 range, gyms, esports, sports bars, outdoor brands.




  D. RETRO / COLLECTOR / PLAYFUL — saturated pop palette (multi-color, not monochrome),

                                 mixed type (display serif + arcade/pixel + hand-drawn),

                                 sticker/badge UI, trading-card hover flips, tactile

                                 textures (foil, holographic, paper). Fits: card/board

                                 game shops, comics, toy stores, indie record shops, candy.




  E. INDUSTRIAL / UTILITY      — steel grays, blueprint grids, ANSI-style mono labels,

                                 spec-sheet layouts, safety-color accent. Fits: HVAC,

                                 plumbing, manufacturing, automotive, construction.




  F. SOFT / ORGANIC            — warm neutrals, soft serif + humanist sans, rounded

                                 shapes, generous whitespace, gentle motion. Fits:

                                 skincare, wellness, childcare, boutique hospitality.




  G. BRUTALIST / EDITORIAL-LOUD — raw HTML aesthetic, system fonts or stark grotesks,

                                 hard borders, no shadows, single jarring accent. Fits:

                                 art galleries, music labels, fashion drops.




If none fit cleanly, invent a hybrid — but JUSTIFY the choice in chat in one sentence

tied to the niche. The archetype determines everything downstream.




============================================================

STEP 3 — STRUCTURE TO THE NICHE

============================================================

Map sections to what THIS business actually needs (~6–8 sections):

- Driving range → Hero, Bays/Tech, Pricing & Memberships, Food & Drink, Events/Parties, Visit, Book a Bay

- Card/board shop → Hero, New Arrivals, Singles Search, Events/Tournaments, Buylist/Sell to us, Community, Visit

- Restaurant → Hero, Philosophy, Menu, Chef, Reservations, Visit, Press

- Service trade → Hero, Services, Process, Service Area, Trust/Licenses, Pricing/Quote, FAQ, Contact

- Retail/e-comm → Hero, Featured collection, Lookbook, Grid, Story, Newsletter

- SaaS → Hero, Problem, Capabilities, How it works, Integrations, Proof, Pricing, CTA

- Studio → Hero, Manifesto, Capabilities, Selected work, Process, Team, Contact

- Pro services → Hero, Practice areas, Approach, Bios, Results, Insights, Contact




Section names, copy, and CTAs must use the actual vocabulary of the niche

("Reserve a Bay" not "Get Started"; "Add to Binder" not "Buy Now" if appropriate).




============================================================

STEP 4 — CRAFT BAR (apply within the chosen archetype)

============================================================

Whichever archetype you chose, hit these craft markers — but EXPRESSED IN THAT ARCHETYPE'S

LANGUAGE, not in a fixed style:




- Distinctive type pairing native to the niche. Never default to Inter+Poppins. Never

  reuse the same pairing across two different builds.

- ONE committed accent palette derived from the niche research. Never default to purple

  gradients on white, and never default to "near-black + single warm accent" unless

  archetype A was chosen.

- A signature hero treatment appropriate to the archetype. WebGL particles are ONE option

  (archetype A); other valid heroes include: full-bleed editorial photo with serif overlay

  (B), kinetic stat-counter / video loop of the activity (C), animated trading-card stack

  or sticker collage (D), blueprint schematic / animated SVG diagram (E), soft looping

  gradient + product macro (F), raw type-only marquee (G).

- Scroll choreography that matches the archetype (cinematic pinning ≠ magazine column

  scroll ≠ sport broadcast wipes ≠ playful sticker pop-ins).

- Asymmetric, intentional layout. Off-grid meta labels where they suit the archetype

  (section indices for A/G, page numbers for B, jersey-style numerals for C, set codes

  for D, part numbers for E).

- Micro-details: custom cursor only if archetype supports it, magnetic CTA, marquee strip

  with niche vocabulary (menu items / set names / service tags / yardages), oversized

  footer wordmark.




============================================================

ANTI-PATTERNS — DO NOT SHIP

============================================================

- Reusing the same hero treatment, palette, or archetype across unrelated niches.

  Any technique (WebGL particles, editorial photo, kinetic stats, sticker collage,

  blueprint SVG, etc.) is fair game IF Step 2 justifies it for this specific business.

  The failure isn't using a particle hero — it's reaching for it by default.

- Default shadcn-blue buttons. Rounded-2xl 3-card feature grids with lucide icons.

- Purple→pink gradients on white. Glassmorphism by default.

- Two CTAs in the hero — exactly one primary action.

- Stock-photo placeholders. Generate or describe imagery specific to the niche.

- Emoji icons. Generic "Get started / Learn more" copy.

- "Trusted by [logo wall]" unless the brief calls for it.

- Recycling the previous project's palette, fonts, or section structure.




============================================================

TECH REQUIREMENTS

============================================================

- React + TanStack Start (current Lovable template).

- Tailwind v4 with semantic tokens in src/styles.css using oklch (background, foreground,

  primary, accent, muted, plus archetype-appropriate gradients/shadows). Components

  reference tokens, never hex.

- three.js ONLY if the chosen archetype/hero calls for it; lazy-load client-side.

- framer-motion for choreography; gsap only if scroll pinning genuinely needs it.

- Responsive: clamp() for fluid type; lighter fallback for any heavy WebGL on mobile.

- Accessibility: respect prefers-reduced-motion. Semantic HTML. Single H1. Per-route

   + meta + OG tailored to the business.

- SEO: separate routes per major section (not hash anchors) with unique metadata.




============================================================

DELIVERABLE

============================================================

1. A 4–6 bullet "niche brief" in chat (Step 1 + chosen archetype + chosen palette/type

   pairing with reasoning).

2. A complete production-quality multi-page site with voice-driven copy specific to the

   niche — no lorem, no generic CTA copy.

3. A short post-build note listing fonts, palette tokens, and assets the owner should

   swap in (real photos, menu PDFs, product photography, etc.).

```

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://virtual-airways-pro.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3890de78-d475-44a0-9b9c-655cf48c4e25).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
