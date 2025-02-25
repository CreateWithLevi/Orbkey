import React, { useState, useEffect } from "react";
import StatsCounter from "./StatsCounter";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
    }, 3000); // Changed to 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
          style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <StatsCounter
            targetNumber={100}
            startNumber={1}
            duration={3}
            suffix="%"
            label="Loading"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
