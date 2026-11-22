'use client';

import React, { useState } from 'react';
import { X, Upload, Trash2, KeyRound, Sparkles } from 'lucide-react';
import { PortfolioItem } from './MasonryModal';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: PortfolioItem[];
  onUpdateItems: (newItems: PortfolioItem[]) => void;
}

export default function AdminModal({ isOpen, onClose, items, onUpdateItems }: AdminModalProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState(false);
  const [activeTab, setActiveTab] = useState<'photos' | 'pricing'>('photos');

  if (!isOpen) return null;

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'sandeep2026') {
      setIsAuthenticated(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const handleDirectUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      const result = uploadEvent.target?.result as string;
      const newItem: PortfolioItem = {
        id: 'user_' + Date.now(),
        title: 'New Master Frame ' + (items.length + 1),
        category: 'WEDDINGS',
        img: result,
      };

      const updated = [newItem, ...items];
      onUpdateItems(updated);
      localStorage.setItem('rsandeep_portfolio', JSON.stringify(updated));
    };
    reader.readAsDataURL(file);
  };

  const handleDeletePhoto = (index: number) => {
    const updated = [...items];
    updated.splice(index, 1);
    onUpdateItems(updated);
    localStorage.setItem('rsandeep_portfolio', JSON.stringify(updated));
  };

  const handleUpdateItem = (index: number, field: keyof PortfolioItem, value: string) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    onUpdateItems(updated);
    localStorage.setItem('rsandeep_portfolio', JSON.stringify(updated));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="bg-brand-darkCard border border-brand-gold rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-brand-muted hover:text-white text-xl"
        >
          <X className="w-6 h-6" />
        </button>

        {!isAuthenticated ? (
          // Login Form
          <form onSubmit={handleAuth} className="space-y-4 text-center py-4">
            <div className="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center mx-auto mb-2 border border-brand-gold/40">
              <KeyRound className="w-6 h-6" />
            </div>
            <span className="text-brand-gold font-cinzel text-xs tracking-widest uppercase font-bold block">
              STUDIO CMS PORTAL
            </span>
            <h3 className="font-serif text-2xl text-white">
              Admin Authentication
            </h3>
            <p className="text-xs text-brand-muted max-w-sm mx-auto">
              Enter administrative master PIN to manage gallery photos and update portfolio images.
            </p>
            
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter PIN (sandeep2026)"
              className="w-full max-w-xs mx-auto bg-brand-charcoal border border-brand-borderDark p-3 rounded text-center text-white text-sm focus:outline-none focus:border-brand-gold block"
            />

            {authError && (
              <span className="text-red-400 text-xs block">
                Invalid PIN. Please try again.
              </span>
            )}

            <div className="flex justify-center gap-3 pt-2">
              <button
                type="submit"
                className="px-6 py-2.5 bg-brand-gold text-brand-charcoal font-cinzel text-xs font-bold rounded hover:bg-brand-goldHover transition-colors"
              >
                Unlock CMS
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 border border-brand-borderDark text-brand-muted font-cinzel text-xs rounded hover:text-white"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          // Admin Dashboard
          <div className="space-y-5 max-h-[80vh] overflow-y-auto pr-1">
            <div className="flex items-center justify-between pb-3 border-b border-brand-borderDark">
              <div>
                <h3 className="font-cinzel text-lg text-brand-gold font-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-gold" /> R Sandeep Studio CMS
                </h3>
                <span className="text-[11px] text-brand-muted">
                  Add unlimited master frames directly from phone or PC
                </span>
              </div>
            </div>

            {/* Direct File Upload */}
            <div className="p-4 bg-brand-charcoal border border-brand-borderDark rounded-lg">
              <label className="block text-xs font-cinzel text-brand-gold tracking-widest uppercase font-bold mb-2">
                Upload New Photo from Device
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleDirectUpload}
                className="w-full text-xs text-brand-muted file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-brand-gold file:text-brand-charcoal hover:file:bg-brand-goldHover cursor-pointer"
              />
            </div>

            {/* Master Photos List */}
            <div className="space-y-3">
              <span className="text-xs font-cinzel text-white uppercase font-bold block">
                Current Gallery Master Frames ({items.length})
              </span>
              <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                {items.map((item, idx) => (
                  <div
                    key={item.id}
                    className="p-3 bg-brand-charcoal border border-brand-borderDark rounded-lg flex items-center gap-3"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-14 h-14 object-cover rounded border border-brand-gold/40 shrink-0"
                    />
                    <div className="flex-1 space-y-1">
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) => handleUpdateItem(idx, 'title', e.target.value)}
                        className="w-full bg-brand-darkCard p-1.5 border border-brand-borderDark rounded text-xs text-white"
                        placeholder="Title"
                      />
                      <select
                        value={item.category}
                        onChange={(e) => handleUpdateItem(idx, 'category', e.target.value)}
                        className="bg-brand-darkCard p-1 border border-brand-borderDark rounded text-[11px] text-brand-gold"
                      >
                        <option value="WEDDINGS">WEDDINGS</option>
                        <option value="BRIDAL">BRIDAL EDITORIAL</option>
                        <option value="MATERNITY">MATERNITY</option>
                        <option value="PRE-WEDDING">PRE-WEDDING</option>
                        <option value="DRESSES">DRESSES AVAILABLE</option>
                        <option value="ENGAGEMENT">ENGAGEMENT</option>
                      </select>
                    </div>
                    <button
                      onClick={() => handleDeletePhoto(idx)}
                      className="text-red-400 p-2 hover:text-red-300"
                      title="Delete Photo"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-brand-borderDark flex justify-end gap-3">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-brand-gold text-brand-charcoal font-cinzel text-xs font-extrabold uppercase rounded shadow-xl hover:bg-brand-goldHover"
              >
                Close & View Live Site
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
