import React from "react";
import { motion } from "framer-motion";
import Python from "../landingpage/python.png";
import Algebra from "../landingpage/algebra.jpg";
import Novel from "../landingpage/Novel.jpg";
import AI from "../landingpage/AI.jpg";
import English from "../landingpage/English.jpg";
import Englishfile from "../landingpage/Englishfile.jpg";
import python2 from "../landingpage/phyton2.jpg";
import python3 from "../landingpage/phyton3.jpg";

const BookSlides = () => {
  const cards = [
    AI,
    English, 
    Englishfile,
    python2,
    Algebra,
    Novel,
    Python,
    python3,
  ];
  const repeatedCards = [...cards, ...cards]; 
  return (
    <div className="p-10 mx-[30px] overflow-hidden relative ">
      <h1 className="text-2xl font-bold mb-2">Complete Books</h1>
      <p className="text-gray-600 mb-5">These are the best books to read to gain knowledge.</p>

      <div className="w-full flex justify-center mt-10 overflow-hidden relative">
        <motion.div
          className="flex gap-4 flex-nowrap"
          animate={{ x: ["0%", "-50%"] }} 
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{ display: "flex" }}
        >
          {repeatedCards.map((card, index) => (
            <div key={index} className="w-64 h-90 bg-gray-200 rounded-xl shadow-lg overflow-hidden">
              <img src={card} alt={`Book ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BookSlides;