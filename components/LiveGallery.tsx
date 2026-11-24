'use client';

import React, { useState } from 'react';
import { Maximize2, MessageCircle, Sparkles, ArrowRight, Grid, Filter } from 'lucide-react';
import { PortfolioItem } from './MasonryModal';
import { CategoryItem } from './CategoryGateway';

interface LiveGalleryProps {
  items: PortfolioItem[];
  categories: CategoryItem[];
  onOpenPhoto: (item: PortfolioItem, index: number) => void;
  onOpenFullscreenArchive: (category?: string) => void;
}

export default function LiveGallery({
  items,
  categories,
  onOpenPhoto,
  onOpenFullscreenArchive,
}: LiveGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [displayLimit, setDisplayLimit] = useState<number>(12);

  // Dynamic filter tabs
  const categoryTabs = [
    { id: 'ALL', label: 'ALL FRAMES', count: items.length },
    ...categories.map((c) => ({
      id: c.id,
      label: c.title.split('&')[0].trim().toUpperCase(),
      count: items.filter((i) => i.category === c.id).length,
    })),
  ];

  // Filter items
  const filteredItems = selectedCategory === 'ALL'
    ? items
    : items.filter((i) => i.category === selectedCategory);

  const visibleItems = filteredItems.slice(0, displayLimit);

  return (
    <section id="portfolio-grid" className="py-24 bg-brand-charcoal border-b border-brand-borderDark relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 border border-brand-gold/30 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span className="text-[10px] font-cinzel text-brand-gold font-bold tracking-widest uppercase">
              STUDIO ARCHIVE • LIVE SYNCHRONIZED
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-light text-white mb-3">
            Signature <span className="font-serif italic text-brand-goldLight">Master Frames</span>
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-4" />
          <p className="text-xs sm:text-sm text-brand-muted font-sans">
            Explore authentic royal weddings, cinematic pre-wedding sunsets, and fine-art bridal portraiture updated directly from our studio lens.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoryTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedCategory(tab.id);
                  setDisplayLimit(12);
                }}
                className={`px-4 py-2 rounded-full font-cinzel text-xs tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-brand-gold text-brand-charcoal font-bold shadow-lg shadow-brand-gold/20 scale-105'
                    : 'bg-brand-darkCard text-brand-muted hover:text-white border border-brand-borderDark hover:border-brand-gold/50'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-brand-charcoal/20 text-brand-charcoal font-black' : 'bg-brand-charcoal text-brand-gold'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Photo Grid */}
        {visibleItems.length === 0 ? (
          <div className="text-center py-16 bg-brand-darkCard rounded-2xl border border-brand-borderDark">
            <p className="text-brand-muted text-sm font-sans mb-3">
              No photos currently added in this collection.
            </p>
            <button
              onClick={() => setSelectedCategory('ALL')}
              className="px-5 py-2 bg-brand-gold text-brand-charcoal font-cinzel text-xs font-bold rounded-lg"
            >
              Show All Frames
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleItems.map((item, idx) => {
              const isNewlyUploaded = item.id.startsWith('PHOTO_');
              return (
                <div
                  key={item.id}
                  onClick={() => onOpenPhoto(item, idx)}
                  className="group relative rounded-xl overflow-hidden bg-brand-darkCard border border-brand-borderDark hover:border-brand-gold transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-gold/10 cursor-pointer flex flex-col"
                >
                  {/* Photo Frame */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-black/40">
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span className="bg-brand-charcoal/90 text-brand-gold text-[9px] font-cinzel font-bold px-2.5 py-1 rounded border border-brand-gold/40 shadow">
                        {item.category}
                      </span>
                      {isNewlyUploaded && (
                        <span className="bg-emerald-500/90 text-white text-[9px] font-cinzel font-bold px-2 py-0.5 rounded shadow">
                          NEW
                        </span>
                      )}
                    </div>

                    {/* Zoom Icon Button on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="p-3 bg-brand-charcoal/80 text-brand-gold rounded-full border border-brand-gold/60 backdrop-blur-md transform scale-90 group-hover:scale-100 transition-transform">
                        <Maximize2 className="w-5 h-5" />
                      </span>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="p-3.5 flex items-center justify-between border-t border-brand-borderDark/60 bg-brand-darkCard">
                    <div className="truncate pr-2">
                      <h4 className="text-xs font-serif text-white group-hover:text-brand-goldLight transition-colors truncate">
                        {item.title}
                      </h4>
                      <span className="text-[10px] text-brand-muted font-sans">
                        Full HD Resolution
                      </span>
                    </div>
                    <span className="text-[10px] text-brand-gold font-cinzel tracking-wider flex items-center gap-1 shrink-0">
                      ZOOM <ArrowRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Actions */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-brand-borderDark">
          {displayLimit < filteredItems.length && (
            <button
              onClick={() => setDisplayLimit((prev) => prev + 12)}
              className="px-7 py-3 bg-brand-darkCard hover:bg-brand-charcoal text-brand-gold border border-brand-gold/50 hover:border-brand-gold font-cinzel text-xs tracking-wider uppercase font-bold rounded-lg shadow-lg transition-all"
            >
              Load More Frames ({filteredItems.length - displayLimit} Remaining)
            </button>
          )}

          <button
            onClick={() => onOpenFullscreenArchive(selectedCategory)}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-gold text-brand-charcoal hover:bg-brand-goldHover font-cinzel text-xs tracking-wider uppercase font-bold rounded-lg shadow-2xl transition-all hover:scale-105"
          >
            <Grid className="w-4 h-4" /> OPEN EXPANSIVE MASONRY ARCHIVE ({filteredItems.length})
          </button>
        </div>

      </div>
    </section>
  );
}
