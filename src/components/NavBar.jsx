import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Explore Cameroon", to: "/explore" },
  { label: "Experiences", to: "/experiences" },
  { label: "Accommodation", to: "/accommodation" },
  { label: "Heritage Shop", to: "/shop" },
  { label: "Contact", to: "/contact" },
];

/**
 * Top navigation. Rendered absolutely over the hero on each page.
 */
export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 z-30 w-full">
      <div className="flex w-full items-center justify-between px-6 py-5 md:px-16">
        <Link to="/" className="flex flex-col">
          <span className="font-headings text-xl font-bold tracking-widest text-cream uppercase leading-tight">
            Cameroon Mosaic Heritage Empire
          </span>
          <span className="text-xs tracking-[0.25em] text-gold uppercase">Heritage Resort</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-sm tracking-wide text-cream transition-opacity hover:opacity-100 ${
                  isActive ? "opacity-100" : "opacity-80"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/accommodation"
            className="hidden rounded-sm bg-gold px-6 py-2.5 text-sm font-medium tracking-wide text-dark-panel transition-opacity hover:opacity-90 sm:inline-block"
          >
            Book Now
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-dark-panel/80 text-cream lg:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-1 border-y border-border bg-dark-panel px-6 py-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-sm px-3 py-2.5 text-sm tracking-wide transition-colors ${
                  isActive ? "bg-input text-gold" : "text-cream hover:bg-input"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/accommodation"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-sm bg-gold px-3 py-2.5 text-center text-sm font-medium tracking-wide text-dark-panel sm:hidden"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
