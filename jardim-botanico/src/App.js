import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlantPage from "./pages/plantPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planta/:index" element={<PlantPage />} />
      </Routes>
    </Router>
  );
}

export default App;
