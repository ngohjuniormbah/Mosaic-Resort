import { useEffect, useState } from "react";

// Crossfading background slideshow for hero sections. Swap the entries in
// HERO_SLIDES (src/data/images.js) to change the imagery.
export default function HeroSlideshow({ slides, interval = 5000 }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <>
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: i === active ? 1 : 0 }}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setActive(i)}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === active ? "24px" : "8px",
              background: i === active ? "#c8922a" : "rgba(245,240,232,0.4)",
            }}
          />
        ))}
      </div>
    </>
  );
}
