'use client';

export default function Contact({ onBookCall }: { onBookCall: () => void }) {
  return (
    <section className="calendar-section" id="contact">
      <div className="container">
        <div className="calendar-inner">
          <div className="calendar-copy">
            <div className="section-label reveal">// Book a Call</div>
            <h2 className="section-title reveal">Let&apos;s Talk About Your AI Future.</h2>
            <p className="reveal">
              Whether you&apos;re just exploring AI or ready to deploy at scale, we&apos;ll meet you where you are. Schedule a free 30-minute strategy call with one of our partners.
            </p>
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <a href="tel:5167364590" className="partner-phone" style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="ph-icon">📞</div> Lyndsay — 516-736-4590
              </a>
              <a href="tel:9297074303" className="partner-phone" style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="ph-icon">📞</div> Steven — 929-707-4303
              </a>
            </div>
          </div>
          <div className="reveal">
            <div className="calendly-placeholder">
              <div style={{ fontSize: 48, marginBottom: 12 }}>📅</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.1em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: 24 }}>
                Schedule a free strategy call
              </div>
              <button className="cal-btn" onClick={onBookCall}>
                <span>Open Calendar</span>
                <span>→</span>
              </button>
              <div style={{ marginTop: 24, fontFamily: 'var(--mono)', fontSize: 11, color: 'rgba(107,107,136,0.6)', letterSpacing: '0.06em' }}>
                Powered by Google Meet
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
