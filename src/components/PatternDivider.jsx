/**
 * Decorative diamond divider used across both pages.
 * `color` accepts any CSS color (defaults to the gold accent).
 */
export default function PatternDivider({ color = "#c8922a", className = "" }) {
  return (
    <div className={`flex w-full items-center gap-4 ${className}`} aria-hidden="true">
      <div className="h-px flex-1 opacity-40" style={{ background: color }} />
      <svg width="48" height="16" viewBox="0 0 48 16" fill="none">
        <rect x="16" y="4" width="8" height="8" transform="rotate(45 20 8)" fill={color} opacity="0.9" />
        <rect x="0" y="6" width="5" height="5" transform="rotate(45 2.5 8)" fill={color} opacity="0.5" />
        <rect x="30" y="6" width="5" height="5" transform="rotate(45 32.5 8)" fill={color} opacity="0.5" />
        <rect x="42" y="7" width="3" height="3" transform="rotate(45 43.5 8)" fill={color} opacity="0.3" />
        <rect x="4" y="7" width="3" height="3" transform="rotate(45 5.5 8)" fill={color} opacity="0.3" />
      </svg>
      <div className="h-px flex-1 opacity-40" style={{ background: color }} />
    </div>
  );
}
