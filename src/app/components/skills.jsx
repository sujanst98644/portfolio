import React, { useEffect, useRef, useState } from "react";

// Skill data with logo filenames (place logos in /public/logos/)
const skills = [
    { name: "WordPress", logo: "/wordpress.svg" },
    { name: "React", logo: "/react.svg" },
    { name: "Next.js", logo: "/nextjs.svg" },
    { name: "HTML", logo: "/html.svg" },
    { name: "CSS", logo: "/css.svg" },
    { name: "TailwindCSS", logo: "/tailwindcss.svg" },
    { name: "JavaScript", logo: "/js.svg" },
    { name: "MongoDB", logo: "/mongodb.svg" },
    { name: "ExpressJS", logo: "/express.svg" },
];

const SkillCarousel = () => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setIndex((prev) => (prev + 1) % skills.length);
        }, 3000);
        return () => clearTimeout(timeoutRef.current);
    }, [index]);

    const displaySkills = [...skills, ...skills];

    return (
        <section className="w-full py-12 bg-gray-200 flex flex-col items-center space-y-10">
            <h2 className="tracking-widest uppercase">
                My Skills
            </h2>
            <div className="relative w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${index * 120}px)`,
                        width: `${displaySkills.length * 120}px`,
                    }}
                >
                    {displaySkills.map((skill, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-[200px] h-[200px] flex flex-col items-center justify-center transition-all duration-300 space-y-3"
                        >
                            <div
                                className="w-16 h-16 flex items-center justify-center"
                            >
                                <img
                                    src={skill.logo}
                                    alt={skill.name}
                                    className="w-20 h-20 object-contain"
                                />
                            </div>
                            <span className="text-sm font-semibold tracking-wide uppercase text-gray-700 text-center">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillCarousel;
