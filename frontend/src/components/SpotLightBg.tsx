import { useEffect, useRef } from "react";

export function SpotLightBg() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const handle = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--spot-x", `${e.clientX}px`);
        el.style.setProperty("--spot-y", `${e.clientY}px`);
        el.style.setProperty("--spot-opacity", "1");
      });
    };
    const leave = () => el.style.setProperty("--spot-opacity", "0");

    window.addEventListener("pointermove", handle);
    window.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handle);
      window.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* 1. Base dark background (Put your bg class HERE) */}
      <div className="absolute inset-0 bg-[var(--background)]" />{/*bg-[oklch(1_0_0)] for ligit*/}

      {/* 2. Grid lines overlay */}
      <div className="spotlight-grid absolute inset-0" />

      {/* 3. Mouse spotlight (DO NOT add bg-* classes here) */}
      <div ref={ref} className="spotlight-layer absolute inset-0" />      


    </div>
  );
}