import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlantPage from "./pages/plantPage"

function App() {
  return (
    <Router>
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<Home />} />
        
        {/* Rota dinâmica para cada espécime */}
        {/*
          Usaremos o índice (ou algum ID) para identificar cada
          elemento no array do data.json.
        */}
        <Route path="/planta/:index" element={<PlantPage />} />
      </Routes>
    </Router>
  );
}

export default App;
