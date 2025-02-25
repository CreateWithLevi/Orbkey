import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

interface ComparisonFeature {
  feature: string;
  traditional: boolean;
  spherical: boolean;
  description: string;
}

interface ComparisonSectionProps {
  features?: ComparisonFeature[];
  title?: string;
  subtitle?: string;
}

const ComparisonSection = ({
  features = [
    {
      feature: "Ergonomic Design",
      traditional: false,
      spherical: true,
      description: "Natural hand positioning for reduced strain",
    },
    {
      feature: "360° Key Access",
      traditional: false,
      spherical: true,
      description: "Keys accessible from multiple angles",
    },
    {
      feature: "Customizable Layout",
      traditional: true,
      spherical: true,
      description: "Adjustable key mappings for personal preference",
    },
    {
      feature: "Wrist Support",
      traditional: false,
      spherical: true,
      description: "Built-in support for comfortable typing",
    },
    {
      feature: "Learning Curve",
      traditional: true,
      spherical: false,
      description: "Time needed to adapt to the keyboard layout",
    },
    {
      feature: "Space Efficiency",
      traditional: true,
      spherical: false,
      description: "Desktop space required for the keyboard",
    },
  ],
  title = "Meet the Spherical Keyboard",
  subtitle = "Experience enhanced comfort and precise control with its innovative spherical design.",
}: ComparisonSectionProps) => {
  return (
    <div className="w-full min-h-[600px] bg-gray-50 py-24 px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative h-[300px] lg:h-auto lg:row-span-2">
            <img src="/images/feature_img-2.jpg" alt="Ergonomic Design" className="w-full h-full object-cover rounded-2xl" />
            <div className="absolute inset-0 flex items-center lg:items-start lg:pt-8 justify-center lg:justify-start lg:px-8">
              <div className="text-center lg:text-left text-black">
                <h3 className="text-xl font-semibold pb-1">Ergonomic Design</h3>
                <p className="text-sm">Natural hand positioning for reduced strain</p>
              </div>
            </div>
          </div>
          <div className="relative h-[300px] lg:h-auto">
            <img src="/images/feature_img-4.jpg" alt="Customizable Layout" className="w-full h-full object-cover rounded-2xl" />
            <div className="absolute inset-0 flex items-center lg:items-start lg:pt-8 justify-center lg:justify-start lg:px-8">
              <div className="text-center lg:text-left text-black">
                <h3 className="text-xl font-semibold pb-1">Customizable Layout</h3>
                <p className="text-sm">Adjustable key mappings for personal preference</p>
              </div>
            </div>
          </div>
          <div className="relative h-[300px] lg:h-auto">
            <img src="/images/feature_img-1.jpg" alt="Space Efficiency" className="w-full h-full object-cover rounded-2xl" />
            <div className="absolute inset-0 flex items-center lg:items-start lg:pt-8 justify-center lg:justify-start lg:px-8">
              <div className="text-center lg:text-left text-black">
                <h3 className="text-xl font-semibold pb-1">Space Efficiency</h3>
                <p className="text-sm">Desktop space required for the keyboard</p>
              </div>
            </div>
          </div>
          <div className="relative h-[300px] lg:h-auto lg:col-span-2">
            <img src="/images/feature_img-3.jpg" alt="Wrist Support" className="w-full h-full object-cover rounded-2xl" />
            <div className="absolute inset-0 flex items-center lg:items-start lg:pt-8 justify-center lg:justify-end lg:px-8">
              <div className="text-center lg:text-right text-black">
                <h3 className="text-xl font-semibold pb-1">Wrist Support</h3>
                <p className="text-sm">Built-in support for comfortable typing</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ComparisonSection;
