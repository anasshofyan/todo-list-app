import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlanetPage from "./pages/PlanetPage";
import GlobalStyles from "./assets/styles/GlobalStyles";
import TodoPage from "./pages/TodoPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<PlanetPage />} />
        <Route path="/to-do" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
