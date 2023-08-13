import React from "react";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import HTML from "../assets/htmllogo.png";
import CSS from "../assets/css3.png";
import Tailwindcss from "../assets/tailwindcss.svg";
import Github from "../assets/Github.png";
import Vue from "../assets/Vue.png";
import Tsx from "../assets/Tsx.png";

export const Skills = () => {
  return (
    <div name="skills" className="w-full bg-[black] text-gray-100 py-[100px]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-purple-950">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with:</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 cursor-pointer">
          <div className="shadow-md shadow-[#fffbfa] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="html" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#fffbfa] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="css" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#fffbfa] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Javascript} alt="javascript" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#fffbfa] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="react" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#fffbfa] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwindcss} alt="tailwindcss" />
            <p className="my-4">TAILWINDCSS</p>
          </div>
          <div className="shadow-md shadow-[#fffbfa] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Vue} alt="vue" />
            <p className="my-4">VUE</p>
          </div>
          <div className="shadow-md shadow-[#fffbfa] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="github" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#fffbfa] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tsx} alt="tsx" />
            <p className="my-4">TYPESCRIPT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
