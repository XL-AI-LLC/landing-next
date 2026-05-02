const partners = [
  {
    name: 'Lyndsay Goldfarb',
    role: 'Co-Founder & Partner',
    phone: '516-736-4590',
    tel: '5167364590',
    linkedin: 'https://www.linkedin.com/in/lyndsay-goldfarb/',
  },
  {
    name: 'Steven Castro',
    role: 'Co-Founder & Partner',
    phone: '929-707-4303',
    tel: '9297074303',
    linkedin: 'https://linkedin.com/in/castrosteven',
  },
];

export default function Partners() {
  return (
    <section className="partners-section" id="partners">
      <div className="container">
        <div className="section-label reveal">// Our Partners</div>
        <h2 className="section-title reveal">Meet the Team Behind XLAI.</h2>
        <div className="partners-grid">
          {partners.map((p) => (
            <div className="partner-card reveal" key={p.name}>
              <div className="partner-name">{p.name}</div>
              <div className="partner-role">{p.role}</div>
              <a href={`tel:${p.tel}`} className="partner-phone">
                <div className="ph-icon">📞</div>
                <span>{p.phone}</span>
              </a>
              <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="partner-phone" style={{ marginTop: 14 }}>
                <div className="ph-icon">in</div>
                <span>LinkedIn</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
