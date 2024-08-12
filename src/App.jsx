import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import JobDetail from "./pages/JobDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="detail/:id" element={<JobDetail />} />
      </Route>
    </Routes>
  );
};

export default App;
