import React from 'react';
import Navbar from './navbar.jsx';
import HeroSection from './HeroSection.jsx';
import Bookslides from './booksslides.jsx'; 


const Landingpage = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Bookslides/>
    </>
  );
};

export default Landingpage;
