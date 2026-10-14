'use client';

import { useRef, useState } from 'react';

const proposal = `I create original Blender add-ons for lighting, object workflow and procedural modeling/animation. My proposed first submission is LuxRoster 1.0, an existing Blender-native light manager for Cycles and Eevee. The portfolio shows its real interface, bulk editing, visibility-preserving Solo and World/HDRI controls. I also present Origin Toolkit 1.1, a packaged origin-placement tool with 27 Local/World anchors, and Book Rig Studio 0.26, a procedural book generator with real page geometry, nine rendered presets and a portable animation-control workflow. Book Rig Studio currently targets Blender 4.2–5.1, with release QA documented in Blender 5.1.2; it does not claim Blender 5.2 support. The proposed categories are lighting/workflow, object tools and modeling/animation. Indicative prices are US$9–19 for LuxRoster, US$5–9 for Origin Toolkit and US$29–49 for Book Rig Studio. Blender add-ons use GPL-3.0-or-later licensing. Each submission will include an installable package, written installation and usage instructions, accurate compatibility, original feature imagery and clear limitations. Client productions and the separate After Effects tools are portfolio context only and are not part of these Blender product downloads.`;

export default function CopyProposal() {
  const [status, setStatus] = useState('');
  const paragraph = useRef<HTMLParagraphElement>(null);

  async function copyText() {
    try {
      await navigator.clipboard.writeText(proposal);
      setStatus('Copied to clipboard.');
    } catch {
      if (paragraph.current) {
        const range = document.createRange();
        range.selectNodeContents(paragraph.current);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
      setStatus('Text selected. Press Ctrl+C or ⌘C to copy it.');
    }
  }

  return (
    <article className="proposal-card">
      <span>Product proposal / English / Ready to copy</span>
      <p ref={paragraph}>{proposal}</p>
      <button type="button" onClick={copyText}>Copy application text ↗</button>
      <small className="copy-status" role="status">{status}</small>
    </article>
  );
}
