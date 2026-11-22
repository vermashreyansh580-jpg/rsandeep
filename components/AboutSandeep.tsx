'use client';

import React, { useState } from 'react';
import { Award, Camera, ShieldCheck, Heart, MessageCircle, X, Maximize2 } from 'lucide-react';

export default function AboutSandeep() {
  const [modalPhoto, setModalPhoto] = useState<{ src: string; title: string; tag: string } | null>(null);

  const photos = [
    {
      src: '/assets/images/founder/sandeep_award_trophy.jpg',
      title: 'State Photography Association Stage Award Ceremony',
      tag: 'STATE AWARDEE'
    },
    {
      src: '/assets/images/founder/sandeep_nikon_cinema.jpg',
      title: 'Nikon Z Cinema — Born Cinematic Industry Presentation',
      tag: 'NIKON Z CINEMA'
    },
    {
      src: '/assets/images/founder/sandeep_award_certificate.jpg',
      title: 'Official Certificate of Appreciation by Digitek & Viltrox',
      tag: 'DIGITEK & VILTROX CERTIFIED'
    },
    {
      src: '/assets/images/founder/sandeep_with_bride.jpg',
      title: 'On-Ground Bridal Cinematography & Direction',
      tag: 'BRIDAL DIRECTION'
    }
  ];

  return (
    <section id="about" className="py-24 bg-brand-charcoal border-b border-brand-borderDark relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Photo Grid of Awards & Accreditations (Uncropped, Click to Fullscreen) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div
                onClick={() => setModalPhoto(photos[0])}
                className="relative group overflow-hidden rounded-xl border border-brand-gold/40 shadow-2xl bg-brand-darkCard p-1 cursor-pointer flex items-center justify-center min-h-[220px]"
                title="Click to view full photo"
              >
                <img
                  src={photos[0].src}
                  alt={photos[0].title}
                  className="max-h-60 w-auto max-w-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 left-2 bg-brand-charcoal/90 text-brand-gold text-[9px] font-cinzel font-bold px-2 py-1 rounded border border-brand-gold/40">
                  {photos[0].tag}
                </span>
                <span className="absolute top-2 right-2 bg-brand-darkCard/80 text-brand-goldLight p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>

              <div
                onClick={() => setModalPhoto(photos[1])}
                className="relative group overflow-hidden rounded-xl border border-brand-gold/40 shadow-2xl bg-brand-darkCard p-1 cursor-pointer flex items-center justify-center min-h-[200px]"
                title="Click to view full photo"
              >
                <img
                  src={photos[1].src}
                  alt={photos[1].title}
                  className="max-h-56 w-auto max-w-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 left-2 bg-brand-charcoal/90 text-brand-gold text-[9px] font-cinzel font-bold px-2 py-1 rounded border border-brand-gold/40">
                  {photos[1].tag}
                </span>
                <span className="absolute top-2 right-2 bg-brand-darkCard/80 text-brand-goldLight p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div
                onClick={() => setModalPhoto(photos[2])}
                className="relative group overflow-hidden rounded-xl border border-brand-gold/40 shadow-2xl bg-brand-darkCard p-1 cursor-pointer flex items-center justify-center min-h-[200px]"
                title="Click to view full photo"
              >
                <img
                  src={photos[2].src}
                  alt={photos[2].title}
                  className="max-h-56 w-auto max-w-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 left-2 bg-brand-charcoal/90 text-brand-gold text-[9px] font-cinzel font-bold px-2 py-1 rounded border border-brand-gold/40">
                  {photos[2].tag}
                </span>
                <span className="absolute top-2 right-2 bg-brand-darkCard/80 text-brand-goldLight p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>

              <div
                onClick={() => setModalPhoto(photos[3])}
                className="relative group overflow-hidden rounded-xl border border-brand-gold/40 shadow-2xl bg-brand-darkCard p-1 cursor-pointer flex items-center justify-center min-h-[220px]"
                title="Click to view full photo"
              >
                <img
                  src={photos[3].src}
                  alt={photos[3].title}
                  className="max-h-60 w-auto max-w-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 left-2 bg-brand-charcoal/90 text-brand-gold text-[9px] font-cinzel font-bold px-2 py-1 rounded border border-brand-gold/40">
                  {photos[3].tag}
                </span>
                <span className="absolute top-2 right-2 bg-brand-darkCard/80 text-brand-goldLight p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Narrative Story & Credentials */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-brand-gold font-cinzel tracking-[0.35em] uppercase text-xs font-semibold block">
              BEHIND THE LENS
            </span>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-light text-white">
              Meet R Sandeep
            </h2>
            <span className="font-serif italic text-xl sm:text-2xl text-brand-goldLight block">
              Founder, Lead Cinematographer & Director
            </span>
            
            <p className="text-sm text-brand-muted leading-relaxed font-sans">
              With over 10+ years of dedicated professional experience documenting grand weddings across Uttar Pradesh and destination locations across India, I believe wedding cinema is about capturing unscripted human emotion rather than artificial poses.
            </p>

            <p className="text-sm text-brand-muted leading-relaxed font-sans">
              Recognized by state photography associations and certified by industry leaders Digitek and Viltrox, I personally lead on-ground cinematography and supervise the post-production color grading of every wedding film to ensure a signature, timeless aesthetic.
            </p>

            {/* Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-brand-borderDark text-xs font-cinzel">
              <div>
                <span className="text-brand-gold font-bold block text-xl">10+ Yrs</span>
                <span className="text-brand-muted">Experience</span>
              </div>
              <div>
                <span className="text-brand-gold font-bold block text-xl">187+</span>
                <span className="text-brand-muted">Films Delivered</span>
              </div>
              <div>
                <span className="text-brand-gold font-bold block text-xl">100%</span>
                <span className="text-brand-muted">Ground Lead</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/919415362280?text=Hi%20Sandeep%20Ji,%20I%20would%20like%20to%20discuss%20our%20wedding%20dates"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-gold text-brand-charcoal hover:bg-brand-goldHover font-cinzel text-xs tracking-wider uppercase font-bold rounded-sm shadow-xl"
              >
                <MessageCircle className="w-4 h-4 fill-brand-charcoal" /> DIRECT TALK WITH SANDEEP
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Fullscreen Photo Modal for Awards */}
      {modalPhoto && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4">
          <button
            onClick={() => setModalPhoto(null)}
            className="absolute top-6 right-6 text-brand-ivory hover:text-brand-gold text-3xl z-30 p-2"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={modalPhoto.src}
              alt={modalPhoto.title}
              className="max-w-full max-h-[75vh] object-contain rounded-xl border border-brand-gold shadow-2xl"
            />
            <div className="mt-4 text-center">
              <span className="text-xs font-cinzel text-brand-gold tracking-widest uppercase font-bold block mb-1">
                {modalPhoto.tag}
              </span>
              <h3 className="text-lg font-serif text-white">
                {modalPhoto.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
