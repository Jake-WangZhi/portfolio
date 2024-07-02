import { About } from "./About";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Publications } from "./Publications";

export const RightPanel = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>
      <section id="publications">
        <Publications />
      </section>
    </div>
  );
};
