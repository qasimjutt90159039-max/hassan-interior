import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ExternalLink, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Beadon Rd, Royal Park Lahore, 54000, Pakistan");

  return (
    <footer className="bg-studio-white border-t border-studio-lightgray text-studio-charcoal">
      <div className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-20">
        
        {/* Top Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-studio-lightgray">
          
          {/* Col 1: Brand & Category (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-mono text-[10px] tracking-[0.25em] text-studio-muted uppercase block mb-1">
                STUDIO EST. LAHORE
              </span>
              <h2 className="font-architectural text-xl sm:text-2xl tracking-[0.2em] font-semibold text-studio-black uppercase">
                Hassan Interior
              </h2>
              <p className="font-mono text-xs tracking-widest text-studio-muted uppercase mt-1">
                Home Improvement Store
              </p>
            </div>

            <p className="text-sm text-studio-muted max-w-sm leading-relaxed pt-2">
              Thoughtful home-improvement, surface enhancement, and interior styling solutions designed to elevate modern living spaces.
            </p>

            <div className="pt-2">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs tracking-wider uppercase font-mono text-studio-charcoal hover:text-studio-black underline underline-offset-4"
              >
                <span>View Store on Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-mono text-xs tracking-[0.2em] text-studio-black uppercase font-semibold">
              Directory
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Home Improvement', path: '/home-improvement' },
                { name: 'Interior Solutions', path: '/interior-solutions' },
                { name: 'Collections', path: '/collections' },
                { name: 'Inspiration', path: '/inspiration' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-xs uppercase tracking-wider text-studio-muted hover:text-studio-black hover-editorial-line transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Address (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-mono text-xs tracking-[0.2em] text-studio-black uppercase font-semibold">
              Location & Phone
            </h3>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-studio-black flex-shrink-0 mt-0.5" />
                <address className="not-italic text-studio-muted leading-relaxed">
                  Beadon Rd,<br />
                  Royal Park Lahore,<br />
                  54000,<br />
                  Pakistan
                </address>
              </div>

              <div className="flex items-center gap-2.5 pt-2">
                <Phone className="w-4 h-4 text-studio-black flex-shrink-0" />
                <a
                  href="tel:+923224045703"
                  className="font-mono text-xs tracking-wider text-studio-black hover:text-studio-accent font-medium transition-colors"
                >
                  +92 322 4045703
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Official Social (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-mono text-xs tracking-[0.2em] text-studio-black uppercase font-semibold">
              Official Page
            </h3>
            <p className="text-xs text-studio-muted leading-relaxed">
              Follow our official business page on Facebook for updates.
            </p>
            <div>
              <a
                href="https://facebook.com/texturez.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 border border-studio-lightgray text-xs uppercase tracking-wider text-studio-black hover:border-studio-black hover:bg-studio-offwhite transition-colors"
                aria-label="Visit Hassan Interior Facebook Page"
              >
                <span>Facebook</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Architectural Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-studio-muted">
          <div>
            &copy; {currentYear} HASSAN INTERIOR. ALL RIGHTS RESERVED.
          </div>
          <div className="tracking-widest uppercase text-[11px]">
            MINIMAL ARCHITECTURAL INTERIOR STUDIO &mdash; LAHORE
          </div>
        </div>

      </div>
    </footer>
  );
}
