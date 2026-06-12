import { Link } from "react-router-dom";
import { Clock, Users, ArrowRight } from "lucide-react";
import NavBar from "../components/NavBar";
import SiteFooter from "../components/SiteFooter";
import PatternDivider from "../components/PatternDivider";
import { IMAGES } from "../data/images";

const EXPERIENCES = [
  {
    name: "Storytelling Evenings",
    image: IMAGES.expStorytelling,
    accent: "#c8922a",
    duration: "2 hours",
    group: "Up to 30 guests",
    description:
      "Gather around the fire as griots and elders share folktales, proverbs, and the living oral history of Cameroon's peoples.",
  },
  {
    name: "Cocoa Farm Visits",
    image: IMAGES.expCocoa,
    accent: "#4a7a40",
    duration: "Half day",
    group: "Up to 12 guests",
    description:
      "Walk the cocoa groves with local farmers, learn bean-to-bar traditions, and taste heritage chocolate at the source.",
  },
  {
    name: "Weaving Workshops",
    image: IMAGES.expWeaving,
    accent: "#c4532a",
    duration: "3 hours",
    group: "Up to 10 guests",
    description:
      "Learn raffia and loom techniques from Grassfields master weavers and craft your own piece to take home.",
  },
  {
    name: "Drum & Dance Sessions",
    image: IMAGES.expDrum,
    accent: "#8b6b3d",
    duration: "2 hours",
    group: "Up to 20 guests",
    description:
      "Feel the heartbeat of Cameroon — hands-on djembe lessons and traditional dance led by resident performers.",
  },
  {
    name: "Cooking Classes",
    image: IMAGES.cultureCuisine,
    accent: "#c8922a",
    duration: "3 hours",
    group: "Up to 8 guests",
    description:
      "Cook ndolé, achu, and eru alongside our chefs using produce from the resort farm and local markets.",
  },
  {
    name: "Festival Nights",
    image: IMAGES.cultureFestival,
    accent: "#c4532a",
    duration: "Evening",
    group: "All guests",
    description:
      "Masked dances, royal regalia, and live music — a rotating celebration of festivals from all ten regions.",
  },
];

export default function Experiences() {
  return (
    <div className="w-full bg-background font-body text-foreground">
      {/* Hero */}
      <section className="relative h-[480px] w-full">
        <img
          src={IMAGES.cultureDance}
          alt="Traditional Cameroonian dance performance"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(14,12,9,0.35) 0%, rgba(14,12,9,0.6) 45%, rgba(14,12,9,0.95) 100%)",
          }}
        />
        <NavBar />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-16 text-center md:px-24">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-gold" />
            <span className="text-xs tracking-[0.35em] text-gold uppercase">Live the Culture</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h1
            className="max-w-3xl font-headings text-4xl leading-tight text-cream md:text-5xl"
            style={{ fontStyle: "italic" }}
          >
            Experiences
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sand" style={{ opacity: 0.85 }}>
            Hands-on cultural immersion led by the artisans, farmers, storytellers, and performers who
            keep Cameroon's heritage alive.
          </p>
        </div>
      </section>

      {/* Experience grid */}
      <section className="w-full px-6 py-20 md:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          <div className="flex flex-col items-center gap-3 text-center">
            <PatternDivider className="mx-auto w-48" />
            <span className="text-xs tracking-[0.3em] text-gold uppercase">Signature Programs</span>
            <h2 className="font-headings text-3xl text-cream" style={{ fontStyle: "italic" }}>
              Choose Your Immersion
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.name}
                className="flex flex-col overflow-hidden rounded-sm border border-border bg-dark-panel"
              >
                <div className="relative h-48">
                  <img src={exp.image} alt={exp.name} className="h-full w-full object-cover" />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(14,12,9,0.6) 0%, transparent 55%)" }}
                  />
                  <div
                    className="absolute top-0 left-0 h-6 w-6"
                    style={{ borderTop: `1px solid ${exp.accent}`, borderLeft: `1px solid ${exp.accent}` }}
                  />
                  <div
                    className="absolute top-0 right-0 h-6 w-6"
                    style={{ borderTop: `1px solid ${exp.accent}`, borderRight: `1px solid ${exp.accent}` }}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="font-headings text-lg text-cream" style={{ fontStyle: "italic" }}>
                    {exp.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
                  <div
                    className="mt-auto flex items-center gap-4 border-t pt-3 text-muted-foreground"
                    style={{ borderColor: "#2a2018" }}
                  >
                    <span className="flex items-center gap-1.5 text-xs">
                      <Clock size={12} />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs">
                      <Users size={12} />
                      {exp.group}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full border-t border-border bg-dark-panel px-6 py-16 md:px-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 text-center">
          <PatternDivider className="mx-auto w-48" />
          <h2 className="font-headings text-3xl text-cream" style={{ fontStyle: "italic" }}>
            Ready to Take Part?
          </h2>
          <p className="max-w-lg text-base text-muted-foreground">
            Experiences are included with every stay or bookable individually. Reach out and we'll build
            your cultural itinerary.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <Link
              to="/accommodation"
              className="rounded-sm bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-dark-panel transition-opacity hover:opacity-90"
            >
              Book a Stay
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-sm border border-gold px-8 py-3.5 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-gold/10"
            >
              Contact Us
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
