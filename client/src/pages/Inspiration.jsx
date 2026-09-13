import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Phone, Info } from 'lucide-react';
import { IMAGES } from '../data/images';
import SEO from '../components/SEO';

const inspirationSections = [
  {
    id: "modern-living",
    label: "01 / CONCEPT",
    category: "Modern Living",
    heading: "Spatial Clarity & Unencumbered Light",
    description: "Prioritizing open spatial horizons where daylight acts as a primary architectural material. Low-slung furniture and deliberate sightlines create breathing room for contemporary lifestyles.",
    image: IMAGES.inspiration[0].url,
    alt: IMAGES.inspiration[0].alt,
    caption: "Concept Study: Maximizing daylit perimeters through low-profile furnishings and unadorned glazing."
  },
  {
    id: "warm-interiors",
    label: "02 / CONCEPT",
    category: "Warm Interiors",
    heading: "Tactile Warmth & Organic Neutrality",
    description: "Combining warm beige, bone, oatmeal linens, and natural oak. The atmosphere shifts from austere to inherently cozy without relying on heavy patterning or visual clutter.",
    image: IMAGES.inspiration[1].url,
    alt: IMAGES.inspiration[1].alt,
    caption: "Concept Study: Layering textured plaster, natural fibers, and soft timber to infuse quiet warmth."
  },
  {
    id: "minimal-spaces",
    label: "03 / CONCEPT",
    category: "Minimal Spaces",
    heading: "Geometric Purity & Restraint",
    description: "Stripping away unnecessary ornamentation to emphasize clean vertical alignments, flush architectural transitions, and restful negative space.",
    image: IMAGES.inspiration[2].url,
    alt: IMAGES.inspiration[2].alt,
    caption: "Concept Study: Monolithic geometry and unified tone values that instill visual tranquility."
  },
  {
    id: "statement-details",
    label: "04 / CONCEPT",
    category: "Statement Details",
    heading: "Material Dialogue & Textural Contrast",
    description: "A single sculptural chair, a honed stone tabletop, or an architectural wall feature serves as the anchor point of a room, creating memorable character through texture rather than volume.",
    image: IMAGES.inspiration[3].url,
    alt: IMAGES.inspiration[3].alt,
    caption: "Concept Study: Elevating spaces with bespoke textural finishes and deliberate architectural focal points."
  }
];

export default function Inspiration() {
  return (
    <div className="min-h-screen bg-studio-white pt-24 sm:pt-28 pb-20">
      <SEO 
        title="Inspiration" 
        description="Editorial moodboards and spatial concepts: Modern Living, Warm Interiors, Minimal Spaces, and Statement Details by Hassan Interior."
      />

      {/* Header */}
      <section className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 py-10 lg:py-16 border-b border-studio-lightgray">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6">
          <div className="max-w-2xl">
            <span className="arch-tag block mb-2">EDITORIAL MOODBOARD &bull; 05</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-studio-black font-normal leading-[1.15]">
              Spatial Inspiration
            </h1>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-studio-muted max-w-sm">
            Curated interior aesthetics exploring light, materials, and domestic serenity.
          </p>
        </div>

        {/* Conceptual Transparency Notice */}
        <div className="mt-8 p-4 bg-studio-offwhite border border-studio-lightgray flex items-start gap-3 text-xs text-studio-muted">
          <Info className="w-4 h-4 text-studio-accent mt-0.5 flex-shrink-0" />
          <p className="leading-relaxed">
            <strong className="text-studio-black font-mono">Curated Design Studies:</strong> The imagery presented below represents conceptual interior directions and aesthetic inspirations. Consult our Beadon Rd store to adapt these concepts for your home.
          </p>
        </div>
      </section>

      {/* Custom Editorial Pinterest-Inspired Layout */}
      <section className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div className="space-y-28">
          {inspirationSections.map((sec, idx) => (
            <article 
              key={sec.id}
              className="border-b border-studio-lightgray pb-24 last:border-b-0 last:pb-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                
                {/* Image Section */}
                <div className="lg:col-span-8">
                  <div className="relative aspect-[16/10] overflow-hidden bg-studio-offwhite border border-studio-lightgray group">
                    <img
                      src={sec.image}
                      alt={sec.alt}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-studio-black/85 backdrop-blur-md px-3.5 py-1.5 border border-white/10 font-mono text-[10px] tracking-widest uppercase text-studio-white">
                      {sec.category}
                    </div>
                  </div>
                  <p className="mt-3 font-mono text-[11px] text-studio-muted tracking-wider">
                    {sec.caption}
                  </p>
                </div>

                {/* Text & Notes */}
                <div className="lg:col-span-4 space-y-5">
                  <span className="font-mono text-xs text-studio-accent font-bold tracking-widest uppercase block">
                    {sec.label}
                  </span>

                  <h2 className="text-2xl sm:text-3xl font-serif text-studio-black font-normal leading-tight">
                    {sec.heading}
                  </h2>

                  <p className="text-xs sm:text-sm text-studio-muted leading-relaxed font-light">
                    {sec.description}
                  </p>

                  <div className="pt-4 border-t border-studio-lightgray">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-studio-black hover:text-studio-accent font-semibold transition-colors"
                    >
                      <span>Inquire Regarding This Aesthetic</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 pt-8">
        <div className="p-8 sm:p-14 bg-studio-black text-studio-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="font-mono text-xs text-studio-warmbeige tracking-widest uppercase">
              CUSTOM CONSULTATION
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl">
              Inspired to elevate your interior?
            </h3>
            <p className="text-xs text-white/70 font-mono">
              Visit Hassan Interior on Beadon Rd, Royal Park Lahore
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3.5 bg-studio-white text-studio-black uppercase text-xs tracking-widest font-semibold hover:bg-studio-warmbeige transition-colors"
            >
              Get in Touch
            </Link>
            <a
              href="tel:+923224045703"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/30 text-studio-white uppercase text-xs tracking-widest font-semibold hover:bg-white/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
