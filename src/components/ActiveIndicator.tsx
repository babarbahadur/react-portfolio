"use client";

import { motion } from "framer-motion";

export default function RippleDot() {
  return (
    <div className="flex justify-center items-center relative ml-3">
      {/* Static Green Dot */}
      <div className="w-2 h-2 bg-green rounded-full relative">
        {/* Ripple Animation */}
        <motion.div
          className="absolute inset-0 border-2 border-green rounded-full"
          animate={{ scale: [1, 1.5], opacity: [0, 0.2] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute inset-0 border-2 border-green rounded-full"
          animate={{ scale: [1, 2], opacity: [0, 0.2] }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
}
