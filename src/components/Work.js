import React from "react";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-100 bg-[black]">
      {/* container */}
      <div className="max-w[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-purple-950">
            Work
          </p>
          <p className="py-4">Check out some of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="shadow-lg shadow-[#fffbfa] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div>
              <span></span>
              <div>
                <a href="/">
                  <button></button>
                </a>
                <a href="/">
                  <button></button>
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
