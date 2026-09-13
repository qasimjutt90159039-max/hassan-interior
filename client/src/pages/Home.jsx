import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Phone, ChevronDown } from 'lucide-react';
import { IMAGES } from '../data/images';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <div className="min-h-screen bg-studio-white">
      <SEO 
        title="Refining the Spaces You Live In" 
        description="Thoughtful home-improvement and interior solutions in Lahore for spaces that feel refined, comfortable and personal. Located at Beadon Rd, Royal Park Lahore."
      />

      {/* =========================================================================
          1. ARCHITECTURAL "IMAGE-FIRST" HERO
          ========================================================================= */}
      <section className="relative pt-24 sm:pt-28 pb-16 lg:pb-24 border-b border-studio-lightgray overflow-hidden">
        <div className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12">

          {/* Main Hero Grid Composition */}
          <div className="relative">
            
            {/* Large Image Frame */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-studio-offwhite border border-studio-lightgray">
              <img
                src={IMAGES.hero}
                alt="Refined minimalist living space with architectural light and clean interior proportions"
                className="w-full h-full object-cover object-center transform hover:scale-[1.015] transition-transform duration-1000 ease-out"
                loading="eager"
              />

              {/* Floating Vertical Label (Left) */}
              <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-left items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-studio-white bg-studio-black/60 backdrop-blur-md px-3 py-1.5 border border-white/20">
                <span>00 / STUDIO LAHORE</span>
              </div>
            </div>

            {/* Architectural Editorial Floating Overlay / Panel */}
            <div className="mt-8 lg:mt-0 lg:absolute lg:bottom-12 lg:left-12 lg:max-w-xl xl:max-w-2xl bg-studio-white/95 lg:backdrop-blur-md lg:border lg:border-studio-lightgray p-6 sm:p-10 lg:shadow-xl">
              <div className="arch-tag mb-3">
                ARCHITECTURAL LIVING &bull; LAHORE
              </div>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-serif text-studio-black font-normal leading-[1.15] mb-5">
                Refining the Spaces You Live In
              </h1>

              <p className="text-sm sm:text-base text-studio-muted leading-relaxed mb-8 max-w-lg">
                Thoughtful home-improvement and interior solutions for spaces that feel refined, comfortable and personal.
              </p>

              {/* Hero Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/home-improvement"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-studio-black text-studio-white text-xs uppercase tracking-[0.16em] font-medium hover:bg-studio-charcoal transition-colors"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 border border-studio-black text-studio-black text-xs uppercase tracking-[0.16em] font-medium hover:bg-studio-offwhite transition-colors"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

          {/* Thin Architectural Lines & Scroll Indicator */}
          <div className="pt-10 flex items-center justify-between text-studio-muted font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-12 h-[1px] bg-studio-lightgray" />
              <span className="tracking-widest text-[10px] uppercase">SCROLL TO DISCOVER</span>
            </div>
            <div className="flex items-center gap-2">
              <ChevronDown className="w-4 h-4 animate-bounce text-studio-charcoal" />
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          2. VISUAL INTRODUCTION (Large Whitespace & Thoughtful Typography)
          ========================================================================= */}
      <section className="py-24 sm:py-32 lg:py-40 border-b border-studio-lightgray bg-studio-white">
        <div className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center sm:text-left">
            
            {/* Small Label */}
            <div className="inline-block font-mono text-xs tracking-[0.25em] text-studio-muted uppercase mb-4 pb-1 border-b border-studio-accent">
              01 / ABOUT
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-studio-black font-normal leading-[1.2] mb-8">
              Spaces Shape the Way We Feel
            </h2>

            {/* Professional Description */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-studio-charcoal">
              <div className="md:col-span-8 space-y-5 text-base sm:text-lg text-studio-charcoal/90 leading-relaxed font-light">
                <p>
                  At Hassan Interior, we approach home improvement with a disciplined eye for balance, materiality, and structural refinement. The environment surrounding you plays an essential role in everyday comfort and wellbeing.
                </p>
                <p className="text-sm sm:text-base text-studio-muted">
                  From wall surfaces and decorative enhancements to cohesive room styling, our focus remains centered on practical, enduring solutions tailored for modern living spaces across Lahore.
                </p>
              </div>

              <div className="md:col-span-4 border-l border-studio-lightgray pl-6 sm:pl-8 flex flex-col justify-between space-y-6">
                <div className="space-y-2">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-studio-muted block">
                    LOCATION
                  </span>
                  <p className="text-xs font-mono text-studio-black">
                    Beadon Rd, Royal Park Lahore
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-studio-muted block">
                    PRIMARY FOCUS
                  </span>
                  <p className="text-xs font-mono text-studio-black">
                    Home Improvement &bull; Wall Styling &bull; Interior Coordination
                  </p>
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-studio-black hover:text-studio-accent transition-colors pt-2"
                >
                  <span>Learn More About Hassan Interior</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. ARCHITECTURAL GRID (Unique Asymmetric 4-Block Composition)
          ========================================================================= */}
      <section className="py-20 lg:py-28 border-b border-studio-lightgray bg-studio-offwhite/50">
        <div className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-studio-lightgray gap-4">
            <div>
              <span className="arch-tag block mb-1">02 / ARCHITECTURAL COMPOSITION</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-studio-black">
                Pillars of Interior Practice
              </h2>
            </div>
            <p className="text-xs font-mono text-studio-muted max-w-xs">
              Explore our core areas of home-improvement and spatial enhancement.
            </p>
          </div>

          {/* Asymmetric 4-Block Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
            
            {/* Block 01: HOME IMPROVEMENT (Large Vertical Block, md:col-span-7) */}
            <Link
              to="/home-improvement"
              className="group md:col-span-7 flex flex-col bg-studio-white border border-studio-lightgray overflow-hidden p-6 sm:p-8 hover:border-studio-black transition-all duration-300 shadow-xs"
            >
              <div className="flex items-center justify-between pb-4 border-b border-studio-lightgray/60 font-mono text-xs">
                <span className="text-studio-accent tracking-widest font-bold">01</span>
                <span className="text-studio-muted tracking-widest uppercase">UPGRADE &amp; RESTORE</span>
                <ArrowUpRight className="w-4 h-4 text-studio-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>

              <div className="my-6 overflow-hidden aspect-[16/10] bg-studio-offwhite">
                <img
                  src={IMAGES.gridHomeImprovement}
                  alt="Home improvement architectural timber wall styling"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              <div className="mt-auto">
                <h3 className="text-xl sm:text-2xl font-serif text-studio-black mb-2 group-hover:text-studio-accent transition-colors">
                  Home Improvement
                </h3>
                <p className="text-xs sm:text-sm text-studio-muted leading-relaxed">
                  Refined wall panelling, surface treatments, and structural enhancements designed to revitalize interior character.
                </p>
              </div>
            </Link>

            {/* Block 02: INTERIOR SOLUTIONS (Compact Block, md:col-span-5) */}
            <Link
              to="/interior-solutions"
              className="group md:col-span-5 flex flex-col bg-studio-white border border-studio-lightgray overflow-hidden p-6 sm:p-8 hover:border-studio-black transition-all duration-300 shadow-xs"
            >
              <div className="flex items-center justify-between pb-4 border-b border-studio-lightgray/60 font-mono text-xs">
                <span className="text-studio-accent tracking-widest font-bold">02</span>
                <span className="text-studio-muted tracking-widest uppercase">SPATIAL HARMONY</span>
                <ArrowUpRight className="w-4 h-4 text-studio-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>

              <div className="my-6 overflow-hidden aspect-[4/3] bg-studio-offwhite">
                <img
                  src={IMAGES.gridInteriorSolutions}
                  alt="Interior solutions for cohesive modern living"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              <div className="mt-auto">
                <h3 className="text-xl sm:text-2xl font-serif text-studio-black mb-2 group-hover:text-studio-accent transition-colors">
                  Interior Solutions
                </h3>
                <p className="text-xs sm:text-sm text-studio-muted leading-relaxed">
                  Everyday spatial planning, furniture coordination, and balancing natural light with functional daily layouts.
                </p>
              </div>
            </Link>

            {/* Block 03: COLLECTIONS (Compact Block, md:col-span-5) */}
            <Link
              to="/collections"
              className="group md:col-span-5 flex flex-col bg-studio-white border border-studio-lightgray overflow-hidden p-6 sm:p-8 hover:border-studio-black transition-all duration-300 shadow-xs"
            >
              <div className="flex items-center justify-between pb-4 border-b border-studio-lightgray/60 font-mono text-xs">
                <span className="text-studio-accent tracking-widest font-bold">03</span>
                <span className="text-studio-muted tracking-widest uppercase">CATALOG &amp; EDITS</span>
                <ArrowUpRight className="w-4 h-4 text-studio-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>

              <div className="my-6 overflow-hidden aspect-[4/3] bg-studio-offwhite">
                <img
                  src={IMAGES.gridCollections}
                  alt="Curated interior collections and architectural pieces"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              <div className="mt-auto">
                <h3 className="text-xl sm:text-2xl font-serif text-studio-black mb-2 group-hover:text-studio-accent transition-colors">
                  Collections
                </h3>
                <p className="text-xs sm:text-sm text-studio-muted leading-relaxed">
                  Carefully chosen elements for living spaces, bedrooms, and room decor, regularly curated at our Lahore location.
                </p>
              </div>
            </Link>

            {/* Block 04: INSPIRATION (Large Horizontal Block, md:col-span-7) */}
            <Link
              to="/inspiration"
              className="group md:col-span-7 flex flex-col bg-studio-white border border-studio-lightgray overflow-hidden p-6 sm:p-8 hover:border-studio-black transition-all duration-300 shadow-xs"
            >
              <div className="flex items-center justify-between pb-4 border-b border-studio-lightgray/60 font-mono text-xs">
                <span className="text-studio-accent tracking-widest font-bold">04</span>
                <span className="text-studio-muted tracking-widest uppercase">EDITORIAL MOODS</span>
                <ArrowUpRight className="w-4 h-4 text-studio-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>

              <div className="my-6 overflow-hidden aspect-[16/10] bg-studio-offwhite">
                <img
                  src={IMAGES.gridInspiration}
                  alt="Inspiration concept board for minimal interior styling"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              <div className="mt-auto">
                <h3 className="text-xl sm:text-2xl font-serif text-studio-black mb-2 group-hover:text-studio-accent transition-colors">
                  Inspiration
                </h3>
                <p className="text-xs sm:text-sm text-studio-muted leading-relaxed">
                  Visual studies in materiality, warm neutral palettes, and architectural balance to guide your next project.
                </p>
              </div>
            </Link>

          </div>

        </div>
      </section>

      {/* =========================================================================
          4. FEATURED SPACE (Full-Width Editorial Section)
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-studio-black text-studio-white overflow-hidden border-b border-studio-lightgray">
        <div className="absolute inset-0 opacity-40">
          <img
            src={IMAGES.featuredSpace}
            alt="Full-width architectural interior showcase"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>

        {/* Ambient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-studio-black/90 via-studio-black/70 to-transparent" />

        <div className="relative max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <span className="font-mono text-xs tracking-[0.25em] text-studio-warmbeige uppercase block mb-4">
              EDITORIAL FOCUS &bull; 03
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal leading-tight text-studio-white mb-6">
              Make Space Feel Like Yours
            </h2>

            <p className="text-sm sm:text-base text-studio-white/80 leading-relaxed font-light mb-8 max-w-lg">
              A home should reflect clarity and calm. Hassan Interior works with textures, finishes, and clean lines to establish living spaces that feel authentic, balanced, and timeless.
            </p>

            <Link
              to="/interior-solutions"
              className="inline-flex items-center gap-3 px-7 py-4 bg-studio-white text-studio-black uppercase text-xs tracking-[0.18em] font-semibold hover:bg-studio-warmbeige transition-colors"
            >
              <span>Discover More</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. PROCESS (Architectural Stage Roadmap: From Idea to Interior)
          ========================================================================= */}
      <section className="py-24 sm:py-32 border-b border-studio-lightgray bg-studio-white">
        <div className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="max-w-2xl mb-16">
            <span className="arch-tag block mb-2">04 / METHODOLOGY</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-studio-black mb-4">
              From Idea to Interior
            </h2>
            <p className="text-sm text-studio-muted leading-relaxed">
              A structured, step-by-step approach ensuring clarity, aesthetic coherence, and quality execution for your home improvement needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Understand',
                desc: 'Listening to your lifestyle, spatial dimensions, and functional needs to define clear interior requirements.'
              },
              {
                step: '02',
                title: 'Plan',
                desc: 'Evaluating surfaces, materials, color palettes, and structural layouts suitable for your rooms.'
              },
              {
                step: '03',
                title: 'Style',
                desc: 'Introducing cohesive wall finishes, decorative elements, and lighting accents that enhance spatial character.'
              },
              {
                step: '04',
                title: 'Refine',
                desc: 'Perfecting details, proportions, and finishing touches to ensure a harmonious, elevated environment.'
              }
            ].map((item, idx) => (
              <div
                key={item.step}
                className="relative p-6 sm:p-8 bg-studio-offwhite/50 border border-studio-lightgray flex flex-col justify-between hover:border-studio-black transition-colors"
              >
                <div className="flex items-center justify-between pb-6 border-b border-studio-lightgray mb-6">
                  <span className="font-mono text-lg font-bold text-studio-black">
                    {item.step}
                  </span>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-studio-muted">
                    PHASE 0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl text-studio-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-studio-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-studio-lightgray/40 flex items-center justify-end">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-studio-accent">
                    Hassan Interior
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. CTA (Minimalist Black Section)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-studio-black text-studio-white">
        <div className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="font-mono text-xs tracking-[0.25em] text-studio-warmbeige uppercase block">
              GET IN TOUCH
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-studio-white font-normal">
              Ready to Refresh Your Space?
            </h2>

            <p className="text-sm sm:text-base text-studio-white/80 leading-relaxed font-light max-w-lg mx-auto">
              Connect with Hassan Interior to discuss your home-improvement and interior requirements.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-studio-white text-studio-black uppercase text-xs tracking-[0.18em] font-semibold hover:bg-studio-warmbeige transition-colors"
              >
                Contact Us
              </Link>

              <a
                href="tel:+923224045703"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/40 text-studio-white uppercase text-xs tracking-[0.18em] font-semibold hover:bg-white/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call +92 322 4045703</span>
              </a>
            </div>

            <div className="pt-8">
              <p className="font-mono text-xs text-white/50 tracking-wider">
                Store: Beadon Rd, Royal Park Lahore, 54000, Pakistan
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
