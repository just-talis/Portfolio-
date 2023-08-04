import React from "react";
// import Count from "../assets/projects/Count.jpg";
import Purple from "../assets/projects/Purple.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-100 bg-[black]">
      {/* container */}
      <div className="max-w[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-purple-950">
            Work
          </p>
          <p className="py-6">Check out some of my projects</p>
        </div>

        <div
          style={{ backgroundImage: `url(${Purple})` }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          <div className="shadow-lg shadow-[#fffbfa] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                Counter App
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
