'use client';

import React, { useState } from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding Muhurtham & Reception',
    packageTier: 'Diamond Package (Rs 1,20,000 / Royal Cinema)',
    date: '',
    venue: '',
    notes: '',
  });

  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*NEW WEBSITE VIP INQUIRY — R SANDEEP PHOTOGRAPHY*
  
• *Name:* ${form.name}
• *Phone:* ${form.phone}
• *Event Type:* ${form.eventType}
• *Preferred Tier:* ${form.packageTier}
• *Event Date:* ${form.date}
• *Venue / Location:* ${form.venue}
• *Event Vision / Details:* ${form.notes || 'N/A'}`;

    const url = `https://wa.me/919415362280?text=${encodeURIComponent(message)}`;
    setSubmittedUrl(url);

    // Open WhatsApp in new tab
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-brand-charcoal border-b border-brand-borderDark relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-brand-gold font-cinzel tracking-[0.35em] uppercase text-xs font-semibold block mb-2">
            DIRECT STUDIO CONNECT
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-light text-white">
            Reserve Your Wedding Dates
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto mt-4 mb-5" />
          <p className="text-sm text-brand-muted">
            Fill out the details below to generate an instant VIP inquiry on WhatsApp directly with Sandeep Ji.
          </p>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="bg-brand-darkCard border border-brand-borderDark rounded-2xl p-8 sm:p-12 shadow-2xl space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-cinzel tracking-wider text-brand-goldLight uppercase font-semibold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Anurag Srivastava"
                className="w-full bg-brand-charcoal border border-brand-borderDark rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold"
              />
            </div>

            <div>
              <label className="block text-xs font-cinzel tracking-wider text-brand-goldLight uppercase font-semibold mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="e.g. +91 9415362280"
                className="w-full bg-brand-charcoal border border-brand-borderDark rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-cinzel tracking-wider text-brand-goldLight uppercase font-semibold mb-2">
                Event Type *
              </label>
              <select
                value={form.eventType}
                onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                className="w-full bg-brand-charcoal border border-brand-borderDark rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold"
              >
                <option value="Wedding Muhurtham & Reception">Wedding Muhurtham & Reception</option>
                <option value="Maternity Shoot (Rs 6,500 Special)">Maternity Shoot (Rs 6,500 Special)</option>
                <option value="Pre-Wedding Cinema Shoot (Nauka Vihar/Destination)">Pre-Wedding Cinema Shoot</option>
                <option value="Engagement / Ring Ceremony">Engagement / Ring Ceremony</option>
                <option value="25th Wedding Anniversary Celebration">25th Wedding Anniversary</option>
                <option value="Baby Milestone & Birthday Shoot">Baby Milestone & Birthday Shoot</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-cinzel tracking-wider text-brand-goldLight uppercase font-semibold mb-2">
                Preferred Package Tier
              </label>
              <select
                value={form.packageTier}
                onChange={(e) => setForm({ ...form, packageTier: e.target.value })}
                className="w-full bg-brand-charcoal border border-brand-borderDark rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold"
              >
                <option value="Diamond Package (Rs 1,20,000 / Royal Cinema)">Diamond Package (Rs 1,20,000 / Royal Cinema)</option>
                <option value="Gold Package (Rs 91,000 / Candid or Cinema)">Gold Package (Rs 91,000 / Candid or Cinema)</option>
                <option value="Silver Package (Rs 51,000 / Traditional)">Silver Package (Rs 51,000 / Traditional)</option>
                <option value="Maternity Shoot (Rs 6,500 / Candid, Cinematic & Reels)">Maternity Shoot (Rs 6,500 / Candid, Cinematic & Reels)</option>
                <option value="Custom Event Proposal">Custom Event Proposal</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-cinzel tracking-wider text-brand-goldLight uppercase font-semibold mb-2">
                Event Date *
              </label>
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full bg-brand-charcoal border border-brand-borderDark rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold"
              />
            </div>

            <div>
              <label className="block text-xs font-cinzel tracking-wider text-brand-goldLight uppercase font-semibold mb-2">
                Event Location / Venue *
              </label>
              <input
                type="text"
                required
                value={form.venue}
                onChange={(e) => setForm({ ...form, venue: e.target.value })}
                placeholder="e.g. Sarovar Portico Gorakhpur"
                className="w-full bg-brand-charcoal border border-brand-borderDark rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-cinzel tracking-wider text-brand-goldLight uppercase font-semibold mb-2">
              Event Vision & Notes (Optional)
            </label>
            <textarea
              rows={3}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="Tell us about the number of guests, days of coverage, or any special moments you want captured..."
              className="w-full bg-brand-charcoal border border-brand-borderDark rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-brand-gold text-brand-charcoal hover:bg-brand-goldHover font-cinzel text-xs tracking-[0.25em] font-extrabold uppercase rounded-lg shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 fill-brand-charcoal" /> SEND ENQUIRY TO SANDEEP JI VIA WHATSAPP
          </button>

        </form>

      </div>

      {/* Success Modal */}
      {submittedUrl && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-brand-darkCard border-2 border-brand-gold rounded-2xl max-w-md w-full p-8 text-center space-y-4 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-brand-gold/20 border border-brand-gold text-brand-gold flex items-center justify-center mx-auto text-2xl">
              <CheckCircle2 className="w-8 h-8 text-brand-gold" />
            </div>
            <h3 className="font-cinzel text-2xl text-white font-bold">
              Inquiry Compiled!
            </h3>
            <p className="text-xs text-brand-muted font-sans leading-relaxed">
              We have created a pre-formatted VIP message with your event date and venue for Sandeep Ji on WhatsApp.
            </p>
            
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={submittedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-brand-gold text-brand-charcoal font-cinzel text-xs tracking-wider font-extrabold uppercase rounded shadow-xl flex items-center justify-center gap-2"
              >
                CONTINUE TO WHATSAPP NOW &rarr;
              </a>
              <button
                onClick={() => setSubmittedUrl(null)}
                className="w-full py-2.5 text-xs text-brand-muted hover:text-white font-cinzel"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
