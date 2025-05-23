import React, { useEffect, useState } from 'react';
export const SplashScreen = ({
  onComplete
}: {
  onComplete: () => void;
}) => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); // Wait for fade out animation
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);
  return <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
          <span className="text-[#6EC6B0]">Kaveesha</span> Sulakshana
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl px-4">
          Designing Calm Interfaces, Developing Bold Ideas
        </p>
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-1 h-12 relative">
          <div className="absolute inset-0 bg-[#6EC6B0] animate-pulse rounded-full"></div>
        </div>
      </div>
    </div>;
};