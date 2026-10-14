import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const whyte = localFont({
  src: '../public/fonts/WhyteInktrap-Book.woff2',
  variable: '--font-whyte',
  display: 'swap',
});

const monaSans = localFont({
  src: [
    { path: '../public/fonts/MonaSans-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/MonaSans-SemiBold.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-mona-sans',
  display: 'swap',
});

const siteUrl = 'https://superhive.andreasboehler.com/';
const socialImage = `${siteUrl}media/luxroster-bulk.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Original Blender Tools & 3D Work — Andreas Boehler',
  description: 'Explore LuxRoster, Book Rig Studio and Origin Toolkit, with real product interfaces, nine rendered book presets, cinematic 3D work and two After Effects scripts by Andreas Boehler.',
  alternates: { canonical: siteUrl },
  icons: { icon: `${siteUrl}favicon.svg` },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Andreas Boehler — Superhive Creator Application',
    title: 'I Build Tools. And Worlds. — Andreas Boehler',
    description: 'Three original Blender add-ons, real interfaces, procedural books and cinematic 3D. Superhive creator portfolio.',
    images: [{ url: socialImage, width: 1800, height: 1060, alt: 'LuxRoster running in Blender — original tool by Andreas Boehler' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'I Build Tools. And Worlds. — Andreas Boehler',
    description: 'Original Blender add-ons, actual product evidence and cinematic 3D work.',
    images: [socialImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${whyte.variable} ${monaSans.variable}`}>{children}</body>
    </html>
  );
}
