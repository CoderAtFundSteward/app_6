import { useId } from "react";

type Props = {
  className?: string;
};

/** Inline mark ~28×28 — secondary / accent palette; parent can set size via className (e.g. h-7 w-7). */
export default function FundStewardLogo({ className = "h-7 w-7 shrink-0" }: Props) {
  const gid = useId().replace(/:/g, "");

  return (
    <svg
      className={className}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={`fs-logo-grad-${gid}`} x1="6" y1="4" x2="22" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B3934F" />
          <stop offset="1" stopColor="#C9A961" />
        </linearGradient>
      </defs>
      {/* Stylized F + ascending bars (stewardship / trajectory) */}
      <path
        fill={`url(#fs-logo-grad-${gid})`}
        d="M6 5.5h9a1 1 0 011 1v2.2a1 1 0 01-1 1H9.2v3.3h4.6a1 1 0 011 1V15a1 1 0 01-1 1H9.2v5.5a1 1 0 01-1 1H6a1 1 0 01-1-1V6.5a1 1 0 011-1z"
      />
      <path
        fill="#B3934F"
        d="M17.2 12.2c.55 0 1 .45 1 1v2.2c0 .55-.45 1-1 1h-.8v5.6a1 1 0 11-2 0v-5.6h-.9a1 1 0 01-1-1v-2.2c0-.55.45-1 1-1h3.7z"
        opacity={0.92}
      />
      <rect x="18.5" y="16" width="2.4" height="6" rx="0.5" fill="#C9A961" />
      <rect x="21.6" y="13.5" width="2.4" height="8.5" rx="0.5" fill="#B3934F" />
    </svg>
  );
}
