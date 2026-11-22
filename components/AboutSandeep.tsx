'use client';

import React from 'react';
import { Award, Camera, ShieldCheck, Heart, MessageCircle } from 'lucide-react';

export default function AboutSandeep() {
  return (
    <section id="about" className="py-24 bg-brand-charcoal border-b border-brand-borderDark relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Photo Grid of Awards & Accreditations */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative group overflow-hidden rounded-xl border border-brand-gold/40 shadow-2xl">
                <img
                  src="/assets/images/founder/sandeep_award_trophy.jpg"
                  alt="Sandeep receiving Stage Award"
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 left-2 bg-brand-charcoal/90 text-brand-gold text-[9px] font-cinzel font-bold px-2 py-1 rounded border border-brand-gold/40">
                  STATE AWARDEE
                </span>
              </div>

              <div className="relative group overflow-hidden rounded-xl border border-brand-gold/40 shadow-2xl">
                <img
                  src="/assets/images/founder/sandeep_nikon_cinema.jpg"
                  alt="Sandeep with Nikon Cinema"
                  className="w-full h-52 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 left-2 bg-brand-charcoal/90 text-brand-gold text-[9px] font-cinzel font-bold px-2 py-1 rounded border border-brand-gold/40">
                  NIKON Z CINEMA
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="relative group overflow-hidden rounded-xl border border-brand-gold/40 shadow-2xl">
                <img
                  src="/assets/images/founder/sandeep_award_certificate.jpg"
                  alt="Certificate of Appreciation"
                  className="w-full h-52 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 left-2 bg-brand-charcoal/90 text-brand-gold text-[9px] font-cinzel font-bold px-2 py-1 rounded border border-brand-gold/40">
                  DIGITEK & VILTROX CERTIFIED
                </span>
              </div>

              <div className="relative group overflow-hidden rounded-xl border border-brand-gold/40 shadow-2xl">
                <img
                  src="/assets/images/founder/sandeep_with_bride.jpg"
                  alt="Sandeep with Bridal Client"
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 left-2 bg-brand-charcoal/90 text-brand-gold text-[9px] font-cinzel font-bold px-2 py-1 rounded border border-brand-gold/40">
                  BRIDAL DIRECTION
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
              Recognized by state photography associations and certified by industry leaders Digitek and Viltrox, I personally lead on-ground cinematography and supervise the post-production color grading of every wedding film. Whether documenting grand weddings at Sarovar Portico Gorakhpur, Parth Resort Padrauna, or destination celebrations at Hotel Ramada Varanasi, our crew ensures cinematic perfection.
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
    </section>
  );
}
