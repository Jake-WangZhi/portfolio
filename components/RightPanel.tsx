import { About } from "./About";
import { Experience } from "./Experience";

export const RightPanel = () => {
  return (
    <div className="flex flex-col gap-16 py-24 md:gap-24">
      <About />
      <Experience />
    </div>
  );
};
