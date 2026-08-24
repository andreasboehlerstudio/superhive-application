import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cinematic Blender Worlds — Andreas Boehler for Superhive',
  description: 'Andreas Boehler’s Superhive creator application: cinematic portfolio proof, 3D and VFX context, a focused first Blender product and a QA-ready delivery plan.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
