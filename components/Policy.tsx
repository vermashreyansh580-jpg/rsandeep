'use client';

import React from 'react';
import { Info } from 'lucide-react';

export default function Policy() {
  return (
    <section className="py-20 bg-brand-darkCard border-b border-brand-borderDark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-brand-gold font-cinzel tracking-[0.3em] uppercase text-xs font-semibold block mb-2">
            OPERATIONAL DIRECTIVES
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-light text-white">
            Travel Policy & Payment Schedule
          </h2>
          <div className="w-14 h-[1px] bg-brand-gold mx-auto mt-3" />
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          <div className="p-6 bg-brand-charcoal border border-brand-borderDark rounded-xl gold-shimmer-border">
            <span className="font-cinzel text-3xl font-bold text-brand-gold block mb-2">40%</span>
            <h4 className="font-serif text-lg text-white font-medium mb-2">
              Advance Booking Retainer
            </h4>
            <p className="text-xs text-brand-muted font-sans leading-relaxed">
              Paid upon booking to lock and reserve exclusive dates on our official calendar.
            </p>
          </div>

          <div className="p-6 bg-brand-charcoal border border-brand-borderDark rounded-xl gold-shimmer-border">
            <span className="font-cinzel text-3xl font-bold text-brand-gold block mb-2">40%</span>
            <h4 className="font-serif text-lg text-white font-medium mb-2">
              Shoot Morning Clearance
            </h4>
            <p className="text-xs text-brand-muted font-sans leading-relaxed">
              Cleared on the morning of the event shoot prior to camera crew deployment.
            </p>
          </div>

          <div className="p-6 bg-brand-charcoal border border-brand-borderDark rounded-xl gold-shimmer-border">
            <span className="font-cinzel text-3xl font-bold text-brand-gold block mb-2">20%</span>
            <h4 className="font-serif text-lg text-white font-medium mb-2">
              Pre-Delivery Balance
            </h4>
            <p className="text-xs text-brand-muted font-sans leading-relaxed">
              Settled prior to album printing dispatch and master drive handover.
            </p>
          </div>

        </div>

        {/* Note */}
        <div className="mt-8 p-4 bg-brand-charcoal/60 border border-brand-borderDark rounded-lg text-center text-xs text-brand-muted max-w-3xl mx-auto font-sans flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-brand-gold shrink-0" />
          <span>
            <strong className="text-brand-gold">Travel & Stay Policy:</strong> Outstation travel charges (Flight/Train/Cab) and hotel stay accommodation must be directly provided or reimbursed by the client. Package prices strictly exclude travel expenses.
          </span>
        </div>

      </div>
    </section>
  );
}
