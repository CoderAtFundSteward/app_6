import Link from "next/link";

import FundStewardLogo from "@/components/marketing/FundStewardLogo";

const navAnchorClass =
  "text-xs font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-white";

export default function MarketingNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-primary/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-4 py-4">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 text-white">
          <FundStewardLogo />
          <span className="text-base font-semibold tracking-tight">FundSteward</span>
        </Link>

        <nav
          className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 sm:gap-x-6 md:gap-x-8"
          aria-label="Primary"
        >
          <Link className={navAnchorClass} href="/#problem">
            Product
          </Link>
          <Link className={navAnchorClass} href="/#how-it-works">
            How it works
          </Link>
          <Link className={navAnchorClass} href="/#contact">
            Contact
          </Link>
          <Link
            className="text-[10px] font-bold uppercase tracking-widest text-white/80 transition-colors hover:text-white sm:text-xs"
            href="/login"
          >
            Log in
          </Link>
          <Link
            className="rounded-full bg-secondary px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-primary transition-colors hover:bg-accent sm:px-4 sm:text-xs"
            href="/signup"
          >
            Sign up
          </Link>
        </nav>
      </div>
    </header>
  );
}
