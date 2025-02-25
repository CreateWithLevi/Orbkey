import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface StatsCounterProps {
  targetNumber?: number;
  startNumber?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  label?: string;
}

const StatsCounter = ({
  targetNumber = 100,
  startNumber = 1,
  duration = 5,
  prefix = "",
  suffix = "%",
  label = "Loading",
}: StatsCounterProps) => {
  const [count, setCount] = useState(startNumber);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(
          Math.floor(startNumber + (targetNumber - startNumber) * progress),
        );
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(targetNumber);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [targetNumber, startNumber, duration]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="text-8xl font-bold mb-4 text-blue-600">
          {prefix}
          {count}
          {suffix}
        </div>
        <div className="text-xl text-gray-600">{label}</div>
      </motion.div>
    </div>
  );
};

export default StatsCounter;
