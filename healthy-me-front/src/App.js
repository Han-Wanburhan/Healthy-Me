import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home-Page";
import CalculatePage from "./pages/Calculate-Page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculate" element={<CalculatePage />} />
      </Routes>
    </>
  );
}

export default App;
