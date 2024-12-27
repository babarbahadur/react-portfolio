import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react';

const AnimatedCounter = ({ targetValue } : { targetValue: number}) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  React.useEffect(() => {
    const incrementAnimation = () => {
      let currentCount = 0;
      const increment = () => {
        if (currentCount < targetValue) {
          currentCount++;
          setCount(currentCount);
          controls.start({ opacity: currentCount / targetValue });
          setTimeout(increment, 100);
        }
      };
      increment();
    };
    
    const timeoutId = setTimeout(() => {
      incrementAnimation();
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [controls, targetValue]);

  return (
    <div className="text-150 font-bold text-center text-black -mb-12 -mt-12">
      <motion.span animate={{ opacity: count / targetValue }} transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}>
        {count}+
      </motion.span>
    </div>
  );
};

export default AnimatedCounter;
