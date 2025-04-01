import React from 'react';
import { ReactTyped } from "react-typed";
import Python from '../landingpage/python.png';
import Algebra from '../landingpage/algebra.jpg';
import Novel from '../landingpage/Novel.jpg';
const HeroSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-20 bg-gradient-to-b from-[#b79891] to-[#e8d6cc]">
    <div className="max-w-md text-center md:text-left space-y-4">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
        Discover the Best <span className="text-white"> Library's Books</span>
        <br />
        <ReactTyped
          className="text-[#371a04] text-3xl md:text-4xl font-bold"
          strings={["Mathematics", "Science", "English", "Novel", "Programming"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </h1>
      <p className="text-white text-sm md:text-base leading-relaxed">
        Explore a vast collection of books and resources that offer a truly enriching learning experience. 
        Discover rare manuscripts and academic journals that expand your knowledge. our library provides an extensive selection to inspire and educate.
      </p>
      <button className="mt-4 px-6 py-2 bg-black text-white text-sm rounded-lg transition duration-300 hover:bg-gray-800">
        Explore Now
      </button>
    </div>
    <div className="flex flex-col md:flex-row justify-center md:justify-end gap-6 md:gap-8 lg:gap-5 mt-10 md:mt-0 w-full md:w-auto">
      <div className="bg-gray-300 text-white h-[300px] md:h-[400px] w-full md:w-[300px] rounded-lg shadow-lg flex items-center justify-center mt-[50px]">
        <img src={Python} alt="Programming Book" className="h-full w-full object-cover rounded-lg" />
      </div>
      <div className="flex flex-col gap-6 w-full md:w-auto">
        <div className="bg-gray-300 text-white h-[250px] md:h-[300px] w-full md:w-[300px] rounded-lg shadow-lg flex items-center justify-center">
          <img src={Algebra} alt="Algebra" className="h-full w-full object-cover rounded-lg" />
        </div>
        <div className="bg-gray-300 text-white h-[220px] md:h-[260px] w-full md:w-[300px] rounded-lg shadow-lg flex items-center justify-center">
          <img src={Novel} alt="Hidden Knowledge" className="h-full w-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  </section>
  );
};

export default HeroSection;
