/**
 * R SANDEEP PHOTOGRAPHY — MASTER INTERACTIVE JAVASCRIPT ENGINE
 * Features:
 * 1. YouTube 4K Ultra-HD Background Video Loop API + Audio Toggle
 * 2. Scalable Masonry Gallery Modal (Handles Unlimited Photos without Clutter)
 * 3. Fullscreen Photo Lightbox with Keyboard Navigation
 * 4. 4K Cinema Theater Video Lightbox
 * 5. Direct WhatsApp Booking Funnel (+91 9415362280)
 * 6. Secret In-Browser Admin Panel (5 clicks on logo or Ctrl+Shift+A / pass: sandeep2026)
 */

// Toast System
function showToast(message) {
  const toast = document.getElementById("custom-toast");
  if (!toast) return;
  toast.innerText = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
}

// ==========================================
// 1. MASTER DATASETS
// ==========================================

// Initial High-Fashion Visual Portfolio (Includes local founder shots & editorial references)
let masterPortfolio = [
  // WEDDINGS & BRIDAL
  { id: 'w1', title: 'Royal Heritage Muhurtham', category: 'WEDDINGS', img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85', height: 'portrait' },
  { id: 'w2', title: 'Varmala Celebration & Stage Light', category: 'WEDDINGS', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85', height: 'landscape' },
  { id: 'w3', title: 'Editorial Bride Red Lehenga Framing', category: 'BRIDAL', img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85', height: 'portrait' },
  { id: 'w4', title: 'Intimate Mandapam Pheras Ritual', category: 'WEDDINGS', img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85', height: 'square' },
  { id: 'w5', title: 'Grand Temple Entrance Walk', category: 'WEDDINGS', img: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=85', height: 'portrait' },
  { id: 'w6', title: 'Pastel Floral Stage & Haldi Smiles', category: 'BRIDAL', img: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=85', height: 'landscape' },

  // MATERNITY SHOOTS (Specialist Category)
  { id: 'm1', title: 'Golden Hour Motherhood Blessing', category: 'MATERNITY', img: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=85', height: 'portrait' },
  { id: 'm2', title: 'Floral Studio Maternity Portrait', category: 'MATERNITY', img: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1200&q=85', height: 'square' },
  { id: 'm3', title: 'Pastel Gown Outdoor Silhouette', category: 'MATERNITY', img: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=85', height: 'portrait' },
  { id: 'm4', title: 'Pure Joy & Baby Milestone Celebration', category: 'MATERNITY', img: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=85', height: 'landscape' },

  // PRE-WEDDINGS & OUTDOOR
  { id: 'p1', title: 'Nauka Vihar Sunset Romance', category: 'PRE-WEDDING', img: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=85', height: 'landscape' },
  { id: 'p2', title: 'Heritage Resort Lawn Twilight', category: 'PRE-WEDDING', img: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=1200&q=85', height: 'portrait' },
  { id: 'p3', title: 'Lakeside Embrace & Film Grading', category: 'PRE-WEDDING', img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=85', height: 'square' },
  { id: 'p4', title: 'Ramada Luxury Corridor Silhouette', category: 'PRE-WEDDING', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85', height: 'portrait' },

  // DRESSES & WARDROBE AVAILABLE (Client Specific Feature)
  { id: 'd1', title: 'Royal Crimson Velvet Trail Gown', category: 'DRESSES', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85', height: 'portrait' },
  { id: 'd2', title: 'Sky Blue Maternity Ruffle Train', category: 'DRESSES', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85', height: 'portrait' },
  { id: 'd3', title: 'Pastel Blush Net Designer Lehenga', category: 'DRESSES', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85', height: 'square' },
  { id: 'd4', title: 'Ivory Shimmer Sangeet Lookbook', category: 'DRESSES', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=85', height: 'portrait' },

  // ENGAGEMENT & CEREMONIES
  { id: 'e1', title: 'Sarovar Portico Ring Exchange', category: 'ENGAGEMENT', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=85', height: 'landscape' },
  { id: 'e2', title: 'Siswa Bazar Hotel Le Grand Night', category: 'ENGAGEMENT', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85', height: 'portrait' },
  { id: 'e3', title: '25th Wedding Anniversary Celebration', category: 'ENGAGEMENT', img: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=85', height: 'square' }
];

// 7 Master Cinema Video Highlights from Client
const masterVideos = [
  {
    id: "UdxhRtiEy8g",
    title: "2026 Gorakhpur Latest Pre-Wedding Film",
    location: "Nauka Vihar 2.0, Gorakhpur",
    category: "PRE-WEDDING",
    tag: "Trending 4K",
    thumb: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "VJqBy_wZiEI",
    title: "Ultra-Luxury AI Wedding Teaser & Highlight",
    location: "Dicky + Geeta Grand Wedding",
    category: "WEDDING",
    tag: "Signature Cinema",
    thumb: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "xn1_rnwPODE",
    title: "Latest Haldi & Wedding Highlight Film",
    location: "Khalilabad, Sant Kabir Nagar",
    category: "WEDDING",
    tag: "Bride Side",
    thumb: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "E2cEnVJx-_c",
    title: "Grand Wedding Film || Parth Resort",
    location: "Parth Resort, Padrauna (Kushinagar)",
    category: "WEDDING",
    tag: "Royal Wedding",
    thumb: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "Jrbe2VRFr24",
    title: "Maharajganj Engagement Cinema Highlight",
    location: "Hotel Le Grand by Savvy, Siswa / Maharajganj",
    category: "ENGAGEMENT",
    tag: "Ring Ceremony",
    thumb: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "4GYjG1hqFWU",
    title: "Destination Ring Ceremony || Saurabh x Mansi",
    location: "Hotel Ramada, Varanasi",
    category: "ENGAGEMENT",
    tag: "Destination 4K",
    thumb: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "R3nSsMxtzpQ",
    title: "25th Silver Jubilee Wedding Anniversary Teaser",
    location: "Sarovar Portico (AD Mall), Gorakhpur",
    category: "ANNIVERSARY",
    tag: "25th Anniversary",
    thumb: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80"
  }
];

// ==========================================
// 2. YOUTUBE 4K BACKGROUND VIDEO LOOP & AUDIO
// ==========================================
let ytBgPlayer = null;
let isAudioMuted = true;

function onYouTubeIframeAPIReady() {
  // Initialize Background Video
  ytBgPlayer = new YT.Player('yt-bg-player', {
    videoId: 'UdxhRtiEy8g', // High-energy 4K pre-wedding at Nauka Vihar Gorakhpur
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      enablejsapi: 1,
      fs: 0,
      iv_load_policy: 3,
      loop: 1,
      modestbranding: 1,
      mute: 1,
      playsinline: 1,
      rel: 0,
      showinfo: 0,
      playlist: 'UdxhRtiEy8g'
    },
    events: {
      onReady: onBgPlayerReady,
      onStateChange: onBgPlayerStateChange
    }
  });
}

function onBgPlayerReady(event) {
  event.target.mute();
  event.target.playVideo();
  if (event.target.setPlaybackQuality) {
    event.target.setPlaybackQuality('hd2160'); // Request 4K UHD
  }
}

function onBgPlayerStateChange(event) {
  // If video ends, seamlessly loop without black frame
  if (event.data === YT.PlayerState.ENDED) {
    ytBgPlayer.seekTo(0.1);
    ytBgPlayer.playVideo();
  }
}

function toggleBgAudio() {
  const btn = document.getElementById('sound-toggle-btn');
  const label = document.getElementById('sound-toggle-label');
  const icon = document.getElementById('sound-toggle-icon');

  if (!ytBgPlayer) return;

  if (isAudioMuted) {
    ytBgPlayer.unMute();
    ytBgPlayer.setVolume(85);
    isAudioMuted = false;
    label.innerText = 'Cinema Sound: Playing';
    icon.className = 'fa-solid fa-volume-high text-brand-gold animate-bounce';
    showToast('🔊 4K Cinema Audio Enabled');
  } else {
    ytBgPlayer.mute();
    isAudioMuted = true;
    label.innerText = 'Experience 4K Sound';
    icon.className = 'fa-solid fa-volume-xmark text-brand-muted';
    showToast('🔇 Audio Muted');
  }
}

// Load YouTube API script asynchronously
(function loadYouTubeScript() {
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
})();

// ==========================================
// 3. CINEMA THEATER SHOWCASE
// ==========================================
let activeFilmFilter = 'ALL';

function renderCinemaShowcase() {
  const grid = document.getElementById('cinema-films-grid');
  if (!grid) return;

  const filtered = activeFilmFilter === 'ALL' 
    ? masterVideos 
    : masterVideos.filter(v => v.category === activeFilmFilter);

  grid.innerHTML = filtered.map(v => `
    <div class="gold-shimmer-border rounded-xl bg-brand-darkCard overflow-hidden group cursor-pointer" onclick="openTheaterMode('${v.id}', '${v.title}', '${v.location}')">
      <div class="relative aspect-video overflow-hidden">
        <img src="https://img.youtube.com/vi/${v.id}/maxresdefault.jpg" onerror="this.src='${v.thumb}'" alt="${v.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
        <div class="absolute inset-0 bg-brand-charcoal/40 group-hover:bg-brand-charcoal/10 transition-colors flex items-center justify-center">
          <div class="w-14 h-14 rounded-full bg-brand-gold/90 text-brand-charcoal flex items-center justify-center text-lg shadow-2xl group-hover:scale-110 group-hover:bg-brand-gold transition-all duration-300">
            <i class="fa-solid fa-play ml-1"></i>
          </div>
        </div>
        <span class="absolute top-3 right-3 bg-brand-charcoal/80 backdrop-blur-md border border-brand-gold/40 text-brand-gold font-cinzel text-[10px] tracking-widest px-2.5 py-1 rounded">
          ${v.tag}
        </span>
      </div>
      <div class="p-5">
        <div class="flex items-center gap-2 text-xs text-brand-gold font-sans mb-1.5">
          <i class="fa-solid fa-location-dot"></i>
          <span>${v.location}</span>
        </div>
        <h3 class="font-serif text-lg text-white font-medium group-hover:text-brand-goldLight transition-colors line-clamp-2">
          ${v.title}
        </h3>
        <div class="mt-4 pt-3 border-t border-brand-borderDark flex items-center justify-between text-xs text-brand-muted">
          <span><i class="fa-solid fa-film text-brand-gold mr-1"></i> 4K Ultra HD</span>
          <span class="text-brand-gold font-semibold group-hover:underline">Play Film &rarr;</span>
        </div>
      </div>
    </div>
  `).join('');
}

function filterCinemaFilms(category) {
  activeFilmFilter = category;
  document.querySelectorAll('.film-filter-btn').forEach(btn => {
    if (btn.getAttribute('data-cat') === category) {
      btn.classList.add('bg-brand-gold', 'text-brand-charcoal', 'font-bold');
      btn.classList.remove('border-brand-borderDark', 'text-brand-ivory/80');
    } else {
      btn.classList.remove('bg-brand-gold', 'text-brand-charcoal', 'font-bold');
      btn.classList.add('border-brand-borderDark', 'text-brand-ivory/80');
    }
  });
  renderCinemaShowcase();
}

function openTheaterMode(videoId, title, location) {
  const modal = document.getElementById('theater-modal');
  const iframe = document.getElementById('theater-iframe');
  const titleEl = document.getElementById('theater-title');
  const locEl = document.getElementById('theater-location');
  const waBtn = document.getElementById('theater-wa-book');

  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  titleEl.innerText = title;
  locEl.innerText = location;
  waBtn.href = `https://wa.me/919415362280?text=${encodeURIComponent(`Hi Sandeep Ji, I watched your 4K Film: "${title}" (${location}) on your website. I want to inquire about booking similar cinema coverage for my wedding.`)}`;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeTheaterMode() {
  const modal = document.getElementById('theater-modal');
  const iframe = document.getElementById('theater-iframe');
  iframe.src = '';
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// ==========================================
// 4. MASONRY GALLERY & LIGHTBOX ENGINE
// ==========================================
let currentGalleryFilter = 'ALL';
let currentLightboxIdx = 0;

function openMasonryGalleryModal(initialCategory = 'ALL') {
  currentGalleryFilter = initialCategory;
  const modal = document.getElementById('masonry-gallery-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';

  // Highlight active filter pill
  document.querySelectorAll('.modal-filter-btn').forEach(btn => {
    if (btn.getAttribute('data-cat') === initialCategory) {
      btn.classList.add('bg-brand-gold', 'text-brand-charcoal', 'font-bold');
      btn.classList.remove('border-brand-borderDark', 'text-brand-muted');
    } else {
      btn.classList.remove('bg-brand-gold', 'text-brand-charcoal', 'font-bold');
      btn.classList.add('border-brand-borderDark', 'text-brand-muted');
    }
  });

  renderMasonryItems();
}

function closeMasonryGalleryModal() {
  const modal = document.getElementById('masonry-gallery-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = 'auto';
}

function filterModalGallery(category) {
  currentGalleryFilter = category;
  document.querySelectorAll('.modal-filter-btn').forEach(btn => {
    if (btn.getAttribute('data-cat') === category) {
      btn.classList.add('bg-brand-gold', 'text-brand-charcoal', 'font-bold');
      btn.classList.remove('border-brand-borderDark', 'text-brand-muted');
    } else {
      btn.classList.remove('bg-brand-gold', 'text-brand-charcoal', 'font-bold');
      btn.classList.add('border-brand-borderDark', 'text-brand-muted');
    }
  });
  renderMasonryItems();
}

function renderMasonryItems() {
  const container = document.getElementById('masonry-grid-container');
  if (!container) return;

  const filtered = currentGalleryFilter === 'ALL'
    ? masterPortfolio
    : masterPortfolio.filter(i => i.category === currentGalleryFilter);

  container.innerHTML = filtered.map((item, idx) => `
    <div class="masonry-item group cursor-pointer" onclick="openPhotoLightbox(${idx})">
      <img src="${item.img}" alt="${item.title}" loading="lazy">
      <div class="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-5 flex flex-col justify-end">
        <span class="text-[9px] font-cinzel text-brand-gold tracking-widest uppercase font-bold mb-1">${item.category}</span>
        <h4 class="font-serif text-lg text-white font-medium mb-3">${item.title}</h4>
        <div class="flex items-center justify-between text-xs text-brand-goldLight font-sans">
          <span><i class="fa-solid fa-expand mr-1"></i> Full Resolution</span>
          <span class="text-brand-gold hover:underline"><i class="fa-brands fa-whatsapp"></i> Inquire</span>
        </div>
      </div>
    </div>
  `).join('');
}

function openPhotoLightbox(index) {
  const filtered = currentGalleryFilter === 'ALL'
    ? masterPortfolio
    : masterPortfolio.filter(i => i.category === currentGalleryFilter);

  if (index < 0 || index >= filtered.length) return;
  currentLightboxIdx = index;
  const item = filtered[index];

  const modal = document.getElementById('photo-lightbox');
  const img = document.getElementById('lightbox-full-img');
  const cap = document.getElementById('lightbox-caption');
  const wa = document.getElementById('lightbox-wa-btn');

  img.src = item.img;
  cap.innerText = `${item.category} • ${item.title}`;
  wa.href = `https://wa.me/919415362280?text=${encodeURIComponent(`Hi Sandeep Ji, I loved this photo from your website gallery: "${item.title}" (${item.category}). Can you share package details for this style?`)}`;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function navigatePhotoLightbox(dir) {
  const filtered = currentGalleryFilter === 'ALL'
    ? masterPortfolio
    : masterPortfolio.filter(i => i.category === currentGalleryFilter);

  currentLightboxIdx += dir;
  if (currentLightboxIdx < 0) currentLightboxIdx = filtered.length - 1;
  if (currentLightboxIdx >= filtered.length) currentLightboxIdx = 0;
  openPhotoLightbox(currentLightboxIdx);
}

function closePhotoLightbox() {
  const modal = document.getElementById('photo-lightbox');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// Keyboard shortcuts for Lightbox
window.addEventListener('keydown', (e) => {
  const photoModal = document.getElementById('photo-lightbox');
  const theaterModal = document.getElementById('theater-modal');

  if (photoModal && !photoModal.classList.contains('hidden')) {
    if (e.key === 'ArrowRight') navigatePhotoLightbox(1);
    if (e.key === 'ArrowLeft') navigatePhotoLightbox(-1);
    if (e.key === 'Escape') closePhotoLightbox();
  }

  if (theaterModal && !theaterModal.classList.contains('hidden')) {
    if (e.key === 'Escape') closeTheaterMode();
  }
});

// ==========================================
// 5. DIRECT WHATSAPP CONVERSION ENGINE
// ==========================================
function handleBookingSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('form-name').value.trim();
  const phone = document.getElementById('form-phone').value.trim();
  const eventType = document.getElementById('form-event-type').value;
  const packageTier = document.getElementById('form-package-tier').value;
  const date = document.getElementById('form-date').value;
  const venue = document.getElementById('form-venue').value.trim();
  const notes = document.getElementById('form-notes').value.trim();

  const message = `*NEW WEBSITE VIP INQUIRY — R SANDEEP PHOTOGRAPHY*
  
• *Name:* ${name}
• *Phone:* ${phone}
• *Event Type:* ${eventType}
• *Preferred Tier:* ${packageTier}
• *Event Date:* ${date}
• *Venue / Location:* ${venue}
• *Event Vision / Details:* ${notes || 'N/A'}`;

  const url = `https://wa.me/919415362280?text=${encodeURIComponent(message)}`;

  // Show Success Alert Modal
  const successModal = document.getElementById('booking-success-modal');
  const continueBtn = document.getElementById('success-continue-wa-btn');
  continueBtn.href = url;

  successModal.classList.remove('hidden');
  successModal.classList.add('flex');

  // Trigger WhatsApp in new tab
  window.open(url, '_blank');
}

function closeSuccessModal() {
  const successModal = document.getElementById('booking-success-modal');
  successModal.classList.add('hidden');
  successModal.classList.remove('flex');
  document.getElementById('booking-form').reset();
}

// ==========================================
// 6. SECRET IN-BROWSER CLIENT ADMIN CMS
// ==========================================
let secretClickCount = 0;

function handleLogoSecretClick() {
  secretClickCount++;
  if (secretClickCount >= 5) {
    secretClickCount = 0;
    openAdminModal();
  }
}

// Keyboard shortcut: Ctrl + Shift + A
window.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
    e.preventDefault();
    openAdminModal();
  }
});

function openAdminModal() {
  document.getElementById('admin-modal').classList.add('active');
}

function closeAdminCMS() {
  document.getElementById('admin-modal').classList.remove('active');
}

function authenticateAdmin() {
  const pass = document.getElementById('admin-pass-input').value;
  const err = document.getElementById('admin-auth-error');

  if (pass === 'sandeep2026') {
    err.classList.add('hidden');
    document.getElementById('admin-auth-screen').classList.add('hidden');
    document.getElementById('admin-panel-screen').classList.remove('hidden');
    document.getElementById('admin-panel-screen').classList.add('flex');
    renderCMSPhotosList();
    showToast("Welcome Sandeep Ji! Admin Panel Unlocked.");
  } else {
    err.classList.remove('hidden');
  }
}

function renderCMSPhotosList() {
  const container = document.getElementById('cms-photos-list');
  if (!container) return;

  container.innerHTML = masterPortfolio.map((item, idx) => `
    <div class="p-3 bg-brand-charcoal border border-brand-borderDark rounded-lg flex items-center gap-3">
      <img src="${item.img}" class="w-14 h-14 object-cover rounded border border-brand-gold/40">
      <div class="flex-1 space-y-1">
        <input type="text" value="${item.title}" onchange="masterPortfolio[${idx}].title = this.value" class="w-full bg-brand-darkCard p-1.5 border border-brand-borderDark rounded text-xs text-white" placeholder="Title">
        <select onchange="masterPortfolio[${idx}].category = this.value" class="bg-brand-darkCard p-1 border border-brand-borderDark rounded text-[11px] text-brand-gold">
          <option value="WEDDINGS" ${item.category === 'WEDDINGS' ? 'selected' : ''}>WEDDINGS</option>
          <option value="BRIDAL" ${item.category === 'BRIDAL' ? 'selected' : ''}>BRIDAL</option>
          <option value="MATERNITY" ${item.category === 'MATERNITY' ? 'selected' : ''}>MATERNITY</option>
          <option value="PRE-WEDDING" ${item.category === 'PRE-WEDDING' ? 'selected' : ''}>PRE-WEDDING</option>
          <option value="DRESSES" ${item.category === 'DRESSES' ? 'selected' : ''}>DRESSES AVAILABLE</option>
          <option value="ENGAGEMENT" ${item.category === 'ENGAGEMENT' ? 'selected' : ''}>ENGAGEMENT</option>
        </select>
      </div>
      <button onclick="deleteCMSPhoto(${idx})" class="text-red-400 p-2 hover:text-red-300" title="Delete Photo">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  `).join('');
}

function handleCMSDirectUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    masterPortfolio.unshift({
      id: 'custom_' + Date.now(),
      title: 'New Master Frame ' + (masterPortfolio.length + 1),
      category: 'WEDDINGS',
      img: e.target.result,
      height: 'portrait'
    });

    renderCMSPhotosList();
    saveCMSData();
    showToast("Photo added successfully! Click 'Publish Live' to save.");
  };
  reader.readAsDataURL(file);
}

function deleteCMSPhoto(idx) {
  masterPortfolio.splice(idx, 1);
  renderCMSPhotosList();
  showToast("Photo removed from gallery.");
}

function saveCMSData() {
  localStorage.setItem('rsandeep_portfolio', JSON.stringify(masterPortfolio));
  renderMasonryItems();
  closeAdminCMS();
  showToast("All changes published live successfully!");
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('rsandeep_portfolio');
  if (saved) {
    try {
      masterPortfolio = JSON.parse(saved);
    } catch(e) {}
  }

  renderCinemaShowcase();
});
