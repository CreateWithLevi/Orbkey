import React from "react";
import { motion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";
import KeyboardModel from "./KeyboardModel";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  onWaitlistSuccess?: (message: string) => void;
}

const HeroSection = ({
  title = "Revolutionary Spherical Keyboard",
  subtitle = "Experience the future of typing",
  ctaText = "Pre-order Now",
  onCtaClick = () => { },
  onWaitlistSuccess,
}: HeroSectionProps) => {
  return (
    <section className="w-full h-screen bg-white text-black relative overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-white relative">
          <KeyboardModel scale={1.8} height="100vh" />
          <div
            className="absolute inset-0 bg-transparent"
            style={{ pointerEvents: "auto" }}
          ></div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 relative z-10 text-center">
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
            <WaitlistForm onSuccess={onWaitlistSuccess} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
