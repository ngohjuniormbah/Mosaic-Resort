import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import NavBar from "../components/NavBar";
import SiteFooter from "../components/SiteFooter";
import PatternDivider from "../components/PatternDivider";
import { IMAGES } from "../data/images";

const CONTACT_DETAILS = [
  { Icon: MapPin, label: "Location", value: "Yaoundé, Cameroon" },
  { Icon: Phone, label: "Phone", value: "+237 600 000 000", href: "tel:+237600000000" },
  {
    Icon: Mail,
    label: "Email",
    value: "info@cameroonempire.com",
    href: "mailto:info@cameroonempire.com",
  },
  { Icon: Clock, label: "Reception", value: "Open 24 hours, every day" },
];

export default function Contact() {
  return (
    <div className="w-full bg-background font-body text-foreground">
      {/* Hero */}
      <section className="relative h-[420px] w-full">
        <img src={IMAGES.aboutCta} alt="The resort at golden hour" className="h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(14,12,9,0.4) 0%, rgba(14,12,9,0.65) 50%, rgba(14,12,9,0.95) 100%)",
          }}
        />
        <NavBar />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-16 text-center md:px-24">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-gold" />
            <span className="text-xs tracking-[0.35em] text-gold uppercase">We're Here to Help</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h1
            className="font-headings text-4xl leading-tight text-cream md:text-5xl"
            style={{ fontStyle: "italic" }}
          >
            Contact Us
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sand" style={{ opacity: 0.85 }}>
            Questions about stays, experiences, or the Heritage Shop — our team responds within a day.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="w-full px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <PatternDivider className="w-40" />
            <h2 className="font-headings text-3xl text-cream" style={{ fontStyle: "italic" }}>
              Get in Touch
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
              Call, email, or message us on WhatsApp — or use the form and we'll get back to you. For
              booking enquiries, include your preferred dates and accommodation type.
            </p>
            <div className="flex flex-col gap-4">
              {CONTACT_DETAILS.map(({ Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-sm border border-border bg-dark-panel px-5 py-4"
                >
                  <Icon size={18} className="shrink-0 text-gold" />
                  <div>
                    <div className="text-xs tracking-widest text-gold uppercase">{label}</div>
                    {href ? (
                      <a href={href} className="text-sm text-cream transition-colors hover:text-gold">
                        {value}
                      </a>
                    ) : (
                      <div className="text-sm text-cream">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/237600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2 rounded-sm bg-gold px-7 py-3 text-sm font-medium tracking-wide text-dark-panel transition-opacity hover:opacity-90"
            >
              <MessageCircle size={15} />
              Chat on WhatsApp
            </a>
          </div>

          <form
            className="flex flex-col gap-4 rounded-sm border border-border bg-dark-panel p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="font-headings text-xl text-cream" style={{ fontStyle: "italic" }}>
              Send a Message
            </h3>
            <PatternDivider />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="text-xs tracking-wide text-muted-foreground">
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  className="rounded-sm border border-border bg-input px-3 py-2.5 text-sm text-cream placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="text-xs tracking-wide text-muted-foreground">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  className="rounded-sm border border-border bg-input px-3 py-2.5 text-sm text-cream placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-subject" className="text-xs tracking-wide text-muted-foreground">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                placeholder="Booking enquiry, experiences, shop order..."
                className="rounded-sm border border-border bg-input px-3 py-2.5 text-sm text-cream placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="text-xs tracking-wide text-muted-foreground">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder="How can we help?"
                className="resize-none rounded-sm border border-border bg-input px-3 py-2.5 text-sm text-cream placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>
            <button
              type="submit"
              className="mt-1 w-full rounded-sm bg-gold py-3 text-sm font-medium tracking-wide text-dark-panel transition-opacity hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
