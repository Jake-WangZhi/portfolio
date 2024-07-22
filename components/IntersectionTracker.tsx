import { useEffect, useRef, useState } from "react";

export const IntersectionTracker = () => {
  const [activeSection, setActiveSection] = useState("About");

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observerRef.current?.observe(section));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [setActiveSection]);

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
