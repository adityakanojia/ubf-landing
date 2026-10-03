"use client";

import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to all `.rv` elements,
 * adding the `.in` class when they enter the viewport.
 * Observes once and unobserves after triggering.
 */
export default function ScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Make all reveal elements visible immediately
      document.querySelectorAll(".rv").forEach((el) => {
        el.classList.add("in");
      });
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    );

    document.querySelectorAll(".rv").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return null;
}
