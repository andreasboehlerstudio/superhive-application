'use client';

import { useState } from 'react';

const proposal = `I plan to create original, render-ready Blender asset packs for cinematic environments and shot design. The first release, Cinematic Scene Systems / Volume 01, will combine modular scene foundations, original materials, lighting setups, camera and composition starting points, and fully built example scenes for filmmakers, motion designers, and 3D artists. Products will ship as clean, current-version .blend files with packed textures, logical English naming, Asset Browser metadata, five or more 2:1 product renders, written and video documentation, and timely customer support. My initial products will sit in the scenes and environments, materials, and lighting categories, priced around $34–$59 depending on scope. Every sellable asset will be original, IP-safe, and built for redistribution.`;

export default function CopyProposal() {
  const [copied, setCopied] = useState(false);

  async function copyText() {
    await navigator.clipboard.writeText(proposal);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  return (
    <article className="proposal-card">
      <span>Product proposal / English</span>
      <p>{proposal}</p>
      <button type="button" onClick={copyText} aria-live="polite">
        {copied ? 'Copied to clipboard ✓' : 'Copy application text'}
      </button>
    </article>
  );
}
