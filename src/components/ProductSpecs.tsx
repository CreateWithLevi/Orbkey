import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Package, Shield, Cpu } from "lucide-react";

interface ProductSpecsProps {
  specs?: {
    category: string;
    items: { label: string; value: string }[];
  }[];
  price?: number;
  onPreOrder?: () => void;
}

const ProductSpecs = ({
  specs = [
    {
      category: "Design & Build",
      items: [
        { label: "Material", value: "Aerospace-grade aluminum" },
        { label: "Surface", value: "Soft silicone key zones" },
        { label: "Design", value: "Spherical ergonomic" },
        { label: "Weight", value: "1.8 lbs" },
      ],
    },
    {
      category: "Technology",
      items: [
        { label: "Connectivity", value: "Bluetooth 5.3 & 2.4GHz" },
        { label: "Charging", value: "Qi wireless" },
        { label: "Battery Life", value: "30 hours" },
        { label: "Input", value: "Touch-sensitive, multi-mode" },
      ],
    },
  ],
  price = 149.99, // 25% off from original price of 199.99
  onPreOrder = () => console.log("Pre-order clicked"),
}: ProductSpecsProps) => {
  return (
    <section className="w-full min-h-[800px] bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Technical Specifications
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every detail engineered for the ultimate typing experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {specs.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  {section.category}
                </h3>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <div className="flex justify-between">
                        <span className="text-gray-600">{item.label}</span>
                        <span className="font-medium">{item.value}</span>
                      </div>
                      {itemIndex < section.items.length - 1 && (
                        <Separator className="mt-4" />
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Pre-order Now
              </h3>
              <p className="text-xl text-gray-600">
                Be among the first to experience the future of typing
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary">
                  ${price.toFixed(2)}
                </span>
                <span className="text-gray-600">USD</span>
              </div>
              <Button
                size="lg"
                onClick={onPreOrder}
                className="w-full sm:w-auto"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Pre-order Now
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Package,
                  title: "Free Shipping",
                  description: "Worldwide delivery",
                },
                {
                  icon: Shield,
                  title: "2-Year Warranty",
                  description: "Full coverage",
                },
                {
                  icon: Cpu,
                  title: "Latest Tech",
                  description: "Advanced sensors",
                },
                {
                  icon: ShoppingCart,
                  title: "30-Day Return",
                  description: "Money-back guarantee",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="p-4 flex flex-col items-center text-center"
                >
                  <feature.icon className="h-8 w-8 text-primary mb-2" />
                  <h4 className="font-medium">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSpecs;
