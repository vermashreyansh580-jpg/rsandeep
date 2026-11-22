'use client';

import React from 'react';
import { Phone, Instagram, Youtube, MessageCircle, MapPin, Mail } from 'lucide-react';

interface FooterProps {
  onOpenAdmin: () => void;
}

export default function Footer({ onOpenAdmin }: FooterProps) {
  return (
    <footer className="bg-brand-charcoal text-brand-muted py-16 border-t border-brand-borderDark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-brand-gold flex items-center justify-center bg-brand-darkCard text-brand-gold font-cinzel font-bold">
              RS
            </div>
            <div>
              <span className="font-cinzel text-lg font-bold tracking-widest text-white block">
                R SANDEEP
              </span>
              <span className="font-cinzel text-[8px] tracking-[0.3em] text-brand-gold uppercase block">
                PHOTOGRAPHY & CINEMA
              </span>
            </div>
          </div>
          <p className="text-xs font-sans leading-relaxed">
            A Complete Wedding Solution. Dedicated to ultra-luxury candid cinematography, fine-art editorial portraiture, and destination weddings across Uttar Pradesh and all India.
          </p>
          <div className="flex items-center gap-4 text-brand-gold pt-2">
            <a
              href="https://www.instagram.com/rsandeepphotography"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-goldLight transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@rsandeepphotography9661"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-goldLight transition-colors"
            >
              <Youtube className="w-5 h-5 text-red-500" />
            </a>
            <a
              href="https://wa.me/919415362280"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-goldLight transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Studio 1: Gorakhpur Head Office */}
        <div className="space-y-3">
          <h4 className="font-cinzel text-xs tracking-widest text-brand-gold uppercase font-bold flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" /> GORAKHPUR STUDIO (HEAD OFFICE)
          </h4>
          <p className="text-xs font-sans leading-relaxed text-brand-ivory">
            Shop No. 3, Pratap Market near Ganesh Chowk, Golghar, Gorakhpur, Uttar Pradesh 273001
          </p>
          <p className="text-xs font-sans space-y-1">
            <span className="block"><strong className="text-brand-gold">Call / WhatsApp:</strong> +91 9415362280</span>
            <span className="block"><strong className="text-brand-gold">Alternate:</strong> +91 9936814197</span>
          </p>
        </div>

        {/* Studio 2: Maharajganj Branch */}
        <div className="space-y-3">
          <h4 className="font-cinzel text-xs tracking-widest text-brand-gold uppercase font-bold flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" /> MAHARAJGANJ BRANCH OFFICE
          </h4>
          <p className="text-xs font-sans leading-relaxed text-brand-ivory">
            Siswa Bazar, Bijapur near Sugar Factory, Maharajganj, Uttar Pradesh 273163
          </p>
          <p className="text-xs font-sans space-y-1">
            <span className="block"><strong className="text-brand-gold">Call / WhatsApp:</strong> +91 95513561713</span>
            <span className="block"><strong className="text-brand-gold">Email:</strong> rsandeepphotography@gmail.com</span>
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 pt-6 border-t border-brand-borderDark/50 flex flex-wrap items-center justify-between gap-4 text-xs">
        <p>&copy; 2026 R Sandeep Photography. All Rights Reserved.</p>
        <div className="flex items-center gap-6">
          <a href="/llms.txt" target="_blank" className="text-brand-gold hover:underline">
            LLMs.txt (AI Knowledge Base)
          </a>
          <a href="/sitemap.xml" target="_blank" className="text-brand-gold hover:underline">
            Sitemap
          </a>
          <button
            onClick={onOpenAdmin}
            className="cursor-pointer text-brand-muted hover:text-brand-gold transition-colors"
          >
            Admin CMS
          </button>
        </div>
      </div>
    </footer>
  );
}
