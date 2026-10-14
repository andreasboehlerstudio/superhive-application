'use client';
import Image from 'next/image';
import { useState } from 'react';
type Item = { image: string; label: string; caption: string };
export default function ProofGallery({ id, items, kind }: { id: string; items: Item[]; kind: 'interface' | 'presets' }) {
  const [selected, setSelected] = useState(0);
  const current = items[selected];
  return <div className={`proof-gallery ${kind}`}><div className="gallery-tabs" role="group" aria-label={kind === 'presets' ? 'Choose a rendered book preset' : 'Choose a product screenshot'}>{items.map((item, index) => <button key={item.label} type="button" onClick={() => setSelected(index)} aria-pressed={selected === index} aria-controls={`${id}-view`}><span>{String(index + 1).padStart(2, '0')}</span>{item.label}</button>)}</div><figure id={`${id}-view`}><a href={current.image} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${current.label}`} className="gallery-image"><Image src={current.image} alt={current.caption} width={kind === 'presets' ? 512 : 1800} height={kind === 'presets' ? 512 : 1060} sizes={kind === 'presets' ? '(max-width: 700px) 90vw, 600px' : '92vw'} /><span className="enlarge">View image ↗</span></a><figcaption aria-live="polite"><span>{String(selected + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span><p>{current.caption}</p></figcaption></figure></div>;
}
