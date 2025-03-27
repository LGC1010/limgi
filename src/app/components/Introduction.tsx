import Navigation from "./Navigation";
import Career from "./Career";
import { useEffect, useRef, useState } from "react";
import Education from "./Education";
import Project from "./Project";

const Introduction = () => {
    const [activeSection, setActiveSection] = useState("career");

    const careerRef = useRef(null);
    const projectRef = useRef(null);
    const educationRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.6,
            }
        );

        const sections = [careerRef, projectRef, educationRef];
        sections.forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            sections.forEach((ref) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);

    return (
        <section className="relative bg-[#232323] w-full flex p-6 gap-14 z-1 max-md:flex-col max-md:gap-0 max-ls:gap-5 max-xl:gap-10">
            {/* <Navigation activeSection={activeSection} /> */}
            <div className="flex flex-col flex-2 gap-60 pb-20">
                <div id="career" ref={careerRef}>
                    <Career />
                </div>
                <div id="project" ref={projectRef}>
                    <Project />
                </div>
                <div id="education" ref={educationRef}>
                    <Education />
                </div>
            </div>
        </section>
    );
};

export default Introduction;
