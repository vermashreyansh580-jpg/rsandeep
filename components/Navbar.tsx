'use client';

import React from 'react';
import { Phone, Instagram, Youtube, Images, MessageCircle, Crown, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenGallery: (cat?: string) => void;
  onOpenAdmin: () => void;
}

export default function Navbar({ onOpenGallery, onOpenAdmin }: NavbarProps) {
  const [clickCount, setClickCount] = React.useState(0);

  const handleLogoClick = () => {
    const next = clickCount + 1;
    if (next >= 5) {
      setClickCount(0);
      onOpenAdmin();
    } else {
      setClickCount(next);
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-brand-darkCard/95 border-b border-brand-borderDark/80 py-2.5 px-4 sm:px-8 text-xs text-brand-muted flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="flex items-center gap-1.5 text-brand-goldLight">
            <Crown className="w-3.5 h-3.5 text-brand-gold" />
            <span className="font-cinzel tracking-wider font-semibold">A Complete Wedding Solution</span>
          </span>
          <span className="hidden md:inline text-brand-borderDark">|</span>
          <span className="hidden md:flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-brand-gold" /> Golghar Gorakhpur & Siswa Bazar Maharajganj
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a href="tel:+919415362280" className="hover:text-brand-gold transition-colors flex items-center gap-1 font-semibold">
            <Phone className="w-3 h-3 text-brand-gold" /> +91 9415362280
          </a>
          <a
            href="https://www.instagram.com/rsandeepphotography"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-gold transition-colors flex items-center gap-1"
            title="10K Followers on Instagram"
          >
            <Instagram className="w-3.5 h-3.5 text-brand-gold" /> <span className="hidden sm:inline">10K</span>
          </a>
          <a
            href="https://www.youtube.com/@rsandeepphotography9661"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-gold transition-colors flex items-center gap-1"
            title="187+ Films on YouTube"
          >
            <Youtube className="w-3.5 h-3.5 text-red-500" /> <span className="hidden sm:inline">YouTube 4K</span>
          </a>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 bg-brand-charcoal/90 backdrop-blur-xl border-b border-brand-borderDark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          
          {/* Logo with 5-Click Secret Admin Trigger */}
          <div
            onClick={handleLogoClick}
            className="flex items-center gap-3 cursor-pointer select-none"
            title="R Sandeep Photography (Click 5 times for Admin)"
          >
            <div className="w-11 h-11 rounded-full border border-brand-gold flex items-center justify-center bg-brand-darkCard text-brand-gold font-cinzel font-bold text-lg shadow-lg">
              RS
            </div>
            <div>
              <span className="font-cinzel text-lg sm:text-xl font-bold tracking-[0.2em] text-white block leading-none">
                R SANDEEP
              </span>
              <span className="font-cinzel text-[9px] tracking-[0.35em] text-brand-gold uppercase block mt-1 font-medium">
                PHOTOGRAPHY & CINEMA
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-cinzel tracking-[0.2em] uppercase font-medium text-brand-ivory/80">
            <a href="#home" className="hover:text-brand-gold transition-colors">Home</a>
            <a href="#gallery" className="hover:text-brand-gold transition-colors">Portfolios</a>
            <a href="#films" className="hover:text-brand-gold transition-colors">4K Cinema</a>
            <a href="#pricing" className="hover:text-brand-gold transition-colors">Rate Card</a>
            <a href="#dresses" className="hover:text-brand-gold transition-colors">Wardrobe</a>
            <a href="#about" className="hover:text-brand-gold transition-colors">About Sandeep</a>
            <a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a>
          </nav>

          {/* Right CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenGallery('ALL')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-brand-gold/60 text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal text-xs font-cinzel tracking-wider uppercase font-bold rounded-sm transition-all duration-300"
            >
              <Images className="w-3.5 h-3.5" /> Full Gallery
            </button>

            <a
              href="https://wa.me/919415362280?text=Hi%20Sandeep%20Ji,%20I'd%20like%20to%20reserve%20dates%20for%20our%20wedding%20coverage"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-brand-gold text-brand-charcoal hover:bg-brand-goldHover text-xs font-cinzel tracking-[0.15em] uppercase font-extrabold rounded-sm shadow-xl flex items-center gap-2 transition-transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-brand-charcoal" /> VIP BOOK
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
