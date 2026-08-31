import Image from 'next/image';
import type { CSSProperties } from 'react';
import CopyProposal from './copy-proposal';

const asset = (path: string) => path;

const disciplines = [
  'Motion design',
  '3D',
  'Virtual production',
  'Camera & light',
  'VFX',
  'Art direction',
];

const productionWork = [
  {
    image: asset('/media/work-djbobo.jpg'),
    width: 1600,
    height: 900,
    alt: 'DJ BoBo in front of a golden temple environment from The Great Adventure',
    type: 'Commercial / Tour trailer',
    title: 'DJ BoBo — The Great Adventure',
    note: 'Producer · VFX · 3D · AI-assisted post-production',
    href: 'https://andreasboehler.com/dj-bobo-evolut30n-tour.html',
  },
  {
    image: asset('/media/work-europapark.jpg'),
    width: 1280,
    height: 720,
    alt: 'Golden Europa-Park anniversary mark over a night scene and fireworks',
    type: 'Entertainment / Campaign',
    title: '50 Years Europa-Park',
    note: 'Post-production · CGI logo animation · VFX · camera',
    href: 'https://andreasboehler.com/50-jahre-europa-park.html',
  },
  {
    image: asset('/media/work-tnw.jpg'),
    width: 1600,
    height: 900,
    alt: 'TNW mobility website displayed on a tablet and smartphone',
    type: 'Digital experience / Film content',
    title: 'TNW Website',
    note: 'Web design · visual development · moving image content',
    href: 'https://andreasboehler.com/tnw-website.html',
  },
];

export default function Home() {
  const textureStyle = {
    '--film-noise-url': `url("${asset('/media/film-noise.png')}")`,
  } as CSSProperties;

  return (
    <main id="top" style={textureStyle}>
      <section className="hero" aria-labelledby="hero-title">
        <Image
          className="hero-media"
          src={asset('/media/brand-hero.webp')}
          alt="Andreas Boehler working with a cinematic camera setup"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="film-grain" aria-hidden="true" />

        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Andreas Boehler — back to top">
            <span>ANDREAS</span><strong>BOEHLER</strong>
          </a>
          <nav aria-label="Application sections">
            <a href="#position">Position</a>
            <a href="#work">Work</a>
            <a href="#product">Product</a>
            <a href="#proposal">Proposal</a>
          </nav>
          <a className="header-cta" href="https://andreasboehler.com/works.html" target="_blank" rel="noreferrer">
            Portfolio <span aria-hidden="true">↘</span>
          </a>
        </header>

        <div className="hero-content">
          <p className="hero-kicker">Superhive creator application / 2026</p>
          <h1 id="hero-title"><span>Cinematic</span><span>Blender worlds.</span></h1>
          <div className="hero-bottom">
            <p>Creating moments,<br />not just assets.</p>
            <dl>
              <div><dt>Focus</dt><dd>Atmosphere · Light · Shot design</dd></div>
              <div><dt>Based</dt><dd>Freiburg · Basel · DACH</dd></div>
            </dl>
          </div>
        </div>

        <div className="hero-counter" aria-hidden="true">01 / 06</div>
      </section>

      <div className="discipline-rail" aria-label="Relevant creative disciplines">
        {disciplines.map((discipline, index) => (
          <span key={discipline}><b>{String(index + 1).padStart(2, '0')}</b>{discipline}</span>
        ))}
      </div>

      <section className="position section light" id="position" aria-labelledby="position-title">
        <div className="section-index">[01] Position</div>
        <div className="position-layout">
          <div className="section-heading">
            <p className="eyebrow">From feeling to a usable frame</p>
            <h2 id="position-title">A filmmaker&apos;s eye.<br /><span>A product builder&apos;s intent.</span></h2>
          </div>
          <div className="position-copy">
            <p className="lead">
              My edge for Superhive is not “another asset pack.” It is more than ten years
              of camera, light, VFX, motion, 3D and art direction translated into reusable
              Blender systems for other visual storytellers.
            </p>
            <p>
              My public portfolio is broader than Blender because my work lives in real
              productions. The product direction is precise: cinematic scene foundations
              that help artists arrive at a stronger frame faster — while keeping creative
              control.
            </p>
            <div className="entry-links" aria-label="Portfolio evidence">
              <a href="https://andreasboehler.com/works.html" target="_blank" rel="noreferrer">Works <span>↘</span></a>
              <a href="https://andreasboehler.com/services.html#ki-creative-technology" target="_blank" rel="noreferrer">3D & virtual production <span>↘</span></a>
              <a href="https://www.behance.net/andyboehler" target="_blank" rel="noreferrer">Behance <span>↘</span></a>
            </div>
          </div>
        </div>
        <div className="brand-strip" aria-label="Selected brands and contexts">
          <span>Selected contexts</span>
          <p>Europa-Park</p><p>Warner Bros.</p><p>SAT.1</p><p>Adobe</p><p>BMW</p><p>Roche</p><p>Novartis</p>
        </div>
      </section>

      <section className="work section dark" id="work" aria-labelledby="work-title">
        <div className="section-index">[02] Portfolio proof</div>
        <div className="section-heading work-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title">The frame has to<br /><span>sell the world.</span></h2>
          </div>
          <p className="section-note">Real projects from my portfolio. They demonstrate visual judgement, technical range and finish — not marketplace products for resale.</p>
        </div>

        <div className="work-grid">
          {productionWork.map((project, index) => (
            <a className="work-card" href={project.href} target="_blank" rel="noreferrer" key={project.title}>
              <figure>
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={project.width}
                  height={project.height}
                  sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 34vw"
                />
                <figcaption>{String(index + 1).padStart(2, '0')} / 03</figcaption>
              </figure>
              <p>{project.type}</p>
              <h3>{project.title}</h3>
              <small>{project.note}</small>
              <span className="card-arrow" aria-hidden="true">↘</span>
            </a>
          ))}
        </div>
      </section>

      <section className="bridge section light" aria-labelledby="bridge-title">
        <div className="section-index">[03] Why this translates</div>
        <div className="bridge-layout">
          <div className="bridge-title">
            <p>Moment</p><p>Motion</p><p>Meaning</p>
          </div>
          <div className="evidence-list">
            <h2 id="bridge-title">What I bring to a Superhive shop</h2>
            <article><span>01</span><div><h3>Cinematic judgement</h3><p>Camera, light, composition and atmosphere are the product advantage — not surface decoration.</p></div></article>
            <article><span>02</span><div><h3>3D + VFX context</h3><p>3D, motion design, CGI, VFX and virtual production already sit inside my wider production practice.</p></div></article>
            <article><span>03</span><div><h3>Systems thinking</h3><p>I build repeatable looks, workflows and visual systems that can become useful tools for other artists.</p></div></article>
            <article><span>04</span><div><h3>Professional delivery</h3><p>Clear presentation, quality control, documentation and support are part of the product itself.</p></div></article>
          </div>
        </div>
      </section>

      <section className="product section dark" id="product" aria-labelledby="product-title">
        <div className="section-index">[04] First product direction</div>
        <div className="section-heading product-heading">
          <p className="eyebrow">A proposal with a clear shelf position</p>
          <h2 id="product-title">Cinematic scene<br /><span>systems / Volume 01</span></h2>
        </div>

        <div className="product-layout">
          <div className="product-poster" aria-label="Concept card for Cinematic Scene Systems, Volume 01">
            <div className="poster-top"><span>Andreas Boehler</span><span>System / 001</span></div>
            <div className="poster-aperture" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
            <h3>From<br />feeling<br />to frame.</h3>
            <div className="poster-bottom"><span>Blender</span><span>Scene · Light · Camera</span><span>2026</span></div>
          </div>

          <div className="product-spec">
            <p className="product-summary">
              A modular, render-ready Blender scene system for filmmakers, motion designers
              and 3D artists who want cinematic depth without rebuilding every shot from zero.
            </p>
            <dl>
              <div><dt>Product type</dt><dd>Original Blender asset pack</dd></div>
              <div><dt>Categories</dt><dd>Scenes & environments · materials · lighting</dd></div>
              <div><dt>Price range</dt><dd>$34–$59, depending on final scope</dd></div>
              <div><dt>Audience</dt><dd>Filmmakers · motion designers · 3D generalists</dd></div>
            </dl>
            <div className="in-the-box">
              <h3>Planned package</h3>
              <ul>
                <li><b>06</b> modular atmospheric scene foundations</li>
                <li><b>18</b> original surface and material variants</li>
                <li><b>12</b> camera and composition starting points</li>
                <li><b>03</b> lighting families with controlled variations</li>
                <li><b>05+</b> finished example scenes and 2:1 product renders</li>
                <li><b>01</b> concise video quick-start plus written guide</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="standards section light" id="standards" aria-labelledby="standards-title">
        <div className="section-index">[05] Delivery standard</div>
        <div className="standards-layout">
          <div className="section-heading">
            <p className="eyebrow">Built for QA, not only a beauty render</p>
            <h2 id="standards-title">Ready to open.<br /><span>Ready to render.</span></h2>
          </div>
          <div className="checklist">
            <p><span>01</span> Current official Blender version at release</p>
            <p><span>02</span> Logical English naming throughout</p>
            <p><span>03</span> Packed textures and clean dependencies</p>
            <p><span>04</span> Asset Browser metadata and useful previews</p>
            <p><span>05</span> Render-ready example scenes</p>
            <p><span>06</span> Original, IP-safe commercial content only</p>
            <p><span>07</span> Five or more 2:1 product images</p>
            <p><span>08</span> Clear docs and support within 72 hours</p>
          </div>
        </div>
        <div className="ip-note">
          <b>Marketplace promise</b>
          <p>Client and portfolio work shown here is evidence of craft only; it will never be packaged or resold. Every commercial release will be newly created, original and cleared for redistribution.</p>
          <a href="https://support.superhivemarket.com/article/253-general-product-guidelines-for-uploading-products" target="_blank" rel="noreferrer">Superhive product guidelines ↘</a>
        </div>
      </section>

      <section className="proposal section dark" id="proposal" aria-labelledby="proposal-title">
        <div className="section-index">[06] Paste-ready proposal</div>
        <div className="proposal-layout">
          <div className="section-heading">
            <p className="eyebrow">Clear, thorough and to the point</p>
            <h2 id="proposal-title">The application<br /><span>in one paragraph.</span></h2>
          </div>
          <CopyProposal />
        </div>
      </section>

      <section className="final-cta section light" aria-labelledby="final-title">
        <p className="eyebrow">Next scene</p>
        <h2 id="final-title">Let the work earn<br /><span>the second look.</span></h2>
        <p>I am ready to turn this direction into a clean first product and put it through Superhive quality review.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="https://andreasboehler.com/works.html" target="_blank" rel="noreferrer">View full portfolio <span aria-hidden="true">↘</span></a>
          <a className="button button-outline" href="#proposal">Read proposal <span aria-hidden="true">↑</span></a>
        </div>
      </section>

      <footer>
        <a className="wordmark" href="#top"><span>ANDREAS</span><strong>BOEHLER</strong></a>
        <p>Superhive creator application / 2026</p>
        <a href="https://andreasboehler.com/" target="_blank" rel="noreferrer">andreasboehler.com ↘</a>
      </footer>
    </main>
  );
}
