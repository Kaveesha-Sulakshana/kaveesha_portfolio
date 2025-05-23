import React, { useEffect, useState } from 'react';
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-xl font-medium tracking-wider text-white">
          K<span className="text-[#6EC6B0]">S</span>Z
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {['about', 'tools', 'projects', 'pages', 'contact'].map(item => <button key={item} onClick={() => scrollToSection(item)} className="text-sm uppercase tracking-wider text-gray-300 hover:text-[#6EC6B0] transition-colors">
              {item}
            </button>)}
        </div>
        <button className="md:hidden text-white focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="sr-only">Open menu</span>
          <div className={`w-6 h-0.5 bg-current transform transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-current my-1.5 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-current transform transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden fixed inset-0 bg-black z-30 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {['about', 'tools', 'projects', 'pages', 'contact'].map(item => <button key={item} onClick={() => scrollToSection(item)} className="text-lg uppercase tracking-wider text-gray-300 hover:text-[#6EC6B0] transition-colors">
              {item}
            </button>)}
        </div>
      </div>
    </header>;
};