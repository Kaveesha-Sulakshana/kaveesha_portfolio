import React, { useEffect, useRef } from 'react';
import { HeartIcon, ZapIcon, LightbulbIcon } from 'lucide-react';
export const Philosophy = () => {
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
  return <section ref={sectionRef} className="py-20 opacity-0 transition-opacity duration-1000">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-light mb-16 tracking-tight">
          Design <span className="text-[#6EC6B0]">Philosophy</span>
        </h2>
        <p className="text-xl sm:text-2xl leading-relaxed text-gray-300 mb-12">
          "I believe in creating digital experiences that are beautiful,
          functional, and user-first. Simplicity, structure, and empathy guide
          my design and development process."
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-[#30382F]/30 rounded-lg">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#6EC6B0]/20 text-[#6EC6B0]">
              <HeartIcon size={24} />
            </div>
            <h3 className="text-lg font-medium mb-2">User-Centered</h3>
            <p className="text-gray-400">
              Designs that prioritize human needs and solve real problems
            </p>
          </div>
          <div className="p-6 bg-[#30382F]/30 rounded-lg">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#6EC6B0]/20 text-[#6EC6B0]">
              <ZapIcon size={24} />
            </div>
            <h3 className="text-lg font-medium mb-2">Functional</h3>
            <p className="text-gray-400">
              Seamless experiences that work flawlessly across all devices
            </p>
          </div>
          <div className="p-6 bg-[#30382F]/30 rounded-lg">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#6EC6B0]/20 text-[#6EC6B0]">
              <LightbulbIcon size={24} />
            </div>
            <h3 className="text-lg font-medium mb-2">Innovative</h3>
            <p className="text-gray-400">
              Creative solutions that stand out while maintaining simplicity
            </p>
          </div>
        </div>
      </div>
    </section>;
};