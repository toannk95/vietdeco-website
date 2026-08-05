"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export function CountUp({
  value,
  suffix = "",
  duration = 2,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px -100px 0px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const node = ref.current;

    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate(latest) {
        node.textContent = `${Math.round(latest).toLocaleString("vi-VN")}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [isInView, value, suffix, duration]);

  return (
    <span ref={ref}>
      0{suffix}
    </span>
  );
}
