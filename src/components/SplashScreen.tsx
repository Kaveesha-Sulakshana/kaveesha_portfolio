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
      setTimeout(onComplete, 1000);
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-center">
        {/* ✅ Logo with proper size and margin */}
<img
  src="/sinhala_logo/s_logo.png"
  alt="Logo"
  className="w-[150px] h-auto mx-auto mb-2"
/>


        {/* ✅ Tighter spacing for sentence */}
        <p className="text-base md:text-lg text-gray-400 px-2 mt-1">
          <span className="text-[#6EC6B0] font-bold">Designing</span> Calm Interfaces, <span className="text-[#6EC6B0] font-bold">Developing</span> Bold Ideas
          
        </p>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-1 h-12 relative">
          <div className="absolute inset-0 bg-[#6EC6B0] animate-pulse rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
