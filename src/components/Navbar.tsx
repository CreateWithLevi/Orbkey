import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onPreOrder?: () => void;
}

const Navbar = ({ onPreOrder = () => { } }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const colorSection = document.querySelector("section:has(h2)");
      if (colorSection) {
        const rect = colorSection.getBoundingClientRect();
        setIsScrolled(window.scrollY > window.innerHeight - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a
              href="/"
              className="text-xl font-bold transition-colors duration-300 text-gray-900"
            >
              OrbKey
            </a>
            <div className="hidden md:flex items-center space-x-8 ml-12">
              <button
                onClick={() => scrollToSection('color-variants')}
                className="text-sm font-medium transition-colors duration-300 text-gray-900/80 hover:text-gray-900"
              >
                Colors
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-sm font-medium transition-colors duration-300 text-gray-900/80 hover:text-gray-900"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('specs')}
                className="text-sm font-medium transition-colors duration-300 text-gray-900/80 hover:text-gray-900"
              >
                Specs
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-sm font-medium transition-colors duration-300 text-gray-900/80 hover:text-gray-900"
              onClick={() => window.location.href = "mailto:jlstudio.xyz@gmail.com"}
            >
              Contact
            </Button>
            <Button
              onClick={onPreOrder}
              className={cn(
                "transition-all duration-300 bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors",
              )}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Pre-order
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
