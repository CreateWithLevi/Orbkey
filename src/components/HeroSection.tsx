import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import KeyboardModel from "./KeyboardModel";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Revolutionary Spherical Keyboard",
  subtitle = "Experience the future of typing with our ergonomic spherical design",
  ctaText = "Pre-order Now",
  onCtaClick = () => {},
}: HeroSectionProps) => {
  return (
    <section className="w-full min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              {title}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300">{subtitle}</p>
            <div className="flex gap-4">
              <Button
                size="lg"
                onClick={onCtaClick}
                className="bg-primary hover:bg-primary/90"
              >
                {ctaText}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <KeyboardModel
              autoRotate={true}
              scale={1.5}
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {[
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
          ].map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl font-bold">{item.stat}</div>
              <div className="text-gray-400">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Background gradient circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full filter blur-3xl" />
      </div>
    </section>
  );
};

export default HeroSection;
