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
  Hi there,<br />
  I’m <span className="text-white font-semibold">Kaveesha Sulakshana</span> — an undergraduate Computer Science student at the University of Westminster, fueled by a passion for <span className="text-[#6EC6B0]">technology, creativity,</span> and <span className="text-[#6EC6B0]">innovation</span>.
  <br /><br />
  While my specialty lies in <span className="text-[#6EC6B0]">front-end development</span>, I’m well-versed across the full stack — building modern, responsive, and user-first applications using tools like <span className="text-[#6EC6B0]">Flutter, React, Next.js, Dart</span>, and more.
  <br /><br />
  But I'm more than just a developer. I'm a <span className="text-[#6EC6B0]">storyteller</span> — a photographer, videographer, and social content creator. I blend bold design thinking with technical mastery to craft experiences that are as engaging as they are functional.
  <br /><br />
  With a strong foundation in development and digital design (Adobe Creative Suite), I create products that don't just work — they <span className="text-white font-medium italic">stand out</span>.
  <br /><br />
  Let’s build something extraordinary — where <span className="text-[#6EC6B0] font-bold">creativity</span> meets <span className="text-[#6EC6B0] font-bold">technology</span>.
</p>



        <div className="mt-8">
          <a href="/KAVEESHA_RESUME.pdf" download className="inline-flex items-center px-6 py-3 bg-[#6EC6B0]/20 text-[#6EC6B0] rounded-lg hover:bg-[#6EC6B0]/30 transition-all duration-300 transform hover:scale-105">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>;
};