"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Fade-and-rise on scroll. Mirrors the IntersectionObserver in the design
 * canvas: any `[data-reveal]` element gains `.in` once, then stops being
 * observed. Mounted in the root layout and re-scanned on every navigation.
 */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.in)"),
    );

    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
