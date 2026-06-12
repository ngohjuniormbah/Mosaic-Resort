import {
  MessageCircle,
  Mail,
  Search,
  Shirt,
  Gem,
  Home,
  Package,
  Gift,
  ArrowRight,
  Truck,
  BadgeCheck,
  Users,
  Leaf,
} from "lucide-react";
import NavBar from "../components/NavBar";
import SiteFooter from "../components/SiteFooter";
import PatternDivider from "../components/PatternDivider";
import { IMAGES } from "../data/images";

const GOLD = "#c8922a";
const TERRACOTTA = "#c4532a";
const BRONZE = "#8b6b3d";
const FOREST = "#4a7a40";

const CATEGORY_TILES = [
  { label: "Traditional Clothing", count: "12 items", Icon: Shirt, color: GOLD, image: IMAGES.shopCatClothing },
  { label: "Handmade Jewelry", count: "24 items", Icon: Gem, color: TERRACOTTA, image: IMAGES.shopCatJewelry },
  { label: "Home Decor", count: "18 items", Icon: Home, color: BRONZE, image: IMAGES.shopCatDecor },
  { label: "Agricultural Products", count: "15 items", Icon: Package, color: FOREST, image: IMAGES.shopCatAgri },
  { label: "Souvenirs", count: "30+ items", Icon: Gift, color: GOLD, image: IMAGES.shopCatSouvenirs },
];

const FILTER_TABS = [
  { label: "Traditional Clothing", Icon: Shirt },
  { label: "Handmade Jewelry", Icon: Gem },
  { label: "Home Decor", Icon: Home },
  { label: "Agricultural Products", Icon: Package },
  { label: "Souvenirs", Icon: Gift },
];

const SECTIONS = [
  {
    number: "Category 01",
    title: "Traditional Clothing",
    accent: GOLD,
    muted: false,
    description:
      "Authentic Cameroonian attire handcrafted by skilled tailors and weavers — each piece tells the story of a region and its people.",
    products: [
      {
        name: "Toghu Royal Attire",
        category: "Traditional Clothing",
        region: "West Region",
        price: "XAF 45,000",
        badge: "Bestseller",
        color: GOLD,
        image: IMAGES.shopToghuAttire,
        description:
          "Hand-embroidered black velvet Toghu — the ceremonial dress of the Cameroonian Grassfields, worn at royal events and cultural celebrations.",
      },
      {
        name: "Kaba Ngondo Gown",
        category: "Traditional Clothing",
        region: "Littoral Region",
        price: "XAF 28,000",
        color: TERRACOTTA,
        image: IMAGES.shopKabaGown,
        description:
          "Elegant Kaba dress inspired by the Sawa coastal women's tradition — vibrant ankara prints with hand-stitched gold trim.",
      },
      {
        name: "Fulani Boubou Robe",
        category: "Traditional Clothing",
        region: "Adamawa Region",
        price: "XAF 32,000",
        color: BRONZE,
        image: IMAGES.shopBoubou,
        description:
          "Flowing grand boubou in premium cotton, hand-embroidered at the neckline in the Fulani tradition of the North.",
      },
      {
        name: "Ndop Ceremonial Cloth",
        category: "Traditional Clothing",
        region: "West Region",
        price: "XAF 18,000",
        color: GOLD,
        image: IMAGES.shopNdopCloth,
        description:
          "Iconic hand-woven Ndop cloth — a sacred textile of the Bamileke used in chieftaincy ceremonies and royal rites.",
      },
    ],
  },
  {
    number: "Category 02",
    title: "Handmade Jewelry",
    accent: TERRACOTTA,
    muted: true,
    description:
      "Beads, bronze, copper, and natural materials shaped into wearable cultural art by Cameroonian artisan jewellers.",
    products: [
      {
        name: "Grassfields Beaded Necklace",
        category: "Handmade Jewelry",
        region: "North West Region",
        price: "XAF 12,500",
        badge: "Artisan Pick",
        color: TERRACOTTA,
        image: IMAGES.shopBeadedNecklace,
        description:
          "Multi-strand beaded necklace in the royal colors of the Grassfields — worn by women of noble descent at festivals and ceremonies.",
      },
      {
        name: "Bamileke Bronze Bracelet",
        category: "Handmade Jewelry",
        region: "West Region",
        price: "XAF 8,500",
        color: BRONZE,
        image: IMAGES.shopBronzeBracelet,
        description:
          "Cast bronze bangle engraved with Bamileke spider motifs — a symbol of wisdom and royalty in the Grassfields tradition.",
      },
      {
        name: "Beaded Earring Set",
        category: "Handmade Jewelry",
        region: "All Regions",
        price: "XAF 5,000",
        color: GOLD,
        image: IMAGES.shopBeadedEarrings,
        description:
          "Handcrafted drop earrings strung with glass seed beads in traditional Cameroonian patterns — a vibrant everyday accessory.",
      },
      {
        name: "Copper Tikar Pendant",
        category: "Handmade Jewelry",
        region: "Centre Region",
        price: "XAF 9,000",
        color: BRONZE,
        image: IMAGES.shopCopperPendant,
        description:
          "Hand-beaten copper pendant in the geometric style of the Tikar people — depicting ancestral clan symbols.",
      },
    ],
  },
  {
    number: "Category 03",
    title: "Home Decor & Art",
    accent: BRONZE,
    muted: false,
    description:
      "Sacred masks, ancestral sculptures, woven baskets, and traditional textiles — gallery-worthy cultural art for your home.",
    products: [
      {
        name: "Bamileke Ceremonial Mask",
        category: "Home Decor",
        region: "West Region",
        price: "XAF 35,000",
        badge: "Limited Edition",
        color: TERRACOTTA,
        image: IMAGES.shopCeremonialMask,
        description:
          "Hand-carved hardwood mask representing ancestral spirits — used in Bamileke initiation and celebration rites.",
      },
      {
        name: "Baka Forest Sculpture",
        category: "Home Decor",
        region: "East Region",
        price: "XAF 22,000",
        color: BRONZE,
        image: IMAGES.shopBakaSculpture,
        description:
          "Expressive figurative sculpture carved from hardwood by the Baka forest people of Eastern Cameroon.",
      },
      {
        name: "Raffia Wall Basket",
        category: "Home Decor",
        region: "North West Region",
        price: "XAF 14,000",
        color: GOLD,
        image: IMAGES.shopRaffiaBasket,
        description:
          "Intricately woven raffia basket from the Bamenda Highlands — doubles as a stunning wall hanging or display piece.",
      },
      {
        name: "Ndop Throw Cushion",
        category: "Home Decor",
        region: "West Region",
        price: "XAF 9,500",
        color: GOLD,
        image: IMAGES.shopNdopCushion,
        description:
          "Cushion cover hand-dyed in Ndop fabric using traditional wax-resist indigo technique from the Bamileke chiefdoms.",
      },
    ],
  },
  {
    number: "Category 04",
    title: "Agricultural Products",
    accent: FOREST,
    muted: true,
    description:
      "Premium coffee, raw honey, heritage cocoa, and hand-ground spices — Cameroon's agricultural wealth in every package.",
    products: [
      {
        name: "Mount Cameroon Arabica Coffee",
        category: "Agricultural Products",
        region: "South West Region",
        price: "XAF 7,500 / 250g",
        badge: "Award-Winning",
        color: FOREST,
        image: IMAGES.shopArabicaCoffee,
        description:
          "Single-origin Arabica beans grown on the volcanic slopes of Mount Cameroon — earthy, bright, and naturally sweet.",
      },
      {
        name: "Raw Forest Honey",
        category: "Agricultural Products",
        region: "East Region",
        price: "XAF 6,000 / 500g",
        color: GOLD,
        image: IMAGES.shopForestHoney,
        description:
          "Unfiltered wildflower honey harvested by forest communities — dark amber, deeply floral, and naturally medicinal.",
      },
      {
        name: "Heritage Cocoa Nibs",
        category: "Agricultural Products",
        region: "South West Region",
        price: "XAF 5,500 / 200g",
        color: BRONZE,
        image: IMAGES.shopCocoaNibs,
        description:
          "Premium cacao nibs from heritage Trinitario trees — perfect for baking, smoothies, or as a nutritious snack.",
      },
      {
        name: "Pepper Spice Blend",
        category: "Agricultural Products",
        region: "All Regions",
        price: "XAF 4,000 / jar",
        color: TERRACOTTA,
        image: IMAGES.shopSpiceBlend,
        description:
          "Hand-ground blend of Cameroon's finest spices — grains of Selim, njansa, and dried bush peppers for authentic Cameroonian cooking.",
      },
    ],
  },
];

const ORDER_STEPS = [
  {
    number: "01",
    Icon: Search,
    title: "Browse Products",
    text: "Explore our curated categories and find the items you love.",
  },
  {
    number: "02",
    Icon: MessageCircle,
    title: "Contact Us",
    text: "Reach us via WhatsApp or email with your selected items.",
  },
  {
    number: "03",
    Icon: Package,
    title: "Confirm Order",
    text: "Our team confirms availability, pricing, and delivery details.",
  },
  {
    number: "04",
    Icon: Truck,
    title: "Receive & Enjoy",
    text: "Your authentic Cameroonian products are carefully packed and delivered.",
  },
];

const TRUST_BADGES = [
  { Icon: BadgeCheck, title: "100% Authentic", text: "Every item verified and certified" },
  { Icon: Users, title: "Community Sourced", text: "Directly from local artisans & farmers" },
  { Icon: Package, title: "Carefully Packaged", text: "Safe delivery guaranteed" },
  { Icon: Leaf, title: "Eco-Friendly", text: "Sustainable, minimal packaging" },
];

function ProductCard({ product }) {
  const { name, category, region, price, badge, color, image, description } = product;
  return (
    <div className="flex flex-col overflow-hidden rounded-sm border border-border bg-dark-panel">
      <div className="relative h-[200px]">
        <img src={image} alt={name} className="h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(14,12,9,0.6) 0%, transparent 55%)" }}
        />
        <div className="absolute top-0 left-0 h-6 w-6" style={{ borderTop: `1px solid ${color}`, borderLeft: `1px solid ${color}` }} />
        <div className="absolute top-0 right-0 h-6 w-6" style={{ borderTop: `1px solid ${color}`, borderRight: `1px solid ${color}` }} />
        {badge && (
          <div className="absolute top-2 right-2 rounded-sm px-2 py-0.5" style={{ background: color }}>
            <span className="text-xs font-medium tracking-wide text-dark-panel">{badge}</span>
          </div>
        )}
        <span className="absolute bottom-2 left-3 text-xs tracking-wide text-muted-foreground">{region}</span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-xs tracking-widest uppercase" style={{ color }}>
          {category}
        </span>
        <h4 className="font-headings text-base leading-snug text-cream" style={{ fontStyle: "italic" }}>
          {name}
        </h4>
        <p className="text-xs leading-relaxed text-muted-foreground">{description}</p>
        <div className="mt-auto flex items-center justify-between border-t pt-3" style={{ borderColor: "#2a2018" }}>
          <span className="font-headings text-base font-bold" style={{ color }}>
            {price}
          </span>
          <a
            href={`https://wa.me/237600000000?text=${encodeURIComponent(`Hello! I would like to order: ${name} (${price})`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-sm px-3 py-1.5 text-xs font-medium tracking-wide transition-opacity hover:opacity-80"
            style={{ background: `${color}22`, border: `1px solid ${color}55`, color }}
          >
            <MessageCircle size={11} />
            Order
          </a>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ number, title, description, accent }) {
  return (
    <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
      <div className="flex flex-col gap-3">
        <PatternDivider color={accent} className="w-40" />
        <span className="text-xs tracking-[0.3em] uppercase" style={{ color: accent }}>
          {number}
        </span>
        <h2 className="font-headings text-3xl text-cream" style={{ fontStyle: "italic" }}>
          {title}
        </h2>
        <p className="max-w-lg text-sm text-muted-foreground">{description}</p>
      </div>
      <a
        href="#"
        className="flex items-center gap-2 text-sm tracking-widest uppercase transition-opacity hover:opacity-80"
        style={{ color: accent }}
      >
        View All
        <ArrowRight size={14} />
      </a>
    </div>
  );
}

export default function Shop() {
  return (
    <div className="w-full bg-background font-body text-foreground">
      {/* Hero */}
      <section className="relative h-[560px] w-full">
        <img src={IMAGES.shopHero} alt="Cameroonian artisan market" className="h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(14,12,9,0.3) 0%, rgba(14,12,9,0.55) 45%, rgba(14,12,9,0.95) 100%)",
          }}
        />
        <div
          className="absolute top-0 left-0 h-40 w-40 opacity-20"
          style={{
            background: "repeating-linear-gradient(45deg, #c8922a 0px, #c8922a 1px, transparent 1px, transparent 12px)",
            maskImage: "radial-gradient(circle at top left, black 40%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle at top left, black 40%, transparent 70%)",
          }}
        />
        <NavBar />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-16 text-center md:px-16">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10" style={{ background: GOLD }} />
            <span className="text-xs tracking-[0.35em] text-gold uppercase">Authentic &amp; Locally Sourced</span>
            <div className="h-px w-10" style={{ background: GOLD }} />
          </div>
          <h1
            className="max-w-3xl font-headings text-5xl leading-tight text-cream"
            style={{ fontStyle: "italic", letterSpacing: "-0.5px" }}
          >
            Heritage Shop
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sand" style={{ opacity: 0.85 }}>
            Bring Cameroon home with you. Authentic crafts, traditional clothing, handmade jewelry, artisan foods, and
            cultural souvenirs — all sourced directly from local artisans and farmers.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#categories"
              className="rounded-sm bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-dark-panel transition-opacity hover:opacity-90"
            >
              Browse All Products
            </a>
            <a
              href="https://wa.me/237600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-sm border border-cream/40 px-8 py-3.5 text-sm font-medium tracking-wide text-cream transition-colors hover:border-cream"
            >
              <MessageCircle size={14} />
              Order via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="w-full border-b border-border bg-dark-panel">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              className="rounded-sm bg-gold px-5 py-2 text-sm font-medium text-background"
            >
              All Categories
            </button>
            {FILTER_TABS.map(({ label, Icon }) => (
              <button
                key={label}
                type="button"
                className="flex items-center gap-2 rounded-sm border border-border bg-input px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-cream"
              >
                <Icon size={13} />
                {label}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-2 rounded-sm border border-border bg-input px-4 py-2">
            <Search size={13} className="text-muted-foreground" />
            <input
              type="search"
              placeholder="Search products..."
              className="min-w-0 bg-transparent text-sm text-cream placeholder:text-muted-foreground focus:outline-none"
            />
          </label>
        </div>
      </section>

      {/* Category tiles */}
      <section id="categories" className="w-full border-b border-border bg-muted px-6 py-12 md:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {CATEGORY_TILES.map(({ label, count, Icon, color, image }) => (
            <a
              key={label}
              href="#"
              className="relative flex h-[140px] flex-col overflow-hidden rounded-sm border border-border"
            >
              <img src={image} alt={label} className="h-full w-full object-cover" />
              <div className="absolute inset-0" style={{ background: "rgba(14,12,9,0.7)" }} />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-sm"
                  style={{ background: `${color}33`, border: `1px solid ${color}66` }}
                >
                  <Icon size={15} style={{ color }} />
                </div>
                <span className="font-headings text-sm text-cream" style={{ fontStyle: "italic" }}>
                  {label}
                </span>
                <span className="text-xs text-muted-foreground">{count}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Product sections */}
      {SECTIONS.map((section) => (
        <section
          key={section.title}
          className={`w-full px-6 py-20 md:px-16 ${section.muted ? "border-y border-border bg-muted" : ""}`}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-10">
            <SectionHeader
              number={section.number}
              title={section.title}
              description={section.description}
              accent={section.accent}
            />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {section.products.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* How to order */}
      <section className="w-full px-6 py-20 md:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          <div className="flex flex-col items-center gap-3 text-center">
            <PatternDivider className="mx-auto w-48" />
            <span className="text-xs tracking-[0.3em] text-gold uppercase">Simple &amp; Secure</span>
            <h2 className="font-headings text-3xl text-cream" style={{ fontStyle: "italic" }}>
              How to Order
            </h2>
            <p className="max-w-lg text-base text-muted-foreground">
              No online checkout needed — simply contact us directly via WhatsApp or email and our team will guide you
              through the ordering and delivery process.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ORDER_STEPS.map(({ number, Icon, title, text }) => (
              <div
                key={number}
                className="relative flex flex-col gap-4 rounded-sm border border-border bg-dark-panel p-6"
              >
                <div className="absolute top-4 right-4 font-headings text-3xl font-bold text-gold opacity-10">
                  {number}
                </div>
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-sm"
                  style={{ background: "#c8922a22", border: "1px solid #c8922a44" }}
                >
                  <Icon size={18} className="text-gold" />
                </div>
                <PatternDivider />
                <h4 className="font-headings text-lg text-cream" style={{ fontStyle: "italic" }}>
                  {title}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support artisans CTA */}
      <section className="relative w-full overflow-hidden border-t border-border py-20">
        <img
          src={IMAGES.shopArtisanCta}
          alt="Cameroonian artisan market stall"
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
        <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-12 px-6 lg:flex-row lg:items-center">
          <div className="flex flex-col gap-5">
            <PatternDivider className="w-40" />
            <h2 className="font-headings text-3xl text-cream" style={{ fontStyle: "italic" }}>
              Support Local Artisans &amp; Farmers
            </h2>
            <p className="max-w-lg text-base leading-loose text-muted-foreground">
              Every purchase from the Heritage Shop directly supports the livelihoods of Cameroonian artisans, weavers,
              farmers, and craftspeople. Your order is an act of cultural preservation.
            </p>
            <div className="mt-1 flex flex-wrap gap-4">
              <a
                href="https://wa.me/237600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-sm bg-gold px-7 py-3 text-sm font-medium tracking-wide text-dark-panel transition-opacity hover:opacity-90"
              >
                <MessageCircle size={15} />
                Order via WhatsApp
              </a>
              <a
                href="mailto:info@cameroonempire.com?subject=Heritage%20Shop%20Enquiry"
                className="flex items-center gap-2 rounded-sm border border-gold px-7 py-3 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-gold/10"
              >
                <Mail size={15} />
                Send an Email Enquiry
              </a>
            </div>
          </div>
          <div className="flex shrink-0 flex-col gap-4">
            {TRUST_BADGES.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="flex min-w-[280px] items-center gap-4 rounded-sm border border-border bg-dark-panel px-6 py-3"
              >
                <Icon size={18} className="shrink-0 text-gold" />
                <div>
                  <div className="text-sm font-medium text-cream">{title}</div>
                  <div className="text-xs text-muted-foreground">{text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
