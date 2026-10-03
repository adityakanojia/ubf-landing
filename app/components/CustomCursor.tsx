"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const c1Ref = useRef<HTMLDivElement>(null);
  const c2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      return;
    }

    const c1 = c1Ref.current;
    const c2 = c2Ref.current;
    if (!c1 || !c2) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      c1.style.left = `${mx}px`;
      c1.style.top = `${my}px`;
    };

    const animate = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      c2.style.left = `${rx}px`;
      c2.style.top = `${ry}px`;
      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    // Set cursor:none on body for desktop
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <>
      <div id="c1" ref={c1Ref} aria-hidden="true" />
      <div id="c2" ref={c2Ref} aria-hidden="true" />
    </>
  );
}
