import { Link, NavLink } from "react-router-dom";

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
  return (
    <nav className="absolute top-0 left-0 z-10 flex w-full items-center justify-between px-6 py-5 md:px-16">
      <Link to="/" className="flex flex-col">
        <span className="font-headings text-xl font-bold tracking-widest text-cream uppercase leading-tight">
          Cameroon Mosaic
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

      <button
        type="button"
        className="rounded-sm bg-gold px-6 py-2.5 text-sm font-medium tracking-wide text-dark-panel transition-opacity hover:opacity-90"
      >
        Book Now
      </button>
    </nav>
  );
}
