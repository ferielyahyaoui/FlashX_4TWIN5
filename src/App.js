import React from "react";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Footer from "./Components/Footer"; // Keep this import
import Description from "./Components/Description";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Description />} />
          <Route path="/ajouter" element={<Content />} />
        </Routes>
      </Router>
      <Footer /> {/* Ensure this is outside of the Router */}
    </>
  );
}

export default App;