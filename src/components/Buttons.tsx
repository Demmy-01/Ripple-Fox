interface ButtonProps {
  label?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

/**
 * Solid/outlined "Request Strategic Engagement" button —
 * dark fill with border and right-arrow, matches the left CTA in the design.
 */
export function RequestEngagementButton({ label = 'Request Strategic Engagement', onClick, href, className = '' }: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 rounded-sm border border-white/50 bg-white/10 px-6 py-3 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white focus:outline-none focus:ring-2 focus:ring-white/40';

  if (href) {
    return (
      <a href={href} className={`${base} ${className}`}>
        {label}
        <span aria-hidden="true" className="text-base leading-none">→</span>
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`${base} ${className}`}>
      {label}
      <span aria-hidden="true" className="text-base leading-none">→</span>
    </button>
  );
}

/**
 * White-fill "Download Institutional Brief" button —
 * solid white background with dark text, matches the right CTA in the design.
 */
export function DownloadBriefButton({ label = 'Download Institutional Brief', onClick, href, className = '' }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-sm border border-white bg-white px-6 py-3 text-sm font-semibold tracking-wide text-[#0a1128] transition-all hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/60';

  if (href) {
    return (
      <a href={href} className={`${base} ${className}`}>
        {label}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`${base} ${className}`}>
      {label}
    </button>
  );
}
