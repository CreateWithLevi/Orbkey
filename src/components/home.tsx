import React from "react";
import HeroSection from "./HeroSection";
import ComparisonSection from "./ComparisonSection";
import ProductSpecs from "./ProductSpecs";
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
  title = "Revolutionary Spherical Keyboard",
  subtitle = "Experience the future of typing with our ergonomic spherical design",
  modelUrl = "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=1000",
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
        <HeroSection title={title} subtitle={subtitle} modelUrl={modelUrl} />

        <ComparisonSection features={features} />

        <ProductSpecs specs={specs} price={price} />
      </motion.main>
    </div>
  );
};

export default Home;
