import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../data/images';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="min-h-screen bg-studio-white pt-24 sm:pt-28 pb-20">
      <SEO 
        title="About Us" 
        description="Learn about Hassan Interior — a modern home improvement store in Royal Park Lahore specializing in interior aesthetics, functional spaces, and decorative solutions."
      />

      {/* Editorial Header */}
      <section className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 py-10 lg:py-16 border-b border-studio-lightgray">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
          <div>
            <span className="arch-tag block mb-2">01 / STUDIO OVERVIEW</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-studio-black font-normal leading-[1.15]">
              About Hassan Interior
            </h1>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-studio-muted max-w-sm">
            Home Improvement Store &bull; Beadon Rd, Royal Park Lahore
          </p>
        </div>

        {/* Asymmetric Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-12 items-center">
          
          {/* Large Vertical Image (lg:col-span-5) */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] overflow-hidden bg-studio-offwhite border border-studio-lightgray relative group">
              <img
                src={IMAGES.aboutHero}
                alt="Architectural interior perspective of modern living space"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-4 left-4 bg-studio-black/80 backdrop-blur-md px-3.5 py-1.5 border border-white/20">
                <span className="font-mono text-[10px] tracking-widest uppercase text-studio-white">
                  ARCHITECTURAL PERSPECTIVE
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between font-mono text-[11px] text-studio-muted border-b border-studio-lightgray pb-2">
              <span>LAHORE, PAKISTAN</span>
              <span>STUDIO IDENTITY</span>
            </div>
          </div>

          {/* Typography & Information Labels (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs tracking-widest uppercase text-studio-accent font-semibold">
                OUR PERSPECTIVE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-studio-black font-normal leading-snug">
                Creating spaces that feel balanced, enduring and deeply personal.
              </h2>
              <p className="text-base sm:text-lg text-studio-charcoal/90 leading-relaxed font-light">
                Hassan Interior is a Lahore-based home improvement store dedicated to refining domestic and commercial spaces. We believe true refinement lies in the harmony between functional layouts, thoughtful surface treatments, and curated decorative elements.
              </p>
              <p className="text-sm text-studio-muted leading-relaxed">
                Rather than relying on transient trends, we focus on balanced compositions, tactile finishes, and solutions that elevate the everyday routine of your home.
              </p>
            </div>

            {/* Small Information Labels Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-studio-lightgray">
              <div className="p-4 bg-studio-offwhite/60 border border-studio-lightgray">
                <span className="font-mono text-[10px] tracking-widest text-studio-muted uppercase block mb-1">
                  BUSINESS TYPE
                </span>
                <p className="text-xs font-semibold uppercase tracking-wider text-studio-black">
                  Home Improvement Store
                </p>
              </div>

              <div className="p-4 bg-studio-offwhite/60 border border-studio-lightgray">
                <span className="font-mono text-[10px] tracking-widest text-studio-muted uppercase block mb-1">
                  PRIMARY LOCATION
                </span>
                <p className="text-xs font-semibold uppercase tracking-wider text-studio-black">
                  Royal Park, Lahore
                </p>
              </div>

              <div className="p-4 bg-studio-offwhite/60 border border-studio-lightgray">
                <span className="font-mono text-[10px] tracking-widest text-studio-muted uppercase block mb-1">
                  CONSULTATION
                </span>
                <a 
                  href="tel:+923224045703" 
                  className="text-xs font-mono font-semibold uppercase tracking-wider text-studio-black hover:text-studio-accent transition-colors"
                >
                  +92 322 4045703
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Editorial Principles */}
      <section className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28 border-b border-studio-lightgray">
        <div className="max-w-3xl mb-16">
          <span className="arch-tag block mb-2">02 / CORE PRINCIPLES</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-studio-black mb-4">
            Disciplines of Interior Enhancement
          </h2>
          <p className="text-sm text-studio-muted leading-relaxed">
            Our approach emphasizes four foundational elements that turn an ordinary room into a cohesive, comfortable sanctuary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Home Improvement",
              desc: "Practical enhancements for walls, surfaces, and spaces that revitalize outdated layouts into purposeful settings."
            },
            {
              title: "Interior Aesthetics",
              desc: "Cultivating visual calmness through muted tones, architectural lines, and clean textural contrast."
            },
            {
              title: "Functional Spaces",
              desc: "Ensuring every room accommodates daily living needs smoothly with comfortable flow and clear proportions."
            },
            {
              title: "Decorative Direction",
              desc: "Selecting finishing touches, wall accents, and complementary elements that express your individuality."
            }
          ].map((item, idx) => (
            <div
              key={item.title}
              className="p-8 bg-studio-white border border-studio-lightgray hover:border-studio-black transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-studio-accent mb-4 block">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-xl text-studio-black mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-studio-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-studio-lightgray/40">
                <span className="font-mono text-[10px] tracking-widest text-studio-muted uppercase">
                  PRACTICE DETAIL
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Materials & Living Environments Gallery Snippet */}
      <section className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28 border-b border-studio-lightgray">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="arch-tag block">03 / MATERIALITY</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-studio-black font-normal leading-tight">
              Honest Textures &amp; Refined Finishes
            </h2>
            <p className="text-sm sm:text-base text-studio-muted leading-relaxed font-light">
              We appreciate the subtlety of tactile surfaces — the warmth of natural wood grains, the quiet presence of matte mineral plaster, and the timeless simplicity of neutral tones.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-studio-accent mt-1 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-studio-charcoal">Curated options for residential and commercial spaces</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-studio-accent mt-1 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-studio-charcoal">Practical focus on durability, installation, and clean upkeep</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-studio-accent mt-1 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-studio-charcoal">Direct store consultations on Beadon Rd, Royal Park</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-studio-black text-studio-white uppercase text-xs tracking-widest font-semibold hover:bg-studio-charcoal transition-colors"
              >
                <span>Visit Store or Inquire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="aspect-[4/5] overflow-hidden bg-studio-offwhite border border-studio-lightgray">
              <img
                src={IMAGES.aboutPhilosophy}
                alt="Tactile wall surface finish and natural lighting"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden bg-studio-offwhite border border-studio-lightgray sm:translate-y-8">
              <img
                src={IMAGES.aboutMaterials}
                alt="Wood and stone architectural interior materials"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Store Location & Call Bar */}
      <section className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 pt-16">
        <div className="p-8 sm:p-12 bg-studio-offwhite border border-studio-lightgray flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="font-mono text-[10px] tracking-widest uppercase text-studio-muted">
              VISIT OUR LOCATION
            </span>
            <h3 className="font-serif text-2xl text-studio-black">
              Beadon Rd, Royal Park Lahore
            </h3>
            <p className="text-xs text-studio-muted font-mono">
              Postal Code: 54000 &bull; Lahore, Punjab, Pakistan
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="tel:+923224045703"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-studio-black text-studio-white uppercase text-xs tracking-widest font-semibold hover:bg-studio-charcoal transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call +92 322 4045703</span>
            </a>
            <Link
              to="/contact"
              className="px-6 py-3.5 border border-studio-black text-studio-black uppercase text-xs tracking-widest font-semibold hover:bg-studio-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
