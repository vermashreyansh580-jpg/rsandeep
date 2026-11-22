'use client';

import React from 'react';
import { Phone, Instagram, Youtube, Images, MessageCircle, Crown } from 'lucide-react';

interface NavbarProps {
  onOpenGallery: (cat?: string) => void;
}

export default function Navbar({ onOpenGallery }: NavbarProps) {
  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-brand-darkCard/95 border-b border-brand-borderDark/80 py-2 px-4 sm:px-8 text-xs text-brand-muted flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Crown className="w-3.5 h-3.5 text-brand-gold" />
          <span className="font-cinzel tracking-wider font-semibold text-brand-goldLight">
            R Sandeep Photography — A Complete Wedding Solution
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
            <Youtube className="w-3.5 h-3.5 text-red-500" /> <span className="hidden sm:inline">YouTube Cinema</span>
          </a>
        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <header className="sticky top-0 z-40 bg-brand-charcoal/90 backdrop-blur-md border-b border-brand-borderDark/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a
            href="#home"
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-11 h-11 rounded-full border border-brand-gold/60 flex items-center justify-center bg-brand-darkCard text-brand-gold font-cinzel font-bold text-lg shadow-lg group-hover:border-brand-gold transition-colors">
              RS
            </div>
            <div>
              <span className="font-cinzel text-xl tracking-[0.2em] font-bold text-white block group-hover:text-brand-gold transition-colors">
                R SANDEEP
              </span>
              <span className="font-cinzel text-[9px] tracking-[0.35em] text-brand-gold uppercase block">
                PHOTOGRAPHY & CINEMA
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-cinzel tracking-[0.2em] uppercase font-medium text-brand-ivory/80">
            <a href="#home" className="hover:text-brand-gold transition-colors">Home</a>
            <a href="#gallery" className="hover:text-brand-gold transition-colors">Portfolios</a>
            <a href="#films" className="hover:text-brand-gold transition-colors">Cinema Films</a>
            <a href="#pricing" className="hover:text-brand-gold transition-colors">Rate Card</a>
            <a href="#dresses" className="hover:text-brand-gold transition-colors">Wardrobe</a>
            <a href="#about" className="hover:text-brand-gold transition-colors">About Sandeep</a>
            <a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenGallery('ALL')}
              className="hidden sm:flex items-center gap-2 px-4 py-2 border border-brand-gold/50 rounded-sm text-brand-gold text-xs font-cinzel tracking-wider hover:bg-brand-gold hover:text-brand-charcoal transition-colors uppercase"
            >
              <Images className="w-3.5 h-3.5" /> Full Gallery
            </button>

            <a
              href="https://wa.me/919415362280?text=Hi%20Sandeep%20Ji,%20I%20am%20inquiring%20about%20wedding%20photography%20dates."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-brand-gold text-brand-charcoal hover:bg-brand-goldHover font-cinzel text-xs tracking-wider uppercase font-bold rounded-sm shadow-lg transition-transform hover:scale-105"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-brand-charcoal" /> Book Dates
            </a>
          </div>

        </div>
      </header>
    </>
  );
}