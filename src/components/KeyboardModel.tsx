import React from "react";
import Spline from "@splinetool/react-spline";

interface KeyboardModelProps {
  autoRotate?: boolean;
  modelUrl?: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

const KeyboardModel = ({
  modelUrl = "https://prod.spline.design/0YUeBEhF-PU6Mgmg/scene.splinecode",
}: KeyboardModelProps) => {
  return (
    <div className="w-full h-full min-h-[400px] bg-gray-900 rounded-xl overflow-hidden">
      <Spline scene={modelUrl} />
    </div>
  );
};

export default KeyboardModel;
