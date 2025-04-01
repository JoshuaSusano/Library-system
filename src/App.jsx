import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./landingpage/Landingpage";
import LoginPage from "./loginpage/login";

function App() {
  return (
    <Router basename="/Library-system">  {/* Set basename if your app is under a subpath */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Add more routes if needed */}
      </Routes>
    </Router>
  );
}

export default App;
