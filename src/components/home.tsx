import React from "react";
import HeroSection from "./HeroSection";

import StatsSection from "./StatsSection";
import ColorVariants from "./ColorVariants";
import ComparisonSection from "./ComparisonSection";
import ProductSpecs from "./ProductSpecs";
import ProductMockup from "./ProductMockup";
import Footer from "./Footer";
import { motion } from "framer-motion";

interface HomeProps {
  title?: string;
  subtitle?: string;
  modelUrl?: string;
  features?: {
    title: string;
    traditional: string;
    spherical: string;
  }[];
  specs?: {
    dimension: string;
    weight: string;
    connectivity: string;
    battery: string;
    compatibility: string[];
  };
  price?: number;
}

const Home = ({
  title = "OrbKey",
  subtitle = "Experience the future of typing",
  modelUrl,
  features,
  specs,
  price,
}: HomeProps) => {
  return (
    <div className="min-h-screen w-full bg-white">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection title={title} subtitle={subtitle} />

        <StatsSection />

        <ColorVariants />

        <ProductMockup />

        <ComparisonSection />

        <ProductSpecs />

        <Footer />
      </motion.main>
    </div>
  );
};

export default Home;
