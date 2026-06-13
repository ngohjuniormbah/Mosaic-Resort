import { useState } from "react";
import {
  Users,
  Maximize,
  ChevronDown,
  Calendar,
  Home,
  Leaf,
  Crown,
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
  MessageCircle,
} from "lucide-react";
import NavBar from "../components/NavBar";
import SiteFooter from "../components/SiteFooter";
import PatternDivider from "../components/PatternDivider";
import { IMAGES } from "../data/images";

const GOLD = "#c8922a";
const TERRACOTTA = "#c4532a";
const FOREST = "#4a7a40";

const CATEGORIES = ["All", "Heritage Villas", "Eco Lodges", "Royal Suites"];

const SECTIONS = [
  {
    key: "Heritage Villas",
    label: "Category One",
    title: "Heritage Villas",
    accent: GOLD,
    muted: false,
    description:
      "Traditional Cameroonian architecture reinterpreted as luxury accommodation — each villa a tribute to a distinct cultural tradition.",
    meta: { Icon: Home, text: "2 Villas Available" },
    rooms: [
      {
        name: "Bamileke Heritage Villa",
        category: "Heritage Villa",
        image: IMAGES.accomBamileke,
        description:
          "Inspired by the elevated compound architecture of the Bamileke chiefdoms — hand-carved wooden panels, woven raffia textiles, and a private terrace with sweeping views over the resort.",
        guests: 2,
        size: "48m²",
        price: "XAF 85,000",
        tags: ["King Bed", "Private Terrace", "Air Conditioning", "Cultural Décor", "En-suite Bath"],
      },
      {
        name: "Tikar Royal Villa",
        category: "Heritage Villa",
        image: IMAGES.accomTikar,
        badge: "Heritage Collection",
        description:
          "A grand villa adorned with Tikar geometric motifs, thatched canopy ceilings, and hand-painted walls celebrating the heritage of Cameroon's central plateau kingdoms.",
        guests: 2,
        size: "56m²",
        price: "XAF 95,000",
        tags: ["King Bed", "Plunge Pool", "Air Conditioning", "Tikar Artwork", "Rain Shower"],
      },
    ],
  },
  {
    key: "Eco Lodges",
    label: "Category Two",
    title: "Eco Lodges",
    accent: FOREST,
    muted: true,
    description:
      "Immersive nature escapes built from local sustainable materials — where the rainforest becomes your living room.",
    meta: { Icon: Leaf, text: "Eco-Certified Lodging" },
    rooms: [
      {
        name: "Forest Canopy Lodge",
        category: "Eco Lodge",
        image: IMAGES.accomForest,
        badge: "Most Popular",
        description:
          "Elevated above the rainforest floor among the tree canopy, this eco-lodge offers an immersive nature experience with sustainable materials and open-air living.",
        guests: 2,
        size: "38m²",
        price: "XAF 65,000",
        tags: ["Queen Bed", "Open-Air Deck", "Ceiling Fan", "Forest Views", "Outdoor Shower"],
      },
      {
        name: "River Valley Lodge",
        category: "Eco Lodge",
        image: IMAGES.accomRiver,
        description:
          "Nestled beside a flowing stream with views of Cameroon's lush valleys. Built entirely from local timber and stone with a deep commitment to environmental harmony.",
        guests: 2,
        size: "34m²",
        price: "XAF 58,000",
        tags: ["Twin or Queen", "River View", "Ceiling Fan", "Stone Bath", "Private Garden"],
      },
    ],
  },
  {
    key: "Royal Suites",
    label: "Category Three",
    title: "Royal Suites",
    accent: TERRACOTTA,
    muted: false,
    description:
      "The ultimate expression of Cameroonian royal heritage — our suites channel the grandeur of sultans, fons, and traditional kingdoms.",
    meta: { Icon: Crown, text: "Signature Collection" },
    rooms: [
      {
        name: "Sultan's Royal Suite",
        category: "Royal Suite",
        image: IMAGES.accomSultan,
        badge: "Signature Suite",
        description:
          "The pinnacle of luxury — inspired by the royal palace of the Bamoun Sultan of Foumban. Gold-lacquered furnishings, hand-embroidered fabrics, and a private courtyard garden.",
        guests: 2,
        size: "95m²",
        price: "XAF 180,000",
        tags: ["King Bed", "Private Courtyard", "Jacuzzi", "Butler Service", "Dining Room"],
      },
      {
        name: "Fon's Palace Suite",
        category: "Royal Suite",
        image: IMAGES.accomFon,
        description:
          "A regal two-bedroom suite echoing the grandeur of the Grassfields Fon palaces — rich indigo textiles, carved thrones, ceremonial masks, and a panoramic balcony.",
        guests: 4,
        size: "120m²",
        price: "XAF 150,000",
        tags: ["2 King Bedrooms", "Panoramic Balcony", "Private Pool", "Living Room", "Rain Shower"],
      },
    ],
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

function AccommodationCard({ room, accent }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-sm border border-border bg-dark-panel">
      <div className="relative h-[240px]">
        <img src={room.image} alt={room.name} className="h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(14,12,9,0.7) 0%, transparent 55%)" }}
        />
        <div
          className="absolute top-0 left-0 h-8 w-8"
          style={{ borderTop: `2px solid ${accent}`, borderLeft: `2px solid ${accent}` }}
        />
        <div
          className="absolute top-0 right-0 h-8 w-8"
          style={{ borderTop: `2px solid ${accent}`, borderRight: `2px solid ${accent}` }}
        />
        {room.badge && (
          <div className="absolute top-3 right-0 left-0 flex justify-center">
            <span
              className="px-3 py-1 text-xs font-medium tracking-widest text-dark-panel uppercase"
              style={{ background: accent }}
            >
              {room.badge}
            </span>
          </div>
        )}
        <span
          className="absolute bottom-3 left-4 text-xs tracking-widest uppercase"
          style={{ color: accent }}
        >
          {room.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="font-headings text-xl leading-snug text-cream" style={{ fontStyle: "italic" }}>
          {room.name}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{room.description}</p>

        <div className="flex items-center gap-4 border-t pt-2" style={{ borderColor: "#2a2018" }}>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Users size={12} />
            <span className="text-xs">{room.guests} Guests</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Maximize size={12} />
            <span className="text-xs">{room.size}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {room.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm px-2 py-0.5 text-xs text-muted-foreground"
              style={{ background: "#1a1510", border: "1px solid #2a2018" }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t pt-4" style={{ borderColor: "#2a2018" }}>
          <div>
            <span className="font-headings text-xl font-bold" style={{ color: accent }}>
              {room.price}
            </span>
            <span className="ml-1 text-xs text-muted-foreground">/ night</span>
          </div>
          <a
            href="#enquiry"
            className="rounded-sm px-5 py-2 text-xs font-medium tracking-wide transition-opacity hover:opacity-80"
            style={{ background: `${accent}22`, border: `1px solid ${accent}66`, color: accent }}
          >
            Enquire Now
          </a>
        </div>
      </div>
    </div>
  );
}

const WHATSAPP_NUMBER = "237650050769";

export default function Accommodation() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [enquiry, setEnquiry] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    type: "",
  });

  const updateEnquiry = (field) => (e) =>
    setEnquiry((prev) => ({ ...prev, [field]: e.target.value }));

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    const message = [
      "Hello Cameroon Mosaic Heritage Empire! I would like to book a stay.",
      "",
      `Name: ${enquiry.name}`,
      `Email: ${enquiry.email}`,
      `Phone: ${enquiry.phone}`,
      `Check-in: ${enquiry.checkin}`,
      `Check-out: ${enquiry.checkout}`,
      `Accommodation Type: ${enquiry.type}`,
    ].join("\n");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const visibleSections =
    activeCategory === "All" ? SECTIONS : SECTIONS.filter((s) => s.key === activeCategory);

  return (
    <div className="w-full bg-background font-body text-foreground">
      {/* Hero */}
      <section className="relative h-[580px] w-full">
        <img
          src={IMAGES.heroToghu}
          alt="Toghu — the traditional regalia of Cameroon's North West region"
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
            maskImage: "radial-gradient(circle at top right, black 40%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle at top right, black 40%, transparent 70%)",
          }}
        />
        <NavBar />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-16 text-center md:px-24">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10" style={{ background: GOLD }} />
            <span className="text-xs tracking-[0.35em] text-gold uppercase">Sleep Inside the Heritage</span>
            <div className="h-px w-10" style={{ background: GOLD }} />
          </div>
          <h1
            className="max-w-3xl font-headings text-5xl leading-tight text-cream"
            style={{ fontStyle: "italic", letterSpacing: "-0.5px" }}
          >
            Accommodation
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sand" style={{ opacity: 0.85 }}>
            Each room, villa, and suite at Cameroon Mosaic Heritage Empire is a living expression of Cameroonian
            culture — designed with traditional craft, surrounded by nature, and delivered with luxury hospitality.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#enquiry"
              className="rounded-sm bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-dark-panel transition-opacity hover:opacity-90"
            >
              Book a Stay
            </a>
            <a
              href="#rooms"
              className="rounded-sm border border-cream/40 px-8 py-3.5 text-sm font-medium tracking-wide text-cream transition-colors hover:border-cream"
            >
              View Availability
            </a>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="w-full border-b border-border bg-dark-panel">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-sm px-5 py-2 text-sm transition-colors ${
                  activeCategory === cat
                    ? "bg-gold font-medium text-background"
                    : "border border-border bg-input text-muted-foreground hover:text-cream"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="flex items-center gap-2 rounded-sm border border-border bg-input px-4 py-2 text-sm text-muted-foreground"
            >
              <Users size={13} />
              2 Guests
              <ChevronDown size={13} />
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-sm border border-border bg-input px-4 py-2 text-sm text-muted-foreground"
            >
              <Calendar size={13} />
              Check-in – Check-out
            </button>
            <button
              type="button"
              className="rounded-sm bg-gold px-5 py-2 text-sm font-medium tracking-wide text-dark-panel transition-opacity hover:opacity-90"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Room sections */}
      <div id="rooms" />
      {visibleSections.map((section) => (
        <section
          key={section.key}
          className={`w-full px-6 py-20 md:px-16 ${section.muted ? "border-y border-border bg-muted" : ""}`}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div className="flex flex-col gap-3">
                <PatternDivider color={section.accent} className="w-40" />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: section.accent }}>
                  {section.label}
                </span>
                <h2 className="font-headings text-3xl text-cream" style={{ fontStyle: "italic" }}>
                  {section.title}
                </h2>
                <p className="max-w-lg text-sm text-muted-foreground">{section.description}</p>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <section.meta.Icon size={14} />
                <span className="text-sm">{section.meta.text}</span>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {section.rooms.map((room) => (
                <AccommodationCard key={room.name} room={room} accent={section.accent} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Amenities */}
      <section className="w-full border-y border-border bg-dark-panel px-6 py-14 md:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <PatternDivider className="mx-auto w-48" />
            <span className="text-xs tracking-[0.3em] text-gold uppercase">Resort-Wide Amenities</span>
            <h2 className="font-headings text-2xl text-cream" style={{ fontStyle: "italic" }}>
              Everything You Need, Nothing You Don't
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {AMENITIES.map(({ Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 rounded-sm border border-border bg-background p-4 text-center"
              >
                <Icon size={20} className="text-gold" />
                <span className="text-xs leading-snug text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA + quick enquiry */}
      <section id="enquiry" className="relative w-full overflow-hidden py-20">
        <img
          src={IMAGES.accomCta}
          alt="Resort pool at sunset"
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
        <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-16 px-6 lg:flex-row lg:items-center">
          <div className="flex flex-col gap-4">
            <PatternDivider className="w-40" />
            <h2 className="font-headings text-3xl text-cream" style={{ fontStyle: "italic" }}>
              Ready to Book Your Stay?
            </h2>
            <p className="max-w-lg text-base leading-loose text-muted-foreground">
              Reach out via WhatsApp or email to check availability, ask questions, and secure your accommodation at
              Cameroon Mosaic Heritage Empire.
            </p>
            <div className="mt-2 flex flex-wrap gap-4">
              <a
                href="mailto:info@cameroonmosaicempire.com?subject=Booking%20Enquiry"
                className="flex items-center gap-2 rounded-sm bg-gold px-7 py-3 text-sm font-medium tracking-wide text-dark-panel transition-opacity hover:opacity-90"
              >
                <Calendar size={15} />
                Send Booking Enquiry
              </a>
              <a
                href="https://wa.me/237650050769"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-sm border border-gold px-7 py-3 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-gold/10"
              >
                <MessageCircle size={15} />
                WhatsApp Us
              </a>
            </div>
          </div>

          <form
            className="flex w-full max-w-[340px] shrink-0 flex-col gap-4 rounded-sm border border-border bg-dark-panel p-8"
            onSubmit={handleEnquirySubmit}
          >
            <h3 className="font-headings text-lg text-cream" style={{ fontStyle: "italic" }}>
              Quick Enquiry
            </h3>
            <PatternDivider />
            <label className="sr-only" htmlFor="enquiry-name">Full Name</label>
            <input
              id="enquiry-name"
              type="text"
              placeholder="Full Name"
              required
              value={enquiry.name}
              onChange={updateEnquiry("name")}
              className="rounded-sm border border-border bg-input px-3 py-2.5 text-sm text-cream placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
            />
            <label className="sr-only" htmlFor="enquiry-email">Email Address</label>
            <input
              id="enquiry-email"
              type="email"
              placeholder="Email Address"
              required
              value={enquiry.email}
              onChange={updateEnquiry("email")}
              className="rounded-sm border border-border bg-input px-3 py-2.5 text-sm text-cream placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
            />
            <label className="sr-only" htmlFor="enquiry-phone">Phone Number</label>
            <input
              id="enquiry-phone"
              type="tel"
              placeholder="Phone Number"
              required
              value={enquiry.phone}
              onChange={updateEnquiry("phone")}
              className="rounded-sm border border-border bg-input px-3 py-2.5 text-sm text-cream placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
            />
            <div className="grid grid-cols-2 gap-3">
              <label className="sr-only" htmlFor="enquiry-checkin">Check-in</label>
              <input
                id="enquiry-checkin"
                type="date"
                required
                value={enquiry.checkin}
                onChange={updateEnquiry("checkin")}
                className="rounded-sm border border-border bg-input px-3 py-2.5 text-sm text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
              />
              <label className="sr-only" htmlFor="enquiry-checkout">Check-out</label>
              <input
                id="enquiry-checkout"
                type="date"
                required
                value={enquiry.checkout}
                onChange={updateEnquiry("checkout")}
                className="rounded-sm border border-border bg-input px-3 py-2.5 text-sm text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>
            <label className="sr-only" htmlFor="enquiry-type">Accommodation Type</label>
            <select
              id="enquiry-type"
              className="rounded-sm border border-border bg-input px-3 py-2.5 text-sm text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
              required
              value={enquiry.type}
              onChange={updateEnquiry("type")}
            >
              <option value="" disabled>
                Accommodation Type
              </option>
              <option>Heritage Villa</option>
              <option>Eco Lodge</option>
              <option>Royal Suite</option>
            </select>
            <button
              type="submit"
              className="mt-1 w-full rounded-sm bg-gold py-3 text-sm font-medium tracking-wide text-dark-panel transition-opacity hover:opacity-90"
            >
              Book via WhatsApp
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Your booking details open in WhatsApp — just hit send.
            </p>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
