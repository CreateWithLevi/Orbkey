import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">OrbKey</h3>
            <p className="text-gray-400 text-sm">
              Revolutionizing typing with spherical ergonomics and premium
              design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>Features</li>
              <li>Specifications</li>
              <li>Pre-order</li>
              <li>Warranty</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>About</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Careers</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>Help Center</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm"
        >
          © {new Date().getFullYear()} OrbKey. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
