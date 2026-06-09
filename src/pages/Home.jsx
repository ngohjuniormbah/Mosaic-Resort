import {
  ChevronDown,
  Leaf,
  Shield,
  Sprout,
  Users,
  ArrowRight,
  Shirt,
  Gem,
  House,
  Package,
  Calendar,
  MessageCircle,
  Mail,
} from "lucide-react";
import NavBar from "../components/NavBar.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import PatternDivider from "../components/PatternDivider.jsx";
import ExperienceCard from "../components/ExperienceCard.jsx";
import RegionCard from "../components/RegionCard.jsx";
import { IMAGES } from "../data/images.js";

const STATS = [
  { value: "10", label: "Regions of Cameroon" },
  { value: "250+", label: "Ethnic Groups" },
  { value: "40+", label: "Curated Experiences" },
  { value: "5★", label: "Heritage Lodging" },
  { value: "100%", label: "Authentic & Local" },
];

const STORY_HIGHLIGHTS = [
  { Icon: Shield, label: "Cultural Preservation" },
  { Icon: Sprout, label: "Sustainability" },
  { Icon: Users, label: "Community First" },
];

const EXPERIENCES = [
  {
    image: IMAGES.expStorytelling,
    category: "Cultural",
    title: "Storytelling Under The Stars",
    description:
      "Ancient Cameroonian folklore told by village elders around an open fire beneath the African sky.",
    duration: "3 hours",
  },
  {
    image: IMAGES.expCocoa,
    category: "Agriculture",
    title: "Cocoa Harvest & Farm Tour",
    description:
      "Walk cocoa plantations, harvest pods by hand, and trace chocolate from bean to bar with local farmers.",
    duration: "Half day",
  },
  {
    image: IMAGES.expWeaving,
    category: "Artisan",
    title: "Weaving & Pottery Studio",
    description:
      "Learn traditional craft techniques passed down through generations of Cameroonian artisans.",
    duration: "2 hours",
  },
  {
    image: IMAGES.expDrum,
    category: "Cultural",
    title: "Drum & Dance Workshop",
    description:
      "Master the rhythms of the Bamileke drums and join ceremonial dances with professional performers.",
    duration: "2.5 hours",
  },
];

const REGIONS = [
  {
    image: IMAGES.regionWest,
    region: "West Region",
    subtitle: "Bamileke Heritage",
    tags: ["Achu", "Coffee Farms", "Chiefdoms", "Ndop Plain"],
  },
  {
    image: IMAGES.regionFarNorth,
    region: "Far North",
    subtitle: "Fulani Culture",
    tags: ["Kilishi", "Cotton Farms", "Waza Park", "Festivals"],
  },
  {
    image: IMAGES.regionSouthWest,
    region: "South West",
    subtitle: "Mount Cameroon",
    tags: ["Buea", "Limbe Beach", "Cocoa", "Trekking"],
  },
  {
    image: IMAGES.regionAdamawa,
    region: "Adamawa",
    subtitle: "Highland Plateau",
    tags: ["Ngaoundéré", "Cattle", "Scenic Plateau", "Traditions"],
  },
];

const ACCOMMODATIONS = [
  {
    image: IMAGES.accomVilla,
    category: "Heritage Villas",
    title: "Traditional Architecture, Modern Comfort",
    price: "From XAF 85,000 / night →",
    badge: null,
  },
  {
    image: IMAGES.accomEcoLodge,
    category: "Eco Lodges",
    title: "Immersed in Rainforest & Nature",
    price: "From XAF 65,000 / night →",
    badge: "Most Popular",
  },
  {
    image: IMAGES.accomRoyalSuite,
    category: "Royal Suites",
    title: "Inspired by Traditional Kingdoms",
    price: "From XAF 150,000 / night →",
    badge: null,
  },
];

const SHOP_CATEGORIES = [
  { Icon: Shirt, label: "Traditional Clothing" },
  { Icon: Gem, label: "Handmade Jewelry" },
  { Icon: House, label: "Home Decor" },
  { Icon: Package, label: "Agricultural Products" },
];

const SHOP_PRODUCTS = [
  { image: IMAGES.shopToghu, label: "Toghu Attire" },
  { image: IMAGES.shopJewelry, label: "Beaded Jewelry" },
  { image: IMAGES.shopCoffee, label: "Heritage Coffee" },
  { image: IMAGES.shopMasks, label: "Cultural Masks" },
];

export default function Home() {
  return (
    <div className="w-full bg-background font-body text-foreground">
      {/* ───────────────── Hero ───────────────── */}
      <section className="relative h-[760px] w-full">
        <img
          src={IMAGES.homeHero}
          alt="Mount Cameroon volcanic peak at golden hour"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(14,12,9,0.3) 0%, rgba(14,12,9,0.55) 50%, rgba(14,12,9,0.92) 100%)",
          }}
        />
        <div
          className="absolute top-0 right-0 h-32 w-32 opacity-30"
          style={{
            background:
              "repeating-linear-gradient(45deg, #c8922a 0px, #c8922a 1px, transparent 1px, transparent 12px)",
            WebkitMaskImage: "radial-gradient(circle at top right, black 40%, transparent 70%)",
            maskImage: "radial-gradient(circle at top right, black 40%, transparent 70%)",
          }}
        />

        <NavBar />

        <div className="absolute inset-0 top-[60px] flex flex-col items-center justify-center px-6 text-center md:px-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-12 bg-gold" />
            <span className="text-xs tracking-[0.35em] text-gold uppercase">Yaoundé, Cameroon</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h1 className="max-w-4xl font-headings text-4xl italic leading-tight text-cream md:text-5xl">
            Experience the Mosaic of Cameroon
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-sand opacity-85">
            Discover culture, heritage, agriculture, hospitality and adventure in one destination.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-sm bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-dark-panel transition-opacity hover:opacity-90">
              Book Your Stay
            </button>
            <button className="rounded-sm border border-cream/40 px-8 py-3.5 text-sm font-medium tracking-wide text-cream transition-colors hover:border-cream">
              Explore Experiences
            </button>
            <button className="rounded-sm border border-gold/50 px-8 py-3.5 text-sm font-medium tracking-wide text-gold transition-colors hover:border-gold">
              Shop Heritage Products
            </button>
          </div>

          <div className="absolute bottom-8 flex flex-col items-center gap-2 opacity-50">
            <span className="text-xs tracking-widest text-cream uppercase">Scroll to explore</span>
            <ChevronDown size={16} className="text-cream" />
          </div>
        </div>
      </section>

      {/* ───────────────── Stats bar ───────────────── */}
      <section className="w-full border-b border-border bg-dark-panel">
        <div className="flex flex-wrap items-stretch justify-center">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 border-l border-border px-8 py-5"
            >
              <span className="font-headings text-3xl font-bold text-gold">{stat.value}</span>
              <span className="text-xs tracking-widest text-muted-foreground uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────── Our Story ───────────────── */}
      <section className="w-full px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="h-[480px] overflow-hidden rounded-sm">
              <img
                src={IMAGES.storyPortrait}
                alt="Cameroonian woman in traditional Toghu ceremonial outfit"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -right-5 -bottom-5 -z-10 h-40 w-40 rounded-sm border-2 border-gold opacity-40" />
            <div className="absolute -right-8 bottom-8 rounded-sm border border-border bg-dark-panel px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-gold">
                  <Leaf size={14} className="text-dark-panel" />
                </div>
                <div>
                  <div className="font-headings text-sm text-cream">Eco-Certified</div>
                  <div className="text-xs text-muted-foreground">Sustainable Tourism</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <PatternDivider />
            <span className="text-xs tracking-[0.3em] text-gold uppercase">Our Story</span>
            <h2 className="font-headings text-3xl italic leading-snug text-cream">
              A Living Cultural Mosaic, Not Just a Resort.
            </h2>
            <p className="text-base leading-loose text-muted-foreground">
              Cameroon Mosaic Heritage Resort was born from a deep reverence for Cameroon's
              extraordinary diversity — 250+ ethnic groups, 10 distinct regions, centuries of
              tradition woven into every village, farm, and festival.
            </p>
            <p className="text-base leading-loose text-muted-foreground">
              We created a destination where travellers don't just observe culture — they live it.
              From Bamileke chiefdom palaces to Fulani cattle trails, from cocoa farms to traditional
              weaving studios, every experience here is authentic, purposeful, and community-led.
            </p>
            <PatternDivider color="#c4532a" className="mt-2" />
            <div className="flex flex-wrap gap-8">
              {STORY_HIGHLIGHTS.map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon size={14} className="text-gold" />
                  <span className="text-sm text-sand">{label}</span>
                </div>
              ))}
            </div>
            <button className="mt-2 flex items-center gap-2 self-start text-sm font-medium tracking-widest text-gold uppercase">
              Discover Our Story
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ───────────────── Experiences ───────────────── */}
      <section className="w-full border-y border-border bg-muted px-6 py-20 md:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-3">
              <PatternDivider className="w-40" />
              <span className="text-xs tracking-[0.3em] text-gold uppercase">
                Curated Experiences
              </span>
              <h2 className="font-headings text-3xl italic text-cream">
                Immerse Yourself in Living Culture
              </h2>
            </div>
            <a
              href="#"
              className="flex items-center gap-2 text-sm tracking-widest text-gold uppercase"
            >
              All Experiences
              <ArrowRight size={14} />
            </a>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {EXPERIENCES.map((exp) => (
              <ExperienceCard key={exp.title} {...exp} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── Explore regions ───────────────── */}
      <section className="w-full px-6 py-20 md:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <PatternDivider className="mx-auto w-48" />
            <span className="text-xs tracking-[0.3em] text-gold uppercase">Explore Cameroon</span>
            <h2 className="font-headings text-3xl italic text-cream">
              Africa in Miniature — 10 Regions, Infinite Stories
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              Each region of Cameroon carries its own language, food, festivals, and heritage.
              Explore them all through our curated programs.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {REGIONS.map((region) => (
              <RegionCard key={region.region} {...region} />
            ))}
          </div>
          <div className="flex justify-center">
            <button className="rounded-sm border border-border px-8 py-3.5 text-sm font-medium tracking-wide text-cream transition-colors hover:border-gold">
              View All 10 Regions
            </button>
          </div>
        </div>
      </section>

      {/* ───────────────── Accommodation ───────────────── */}
      <section className="w-full border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {ACCOMMODATIONS.map((room, i) => (
            <div
              key={room.category}
              className={`group relative min-h-[500px] overflow-hidden ${
                i === 1 ? "md:border-x md:border-border" : ""
              }`}
            >
              <img
                src={room.image}
                alt={room.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(14,12,9,0.9) 0%, transparent 50%)" }}
              />
              <span className="absolute top-4 left-4 h-6 w-6 border-t-2 border-l-2 border-gold" />
              <span className="absolute top-4 right-4 h-6 w-6 border-t-2 border-r-2 border-gold" />
              {room.badge && (
                <div className="absolute top-4 right-0 left-0 flex justify-center">
                  <span className="bg-gold px-3 py-1 text-xs tracking-widest text-dark-panel uppercase">
                    {room.badge}
                  </span>
                </div>
              )}
              <div className="absolute right-0 bottom-0 left-0 flex flex-col gap-2 p-8">
                <span className="text-xs tracking-widest text-gold uppercase">{room.category}</span>
                <h3 className="font-headings text-xl italic text-cream">{room.title}</h3>
                <a href="#" className="mt-2 text-xs tracking-wide text-sand">
                  {room.price}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center border-t border-border bg-dark-panel py-10">
          <button className="rounded-sm bg-gold px-10 py-3.5 text-sm font-medium tracking-wide text-dark-panel transition-opacity hover:opacity-90">
            View All Accommodations
          </button>
        </div>
      </section>

      {/* ───────────────── Heritage Shop ───────────────── */}
      <section className="w-full border-b border-border bg-muted px-6 py-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-6">
              <PatternDivider color="#c4532a" className="w-40" />
              <span className="text-xs tracking-[0.3em] text-terracotta uppercase">Heritage Shop</span>
              <h2 className="font-headings text-3xl italic leading-snug text-cream">
                Bring Cameroon Home With You
              </h2>
              <p className="text-base leading-loose text-muted-foreground">
                Authentic Cameroonian crafts, traditional clothing, hand-made accessories, artisan
                food products, and cultural souvenirs — all sourced directly from local artisans and
                farmers.
              </p>
              <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {SHOP_CATEGORIES.map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-sm border border-border bg-dark-panel p-3"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-muted">
                      <Icon size={13} className="text-gold" />
                    </div>
                    <span className="text-sm text-sand">{label}</span>
                  </div>
                ))}
              </div>
              <button className="mt-2 self-start rounded-sm bg-terracotta px-8 py-3.5 text-sm font-medium tracking-wide text-cream transition-opacity hover:opacity-90">
                Browse Heritage Shop
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {SHOP_PRODUCTS.map((product) => (
                <div
                  key={product.label}
                  className="relative h-[180px] overflow-hidden rounded-sm border border-border"
                >
                  <img
                    src={product.image}
                    alt={product.label}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(14,12,9,0.8) 0%, transparent 60%)",
                    }}
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs tracking-wide text-cream">{product.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── Quote band ───────────────── */}
      <section className="relative h-[360px] w-full">
        <img
          src={IMAGES.quoteFestival}
          alt="Traditional Cameroonian festival with colourful dancers"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(14,12,9,0.72)" }} />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #c8922a 0px, #c8922a 1px, transparent 1px, transparent 20px)",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center md:px-24">
          <PatternDivider className="w-64" />
          <blockquote className="max-w-3xl font-headings text-3xl italic leading-snug text-cream">
            “Where Culture, Nature, Heritage and Community Meet.”
          </blockquote>
          <span className="text-xs tracking-[0.3em] text-gold uppercase">
            Cameroon Mosaic Heritage Resort
          </span>
          <PatternDivider className="w-64" />
        </div>
      </section>

      {/* ───────────────── CTA band ───────────────── */}
      <section className="w-full border-t border-border bg-dark-panel px-6 py-14 md:px-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="flex flex-col gap-2">
            <span className="text-xs tracking-[0.3em] text-gold uppercase">
              Ready to Experience Cameroon?
            </span>
            <h2 className="font-headings text-2xl italic text-cream">
              Begin Your Cultural Journey Today
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-sm bg-gold px-7 py-3 text-sm font-medium tracking-wide text-dark-panel transition-opacity hover:opacity-90">
              <Calendar size={15} />
              Book a Stay
            </button>
            <button className="flex items-center gap-2 rounded-sm border border-gold px-7 py-3 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-gold/10">
              <MessageCircle size={15} />
              WhatsApp Us
            </button>
            <button className="flex items-center gap-2 rounded-sm border border-border px-7 py-3 text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-cream">
              <Mail size={15} />
              Send Enquiry
            </button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
