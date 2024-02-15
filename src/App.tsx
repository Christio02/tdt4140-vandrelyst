import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DestinationPage from "./pages/DestinationPage";
import Frontpage from "./pages/Frontpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Frontpage />} />
      <Route path="/destinationpage" element={<DestinationPage />} />
    </Routes>
  );
}

export default App;
