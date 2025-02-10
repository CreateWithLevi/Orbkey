import React from "react";
import Spline from "@splinetool/react-spline";

interface KeyboardModelProps {
  autoRotate?: boolean;
  modelUrl?: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  height?: string;
}

const KeyboardModel = ({
  modelUrl = "https://prod.spline.design/0YUeBEhF-PU6Mgmg/scene.splinecode",
  height = "100vh",
}: KeyboardModelProps) => {
  return (
    <div className="w-full h-full bg-white rounded-xl overflow-hidden relative">
      <div style={{ pointerEvents: "none", height }}>
        <Spline scene={modelUrl} />
      </div>
    </div>
  );
};

export default KeyboardModel;
