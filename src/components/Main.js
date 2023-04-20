import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function Main() {
  return (
    <div name="main" className="w-full h-screen bg-[white]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p>Hi, my name is</p>
        <h1>Esther Simon</h1>
        <h2>I'm a FrontEnd Developer.</h2>
        <p>
          I'm passionate about software engineering and currently learning how
          to build web apps with HTML, CSS, React, Vue and Javascript. I will
          love to be part of tech communities and contribute to open-source
          projects. I'm focused on building responsive frontend web applications.
        </p>
        <div>View Work <HiArrowNarrowRight/></div>
      </div>
    </div>
  );
}

export default Main;
