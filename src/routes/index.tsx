import { createFileRoute } from "@tanstack/react-router";

const WAITLIST_URL =
  "https://docs.google.com/forms/d/1eiOWltAx8TmFW2y72Od8tp6GuH8otc7RjMe7FY9SSvQ/edit";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lexicon — Professional fluency in Mandarin, Spanish & Hindi" },
      {
        name: "description",
        content:
          "Lexicon bridges the gap between a seal of biliteracy and true professional proficiency — medical, business, and finance terminology in Mandarin, Spanish, and Hindi. Join the waitlist.",
      },
      {
        property: "og:title",
        content: "Lexicon — Professional fluency in Mandarin, Spanish & Hindi",
      },
      {
        property: "og:description",
        content:
          "Learn the technical terminology your field actually runs on. Join the Lexicon waitlist.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Lexicon",
          description:
            "Professional-language training that takes bilingual speakers from working proficiency to technical fluency in Mandarin, Spanish, and Hindi.",
        }),
      },
    ],
  }),
  component: Landing,
});

function Wordmark({ className = "" }: { className?: string }) {
  return <span className={`wordmark ${className}`}>Lexicon</span>;
}

function CtaButton({
  children,
  variant = "navy",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "navy" | "cream";
  className?: string;
}) {
  const base =
    "group relative inline-flex items-center overflow-hidden rounded-xl px-6 py-3 text-[15px] font-semibold transition duration-200 active:scale-[0.98]";
  const tone =
    variant === "navy"
      ? "bg-primary text-primary-foreground hover:bg-primary-soft"
      : "bg-cream-soft text-primary hover:bg-cream";
  return (
    <a
      href={WAITLIST_URL}
      target="_blank"
      rel="noopener"
      className={`${base} ${tone} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-cream-soft/25 blur-md transition-transform duration-500 group-hover:translate-x-[320%]" />
    </a>
  );
}

const languages = [
  { name: "Mandarin", native: "中文" },
  { name: "Spanish", native: "Español" },
  { name: "Hindi", native: "हिन्दी" },
];

const faqs = [
  {
    q: "How is this different from Duolingo, Babbel, or Rosetta Stone?",
    a: "Those platforms teach you to travel. Lexicon teaches you to work. Every unit is built around the terminology of a specific field — clinical charting, financial reporting, trade journals — instead of general conversation.",
  },
  {
    q: "Do I need a certification already?",
    a: "No. Independent biliteracy and CEFR exams run roughly $20 to $195+ per sitting, and the prep for them is rarely field-specific. Lexicon makes the knowledge behind those exams accessible without gatekeeping it behind a testing fee.",
  },
  {
    q: "What level should I be at before starting?",
    a: "Lexicon is built for people who already hold a conversation — heritage speakers, seal-of-biliteracy holders, and anyone with a language listed on their resume who wouldn't rate themselves a 10 in a professional setting.",
  },
  {
    q: "Which fields are covered first?",
    a: "Medical terminology and business, economics, and finance terminology, in Mandarin, Spanish, and Hindi. More fields and languages follow based on what waitlist members ask for.",
  },
  {
    q: "Does it work without internet?",
    a: "Offline access is a founding priority. Our earliest interviews came from a medical brigade where translation tools failed for lack of signal, so core glossaries and drills are designed to work without a connection.",
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-cream-soft text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-cream-soft/85 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a
            href="#top"
            className="flex min-h-10 items-center rounded-md bg-primary px-4 py-1 text-cream transition-colors hover:bg-primary-soft"
            aria-label="Lexicon home"
          >
            <Wordmark className="text-3xl leading-none text-cream" />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
            <a href="#gap" className="hover:text-primary">
              The gap
            </a>
            <a href="#fields" className="hover:text-primary">
              Fields
            </a>
            <a href="#voices" className="hover:text-primary">
              Voices
            </a>
            <a href="#faq" className="hover:text-primary">
              FAQ
            </a>
          </nav>
          <a
            href={WAITLIST_URL}
            target="_blank"
            rel="noopener"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition duration-200 hover:bg-primary-soft active:scale-[0.98]"
          >
            Join waitlist
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-5">
        {/* HERO */}
        <section className="relative pt-16 pb-14 md:pt-24 md:pb-20">
          <div className="pointer-events-none absolute -top-24 right-0 -z-10 h-72 w-72 rounded-full bg-cream blur-3xl opacity-70" />
          <div className="max-w-3xl">
            <p className="rise eyebrow text-muted-foreground">
              (a) The professional fluency gap
            </p>
            <h1 className="mt-5 rise text-5xl leading-[1.02] font-extrabold tracking-tight text-balance text-primary md:text-6xl">
              You can order dinner.
              <br />
              <span className="relative inline-block">
                You can&apos;t close the{" "}
                <span className="relative">
                  audit.
                  <span
                    className="absolute inset-x-0 -bottom-1 h-2 origin-left bg-cream-deep"
                    style={{
                      animation:
                        "grow-x 700ms cubic-bezier(0.32,0.72,0,1) 700ms both",
                    }}
                  />
                </span>
              </span>
            </h1>
            <p className="mt-6 max-w-[52ch] rise text-lg leading-relaxed text-pretty text-muted-foreground">
              <Wordmark className="text-xl text-primary" /> carries you past everyday
              proficiency into the precise technical language of your field — medical,
              economics, and finance — in Mandarin, Spanish, and Hindi. You&apos;ll learn
              to communicate effectively in a language not native to you, in any role you
              need.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 rise">
              <CtaButton>Join the waitlist</CtaButton>
              <a
                href="#gap"
                className="text-[15px] font-semibold text-muted-foreground underline decoration-border underline-offset-4 hover:text-primary"
              >
                See how it bridges the gap
              </a>
            </div>
          </div>

          <div className="mt-14 rise">
            <p className="eyebrow text-muted-foreground">Now building for</p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {languages.map((l) => (
                <span
                  key={l.name}
                  className="flex items-center gap-2 rounded-full border border-border bg-cream px-4 py-2 text-sm font-medium text-primary"
                >
                  <span className="size-1.5 rounded-full bg-primary-soft" />
                  {l.name} · {l.native}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* GAP */}
        <section id="gap" className="border-t border-border py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <p className="eyebrow text-muted-foreground">(b) Two kinds of fluent</p>
              <h2 className="mt-4 text-3xl leading-tight font-extrabold tracking-tight text-balance text-primary">
                A seal of biliteracy isn&apos;t the whole story.
              </h2>
              <p className="mt-4 leading-relaxed text-pretty text-muted-foreground">
                A certificate proves you can hold a conversation. It says nothing about
                whether you can hold a meeting, read a trade journal, or interpret a
                medical document in your field&apos;s exact register — and the exams that
                certify it cost $20 to $195+ each time you sit one.
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-cream/50 p-6">
                  <p className="eyebrow text-muted-foreground">Working proficiency</p>
                  <p className="mt-3 text-lg font-semibold text-primary">
                    “The invoice is late.”
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="opacity-40">—</span> Small talk and daily errands
                    </li>
                    <li className="flex gap-2">
                      <span className="opacity-40">—</span> Roughly the right words, the
                      wrong precision
                    </li>
                    <li className="flex gap-2">
                      <span className="opacity-40">—</span> Stops at the front door of
                      the office
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
                  <p className="eyebrow text-primary-foreground/60">
                    Professional proficiency
                  </p>
                  <p className="mt-3 text-lg font-semibold">
                    “The receivable is 30 days past due.”
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
                    <li className="flex gap-2">
                      <span className="opacity-40">—</span> Field-specific terminology,
                      used correctly
                    </li>
                    <li className="flex gap-2">
                      <span className="opacity-40">—</span> Numbers, claims, and
                      compliance hold up
                    </li>
                    <li className="flex gap-2">
                      <span className="opacity-40">—</span> The difference that changes
                      your pay grade
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-sm italic text-muted-foreground">
                <Wordmark className="text-base text-primary" /> builds the bridge between
                the two — one term, one field, one language at a time.
              </p>
            </div>
          </div>
        </section>

        {/* FIELDS */}
        <section id="fields" className="border-t border-border py-16 md:py-20">
          <p className="eyebrow text-muted-foreground">
            (c) Built for the terminology used day to day
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-tight font-extrabold tracking-tight text-balance text-primary md:text-4xl">
            Trained on the language your industry actually runs on.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-border bg-cream-soft p-7 transition duration-300 hover:border-input hover:bg-cream">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-muted-foreground">Field 01</span>
                <span className="rounded-full bg-cream-deep/50 px-2.5 py-1 font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                  Medical
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold tracking-tight text-primary">
                Clinical terminology that holds in the room
              </h3>
              <p className="mt-3 max-w-[46ch] leading-relaxed text-pretty text-muted-foreground">
                From <span className="font-semibold text-primary">hypertension</span> to{" "}
                <span className="font-semibold text-primary">contralateral</span> — the
                working vocabulary of charts, consults, and patient notes, mapped across
                your language.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["edema", "prognosis", "biopsy", "dosage"].map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
            <article className="rounded-2xl border border-border bg-cream-soft p-7 transition duration-300 hover:border-input hover:bg-cream">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-muted-foreground">Field 02</span>
                <span className="rounded-full bg-cream-deep/50 px-2.5 py-1 font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                  Business &amp; Economics
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold tracking-tight text-primary">
                The vocabulary of the boardroom and the balance sheet
              </h3>
              <p className="mt-3 max-w-[46ch] leading-relaxed text-pretty text-muted-foreground">
                From <span className="font-semibold text-primary">amortization</span> to{" "}
                <span className="font-semibold text-primary">liquidity</span> — the
                phrases that carry a negotiation, a model, or a quarterly review.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["liability", "yield", "forecast", "equity"].map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </div>

          <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-border bg-cream/50 p-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="eyebrow text-muted-foreground">Meet Lexi</p>
              <p className="mt-3 max-w-[60ch] leading-relaxed text-pretty text-muted-foreground">
                <span className="font-semibold text-primary">Lexi</span>, our practice
                partner, runs the scenario with you — a patient intake, a client call, a
                quarterly review — and corrects the terminology in the moment, so the
                words land before you need them at work.
              </p>
            </div>
          </div>
        </section>

        {/* VOICES / TRUST */}
        <section id="voices" className="border-t border-border py-16 md:py-20">
          <p className="eyebrow text-muted-foreground">(d) Why we&apos;re building it</p>
          <div className="mt-8 grid gap-4 md:grid-cols-12">
            <blockquote className="rounded-2xl border border-border bg-cream/50 p-7 md:col-span-7">
              <p className="text-xl leading-relaxed text-pretty text-primary">
                “When I went on my medical brigade, I felt like I didn&apos;t know how to
                fully speak and communicate with our patients using my high school
                Spanish. We used Google Translate, but sometimes it didn&apos;t work — we
                had no service and were in the jungle.”
              </p>
              <footer className="mt-5 text-sm text-muted-foreground">
                Pre-med volunteer, medical brigade — rated her resume Spanish a 7 out
                of 10
              </footer>
            </blockquote>
            <div className="grid gap-4 md:col-span-5">
              <div className="rounded-xl border border-border bg-cream-soft p-5">
                <p className="text-lg font-extrabold tracking-tight text-primary">
                  Transparency
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Clear about what each track teaches and what it doesn&apos;t — no
                  fluency promises we can&apos;t back.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-cream-soft p-5">
                <p className="text-lg font-extrabold tracking-tight text-primary">
                  Innovation
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Terminology drilled in real workplace context, not isolated
                  flashcards.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-cream-soft p-5">
                <p className="text-lg font-extrabold tracking-tight text-primary">
                  Collaboration
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Built with working professionals and heritage speakers in each field.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-border py-16 md:py-20">
          <p className="eyebrow text-muted-foreground">(e) Questions</p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-tight font-extrabold tracking-tight text-balance text-primary">
            Before you join the waitlist
          </h2>
          <div className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-cream/40">
            {faqs.map((f) => (
              <details key={f.q} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-semibold text-primary">
                  {f.q}
                  <span className="shrink-0 font-mono text-lg text-muted-foreground transition duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[70ch] leading-relaxed text-pretty text-muted-foreground">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* WAITLIST CTA */}
        <section className="py-16 md:py-24">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-7 py-14 text-center md:px-12 md:py-20">
            <div className="pointer-events-none absolute -top-16 -left-16 size-64 rounded-full bg-cream/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 -bottom-20 size-72 rounded-full bg-cream/10 blur-3xl" />
            <div className="relative mx-auto max-w-2xl">
              <p className="eyebrow text-primary-foreground/50">Launching soon</p>
              <h2 className="mt-5 text-4xl leading-[1.05] font-extrabold tracking-tight text-balance text-primary-foreground md:text-5xl">
                Be in the first room.
                <br />
                Not the second.
              </h2>
              <p className="mx-auto mt-5 max-w-[46ch] text-lg leading-relaxed text-pretty text-primary-foreground/75">
                Founding members get early access and help decide which fields come next.
                Mandarin, Spanish, and Hindi — first.
              </p>
              <CtaButton variant="cream" className="mt-8 px-8 py-4 text-base">
                Join the waitlist
              </CtaButton>
              <p className="mt-4 font-mono text-[11px] tracking-widest uppercase text-primary-foreground/40">
                Takes 30 seconds · No spam
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex min-h-9 items-center rounded-md bg-primary px-3 py-1">
              <Wordmark className="text-2xl leading-none text-cream" />
            </span>
            <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
              professional fluency
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Mandarin · Spanish · Hindi
          </p>
        </div>
      </footer>

      <div className="sticky bottom-0 z-40 border-t border-border bg-cream-soft/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <p className="hidden text-sm font-medium text-primary sm:block">
            Bridge the gap to <span className="font-semibold">professional fluency.</span>
          </p>
          <a
            href={WAITLIST_URL}
            target="_blank"
            rel="noopener"
            className="ml-auto rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition duration-200 hover:bg-primary-soft active:scale-[0.98]"
          >
            Join the waitlist
          </a>
        </div>
      </div>
    </div>
  );
}
