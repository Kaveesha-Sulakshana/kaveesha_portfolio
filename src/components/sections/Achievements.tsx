import React, { useEffect, useRef } from 'react';
import { GraduationCapIcon, CameraIcon, VideoIcon, SmartphoneIcon, GamepadIcon } from 'lucide-react';
const achievements = [{
  icon: <GraduationCapIcon size={24} />,
  title: 'IIT Foundation',
  description: 'Completed Foundation in IIT with Merit Pass'
}, {
  icon: <CameraIcon size={24} />,
  title: 'Photography',
  description: 'Professional Photographer'
}, {
  icon: <VideoIcon size={24} />,
  title: 'Videography',
  description: 'Experienced Videographer'
}, {
  icon: <SmartphoneIcon size={24} />,
  title: 'Content Creation',
  description: 'Social Media Content Creator'
}, {
  icon: <GamepadIcon size={24} />,
  title: 'Gaming',
  description: 'Passionate Gamer'
}];
export const Achievements = () => {
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
  return <section className="py-16 md:py-24" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-light mb-16 tracking-tight text-center">
          Achievements & <span className="text-[#6EC6B0]">Activities</span>
        </h2>
        <div className="grid gap-6">
          {achievements.map((achievement, index) => <div key={index} className="bg-[#30382F]/30 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-[#30382F]/50">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-[#6EC6B0]/20 text-[#6EC6B0]">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400">{achievement.description}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};