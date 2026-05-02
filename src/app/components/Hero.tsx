'use client';

export default function Hero({ onBookCall }: { onBookCall: () => void }) {
  return (
    <section className="hero">
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />
      <div className="container">
        <div className="hero-inner">
          <div className="hero-tag">// AI Consulting &amp; Integration — xlai.live</div>
          <h1 className="hero-title">
            The <span className="xl">XL</span><br />
            Intelligence<br />
            Advantage.
          </h1>
          <p className="hero-sub">
            We help businesses and enterprises unlock the full power of modern AI — from strategy to deployment of Claude, ChatGPT, Gemini, and beyond.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={onBookCall}>
              <span>Schedule a Call</span>
              <span>→</span>
            </button>
            <button
              className="btn-ghost"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Explore Services</span>
              <span>↓</span>
            </button>
          </div>
        </div>
      </div>
      <div className="hero-scroll">Scroll to explore</div>
    </section>
  );
}
