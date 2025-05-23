import React, { useEffect, useState, useRef } from 'react';
import { ExternalLinkIcon, SmartphoneIcon } from 'lucide-react';
import DiceImage from './Three_six-sided_dice.jpg';

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
};
export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
  const projects: Project[] = [{
    title: 'Tank Track',
    description: 'Smart septic tank level monitoring mobile app',
    tech: ['Flutter', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    link: 'https://github.com/Kaveesha-2003/tanktrack-project-frontend'
  },  {
    title: 'Movie Application',
    description: 'Movie search and save app for Android',
    tech: ['Kotlin', 'TMDB API'],
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    link: 'https://github.com/Kaveesha-2003/Movie_App'
  },{
    title: 'Dice Game',
    description: 'Fun and responsive mobile game',
    tech: ['Kotlin', 'Android SDK'],
    image: DiceImage,
    link: 'https://github.com/Kaveesha-2003/DiceFight'
  }];
  return <section id="projects" ref={sectionRef} className="min-h-screen py-20 opacity-0 transition-opacity duration-1000">
      <h2 className="text-3xl sm:text-4xl font-light mb-16 tracking-tight">
        Featured <span className="text-[#6EC6B0]">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => <div key={index} className="relative group overflow-hidden rounded-lg bg-[#30382F]/20 h-[400px] transition-all duration-500 ease-out" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110" style={{
          backgroundImage: `url(${project.image})`
        }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70" />
            <div className="absolute bottom-0 left-0 w-full p-6 transform transition-transform duration-500 ease-out">
              <h3 className="text-xl font-medium mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => <span key={techIndex} className="px-2 py-1 bg-[#6EC6B0]/20 text-[#6EC6B0] text-xs rounded">
                    {tech}
                  </span>)}
              </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-[#6EC6B0] hover:underline"
                >
                  View Project <ExternalLinkIcon size={16} className="ml-1" />
                </a>

            </div>
            {hoveredIndex === index && <div className="absolute top-4 right-4 p-2 bg-[#6EC6B0] rounded-full text-black">
                <SmartphoneIcon size={20} />
              </div>}
          </div>)}
      </div>
      <div className="mt-12 text-center">
        <button className="px-6 py-3 border border-[#6EC6B0] text-[#6EC6B0] rounded-full hover:bg-[#6EC6B0]/10 transition-colors">
          View More Projects
        </button>
      </div>
    </section>;
};