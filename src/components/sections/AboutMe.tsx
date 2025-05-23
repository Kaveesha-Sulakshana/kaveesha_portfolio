import React from 'react';
import { UserIcon } from 'lucide-react';

export const AboutMe = () => {
  return <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#6EC6B0]/20 text-[#6EC6B0] mr-4">
            <UserIcon size={24} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-light">About Me</h2>
        </div>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Hi, I'm Kaveesha — a UI/UX Designer and Frontend Developer passionate
          about blending clean design with powerful functionality. I love
          creating elegant digital experiences that feel intuitive and human.
        </p>
        <div className="mt-8">
          <a href="/Kaveesha_Resume.pdf" download className="inline-flex items-center px-6 py-3 bg-[#6EC6B0]/20 text-[#6EC6B0] rounded-lg hover:bg-[#6EC6B0]/30 transition-all duration-300 transform hover:scale-105">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>;
};