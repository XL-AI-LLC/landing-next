'use client';

export default function Nav({ onBookCall }: { onBookCall: () => void }) {
  return (
    <nav>
      <div className="container">
        <div className="nav-inner">
          <a href="#" className="nav-logo"><span>XL</span>AI</a>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#platforms">Platforms</a></li>
            <li><a href="#partners">Partners</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="nav-cta" onClick={onBookCall}>Book a Call</button>
        </div>
      </div>
    </nav>
  );
}
