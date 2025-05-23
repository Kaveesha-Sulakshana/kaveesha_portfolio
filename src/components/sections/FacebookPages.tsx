import React, { useEffect, useRef } from 'react';
import { ExternalLinkIcon, FacebookIcon } from 'lucide-react';
type FacebookPage = {
  name: string;
  role: string;
  image: string;
  url: string;
};
export const FacebookPages = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const pages: FacebookPage[] = [{
    name: 'Kaveesha Sulakshana Photography',
    role: 'Owner',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    url: 'https://www.facebook.com/profile.php?id=100083942802729'
  }, {
    name: 'Nilantha Designers',
    role: 'Digital Marketing Manager',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    url: 'https://www.facebook.com/share/19W1oLgjEM'
  }];
  return <section id="pages" ref={sectionRef} className="min-h-screen py-20 opacity-0 transition-opacity duration-1000">
      <h2 className="text-3xl sm:text-4xl font-light mb-16 tracking-tight">
        Facebook <span className="text-[#6EC6B0]">Pages</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pages.map((page, index) => <div key={index} className="group relative overflow-hidden rounded-lg bg-[#30382F]/20 h-[300px]">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110" style={{
          backgroundImage: `url(${page.image})`
        }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 w-full p-6">
              <div className="flex items-center mb-3">
                <FacebookIcon size={20} className="text-[#6EC6B0] mr-2" />
                <span className="text-sm text-gray-300">{page.role}</span>
              </div>
              <h3 className="text-xl font-medium mb-4 text-white">
                {page.name}
              </h3>
              <a href={page.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-[#6EC6B0]/20 text-[#6EC6B0] rounded-full hover:bg-[#6EC6B0]/30 transition-colors">
                Visit Page <ExternalLinkIcon size={16} className="ml-2" />
              </a>
            </div>
          </div>)}
      </div>
    </section>;
};