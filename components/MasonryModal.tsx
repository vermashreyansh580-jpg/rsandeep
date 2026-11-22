'use client';

import React from 'react';
import { X, Images, MessageCircle, Maximize2 } from 'lucide-react';

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  img: string;
  height?: string;
}

interface MasonryModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
  items: PortfolioItem[];
  onOpenPhoto: (item: PortfolioItem, index: number) => void;
}

export default function MasonryModal({
  isOpen,
  onClose,
  activeCategory,
  onCategoryChange,
  items,
  onOpenPhoto,
}: MasonryModalProps) {
  if (!isOpen) return null;

  const categories = [
    { id: 'ALL', label: 'ALL MASTER FRAMES' },
    { id: 'WEDDINGS', label: 'WEDDINGS' },
    { id: 'BRIDAL', label: 'BRIDAL EDITORIAL' },
    { id: 'MATERNITY', label: 'MATERNITY' },
    { id: 'PRE-WEDDING', label: 'PRE-WEDDING' },
    { id: 'DRESSES', label: 'DRESSES AVAILABLE' },
    { id: 'ENGAGEMENT', label: 'ENGAGEMENT' },
  ];

  const filteredItems = activeCategory === 'ALL'
    ? items
    : items.filter((i) => i.category === activeCategory);

  return (
    <div className="fixed inset-0 z-50 bg-brand-charcoal/95 backdrop-blur-2xl flex flex-col overflow-y-auto">
      
      {/* Sticky Modal Topbar */}
      <div className="sticky top-0 z-20 bg-brand-charcoal/90 backdrop-blur-md border-b border-brand-borderDark px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-cinzel text-lg sm:text-xl font-bold text-brand-gold">
            MASTER VISUAL ARCHIVE
          </span>
          <span className="text-xs text-brand-muted hidden sm:inline">
            | Fullscreen Scalable Masonry Layout ({filteredItems.length} Frames)
          </span>
        </div>
        <button
          onClick={onClose}
          className="text-brand-ivory hover:text-brand-gold text-2xl p-1 transition-colors"
        >
          <X className="w-7 h-7" />
        </button>
      </div>

      {/* Category Filter Pills Inside Modal */}
      <div className="px-6 py-4 border-b border-brand-borderDark/40 flex flex-wrap items-center justify-center gap-2 bg-brand-darkCard/50">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => onCategoryChange(c.id)}
            className={`px-4 py-1.5 rounded-full font-cinzel text-xs tracking-wider transition-all duration-300 ${
              activeCategory === c.id
                ? 'border border-brand-gold bg-brand-gold text-brand-charcoal font-bold shadow-md'
                : 'border border-brand-borderDark text-brand-muted hover:border-brand-gold hover:text-white'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Masonry Columns Container */}
      <div className="p-6 lg:p-12 max-w-7xl mx-auto w-full">
        <div className="masonry-gallery">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onOpenPhoto(item, idx)}
              className="masonry-item group cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-5 flex flex-col justify-end">
                <span className="text-[9px] font-cinzel text-brand-gold tracking-widest uppercase font-bold mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif text-lg text-white font-medium mb-3">
                  {item.title}
                </h4>
                <div className="flex items-center justify-between text-xs text-brand-goldLight font-sans">
                  <span className="flex items-center gap-1">
                    <Maximize2 className="w-3.5 h-3.5" /> Full Resolution
                  </span>
                  <span className="text-brand-gold hover:underline flex items-center gap-1 font-semibold">
                    <MessageCircle className="w-3.5 h-3.5" /> Inquire
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
