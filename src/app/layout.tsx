import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'XLAI — AI Consulting & Integration',
  description: 'We help businesses and enterprises unlock the full power of modern AI — Claude, ChatGPT, Gemini, and beyond.',
  openGraph: {
    title: 'XLAI — AI Consulting & Integration',
    description: 'Strategic AI consulting and deployment for businesses ready to lead.',
    url: 'https://xlai.live',
    siteName: 'XLAI',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;1,300&display=swap"
          rel="stylesheet"
        />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
