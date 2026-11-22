'use client';

import React, { useState } from 'react';
import { Images, MessageCircle, Crown, CheckCircle2, Sparkles, X, Maximize2 } from 'lucide-react';

interface HeroProps {
  onOpenGallery: (cat?: string) => void;
}

export default function Hero({ onOpenGallery }: HeroProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<'action' | 'portrait' | 'award'>('action');
  const [isFullPhotoOpen, setIsFullPhotoOpen] = useState(false);

  const founderPhotos = {
    action: {
      src: '/assets/images/founder/sandeep_camera_action.jpg',
      label: 'Behind The Nikon Z Cinema Rig',
      tag: 'MASTER CINEMATOGRAPHER',
      desc: 'Hands-on ground cinematography with high-end Nikon cinema equipment.'
    },
    portrait: {
      src: '/assets/images/founder/sandeep_full_portrait.jpg',
      label: 'Editorial Style & Direction',
      tag: 'LEAD DIRECTOR',
      desc: 'Full-length editorial portrait and artistic direction.'
    },
    award: {
      src: '/assets/images/founder/sandeep_award_trophy.jpg',
      label: 'State Level Photography Awardee',
      tag: 'INDUSTRY HONORS',
      desc: 'Recognized on stage by Photography & Videography Association.'
    }
  };

  const activePhotoData = founderPhotos[selectedPhoto];

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-brand-borderDark py-12 lg:py-16">
      
      {/* 1080p NATIVE INSTANT-LOAD BACKGROUND VIDEO (0ms delay, No YouTube, No Audio, 100% Silent) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.05]"
        >
          <source src="/assets/video/hero_bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Cinematic Dark Vignette & Gradient Overlays */}
      <div className="cinema-vignette" />
      <div className="cinema-bottom-fade" />

      {/* ============================================================== */}
      {/* MAIN HERO CONTENT: GRAND SHOWCASE (Full Photo + Story)         */}
      {/* ============================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Prominent Story, Title & Information About Sandeep */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-charcoal/85 border border-brand-gold/60 backdrop-blur-md shadow-2xl">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-spin" />
              <span className="font-cinzel text-[11px] sm:text-xs tracking-[0.3em] uppercase text-brand-goldLight font-bold">
                LUXURY WEDDING CINEMA & FINE ART
              </span>
            </div>

            {/* Main Grand Heading */}
            <div>
              <span className="text-xs font-cinzel tracking-[0.35em] text-brand-gold uppercase font-bold block mb-1">
                MEET THE MASTER ARTIST
              </span>
              <h1 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-wide leading-none">
                R SANDEEP
              </h1>
              <p className="font-serif italic text-2xl sm:text-3xl text-brand-goldLight mt-2">
                "A Complete Wedding Solution."
              </p>
            </div>

            {/* Prominent Storytelling Copy About Sandeep Ji */}
            <div className="bg-brand-charcoal/75 border border-brand-borderDark/80 backdrop-blur-md rounded-xl p-5 sm:p-6 space-y-3">
              <p className="text-sm sm:text-base text-brand-ivory/90 leading-relaxed font-sans">
                With over <strong className="text-brand-gold font-bold">10+ years of dedicated cinematography leadership</strong>, state photography association honors, and certification from <strong className="text-brand-gold">Digitek & Viltrox</strong>, Sandeep personally leads on-ground production and color grading for every luxury wedding.
              </p>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-sans">
                Capturing unscripted human emotions, regal mandapam rituals, and high-fashion editorial portraits without artificial poses for grand weddings, pre-weddings, and maternity milestone sessions.
              </p>
            </div>

            {/* Credibility & Trust Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="p-3 bg-brand-darkCard/90 border border-brand-borderDark rounded-lg">
                <span className="font-cinzel text-lg sm:text-xl font-bold text-brand-gold block">10+ Yrs</span>
                <span className="text-[10px] text-brand-muted font-cinzel uppercase tracking-wider">Experience</span>
              </div>
              <div className="p-3 bg-brand-darkCard/90 border border-brand-borderDark rounded-lg">
                <span className="font-cinzel text-lg sm:text-xl font-bold text-brand-gold block">187+</span>
                <span className="text-[10px] text-brand-muted font-cinzel uppercase tracking-wider">Films Delivered</span>
              </div>
              <div className="p-3 bg-brand-darkCard/90 border border-brand-borderDark rounded-lg">
                <span className="font-cinzel text-lg sm:text-xl font-bold text-brand-gold block">STATE</span>
                <span className="text-[10px] text-brand-muted font-cinzel uppercase tracking-wider">Awardee</span>
              </div>
              <div className="p-3 bg-brand-darkCard/90 border border-brand-borderDark rounded-lg">
                <span className="font-cinzel text-lg sm:text-xl font-bold text-brand-gold block">10K+</span>
                <span className="text-[10px] text-brand-muted font-cinzel uppercase tracking-wider">Instagram</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://wa.me/919415362280?text=Hi%20Sandeep%20Ji,%20I%20saw%20your%20website%20and%20want%20to%20discuss%20booking%20wedding%20cinema%20coverage"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-gold text-brand-charcoal hover:bg-brand-goldHover font-cinzel text-xs tracking-[0.2em] font-extrabold uppercase rounded-sm shadow-2xl transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-brand-charcoal" /> TALK WITH SANDEEP JI
              </a>

              <button
                onClick={() => onOpenGallery('ALL')}
                className="px-8 py-4 border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal font-cinzel text-xs tracking-[0.2em] font-extrabold uppercase rounded-sm backdrop-blur-md transition-all duration-300 flex items-center gap-2"
              >
                <Images className="w-4 h-4" /> EXPLORE ALL PHOTOS
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: FULL-SCALE, UNCROPPED PHOTO SHOWCASE OF SANDEEP */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* The Majestic Framed Photo Card (Uncropped, Full Photo Display) */}
            <div className="floating-founder-badge relative w-full max-w-md rounded-2xl p-2 bg-gradient-to-b from-brand-gold via-brand-borderDark to-brand-charcoal shadow-2xl">
              
              <div
                onClick={() => setIsFullPhotoOpen(true)}
                className="relative rounded-xl overflow-hidden bg-brand-darkCard border border-brand-gold/60 cursor-pointer group flex items-center justify-center min-h-[480px] max-h-[580px] p-2"
                title="Click to view full photo in high resolution"
              >
                {/* Full Uncropped Photo using object-contain */}
                <img
                  src={activePhotoData.src}
                  alt="R Sandeep Lead Cinematographer"
                  className="max-h-[520px] w-auto max-w-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                />

                {/* Top Badge on Photo */}
                <div className="absolute top-4 left-4 bg-brand-charcoal/90 border border-brand-gold/80 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                  <Crown className="w-3.5 h-3.5 text-brand-gold" />
                  <span className="font-cinzel text-[10px] tracking-widest text-brand-gold font-bold uppercase">
                    {activePhotoData.tag}
                  </span>
                </div>

                {/* Click to Zoom Pill */}
                <div className="absolute top-4 right-4 bg-brand-darkCard/80 border border-brand-gold/50 text-brand-goldLight text-[10px] font-cinzel px-2.5 py-1 rounded-full opacity-80 group-hover:opacity-100 flex items-center gap-1 shadow">
                  <Maximize2 className="w-3 h-3 text-brand-gold" /> Full View
                </div>

                {/* Bottom Overlay Info on Photo */}
                <div className="absolute bottom-3 left-3 right-3 bg-brand-darkCard/95 border border-brand-gold/50 backdrop-blur-xl p-3.5 rounded-xl shadow-2xl">
                  <span className="text-[10px] font-cinzel tracking-widest text-brand-gold uppercase font-bold block mb-0.5">
                    R SANDEEP • LEAD DIRECTOR
                  </span>
                  <h3 className="font-serif text-base sm:text-lg text-white font-medium">
                    {activePhotoData.label}
                  </h3>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-brand-borderDark/60 text-[11px] text-brand-muted font-sans">
                    <span className="flex items-center gap-1 text-brand-goldLight">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" /> Click to open full photo
                    </span>
                    <span className="font-cinzel text-brand-gold font-semibold">100% Ground Lead</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Interactive Photo Angle Switcher (Action / Portrait / Award) */}
            <div className="flex items-center gap-2 mt-4 bg-brand-darkCard/90 border border-brand-borderDark p-1.5 rounded-xl shadow-lg">
              <button
                onClick={() => setSelectedPhoto('action')}
                className={`px-3 py-1.5 rounded-lg text-xs font-cinzel transition-all ${selectedPhoto === 'action' ? 'bg-brand-gold text-brand-charcoal font-bold shadow' : 'text-brand-muted hover:text-white'}`}
              >
                Cinema Action Rig
              </button>
              <button
                onClick={() => setSelectedPhoto('portrait')}
                className={`px-3 py-1.5 rounded-lg text-xs font-cinzel transition-all ${selectedPhoto === 'portrait' ? 'bg-brand-gold text-brand-charcoal font-bold shadow' : 'text-brand-muted hover:text-white'}`}
              >
                Full Portrait
              </button>
              <button
                onClick={() => setSelectedPhoto('award')}
                className={`px-3 py-1.5 rounded-lg text-xs font-cinzel transition-all ${selectedPhoto === 'award' ? 'bg-brand-gold text-brand-charcoal font-bold shadow' : 'text-brand-muted hover:text-white'}`}
              >
                State Award Stage
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* FULL-SCREEN MODAL WHEN CLICKING SANDEEP'S PHOTO */}
      {isFullPhotoOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4">
          <button
            onClick={() => setIsFullPhotoOpen(false)}
            className="absolute top-6 right-6 text-brand-ivory hover:text-brand-gold text-3xl z-30 transition-colors p-2"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={activePhotoData.src}
              alt="R Sandeep Full Photo"
              className="max-w-full max-h-[75vh] object-contain rounded-xl border-2 border-brand-gold shadow-2xl"
            />
            <div className="mt-4 text-center">
              <span className="text-xs font-cinzel text-brand-gold tracking-widest uppercase font-bold block mb-1">
                {activePhotoData.tag}
              </span>
              <h3 className="text-xl font-serif text-white font-medium">
                {activePhotoData.label}
              </h3>
              <p className="text-xs text-brand-muted font-sans mt-1">
                {activePhotoData.desc}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
