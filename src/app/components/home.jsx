import AboutMe from "./aboutme";
import CTA from "./CTA";
import Events from "./events";
import Carousel3D from "./Hero";
import Masonry from "./Masonry";
import Services from "./services";
import Skills from "./skills";
import Value from "./value";

export default function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Carousel3D />
      <Value/>
      {/* <Skills/> */}
      <Services />
      <Events />
      <CTA/>
      <Masonry />
      <AboutMe />
    </div>
  );
}
