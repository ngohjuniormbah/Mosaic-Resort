import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  X,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const SOCIALS = [
  { label: "Facebook", Icon: Facebook },
  { label: "Instagram", Icon: Instagram },
  { label: "X (Twitter)", Icon: X },
  { label: "YouTube", Icon: Youtube },
];

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Explore Cameroon", to: "/explore" },
  { label: "Experiences", to: "/experiences" },
  { label: "Accommodation", to: "/accommodation" },
  { label: "Heritage Shop", to: "/shop" },
  { label: "Contact", to: "/contact" },
];

const EXPERIENCES = [
  "Cultural Tours",
  "Farm Visits",
  "Artisan Workshops",
  "Cooking Classes",
  "Drum Workshops",
];

export default function SiteFooter() {
  return (
    <footer className="w-full border-t border-border bg-dark-panel">
      <div
        className="h-1 w-full"
        style={{ background: "linear-gradient(to right, #c8922a, #c4532a, #8b6b3d, #c8922a)" }}
      />

      <div className="px-6 pt-16 pb-8 md:px-16">
        <div className="grid grid-cols-1 gap-12 border-b border-border pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <div className="font-headings text-xl font-bold tracking-widest text-cream uppercase leading-tight">
                Cameroon Mosaic
              </div>
              <div className="mt-0.5 text-xs tracking-[0.25em] text-gold uppercase">
                Heritage Resort
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Where Culture, Nature, Heritage and Community Meet.
            </p>
            <div className="mt-2 flex gap-3">
              {SOCIALS.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-sm border border-border bg-input text-cream transition-colors hover:text-gold"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs tracking-widest text-gold uppercase">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-cream"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Experiences */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs tracking-widest text-gold uppercase">Experiences</h4>
            <div className="flex flex-col gap-2.5">
              {EXPERIENCES.map((label) => (
                <a
                  key={label}
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-cream"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact + newsletter */}
          <div className="flex flex-col gap-5">
            <div>
              <h4 className="mb-3 text-xs tracking-widest text-gold uppercase">Contact Us</h4>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="shrink-0" />
                  <span>Yaoundé, Cameroon</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={13} className="shrink-0" />
                  <span>+237 600 000 000</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={13} className="shrink-0" />
                  <span>info@cameroonmosaic.com</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-3 text-xs tracking-widest text-gold uppercase">Newsletter</h4>
              <form
                className="flex"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Your email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email address"
                  className="min-w-0 flex-1 rounded-sm rounded-r-none border border-r-0 border-border bg-input px-3 py-2 text-sm text-cream placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
                />
                <button
                  type="submit"
                  className="rounded-sm rounded-l-none bg-gold px-4 py-2 text-xs font-medium tracking-wide text-dark-panel transition-opacity hover:opacity-90"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-6 sm:flex-row">
          <span className="text-xs text-muted-foreground">
            © 2025 Cameroon Mosaic Heritage Resort. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-cream">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-cream">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
