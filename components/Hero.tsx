'use client';

import React, { useState } from 'react';
import { Play, Images, MessageCircle, Crown, Award, Film, MapPin, Volume2, VolumeX, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenGallery: (cat?: string) => void;
}

export default function Hero({ onOpenGallery }: HeroProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<'action' | 'portrait' | 'award'>('action');
  const [isAudioMuted, setIsAudioMuted] = useState(true);
  const [activeVideoId, setActiveVideoId] = useState('UdxhRtiEy8g'); // Nauka Vihar 2.0 Pre-Wedding 4K

  const founderPhotos = {
    action: {
      src: '/assets/images/founder/sandeep_camera_action.jpg',
      label: 'Behind The Nikon Z Cinema Rig',
      tag: 'MASTER CINEMATOGRAPHER'
    },
    portrait: {
      src: '/assets/images/founder/sandeep_full_portrait.jpg',
      label: 'Editorial Style & Direction',
      tag: 'LEAD DIRECTOR'
    },
    award: {
      src: '/assets/images/founder/sandeep_award_trophy.jpg',
      label: 'State Level Photography Awardee',
      tag: 'INDUSTRY HONORS'
    }
  };

  const toggleSound = () => {
    setIsAudioMuted(!isAudioMuted);
  };

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden border-b border-brand-borderDark py-12 lg:py-20">
      
      {/* 4K BACKGROUND VIDEO ENGINE (YouTube Embed with Autoplay, Mute, Loop) */}
      <div className="video-background-wrapper">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?autoplay=1&mute=${isAudioMuted ? '1' : '0'}&loop=1&playlist=${activeVideoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1`}
          title="R Sandeep 4K Cinema Background"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        />
      </div>

      {/* Cinematic Dark Vignette & Gradient Overlays */}
      <div className="cinema-vignette" />
      <div className="cinema-bottom-fade" />

      {/* Floating 4K Sound Toggle Pill */}
      <button
        onClick={toggleSound}
        className="fixed bottom-8 right-8 z-50 bg-brand-darkCard/90 hover:bg-brand-gold hover:text-brand-charcoal text-brand-ivory border border-brand-gold px-4 py-2.5 rounded-full backdrop-blur-xl shadow-2xl flex items-center gap-2.5 transition-all duration-300 font-cinzel text-xs font-bold tracking-wider"
        title="Toggle Background Cinema Audio"
      >
        {isAudioMuted ? (
          <>
            <VolumeX className="w-4 h-4 text-brand-gold" />
            <span className="uppercase text-[11px]">Experience 4K Sound</span>
          </>
        ) : (
          <>
            <Volume2 className="w-4 h-4 text-brand-charcoal animate-bounce" />
            <span className="uppercase text-[11px] text-brand-charcoal font-black">Cinema Audio: ON</span>
          </>
        )}
      </button>

      {/* ============================================================== */}
      {/* MAIN HERO CONTENT: GRAND SPLIT SHOWCASE (Full Photo + Story)   */}
      {/* ============================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Prominent Story, Title & Information About Sandeep */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-charcoal/85 border border-brand-gold/60 backdrop-blur-md shadow-2xl">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-spin" />
              <span className="font-cinzel text-[11px] sm:text-xs tracking-[0.3em] uppercase text-brand-goldLight font-bold">
                ULTRA-LUXURY 4K WEDDING CINEMA
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
            <div className="bg-brand-charcoal/70 border border-brand-borderDark/80 backdrop-blur-md rounded-xl p-5 sm:p-6 space-y-3">
              <p className="text-sm sm:text-base text-brand-ivory/90 leading-relaxed font-sans">
                With over <strong className="text-brand-gold font-bold">10+ years of dedicated cinematography leadership</strong>, state photography association honors, and certification from <strong className="text-brand-gold">Digitek & Viltrox</strong>, Sandeep personally leads on-ground production and color grading for every luxury wedding.
              </p>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-sans">
                Capturing unscripted human emotions, regal mandapam rituals, and high-fashion editorial portraits without artificial poses across Gorakhpur, Maharajganj, and premier destination wedding venues throughout India.
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
                <span className="text-[10px] text-brand-muted font-cinzel uppercase tracking-wider">4K Films</span>
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

            {/* Quick 4K Background Video Switcher */}
            <div className="pt-2 flex items-center gap-3 text-xs text-brand-muted">
              <span className="font-cinzel text-[10px] tracking-wider text-brand-gold">4K Background:</span>
              <button
                onClick={() => setActiveVideoId('UdxhRtiEy8g')}
                className={`px-2.5 py-1 rounded text-[11px] font-sans transition-colors ${activeVideoId === 'UdxhRtiEy8g' ? 'bg-brand-gold text-brand-charcoal font-bold' : 'bg-brand-darkCard border border-brand-borderDark text-brand-muted hover:text-white'}`}
              >
                Nauka Vihar (Pre-Wedding)
              </button>
              <button
                onClick={() => setActiveVideoId('4GYjG1hqFWU')}
                className={`px-2.5 py-1 rounded text-[11px] font-sans transition-colors ${activeVideoId === '4GYjG1hqFWU' ? 'bg-brand-gold text-brand-charcoal font-bold' : 'bg-brand-darkCard border border-brand-borderDark text-brand-muted hover:text-white'}`}
              >
                Ramada Varanasi
              </button>
              <button
                onClick={() => setActiveVideoId('E2cEnVJx-_c')}
                className={`px-2.5 py-1 rounded text-[11px] font-sans transition-colors ${activeVideoId === 'E2cEnVJx-_c' ? 'bg-brand-gold text-brand-charcoal font-bold' : 'bg-brand-darkCard border border-brand-borderDark text-brand-muted hover:text-white'}`}
              >
                Parth Resort
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: GRAND, FULL-SCALE PORTRAIT SHOWCASE OF SANDEEP */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* The Majestic Framed Photo Card */}
            <div className="floating-founder-badge relative w-full max-w-md rounded-2xl p-2 bg-gradient-to-b from-brand-gold via-brand-borderDark to-brand-charcoal shadow-2xl">
              
              <div className="relative rounded-xl overflow-hidden bg-brand-darkCard aspect-[3/4] border border-brand-gold/60">
                <img
                  src={founderPhotos[selectedPhoto].src}
                  alt="R Sandeep Lead Cinematographer"
                  className="w-full h-full object-cover object-top transition-all duration-700 hover:scale-105"
                />

                {/* Gradient Vignette over Photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-80" />

                {/* Top Badge on Photo */}
                <div className="absolute top-4 left-4 bg-brand-charcoal/90 border border-brand-gold/80 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                  <Crown className="w-3.5 h-3.5 text-brand-gold" />
                  <span className="font-cinzel text-[10px] tracking-widest text-brand-gold font-bold uppercase">
                    {founderPhotos[selectedPhoto].tag}
                  </span>
                </div>

                {/* Bottom Overlay Info on Photo */}
                <div className="absolute bottom-4 left-4 right-4 bg-brand-darkCard/95 border border-brand-gold/50 backdrop-blur-xl p-4 rounded-xl shadow-2xl">
                  <span className="text-[10px] font-cinzel tracking-widest text-brand-gold uppercase font-bold block mb-0.5">
                    R SANDEEP • LEAD DIRECTOR
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-white font-medium">
                    {founderPhotos[selectedPhoto].label}
                  </h3>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-brand-borderDark/60 text-[11px] text-brand-muted font-sans">
                    <span className="flex items-center gap-1 text-brand-goldLight">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" /> Nikon Z Cinema Certified
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

    </section>
  );
}
