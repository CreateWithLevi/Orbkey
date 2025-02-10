import React from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

interface MetricsDisplayProps {
  metrics?: {
    label: string;
    value: number;
    description: string;
  }[];
}

const MetricsDisplay = ({
  metrics = [
    {
      label: "Typing Speed",
      value: 85,
      description: "Faster typing speed compared to traditional keyboards",
    },
    {
      label: "Comfort Rating",
      value: 95,
      description: "Users report improved comfort during extended use",
    },
    {
      label: "Learning Efficiency",
      value: 75,
      description: "New users adapt to the spherical layout within weeks",
    },
  ],
}: MetricsDisplayProps) => {
  return (
    <div className="w-full bg-white p-8 rounded-2xl shadow-lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-bold text-gray-900">
            Performance Metrics
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how our spherical keyboard design improves typing experience
          </p>
        </div>

        <div className="space-y-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-900">
                  {metric.label}
                </span>
                <span className="text-lg font-bold text-primary">
                  {metric.value}%
                </span>
              </div>
              <Progress value={metric.value} className="h-3" />
              <p className="text-sm text-gray-600">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-gray-500 mt-8"
        >
          * Based on user testing and feedback data
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MetricsDisplay;
