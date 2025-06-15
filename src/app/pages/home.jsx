import AboutMe from "../components/aboutme";
import Events from "../components/events";
import Carousel3D from "../components/Hero";
import Masonry from "../components/Masonry";
import Skills from "../components/skills";

export default function Homepage() {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-20">
            <Carousel3D/>
            <Skills/>
            <Events/>
            <Masonry/>
            <AboutMe/>
        </div>
    );
}