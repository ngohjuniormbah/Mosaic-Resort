import { Users, Maximize } from "lucide-react";

/**
 * Room / villa / suite tile used across the Accommodation page category grids.
 * `accent` colours the corner accents, category label, badge, price and the
 * "Enquire" button — pass the category's signature colour (gold, forest, terracotta).
 */
export default function AccommodationCard({
  image,
  category,
  accent = "#c8922a",
  badge,
  title,
  description,
  guests,
  size,
  tags = [],
  price,
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-border bg-dark-panel">
      <div className="relative h-60 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(14,12,9,0.7) 0%, transparent 55%)" }}
        />
        {/* Corner accents */}
        <span className="absolute top-0 left-0 h-8 w-8 border-t-2 border-l-2" style={{ borderColor: accent }} />
        <span className="absolute top-0 right-0 h-8 w-8 border-t-2 border-r-2" style={{ borderColor: accent }} />

        {badge && (
          <div className="absolute top-3 right-0 left-0 flex justify-center">
            <span
              className="px-3 py-1 text-xs font-medium tracking-widest text-dark-panel uppercase"
              style={{ background: accent }}
            >
              {badge}
            </span>
          </div>
        )}

        <div className="absolute bottom-3 left-4">
          <span className="text-xs tracking-widest uppercase" style={{ color: accent }}>
            {category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="font-headings text-xl italic leading-snug text-cream">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>

        {/* Capacity */}
        <div className="flex items-center gap-4 border-t border-[#2a2018] pt-2 text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Users size={12} className="shrink-0" />
            <span className="text-xs">{guests} Guests</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize size={12} className="shrink-0" />
            <span className="text-xs">{size}</span>
          </div>
        </div>

        {/* Amenity tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-[#2a2018] bg-input px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="mt-auto flex items-center justify-between border-t border-[#2a2018] pt-4">
          <div>
            <span className="font-headings text-xl font-bold" style={{ color: accent }}>
              {price}
            </span>
            <span className="ml-1 text-xs text-muted-foreground">/ night</span>
          </div>
          <button
            type="button"
            className="rounded-sm px-5 py-2 text-xs font-medium tracking-wide transition-opacity hover:opacity-80"
            style={{ background: `${accent}22`, border: `1px solid ${accent}66`, color: accent }}
          >
            Enquire Now
          </button>
        </div>
      </div>
    </article>
  );
}
