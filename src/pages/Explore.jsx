import {
  Mountain,
  Users,
  Utensils,
  Music,
  MapPin,
  Landmark,
  Sprout,
  Music2,
  Star,
  Drum,
  Palette,
  Calendar,
  Globe,
  Leaf,
  ArrowRight,
  Mail,
} from "lucide-react";
import NavBar from "../components/NavBar.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import PatternDivider from "../components/PatternDivider.jsx";
import { IMAGES } from "../data/images.js";

// ─── Data ───────────────────────────────────────────────────────────────────

const REGIONS = [
  {
    num: "01",
    image: IMAGES.regionCentre,
    name: "Centre Region",
    subtitle: "Capital & Culture",
    color: "#c8922a",
    location: "Yaoundé Museums",
    food: "Nkui",
    tags: ["Yaoundé", "Cocoa Farming", "Museums"],
  },
  {
    num: "02",
    image: IMAGES.regionLittoral,
    name: "Littoral Region",
    subtitle: "Economic Hub",
    color: "#c4532a",
    location: "Douala City",
    food: "Grilled Fish",
    tags: ["Douala", "Coastal Life", "Seafood"],
  },
  {
    num: "03",
    image: IMAGES.regionWest,
    name: "West Region",
    subtitle: "Bamileke Heritage",
    color: "#8b6b3d",
    location: "Traditional Chiefdoms",
    food: "Achu Soup",
    tags: ["Coffee Farms", "Ndop Plain"],
  },
  {
    num: "04",
    image: IMAGES.regionNorthWest,
    name: "North West Region",
    subtitle: "Tea & Kingdoms",
    color: "#4a7a40",
    location: "Bafut Palace",
    food: "Fufu & Njama",
    tags: ["Tea Plantations", "Bamenda"],
  },
  {
    num: "05",
    image: IMAGES.regionSouthWest,
    name: "South West Region",
    subtitle: "Mount Cameroon",
    color: "#c8922a",
    location: "Limbe Beach",
    food: "Eru & Garri",
    tags: ["Cocoa Farms", "Buea"],
  },
  {
    num: "06",
    image: IMAGES.regionSouth,
    name: "South Region",
    subtitle: "Rainforest Eco",
    color: "#c4532a",
    location: "Korup National Park",
    food: "Okok Mbanga",
    tags: ["Forests", "Ebolowa"],
  },
  {
    num: "07",
    image: IMAGES.regionEast,
    name: "East Region",
    subtitle: "Forest Adventure",
    color: "#8b6b3d",
    location: "Dja Faunal Reserve",
    food: "Wild Game Stew",
    tags: ["Wildlife", "Bertoua"],
  },
  {
    num: "08",
    image: IMAGES.regionAdamawa2,
    name: "Adamawa Region",
    subtitle: "Highland Plateau",
    color: "#4a7a40",
    location: "Ngaoundéré",
    food: "Hausa Koko",
    tags: ["Cattle Ranching", "Scenic Plateau"],
  },
  {
    num: "09",
    image: IMAGES.regionNorth,
    name: "North Region",
    subtitle: "Ancient Heritage",
    color: "#c8922a",
    location: "Rhumsiki Peak",
    food: "Brochettes",
    tags: ["Architecture", "Historical Sites"],
  },
  {
    num: "10",
    image: IMAGES.regionFarNorth2,
    name: "Far North Region",
    subtitle: "Fulani Culture",
    color: "#c4532a",
    location: "Waza National Park",
    food: "Kilishi",
    tags: ["Wildlife", "Maroua"],
  },
];

const ROUTES = [
  {
    image: IMAGES.routeHeritage,
    accentColor: "#c8922a",
    Icon: Landmark,
    label: "Heritage Route",
    description:
      "Explore Cameroon's royal history and cultural heritage across ancient kingdoms and palaces.",
    stops: [
      "Foumban Royal Palace",
      "Bafut Palace",
      "Traditional Chiefdoms",
      "Cultural Villages",
      "Museums",
    ],
  },
  {
    image: IMAGES.routeNature,
    accentColor: "#4a7a40",
    Icon: Mountain,
    label: "Nature Route",
    description:
      "Experience breathtaking natural beauty from volcanic peaks to ancient rainforest reserves.",
    stops: [
      "Mount Cameroon",
      "Ekom-Nkam Waterfalls",
      "Botanical Gardens",
      "Waza National Park",
      "Forest Reserves",
    ],
  },
  {
    image: IMAGES.routeAgri,
    accentColor: "#c4532a",
    Icon: Sprout,
    label: "Agricultural Route",
    description:
      "Discover the agricultural backbone of Cameroon — from cocoa to coffee and tea.",
    stops: [
      "Cocoa Farms",
      "Coffee Plantations",
      "Banana Estates",
      "Tea Farms",
      "Sustainable Agriculture Centers",
    ],
  },
];

const CULTURE_ITEMS = [
  {
    image: IMAGES.cultureDance,
    Icon: Music2,
    title: "Traditional Dances",
    description:
      "Experience electrifying performances from the Bamileke, Bassa, Fulani, and Sawa cultural groups.",
  },
  {
    image: IMAGES.cultureStorytelling,
    Icon: Star,
    title: "Storytelling Nights",
    description:
      "Discover centuries-old legends, folktales, and oral traditions told under an African sky.",
  },
  {
    image: IMAGES.cultureCuisine,
    Icon: Utensils,
    title: "Traditional Cuisine",
    description:
      "Taste authentic dishes from all 10 regions — from Ndolé and Achu to Kilishi and Mbongo Tchobi.",
  },
  {
    image: IMAGES.cultureDrum,
    Icon: Drum,
    title: "Music & Drumming",
    description:
      "Learn the rhythms behind Cameroonian ceremonies and sacred rituals from master drummers.",
  },
  {
    image: IMAGES.cultureArtisan,
    Icon: Palette,
    title: "Artisan Workshops",
    description:
      "Discover weaving, pottery, carving, and beadwork with master craftspeople from across Cameroon.",
  },
  {
    image: IMAGES.cultureFestival,
    Icon: Calendar,
    title: "Cultural Festivals",
    description:
      "Celebrate the Nguon, Ngondo, and Bianou — spectacular seasonal festivities rooted in heritage.",
  },
];

const DESTINATIONS = [
  {
    image: IMAGES.destMtCameroon,
    name: "Mount Cameroon",
    description:
      "West Africa's highest peak — a sacred volcano rising 4,095m with dramatic trekking routes and rainforest biodiversity.",
  },
  {
    image: IMAGES.destWaza,
    name: "Waza National Park",
    description:
      "Cameroon's most celebrated wildlife reserve, home to lions, elephants, giraffes, and hundreds of bird species.",
  },
  {
    image: IMAGES.destFoumban,
    name: "Foumban Royal Palace",
    description:
      "The 17th-century palace of the Bamoun Sultan — a masterpiece of traditional Cameroonian royal architecture.",
  },
  {
    image: IMAGES.destLimbe,
    name: "Limbe Beaches",
    description:
      "Volcanic black-sand beaches lapped by the Atlantic, framed by rainforest and Mount Cameroon's slopes.",
  },
  {
    image: IMAGES.destEkomNkam,
    name: "Ekom-Nkam Falls",
    description:
      "One of Africa's most majestic waterfalls, set deep in tropical rainforest — an iconic natural landmark.",
  },
  {
    image: IMAGES.destKorup,
    name: "Korup National Park",
    description:
      "One of Africa's oldest and most biodiverse rainforests, home to rare primates, plants, and ecosystems.",
  },
];

const DISHES = [
  {
    image: IMAGES.dishAchu,
    name: "Achu Soup",
    region: "West Region",
    description: "Pounded cocoyam with fragrant yellow palm-nut soup and traditional spices.",
  },
  {
    image: IMAGES.dishNdole,
    name: "Ndolé",
    region: "Littoral Region",
    description: "Bitter leaf stew with peanuts and smoked fish or beef — Cameroon's national dish.",
  },
  {
    image: IMAGES.dishEru,
    name: "Eru & Waterleaf",
    region: "South West",
    description: "Shredded eru leaves cooked with waterleaf, crayfish, and palm oil — rich and flavorful.",
  },
  {
    image: IMAGES.dishKilishi,
    name: "Kilishi",
    region: "Far North",
    description: "Sun-dried spiced beef jerky — a Far North delicacy enjoyed across the country.",
  },
  {
    image: IMAGES.dishFufu,
    name: "Fufu Corn",
    region: "North West",
    description: "Steamed corn dough served with Njama Njama, a beloved highland vegetable stew.",
  },
  {
    image: IMAGES.dishKoki,
    name: "Koki",
    region: "South West Region",
    description: "Steamed black-eyed pea cake wrapped in banana leaves — a beloved Cameroonian staple.",
  },
  {
    image: IMAGES.dishMbongo,
    name: "Mbongo Tchobi",
    region: "Littoral Region",
    description: "Dark, aromatic fish or meat stew made with charred mbongo spice and local herbs.",
  },
  {
    image: IMAGES.dishRoastFish,
    name: "Roast Fish",
    region: "All Regions",
    description: "Freshwater or sea fish marinated in local spices and slow-grilled over open flame.",
  },
];

const GATEWAY_STATS = [
  { Icon: Globe, value: "10", label: "Regions Covered" },
  { Icon: Users, value: "250+", label: "Cultures Celebrated" },
  { Icon: Star, value: "40+", label: "Unique Experiences" },
  { Icon: Leaf, value: "100%", label: "Eco & Sustainable" },
];

const WHY_HIGHLIGHTS = [
  { Icon: Mountain, label: "Diverse Landscapes" },
  { Icon: Users, label: "250+ Ethnic Groups" },
  { Icon: Utensils, label: "Regional Cuisines" },
  { Icon: Music, label: "Living Traditions" },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionLabel({ children, color = "text-gold" }) {
  return (
    <span className={`font-body text-xs ${color} tracking-[0.3em] uppercase`}>
      {children}
    </span>
  );
}

function SectionHeading({ children }) {
  return (
    <h2
      className="font-headings text-cream text-3xl"
      style={{ fontStyle: "italic" }}
    >
      {children}
    </h2>
  );
}

function GoldCorners({ size = "w-8 h-8", color = "#c8922a" }) {
  return (
    <>
      <div
        className={`absolute top-0 left-0 ${size}`}
        style={{ borderTop: `2px solid ${color}`, borderLeft: `2px solid ${color}` }}
      />
      <div
        className={`absolute top-0 right-0 ${size}`}
        style={{ borderTop: `2px solid ${color}`, borderRight: `2px solid ${color}` }}
      />
    </>
  );
}

function RegionCard({ region }) {
  const { num, image, name, subtitle, color, location, food, tags } = region;
  return (
    <div
      className="relative flex flex-col rounded-sm overflow-hidden"
      style={{ border: "1px solid #3a2e1e", background: "#130f0a" }}
    >
      <div className="relative" style={{ height: 160 }}>
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #130f0a 0%, transparent 60%)" }}
        />
        <div
          className="absolute top-3 left-3 w-6 h-6 rounded-sm flex items-center justify-center"
          style={{ background: `${color}22`, border: `1px solid ${color}66` }}
        >
          <span className="font-headings text-xs font-bold" style={{ color }}>
            {num}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <h3
            className="font-headings text-cream text-base leading-snug"
            style={{ fontStyle: "italic" }}
          >
            {name}
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-4 flex-1">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
          <span className="font-body text-xs tracking-wide" style={{ color }}>
            {subtitle}
          </span>
        </div>
        <div
          className="flex flex-col gap-1.5"
          style={{ borderTop: "1px solid #2a2018", paddingTop: 10 }}
        >
          <div className="flex items-center gap-2">
            <MapPin size={11} className="text-muted-foreground flex-shrink-0" />
            <span className="font-body text-xs text-muted-foreground">{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Utensils size={11} className="text-muted-foreground flex-shrink-0" />
            <span className="font-body text-xs text-muted-foreground">{food}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1 mt-auto pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-body text-xs text-muted-foreground px-2 py-0.5 rounded-sm"
              style={{ background: "#1a1510", border: "1px solid #2a2018" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function RouteCard({ route }) {
  const { image, accentColor, Icon, label, description, stops } = route;
  return (
    <div
      className="relative flex flex-col rounded-sm overflow-hidden"
      style={{ border: "1px solid #3a2e1e" }}
    >
      <div className="relative" style={{ height: 260 }}>
        <img src={image} alt={label} className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(14,12,9,0.1) 0%, rgba(14,12,9,0.85) 100%)",
          }}
        />
        <GoldCorners color={accentColor} />
        <div className="absolute bottom-4 left-5 right-5">
          <div className="flex items-center gap-2 mb-2">
            <div
              className="w-7 h-7 rounded-sm flex items-center justify-center"
              style={{ background: `${accentColor}22`, border: `1px solid ${accentColor}66` }}
            >
              <Icon size={13} style={{ color: accentColor }} />
            </div>
            <span
              className="font-body text-xs tracking-widest uppercase"
              style={{ color: accentColor }}
            >
              {label}
            </span>
          </div>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="bg-dark-panel p-5 flex flex-col gap-4 flex-1">
        <div className="flex flex-col gap-2">
          {stops.map((stop) => (
            <div key={stop} className="flex items-center gap-2">
              <div
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: accentColor }}
              />
              <span className="font-body text-sm text-sand">{stop}</span>
            </div>
          ))}
        </div>
        <div className="pt-3" style={{ borderTop: "1px solid #3a2e1e" }}>
          <a
            href="#"
            className="font-body text-xs tracking-widest uppercase flex items-center gap-2"
            style={{ color: accentColor }}
          >
            Explore Route
            <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}

function CultureCard({ item }) {
  const { image, Icon, title, description } = item;
  return (
    <div
      className="relative flex overflow-hidden rounded-sm"
      style={{ border: "1px solid #3a2e1e", minHeight: 160 }}
    >
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "rgba(14,12,9,0.78)" }} />
      </div>
      <div className="relative flex flex-col gap-3 p-6 justify-end">
        <div
          className="w-8 h-8 rounded-sm flex items-center justify-center"
          style={{ background: "#c8922a22", border: "1px solid #c8922a44" }}
        >
          <Icon size={15} className="text-gold" />
        </div>
        <h3
          className="font-headings text-cream text-lg leading-snug"
          style={{ fontStyle: "italic" }}
        >
          {title}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function DestinationCard({ dest }) {
  const { image, name, description } = dest;
  return (
    <div
      className="relative rounded-sm overflow-hidden flex flex-col"
      style={{ border: "1px solid #3a2e1e" }}
    >
      <div className="relative" style={{ height: 240 }}>
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(14,12,9,0.85) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute top-3 left-3 w-6 h-6"
          style={{ borderTop: "1px solid #c8922a", borderLeft: "1px solid #c8922a" }}
        />
        <div
          className="absolute top-3 right-3 w-6 h-6"
          style={{ borderTop: "1px solid #c8922a", borderRight: "1px solid #c8922a" }}
        />
        <div className="absolute bottom-3 left-4 right-4">
          <h3
            className="font-headings text-cream text-xl"
            style={{ fontStyle: "italic" }}
          >
            {name}
          </h3>
        </div>
      </div>
      <div className="bg-dark-panel p-5 flex flex-col gap-3 flex-1">
        <p className="font-body text-sm text-muted-foreground leading-relaxed">{description}</p>
        <a
          href="#"
          className="font-body text-xs text-gold tracking-widest uppercase flex items-center gap-1 mt-auto"
        >
          Learn More
          <ArrowRight size={11} />
        </a>
      </div>
    </div>
  );
}

function DishCard({ dish }) {
  const { image, name, region, description } = dish;
  return (
    <div
      className="flex flex-col rounded-sm overflow-hidden"
      style={{ border: "1px solid #3a2e1e", background: "#130f0a" }}
    >
      <div className="relative" style={{ height: 140 }}>
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #130f0a 0%, transparent 55%)" }}
        />
        <div
          className="absolute bottom-2 right-2 bg-dark-panel px-2 py-0.5 rounded-sm"
          style={{ border: "1px solid #3a2e1e" }}
        >
          <span className="font-body text-xs text-gold tracking-wide">{region}</span>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-1.5">
        <h4
          className="font-headings text-cream text-base"
          style={{ fontStyle: "italic" }}
        >
          {name}
        </h4>
        <p className="font-body text-xs text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Explore() {
  return (
    <div className="bg-background text-foreground font-body w-full">
      {/* ── Hero ── */}
      <section className="relative w-full" style={{ height: 620 }}>
        <img
          src={IMAGES.exploreHero}
          alt="Cameroon landscape"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(14,12,9,0.3) 0%, rgba(14,12,9,0.55) 45%, rgba(14,12,9,0.95) 100%)",
          }}
        />
        {/* Decorative hatching */}
        <div
          className="absolute top-0 right-0 w-48 h-48 opacity-20"
          style={{
            background:
              "repeating-linear-gradient(-45deg, #c8922a 0px, #c8922a 1px, transparent 1px, transparent 14px)",
            maskImage:
              "radial-gradient(circle at top right, black 40%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(circle at top right, black 40%, transparent 70%)",
          }}
        />
        <NavBar />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-16"
          style={{ top: 60 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-px" style={{ background: "#c8922a" }} />
            <span className="font-body text-xs text-gold tracking-[0.35em] uppercase">
              Discover the Beauty of Africa in Miniature
            </span>
            <div className="w-10 h-px" style={{ background: "#c8922a" }} />
          </div>
          <h1
            className="font-headings text-cream text-5xl leading-tight max-w-3xl"
            style={{ fontStyle: "italic", letterSpacing: "-0.5px" }}
          >
            Explore Cameroon
          </h1>
          <p
            className="font-body text-lg text-sand mt-5 max-w-2xl leading-relaxed"
            style={{ opacity: 0.85 }}
          >
            Journey through the ten regions of Cameroon and discover a rich
            mosaic of cultures, traditions, cuisines, landscapes, and
            unforgettable experiences.
          </p>
          <div className="flex items-center gap-4 mt-9">
            <button className="bg-gold text-dark-panel font-body text-sm font-medium px-8 py-3.5 rounded-sm tracking-wide">
              Start Exploring
            </button>
            <button
              className="font-body text-sm font-medium text-cream px-8 py-3.5 rounded-sm tracking-wide"
              style={{ border: "1px solid rgba(245,240,232,0.4)" }}
            >
              Discover Cultural Experiences
            </button>
          </div>
        </div>
      </section>

      {/* ── Why Explore Cameroon ── */}
      <section className="w-full px-16 py-20">
        <div className="grid grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
          {/* Image column */}
          <div className="relative">
            <div className="rounded-sm overflow-hidden" style={{ height: 480 }}>
              <img
                src={IMAGES.exploreMap}
                alt="Cameroon regions mosaic"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-5 -right-5 w-36 h-36 rounded-sm"
              style={{ border: "2px solid #c8922a", opacity: 0.35, zIndex: -1 }}
            />
            <div
              className="absolute top-8 -right-8 bg-dark-panel px-5 py-4 rounded-sm"
              style={{ border: "1px solid #3a2e1e" }}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="font-headings text-gold text-2xl font-bold">10</span>
                <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">
                  Regions
                </span>
              </div>
            </div>
            <div
              className="absolute bottom-8 -right-8 bg-dark-panel px-5 py-4 rounded-sm"
              style={{ border: "1px solid #3a2e1e" }}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="font-headings text-gold text-2xl font-bold">250+</span>
                <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">
                  Cultures
                </span>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="flex flex-col gap-6">
            <PatternDivider />
            <SectionLabel>Africa in Miniature</SectionLabel>
            <SectionHeading>Why Explore Cameroon?</SectionHeading>
            <p className="font-body text-base text-muted-foreground leading-loose">
              Cameroon is often referred to as "Africa in Miniature" because it offers
              the continent's diverse cultures, landscapes, climates, wildlife, and
              traditions within one country.
            </p>
            <p className="font-body text-base text-muted-foreground leading-loose">
              From mountains and rainforests to savannahs and beaches, every region
              presents unique stories, foods, festivals, and experiences waiting to be
              discovered.
            </p>
            <PatternDivider color="#c4532a" />
            <div className="grid grid-cols-2 gap-3 mt-1">
              {WHY_HIGHLIGHTS.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 px-4 py-3 rounded-sm"
                  style={{ background: "#130f0a", border: "1px solid #3a2e1e" }}
                >
                  <Icon size={14} className="text-gold flex-shrink-0" />
                  <span className="font-body text-sm text-sand">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 10 Regions ── */}
      <section
        className="w-full px-16 py-20 bg-muted"
        style={{ borderTop: "1px solid #3a2e1e", borderBottom: "1px solid #3a2e1e" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <PatternDivider className="max-w-xs mx-auto" />
            <SectionLabel>The Ten Regions</SectionLabel>
            <SectionHeading>Explore the 10 Regions of Cameroon</SectionHeading>
            <p className="font-body text-base text-muted-foreground max-w-xl">
              Each region carries its own language, cuisine, festivals, and identity.
              Begin your journey below.
            </p>
          </div>
          <div className="grid grid-cols-5 gap-4">
            {REGIONS.map((r) => (
              <RegionCard key={r.num} region={r} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Discover Routes ── */}
      <section className="w-full px-16 py-20">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <PatternDivider className="max-w-xs" />
            <SectionLabel>Curated Journeys</SectionLabel>
            <SectionHeading>Discover Cameroon Routes</SectionHeading>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {ROUTES.map((r) => (
              <RouteCard key={r.label} route={r} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Culture ── */}
      <section
        className="w-full px-16 py-20 bg-muted"
        style={{ borderTop: "1px solid #3a2e1e", borderBottom: "1px solid #3a2e1e" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <PatternDivider className="max-w-xs mx-auto" />
            <SectionLabel>Living Culture</SectionLabel>
            <SectionHeading>Experience Cameroonian Culture</SectionHeading>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {CULTURE_ITEMS.map((item) => (
              <CultureCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Must-Visit Destinations ── */}
      <section className="w-full px-16 py-20">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-3">
              <PatternDivider className="max-w-xs" />
              <SectionLabel>Top Destinations</SectionLabel>
              <SectionHeading>Must-Visit Destinations</SectionHeading>
            </div>
            <a
              href="#"
              className="font-body text-sm text-gold tracking-widest uppercase flex items-center gap-2"
            >
              View All
              <ArrowRight size={14} />
            </a>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {DESTINATIONS.slice(0, 3).map((d) => (
              <DestinationCard key={d.name} dest={d} />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-5">
            {DESTINATIONS.slice(3).map((d) => (
              <DestinationCard key={d.name} dest={d} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Taste the Flavors ── */}
      <section
        className="w-full px-16 py-20 bg-muted"
        style={{ borderTop: "1px solid #3a2e1e", borderBottom: "1px solid #3a2e1e" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <PatternDivider color="#c4532a" className="max-w-xs mx-auto" />
            <SectionLabel color="text-terracotta">Regional Flavors</SectionLabel>
            <SectionHeading>Taste the Flavors of Cameroon</SectionHeading>
            <p className="font-body text-base text-muted-foreground max-w-xl">
              From the smoky savannah of the North to the spiced coastal kitchens of
              Douala — every region has a story on its plate.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-5">
            {DISHES.map((d) => (
              <DishCard key={d.name} dish={d} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Your Gateway ── */}
      <section
        className="relative w-full py-24 overflow-hidden"
        style={{ borderTop: "1px solid #3a2e1e", borderBottom: "1px solid #3a2e1e" }}
      >
        <img
          src={IMAGES.exploreGateway}
          alt="Cameroon Mosaic Resort aerial"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(14,12,9,0.8)" }} />
        {/* Grid texture */}
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.04,
            backgroundImage:
              "repeating-linear-gradient(0deg,#c8922a 0px,#c8922a 1px,transparent 1px,transparent 28px), repeating-linear-gradient(90deg,#c8922a 0px,#c8922a 1px,transparent 1px,transparent 28px)",
          }}
        />
        <div className="relative max-w-6xl mx-auto grid grid-cols-2 gap-16 items-center px-16">
          <div className="flex flex-col gap-6">
            <PatternDivider />
            <SectionLabel>Your Gateway</SectionLabel>
            <h2
              className="font-headings text-cream text-3xl leading-snug"
              style={{ fontStyle: "italic" }}
            >
              Your Gateway to Cameroon
            </h2>
            <p className="font-body text-base text-muted-foreground leading-loose">
              Cameroon Mosaic Heritage Resort brings together the cultures, traditions,
              cuisines, agriculture, and hospitality of Cameroon into one unforgettable
              destination.
            </p>
            <p className="font-body text-base text-muted-foreground leading-loose">
              Whether you seek adventure, learning, relaxation, or cultural discovery,
              our resort offers an authentic experience of Cameroon in one place.
            </p>
          </div>
          <div
            className="flex flex-col gap-5 pl-12"
            style={{ borderLeft: "1px solid #3a2e1e" }}
          >
            {GATEWAY_STATS.map(({ Icon, value, label }) => (
              <div
                key={label}
                className="flex items-center gap-5 pb-5"
                style={{ borderBottom: "1px solid #2a2018" }}
              >
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                  style={{ background: "#c8922a22", border: "1px solid #c8922a44" }}
                >
                  <Icon size={16} className="text-gold" />
                </div>
                <div>
                  <div className="font-headings text-gold text-xl font-bold">{value}</div>
                  <div className="font-body text-sm text-muted-foreground">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <section
        className="w-full bg-dark-panel px-16 py-14"
        style={{ borderTop: "1px solid #3a2e1e" }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <SectionLabel>Begin Your Journey</SectionLabel>
            <h2
              className="font-headings text-cream text-2xl"
              style={{ fontStyle: "italic" }}
            >
              Ready to Explore Cameroon?
            </h2>
            <p className="font-body text-sm text-muted-foreground mt-1">
              Culture, heritage, nature, and unforgettable experiences await.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-gold text-dark-panel font-body text-sm font-medium px-7 py-3 rounded-sm tracking-wide">
              <Calendar size={15} />
              Book Your Stay
            </button>
            <button
              className="flex items-center gap-2 font-body text-sm font-medium text-cream px-7 py-3 rounded-sm tracking-wide"
              style={{ border: "1px solid #3a2e1e" }}
            >
              <Mail size={15} />
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
