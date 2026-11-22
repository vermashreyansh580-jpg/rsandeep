'use client';

import React from 'react';
import { Award, Film, Users, ShieldCheck } from 'lucide-react';

export default function TrustBar() {
  return (
    <section className="py-10 bg-brand-darkCard border-b border-brand-borderDark">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        
        <div className="space-y-1">
          <div className="flex items-center justify-center gap-1.5 text-brand-gold mb-1">
            <Users className="w-5 h-5" />
            <span className="font-cinzel text-3xl sm:text-4xl font-bold">10K+</span>
          </div>
          <span className="text-xs text-brand-muted font-cinzel tracking-widest uppercase block">
            Instagram Followers
          </span>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-center gap-1.5 text-brand-gold mb-1">
            <Film className="w-5 h-5" />
            <span className="font-cinzel text-3xl sm:text-4xl font-bold">187+</span>
          </div>
          <span className="text-xs text-brand-muted font-cinzel tracking-widest uppercase block">
            4K Wedding Films
          </span>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-center gap-1.5 text-brand-gold mb-1">
            <Award className="w-5 h-5" />
            <span className="font-cinzel text-3xl sm:text-4xl font-bold">STATE</span>
          </div>
          <span className="text-xs text-brand-muted font-cinzel tracking-widest uppercase block">
            Recognized Awardee
          </span>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-center gap-1.5 text-brand-gold mb-1">
            <ShieldCheck className="w-5 h-5" />
            <span className="font-cinzel text-3xl sm:text-4xl font-bold">10+ Yrs</span>
          </div>
          <span className="text-xs text-brand-muted font-cinzel tracking-widest uppercase block">
            Editorial Leadership
          </span>
        </div>

      </div>
    </section>
  );
}
