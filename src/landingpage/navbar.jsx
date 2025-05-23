import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between p-3 transition-all duration-500 ${
        scrolling ? 'bg-white text-black shadow-md' : 'bg-transparent text-black'
      }`}
    >
      <div className="flex items-center space-x-2 mx-[70px]">
        <div className="w-6 h-6 bg-gray-300 rounded-full" /> 
        <span className="text-xl font-bold">School Library</span>
      </div>
      <ul className="hidden md:flex space-x-9">
        {['Home', 'About', 'Books', 'Return'].map((link) => (
          <li key={link} className="cursor-pointer font-bold hover:text-gray-500 transition-all">
            <Link to={`/${link.toLowerCase()}`} className="text-black">{link}</Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center space-x-4 mx-[70px]">
     
        <div className="hidden md:flex items-center border rounded px-2 py-1">
          <input 
            type="text" 
            placeholder="Search for Books" 
            className="outline-none text-sm px-1"
          />
          <svg 
            className="w-4 h-4 text-gray-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1016.65 16.65z" />
          </svg>
        </div>
        <button className="px-2 py-2 bg-black text-white rounded text-xs">Log-out</button>
      </div>
      <button 
        className={`md:hidden focus:outline-none z-50 ${scrolling ? "text-black" : "text-black"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        )}
      </button>
      <div 
        className={`fixed top-0 left-0 h-screen w-full bg-white text-black flex flex-col items-center justify-center gap-6 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-500 ease-in-out md:hidden`}
      >
        {['Home', 'About', 'Books', 'Return'].map((link) => (
          <Link 
            key={link}
            to={`/${link.toLowerCase()}`} 
            className="text-xl font-medium hover:text-gray-500 transition-all"
            onClick={() => setIsOpen(false)}
          >
            {link}
          </Link>
        ))}
      </div>
      {isOpen && (
        <div 
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
          style={{ zIndex: 30 }}
        />
      )}
    </nav>
  );
};

export default Navbar;
