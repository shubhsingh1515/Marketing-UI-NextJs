"use client";

import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export function NumberTicker({ value, className }: any) {
  const [ref, isVisible] = useIntersectionObserver();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const end = parseInt(value.replace(/\D/g, ""));
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      setCount(current);
      if (current === end) clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
  }, [isVisible, value]);

  return (
    <span ref={ref} className={className}>
      {count}
      {value.replace(/[0-9]/g, "")}
    </span>
  );
}
