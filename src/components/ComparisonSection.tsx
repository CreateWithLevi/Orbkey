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
  title = "Traditional vs Spherical",
  subtitle = "See how our revolutionary design compares to conventional keyboards",
}: ComparisonSectionProps) => {
  return (
    <div className="w-full min-h-[600px] bg-gray-50 py-16 px-4">
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

        <Card className="p-8 bg-white">
          <div className="grid grid-cols-12 gap-4 mb-6">
            <div className="col-span-6">
              <h3 className="text-lg font-semibold">Feature</h3>
            </div>
            <div className="col-span-3 text-center">
              <Badge variant="outline" className="bg-gray-100">
                Traditional
              </Badge>
            </div>
            <div className="col-span-3 text-center">
              <Badge variant="outline" className="bg-primary/10 text-primary">
                Spherical
              </Badge>
            </div>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-12 gap-4 items-center py-4 border-b last:border-b-0"
              >
                <div className="col-span-6">
                  <h4 className="font-medium">{feature.feature}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
                <div className="col-span-3 flex justify-center">
                  {feature.traditional ? (
                    <Check className="h-6 w-6 text-green-500" />
                  ) : (
                    <X className="h-6 w-6 text-red-500" />
                  )}
                </div>
                <div className="col-span-3 flex justify-center">
                  {feature.spherical ? (
                    <Check className="h-6 w-6 text-green-500" />
                  ) : (
                    <X className="h-6 w-6 text-red-500" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default ComparisonSection;
