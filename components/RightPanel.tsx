import { About } from "./About";
import { Experience } from "./Experience";
import { Publication } from "./Publication";

export const RightPanel = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="publication">
        <Publication />
      </section>
    </div>
  );
};
