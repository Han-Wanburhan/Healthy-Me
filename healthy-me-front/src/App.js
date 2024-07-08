import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home-Page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
