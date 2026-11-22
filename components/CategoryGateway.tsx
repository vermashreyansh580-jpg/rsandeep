'use client';

import React from 'react';
import { Images, ArrowRight, Sparkles, Shirt, Heart, Calendar } from 'lucide-react';

interface CategoryGatewayProps {
  onOpenCategory: (category: string) => void;
}

export default function CategoryGateway({ onOpenCategory }: CategoryGatewayProps) {
  const categories = [
    {
      id: 'WEDDINGS',
      title: 'Weddings & Mandapam',
      desc: 'Muhurtham, Jaimala, Pheras & Grand Celebrations',
      frames: '24+ Master Frames',
      tag: 'HERITAGE & CANDID',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'MATERNITY',
      title: 'Maternity Shoots',
      desc: 'Studio & Outdoor with Props & Designer Gowns',
      frames: '14+ Master Frames',
      tag: 'MOTHERHOOD STORIES',
      image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80',
      badge: 'SPECIALTY • ₹6,500'
    },
    {
      id: 'PRE-WEDDING',
      title: 'Pre-Wedding Cinema',
      desc: 'Nauka Vihar 2.0 sunset romance & drone films',
      frames: '18+ Master Frames',
      tag: 'LAKESIDE & DESTINATIONS',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'BRIDAL',
      title: 'Bridal Editorial Portraits',
      desc: 'Intricate jewellery, eye framing & lehenga glamour',
      frames: '16+ Master Frames',
      tag: 'FINE-ART EDITORIAL',
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'DRESSES',
      title: 'Dresses & Props Available',
      desc: 'Trail gowns, maternity outfits & creative accessories',
      frames: '14+ Outfits Catalog',
      tag: 'STUDIO WARDROBE RENTAL',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
      badge: 'STUDIO WARDROBE'
    },
    {
      id: 'ENGAGEMENT',
      title: 'Engagement & Silver Jubilee',
      desc: 'Ring teasers, 25th anniversary celebrations & events',
      frames: '12+ Master Frames',
      tag: 'CEREMONIES & MILESTONES',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-brand-charcoal border-b border-brand-borderDark relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold font-cinzel tracking-[0.35em] uppercase text-xs font-semibold block mb-2">
            CURATED VISUAL GALLERIES
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-light text-white">
            The Signature Portfolios
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto mt-4 mb-5" />
          <p className="text-sm text-brand-muted">
            Click any collection to open the expansive, uncropped full-resolution Masonry Gallery.
          </p>
        </div>

        {/* 6 Gateway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onOpenCategory(cat.id)}
              className="gold-shimmer-border rounded-xl overflow-hidden bg-brand-darkCard group cursor-pointer relative"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {cat.badge && (
                  <span className="absolute top-3 right-3 bg-brand-gold text-brand-charcoal font-cinzel text-[9px] tracking-widest font-extrabold px-2.5 py-1 rounded shadow">
                    {cat.badge}
                  </span>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/30 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-[10px] font-cinzel tracking-widest uppercase text-brand-gold font-bold mb-0.5">
                    {cat.tag}
                  </span>
                  <h3 className="font-serif text-2xl text-white font-medium mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-brand-muted font-sans mb-3">
                    {cat.desc}
                  </p>
                  <div className="flex items-center justify-between text-xs text-brand-goldLight font-cinzel pt-2 border-t border-brand-borderDark/40">
                    <span className="flex items-center gap-1">
                      <Images className="w-3.5 h-3.5 text-brand-gold" /> {cat.frames}
                    </span>
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold text-brand-gold">
                      Explore Gallery <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Open Master Masonry Gallery Button */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenCategory('ALL')}
            className="px-8 py-4 bg-brand-gold text-brand-charcoal hover:bg-brand-goldHover font-cinzel text-xs tracking-[0.25em] font-extrabold uppercase rounded-sm shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
          >
            <Images className="w-4 h-4" /> OPEN EXPANSIVE MASTER MASONRY GALLERY
          </button>
        </div>

      </div>
    </section>
  );
}
