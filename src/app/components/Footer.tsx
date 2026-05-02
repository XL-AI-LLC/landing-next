export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <a href="#" className="footer-logo"><span>XL</span>AI</a>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/lyndsay-goldfarb/" target="_blank" rel="noopener noreferrer" className="footer-link">
              Lyndsay / LinkedIn
            </a>
            <a href="https://linkedin.com/in/castrosteven" target="_blank" rel="noopener noreferrer" className="footer-link">
              Steven / LinkedIn
            </a>
          </div>
          <div className="footer-meta">
            <div><a href="http://xlai.live">xlai.live</a></div>
            <div style={{ marginTop: 6 }}>© 2025 XLAI. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
