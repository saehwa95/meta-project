import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectCreate from "./pages/ProjectCreate";
import ProjectContents from "./pages/ProjectContents";
import Asset from "./pages/Asset";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProjectCreate />} />
          <Route path="/contents" element={<ProjectContents />} />
          <Route path="/asset" element={<Asset />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
