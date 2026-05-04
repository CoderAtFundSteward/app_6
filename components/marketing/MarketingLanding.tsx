import Link from "next/link";

import MarketingFooter from "@/components/marketing/MarketingFooter";
import MarketingNav from "@/components/marketing/MarketingNav";

export default function MarketingLanding() {
  return (
    <>
      <MarketingNav />
      <main className="bg-background text-on-surface">
        {/* Hero */}
        <section
          className="border-b border-outline px-4 pb-20 pt-16 sm:pb-24 sm:pt-20 md:pt-24"
          aria-labelledby="hero-heading"
        >
          <div className="mx-auto max-w-4xl text-center">
            <p className="mx-auto inline-flex rounded-full border border-outline bg-surface px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant sm:text-xs">
              Now in Private Beta
            </p>
            <h1
              id="hero-heading"
              className="letter-spacing-tight mt-6 text-4xl font-extrabold leading-[1.06] text-primary sm:text-5xl lg:text-6xl"
            >
              {"[PRODUCT_NAME]"} — financial intelligence for mission-driven organizations
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-on-surface-variant sm:text-xl">
              Unify grants, programs, and finance data so your team spends less time wrangling
              spreadsheets and more time advancing the mission nonprofits and foundations depend
              on.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/#contact"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full gold-gradient px-8 py-3 text-sm font-bold text-primary shadow-sm transition-opacity hover:opacity-95 sm:w-auto"
              >
                Request a Demo
              </Link>
              <Link
                href="/#how-it-works"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border-2 border-primary bg-transparent px-8 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-white sm:w-auto"
              >
                Learn More
              </Link>
            </div>
            <ul className="mx-auto mt-14 flex max-w-3xl flex-col gap-4 text-left sm:flex-row sm:gap-6 sm:text-center">
              <li className="flex flex-1 items-start gap-3 sm:flex-col sm:items-center">
                <span
                  className="material-symbols-outlined material-symbols-filled mt-0.5 shrink-0 text-2xl text-secondary sm:mt-0"
                  aria-hidden
                >
                  check_circle
                </span>
                <span className="text-sm font-semibold leading-snug text-primary sm:text-base">
                  One place for fund restrictions, allocations, and board-ready context
                </span>
              </li>
              <li className="flex flex-1 items-start gap-3 sm:flex-col sm:items-center">
                <span
                  className="material-symbols-outlined material-symbols-filled mt-0.5 shrink-0 text-2xl text-secondary sm:mt-0"
                  aria-hidden
                >
                  check_circle
                </span>
                <span className="text-sm font-semibold leading-snug text-primary sm:text-base">
                  Reconcile faster with repeatable workflows instead of one-off exports
                </span>
              </li>
              <li className="flex flex-1 items-start gap-3 sm:flex-col sm:items-center">
                <span
                  className="material-symbols-outlined material-symbols-filled mt-0.5 shrink-0 text-2xl text-secondary sm:mt-0"
                  aria-hidden
                >
                  check_circle
                </span>
                <span className="text-sm font-semibold leading-snug text-primary sm:text-base">
                  Built for teams balancing stewardship, compliance, and transparency
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Problem */}
        <section
          id="problem"
          className="scroll-mt-24 bg-primary px-4 py-16 sm:py-20"
          aria-labelledby="problem-heading"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="problem-heading"
              className="letter-spacing-tight text-3xl font-extrabold text-white sm:text-4xl"
            >
              Manual reporting is quietly draining your mission hours
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
              When finance lives in silos, program teams re-key the same numbers, leadership
              waits on stale summaries, and every board cycle becomes a scramble.{" "}
              {"[PRODUCT_NAME]"} helps mission-driven organizations replace fragile spreadsheets
              with a clearer, faster path from transactions to trusted narratives — so finance
              can support strategy, not just close the books.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          className="scroll-mt-24 px-4 py-16 sm:py-20"
          aria-labelledby="how-heading"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2
                id="how-heading"
                className="letter-spacing-tight text-3xl font-extrabold text-primary sm:text-4xl"
              >
                How it works
              </h2>
              <p className="mt-4 text-on-surface-variant sm:text-lg">
                Connect sources, normalize the story your numbers tell, and ship reports your
                board and funders can rely on.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <article className="editorial-shadow flex flex-col rounded-xl border border-outline bg-surface p-6">
                <span className="material-symbols-outlined text-3xl text-secondary" aria-hidden>
                  link
                </span>
                <h3 className="mt-4 text-lg font-bold text-primary">Connect your sources</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                  Pull GL, payroll, CRM, and grants data into a governed layer designed for
                  nonprofit-style operating realities.
                </p>
              </article>
              <article className="editorial-shadow flex flex-col rounded-xl border border-outline bg-surface p-6">
                <span className="material-symbols-outlined text-3xl text-secondary" aria-hidden>
                  category
                </span>
                <h3 className="mt-4 text-lg font-bold text-primary">Map to mission structure</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                  Align accounts, programs, and restrictions so every report reflects how you
                  actually run the organization.
                </p>
              </article>
              <article className="editorial-shadow flex flex-col rounded-xl border border-outline bg-surface p-6">
                <span className="material-symbols-outlined text-3xl text-secondary" aria-hidden>
                  monitoring
                </span>
                <h3 className="mt-4 text-lg font-bold text-primary">Monitor what matters</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                  Track burn, runway, and program-level performance with definitions your team
                  agrees on — not hidden in one-off workbooks.
                </p>
              </article>
              <article className="editorial-shadow flex flex-col rounded-xl border border-outline bg-surface p-6 sm:col-span-2 lg:col-span-1">
                <span className="material-symbols-outlined text-3xl text-secondary" aria-hidden>
                  payments
                </span>
                <h3 className="mt-4 text-lg font-bold text-primary">Close the loop with confidence</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                  Package funder-ready views, audit-friendly trails, and leadership summaries
                  without rebuilding the narrative every month.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Social proof / metrics (placeholder) */}
        <section
          className="border-y border-outline bg-surface px-4 py-12 sm:py-14"
          aria-label="Social proof"
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant">
              Trusted by teams like yours — placeholder
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div className="rounded-lg border border-dashed border-outline/80 bg-background/80 px-4 py-8 text-center">
                <p className="text-2xl font-extrabold text-primary">—</p>
                <p className="mt-1 text-xs font-medium text-on-surface-variant">orgs onboarded</p>
              </div>
              <div className="rounded-lg border border-dashed border-outline/80 bg-background/80 px-4 py-8 text-center">
                <p className="text-2xl font-extrabold text-primary">—</p>
                <p className="mt-1 text-xs font-medium text-on-surface-variant">reporting hours saved</p>
              </div>
              <div className="rounded-lg border border-dashed border-outline/80 bg-background/80 px-4 py-8 text-center">
                <p className="text-2xl font-extrabold text-primary">—</p>
                <p className="mt-1 text-xs font-medium text-on-surface-variant">data sources</p>
              </div>
              <div className="rounded-lg border border-dashed border-outline/80 bg-background/80 px-4 py-8 text-center">
                <p className="text-2xl font-extrabold text-primary">Logo</p>
                <p className="mt-1 text-xs font-medium text-on-surface-variant">placeholder</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact / CTA */}
        <section
          id="contact"
          className="scroll-mt-24 bg-primary px-4 py-16 sm:py-20"
          aria-labelledby="contact-heading"
        >
          <div className="mx-auto max-w-xl text-center">
            <h2
              id="contact-heading"
              className="letter-spacing-tight text-3xl font-extrabold text-white sm:text-4xl"
            >
              Request access to the private beta
            </h2>
            <p className="mt-4 text-base text-white/70 sm:text-lg">
              Share where you are today — we&apos;ll follow up with a short walkthrough of{" "}
              {"[PRODUCT_NAME]"} for your finance and program leads.
            </p>
            <form
              className="editorial-shadow mt-10 flex flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-4 sm:flex-row sm:p-2"
              action="#"
              method="post"
            >
              <label className="sr-only" htmlFor="beta-email">
                Work email
              </label>
              <input
                id="beta-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@organization.org"
                className="min-h-[48px] w-full flex-1 rounded-lg border border-white/15 bg-primary px-4 text-sm text-white placeholder:text-white/45 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/40"
              />
              <button
                type="submit"
                className="min-h-[48px] shrink-0 rounded-lg gold-gradient px-6 text-sm font-bold text-primary transition-opacity hover:opacity-95"
              >
                Notify me
              </button>
            </form>
            <p className="mt-6 text-sm text-white/60">
              Prefer email?{" "}
              <a
                className="font-semibold text-secondary underline-offset-4 hover:underline"
                href="mailto:hello@fundsteward.example"
              >
                hello@fundsteward.example
              </a>{" "}
              — placeholder address; replace before launch.
            </p>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}
