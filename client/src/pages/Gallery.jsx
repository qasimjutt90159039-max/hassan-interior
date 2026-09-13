import React, { useState } from 'react';
import { Eye, Info, Filter } from 'lucide-react';
import { IMAGES } from '../data/images';
import Lightbox from '../components/Lightbox';
import SEO from '../components/SEO';

const filterCategories = [
  'All',
  'Interiors',
  'Furniture',
  'Home Improvement',
  'Details'
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const filteredItems = IMAGES.gallery.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.category.toLowerCase() === activeFilter.toLowerCase();
  });

  const handleOpenLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handlePrev = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
    }
  };

  const handleNext = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <div className="min-h-screen bg-studio-white pt-24 sm:pt-28 pb-20">
      <SEO 
        title="Architectural Gallery" 
        description="Explore our architectural gallery of interiors, furniture styling, home improvement finishes, and detail crops by Hassan Interior Lahore."
      />

      {/* Header */}
      <section className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 py-10 lg:py-16 border-b border-studio-lightgray">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6">
          <div className="max-w-2xl">
            <span className="arch-tag block mb-2">PORTFOLIO &bull; 06</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-studio-black font-normal leading-[1.15]">
              Architectural Gallery
            </h1>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-studio-muted max-w-sm">
            Curated studies in proportion, material finishes, and room coordination.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-8">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                setActiveLightboxIndex(null);
              }}
              className={`px-4 py-2 text-xs uppercase tracking-[0.14em] font-medium border transition-all ${
                activeFilter === cat
                  ? 'bg-studio-black text-studio-white border-studio-black shadow-xs'
                  : 'bg-studio-white text-studio-muted border-studio-lightgray hover:text-studio-black hover:border-studio-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Conceptual Transparency Notice */}
        <div className="mt-8 p-4 bg-studio-offwhite border border-studio-lightgray flex items-start gap-3 text-xs text-studio-muted">
          <Info className="w-4 h-4 text-studio-accent mt-0.5 flex-shrink-0" />
          <p className="leading-relaxed">
            <strong className="text-studio-black font-mono">Concept Imagery Notice:</strong> This architectural gallery demonstrates spatial inspirations, surface possibilities, and design aesthetics for home improvement direction.
          </p>
        </div>
      </section>

      {/* Asymmetric Masonry-Style Grid */}
      <section className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => {
            // Determine dynamic sizing for varied masonry feel
            const isWide = item.aspect === 'wide';
            const isVertical = item.aspect === 'vertical';

            return (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(index)}
                className={`group relative overflow-hidden bg-studio-offwhite border border-studio-lightgray cursor-pointer transition-all duration-300 hover:border-studio-black ${
                  isWide ? 'sm:col-span-2' : ''
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    isVertical
                      ? 'aspect-[3/4]'
                      : isWide
                      ? 'aspect-[16/9]'
                      : 'aspect-[4/3]'
                  }`}
                >
                  <img
                    src={item.url}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-studio-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-studio-white">
                    <div className="text-center space-y-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="font-mono text-[10px] tracking-widest uppercase text-studio-warmbeige block">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-lg text-studio-white">
                        {item.title}
                      </h3>
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider pt-2 text-white/90">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Full</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom card caption */}
                <div className="p-4 bg-studio-white border-t border-studio-lightgray flex items-center justify-between font-mono text-xs">
                  <span className="text-studio-muted uppercase tracking-wider text-[11px]">
                    {item.category}
                  </span>
                  <span className="text-studio-black font-medium text-[11px] truncate max-w-[200px]">
                    {item.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="py-20 text-center text-studio-muted font-mono text-sm">
            No images found in this category.
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <Lightbox
          item={filteredItems[activeLightboxIndex]}
          onClose={handleCloseLightbox}
          onPrev={filteredItems.length > 1 ? handlePrev : undefined}
          onNext={filteredItems.length > 1 ? handleNext : undefined}
        />
      )}

    </div>
  );
}
