"use client";

import { motion } from "framer-motion";

export default function AnimationTemplate({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'linear', duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}