import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlanetPage from "./pages/PlanetPage";
import GlobalStyles from "./assets/styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<PlanetPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
