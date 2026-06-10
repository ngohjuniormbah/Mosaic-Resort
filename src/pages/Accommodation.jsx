import { useState } from "react";
import {
  Users,
  Maximize,
  House,
  Leaf,
  Crown,
  Calendar,
  MessageCircle,
  Utensils,
  Wifi,
  Waves,
  Sparkles,
  Car,
  BookOpen,
  Bike,
  Music,
  Shield,
  Camera,
  Coffee,
  Globe,
} from "lucide-react";
import NavBar from "../components/NavBar.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import PatternDivider from "../components/PatternDivider.jsx";
import AccommodationCard from "../components/AccommodationCard.jsx";
import { IMAGES } from "../data/images.js";

const GOLD = "#c8922a";
const FOREST = "#4a7a40";
const TERRACOTTA = "#c4532a";

const FILTERS = ["All", "Heritage Villas", "Eco Lodges", "Royal Suites"];

const HERITAGE_VILLAS = [
  {
    image: IMAGES.accomBamileke,
    category: "Heritage Villa",
    title: "Bamileke Heritage Villa",
    description:
      "Inspired by the elevated compound architecture of the Bamileke chiefdoms — hand-carved wooden panels, woven raffia textiles, and a private terrace with sweeping views over the resort.",
    guests: 2,
    size: "48m²",
    tags: ["King Bed", "Private Terrace", "Air Conditioning", "Cultural Décor", "En-suite Bath"],
    price: "XAF 85,000",
  },
  {
    image: IMAGES.accomTikar,
    category: "Heritage Villa",
    badge: "Heritage Collection",
    title: "Tikar Royal Villa",
    description:
      "A grand villa adorned with Tikar geometric motifs, thatched canopy ceilings, and hand-painted walls celebrating the heritage of Cameroon's central plateau kingdoms.",
    guests: 2,
    size: "56m²",
    tags: ["King Bed", "Plunge Pool", "Air Conditioning", "Tikar Artwork", "Rain Shower"],
    price: "XAF 95,000",
  },
];

const ECO_LODGES = [
  {
    image: IMAGES.accomForestLodge,
    category: "Eco Lodge",
    badge: "Most Popular",
    title: "Forest Canopy Lodge",
    description:
      "Elevated above the rainforest floor among the tree canopy, this eco-lodge offers an immersive nature experience with sustainable materials and open-air living.",
    guests: 2,
    size: "38m²",
    tags: ["Queen Bed", "Open-Air Deck", "Ceiling Fan", "Forest Views", "Outdoor Shower"],
    price: "XAF 65,000",
  },
  {
    image: IMAGES.accomRiverLodge,
    category: "Eco Lodge",
    title: "River Valley Lodge",
    description:
      "Nestled beside a flowing stream with views of Cameroon's lush valleys. Built entirely from local timber and stone with a deep commitment to environmental harmony.",
    guests: 2,
    size: "34m²",
    tags: ["Twin or Queen", "River View", "Ceiling Fan", "Stone Bath", "Private Garden"],
    price: "XAF 58,000",
  },
];

const ROYAL_SUITES = [
  {
    image: IMAGES.accomSultanSuite,
    category: "Royal Suite",
    badge: "Signature Suite",
    title: "Sultan's Royal Suite",
    description:
      "The pinnacle of luxury — inspired by the royal palace of the Bamoun Sultan of Foumban. Gold-lacquered furnishings, hand-embroidered fabrics, and a private courtyard garden.",
    guests: 2,
    size: "95m²",
    tags: ["King Bed", "Private Courtyard", "Jacuzzi", "Butler Service", "Dining Room"],
    price: "XAF 180,000",
  },
  {
    image: IMAGES.accomFonSuite,
    category: "Royal Suite",
    title: "Fon's Palace Suite",
    description:
      "A regal two-bedroom suite echoing the grandeur of the Grassfields Fon palaces — rich indigo textiles, carved thrones, ceremonial masks, and a panoramic balcony.",
    guests: 4,
    size: "120m²",
    tags: ["2 King Bedrooms", "Panoramic Balcony", "Private Pool", "Living Room", "Rain Shower"],
    price: "XAF 150,000",
  },
];

const AMENITIES = [
  { Icon: Utensils, label: "Cultural Restaurant" },
  { Icon: Wifi, label: "High-Speed Wi-Fi" },
  { Icon: Waves, label: "Resort Pool" },
  { Icon: Sparkles, label: "Heritage Spa" },
  { Icon: Car, label: "Airport Transfer" },
  { Icon: BookOpen, label: "Cultural Library" },
  { Icon: Bike, label: "Farm Excursions" },
  { Icon: Music, label: "Live Performances" },
  { Icon: Shield, label: "24h Security" },
  { Icon: Camera, label: "Photography Tours" },
  { Icon: Coffee, label: "Heritage Coffee Bar" },
  { Icon: Globe, label: "Multilingual Staff" },
];

/**
 * Category section header: pattern divider, eyebrow, title, description and a side note.
 */
function CategoryHeader({ accent, eyebrow, title, description, Icon, note }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex flex-col gap-3">
        <PatternDivider color={accent} className="w-40" />
        <span className="text-xs tracking-[0.3em] uppercase" style={{ color: accent }}>
          {eyebrow}
        </span>
        <h2 className="font-headings text-3xl italic text-cream">{title}</h2>
        <p className="max-w-lg text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="flex items-center gap-2 text-muted-foreground">
        <Icon size={14} className="shrink-0" />
        <span className="text-sm">{note}</span>
      </div>
    </div>
  );
}

export default function Accommodation() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="w-full bg-background font-body text-foreground">
      {/* ───────────────── Hero ───────────────── */}
      <section className="relative h-[580px] w-full">
        <img
          src={IMAGES.accomHero}
          alt="Aerial view of the Cameroon Mosaic Heritage Resort grounds at sunset"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(14,12,9,0.3) 0%, rgba(14,12,9,0.55) 45%, rgba(14,12,9,0.95) 100%)",
          }}
        />
        <div
          className="absolute top-0 right-0 h-40 w-40 opacity-20"
          style={{
            background:
              "repeating-linear-gradient(-45deg, #c8922a 0px, #c8922a 1px, transparent 1px, transparent 12px)",
            WebkitMaskImage: "radial-gradient(circle at top right, black 40%, transparent 70%)",
            maskImage: "radial-gradient(circle at top right, black 40%, transparent 70%)",
          }}
        />

        <NavBar />

        <div className="absolute inset-0 top-[60px] flex flex-col items-center justify-center px-6 text-center md:px-24">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-gold" />
            <span className="text-xs tracking-[0.35em] text-gold uppercase">
              Sleep Inside the Heritage
            </span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h1
            className="max-w-3xl font-headings text-4xl italic leading-tight text-cream md:text-5xl"
            style={{ letterSpacing: "-0.5px" }}
          >
            Accommodation
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sand opacity-85">
            Each room, villa, and suite at Cameroon Mosaic Heritage Resort is a living expression of
            Cameroonian culture — designed with traditional craft, surrounded by nature, and
            delivered with luxury hospitality.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              className="rounded-sm bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-dark-panel transition-opacity hover:opacity-90"
            >
              Book a Stay
            </button>
            <button
              type="button"
              className="rounded-sm border border-cream/40 px-8 py-3.5 text-sm font-medium tracking-wide text-cream transition-colors hover:border-cream"
            >
              View Availability
            </button>
          </div>
        </div>
      </section>

      {/* ───────────────── Filter / search bar ───────────────── */}
      <section className="w-full border-b border-border bg-dark-panel">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-sm px-5 py-2 text-sm transition-colors ${
                    isActive
                      ? "bg-gold font-medium text-dark-panel"
                      : "border border-border bg-input text-muted-foreground hover:text-cream"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <label className="flex items-center gap-2 rounded-sm border border-border bg-input px-4 py-2 text-muted-foreground">
              <Users size={13} className="shrink-0" />
              <span className="sr-only">Number of guests</span>
              <select
                className="appearance-none bg-transparent text-sm text-muted-foreground focus:outline-none"
                defaultValue="2"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
              </select>
            </label>

            <label className="flex items-center gap-2 rounded-sm border border-border bg-input px-4 py-2 text-muted-foreground">
              <Calendar size={13} className="shrink-0" />
              <span className="sr-only">Check-in and check-out dates</span>
              <span className="text-sm">Check-in – Check-out</span>
            </label>

            <button
              type="button"
              className="rounded-sm bg-gold px-5 py-2 text-sm font-medium tracking-wide text-dark-panel transition-opacity hover:opacity-90"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* ───────────────── Heritage Villas ───────────────── */}
      <section className="w-full px-6 py-20 md:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          <CategoryHeader
            accent={GOLD}
            eyebrow="Category One"
            title="Heritage Villas"
            description="Traditional Cameroonian architecture reinterpreted as luxury accommodation — each villa a tribute to a distinct cultural tradition."
            Icon={House}
            note="2 Villas Available"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {HERITAGE_VILLAS.map((room) => (
              <AccommodationCard key={room.title} accent={GOLD} {...room} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── Eco Lodges ───────────────── */}
      <section className="w-full border-y border-border bg-muted px-6 py-20 md:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          <CategoryHeader
            accent={FOREST}
            eyebrow="Category Two"
            title="Eco Lodges"
            description="Immersive nature escapes built from local sustainable materials — where the rainforest becomes your living room."
            Icon={Leaf}
            note="Eco-Certified Lodging"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {ECO_LODGES.map((room) => (
              <AccommodationCard key={room.title} accent={FOREST} {...room} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── Royal Suites ───────────────── */}
      <section className="w-full px-6 py-20 md:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          <CategoryHeader
            accent={TERRACOTTA}
            eyebrow="Category Three"
            title="Royal Suites"
            description="The ultimate expression of Cameroonian royal heritage — our suites channel the grandeur of sultans, fons, and traditional kingdoms."
            Icon={Crown}
            note="Signature Collection"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {ROYAL_SUITES.map((room) => (
              <AccommodationCard key={room.title} accent={TERRACOTTA} {...room} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── Resort-wide amenities ───────────────── */}
      <section className="w-full border-y border-border bg-dark-panel px-6 py-14 md:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <PatternDivider className="mx-auto w-48" />
            <span className="text-xs tracking-[0.3em] text-gold uppercase">Resort-Wide Amenities</span>
            <h2 className="font-headings text-2xl italic text-cream">
              Everything You Need, Nothing You Don't
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {AMENITIES.map(({ Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 rounded-sm border border-border bg-dark-panel p-4 text-center"
              >
                <Icon size={20} className="text-gold" />
                <span className="text-xs leading-snug text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── Booking CTA + Quick Enquiry ───────────────── */}
      <section className="relative w-full overflow-hidden py-20">
        <img
          src={IMAGES.accomBookCta}
          alt="Resort pool and villa terrace bathed in golden sunset light"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(14,12,9,0.8)" }} />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #c8922a 0px, #c8922a 1px, transparent 1px, transparent 20px)",
          }}
        />

        <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-12 px-4 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex flex-col gap-4">
            <PatternDivider className="w-40" />
            <h2 className="font-headings text-3xl italic text-cream">Ready to Book Your Stay?</h2>
            <p className="max-w-lg text-base leading-loose text-muted-foreground">
              Reach out via WhatsApp or email to check availability, ask questions, and secure your
              accommodation at Cameroon Mosaic Heritage Resort.
            </p>
            <div className="mt-2 flex flex-wrap gap-4">
              <button
                type="button"
                className="flex items-center gap-2 rounded-sm bg-gold px-7 py-3 text-sm font-medium tracking-wide text-dark-panel transition-opacity hover:opacity-90"
              >
                <Calendar size={15} />
                Send Booking Enquiry
              </button>
              <button
                type="button"
                className="flex items-center gap-2 rounded-sm border border-gold px-7 py-3 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-gold/10"
              >
                <MessageCircle size={15} />
                WhatsApp Us
              </button>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-sm shrink-0 flex-col gap-4 rounded-sm border border-border bg-dark-panel p-8 lg:w-[340px]"
          >
            <h3 className="font-headings text-lg italic text-cream">Quick Enquiry</h3>
            <PatternDivider />

            <label className="sr-only" htmlFor="enquiry-name">
              Full Name
            </label>
            <input
              id="enquiry-name"
              type="text"
              placeholder="Full Name"
              className="rounded-sm border border-border bg-input px-3 py-2.5 text-sm text-cream placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
            />

            <label className="sr-only" htmlFor="enquiry-email">
              Email Address
            </label>
            <input
              id="enquiry-email"
              type="email"
              placeholder="Email Address"
              className="rounded-sm border border-border bg-input px-3 py-2.5 text-sm text-cream placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
            />

            <label className="sr-only" htmlFor="enquiry-phone">
              Phone Number
            </label>
            <input
              id="enquiry-phone"
              type="tel"
              placeholder="Phone Number"
              className="rounded-sm border border-border bg-input px-3 py-2.5 text-sm text-cream placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
            />

            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="sr-only" htmlFor="enquiry-checkin">
                  Check-in date
                </label>
                <input
                  id="enquiry-checkin"
                  type="date"
                  aria-label="Check-in date"
                  className="rounded-sm border border-border bg-input px-3 py-2.5 text-sm text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="sr-only" htmlFor="enquiry-checkout">
                  Check-out date
                </label>
                <input
                  id="enquiry-checkout"
                  type="date"
                  aria-label="Check-out date"
                  className="rounded-sm border border-border bg-input px-3 py-2.5 text-sm text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>
            </div>

            <label className="sr-only" htmlFor="enquiry-type">
              Accommodation Type
            </label>
            <select
              id="enquiry-type"
              defaultValue=""
              className="rounded-sm border border-border bg-input px-3 py-2.5 text-sm text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
            >
              <option value="" disabled>
                Accommodation Type
              </option>
              <option value="heritage-villa">Heritage Villa</option>
              <option value="eco-lodge">Eco Lodge</option>
              <option value="royal-suite">Royal Suite</option>
            </select>

            <button
              type="submit"
              className="mt-1 w-full rounded-sm bg-gold py-3 text-sm font-medium tracking-wide text-dark-panel transition-opacity hover:opacity-90"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
