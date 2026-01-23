import React from "react";
import { Routes, Route } from "react-router-dom";
import Web from "./components/Web";

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<Web />} />
    </Routes>
  );
}
