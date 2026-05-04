import Link from "next/link";

const headingClass =
  "text-[10px] font-extrabold uppercase tracking-widest text-white/50";
const linkClass =
  "text-sm font-medium text-white/80 underline-offset-4 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary";

export default function MarketingFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="text-base font-semibold text-white">FundSteward</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
              Financial intelligence for mission-driven organizations — connect mission to your
              numbers with less manual work.
            </p>
          </div>

          <div>
            <h2 className={headingClass}>Product</h2>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link className={linkClass} href="/#problem">
                  Overview
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="/#how-it-works">
                  How it works
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="/#contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="/signup">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className={headingClass}>Company</h2>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link className={linkClass} href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="/careers">
                  Careers
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="/press">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className={headingClass}>Legal</h2>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link className={linkClass} href="/privacy">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="/terms">
                  Terms of service
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="/security">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/55">
            © {year} FundSteward. All rights reserved.
          </p>
          <p className="text-xs text-white/55">
            Built for nonprofits, foundations, and mission-driven teams.
          </p>
        </div>
      </div>
    </footer>
  );
}
