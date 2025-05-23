import React, { useEffect, useState } from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { AnimatedCursor } from './components/AnimatedCursor';
import { Header } from './components/Header';
import { Identity } from './components/sections/Identity';
import { AboutMe } from './components/sections/AboutMe';
import { Tools } from './components/sections/Tools';
import { Projects } from './components/sections/Projects';
import { Achievements } from './components/sections/Achievements';
import { FacebookPages } from './components/sections/FacebookPages';
import { Contact } from './components/sections/Contact';
import { Philosophy } from './components/sections/Philosophy';
import { Footer } from './components/Footer';
import { SplashScreen } from './components/SplashScreen';
import { AudioPlayer } from './components/AudioPlayer';


export function App() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);
  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }
  return <div className="relative bg-black text-white min-h-screen font-light antialiased">
      <AnimatedBackground />
      <AnimatedCursor />
      <Header />
      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <Identity />
        <AboutMe />
        <Tools />
        <Projects />
        <Achievements />
        <FacebookPages />
        <Philosophy />
        <Contact />
        <AudioPlayer />
      </main>
      <Footer />
    </div>;
}