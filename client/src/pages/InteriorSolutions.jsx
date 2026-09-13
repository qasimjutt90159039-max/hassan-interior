import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Compass, Sparkles, Layers, Sliders } from 'lucide-react';
import { IMAGES } from '../data/images';
import SEO from '../components/SEO';

const solutionChapters = [
  {
    chapter: "CHAPTER 01",
    icon: Compass,
    title: "Living Spaces",
    subtitle: "Spatial Rhythm & Everyday Ease",
    desc: "A living room should never feel rigid or overly formal. We focus on establishing an open, natural flow where daylight penetrates freely, transitions between zones are intuitive, and seating configurations invite relaxed conversation and daily relaxation.",
    image: IMAGES.livingSpaces,
    alt: "Spacious architectural living space with natural illumination"
  },
  {
    chapter: "CHAPTER 02",
    icon: Layers,
    title: "Furniture & Arrangement",
    subtitle: "Geometry, Proportion & Circulation",
    desc: "Placing furniture is an exercise in geometric balance. By understanding sightlines, circulation paths, and furniture scale, we help arrange key pieces so each item feels grounded and rooms remain uncluttered without feeling sterile.",
    image: IMAGES.furnitureArrangement,
    alt: "Carefully arranged living room furniture with balanced circulation paths"
  },
  {
    chapter: "CHAPTER 03",
    icon: Sliders,
    title: "Colors & Materials",
    subtitle: "Tactile Neutrality & Warmth",
    desc: "The colors you live with should calm the senses. We champion warm neutrals, off-whites, organic linen textures, and subtle wood tones that age gracefully under both day and evening illumination.",
    image: IMAGES.colorsMaterials,
    alt: "Warm interior color palette and organic materials"
  },
  {
    chapter: "CHAPTER 04",
    icon: Sparkles,
    title: "Finishing Touches",
    subtitle: "Curated Accents & Ambient Details",
    desc: "The final layer gives a home its soul. Intentional accent placement, tactile ceramics, architectural downlighting, and subtle textural contrast coalesce into a complete living environment tailored to your household.",
    image: IMAGES.finishingTouches,
    alt: "Curated finishing touches and decorative objects in an interior"
  }
];

export default function InteriorSolutions() {
  return (
    <div className="min-h-screen bg-studio-white pt-24 sm:pt-28 pb-20">
      <SEO 
        title="Interior Solutions for Everyday Living" 
        description="Explore visual storytelling for living spaces, furniture arrangement, materials, and finishing touches by Hassan Interior Lahore."
      />

      {/* Hero Visual Storytelling Header */}
      <section className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 py-10 lg:py-16 border-b border-studio-lightgray">
        <div className="max-w-4xl">
          <span className="arch-tag block mb-3">03 / SPATIAL NARRATIVE</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-studio-black font-normal leading-[1.15] mb-6">
            Interior Solutions for Everyday Living
          </h1>
          <p className="text-base sm:text-lg text-studio-muted font-light leading-relaxed max-w-2xl">
            Thoughtful living spaces are not built on excessive decoration, but on clarity of purpose, natural light, and the harmonious arrangement of elements.
          </p>
        </div>
      </section>

      {/* Vertical Scroll-Based Storytelling Composition */}
      <section className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div className="space-y-32">
          {solutionChapters.map((chap, idx) => {
            const Icon = chap.icon;
            const isEven = idx % 2 === 1;

            return (
              <div 
                key={chap.title}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                {/* Visual Image Column */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden bg-studio-offwhite border border-studio-lightgray shadow-sm group">
                    <img
                      src={chap.image}
                      alt={chap.alt}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute bottom-4 right-4 bg-studio-black/80 backdrop-blur-md px-3 py-1 text-studio-white font-mono text-[10px] tracking-widest uppercase">
                      HASSAN INTERIOR &bull; 0{idx + 1}
                    </div>
                  </div>
                </div>

                {/* Storytelling Text Column */}
                <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-none border border-studio-lightgray flex items-center justify-center text-studio-black bg-studio-offwhite">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs text-studio-accent font-bold tracking-widest uppercase">
                      {chap.chapter}
                    </span>
                  </div>

                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-studio-muted block mb-1">
                      {chap.subtitle}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif text-studio-black font-normal">
                      {chap.title}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-studio-muted font-light leading-relaxed">
                    {chap.desc}
                  </p>

                  <div className="pt-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-semibold text-studio-black hover:text-studio-accent transition-colors pb-1 border-b border-studio-black"
                    >
                      <span>Inquire About This Space</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 pt-8">
        <div className="p-8 sm:p-14 bg-studio-offwhite border border-studio-lightgray flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="font-mono text-xs tracking-widest uppercase text-studio-muted block">
              STORE CONSULTATION
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-studio-black">
              Visit Hassan Interior on Beadon Road
            </h3>
            <p className="text-xs sm:text-sm text-studio-muted max-w-lg font-light">
              Discuss living room styling, furniture layouts, and room updates directly at our Royal Park location in Lahore.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="tel:+923224045703"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-studio-black text-studio-white uppercase text-xs tracking-widest font-semibold hover:bg-studio-charcoal transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call +92 322 4045703</span>
            </a>
            <Link
              to="/contact"
              className="px-7 py-3.5 border border-studio-black text-studio-black uppercase text-xs tracking-widest font-semibold hover:bg-studio-white transition-colors"
            >
              Send Message
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
