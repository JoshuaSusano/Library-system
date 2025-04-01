import React from 'react'
import { Link } from 'react-router-dom';
const navbar = () => {
  return (
<nav className="flex justify-between items-center p-3 bg-white shadow-md ">
      <div className="text-xl font-bold mx-[70px]">Logo</div>
      <ul className="hidden md:flex space-x-9">
        <li className="cursor-pointer font-bold">Home</li>
        <li className="cursor-pointer font-bold">About</li>
        <li className="cursor-pointer font-bold">Books</li>
        <li className="cursor-pointer font-bold">Return</li>
      </ul>
      <button className="px-2 py-2 bg-black text-white rounded text-xs mx-[70px]">Search</button>
    </nav>
  )
}

export default navbar