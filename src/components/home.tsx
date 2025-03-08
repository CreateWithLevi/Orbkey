import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import LoadingScreen from "./LoadingScreen";
import WaitlistDialog from "./WaitlistDialog";
import Alert from "./Alert";
import StatsPage from "./StatsPage";
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
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleWaitlistSuccess = (message: string) => {
    setIsWaitlistOpen(false);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <LoadingScreen />
      <Alert
        show={showAlert}
        message={alertMessage}
      />
      <Navbar onPreOrder={() => setIsWaitlistOpen(true)} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection
          title={title}
          subtitle={subtitle}
          onWaitlistSuccess={(msg) => handleWaitlistSuccess(msg)}
        />
        <ColorVariants />
        <ProductMockup />
        <ComparisonSection />
        <ProductSpecs onPreOrder={() => setIsWaitlistOpen(true)} />
        <Footer />
      </motion.main>
      <WaitlistDialog
        open={isWaitlistOpen}
        onOpenChange={setIsWaitlistOpen}
        onSuccess={(msg) => handleWaitlistSuccess(msg)}
      />
    </div>
  );
};

export default Home;
