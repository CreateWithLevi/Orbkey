import React from "react";
import StatsCounter from "./StatsCounter";

const StatsPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <StatsCounter
        targetNumber={100}
        startNumber={1}
        duration={5}
        suffix="%"
        label="Loading"
      />
    </div>
  );
};

export default StatsPage;
