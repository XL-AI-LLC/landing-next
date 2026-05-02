'use client';
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      ring.style.left = e.clientX + 'px';
      ring.style.top = e.clientY + 'px';
    };

    const enlarge = () => {
      cursor.style.width = '18px';
      cursor.style.height = '18px';
      ring.style.width = '56px';
      ring.style.height = '56px';
    };

    const shrink = () => {
      cursor.style.width = '10px';
      cursor.style.height = '10px';
      ring.style.width = '36px';
      ring.style.height = '36px';
    };

    document.addEventListener('mousemove', move);

    const targets = document.querySelectorAll('button, a, .service-card, .partner-card');
    targets.forEach(el => {
      el.addEventListener('mouseenter', enlarge);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      document.removeEventListener('mousemove', move);
      targets.forEach(el => {
        el.removeEventListener('mouseenter', enlarge);
        el.removeEventListener('mouseleave', shrink);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
