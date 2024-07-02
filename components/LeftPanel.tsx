import { Footer } from "./Footer";
import { IntersectionTracker } from "./IntersectionTracker";
import { Introduction } from "./Introduction";

export const LeftPanel = () => {
  return (
    <div className="flex flex-col justify-between py-24 sticky top-0 md:h-screen md:pb-20">
      <Introduction />
      <IntersectionTracker />
      <Footer />
    </div>
  );
};
