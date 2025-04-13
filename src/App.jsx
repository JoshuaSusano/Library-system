import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./landingpage/Landingpage";
import LoginPage from "./loginpage/login";
import Aboutpage from "./Aboutpage/Aboutholder"
function App() {
  return (
    <Router basename="/Library-system">  
      <Routes>
      <Route path="/" element={<LoginPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/about" element={<Aboutpage/>}/>
        <Route path="/home" element={<LandingPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
