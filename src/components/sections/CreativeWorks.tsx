import React, { useEffect, useRef, useState } from "react";

const creativeProjects = [
  { title: "Wood on the Beach", imageUrl: "/creative/1.JPG", type: "Photography" },
  { title: "Mountain Photography", imageUrl: "/creative/2.JPG", type: "Photography" },
  { title: "Bird on a Wire", imageUrl: "/creative/3.JPG", type: "Photography" },
  { title: "Bird in the Tree", imageUrl: "/creative/4.JPG", type: "Photography" },
  { title: "Fishing Pole in the Sea", imageUrl: "/creative/5.JPG", type: "Photography" },
  { title: "Peacock on the Wall", imageUrl: "/creative/6.JPG", type: "Photography" },
  { title: "Sunset Streetlight", imageUrl: "/creative/7.JPG", type: "Photography" },
  { title: "Mosque Close-Up", imageUrl: "/creative/8.JPG", type: "Photography" },
  { title: "Red Mosque Front View", imageUrl: "/creative/9.JPG", type: "Photography" },
  { title: "Scooter Cat", imageUrl: "/creative/10.JPG", type: "Photography" },
  { title: "Golden Sunset Glow", imageUrl: "/creative/11.JPG", type: "Photography" },
  { title: "Groom’s Offer – Up to 40% Off", imageUrl: "/creative/16.png", type: "Design" },
  { title: "Elegance in Every Stitch", imageUrl: "/creative/13.png", type: "Design" },
  { title: "Happy Sinhala & Tamil New Year", imageUrl: "/creative/14.png", type: "Design" },
  { title: "Linen Trousers Restocked", imageUrl: "/creative/15.png", type: "Design" },
];

export const CreativeWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 5, creativeProjects.length));
  };

  const handleShowLess = () => {
    setVisibleCount(5);
  };

  return (
    <section id="creative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 shadow-lg border border-white/10 rounded-2xl">
        <h2 className="text-3xl sm:text-4xl font-light mb-12 tracking-tight pt-4">
          Creative <span className="text-[#6EC6B0] font-medium">Works</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 pb-6">
          {creativeProjects.slice(0, visibleCount).map((project, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden bg-[#262626] hover:scale-105 transition-transform duration-300 shadow-md"
            >
              <div className="aspect-[3/4] w-full bg-black">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <p className="text-xs uppercase text-[#6EC6B0] tracking-wide mb-1">
                  {project.type}
                </p>
                <h3 className="text-sm font-semibold text-white leading-snug">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pb-6">
          {visibleCount < creativeProjects.length ? (
            <button
              onClick={handleLoadMore}
              className="mt-2 px-6 py-2 bg-[#6EC6B0] text-black rounded-full font-semibold hover:bg-[#5bb19e] transition-colors"
            >
              View More
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="mt-2 px-6 py-2 bg-[#6EC6B0] text-black rounded-full font-semibold hover:bg-[#5bb19e] transition-colors"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
