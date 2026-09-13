import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, RefreshCw, AlertCircle, Sparkles, FolderOpen } from 'lucide-react';
import SEO from '../components/SEO';

const categories = [
  'All',
  'Living Room',
  'Bedroom',
  'Interior Decor',
  'Home Improvement'
];

export default function Collections() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchCollections = async (category = 'All') => {
    setLoading(true);
    setError(null);
    try {
      const url = category === 'All' ? '/api/collections' : `/api/collections?category=${encodeURIComponent(category)}`;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Server returned status ${res.status}`);
      }
      const data = await res.json();
      setCollections(Array.isArray(data.data) ? data.data : []);
    } catch (err) {
      console.warn('Could not load collections:', err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCollections(activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-studio-white pt-24 sm:pt-28 pb-20">
      <SEO 
        title="Collections" 
        description="Explore interior collections, living room styling, bedroom aesthetics, and decorative enhancements from Hassan Interior Lahore."
      />

      {/* Page Header */}
      <section className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 py-10 lg:py-16 border-b border-studio-lightgray">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6">
          <div className="max-w-2xl">
            <span className="arch-tag block mb-2">CATALOG &bull; 04</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-studio-black font-normal leading-[1.15]">
              Curated Collections
            </h1>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-studio-muted max-w-sm">
            Living Room &bull; Bedroom &bull; Interior Decor &bull; Home Improvement
          </p>
        </div>

        {/* Category Navigation Bar */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.14em] font-medium border transition-all ${
                activeCategory === cat
                  ? 'bg-studio-black text-studio-white border-studio-black shadow-xs'
                  : 'bg-studio-white text-studio-muted border-studio-lightgray hover:text-studio-black hover:border-studio-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 py-16">
        
        {/* Loading State: Architectural Skeletons */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="border border-studio-lightgray p-6 space-y-4 animate-pulse">
                <div className="aspect-[4/3] bg-studio-offwhite" />
                <div className="h-4 bg-studio-lightgray/60 w-3/4" />
                <div className="h-3 bg-studio-lightgray/40 w-1/2" />
                <div className="h-10 bg-studio-offwhite w-full" />
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="max-w-xl mx-auto text-center p-10 border border-studio-lightgray bg-studio-offwhite/50 space-y-4">
            <AlertCircle className="w-8 h-8 text-studio-muted mx-auto" />
            <h3 className="font-serif text-xl text-studio-black">
              Unable to load collections catalog
            </h3>
            <p className="text-xs text-studio-muted font-mono">
              {error}. Please check your connection or try again.
            </p>
            <button
              onClick={() => fetchCollections(activeCategory)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-studio-black text-studio-white text-xs uppercase tracking-widest font-mono hover:bg-studio-charcoal transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retry</span>
            </button>
          </div>
        )}

        {/* Empty State: Required exact phrase: "Collections will be updated soon." */}
        {!loading && !error && collections.length === 0 && (
          <div className="py-20 lg:py-28 text-center max-w-2xl mx-auto border border-studio-lightgray bg-studio-offwhite/40 p-8 sm:p-14">
            <div className="w-12 h-12 mx-auto mb-6 border border-studio-lightgray flex items-center justify-center bg-studio-white">
              <FolderOpen className="w-6 h-6 text-studio-muted" />
            </div>

            <span className="font-mono text-xs tracking-widest uppercase text-studio-accent block mb-2">
              CATALOG NOTICE
            </span>

            <h2 className="text-2xl sm:text-3xl font-serif text-studio-black mb-4">
              Collections will be updated soon.
            </h2>

            <p className="text-xs sm:text-sm text-studio-muted leading-relaxed font-light mb-8 max-w-md mx-auto">
              Our latest curated selection of interior styling and home improvement elements is currently being prepared. To inquire about present in-store availability at our Beadon Rd store, please contact us directly.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-studio-black text-studio-white uppercase text-xs tracking-widest font-semibold hover:bg-studio-charcoal transition-colors"
              >
                Inquire With Store
              </Link>
              <a
                href="tel:+923224045703"
                className="inline-flex items-center gap-2 px-6 py-3 border border-studio-black text-studio-black uppercase text-xs tracking-widest font-semibold hover:bg-studio-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call +92 322 4045703</span>
              </a>
            </div>
          </div>
        )}

        {/* Populated Catalog State (when real items are added via backend API) */}
        {!loading && !error && collections.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((item) => (
              <div
                key={item._id}
                className="group border border-studio-lightgray bg-studio-white p-6 flex flex-col justify-between hover:border-studio-black transition-all cursor-pointer"
                onClick={() => setSelectedProduct(item)}
              >
                <div>
                  <div className="aspect-[4/3] overflow-hidden bg-studio-offwhite mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-studio-accent block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg text-studio-black">
                    {item.name}
                  </h3>
                  {item.description && (
                    <p className="text-xs text-studio-muted mt-2 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-studio-lightgray flex items-center justify-between text-xs font-mono">
                  <span className="text-studio-muted uppercase tracking-wider">Hassan Interior</span>
                  <span className="text-studio-black group-hover:text-studio-accent font-semibold flex items-center gap-1">
                    View Details &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </section>

      {/* Selected Product Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-studio-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="max-w-2xl w-full bg-studio-white border border-studio-lightgray p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[16/10] overflow-hidden bg-studio-offwhite border border-studio-lightgray">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="font-mono text-xs text-studio-accent uppercase tracking-widest block mb-1">
                {selectedProduct.category}
              </span>
              <h3 className="font-serif text-2xl text-studio-black">
                {selectedProduct.name}
              </h3>
              {selectedProduct.description && (
                <p className="text-sm text-studio-muted mt-3 leading-relaxed">
                  {selectedProduct.description}
                </p>
              )}
            </div>

            <div className="pt-4 border-t border-studio-lightgray flex items-center justify-between">
              <a
                href="tel:+923224045703"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-studio-black text-studio-white uppercase text-xs tracking-widest font-semibold hover:bg-studio-charcoal"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Store to Inquire</span>
              </a>
              <button
                onClick={() => setSelectedProduct(null)}
                className="px-5 py-2.5 border border-studio-lightgray text-xs uppercase tracking-widest font-mono hover:bg-studio-offwhite"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
