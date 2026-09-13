import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import HomeImprovement from './pages/HomeImprovement';
import InteriorSolutions from './pages/InteriorSolutions';
import Collections from './pages/Collections';
import Inspiration from './pages/Inspiration';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-studio-white text-studio-charcoal">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/home-improvement" element={<HomeImprovement />} />
          <Route path="/interior-solutions" element={<InteriorSolutions />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
