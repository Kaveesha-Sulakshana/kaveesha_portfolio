import React from 'react';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="py-8 border-t border-[#30382F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-medium tracking-wider text-white">
              K<span className="text-[#6EC6B0]">S</span>Z
            </div>
          </div>
          <div className="text-sm text-gray-400">
            © {currentYear} Kaveesha Sulakshana. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            <button onClick={() => window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })} className="text-sm text-[#6EC6B0] hover:text-white transition-colors">
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>;
};