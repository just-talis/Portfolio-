import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function Main() {
  return (
    <div name="main" className="w-full h-screen bg-[black]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold text-purple-950">
          Esther Simon
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#636c88]">
          FRONTEND DEVELOPER.
        </h2>
        <p className="text-[#8892b0] max-w-[700px] py-4">
          I'm passionate about software engineering and currently learning how
          to build web apps with HTML, CSS, React, Vue and Javascript. I will
          love to be part of tech communities and contribute to open-source
          projects. I'm focused on building responsive frontend web
          applications.
        </p>
        <div>
          <button className="hover:bg-[#6fc2b0] hover:border-[#6fc2b0] duration-300 text-white group border-2 px-6 py-3 my-2 flex items-center">
            View Work 
            <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight  className="ml-3"/>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
