"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function AnimationTemplate({ children }: { children: React.ReactNode }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={hasAnimated ? { y: 0, opacity: 1 } : {}}
      transition={{ ease: "linear", duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}
