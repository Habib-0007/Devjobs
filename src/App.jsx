import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import JobDetails from "./pages/JobDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="details/:id" element={<JobDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
