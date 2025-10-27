import React, { useEffect, useRef } from 'react';
import { DnaAnimation } from '../DnaAnimation';
import {
  MailIcon,
  PhoneIcon,
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  SendIcon
} from 'lucide-react';

export const Identity = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GithubIcon size={30} />,
      url: 'https://github.com/Kaveesha-Sulakshana'
    },
    {
      name: 'LinkedIn',
      icon: <LinkedinIcon size={30} />,
      url: 'https://www.linkedin.com/in/kaveesha-sulakshana-6b486b310/'
    },
    {
      name: 'Instagram',
      icon: <InstagramIcon size={30} />,
      url: 'https://www.instagram.com/kavee_zz_a'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      {
        threshold: 0.1
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-start pt-20 opacity-0 transition-opacity duration-1000 relative overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        <div className="max-w-xl mt-20">
          <div className="inline-block mb-2 px-3 py-1 bg-[#30382F] text-[#6EC6B0] text-xs uppercase tracking-widest rounded-full">
            Designer & Developer
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light mb-4 tracking-tight">
            Kaveesha <span className="text-[#6EC6B0] font-bold">SULAKSHANA</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-8">
            UI/UX Designer & Frontend Developer
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-8">
            Driven by design and powered by code, I create digital experiences that reflect the user’s vision and feel effortlessly natural. Every interface I build is crafted with purpose balancing creativity, clarity, and seamless interaction.
          </p>

          <div className="flex gap-4">
            {socialLinks.map(link => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#6EC6B0] transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block h-[600px] overflow-hidden">
          <DnaAnimation />
        </div>
      </div>
    </section>
  );
};
