import React from "react";
import HeroSection from "../components/HeroSection";
import MapSection from "../components/MapSection";
import AboutSection from "../components/AboutSection";
import UtilidadesSection from "../components/Forms";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <UtilidadesSection /> 
      <MapSection />
    </div>
  );
}

export default Home;