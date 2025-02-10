import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import KeyboardModel from "./KeyboardModel";

interface ColorVariant {
  name: string;
  color: string;
  price: number;
  modelUrl: string;
}

interface ColorVariantsProps {
  variants?: ColorVariant[];
  onSelectColor?: (color: string) => void;
  selectedColor?: string;
}

const ColorVariants = ({
  variants = [
    {
      name: "Pure White",
      color: "white",
      price: 199.99,
      modelUrl: "https://prod.spline.design/oQwch80ldxvMwJaL/scene.splinecode",
    },
    {
      name: "Desert Sand",
      color: "#D2B48C",
      price: 199.99,
      modelUrl: "https://prod.spline.design/4PpxJsixxPdW8CKS/scene.splinecode",
    },
    {
      name: "Obsidian Black",
      color: "black",
      price: 199.99,
      modelUrl: "https://prod.spline.design/MOFIN26XJxkpcQJ1/scene.splinecode",
    },
  ],
  onSelectColor = () => {},
  selectedColor = "#1a1a1a",
}: ColorVariantsProps) => {
  const discountedPrice = (price: number) => (price * 0.75).toFixed(2);

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-3">Choose Your Style</h2>
          <p className="text-gray-600 text-lg">
            Available in three premium finishes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {variants.map((variant) => (
            <Card
              key={variant.color}
              className={`p-4 cursor-pointer transition-all border rounded-2xl hover:border-gray-300 ${selectedColor === variant.color ? "ring-2 ring-primary" : ""}`}
              onClick={() => onSelectColor(variant.color)}
            >
              <div className="relative aspect-square mb-4 group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <KeyboardModel modelUrl={variant.modelUrl} />
                <Badge
                  className="absolute top-3 right-3 bg-[#22C55E] text-white border-0 font-medium px-2 py-0.5 text-xs"
                  variant="outline"
                >
                  25% OFF
                </Badge>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-base font-medium">{variant.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 line-through">
                      ${variant.price}
                    </span>
                    <span className="text-sm font-medium text-[#22C55E]">
                      25% OFF
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-lg font-semibold">
                    ${discountedPrice(variant.price)}
                  </span>
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
