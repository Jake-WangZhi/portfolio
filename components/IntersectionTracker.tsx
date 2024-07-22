import { useEffect, useRef, useState } from "react";

export const IntersectionTracker = () => {
  const [activeSection, setActiveSection] = useState("about");
  const intersectingElements = useRef<
    { id: string; ratio: number; top: number }[]
  >([]);
  const lastScrollY = useRef(0);

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const scrollingDown = window.scrollY > lastScrollY.current;
      lastScrollY.current = window.scrollY;

      entries.forEach((entry) => {
        const { id } = entry.target;
        const ratio = entry.intersectionRatio;
        const top = entry.boundingClientRect.top;

        if (entry.isIntersecting) {
          const index = intersectingElements.current.findIndex(
            (el) => el.id === id
          );
          if (index > -1) {
            intersectingElements.current[index] = { id, ratio, top };
          } else {
            intersectingElements.current.push({ id, ratio, top });
          }
        } else {
          intersectingElements.current = intersectingElements.current.filter(
            (el) => el.id !== id
          );
        }
      });

      intersectingElements.current.sort((a, b) => a.top - b.top);

      if (intersectingElements.current.length > 0) {
        if (scrollingDown) {
          const lastSignificantSection = intersectingElements.current
            .filter((el) => el.ratio >= 0.5)
            .pop();
          if (lastSignificantSection) {
            setActiveSection(lastSignificantSection.id);
          } else {
            setActiveSection(
              intersectingElements.current[
                intersectingElements.current.length - 1
              ].id
            );
          }
        } else {
          const firstVisibleSection = intersectingElements.current.find(
            (el) => el.ratio >= 0.1
          );
          if (firstVisibleSection) {
            setActiveSection(firstVisibleSection.id);
          }
        }
      }
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      rootMargin: "-1px 0px -10% 0px",
    });

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observerRef.current?.observe(section));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col gap-4 text-slate-400">
      {["about", "education", "experience", "projects", "publications"].map(
        (section) => (
          <div
            key={section}
            className={`flex items-center cursor-pointer ${
              activeSection === section ? "text-slate-200" : ""
            }`}
            onClick={() => handleScrollToSection(section)}
          >
            <span
              className={`block h-0.5 transition-all duration-500 ${
                activeSection === section
                  ? "w-16 bg-slate-200"
                  : "w-8 bg-slate-500"
              }  mr-2`}
            ></span>
            <span
              className={`${
                activeSection === section ? "text-slate-200" : "text-slate-500"
              } hover:text-teal-300 uppercase font-semibold`}
            >
              {section}
            </span>
          </div>
        )
      )}
    </div>
  );
};
