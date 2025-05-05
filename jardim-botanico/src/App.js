import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlantPage from "./pages/plantPage";
import Layout from "./components/layoutPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planta/:index" element={<PlantPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
