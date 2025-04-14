import React from "react";
import HeroSection from "../components/HeroSection";
import MapSection from "../components/MapSection";
import AboutSection from "../components/AboutSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <MapSection />
    </div>
  );
}

export default Home;