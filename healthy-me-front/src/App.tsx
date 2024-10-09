import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home-Page";
import CalculatePage from "./pages/Calculate-Page";
import HealthfoodPage from "./pages/Healtfood-Page";
import SaveCalPage from "./pages/SaveCal-Page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculate" element={<CalculatePage />} />
        <Route path="/healtfood" element={<HealthfoodPage />} />
        <Route path="/savecal" element={<SaveCalPage />} />
      </Routes>
    </>
  );
}

export default App;
