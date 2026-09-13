import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ item, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-studio-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10"
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-2 text-studio-white/80 hover:text-studio-white bg-studio-charcoal/50 hover:bg-studio-charcoal rounded-none border border-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-white"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-2.5 text-studio-white/80 hover:text-studio-white bg-studio-charcoal/50 hover:bg-studio-charcoal border border-white/10 transition-colors focus:outline-none"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-2.5 text-studio-white/80 hover:text-studio-white bg-studio-charcoal/50 hover:bg-studio-charcoal border border-white/10 transition-colors focus:outline-none"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Modal Content */}
      <div
        className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[75vh] w-auto overflow-hidden shadow-2xl border border-white/10 bg-studio-charcoal">
          <img
            src={item.url}
            alt={item.alt || item.title}
            className="max-h-[75vh] max-w-full w-auto object-contain"
          />
        </div>

        {/* Caption bar */}
        <div className="w-full max-w-2xl mt-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-2 text-studio-white/90">
          <div>
            <span className="font-mono text-[10px] tracking-widest uppercase text-studio-warmbeige block">
              {item.category}
            </span>
            <h4 className="font-serif text-base sm:text-lg text-studio-white">
              {item.title}
            </h4>
          </div>
          <p className="text-xs text-white/60 font-mono tracking-wider">
            Concept Inspiration
          </p>
        </div>
      </div>
    </div>
  );
}
