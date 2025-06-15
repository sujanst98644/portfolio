import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Project One",
    image: "/image1.png",
    description: "Description for Project One",
  },
  {
    id: 2,
    title: "Project Two",
    image: "/image2.png",
    description: "Description for Project Two",
  },
  {
    id: 3,
    title: "Project Three",
    image: "/image3.jpg",
    description: "Description for Project Three",
  },
  {
    id: 4,
    title: "Project Four",
    image: "/image4.jpg",
    description: "Description for Project Four",
  },
  // Add more projects as needed
];

const VISIBLE_COUNT = 4;

const Masonry = () => {
  const [startIdx, setStartIdx] = useState(0);
  // By default, the middle card is hovered (if possible)
  const defaultHovered = Math.floor(VISIBLE_COUNT / 2);
  const [hovered, setHovered] = useState(defaultHovered);

  const next = () => setStartIdx((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setStartIdx((prev) => (prev - 1 + projects.length) % projects.length);

  // Get visible projects with wrap-around
  const visibleProjects = [];
  for (let i = 0; i < VISIBLE_COUNT; i++) {
    visibleProjects.push(projects[(startIdx + i) % projects.length]);
  }

  return (
    <div className="flex flex-col items-center justify-center w-full space-y-30">
      <div className="text-center space-y-4">
        <h2>My Projects</h2>
        <p className="text-center text-gray-600">
          Hover over a project to see more details.
        </p>
      </div>
      <div className="flex items-center justify-center w-full">
        {/* <button
                    onClick={prev}
                    className=""
                >
                    &#8592;
                </button> */}
        <div className="flex h-[60vh] justify-center items-center overflow-visible">
          {visibleProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`relative transition-all duration-300  ${
                hovered === idx
                  ? "z-20 w-[120%] shadow-2xl transition-all duration-300"
                  : "z-10 w-[100%]"
              } `}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(defaultHovered)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[70vh] object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <button
                    onClick={next}
                    className=""
                >
                    &#8594;
                </button> */}
      </div>
      
    </div>
  );
};

export default Masonry;
