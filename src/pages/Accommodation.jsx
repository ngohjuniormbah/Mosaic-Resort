import { useState } from "react";
import {
  Bed,
  Users,
  Wifi,
  Utensils,
  Waves,
  Sparkles,
  Car,
  BookOpen,
  Tractor,
  Music,
  Shield,
  Camera,
  Coffee,
  Languages,
  Star,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import NavBar from "../components/NavBar";
import SiteFooter from "../components/SiteFooter";
import PatternDivider from "../components/PatternDivider";
import { IMAGES } from "../data/images";

const CATEGORIES = ["All", "Heritage Villas", "Eco Lodges", "Royal Suites"];

const VILLAS = [
  {
    id: "bamileke",
    name: "Bamileke Heritage Villa",
    size: "48m²",
    guests: 2,
    price: "XAF 85,000",
    image: IMAGES.accomBamileke,
    tags: ["King Bed", "Private Terrace", "Air Conditioning", "Cultural Décor", "En-suite Bath"],
    badge: null,
    category: "Heritage Villas",
  },
  {
    id: "tikar",
    name: "Tikar Royal Villa",
    size: "56m²",
    guests: 2,
    price: "XAF 95,000",
    image: IMAGES.accomTikar,
    tags: ["King Bed", "Plunge Pool", "Air Conditioning", "Tikar Artwork", "Rain Shower"],
    badge: "Heritage Collection",
    category: "Heritage Villas",
  },
  {
    id: "forest",
    name: "Forest Canopy Lodge",
    size: "38m²",
    guests: 2,
    price: "XAF 65,000",
    image: IMAGES.accomForest,
    tags: ["Queen Bed", "Forest View", "Eco Materials", "Outdoor Shower", "Bird Watching"],
    badge: "Most Popular",
    category: "Eco Lodges",
  },
  {
    id: "river",
    name: "River Valley Lodge",
    size: "34m²",
    guests: 2,
    price: "XAF 58,000",
    image: IMAGES.accomRiver,
    tags: ["Queen Bed", "River View", "Eco Materials", "Hammock Terrace", "Nature Trails"],
    badge: null,
    category: "Eco Lodges",
  },
  {
    id: "sultan",
    name: "Sultan's Royal Suite",
    size: "95m²",
    guests: 2,
    price: "XAF 180,000",
    image: IMAGES.accomSultan,
    tags: ["King Bed", "Private Pool", "Butler Service", "Sultan Décor", "Jacuzzi"],
    badge: "Signature Suite",
    category: "Royal Suites",
  },
  {
    id: "fon",
    name: "Fon's Palace Suite",
    size: "120m²",
    guests: 4,
    price: "XAF 150,000",
    image: IMAGES.accomFon,
    tags: ["2 King Beds", "Palace Garden", "Butler Service", "Royal Décor", "Private Dining"],
    badge: null,
    category: "Royal Suites",
  },
];

const AMENITIES = [
  { Icon: Utensils, label: "Cultural Restaurant" },
  { Icon: Wifi, label: "High-Speed Wi-Fi" },
  { Icon: Waves, label: "Resort Pool" },
  { Icon: Sparkles, label: "Heritage Spa" },
  { Icon: Car, label: "Airport Transfer" },
  { Icon: BookOpen, label: "Cultural Library" },
  { Icon: Tractor, label: "Farm Excursions" },
  { Icon: Music, label: "Live Performances" },
  { Icon: Shield, label: "24h Security" },
  { Icon: Camera, label: "Photography Tours" },
  { Icon: Coffee, label: "Heritage Coffee Bar" },
  { Icon: Languages, label: "Multilingual Staff" },
];

const SECTION_ACCENT = {
  "Heritage Villas": { color: "#c8922a", label: "Heritage Villas", bg: "" },
  "Eco Lodges": { color: "#4a7a40", label: "Eco Lodges", bg: "bg-muted" },
  "Royal Suites": { color: "#c4532a", label: "Royal Suites", bg: "" },
};

function SectionLabel({ children, color = "#c8922a" }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px w-8 opacity-60" style={{ background: color }} />
      <span className="text-xs tracking-[0.25em] uppercase" style={{ color }}>
        {children}
      </span>
      <div className="h-px w-8 opacity-60" style={{ background: color }} />
    </div>
  );
}

function AccomCard({ room, accent }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-sm border border-border bg-dark-panel">
      <div className="relative h-56 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {room.badge && (
          <span
            className="absolute top-3 left-3 rounded-sm px-2.5 py-1 text-xs font-medium tracking-wide text-dark-panel"
            style={{ background: accent }}
          >
            {room.badge}
          </span>
        )}
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{ background: "linear-gradient(to top, rgba(19,15,10,0.85), transparent)" }}
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-headings text-lg font-bold text-cream" style={{ fontStyle: "italic" }}>
            {room.name}
          </h3>
          <div className="shrink-0 text-right">
            <div className="text-base font-semibold" style={{ color: accent }}>
              {room.price}
            </div>
            <div className="text-xs text-muted-foreground">per night</div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Bed size={12} />
            {room.size}
          </span>
          <span className="flex items-center gap-1.5">
            <Users size={12} />
            Up to {room.guests} guests
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {room.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-border px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-3 pt-2">
          <button
            type="button"
            className="flex-1 rounded-sm py-2.5 text-sm font-medium tracking-wide text-dark-panel transition-opacity hover:opacity-90"
            style={{ background: accent }}
          >
            Book Now
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-sm border border-border px-4 py-2.5 text-sm text-cream transition-colors hover:border-current"
            style={{ "--tw-border-opacity": 1 }}
          >
            Details
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Accommodation() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [enquiry, setEnquiry] = useState({ name: "", email: "", checkin: "", checkout: "", guests: "", notes: "" });

  const visibleRooms = activeCategory === "All" ? VILLAS : VILLAS.filter((r) => r.category === activeCategory);

  const villaRooms = visibleRooms.filter((r) => r.category === "Heritage Villas");
  const ecoRooms = visibleRooms.filter((r) => r.category === "Eco Lodges");
  const suiteRooms = visibleRooms.filter((r) => r.category === "Royal Suites");

  const sections = [
    { key: "Heritage Villas", rooms: villaRooms },
    { key: "Eco Lodges", rooms: ecoRooms },
    { key: "Royal Suites", rooms: suiteRooms },
  ].filter((s) => s.rooms.length > 0);

  return (
    <div className="min-h-screen bg-background text-cream">
      {/* Hero */}
      <section className="relative flex h-[580px] items-end overflow-hidden">
        <img
          src={IMAGES.accomHero ?? IMAGES.accomVilla}
          alt="Accommodation hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(14,12,9,0.45) 0%, rgba(14,12,9,0.65) 60%, rgba(14,12,9,0.9) 100%)",
          }}
        />
        {/* Decorative hatching */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #c8922a 0, #c8922a 1px, transparent 0, transparent 50%)",
            backgroundSize: "10px 10px",
          }}
        />

        <NavBar />

        <div className="relative z-10 w-full px-6 pb-16 md:px-16">
          <SectionLabel color="#c8922a">Cameroon Empire Heritage Resort</SectionLabel>
          <h1
            className="mt-4 font-headings text-5xl font-bold text-cream md:text-6xl"
            style={{ fontStyle: "italic" }}
          >
            Sleep Inside the Heritage
          </h1>
          <p className="mt-3 text-xl tracking-widest text-gold uppercase">Accommodation</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              className="rounded-sm bg-gold px-7 py-3 text-sm font-medium tracking-wide text-dark-panel transition-opacity hover:opacity-90"
            >
              Browse Rooms
            </button>
            <button
              type="button"
              className="rounded-sm border border-cream/40 px-7 py-3 text-sm font-medium tracking-wide text-cream transition-colors hover:border-cream"
            >
              Quick Enquiry
            </button>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-0 z-20 border-b border-border bg-dark-panel shadow-md">
        <div className="flex flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-16">
          <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 rounded-sm px-5 py-2 text-sm font-medium tracking-wide transition-colors ${
                  activeCategory === cat
                    ? "bg-gold text-dark-panel"
                    : "border border-border text-muted-foreground hover:text-cream"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <input
              type="number"
              placeholder="Guests"
              min={1}
              className="w-24 rounded-sm border border-border bg-input px-3 py-2 text-sm text-cream placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
            />
            <input
              type="date"
              className="rounded-sm border border-border bg-input px-3 py-2 text-sm text-cream focus:outline-none focus:ring-1 focus:ring-gold"
            />
            <button
              type="button"
              className="rounded-sm bg-gold px-6 py-2 text-sm font-medium tracking-wide text-dark-panel transition-opacity hover:opacity-90"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Room sections */}
      {sections.map(({ key, rooms }) => {
        const accent = SECTION_ACCENT[key];
        return (
          <section
            key={key}
            className={`px-6 py-20 md:px-16 ${accent.bg}`}
          >
            <div className="mb-12 flex flex-col items-center gap-3 text-center">
              <SectionLabel color={accent.color}>{accent.label}</SectionLabel>
              <h2
                className="mt-2 font-headings text-4xl font-bold text-cream"
                style={{ fontStyle: "italic" }}
              >
                {key === "Heritage Villas" && "Traditional Luxury, Reimagined"}
                {key === "Eco Lodges" && "Connected to Nature"}
                {key === "Royal Suites" && "The Pinnacle of Heritage Luxury"}
              </h2>
              <PatternDivider color={accent.color} className="mt-4 max-w-xs" />
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
              {rooms.map((room) => (
                <AccomCard key={room.id} room={room} accent={accent.color} />
              ))}
            </div>
          </section>
        );
      })}

      {/* Amenities */}
      <section className="bg-dark-panel px-6 py-20 md:px-16">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <SectionLabel color="#c8922a">Every Stay Includes</SectionLabel>
          <h2
            className="mt-2 font-headings text-4xl font-bold text-cream"
            style={{ fontStyle: "italic" }}
          >
            Resort Amenities
          </h2>
          <PatternDivider color="#c8922a" className="mt-4 max-w-xs" />
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {AMENITIES.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-sm border border-border bg-input p-5 text-center transition-colors hover:border-gold/50"
            >
              <Icon size={22} className="text-gold" />
              <span className="text-xs leading-snug text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="relative overflow-hidden">
        <img
          src={IMAGES.accomCta ?? IMAGES.accomVilla}
          alt="Book your stay"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(14,12,9,0.92) 0%, rgba(14,12,9,0.80) 55%, rgba(14,12,9,0.65) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-24 md:px-16 lg:grid-cols-2">
          {/* Left */}
          <div className="flex flex-col justify-center gap-6">
            <SectionLabel color="#c8922a">Reserve Your Stay</SectionLabel>
            <h2
              className="font-headings text-4xl font-bold text-cream md:text-5xl"
              style={{ fontStyle: "italic" }}
            >
              Begin Your Heritage Journey
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Each room, villa, and suite at Cameroon Empire Heritage Resort is a living expression of
              Cameroonian culture — designed with traditional craft, surrounded by nature, and delivered
              with luxury hospitality.
            </p>
            <div className="mt-2 flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2.5">
                <MapPin size={14} className="shrink-0 text-gold" />
                <span>Yaoundé, Cameroon</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="shrink-0 text-gold" />
                <span>+237 600 000 000</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="shrink-0 text-gold" />
                <span>reservations@cameroonempire.com</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                type="button"
                className="rounded-sm bg-gold px-7 py-3 text-sm font-medium tracking-wide text-dark-panel transition-opacity hover:opacity-90"
              >
                View All Rooms
              </button>
              <button
                type="button"
                className="rounded-sm border border-cream/40 px-7 py-3 text-sm font-medium tracking-wide text-cream transition-colors hover:border-cream"
              >
                Call Us
              </button>
            </div>
          </div>

          {/* Right — enquiry form */}
          <div className="rounded-sm border border-border bg-dark-panel/90 p-8 backdrop-blur-sm">
            <h3
              className="mb-6 font-headings text-xl font-bold text-cream"
              style={{ fontStyle: "italic" }}
            >
              Quick Enquiry
            </h3>
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs tracking-wide text-muted-foreground">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={enquiry.name}
                    onChange={(e) => setEnquiry({ ...enquiry, name: e.target.value })}
                    className="rounded-sm border border-border bg-input px-3 py-2.5 text-sm text-cream placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs tracking-wide text-muted-foreground">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={enquiry.email}
                    onChange={(e) => setEnquiry({ ...enquiry, email: e.target.value })}
                    className="rounded-sm border border-border bg-input px-3 py-2.5 text-sm text-cream placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs tracking-wide text-muted-foreground">Check-in</label>
                  <input
                    type="date"
                    value={enquiry.checkin}
                    onChange={(e) => setEnquiry({ ...enquiry, checkin: e.target.value })}
                    className="rounded-sm border border-border bg-input px-3 py-2.5 text-sm text-cream focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs tracking-wide text-muted-foreground">Check-out</label>
                  <input
                    type="date"
                    value={enquiry.checkout}
                    onChange={(e) => setEnquiry({ ...enquiry, checkout: e.target.value })}
                    className="rounded-sm border border-border bg-input px-3 py-2.5 text-sm text-cream focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-wide text-muted-foreground">Number of Guests</label>
                <input
                  type="number"
                  min={1}
                  placeholder="2"
                  value={enquiry.guests}
                  onChange={(e) => setEnquiry({ ...enquiry, guests: e.target.value })}
                  className="rounded-sm border border-border bg-input px-3 py-2.5 text-sm text-cream placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-wide text-muted-foreground">Special Requests</label>
                <textarea
                  rows={3}
                  placeholder="Any special requirements or questions..."
                  value={enquiry.notes}
                  onChange={(e) => setEnquiry({ ...enquiry, notes: e.target.value })}
                  className="resize-none rounded-sm border border-border bg-input px-3 py-2.5 text-sm text-cream placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-sm bg-gold py-3 text-sm font-medium tracking-wide text-dark-panel transition-opacity hover:opacity-90"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
