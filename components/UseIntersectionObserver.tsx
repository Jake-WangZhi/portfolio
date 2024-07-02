import { useEffect, useRef, Dispatch, SetStateAction } from "react";

export const useIntersectionObserver = (
  setActiveSection: Dispatch<SetStateAction<string>>
) => {
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

  return observerRef.current;
};
