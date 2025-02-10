import React from "react";
import { motion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";
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
    <section className="w-full min-h-screen bg-white text-black relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full bg-[#E5E7EB]">
          <KeyboardModel scale={1.8} />
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-16 lg:py-24 relative z-10 text-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight tracking-tight">
              {title}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600">{subtitle}</p>
            <WaitlistForm />
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
              <div className="text-5xl font-bold">{item.stat}</div>
              <div className="text-gray-600 text-lg">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
