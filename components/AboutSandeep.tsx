'use client';

import React, { useState } from 'react';
import { Award, Camera, ShieldCheck, Heart, MessageCircle, X, Maximize2, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

interface FounderPhoto {
  src: string;
  title: string;
  tag: string;
  subtitle?: string;
}

export default function AboutSandeep() {
  const [activePhotoIdx, setActivePhotoIdx] = useState<number | null>(null);

  const photos: FounderPhoto[] = [
    {
      src: '/assets/images/founder/sandeep_full_portrait.jpg',
      title: 'R Sandeep — Founder & Lead Director',
      tag: 'FOUNDER & LEAD CINEMATOGRAPHER',
      subtitle: 'Spearheading luxury wedding cinematography with a visionary artistic touch.'
    },
    {
      src: '/assets/images/founder/sandeep_award_trophy.jpg',
      title: 'State Photography Association Stage Award Ceremony',
      tag: 'STATE AWARDEE',
      subtitle: 'Honored with the prestigious State Photography Association Trophy for excellence in wedding films.'
    },
    {
      src: '/assets/images/founder/sandeep_nikon_cinema.jpg',
      title: 'Nikon Z Cinema — Born Cinematic Industry Presentation',
      tag: 'NIKON Z CINEMA',
      subtitle: 'Partnering with flagship cinema optics to deliver Hollywood-grade 4K dynamic range.'
    },
    {
      src: '/assets/images/founder/sandeep_award_certificate.jpg',
      title: 'Official Certificate of Appreciation by Digitek & Viltrox',
      tag: 'DIGITEK & VILTROX CERTIFIED',
      subtitle: 'Recognized by premier photographic lighting and lens manufacturers for cinematic craft.'
    },
    {
      src: '/assets/images/founder/sandeep_camera_action.jpg',
      title: 'Super-Telephoto Cinema Optics in Live Action',
      tag: 'MASTER CINEMA RIG',
      subtitle: 'Operating flagship Nikon Z6 III & ultra-telephoto optics for unobtrusive candid capture.'
    },
    {
      src: '/assets/images/founder/sandeep_with_bride.jpg',
      title: 'On-Ground Bridal Cinematography & Direction',
      tag: 'BRIDAL DIRECTION',
      subtitle: 'Guiding royal bridal portraits with natural posture, luxury framing, and timeless elegance.'
    },
    {
      src: '/assets/images/founder/sandeep_client_thumbsup.jpg',
      title: 'Celebrating Timeless Memories with Wedding Clients',
      tag: 'CLIENT TRUST & SATISFACTION',
      subtitle: '100% personal dedication to every wedding family from the first ritual to the final album.'
    }
  ];

  const currentModalPhoto = activePhotoIdx !== null ? photos[activePhotoIdx] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIdx !== null) {
      setActivePhotoIdx(activePhotoIdx === 0 ? photos.length - 1 : activePhotoIdx - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIdx !== null) {
      setActivePhotoIdx(activePhotoIdx === photos.length - 1 ? 0 : activePhotoIdx + 1);
    }
  };

  return (
    <section id="about" className="py-24 bg-brand-charcoal border-b border-brand-borderDark relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold font-cinzel tracking-[0.35em] uppercase text-xs font-semibold block mb-3">
            VISIONARY ARTISTRY & CREDENTIALS
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-light text-white mb-4">
            Meet <span className="text-brand-gold italic font-serif">R Sandeep</span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto" />
        </div>

        {/* Top Grid: Hero Portrait on Left + Founder Story on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Main Hero Portrait (Full Photo, Uncut, Clickable) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div
              onClick={() => setActivePhotoIdx(0)}
              className="relative group rounded-2xl overflow-hidden border-2 border-brand-gold/60 shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-brand-darkCard p-2 cursor-pointer max-w-md w-full transition-all duration-500 hover:border-brand-gold hover:shadow-[0_0_35px_rgba(201,168,76,0.35)]"
              title="Click to view full portrait in HD"
            >
              <div className="overflow-hidden rounded-xl bg-black/60 flex items-center justify-center min-h-[440px]">
                <img
                  src={photos[0].src}
                  alt={photos[0].title}
                  className="w-full h-auto max-h-[520px] object-contain rounded-xl group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Tag Badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between bg-brand-charcoal/95 backdrop-blur-md px-4 py-2.5 rounded-lg border border-brand-gold/50 shadow-xl">
                <div>
                  <span className="text-brand-gold text-[10px] font-cinzel tracking-widest uppercase font-bold block">
                    {photos[0].tag}
                  </span>
                  <span className="text-white text-xs font-serif">
                    R Sandeep
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-cinzel text-brand-goldLight group-hover:text-white transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" /> Full View
                </span>
              </div>
            </div>
            <p className="text-xs text-brand-muted mt-3 text-center font-cinzel tracking-wider">
              ✦ Click photo to inspect uncropped HD full frame
            </p>
          </div>

          {/* Right Side: Narrative Story & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-brand-gold font-cinzel tracking-[0.25em] uppercase text-xs font-semibold block">
                FOUNDER, LEAD CINEMATOGRAPHER & DIRECTOR
              </span>
              <h3 className="font-serif italic text-2xl sm:text-3xl text-brand-goldLight">
                "Wedding cinema is not about forced poses — it is the soul of authentic human emotion preserved forever."
              </h3>
            </div>
            
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-sans">
              With over <strong className="text-white">10+ years of dedicated professional mastery</strong> documenting grand royal weddings across Uttar Pradesh and prestigious destination venues all over India, R Sandeep is recognized for bringing cinematic elegance and unscripted emotion together.
            </p>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-sans">
              Personally accredited by the <strong className="text-brand-goldLight">State Photography Association</strong> and certified by industry optical & lighting giants <strong className="text-brand-goldLight">Digitek & Viltrox</strong>, Sandeep partners directly with flagship <strong className="text-white">Nikon Z Cinema</strong> gear to ensure your wedding film carries Hollywood-standard color science and timeless grandeur.
            </p>

            {/* Badges / Guarantees */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-brand-borderDark text-xs font-cinzel">
              <div className="bg-brand-darkCard/60 border border-brand-borderDark p-4 rounded-xl text-center">
                <span className="text-brand-gold font-bold block text-2xl">10+ Yrs</span>
                <span className="text-brand-muted text-[11px] tracking-wider uppercase">Mastery</span>
              </div>
              <div className="bg-brand-darkCard/60 border border-brand-borderDark p-4 rounded-xl text-center">
                <span className="text-brand-gold font-bold block text-2xl">187+</span>
                <span className="text-brand-muted text-[11px] tracking-wider uppercase">Films Crafted</span>
              </div>
              <div className="bg-brand-darkCard/60 border border-brand-borderDark p-4 rounded-xl text-center">
                <span className="text-brand-gold font-bold block text-2xl">100%</span>
                <span className="text-brand-muted text-[11px] tracking-wider uppercase">Ground Lead</span>
              </div>
            </div>

            {/* Direct WhatsApp Call to Action */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/919415362280?text=Hi%20Sandeep%20Ji,%20I%20would%20like%20to%20discuss%20our%20wedding%20dates"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-brand-gold text-brand-charcoal hover:bg-brand-goldHover font-cinzel text-xs tracking-wider uppercase font-bold rounded-lg shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-brand-charcoal" /> DIRECT TALK WITH SANDEEP
              </a>
              <span className="text-xs text-brand-muted font-sans flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-gold" /> Personal Supervision on Every Shoot
              </span>
            </div>

          </div>

        </div>

        {/* Accreditations & Milestones Gallery Strip (6 Full Photos, Uncropped, Click to Open) */}
        <div className="mt-12 pt-12 border-t border-brand-borderDark">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-brand-gold font-cinzel tracking-[0.25em] uppercase text-[11px] font-semibold block mb-1">
                AWARDS, CERTIFICATIONS & ON-GROUND CRAFT
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl text-white">
                Accreditations & Milestone Moments
              </h3>
            </div>
            <p className="text-xs text-brand-muted mt-2 md:mt-0 font-sans">
              Click any frame to view in full HD resolution with complete details
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {photos.slice(1).map((item, idx) => {
              const globalIdx = idx + 1;
              return (
                <div
                  key={globalIdx}
                  onClick={() => setActivePhotoIdx(globalIdx)}
                  className="group relative bg-brand-darkCard rounded-xl border border-brand-gold/30 hover:border-brand-gold overflow-hidden p-2 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
                  title="Click to view full photo"
                >
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-black/40 flex items-center justify-center">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2">
                      <span className="inline-flex items-center gap-1 text-[10px] text-brand-gold font-cinzel font-bold">
                        <Maximize2 className="w-3 h-3" /> Zoom
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 text-center">
                    <span className="text-[9px] font-cinzel text-brand-gold font-bold uppercase tracking-wider block truncate">
                      {item.tag}
                    </span>
                    <span className="text-[10px] text-brand-ivory font-sans line-clamp-1 block mt-0.5">
                      {item.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Fullscreen Photo Modal Lightbox with Prev/Next Navigation */}
      {currentModalPhoto && (
        <div
          onClick={() => setActivePhotoIdx(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4 sm:p-8"
        >
          {/* Close Button */}
          <button
            onClick={() => setActivePhotoIdx(null)}
            className="absolute top-6 right-6 text-brand-ivory hover:text-brand-gold text-3xl z-50 p-2 bg-brand-charcoal/80 rounded-full border border-brand-borderDark transition-colors"
            title="Close (Esc)"
          >
            <X className="w-7 h-7" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-brand-ivory hover:text-brand-gold bg-brand-charcoal/80 hover:bg-brand-charcoal rounded-full border border-brand-gold/40 z-40 transition-colors"
            title="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-brand-ivory hover:text-brand-gold bg-brand-charcoal/80 hover:bg-brand-charcoal rounded-full border border-brand-gold/40 z-40 transition-colors"
            title="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
          >
            <img
              src={currentModalPhoto.src}
              alt={currentModalPhoto.title}
              className="max-w-full max-h-[70vh] object-contain rounded-xl border border-brand-gold shadow-[0_0_40px_rgba(201,168,76,0.3)]"
            />
            
            <div className="mt-4 text-center max-w-2xl px-4">
              <span className="text-xs font-cinzel text-brand-gold tracking-widest uppercase font-bold block mb-1">
                {currentModalPhoto.tag}
              </span>
              <h3 className="text-lg sm:text-xl font-serif text-white mb-1">
                {currentModalPhoto.title}
              </h3>
              {currentModalPhoto.subtitle && (
                <p className="text-xs sm:text-sm text-brand-muted font-sans">
                  {currentModalPhoto.subtitle}
                </p>
              )}
              <span className="text-[10px] text-brand-goldLight/70 font-cinzel block mt-2">
                Photo {activePhotoIdx! + 1} of {photos.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
