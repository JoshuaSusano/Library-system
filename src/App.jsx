import { useState } from 'react';
import Login from './loginpage/login.jsx';
import Navbar from './landingpage/navbar.jsx';
import HeroSection from './landingpage/HeroSection.jsx';
import Bookslides from   './landingpage/booksslides.jsx';
function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Bookslides/>
    </>
  );
}

export default App;
