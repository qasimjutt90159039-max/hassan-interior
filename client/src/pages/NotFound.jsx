import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-studio-white flex items-center justify-center px-6 py-32">
      <SEO 
        title="Space Not Found" 
        description="The requested interior page was not found. Return to Hassan Interior home page."
      />
      
      <div className="max-w-md w-full text-center space-y-6 border border-studio-lightgray p-10 sm:p-12 bg-studio-offwhite/50">
        <div className="font-mono text-xs tracking-widest text-studio-accent uppercase font-bold">
          ERROR 404
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif text-studio-black font-normal">
          Space Not Found
        </h1>

        <p className="text-sm text-studio-muted leading-relaxed font-light">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>

        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-studio-black text-studio-white uppercase text-xs tracking-widest font-semibold hover:bg-studio-charcoal transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
