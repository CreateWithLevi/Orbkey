import React from "react";
import { motion } from "framer-motion";

interface StatsSectionProps {
  stats?: {
    stat: string;
    label: string;
  }[];
}

const StatsSection = ({
  stats = [
    {
      stat: "2x",
      label: "Faster Typing Speed",
    },
    {
      stat: "95%",
      label: "Ergonomic Comfort",
    },
    {
      stat: "Zero",
      label: "Wrist Strain",
    },
  ],
}: StatsSectionProps) => {
  return (
    <section className="w-full bg-white py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
      >
        {stats.map((item, index) => (
          <div key={index} className="space-y-3">
            <div className="text-7xl font-bold tracking-tight">{item.stat}</div>
            <div className="text-gray-600 text-xl font-medium mt-4">
              {item.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default StatsSection;
