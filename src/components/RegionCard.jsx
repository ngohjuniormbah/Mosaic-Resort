/**
 * Region tile used in the Home "Explore Cameroon" grid.
 */
export default function RegionCard({ image, region, subtitle, tags }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-sm border border-border">
      <div className="relative h-40">
        <img src={image} alt={region} loading="lazy" className="h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #0e0c09 10%, transparent 60%)" }}
        />
        <div className="absolute bottom-3 left-4">
          <span className="font-headings text-base text-cream">{region}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 bg-dark-panel px-4 pt-3 pb-4">
        <span className="text-xs tracking-wide text-gold uppercase">{subtitle}</span>
        <div className="mt-1 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-border bg-input px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
