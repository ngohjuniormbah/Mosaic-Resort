import { User } from "lucide-react";

/**
 * Team member card used in the About "Group 8 Project Team" grid.
 */
export default function TeamCard({ avatar, name, role, bio }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-sm border border-border bg-dark-panel">
      <div className="relative h-[200px]">
        <img src={avatar} alt={name} loading="lazy" className="h-full w-full object-cover" />
        <span className="absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-gold" />
        <span className="absolute top-0 right-0 h-6 w-6 border-t-2 border-r-2 border-gold" />
      </div>

      <div className="flex flex-col gap-2 border-t border-border p-5">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="font-headings text-base italic leading-snug text-cream">{name}</h4>
            <span className="text-xs tracking-widest text-gold uppercase">{role}</span>
          </div>
          <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-sm bg-muted">
            <User size={12} className="text-muted-foreground" />
          </div>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{bio}</p>
      </div>
    </article>
  );
}
