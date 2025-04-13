import React from 'react'

const AboutHeader = () => {
  return (
    <div className="bg-amber-950 h-[20rem] flex items-center justify-center mt-[4rem]">
  <div className="text-white text-center">
    <h1 className="text-4xl font-medium">Welcome to Our School</h1>
    <h2 className="text-4xl font-semibold mt-2">Library</h2>
    <p className="font-light text-[13px] mt-2">
      Explore the vast collection of books and resources
    </p>
    <div className="mt-5">
      <button className=" h-[40px] p-1 rounded w-[200px] bg-black">Discover More</button>
    </div>
  </div>
</div>

  )
}

export default AboutHeader