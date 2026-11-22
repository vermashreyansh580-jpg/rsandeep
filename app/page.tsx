'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import CategoryGateway from '@/components/CategoryGateway';
import CinemaTheater from '@/components/CinemaTheater';
import Pricing from '@/components/Pricing';
import Wardrobe from '@/components/Wardrobe';
import AboutSandeep from '@/components/AboutSandeep';
import Policy from '@/components/Policy';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import MasonryModal, { PortfolioItem } from '@/components/MasonryModal';
import PhotoLightbox from '@/components/PhotoLightbox';
import AdminModal from '@/components/AdminModal';

const initialPortfolio: PortfolioItem[] = [
  // WEDDINGS & BRIDAL
  { id: 'w1', title: 'Royal Heritage Muhurtham', category: 'WEDDINGS', img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85' },
  { id: 'w2', title: 'Varmala Celebration & Stage Light', category: 'WEDDINGS', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85' },
  { id: 'w3', title: 'Editorial Bride Red Lehenga Framing', category: 'BRIDAL', img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85' },
  { id: 'w4', title: 'Intimate Mandapam Pheras Ritual', category: 'WEDDINGS', img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85' },
  { id: 'w5', title: 'Grand Temple Entrance Walk', category: 'WEDDINGS', img: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=85' },
  { id: 'w6', title: 'Pastel Floral Stage & Haldi Smiles', category: 'BRIDAL', img: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=85' },

  // MATERNITY SHOOTS
  { id: 'm1', title: 'Golden Hour Motherhood Blessing', category: 'MATERNITY', img: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=85' },
  { id: 'm2', title: 'Floral Studio Maternity Portrait', category: 'MATERNITY', img: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1200&q=85' },
  { id: 'm3', title: 'Pastel Gown Outdoor Silhouette', category: 'MATERNITY', img: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=85' },
  { id: 'm4', title: 'Pure Joy & Baby Milestone Celebration', category: 'MATERNITY', img: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=85' },

  // PRE-WEDDINGS
  { id: 'p1', title: 'Nauka Vihar Sunset Romance', category: 'PRE-WEDDING', img: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=85' },
  { id: 'p2', title: 'Heritage Resort Lawn Twilight', category: 'PRE-WEDDING', img: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=1200&q=85' },
  { id: 'p3', title: 'Lakeside Embrace & Film Grading', category: 'PRE-WEDDING', img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=85' },
  { id: 'p4', title: 'Ramada Luxury Corridor Silhouette', category: 'PRE-WEDDING', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85' },

  // DRESSES AVAILABLE
  { id: 'd1', title: 'Royal Crimson Velvet Trail Gown', category: 'DRESSES', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85' },
  { id: 'd2', title: 'Sky Blue Maternity Ruffle Train', category: 'DRESSES', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85' },
  { id: 'd3', title: 'Pastel Blush Net Designer Lehenga', category: 'DRESSES', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85' },
  { id: 'd4', title: 'Ivory Shimmer Sangeet Lookbook', category: 'DRESSES', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=85' },

  // ENGAGEMENTS
  { id: 'e1', title: 'Sarovar Portico Ring Exchange', category: 'ENGAGEMENT', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=85' },
  { id: 'e2', title: 'Siswa Bazar Hotel Le Grand Night', category: 'ENGAGEMENT', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85' },
  { id: 'e3', title: '25th Wedding Anniversary Celebration', category: 'ENGAGEMENT', img: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=85' },
];

export default function Home() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(initialPortfolio);
  const [isMasonryOpen, setIsMasonryOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Load from LocalStorage if client added photos in previous session
  useEffect(() => {
    const saved = localStorage.getItem('rsandeep_portfolio');
    if (saved) {
      try {
        setPortfolioItems(JSON.parse(saved));
      } catch (e) {}
    }

    // Keyboard shortcut: Ctrl + Shift + A to open Admin CMS
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setIsAdminOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openMasonry = (cat: string = 'ALL') => {
    setActiveCategory(cat);
    setIsMasonryOpen(true);
  };

  const handleOpenPhoto = (item: PortfolioItem, index: number) => {
    setLightboxIndex(index);
  };

  const filteredItems = activeCategory === 'ALL'
    ? portfolioItems
    : portfolioItems.filter((i) => i.category === activeCategory);

  const activePhoto = lightboxIndex !== null && filteredItems[lightboxIndex]
    ? filteredItems[lightboxIndex]
    : null;

  return (
    <main className="min-h-screen bg-brand-charcoal text-brand-ivory">
      {/* 1. Header & Navigation */}
      <Navbar
        onOpenGallery={openMasonry}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* 2. Hero Section (Grand Split-Hero + Full Sandeep Photo + Prominent Story + 4K Video Loop) */}
      <Hero onOpenGallery={openMasonry} />

      {/* 3. Social Proof & Trust Metrics Bar */}
      <TrustBar />

      {/* 4. Category Gateway Hub (6 Cards that open Masonry Gallery) */}
      <CategoryGateway onOpenCategory={openMasonry} />

      {/* 5. 4K Cinema Theater & YouTube Highlights Showcase */}
      <CinemaTheater />

      {/* 6. 3-Tier Transparent Investment Rate Card */}
      <Pricing />

      {/* 7. Wardrobe & Shoot Outfits ("Dress Available" Feature) */}
      <Wardrobe onOpenGallery={openMasonry} />

      {/* 8. About Sandeep Ji & State Awards Social Proof */}
      <AboutSandeep />

      {/* 9. Operational Directives & Payment Terms */}
      <Policy />

      {/* 10. Smart WhatsApp Booking Form */}
      <BookingForm />

      {/* 11. Dual-Office Luxury Footer */}
      <Footer onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* MODAL 1: Fullscreen Masonry Gallery Modal (Handles Unlimited Photos Cleanly) */}
      <MasonryModal
        isOpen={isMasonryOpen}
        onClose={() => setIsMasonryOpen(false)}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        items={portfolioItems}
        onOpenPhoto={handleOpenPhoto}
      />

      {/* MODAL 2: Fullscreen HD Photo Lightbox */}
      <PhotoLightbox
        item={activePhoto}
        onClose={() => setLightboxIndex(null)}
        onPrev={() => {
          if (lightboxIndex !== null) {
            setLightboxIndex(lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1);
          }
        }}
        onNext={() => {
          if (lightboxIndex !== null) {
            setLightboxIndex(lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1);
          }
        }}
      />

      {/* MODAL 3: In-Browser Client Admin CMS (PIN: sandeep2026) */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        items={portfolioItems}
        onUpdateItems={setPortfolioItems}
      />
    </main>
  );
}
