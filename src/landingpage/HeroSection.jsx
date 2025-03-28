import React from 'react'
import { ReactTyped } from "react-typed";
const HeroSection = () => {
  return (

 <section className="relative flex flex-col md:flex-row items-center justify-between px-8 py-30 bg-gradient-to-b from-[#b79891] to-[#94716b]">
      <div className="max-w-md text-left space-y-4">
      <h1 className="text-4xl font-bold leading-tight text-white">
        Discover the <span className="text-[#F1E7E7]">Library's</span>
         <br /> 
      <ReactTyped
        className="text-black text-4xl font-bold"
         strings={['Special Books', 'Rare Collections', 'Hidden Knowledge']}
        typeSpeed={120}
        backSpeed={140}
        loop
       />
    </h1>
        <p className="text-white text-lg">
          Explore a vast collection of books and resources that offer a truly enriching learning experience.
        </p>
        <button className="mt-3 px-4 py-2 bg-black text-white text-sm rounded-lg transition duration-300 hover:bg-gray-800">
          Explore Now
        </button>
      </div>
    </section>

   
  )
}

export default HeroSection