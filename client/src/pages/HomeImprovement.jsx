import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ArrowUpRight, Check } from 'lucide-react';
import { IMAGES } from '../data/images';
import SEO from '../components/SEO';

const improvementSections = [
  {
    num: "01",
    tag: "SURFACES & TEXTURE",
    title: "Wall & Surface Enhancement",
    desc: "Walls establish the foundational mood of any interior. Our surface enhancement solutions encompass architectural wood panelling, vertical slatted features, tactile textured coatings, and clean-lined moldings designed to elevate plain flat partitions into sculptural focal points.",
    points: [
      "Architectural fluted and slatted wood paneling",
      "Tactile surface coatings and matte finishes",
      "Clean edge detailing and bespoke trim profiles",
      "Durable, long-lasting surface preparation"
    ],
    image: IMAGES.wallEnhancement,
    alt: "High-end architectural wall surface enhancement with subtle lighting"
  },
  {
    num: "02",
    tag: "SPATIAL PROPORTION",
    title: "Room Styling",
    desc: "Cohesive room styling requires an understanding of scale, natural lighting, and purposeful layout. We assist in curating the entire spatial experience—balancing open breathing room with intimate focal corners to ensure a serene, livable atmosphere throughout the home.",
    points: [
      "Harmonious room layout and focal point selection",
      "Ambient, task, and accent lighting alignment",
      "Neutral color palettes that maximize natural daylight",
      "Balancing open space with functional utility"
    ],
    image: IMAGES.roomStyling,
    alt: "Refined living room styling with natural tones and balanced layout"
  },
  {
    num: "03",
    tag: "SCALE & MATERIALITY",
    title: "Furniture Coordination",
    desc: "Selecting the right furniture pieces is about how forms communicate with architecture. We help coordinate proportions, finishes, and textiles so that seating, tables, and cabinetry feel custom-tailored to the room's geometry rather than cluttered afterthoughts.",
    points: [
      "Scale-appropriate furniture selection and zoning",
      "Material synergy: blending oak, stone, and woven textiles",
      "Low-profile silhouettes for an airy aesthetic",
      "Durable comfort suited for everyday household use"
    ],
    image: IMAGES.furnitureCoordination,
    alt: "Curated furniture coordination in an architectural living environment"
  },
  {
    num: "04",
    tag: "FINISHING TOUCHES",
    title: "Decorative Improvements",
    desc: "True interior sophistication is found in the restraint of details. From architectural hardware and understated art positioning to ceramic vessels and tactile rugs, our decorative improvements complete the environment with intentional refinement.",
    points: [
      "Hardware and metal finish coordination",
      "Restrained decorative object arrangement",
      "Textile layering for added acoustic and visual warmth",
      "Uncluttered editorial display solutions"
    ],
    image: IMAGES.decorativeImprovements,
    alt: "Architectural decorative improvements on stone surface"
  }
];

export default function HomeImprovement() {
  return (
    <div className="min-h-screen bg-studio-white pt-24 sm:pt-28 pb-20">
      <SEO 
        title="Home Improvement" 
        description="Comprehensive home-improvement services in Lahore: wall and surface enhancement, room styling, furniture coordination, and decorative improvements by Hassan Interior."
      />

      {/* Page Header */}
      <section className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 py-10 lg:py-16 border-b border-studio-lightgray">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6">
          <div className="max-w-2xl">
            <span className="arch-tag block mb-2">PRACTICE / HOME IMPROVEMENT</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-studio-black font-normal leading-[1.15]">
              Architectural Home Improvement
            </h1>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-studio-muted max-w-sm">
            Disciplined solutions for living spaces, surface upgrades, and room enhancements in Lahore.
          </p>
        </div>
      </section>

      {/* Editorial Magazine Sections (No generic service cards) */}
      <section className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-20">
        <div className="space-y-24 sm:space-y-32">
          {improvementSections.map((sec, idx) => {
            const isReversed = idx % 2 !== 0;

            return (
              <article
                key={sec.num}
                className="border-b border-studio-lightgray pb-24 sm:pb-32 last:border-b-0 last:pb-0"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}>
                  
                  {/* Large Editorial Image (lg:col-span-7) */}
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative aspect-[16/10] overflow-hidden bg-studio-offwhite border border-studio-lightgray group">
                      <img
                        src={sec.image}
                        alt={sec.alt}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 bg-studio-white/90 backdrop-blur-md px-3 py-1 font-mono text-xs text-studio-black border border-studio-lightgray">
                        {sec.num} &bull; {sec.tag}
                      </div>
                    </div>
                  </div>

                  {/* Editorial Text & Bullet Details (lg:col-span-5) */}
                  <div className={`lg:col-span-5 space-y-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-3 font-mono text-xs text-studio-muted">
                      <span className="text-studio-accent font-bold text-base">{sec.num}</span>
                      <span className="w-8 h-[1px] bg-studio-lightgray" />
                      <span className="tracking-widest uppercase">{sec.tag}</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-serif text-studio-black leading-tight">
                      {sec.title}
                    </h2>

                    <p className="text-sm sm:text-base text-studio-muted leading-relaxed font-light">
                      {sec.desc}
                    </p>

                    {/* Architectural Feature Checklist */}
                    <div className="pt-2 space-y-2.5 border-t border-studio-lightgray">
                      {sec.points.map((pt) => (
                        <div key={pt} className="flex items-start gap-2.5 text-xs sm:text-sm text-studio-charcoal">
                          <Check className="w-4 h-4 text-studio-accent mt-0.5 flex-shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-semibold text-studio-black hover:text-studio-accent transition-colors pb-1 border-b border-studio-black hover:border-studio-accent"
                      >
                        <span>Discuss This Solution</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Direct Inquiries & Call Section */}
      <section className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 pt-12">
        <div className="p-8 sm:p-14 bg-studio-black text-studio-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl space-y-3 text-center md:text-left">
            <span className="font-mono text-xs text-studio-warmbeige tracking-widest uppercase block">
              COLLABORATE WITH HASSAN INTERIOR
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-studio-white">
              Have a room or wall in mind?
            </h3>
            <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed">
              Connect with our team to evaluate your space at Beadon Rd, Royal Park Lahore.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="px-7 py-3.5 bg-studio-white text-studio-black uppercase text-xs tracking-widest font-semibold hover:bg-studio-warmbeige transition-colors"
            >
              Inquire Online
            </Link>
            <a
              href="tel:+923224045703"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-studio-white uppercase text-xs tracking-widest font-semibold hover:bg-white/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call +92 322 4045703</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
