'use client';

import React from 'react';
import { Camera, Film, Crown, Check, Sparkles, MessageCircle, Gift, HardDrive, Video, Image as ImageIcon } from 'lucide-react';

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
            Crystal-clear pricing, guaranteed deliverables, and master cinematography with zero hidden fees.
          </p>
        </div>

        {/* Guaranteed In All Wedding Packages Banner */}
        <div className="bg-brand-darkCard/90 border border-brand-gold/40 rounded-xl p-5 mb-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-gold/15 border border-brand-gold/40 flex items-center justify-center shrink-0">
                <Gift className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <h4 className="font-cinzel text-sm sm:text-base text-brand-gold font-bold uppercase tracking-wider">
                  Guaranteed Deliverables In All 3 Wedding Packages
                </h4>
                <p className="text-xs text-brand-muted">
                  Har wedding package me ye 5 essential deliverables 100% included hain:
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-brand-ivory font-medium">
              <span className="bg-brand-charcoal px-3 py-1.5 rounded border border-brand-borderDark flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5 text-brand-gold" /> Sheet's Standard Album
              </span>
              <span className="bg-brand-charcoal px-3 py-1.5 rounded border border-brand-borderDark flex items-center gap-1.5">
                <Video className="w-3.5 h-3.5 text-brand-gold" /> 1 Complete Rasham Edited Video
              </span>
              <span className="bg-brand-charcoal px-3 py-1.5 rounded border border-brand-borderDark flex items-center gap-1.5">
                <HardDrive className="w-3.5 h-3.5 text-brand-gold" /> 1 High-Speed Pen Drive
              </span>
              <span className="bg-brand-charcoal px-3 py-1.5 rounded border border-brand-borderDark flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5 text-brand-gold" /> 1 Traditional Highlight
              </span>
              <span className="bg-brand-charcoal px-3 py-1.5 rounded border border-brand-borderDark flex items-center gap-1.5">
                <Gift className="w-3.5 h-3.5 text-brand-gold" /> 1 Family Photo Frame
              </span>
            </div>
          </div>
        </div>

        {/* 3-Tier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Tier 1: Silver Package (₹51,000) */}
          <div className="bg-brand-darkCard border border-brand-borderDark rounded-xl p-8 flex flex-col justify-between gold-shimmer-border">
            <div>
              <span className="text-xs font-cinzel tracking-[0.25em] text-brand-muted uppercase font-bold block mb-2">
                TIER 1 (SILVER)
              </span>
              <h3 className="font-serif text-2xl text-white font-medium mb-1">
                Silver Traditional
              </h3>
              <p className="text-xs text-brand-gold font-cinzel tracking-wider uppercase mb-3">
                Traditional Photography & Videography
              </p>
              <div className="font-serif text-3xl text-brand-goldLight font-bold mb-4">
                ₹51,000 <span className="text-xs font-sans text-brand-muted font-normal">/ Complete Functions</span>
              </div>
              
              <div className="flex items-center text-xs font-semibold text-brand-ivory mb-6 pb-4 border-b border-brand-borderDark">
                <Camera className="w-4 h-4 text-brand-gold mr-2 shrink-0" />
                <span>Traditional Photography + Traditional Videography</span>
              </div>

              <ul className="space-y-3 text-xs text-brand-muted mb-8 font-sans">
                <li className="flex items-start text-brand-ivory font-medium">
                  <Check className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" />
                  <span><strong>Only Traditional Photography & Videography</strong> ceremony coverage.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" />
                  <span><strong>Sheet's Standard Album</strong> (Premium print finish).</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" />
                  <span><strong>1 Complete Rasham Edited Videos</strong> (Full-length documentary).</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" />
                  <span><strong>1 High-Speed Pen Drive</strong> with all final edited files.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" />
                  <span><strong>1 Traditional Highlight</strong> film.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" />
                  <span><strong>1 Luxury Family Photo Frame</strong> for wall showcase.</span>
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/919415362280?text=Hi%20Sandeep%20Ji,%20I'm%20interested%20in%20the%20Silver%20Wedding%20Package%20(Rs%2051,000)"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal font-cinzel text-xs tracking-[0.2em] font-bold uppercase transition-colors text-center rounded-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" /> RESERVE SILVER (₹51,000)
            </a>
          </div>

          {/* Tier 2: Gold Package (₹91,000) */}
          <div className="bg-brand-darkCard border border-brand-borderDark rounded-xl p-8 flex flex-col justify-between gold-shimmer-border">
            <div>
              <span className="text-xs font-cinzel tracking-[0.25em] text-brand-gold uppercase font-bold block mb-2">
                TIER 2 (GOLD)
              </span>
              <h3 className="font-serif text-2xl text-white font-medium mb-1">
                Gold Candid / Cinema
              </h3>
              <p className="text-xs text-brand-gold font-cinzel tracking-wider uppercase mb-3">
                Candid or Cinematic as per choice
              </p>
              <div className="font-serif text-3xl text-brand-goldLight font-bold mb-4">
                ₹91,000 <span className="text-xs font-sans text-brand-muted font-normal">/ Complete Functions</span>
              </div>
              
              <div className="flex items-center text-xs font-semibold text-brand-ivory mb-6 pb-4 border-b border-brand-borderDark">
                <Film className="w-4 h-4 text-brand-gold mr-2 shrink-0" />
                <span>Candid or Cinematic with Album as per choice</span>
              </div>

              <ul className="space-y-3 text-xs text-brand-muted mb-8 font-sans">
                <li className="flex items-start text-brand-ivory font-medium">
                  <Check className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" />
                  <span><strong>Candid OR Cinematic</strong> coverage as per your category choice.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" />
                  <span><strong>Standard Album as per choice</strong> of photography.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" />
                  <span><strong>1 Complete Rasham Edited Videos</strong> (Full documentary).</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" />
                  <span><strong>1 High-Speed Pen Drive</strong> with all footage & photos.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" />
                  <span><strong>1 Traditional Highlight</strong> video.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" />
                  <span><strong>1 Luxury Family Photo Frame</strong> included.</span>
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/919415362280?text=Hi%20Sandeep%20Ji,%20I'm%20interested%20in%20the%20Gold%20Wedding%20Package%20(Rs%2091,000)"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal font-cinzel text-xs tracking-[0.2em] font-bold uppercase transition-colors text-center rounded-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" /> RESERVE GOLD (₹91,000)
            </a>
          </div>

          {/* Tier 3: Diamond Package (₹1,20,000 - Royal Cinema) */}
          <div className="bg-brand-darkCard/95 border-2 border-brand-gold rounded-xl p-8 flex flex-col justify-between shadow-2xl relative gold-shimmer-border">
            <span className="absolute -top-3.5 right-6 bg-brand-gold text-brand-charcoal font-cinzel text-[9px] tracking-widest font-extrabold uppercase px-3 py-1 rounded-full shadow-lg">
              ULTIMATE ROYAL CHOICE
            </span>
            <div>
              <span className="text-xs font-cinzel tracking-[0.25em] text-brand-gold uppercase font-bold block mb-2">
                TIER 3 (DIAMOND ROYALTY)
              </span>
              <h3 className="font-serif text-2xl text-white font-medium mb-1">
                Diamond Royal Cinema
              </h3>
              <p className="text-xs text-brand-gold font-cinzel tracking-wider uppercase mb-3">
                Cinematic & Candid with Canvera + Premium Album
              </p>
              <div className="font-serif text-4xl text-brand-goldLight font-bold mb-4">
                ₹1,20,000 <span className="text-xs font-sans text-brand-muted font-normal">/ Full Wedding Solution</span>
              </div>
              
              <div className="flex items-center text-xs font-semibold text-brand-ivory mb-6 pb-4 border-b border-brand-borderDark">
                <Crown className="w-4 h-4 text-brand-gold mr-2 shrink-0" />
                <span>Cinematic + Candid + Drone + Canvera & Premium Albums</span>
              </div>

              <ul className="space-y-2.5 text-xs text-brand-muted mb-6 font-sans">
                <li className="flex items-start text-brand-ivory font-medium">
                  <Sparkles className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" />
                  <span><strong>Cinematic & Candid Photography</strong> (Full Director Crew).</span>
                </li>
                <li className="flex items-start text-brand-goldLight font-semibold">
                  <Sparkles className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" />
                  <span><strong>Canvera Album + Premium Handcrafted Album</strong>.</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" />
                  <span><strong>Trending Instagram Reels</strong> for social media.</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" />
                  <span><strong>Cinematic Teaser Film</strong> (Pre-release cut).</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" />
                  <span><strong>Cinematic 4K Highlight Film</strong> with custom color grade.</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" />
                  <span><strong>1 Complete Rasham Edited Videos</strong> (Full documentary).</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" />
                  <span><strong>1 High-Speed Pen Drive</strong> + <strong>1 Traditional Highlight</strong>.</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" />
                  <span><strong>1 Luxury Family Photo Frame</strong> for living room display.</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-4 h-4 text-brand-gold mr-2 shrink-0 mt-0.5" />
                  <span><strong>Aerial Drone 4K Videography</strong> included.</span>
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/919415362280?text=Hi%20Sandeep%20Ji,%20I'm%20interested%20in%20the%20Diamond%20Wedding%20Package%20(Rs%201,20,000)"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-brand-gold text-brand-charcoal hover:bg-brand-goldHover font-cinzel text-xs tracking-[0.2em] font-extrabold uppercase transition-colors text-center rounded-sm shadow-xl flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-brand-charcoal" /> RESERVE DIAMOND (₹1,20,000)
            </a>
          </div>

        </div>

        {/* Maternity Shoot Special Offer Banner (₹6,500 Candid, Cinematic with Edited Photos & Reels) */}
        <div className="bg-gradient-to-r from-brand-darkCard via-brand-charcoal to-brand-darkCard border border-brand-gold/50 rounded-2xl p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-cinzel tracking-widest text-brand-gold uppercase font-bold">
                EXCLUSIVE MATERNITY CELEBRATION
              </span>
              <span className="text-[10px] bg-brand-gold/20 text-brand-gold px-2 py-0.5 rounded border border-brand-gold/40 font-semibold">
                BESTSELLER
              </span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium mb-2">
              Maternity Shoot — ₹6,500 Only
            </h3>
            <p className="text-xs text-brand-muted max-w-2xl font-sans leading-relaxed mb-3">
              Specialized baby bump shoot with complete artistic direction. Inclusions:
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs text-brand-goldLight font-medium">
              <span className="bg-brand-charcoal/80 px-2.5 py-1 rounded border border-brand-borderDark">
                ✓ Candid & Cinematic Direction
              </span>
              <span className="bg-brand-charcoal/80 px-2.5 py-1 rounded border border-brand-borderDark">
                ✓ High-End Edited Master Photos
              </span>
              <span className="bg-brand-charcoal/80 px-2.5 py-1 rounded border border-brand-borderDark">
                ✓ Trending Instagram Reels
              </span>
              <span className="bg-brand-charcoal/80 px-2.5 py-1 rounded border border-brand-borderDark">
                ✓ Studio Designer Gown & Props Included
              </span>
            </div>
          </div>

          <a
            href="https://wa.me/919415362280?text=Hi%20Sandeep%20Ji,%20I'm%20interested%20in%20the%20Maternity%20Shoot%20Package%20(Rs%206,500)%20with%20edited%20photos%20and%20reels"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-brand-gold text-brand-charcoal hover:bg-brand-goldHover font-cinzel text-xs tracking-wider uppercase font-extrabold rounded-sm whitespace-nowrap shadow-xl flex items-center gap-2 shrink-0 transition-transform hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-brand-charcoal" /> BOOK MATERNITY (₹6,500)
          </a>
        </div>

      </div>
    </section>
  );
}