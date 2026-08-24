import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://andreas-boehler-superhive.mackmedia.chatgpt.site'),
  title: 'Cinematic Blender Worlds — Andreas Boehler for Superhive',
  description: 'Andreas Boehler’s Superhive creator application: cinematic portfolio proof, 3D and VFX context, a focused first Blender product and a QA-ready delivery plan.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Andreas Boehler — Superhive Creator Application',
    title: 'Cinematic Blender Worlds — Andreas Boehler for Superhive',
    description: 'Cinematic portfolio proof, 3D and VFX context, a focused first Blender product and a QA-ready delivery plan.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Cinematic Blender Worlds — Andreas Boehler creator application' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cinematic Blender Worlds — Andreas Boehler for Superhive',
    description: 'Cinematic portfolio proof, 3D and VFX context, a focused first Blender product and a QA-ready delivery plan.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
