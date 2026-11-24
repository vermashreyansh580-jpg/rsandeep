import { db, isConfigValid } from './firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { CategoryItem } from '@/components/CategoryGateway';
import { PortfolioItem } from '@/components/MasonryModal';

export function subscribeToCategories(
  fallback: CategoryItem[],
  onUpdate: (categories: CategoryItem[]) => void
) {
  // If Firestore is available and configured
  if (isConfigValid && db) {
    try {
      const q = query(collection(db, 'categories'));
      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          if (!snapshot.empty) {
            const list: CategoryItem[] = [];
            snapshot.forEach((doc) => {
              const data = doc.data() as CategoryItem;
              list.push({ ...data, id: doc.id });
            });
            onUpdate(list);
            localStorage.setItem('rsandeep_categories', JSON.stringify(list));
          } else {
            // Firestore collection empty, use local
            loadFromLocalOrFallback(fallback, onUpdate);
          }
        },
        (error) => {
          console.warn('Firestore categories listener error, using local fallback:', error);
          loadFromLocalOrFallback(fallback, onUpdate);
        }
      );
      return unsubscribe;
    } catch (e) {
      console.warn('Firestore subscription failed:', e);
    }
  }

  // Fallback to localStorage & storage event
  return loadFromLocalOrFallback(fallback, onUpdate);
}

function loadFromLocalOrFallback(
  fallback: CategoryItem[],
  onUpdate: (categories: CategoryItem[]) => void
) {
  if (typeof window === 'undefined') return () => {};

  const saved = localStorage.getItem('rsandeep_categories');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        onUpdate(parsed);
      } else {
        onUpdate(fallback);
      }
    } catch (e) {
      onUpdate(fallback);
    }
  } else {
    onUpdate(fallback);
  }

  const handleStorage = (e: StorageEvent) => {
    if (e.key === 'rsandeep_categories' && e.newValue) {
      try {
        const parsed = JSON.parse(e.newValue);
        if (Array.isArray(parsed) && parsed.length > 0) {
          onUpdate(parsed);
        }
      } catch (err) {}
    }
  };

  window.addEventListener('storage', handleStorage);
  return () => window.removeEventListener('storage', handleStorage);
}

export function subscribeToPhotos(
  fallback: PortfolioItem[],
  onUpdate: (photos: PortfolioItem[]) => void
) {
  if (isConfigValid && db) {
    try {
      const q = query(collection(db, 'photos'));
      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          if (!snapshot.empty) {
            const list: PortfolioItem[] = [];
            snapshot.forEach((doc) => {
              const data = doc.data() as PortfolioItem;
              list.push({ ...data, id: doc.id });
            });

            // Sort so newly uploaded photos (PHOTO_timestamp_...) appear at the top
            list.sort((a, b) => {
              const timeA = a.id.startsWith('PHOTO_') ? parseInt(a.id.split('_')[1]) || 0 : 0;
              const timeB = b.id.startsWith('PHOTO_') ? parseInt(b.id.split('_')[1]) || 0 : 0;
              return timeB - timeA;
            });

            onUpdate(list);
            try {
              localStorage.setItem('rsandeep_portfolio', JSON.stringify(list));
            } catch (storageErr) {
              // Ignore localStorage quota errors if large base64 photos exist
            }
          } else {
            loadPhotosFromLocalOrFallback(fallback, onUpdate);
          }
        },
        (error) => {
          console.warn('Firestore photos listener error, using local fallback:', error);
          loadPhotosFromLocalOrFallback(fallback, onUpdate);
        }
      );
      return unsubscribe;
    } catch (e) {
      console.warn('Firestore photo subscription failed:', e);
    }
  }

  return loadPhotosFromLocalOrFallback(fallback, onUpdate);
}

function loadPhotosFromLocalOrFallback(
  fallback: PortfolioItem[],
  onUpdate: (photos: PortfolioItem[]) => void
) {
  if (typeof window === 'undefined') return () => {};

  const saved = localStorage.getItem('rsandeep_portfolio');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        onUpdate(parsed);
      } else {
        onUpdate(fallback);
      }
    } catch (e) {
      onUpdate(fallback);
    }
  } else {
    onUpdate(fallback);
  }

  const handleStorage = (e: StorageEvent) => {
    if (e.key === 'rsandeep_portfolio' && e.newValue) {
      try {
        const parsed = JSON.parse(e.newValue);
        if (Array.isArray(parsed) && parsed.length > 0) {
          onUpdate(parsed);
        }
      } catch (err) {}
    }
  };

  window.addEventListener('storage', handleStorage);
  return () => window.removeEventListener('storage', handleStorage);
}
