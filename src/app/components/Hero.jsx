import React, { useState, useEffect } from "react";

const logos = [
  { name: "WordPress", src: "/wordpress.svg" },
  { name: "React", src: "/react.svg" },
  { name: "Next.js", src: "/nextjs.svg" },
  { name: "HTML", src: "/html.svg" },
  { name: "CSS", src: "/css.svg" },
  { name: "TailwindCSS", src: "/tailwindcss.svg" },
  { name: "JavaScript", src: "/js.svg" },
  { name: "MongoDB", src: "/mongodb.svg" },
  { name: "ExpressJS", src: "/express.svg" },
];

const logoSize = 70;// Default to desktop radius

const Carousel3D = () => {
  const [active, setActive] = useState(0);
  const [radius, setRadius] = useState(230);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % logos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
  const getRadius = () => (window.innerWidth >= 768 ? 230 : 150);
  setRadius(getRadius());

  const handleResize = () => {
    setRadius(getRadius());
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <main className="flex lg:flex-row flex-col-reverse items-center justify-between px-[1rem] lg:py-[4rem]">
        <div className="lg:w-3/4 space-y-4 w-full items-center text-center lg:text-left">
          <h1>
            Building Clean, <span>Fast & Scalable</span> Web Experiences for
            Modern Brands.
          </h1>
          <p>
            Hi, I'm Sujan — a Web Developer who turns ideas into beautiful
            digital solutions. I specialize in building
            <span>SEO-friendly WordPress &amp; Next.js</span> websites that load
            fast and convert better.
          </p>
          <button>Get in touch</button>
        </div>
        <div
          className="flex items-center justify-center w-1/2 lg:h-[500px] md:h-[600px] h-[400px]"
          style={{ margin: "0 auto" }}
        >
          {/* 3D Carousel Items */}
          <div className="relative w-full h-full">
            <div
              className="absolute left-1/2 top-1/2"
              style={{
                transform: "translate(-50%, -50%)",
                width: 400,
                height: 400,
              }}
            >
              {logos.map((logo, i) => {
                const total = logos.length;

                const angleOffset = -225; // to place focused one at bottom-left
                const angle =
                  ((360 / total) * (i - active) + angleOffset) *
                  (Math.PI / 180);

                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                // Distance-based scaling
                const diff = Math.min(
                  Math.abs(i - active),
                  total - Math.abs(i - active)
                );

                const scale = 1.6 - diff * 0.2;
                const finalScale = scale < 0.6 ? 0.6 : scale;

                const blur = diff >= 3 ? "blur(1px)" : "none";

                // Z-index logic
                const zIndex = i === active ? 4 : 2 - diff;

                const boxShadow =
                  i === active
                    ? "0 10px 30px rgba(0,0,0,0.2)"
                    : "0 2px 6px rgba(0,0,0,0.08)";

                return (
                  <img
                    key={logo.name}
                    src={logo.src}
                    alt={logo.name}
                    title={logo.name}
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      width: "70px",
                      height: "70px",
                      transform: `
                  translate(-50%, -50%)
                  translateX(${x}px)
                  translateY(${y}px)
                  scale(${finalScale})
                `,
                      transition:
                        "transform 0.6s ease, filter 0.3s ease, box-shadow 0.3s ease",
                      zIndex,
                      filter: blur,
                      borderRadius: "50%",
                      padding: 8,
                    }}
                  />
                );
              })}
            </div>

            {/* Center image (appears behind focused but in front of others) */}
            <img
              src="/hero-image.png"
              alt="hero"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full
                w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px]"
              style={{
                objectFit: "cover",
                zIndex: 3,
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Carousel3D;
