import React from "react";
import HeroSection from "../components/HeroSection/index";
import AboutSection from "../components/AboutSection/index";
import MapSection from "../components/MapSection/index";


const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <MapSection />
    </main>
  );
};

export default Home;