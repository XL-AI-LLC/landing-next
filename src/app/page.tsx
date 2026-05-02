'use client';
import { useScrollReveal, openCal } from './components/utils';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Services from './components/Services';
import Platforms from './components/Platforms';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Cursor />
      <Nav onBookCall={openCal} />
      <Hero onBookCall={openCal} />
      <Ticker />
      <Services />
      <Platforms />
      <Partners />
      <Contact onBookCall={openCal} />
      <Footer />
    </>
  );
}
