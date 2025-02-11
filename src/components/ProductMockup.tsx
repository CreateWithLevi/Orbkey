import React from "react";
import { motion } from "framer-motion";

interface ProductMockupProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

const ProductMockup = ({
  title = "Premium Design",
  description = "Built with aerospace-grade aluminum, merging luxury with next-gen technology.",
  imageUrl = "/images/product_mockup_bg.png",
}: ProductMockupProps) => {
  return (
    <section className="w-full h-[65vh] relative bg-[#1C1C1E] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-bottom"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "right bottom",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent" />

      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h2 className="text-5xl font-bold tracking-tight text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">{description}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductMockup;
