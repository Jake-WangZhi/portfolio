import { useEffect, useRef } from "react";

export const SpotLightCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let requestId: number;

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        const { clientX: x, clientY: y } = e;
        const offsetX = cursorRef.current.offsetWidth / 2;
        const offsetY = cursorRef.current.offsetHeight / 2;
        cursorRef.current.style.transform = `translate3d(${x - offsetX}px, ${
          y - offsetY
        }px, 0)`;
      }
    };

    const debouncedMoveCursor = (e: MouseEvent) => {
      if (requestId) {
        cancelAnimationFrame(requestId);
      }
      requestId = requestAnimationFrame(() => moveCursor(e));
    };

    document.addEventListener("mousemove", debouncedMoveCursor);

    return () => {
      document.removeEventListener("mousemove", debouncedMoveCursor);
      if (requestId) {
        cancelAnimationFrame(requestId);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-[1000px] h-[1000px] rounded-full bg-spotlight pointer-events-none z-[50] transition-transform duration-[0.01s] ease-out"
      style={{ willChange: "transform" }}
    />
  );
};
