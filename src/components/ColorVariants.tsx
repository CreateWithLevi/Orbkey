import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import KeyboardModel from "./KeyboardModel";

interface ColorVariant {
  name: string;
  color: string;
  price: number;
}

interface ColorVariantsProps {
  variants?: ColorVariant[];
  onSelectColor?: (color: string) => void;
  selectedColor?: string;
}

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ColorVariants = ({
  variants = [
    { name: "Obsidian Black", color: "#1a1a1a", price: 199.99 },
    { name: "Arctic Silver", color: "#C0C0C0", price: 199.99 },
    { name: "Nebula Blue", color: "#304FFE", price: 199.99 },
  ],
  onSelectColor = () => {},
  selectedColor = "#1a1a1a",
}: ColorVariantsProps) => {
  const discountedPrice = (price: number) => (price * 0.75).toFixed(2);

  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Choose Your Style</h2>
          <p className="text-gray-600">Available in three premium finishes</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {variants.map((variant) => (
            <Card
              key={variant.color}
              className={`p-6 cursor-pointer transition-all border border-gray-200 rounded-xl ${selectedColor === variant.color ? "ring-2 ring-primary" : ""}`}
              onClick={() => onSelectColor(variant.color)}
            >
              <div className="relative h-[300px] mb-6 group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <KeyboardModel color={variant.color} />
                <Badge
                  className="absolute top-4 right-4 bg-green-500/90 text-white border-0"
                  variant="outline"
                >
                  25% OFF
                </Badge>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{variant.name}</h3>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-2xl font-bold">
                    ${discountedPrice(variant.price)}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 line-through">
                      ${variant.price}
                    </span>
                    <span className="text-sm font-medium text-green-600">
                      25% OFF
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColorVariants;
