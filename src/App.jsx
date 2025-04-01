import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./landingpage/Landingpage";
import LoginPage from "./loginpage/login";

function App() {
  return (
    <Router basename="/Library-system">  
      <Routes>
      <Route path="/" element={<LoginPage />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
