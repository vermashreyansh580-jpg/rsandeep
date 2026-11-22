'use client';

import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { PortfolioItem } from './MasonryModal';

interface PhotoLightboxProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function PhotoLightbox({ item, onClose, onPrev, onNext }: PhotoLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onNext, onPrev, onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 select-none">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-brand-ivory hover:text-brand-gold text-3xl z-30 transition-colors"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Prev Button */}
      <button
        onClick={onPrev}
        className="absolute left-6 text-white hover:text-brand-gold text-3xl z-30 p-2 transition-colors"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>

      {/* Main Image View */}
      <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
        <img
          src={item.img}
          alt={item.title}
          className="max-w-full max-h-[75vh] object-contain rounded-lg border border-brand-gold/40 shadow-2xl"
        />
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4 w-full">
          <div>
            <span className="text-xs font-cinzel text-brand-gold tracking-widest uppercase font-bold block">
              {item.category}
            </span>
            <span className="text-base font-serif text-white">
              {item.title}
            </span>
          </div>
          <a
            href={`https://wa.me/919415362280?text=${encodeURIComponent(
              `Hi Sandeep Ji, I loved this photo from your website gallery: "${item.title}" (${item.category}). Can you share package details for this style?`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-brand-gold text-brand-charcoal text-xs font-cinzel font-bold rounded flex items-center gap-2 shadow-xl hover:bg-brand-goldHover transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-brand-charcoal" /> Inquire This Look
          </a>
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-6 text-white hover:text-brand-gold text-3xl z-30 p-2 transition-colors"
      >
        <ChevronRight className="w-10 h-10" />
      </button>

    </div>
  );
}
