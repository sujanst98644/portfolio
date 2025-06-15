import React from "react";

const AboutMe = () => (
  <div>
    <main className="flex flex-row mx-auto py-[4rem] px-[1rem] gap-8">
      <section className="w-1/3">
        <img src="/woman-jacket.jpg" alt="woman-smiling-demin-jacket" />
      </section>
      <section className="px-8 w-2/3">
        <h2 className=" font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
          About Me
        </h2>
        <p className="text-gray-700 mb-4">
          Hello! I'm <strong className="">Sujan Thapa</strong>, a passionate
          Computer Science and Information Technology (CSIT) student. I am
          enthusiastic about software development, problem-solving, and
          leveraging technology to create impactful solutions.
        </p>
        <p className=" mb-4">
          My academic journey has equipped me with a solid foundation in
          programming languages such as JavaScript, Python, and Java, as well as
          experience with web development frameworks like React and Node.js. I
          enjoy collaborating on projects, learning new technologies, and
          continuously improving my skills.
        </p>
        <p className="mb-6">
          Outside of academics, I participate in coding competitions, contribute
          to open-source projects, and stay updated with the latest trends in
          technology. I am eager to apply my knowledge and creativity to
          real-world challenges and grow as a professional in the tech industry.
        </p>
        <ul className="mb-6 space-y-2">
          <li>
            <strong className="">Degree:</strong>
            <span className="text-gray-600 dark:text-gray-400">
              BSc CSIT (Bachelor of Science in Computer Science and Information
              Technology)
            </span>
          </li>
          <li>
            <strong className="">Interests:</strong>
            <span className="">
              Web Development, Algorithms, Open Source, SEO
            </span>
          </li>
          <li>
            <strong className="">Location:</strong>
            <span className="">Kathmandu, Nepal</span>
          </li>
          <li>
            <strong className="">Email:</strong>
            <span className="">[your.email@example.com]</span>
          </li>
        </ul>
        <div className="about-me-cta mt-6 flex">
          <button href="mailto:[your.email@example.com]">Contact Me</button>
        </div>
      </section>
    </main>
  </div>
);

export default AboutMe;
