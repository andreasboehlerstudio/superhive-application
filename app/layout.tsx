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
const socialImage = `${siteUrl}og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Cinematic Blender Worlds — Andreas Boehler for Superhive',
  description: 'Andreas Boehler’s Superhive creator application: cinematic portfolio proof, 3D and VFX context, a focused first Blender product and a QA-ready delivery plan.',
  icons: { icon: `${siteUrl}favicon.svg` },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Andreas Boehler — Superhive Creator Application',
    title: 'Cinematic Blender Worlds — Andreas Boehler for Superhive',
    description: 'Cinematic portfolio proof, 3D and VFX context, a focused first Blender product and a QA-ready delivery plan.',
    images: [{ url: socialImage, width: 1200, height: 630, alt: 'Cinematic Blender Worlds — Andreas Boehler creator application' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cinematic Blender Worlds — Andreas Boehler for Superhive',
    description: 'Cinematic portfolio proof, 3D and VFX context, a focused first Blender product and a QA-ready delivery plan.',
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
