'use client';

import React from 'react';
import { Shirt, Sparkles } from 'lucide-react';

interface WardrobeProps {
  onOpenGallery: (cat?: string) => void;
}

export default function Wardrobe({ onOpenGallery }: WardrobeProps) {
  const dresses = [
    {
      title: 'Crimson Velvet Trail Gown',
      tag: 'Maternity & Pre-Wedding',
      img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Sky Blue Ruffle Train Gown',
      tag: 'Outdoor & Baby Milestone',
      img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Pastel Designer Net Saree',
      tag: 'Pre-Wedding Shoot',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Ivory Shimmer Cocktail Gown',
      tag: 'Cocktail & Sangeet Look',
      img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section id="dresses" className="py-24 bg-brand-darkCard border-b border-brand-borderDark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold font-cinzel tracking-[0.35em] uppercase text-xs font-semibold block mb-2">
            STUDIO AMENITIES & STYLING
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-light text-white">
            Designer Gowns & Props Available
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto mt-4 mb-5" />
          <p className="text-sm text-brand-muted">
            Save time and expense! We provide premium trailing gowns, maternity dresses, and creative accessories right at our Gorakhpur and Siswa studios.
          </p>
        </div>

        {/* 4 Dress Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {dresses.map((d, idx) => (
            <div
              key={idx}
              onClick={() => onOpenGallery('DRESSES')}
              className="gold-shimmer-border rounded-lg overflow-hidden bg-brand-charcoal group cursor-pointer"
            >
              <img
                src={d.img}
                alt={d.title}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-3 text-center">
                <span className="text-xs font-serif text-white font-medium block">
                  {d.title}
                </span>
                <span className="text-[10px] text-brand-gold font-cinzel tracking-wider">
                  {d.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
