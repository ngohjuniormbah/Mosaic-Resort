/**
 * Experience tile used in the Home "Curated Experiences" grid.
 */
export default function ExperienceCard({ image, category, title, description, duration }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-border">
      <div className="relative h-[220px] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gold L-shaped corner accents */}
        <span className="absolute top-0 left-0 h-8 w-8 border-t-2 border-l-2 border-gold" />
        <span className="absolute top-0 right-0 h-8 w-8 border-t-2 border-r-2 border-gold" />
        <div className="absolute bottom-3 left-3 bg-dark-panel px-3 py-1">
          <span className="text-xs tracking-widest text-gold uppercase">{category}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 bg-dark-panel p-5">
        <h3 className="font-headings text-lg leading-snug text-cream">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
          <span className="text-xs tracking-wide text-bronze">{duration}</span>
          <a href="#" className="text-xs tracking-widest text-gold uppercase">
            Discover →
          </a>
        </div>
      </div>
    </article>
  );
}
