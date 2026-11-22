'use client';

import React from 'react';
import { Camera, Film, Crown, Check, Sparkles, MessageCircle } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-brand-charcoal border-b border-brand-borderDark relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold font-cinzel tracking-[0.35em] uppercase text-xs font-semibold block mb-2">
            INVESTMENT & COLLECTIONS
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-light text-white">
            Transparent Wedding Packages
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto mt-4 mb-5" />
          <p className="text-sm text-brand-muted">
            Clear crew sizes, Italian & leather albums, and 4K cinema films with zero hidden fees.
          </p>
        </div>

        {/* 3-Tier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Tier 1: Silver Package */}
          <div className="bg-brand-darkCard border border-brand-borderDark rounded-xl p-8 flex flex-col justify-between gold-shimmer-border">
            <div>
              <span className="text-xs font-cinzel tracking-[0.25em] text-brand-muted uppercase font-bold block mb-2">
                TIER 1 (SILVER)
              </span>
              <h3 className="font-serif text-2xl text-white font-medium mb-2">
                Silver Wedding Heritage
              </h3>
              <div className="font-serif text-3xl text-brand-goldLight font-bold mb-4">
                ₹45,000 <span className="text-xs font-sans text-brand-muted font-normal">/ 1-2 Events</span>
              </div>
              
              <div className="flex items-center text-xs font-semibold text-brand-ivory mb-6 pb-4 border-b border-brand-borderDark">
                <Camera className="w-4 h-4 text-brand-gold mr-2" />
                <span>2 Senior Crew: 1 Trad Photo + 1 Trad Video</span>
              </div>

              <ul className="space-y-3 text-xs text-brand-muted mb-8 font-sans">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" /> Full traditional ceremony coverage.
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" /> Full-length traditional documentary video.
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" /> High-resolution edited photo gallery.
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" /> 1 Premium Photobook Album (25 Sheets / 50 Pages).
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/919415362280?text=Hi%20Sandeep%20Ji,%20I'm%20interested%20in%20the%20Silver%20Wedding%20Package%20(Rs%2045,000)"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal font-cinzel text-xs tracking-[0.2em] font-bold uppercase transition-colors text-center rounded-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" /> RESERVE SILVER DATE
            </a>
          </div>

          {/* Tier 2: Gold Package */}
          <div className="bg-brand-darkCard border border-brand-borderDark rounded-xl p-8 flex flex-col justify-between gold-shimmer-border">
            <div>
              <span className="text-xs font-cinzel tracking-[0.25em] text-brand-gold uppercase font-bold block mb-2">
                TIER 2 (GOLD)
              </span>
              <h3 className="font-serif text-2xl text-white font-medium mb-2">
                Gold Candid & Highlights
              </h3>
              <div className="font-serif text-3xl text-brand-goldLight font-bold mb-4">
                ₹65,000 <span className="text-xs font-sans text-brand-muted font-normal">/ 2 Events</span>
              </div>
              
              <div className="flex items-center text-xs font-semibold text-brand-ivory mb-6 pb-4 border-b border-brand-borderDark">
                <Film className="w-4 h-4 text-brand-gold mr-2" />
                <span>3 Senior Crew: 1 Candid Photo + 1 Trad Photo + 1 Video</span>
              </div>

              <ul className="space-y-3 text-xs text-brand-muted mb-8 font-sans">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" /> Fine-art candid photography + traditional coverage.
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" /> 60-Second Trending Instagram Highlight Reel.
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" /> Full-length wedding film with color grading.
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" /> 1 Master Leather Album (30 Sheets / 60 Pages).
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/919415362280?text=Hi%20Sandeep%20Ji,%20I'm%20interested%20in%20the%20Gold%20Wedding%20Package%20(Rs%2065,000)"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal font-cinzel text-xs tracking-[0.2em] font-bold uppercase transition-colors text-center rounded-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" /> RESERVE GOLD DATE
            </a>
          </div>

          {/* Tier 3: Diamond Package (Featured Poster Package) */}
          <div className="bg-brand-darkCard/95 border-2 border-brand-gold rounded-xl p-8 flex flex-col justify-between shadow-2xl relative gold-shimmer-border">
            <span className="absolute -top-3.5 right-6 bg-brand-gold text-brand-charcoal font-cinzel text-[9px] tracking-widest font-extrabold uppercase px-3 py-1 rounded-full">
              SIGNATURE CHOICE (2 DAYS)
            </span>
            <div>
              <span className="text-xs font-cinzel tracking-[0.25em] text-brand-gold uppercase font-bold block mb-2">
                TIER 3 (DIAMOND ROYALTY)
              </span>
              <h3 className="font-serif text-2xl text-white font-medium mb-2">
                Diamond Wedding Cinema
              </h3>
              <div className="font-serif text-4xl text-brand-goldLight font-bold mb-4">
                ₹91,000 <span className="text-xs font-sans text-brand-muted font-normal">/ 2 Days Function Cover</span>
              </div>
              
              <div className="flex items-center text-xs font-semibold text-brand-ivory mb-6 pb-4 border-b border-brand-borderDark">
                <Crown className="w-4 h-4 text-brand-gold mr-2" />
                <span>5-Member Master Crew + Aerial Drone Videography</span>
              </div>

              <ul className="space-y-3 text-xs text-brand-muted mb-6 font-sans">
                <li className="flex items-start">
                  <Sparkles className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" /> 1 Premium Handcrafted Leather Master Album.
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" /> 1 Cinematic 4K Highlight Film.
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" /> 1 Full-Length Feature Wedding Film.
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" /> 3 Trending Instagram 4K Reels.
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" /> 1 Luxury Photo Wall Frame + Complete RAW Data.
                </li>
              </ul>

              <div className="p-3 bg-brand-gold/10 border border-brand-gold/30 rounded text-xs text-brand-goldLight mb-6 font-sans">
                👑 <strong>TEAM INCLUDE:</strong> Cinematography + Candid Photography + Traditional Videography + Traditional Photography + Drone Aerial Videography.
              </div>
            </div>

            <a
              href="https://wa.me/919415362280?text=Hi%20Sandeep%20Ji,%20I'm%20interested%20in%20the%20Diamond%20Wedding%20Package%20(Rs%2091,000)"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-brand-gold text-brand-charcoal hover:bg-brand-goldHover font-cinzel text-xs tracking-[0.2em] font-extrabold uppercase transition-colors text-center rounded-sm shadow-xl flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-brand-charcoal" /> RESERVE DIAMOND DATE
            </a>
          </div>

        </div>

        {/* Maternity Shoot Special Offer Banner */}
        <div className="bg-gradient-to-r from-brand-darkCard via-brand-charcoal to-brand-darkCard border border-brand-gold/50 rounded-2xl p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="text-xs font-cinzel tracking-widest text-brand-gold uppercase font-bold block mb-1">
              EXCLUSIVE STUDIO OFFER
            </span>
            <h3 className="font-serif text-3xl text-white font-medium mb-2">
              Maternity Shoot Special — ₹6,500 Only
            </h3>
            <p className="text-xs text-brand-muted max-w-xl font-sans leading-relaxed">
              Includes 2 Hours dedicated creative photoshoot with props, 1 luxury designer gown/dress included from studio wardrobe, and full color-corrected high-resolution master images.
            </p>
          </div>
          <a
            href="https://wa.me/919415362280?text=Hi%20Sandeep%20Ji,%20I'm%20interested%20in%20the%20Maternity%20Shoot%20Package%20(Rs%206,500)"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-brand-gold text-brand-charcoal hover:bg-brand-goldHover font-cinzel text-xs tracking-wider uppercase font-extrabold rounded-sm whitespace-nowrap shadow-xl flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-brand-charcoal" /> BOOK MATERNITY SHOOT
          </a>
        </div>

      </div>
    </section>
  );
}
