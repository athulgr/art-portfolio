"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Example images array (replace with your own images and details)
const projects = [
  {
    title: "Sunset Overdrive",
    description: "A vibrant sunset landscape in acrylic.",
    image: "/images/sunset.jpg",
  },
  {
    title: "Urban Sketch",
    description: "Pen and ink sketch of city life.",
    image: "/images/urban.jpg",
  },
  {
    title: "Abstract Flow",
    description: "Digital abstract art with flowing shapes.",
    image: "/images/abstract.jpg",
  },
  // Add more projects as needed
];

export default function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  // As you scroll, move Projects up to overlap hero, then stick
  const y = useTransform(scrollYProgress, [0, 1], ["100vh", "0vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.05, 1], [0, 1, 1]);

  return (
    <motion.section
      id="portfolio"
      ref={ref}
      style={{
        position: "relative", // changed from fixed
        width: "100vw",
        zIndex: 30,
        y,
        opacity,
        pointerEvents: opacity ? "auto" : "none",
      }}
      className="bg-gray-50 dark:bg-gray-800"
    >
      <div className="w-full h-full">
        <h2 className="text-3xl font-bold mb-8 pt-8 px-8 bg-opacity-80 bg-gray-50 dark:bg-gray-800 sticky top-0 z-40">
          Gallery Slate
        </h2>
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="relative w-full h-screen flex flex-col justify-center items-center snap-start"
              style={{ minHeight: "100vh" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ zIndex: 1, filter: "brightness(0.85)" }}
              />
              <div className="relative z-10 bg-black bg-opacity-40 rounded p-8 text-center max-w-xl mx-auto">
                <h3 className="text-3xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-lg text-gray-200">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}