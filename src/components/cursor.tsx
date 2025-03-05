
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = () => {
      const target = document.elementFromPoint(position.x, position.y);
      if (target) {
        const computedStyle = window.getComputedStyle(target);
        setIsPointer(computedStyle.cursor === "pointer");
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("mousemove", updateCursorType);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("mousemove", updateCursorType);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [position.x, position.y]);

  if (typeof window === "undefined") return null;

  return (
    <>
      <div
        className={cn(
          "fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300",
          isHidden && "opacity-0"
        )}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <div
          className={cn(
            "relative -left-1 -top-1 rounded-full bg-primary mix-blend-difference transition-all duration-300 ease-out",
            isPointer || isClicking
              ? "w-5 h-5 opacity-70"
              : "w-3 h-3 opacity-100"
          )}
        />
      </div>
      <div
        className={cn(
          "fixed top-0 left-0 pointer-events-none z-[9998] transition-opacity duration-300",
          isHidden && "opacity-0"
        )}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <div
          className={cn(
            "relative -left-5 -top-5 rounded-full border border-primary/30 transition-all duration-500 ease-out",
            isPointer || isClicking
              ? "w-7 h-7 opacity-0"
              : "w-10 h-10 opacity-30"
          )}
        />
      </div>
    </>
  );
}
