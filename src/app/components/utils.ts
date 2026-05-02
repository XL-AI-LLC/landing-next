'use client';
import { useEffect } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Calendly: any;
  }
}

export function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function openCal() {
  if (typeof window !== 'undefined' && window.Calendly) {
    window.Calendly.initPopupWidget({ url: 'https://calendly.com/xlai' });
  }
}
