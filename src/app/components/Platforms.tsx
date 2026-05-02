export default function Platforms() {
  return (
    <div className="platforms" id="platforms">
      <div className="container">
        <div className="platforms-label reveal">// Platforms &amp; Tools We Work With</div>
        <div className="platforms-row reveal">

          {/* Claude */}
          <div className="platform-badge" title="Claude">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="18" fill="#D97706"/>
              <text x="18" y="23" textAnchor="middle" fill="white" fontSize="13" fontFamily="serif" fontWeight="bold">Cl</text>
            </svg>
            <span>Claude</span>
          </div>

          {/* ChatGPT */}
          <div className="platform-badge" title="ChatGPT">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="18" fill="#10A37F"/>
              <path d="M26.6 14.7a6.4 6.4 0 00-.43-5.27 6.6 6.6 0 00-7.1-3.15 6.5 6.5 0 00-4.88-2.18 6.6 6.6 0 00-6.28 4.56 6.5 6.5 0 00-4.33 3.13 6.6 6.6 0 00.82 7.73 6.5 6.5 0 00.43 5.27 6.6 6.6 0 007.1 3.15 6.5 6.5 0 004.87 2.18 6.6 6.6 0 006.3-4.57 6.5 6.5 0 004.32-3.13 6.6 6.6 0 00-.82-7.72zm-9.7 13.6a4.9 4.9 0 01-3.13-1.12l.15-.09 5.2-3a.86.86 0 00.43-.74v-7.32l2.2 1.27a.08.08 0 01.04.06v6.07a4.92 4.92 0 01-4.9 4.87zm-10.52-4.5a4.9 4.9 0 01-.58-3.28l.15.09 5.2 3a.85.85 0 00.85 0l6.35-3.67v2.54a.08.08 0 01-.03.07L13 25.9a4.93 4.93 0 01-6.62-2.1zm-1.37-11.4a4.9 4.9 0 012.55-2.15v6.18a.85.85 0 00.43.74l6.35 3.66-2.2 1.27a.08.08 0 01-.08 0L7.3 18.9a4.93 4.93 0 01-.29-6.5zm18.08 4.22l-6.35-3.67 2.2-1.27a.08.08 0 01.08 0l4.76 2.75a4.92 4.92 0 01-.76 8.88v-6.18a.85.85 0 00-.43-.73l.5.22zm2.18-3.28l-.15-.09-5.2-3a.85.85 0 00-.85 0L13 13.93v-2.54a.08.08 0 01.03-.07L18.7 8.1a4.92 4.92 0 017.15 5.13l.42.11zm-13.76 4.53L9.3 16.62a.08.08 0 01-.04-.06v-6.07a4.92 4.92 0 018.04-3.78l-.15.09-5.2 3a.86.86 0 00-.43.74v7.32l-2.2-1.27.02.02zm1.2-2.57l2.83-1.63 2.83 1.63v3.26l-2.83 1.63-2.83-1.63v-3.26z" fill="white" transform="translate(4,4) scale(0.78)"/>
            </svg>
            <span>ChatGPT</span>
          </div>

          {/* Gemini */}
          <div className="platform-badge" title="Gemini">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="18" fill="#1A73E8"/>
              <path d="M18 8c0 5.52-4.48 10-10 10 5.52 0 10 4.48 10 10 0-5.52 4.48-10 10-10-5.52 0-10-4.48-10-10z" fill="white"/>
            </svg>
            <span>Gemini</span>
          </div>

          {/* AWS */}
          <div className="platform-badge" title="Amazon Web Services">
            <svg width="80" height="36" viewBox="0 0 80 36">
              <text x="0" y="22" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="22" fill="currentColor">aws</text>
              <path d="M9 28 Q22 35 35 28" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <polygon points="35,25 35,31 39,28" fill="#FF9900"/>
            </svg>
          </div>

          {/* Google Cloud */}
          <div className="platform-badge" title="Google Cloud">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg"
              alt="Google Cloud"
              style={{ height: 36, width: 'auto' }}
            />
          </div>

          {/* Lovable */}
          <div className="platform-badge" title="Lovable">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lovable.dev/img/logo/lovable-light-png.png"
              alt="Lovable"
              style={{ height: 28, width: 'auto' }}
            />
          </div>

          {/* Base44 */}
          <div className="platform-badge" title="Base44">
            <svg width="90" height="36" viewBox="0 0 90 36">
              <text x="0" y="26" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="26" fill="currentColor" letterSpacing="-1">base44</text>
            </svg>
          </div>

        </div>
      </div>
    </div>
  );
}
