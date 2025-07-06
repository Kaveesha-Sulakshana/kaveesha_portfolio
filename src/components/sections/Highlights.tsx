import { useState, useEffect } from "react";

const imageList = [
  {
    src: "/Hilights/image1.JPG",
    title: "VisionX Event @IIT",
    description: "Memorable evening with industry leaders.",
  },
  {
    src: "/Hilights/image2.jpg",
    title: "Cutting Edge @IIT",
    description: "Hands-on coding experience with students.",
  },
  {
    src: "/Hilights/image6.png",
    title: "Hackathon Event",
    description: "Creative coding marathon.",
  },
  {
    src: "/Hilights/image5.jpg",
    title: "Tank Track Team",
    description: "Team Members at their best.",
  },
];

export default function Highlights() {
  const [current, setCurrent] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imageList.length);
    }, 4000); // 4 seconds calm transition

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="p-6 text-center">
       <h2 className="text-3xl sm:text-4xl font-light mb-16 tracking-tight">
        Captured  <span className="text-[#6EC6B0]">Milestones</span>
      </h2>
      <div
        className="relative w-full max-w-4xl h-96 mx-auto rounded-xl overflow-hidden shadow-lg cursor-pointer"
        onClick={() =>
          setCurrent((prev) => (prev + 1) % imageList.length)
        }
      >
        {imageList.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-xl font-semibold">{img.title}</h3>
              <p className="text-sm">{img.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
