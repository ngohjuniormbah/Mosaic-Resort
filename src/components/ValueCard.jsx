/**
 * Card used for the About page "Objectives" and "Core Values" grids.
 * `accent` colours the icon, its border tint and the underline bar.
 */
export default function ValueCard({ Icon, accent = "#c8922a", title, description }) {
  return (
    <article className="flex flex-col gap-4 rounded-sm border border-border bg-background p-6">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-sm bg-input"
        style={{ borderWidth: 1, borderStyle: "solid", borderColor: `${accent}33` }}
      >
        <Icon size={18} style={{ color: accent }} />
      </div>
      <div className="h-0.5 w-8 rounded-full" style={{ background: accent }} />
      <h4 className="font-headings text-lg italic text-cream">{title}</h4>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </article>
  );
}
