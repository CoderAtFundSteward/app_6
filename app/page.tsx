import MarketingNav from "@/components/marketing/MarketingNav";

export default function HomePage() {
  return (
    <>
      <MarketingNav />
      <main className="min-h-screen bg-background px-6 py-16 text-on-surface">
      <div className="editorial-shadow mx-auto max-w-xl rounded-xl border border-outline bg-surface p-8">
        <div className="mb-4 flex items-center gap-2 text-secondary">
          <span className="material-symbols-outlined text-2xl">palette</span>
          <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
            Design foundation
          </span>
        </div>
        <h1 className="letter-spacing-tight text-3xl font-extrabold text-primary">
          Next.js 14 + Tailwind
        </h1>
        <p className="mt-3 text-on-surface-variant">
          Manrope, palette tokens, Material Symbols, editorial shadow, and gold gradient utilities
          are wired in <code className="rounded bg-outline/60 px-1 text-sm">app/globals.css</code>{" "}
          and <code className="rounded bg-outline/60 px-1 text-sm">tailwind.config.ts</code>.
        </p>
        <div className="mt-6 inline-flex rounded-lg gold-gradient px-5 py-2 text-sm font-bold text-primary">
          Sample accent
        </div>
      </div>

      <section id="problem" className="mx-auto mt-16 max-w-xl scroll-mt-24 text-on-surface-variant">
        <h2 className="text-lg font-bold text-primary">#problem</h2>
        <p className="mt-2 text-sm">Anchor target for the marketing nav.</p>
      </section>
      <section id="how-it-works" className="mx-auto mt-8 max-w-xl scroll-mt-24 text-on-surface-variant">
        <h2 className="text-lg font-bold text-primary">#how-it-works</h2>
        <p className="mt-2 text-sm">Anchor target for the marketing nav.</p>
      </section>
      <section id="contact" className="mx-auto mt-8 max-w-xl scroll-mt-24 text-on-surface-variant">
        <h2 className="text-lg font-bold text-primary">#contact</h2>
        <p className="mt-2 text-sm">Anchor target for the marketing nav.</p>
      </section>
    </main>
    </>
  );
}
