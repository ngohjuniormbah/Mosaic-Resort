import {
  MapPin,
  Globe,
  Eye,
  Target,
  Landmark,
  Users,
  Leaf,
  BookOpen,
  Building2,
  Award,
  Lightbulb,
  HeartHandshake,
} from "lucide-react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import PatternDivider from "../components/PatternDivider.jsx";
import ValueCard from "../components/ValueCard.jsx";
import TeamCard from "../components/TeamCard.jsx";
import { IMAGES } from "../data/images.js";

const OBJECTIVES = [
  {
    Icon: Landmark,
    accent: "#c8922a",
    title: "Promote Cultural Heritage",
    description:
      "Preserve and celebrate Cameroon's traditions, languages, arts, and customs for current and future generations.",
  },
  {
    Icon: Users,
    accent: "#c4532a",
    title: "Support Local Communities",
    description:
      "Create economic opportunities for artisans, farmers, performers, and local businesses across all regions.",
  },
  {
    Icon: Leaf,
    accent: "#4a7a40",
    title: "Promote Sustainable Tourism",
    description:
      "Encourage environmentally responsible tourism practices that protect Cameroon's natural heritage.",
  },
  {
    Icon: BookOpen,
    accent: "#8b6b3d",
    title: "Educate and Inspire",
    description:
      "Provide meaningful cultural and agricultural learning experiences that leave lasting impressions.",
  },
];

const CORE_VALUES = [
  {
    Icon: Building2,
    accent: "#c8922a",
    title: "Heritage",
    description:
      "Preserving and celebrating Cameroon's cultural identity across all 10 regions and 250+ ethnic groups.",
  },
  {
    Icon: Award,
    accent: "#8b6b3d",
    title: "Excellence",
    description:
      "Providing consistently high-quality experiences, services, and cultural programming.",
  },
  {
    Icon: Leaf,
    accent: "#4a7a40",
    title: "Sustainability",
    description:
      "Protecting local communities, cultural traditions, and the natural environment for generations to come.",
  },
  {
    Icon: Lightbulb,
    accent: "#c4532a",
    title: "Innovation",
    description:
      "Using creative and modern solutions to enhance how the world experiences cultural tourism.",
  },
  {
    Icon: HeartHandshake,
    accent: "#c8922a",
    title: "Community",
    description:
      "Building meaningful, long-term partnerships with local artisans, farmers, performers, and families.",
  },
];

const OPPORTUNITY_STATS = [
  { value: "250+", label: "Ethnic Groups" },
  { value: "10", label: "Distinct Regions" },
  { value: "280+", label: "Languages" },
  { value: "1", label: "Destination" },
];

const TEAM = [
  {
    avatar: "/leader.jpeg",
    name: "Team Leader",
    role: "Chief Executive Officer",
    bio: "Leads the vision and direction of Cameroon Empire Heritage Resort, driving the mission to celebrate Cameroon's cultural heritage through world-class hospitality.",
  },
  {
    avatar: "/DEVELOPER.jpg",
    name: "Modest N",
    role: "Lead Developer",
    bio: "Built and architected the digital platform for Cameroon Empire Heritage Resort — from design system to full-stack implementation and deployment.",
  },
  {
    avatar: "/leadUIUX.jpeg",
    name: "Lead Designer",
    role: "UI/UX Designer",
    bio: "Crafted the visual identity and user experience of the resort's digital presence, blending Cameroonian aesthetic tradition with modern design principles.",
  },
  {
    avatar: "/member3.jpeg",
    name: "Bevanie Fomonyuy",
    role: "Project Team Member",
    bio: "Contributes to research, content strategy, and project coordination — ensuring the resort's cultural story is told with authenticity and depth.",
  },
  {
    avatar: "/member4.jpeg",
    name: "Soureya Awal",
    role: "Project Team Member",
    bio: "Supports operations, community engagement, and stakeholder outreach — connecting the resort to Cameroon's rich network of cultural partners.",
  },
  {
    avatar: "/MEMBER1.jpeg",
    name: "Modest N",
    role: "Project Team Member",
    bio: "Plays a key role in the development and delivery of the Cameroon Empire Heritage Resort project, bringing dedication and expertise to every milestone.",
  },
  {
    avatar: "/MEMBER2.jpeg",
    name: "Team Member",
    role: "Project Team Member",
    bio: "An integral part of the Cameroon Empire Heritage Resort team, contributing skills and commitment to bringing this cultural vision to life.",
  },
];

function MissionCard({ Icon, accent, eyebrow, title, description, patternAngle }) {
  return (
    <article className="relative flex flex-col gap-5 overflow-hidden rounded-sm border border-border bg-background p-8">
      <div
        className="absolute top-0 h-32 w-32 opacity-5"
        style={{
          [patternAngle > 0 ? "right" : "left"]: 0,
          background: `repeating-linear-gradient(${patternAngle}deg, ${accent} 0px, ${accent} 1px, transparent 1px, transparent 10px)`,
        }}
      />
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-sm"
          style={{ background: `${accent}22`, border: `1px solid ${accent}44` }}
        >
          <Icon size={18} style={{ color: accent }} />
        </div>
        <span className="text-xs tracking-[0.3em] uppercase" style={{ color: accent }}>
          {eyebrow}
        </span>
      </div>
      <PatternDivider color={accent} />
      <h3 className="font-headings text-xl italic leading-snug text-cream">{title}</h3>
      <p className="text-base leading-loose text-muted-foreground">{description}</p>
      <div
        className="mt-2 h-0.5 w-full"
        style={{ background: `linear-gradient(to right, ${accent}, transparent)` }}
      />
    </article>
  );
}

export default function About() {
  return (
    <div className="w-full bg-background font-body text-foreground">
      {/* ───────────────── Hero ───────────────── */}
      <section className="relative h-[560px] w-full">
        <img
          src={IMAGES.aboutHero}
          alt="Traditional Cameroonian village architecture"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(14,12,9,0.35) 0%, rgba(14,12,9,0.6) 40%, rgba(14,12,9,0.94) 100%)",
          }}
        />
        <div
          className="absolute top-0 left-0 h-40 w-40 opacity-20"
          style={{
            background:
              "repeating-linear-gradient(45deg, #c8922a 0px, #c8922a 1px, transparent 1px, transparent 12px)",
            WebkitMaskImage: "radial-gradient(circle at top left, black 40%, transparent 70%)",
            maskImage: "radial-gradient(circle at top left, black 40%, transparent 70%)",
          }}
        />

        <NavBar />

        <div className="absolute inset-0 top-[60px] flex flex-col items-center justify-center px-6 text-center md:px-24">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-gold" />
            <span className="text-xs tracking-[0.35em] text-gold uppercase">
              Our Story, Our Heritage, Our Vision
            </span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h1 className="max-w-3xl font-headings text-4xl italic leading-tight text-cream">
            About Cameroon Empire Heritage Resort
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sand opacity-85">
            A cultural and eco-tourism destination designed to celebrate, preserve, and showcase the
            rich diversity of Cameroon through hospitality, agriculture, education, and immersive
            cultural experiences.
          </p>
        </div>
      </section>

      {/* ───────────────── Our Story ───────────────── */}
      <section className="w-full px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="h-[500px] overflow-hidden rounded-sm">
              <img
                src={IMAGES.aboutStory}
                alt="Diverse Cameroonian people and traditions"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 -z-10 h-36 w-36 rounded-sm border-2 border-gold opacity-35" />
            <div className="absolute -right-8 top-8 rounded-sm border border-border bg-dark-panel px-5 py-4">
              <div className="flex flex-col items-center gap-1">
                <span className="font-headings text-2xl font-bold text-gold">Group 8</span>
                <span className="text-xs tracking-widest text-muted-foreground uppercase">
                  Project Team
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <PatternDivider />
            <span className="text-xs tracking-[0.3em] text-gold uppercase">Our Story</span>
            <h2 className="font-headings text-3xl italic leading-snug text-cream">
              Born from Cameroon's Identity as “Africa in Miniature”
            </h2>
            <p className="text-base leading-loose text-muted-foreground">
              Cameroon Empire Heritage Resort was conceived by Group 8 as an innovative tourism and
              cultural preservation project. The concept was developed to create a destination where
              visitors can experience the beauty, traditions, cuisine, agriculture, and heritage of
              Cameroon in one location.
            </p>
            <p className="text-base leading-loose text-muted-foreground">
              Inspired by Cameroon's identity as “Africa in Miniature,” the resort brings together
              culture, hospitality, education, and sustainable tourism to create memorable
              experiences while supporting local communities and preserving cultural heritage for
              future generations.
            </p>
            <PatternDivider color="#c4532a" />
            <div className="mt-1 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-gold" />
                <span className="text-sm text-sand">Cameroon, Central Africa</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={14} className="text-gold" />
                <span className="text-sm text-sand">10 Regions Represented</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── Vision & Mission ───────────────── */}
      <section className="w-full border-y border-border bg-muted px-6 py-20 md:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <PatternDivider className="mx-auto w-48" />
            <span className="text-xs tracking-[0.3em] text-gold uppercase">Our Direction</span>
            <h2 className="font-headings text-3xl italic text-cream">Vision &amp; Mission</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <MissionCard
              Icon={Eye}
              accent="#c8922a"
              eyebrow="Our Vision"
              title="Central Africa's Leading Cultural Tourism Destination"
              description="To become the leading cultural and eco-tourism destination in Central Africa, showcasing the richness of Cameroon's heritage while promoting sustainable development and cultural preservation."
              patternAngle={45}
            />
            <MissionCard
              Icon={Target}
              accent="#c4532a"
              eyebrow="Our Mission"
              title="Immersive Experiences That Connect, Educate & Inspire"
              description="To provide immersive cultural, agricultural, and hospitality experiences that educate, inspire, and connect visitors with the diverse traditions and communities of Cameroon."
              patternAngle={-45}
            />
          </div>
        </div>
      </section>

      {/* ───────────────── Objectives ───────────────── */}
      <section className="w-full px-6 py-20 md:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <PatternDivider className="mx-auto w-48" />
            <span className="text-xs tracking-[0.3em] text-gold uppercase">Strategic Goals</span>
            <h2 className="font-headings text-3xl italic text-cream">Our Objectives</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {OBJECTIVES.map((item) => (
              <ValueCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── The Opportunity ───────────────── */}
      <section className="relative w-full overflow-hidden border-y border-border py-24">
        <img
          src={IMAGES.aboutOpportunity}
          alt="Aerial view of Cameroon's landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(14,12,9,0.82)" }} />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #c8922a 0px, #c8922a 1px, transparent 1px, transparent 28px), repeating-linear-gradient(90deg, #c8922a 0px, #c8922a 1px, transparent 1px, transparent 28px)",
          }}
        />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center md:px-8">
          <PatternDivider className="w-48" />
          <span className="text-xs tracking-[0.3em] text-gold uppercase">The Opportunity</span>
          <h2 className="font-headings text-3xl italic leading-snug text-cream">
            Why Cameroon Empire Heritage Resort?
          </h2>
          <p className="text-lg leading-loose text-muted-foreground">
            Cameroon possesses extraordinary cultural diversity, natural attractions, and
            agricultural wealth. Despite these resources, many cultural traditions remain
            underrepresented in modern tourism.
          </p>
          <p className="text-base leading-loose text-muted-foreground">
            Cameroon Empire Heritage Resort addresses this challenge by creating a destination where
            culture, education, tourism, agriculture, and hospitality work together to promote
            national heritage while generating economic opportunities for local communities.
          </p>
          <PatternDivider color="#c4532a" className="mt-2 w-48" />
          <div className="mt-4 flex flex-wrap justify-center overflow-hidden rounded-sm border border-border">
            {OPPORTUNITY_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center gap-1 bg-dark-panel px-10 py-5 ${
                  i > 0 ? "border-l border-border" : ""
                }`}
              >
                <span className="font-headings text-2xl font-bold text-gold">{stat.value}</span>
                <span className="text-xs tracking-widest text-muted-foreground uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── Team ───────────────── */}
      <section className="w-full border-b border-border bg-muted px-6 py-20 md:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <PatternDivider className="mx-auto w-48" />
            <span className="text-xs tracking-[0.3em] text-gold uppercase">The Creators</span>
            <h2 className="font-headings text-3xl italic text-cream">Group 8 Project Team</h2>
            <p className="max-w-lg text-base text-muted-foreground">
              A passionate multidisciplinary team united by a shared vision for Cameroon's cultural
              and tourism future.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {TEAM.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── Core Values ───────────────── */}
      <section className="w-full px-6 py-20 md:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          <div className="flex flex-col gap-3">
            <PatternDivider className="w-40" />
            <span className="text-xs tracking-[0.3em] text-gold uppercase">What We Stand For</span>
            <h2 className="font-headings text-3xl italic text-cream">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {CORE_VALUES.map((item) => (
              <ValueCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── CTA band ───────────────── */}
      <section className="relative w-full overflow-hidden border-t border-border py-20">
        <img
          src={IMAGES.aboutCta}
          alt="Cameroonian cultural festival at night"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(14,12,9,0.78)" }} />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #c8922a 0px, #c8922a 1px, transparent 1px, transparent 20px)",
          }}
        />
        <div className="relative flex flex-col items-center gap-6 px-6 text-center md:px-24">
          <PatternDivider className="w-48" />
          <h2 className="font-headings text-3xl italic text-cream">
            Be Part of the Cameroon Experience
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-sand opacity-85">
            Discover a destination where culture, nature, agriculture, and hospitality come together
            to create unforgettable memories.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/experiences"
              className="rounded-sm bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-dark-panel transition-opacity hover:opacity-90"
            >
              Explore Experiences
            </Link>
            <Link
              to="/contact"
              className="rounded-sm border border-cream/40 px-8 py-3.5 text-sm font-medium tracking-wide text-cream transition-colors hover:border-cream"
            >
              Contact Us
            </Link>
          </div>
          <PatternDivider className="mt-2 w-48" />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
