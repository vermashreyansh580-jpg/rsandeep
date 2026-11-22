import type { Metadata } from 'next';
import { Cinzel, Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'R SANDEEP PHOTOGRAPHY | Ultra-Luxury 4K Wedding Cinema & Candid Photography',
  description: 'Official Next.js portal of R Sandeep Photography. Premier 4K wedding cinema, candid fine-art bridal portraits, and maternity shoots across Gorakhpur, Maharajganj, Siswa Bazar, Padrauna and India.',
  keywords: [
    'R Sandeep Photography',
    'Best Wedding Photographer Gorakhpur',
    'Luxury Wedding Cinema Maharajganj',
    'Pre Wedding Shoot Nauka Vihar 2.0',
    'Maternity Photographer Gorakhpur',
    'Wedding Photographer Siswa Bazar',
    'Drone Wedding Cinematography Eastern UP'
  ],
  authors: [{ name: 'R Sandeep' }],
  metadataBase: new URL('https://rsandeepphotography.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'R SANDEEP PHOTOGRAPHY | Ultra-Luxury 4K Wedding Cinema',
    description: 'A Complete Wedding Solution by R Sandeep. Experience 4K cinema films, candid bridal portraits, and maternity shoots across Eastern Uttar Pradesh.',
    url: 'https://rsandeepphotography.com',
    siteName: 'R Sandeep Photography',
    images: [
      {
        url: '/assets/images/founder/sandeep_camera_action.jpg',
        width: 1200,
        height: 630,
        alt: 'R Sandeep Lead Cinematographer',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Geo Meta Tags for Google Local Search */}
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Gorakhpur, Maharajganj, Siswa Bazar" />
        <meta name="geo.position" content="26.7606;83.3732" />
        <meta name="ICBM" content="26.7606, 83.3732" />

        {/* Structured JSON-LD Schema for Search Engines and AI Crawlers */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'PhotographyStudio',
              name: 'R Sandeep Photography',
              alternateName: 'R Sandeep Photography - A Complete Wedding Solution',
              image: 'https://rsandeepphotography.com/assets/images/founder/sandeep_camera_action.jpg',
              url: 'https://rsandeepphotography.com',
              telephone: ['+91-9415362280', '+91-9936814197', '+91-95513561713'],
              email: 'rsandeepphotography@gmail.com',
              priceRange: '₹6,500 - ₹91,000+',
              founder: {
                '@type': 'Person',
                name: 'R Sandeep',
                jobTitle: 'Founder & Lead Cinematographer',
                award: 'State Photography & Videography Association Recognition Awardee',
              },
              address: [
                {
                  '@type': 'PostalAddress',
                  streetAddress: 'Shop No. 3, Pratap Market near Ganesh Chowk, Golghar',
                  addressLocality: 'Gorakhpur',
                  addressRegion: 'Uttar Pradesh',
                  postalCode: '273001',
                  addressCountry: 'IN',
                },
                {
                  '@type': 'PostalAddress',
                  streetAddress: 'Siswa Bazar, Bijapur near Sugar Factory',
                  addressLocality: 'Maharajganj',
                  addressRegion: 'Uttar Pradesh',
                  postalCode: '273163',
                  addressCountry: 'IN',
                },
              ],
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 26.7606,
                longitude: 83.3732,
              },
              areaServed: [
                'Gorakhpur',
                'Maharajganj',
                'Siswa Bazar',
                'Padrauna',
                'Kushinagar',
                'Deoria',
                'Khalilabad',
                'Basti',
                'Varanasi',
                'Lucknow',
              ],
              sameAs: [
                'https://www.instagram.com/rsandeepphotography',
                'https://www.youtube.com/@rsandeepphotography9661',
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${cinzel.variable} ${cormorant.variable} ${jakarta.variable} bg-brand-charcoal text-brand-ivory font-sans antialiased selection:bg-brand-gold selection:text-brand-charcoal overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
