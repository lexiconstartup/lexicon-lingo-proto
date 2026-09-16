import { createFileRoute } from "@tanstack/react-router";

const WAITLIST_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdrSh-ZjErc7eXnT2dJvvaAS7Yd27UriziyFFvoiBxfsFzVVg/viewform?usp=dialog";
const WAITLIST_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdrSh-ZjErc7eXnT2dJvvaAS7Yd27UriziyFFvoiBxfsFzVVg/viewform?embedded=true";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lexicon — Speak confidently in any professional setting" },
      {
        name: "description",
        content:
          "Lexicon turns the language you already speak into the language your profession demands — industry terminology, professional tone, and real‐world communication in Hindi, Mandarin, and Spanish. Join early access.",
      },
      {
        property: "og:title",
        content: "Lexicon — Speak confidently in any professional setting",
      },
      {
        property: "og:description",
        content:
          "Bridge the gap between conversational fluency and professional fluency. Join the Lexicon early access list.",
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
            "AI‐powered professional-language platform that bridges conversational fluency and professional fluency in Hindi, Mandarin, and Spanish.",
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
  { name: "Hindi", native: "हिन्दी" },
  { name: "Mandarin", native: "中文" },
  { name: "Spanish", native: "Español" },
];

const painPoints = [
  "“I understand the language, but I don’t know the professional vocabulary.”",
  "“I know what I want to say, but I’m not sure how to say it professionally.”",
  "“I translate from English in my head instead of speaking naturally.”",
  "“I’m afraid the wrong wording will make me sound less knowledgeable than I am.”",
];

const values = [
  {
    title: "Industry‐specific",
    body: "Learn the terminology actually used in your profession — not generic textbook vocabulary.",
  },
  {
    title: "Context‐aware",
    body: "Understand not only what to say, but how professionals naturally say it in meetings, interviews, presentations, and everyday work.",
  },
  {
    title: "Built by students, for what comes next",
    body: "We’re students preparing to enter a multilingual professional world ourselves. We’re building the tool we wish existed before stepping into internships, careers, research, healthcare, business, engineering, and beyond.",
  },
];

const steps = [
  {
    n: "1",
    title: "Choose your language and profession",
    body: "Select your language and the field you want to communicate in.",
  },
  {
    n: "2",
    title: "Learn through real professional scenarios",
    body: "Practice vocabulary, conversations, meetings, interviews, presentations, and profession‐specific situations.",
  },
  {
    n: "3",
    title: "Speak with confidence",
    body: "Get AI‐powered explanations, professional rewrites, terminology, and contextual feedback designed around how your industry actually communicates.",
  },
];

const benefits = [
  "Profession‐specific vocabulary",
  "Real‐world workplace communication",
  "Hindi, Mandarin and Spanish at launch",
  "AI‐powered contextual learning",
  "Built around your career, not a textbook",
];

const faqs = [
  {
    q: "How is this different from Duolingo, Babbel, or Rosetta Stone?",
    a: "Those platforms teach you to travel. Lexicon teaches you to work. Every unit is built around the terminology and tone of a specific field — meetings, interviews, clinical charting, financial reporting — instead of general conversation.",
  },
  {
    q: "Who is Lexicon for?",
    a: "Anyone who already speaks Hindi, Mandarin, or Spanish in everyday life but wants to use it professionally — heritage speakers, bilingual students, and working professionals preparing for multilingual workplaces.",
  },
  {
    q: "Which languages and fields are available at launch?",
    a: "The initial launch focuses on Hindi, Mandarin, and Spanish, across professional fields like healthcare, business, and finance — with more languages and professions to follow.",
  },
  {
    q: "How does the technology work?",
    a: "Our direction is an AI platform enhanced with profession‐specific sources, academic literature, terminology, and curated domain knowledge — so practice reflects how your industry actually communicates, not a generic phrasebook.",
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-cream-soft text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-cream-soft/85 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a
            href="#top"
            className="flex min-h-10 items-center rounded-md px-2 py-1"
            aria-label="Lexicon home"
          >
            <Wordmark className="text-4xl leading-none text-primary" />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
            <a href="#gap" className="hover:text-primary">
              The gap
            </a>
            <a href="#product" className="hover:text-primary">
              The product
            </a>
            <a href="#how" className="hover:text-primary">
              How it works
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
            Join early access
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-5">
        {/* HERO */}
        <section className="relative pt-16 pb-14 md:pt-24 md:pb-20">
          <div className="pointer-events-none absolute -top-24 right-0 -z-10 h-72 w-72 rounded-full bg-cream blur-3xl opacity-70" />
          <div className="max-w-3xl">
            <p className="rise eyebrow text-muted-foreground">
              Professional fluency, not just conversational
            </p>
            <h1 className="mt-5 rise text-5xl leading-[1.04] font-extrabold tracking-tight text-balance text-primary md:text-6xl">
              Speak confidently in any professional setting.
            </h1>
            <p className="mt-6 max-w-[56ch] rise text-lg leading-relaxed text-pretty text-muted-foreground">
              Turn the language you already speak into the language your
              profession demands. <Wordmark className="text-xl text-primary" />{" "}
              is an AI‐powered platform for industry‐specific terminology,
              professional tone, and real‐world communication — starting with
              Hindi, Mandarin, and Spanish.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 rise">
              <CtaButton>Help shape the first version — get early access</CtaButton>
            </div>
          </div>

          <div className="mt-14 rise">
            <p className="eyebrow text-muted-foreground">Launching first in</p>
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

        {/* PAIN POINTS */}
        <section id="gap" className="border-t border-border py-16 md:py-20">
          <p className="eyebrow text-muted-foreground">The gap</p>
          <h2 className="mt-4 max-w-3xl text-3xl leading-tight font-extrabold tracking-tight text-balance text-primary md:text-4xl">
            You know the language. But do you know how your profession speaks
            it?
          </h2>
          <p className="mt-5 max-w-[62ch] leading-relaxed text-pretty text-muted-foreground">
            Traditional language learning teaches you how to order food,
            introduce yourself, or hold a conversation. It rarely teaches you
            how to explain a diagnosis, pitch an idea, discuss a technical
            problem, speak in a meeting, or use the terminology professionals
            actually use.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {painPoints.map((p) => (
              <figure
                key={p}
                className="rounded-2xl border border-border bg-cream/50 p-6 transition duration-300 hover:border-input hover:bg-cream"
              >
                <blockquote className="text-lg leading-relaxed text-pretty text-primary">
                  {p}
                </blockquote>
              </figure>
            ))}
          </div>
        </section>

        {/* WHY THIS MATTERS / SOCIAL PROOF */}
        <section className="border-t border-border py-16 md:py-20">
          <p className="eyebrow text-muted-foreground">Why this matters</p>
          <div className="mt-8 grid gap-4 md:grid-cols-12">
            <blockquote className="rounded-2xl border border-border bg-cream/50 p-7 md:col-span-7">
              <p className="text-xl leading-relaxed text-pretty text-primary">
                “During a medical brigade, I realized that my high school
                Spanish hadn’t prepared me to fully communicate with patients
                in a healthcare setting. Google Translate helped, but sometimes
                we had no Wi-Fi or service, especially when we were working in
                remote areas.”
              </p>
              <footer className="mt-5 text-sm text-muted-foreground">
                Pre-med volunteer, medical brigade
              </footer>
            </blockquote>
            <div className="flex flex-col justify-center rounded-2xl bg-primary p-7 text-primary-foreground md:col-span-5">
              <p className="eyebrow text-primary-foreground/60">The stakes</p>
              <p className="mt-4 text-2xl leading-snug font-extrabold tracking-tight text-balance">
                Fluency on paper isn’t fluency in the room.
              </p>
              <p className="mt-4 leading-relaxed text-pretty text-primary-foreground/75">
                Conversational comfort doesn’t guarantee you can lead a
                meeting, pass an interview, or earn trust with a patient. That
                gap is what <span className="wordmark text-2xl">Lexicon</span>{" "}
                closes.
              </p>
            </div>
          </div>
        </section>

        {/* VALUE PROPOSITION */}
        <section id="product" className="border-t border-border py-16 md:py-20">
          <p className="eyebrow text-muted-foreground">The product</p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-tight font-extrabold tracking-tight text-balance text-primary md:text-4xl">
            Professional fluency, built for the real world.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {values.map((v) => (
              <article
                key={v.title}
                className="rounded-2xl border border-border bg-cream-soft p-7 transition duration-300 hover:border-input hover:bg-cream"
              >
                <h3 className="text-xl font-bold tracking-tight text-primary">
                  {v.title}
                </h3>
                <p className="mt-3 leading-relaxed text-pretty text-muted-foreground">
                  {v.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-[68ch] text-sm leading-relaxed text-muted-foreground">
            Under the hood, our direction is an AI platform enhanced with
            profession‐specific sources, academic literature, terminology, and
            curated domain knowledge — so what you practice reflects how your
            industry actually communicates.
          </p>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="border-t border-border py-16 md:py-20">
          <p className="eyebrow text-muted-foreground">How it works</p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-tight font-extrabold tracking-tight text-balance text-primary md:text-4xl">
            Build professional fluency in 3 steps.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((s) => (
              <article
                key={s.n}
                className="rounded-2xl border border-border bg-cream/50 p-7"
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-primary font-mono text-sm font-semibold text-primary-foreground">
                  {s.n}
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-primary">
                  {s.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-pretty text-muted-foreground">
                  {s.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Launching first in Hindi, Mandarin, and Spanish — with more
            languages and professions to follow.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-border py-16 md:py-20">
          <p className="eyebrow text-muted-foreground">Questions</p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-tight font-extrabold tracking-tight text-balance text-primary">
            Before you join
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

        {/* FINAL CONVERSION */}
        <section className="py-16 md:py-24">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-7 py-14 md:px-12 md:py-16">
            <div className="pointer-events-none absolute -top-16 -left-16 size-64 rounded-full bg-cream/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 -bottom-20 size-72 rounded-full bg-cream/10 blur-3xl" />
            <div className="relative mx-auto max-w-2xl text-center">
              <p className="eyebrow text-primary-foreground/50">Early access</p>
              <h2 className="mt-5 text-4xl leading-[1.05] font-extrabold tracking-tight text-balance text-primary-foreground md:text-5xl">
                Your expertise shouldn’t get lost in translation.
              </h2>
              <p className="mx-auto mt-5 max-w-[48ch] text-lg leading-relaxed text-pretty text-primary-foreground/75">
                Build the professional vocabulary, confidence, and
                communication skills to be understood wherever your career
                takes you.
              </p>
              <ul className="mx-auto mt-8 grid max-w-xl gap-2.5 text-left sm:grid-cols-2">
                {benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2.5 text-[15px] text-primary-foreground/85"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-cream" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-10 overflow-hidden rounded-2xl bg-cream-soft text-left">
                <iframe
                  title="Join the Lexicon early access list"
                  src={WAITLIST_EMBED_URL}
                  className="h-[560px] w-full"
                  loading="lazy"
                >
                  Loading…
                </iframe>
              </div>
              <p className="mt-4 font-mono text-[11px] tracking-widest uppercase text-primary-foreground/40">
                Takes a minute · No spam
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <Wordmark className="text-3xl leading-none text-primary" />
            <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
              professional fluency
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Hindi · Mandarin · Spanish
          </p>
        </div>
      </footer>

      <div className="sticky bottom-0 z-40 border-t border-border bg-cream-soft/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <p className="hidden text-sm font-medium text-primary sm:block">
            Your language, at work —{" "}
            <span className="font-semibold">professional fluency.</span>
          </p>
          <a
            href={WAITLIST_URL}
            target="_blank"
            rel="noopener"
            className="ml-auto rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition duration-200 hover:bg-primary-soft active:scale-[0.98]"
          >
            Join early access
          </a>
        </div>
      </div>
    </div>
  );
}
