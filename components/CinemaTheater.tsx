'use client';

import React, { useState } from 'react';
import { Play, Film, MapPin, X, MessageCircle } from 'lucide-react';

export default function CinemaTheater() {
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'WEDDING' | 'PRE-WEDDING' | 'ENGAGEMENT' | 'ANNIVERSARY'>('ALL');
  const [activeModalVideo, setActiveModalVideo] = useState<{ id: string; title: string; location: string } | null>(null);

  const videos = [
    {
      id: 'UdxhRtiEy8g',
      title: '2026 Gorakhpur Latest Pre-Wedding Film',
      location: 'Nauka Vihar 2.0, Gorakhpur',
      category: 'PRE-WEDDING',
      tag: 'Trending 4K',
      thumb: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'VJqBy_wZiEI',
      title: 'Ultra-Luxury AI Wedding Teaser & Highlight',
      location: 'Dicky + Geeta Grand Wedding',
      category: 'WEDDING',
      tag: 'Signature Cinema',
      thumb: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'xn1_rnwPODE',
      title: 'Latest Haldi & Wedding Highlight Film',
      location: 'Khalilabad, Sant Kabir Nagar',
      category: 'WEDDING',
      tag: 'Bride Side',
      thumb: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'E2cEnVJx-_c',
      title: 'Grand Wedding Film || Parth Resort',
      location: 'Parth Resort, Padrauna (Kushinagar)',
      category: 'WEDDING',
      tag: 'Royal Wedding',
      thumb: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'Jrbe2VRFr24',
      title: 'Maharajganj Engagement Cinema Highlight',
      location: 'Hotel Le Grand by Savvy, Siswa / Maharajganj',
      category: 'ENGAGEMENT',
      tag: 'Ring Ceremony',
      thumb: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '4GYjG1hqFWU',
      title: 'Destination Ring Ceremony || Saurabh x Mansi',
      location: 'Hotel Ramada, Varanasi',
      category: 'ENGAGEMENT',
      tag: 'Destination 4K',
      thumb: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'R3nSsMxtzpQ',
      title: '25th Silver Jubilee Wedding Anniversary Teaser',
      location: 'Sarovar Portico (AD Mall), Gorakhpur',
      category: 'ANNIVERSARY',
      tag: '25th Anniversary',
      thumb: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const filteredVideos = activeCategory === 'ALL'
    ? videos
    : videos.filter((v) => v.category === activeCategory);

  return (
    <section id="films" className="py-24 bg-brand-darkCard border-b border-brand-borderDark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold font-cinzel tracking-[0.35em] uppercase text-xs font-semibold block mb-2">
            4K WEDDING CINEMA & REELS
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-light text-white">
            The Cinematic Film Archives
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto mt-4 mb-5" />
          <p className="text-sm text-brand-muted">
            Crafted with cinema cameras, color grading, and drone cinematography across Uttar Pradesh's grandest venues.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {(['ALL', 'WEDDING', 'PRE-WEDDING', 'ENGAGEMENT', 'ANNIVERSARY'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-cinzel text-xs tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'border border-brand-gold bg-brand-gold text-brand-charcoal font-bold shadow-lg'
                  : 'border border-brand-borderDark text-brand-ivory/80 hover:border-brand-gold'
              }`}
            >
              {cat === 'ALL' ? 'ALL FILMS' : cat}
            </button>
          ))}
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((v) => (
            <div
              key={v.id}
              onClick={() => setActiveModalVideo(v)}
              className="gold-shimmer-border rounded-xl bg-brand-charcoal overflow-hidden group cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`}
                  alt={v.title}
                  onError={(e) => {
                    // Fallback to default thumbnail
                    (e.target as HTMLImageElement).src = v.thumb;
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-charcoal/40 group-hover:bg-brand-charcoal/10 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-brand-gold/90 text-brand-charcoal flex items-center justify-center text-lg shadow-2xl group-hover:scale-110 group-hover:bg-brand-gold transition-all duration-300">
                    <Play className="w-6 h-6 fill-brand-charcoal ml-0.5" />
                  </div>
                </div>
                <span className="absolute top-3 right-3 bg-brand-charcoal/80 backdrop-blur-md border border-brand-gold/40 text-brand-gold font-cinzel text-[10px] tracking-widest px-2.5 py-1 rounded">
                  {v.tag}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs text-brand-gold font-sans mb-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{v.location}</span>
                </div>
                <h3 className="font-serif text-lg text-white font-medium group-hover:text-brand-goldLight transition-colors line-clamp-2">
                  {v.title}
                </h3>
                <div className="mt-4 pt-3 border-t border-brand-borderDark flex items-center justify-between text-xs text-brand-muted">
                  <span className="flex items-center gap-1">
                    <Film className="w-3.5 h-3.5 text-brand-gold" /> 4K Ultra HD
                  </span>
                  <span className="text-brand-gold font-semibold group-hover:underline">
                    Watch Film &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Theater Modal Player */}
      {activeModalVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4">
          <button
            onClick={() => setActiveModalVideo(null)}
            className="absolute top-6 right-6 text-brand-ivory hover:text-brand-gold text-3xl z-30"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden border border-brand-gold/50 shadow-2xl">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${activeModalVideo.id}?autoplay=1&rel=0&modestbranding=1`}
              title={activeModalVideo.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="max-w-5xl w-full mt-4 flex flex-wrap items-center justify-between gap-4 px-2">
            <div>
              <h3 className="font-serif text-xl text-white font-medium">
                {activeModalVideo.title}
              </h3>
              <span className="text-xs text-brand-gold font-sans">
                {activeModalVideo.location}
              </span>
            </div>
            <a
              href={`https://wa.me/919415362280?text=${encodeURIComponent(
                `Hi Sandeep Ji, I watched your 4K Film: "${activeModalVideo.title}" (${activeModalVideo.location}) on your website. I want to inquire about booking similar cinema coverage.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-brand-gold text-brand-charcoal font-cinzel text-xs font-bold rounded flex items-center gap-2 shadow-xl hover:bg-brand-goldHover transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-brand-charcoal" /> Book This Cinema Style
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
