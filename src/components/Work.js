import React from "react";
import Counter from "../assets/projects/Counter.png";
import Altcamp from "../assets/projects/Altcamp.png";
import Github from "../assets/projects/Github.png";
import Meetup from "../assets/projects/Meetup.png";

const Work = () => {
  return (
    <div name="projects" className="w-full text-gray-100 bg-[black] py-[100px]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-purple-950">
            Projects
          </p>
          <p className="py-6">Check out some of my projects</p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 mb-[20px] rounded-[10px] overflow-hidden border border-gray-500">
          <div className="h-[250px] content-div text-center flex flex-col justify-evenly">
            <h4 className="text-lg">Counter App</h4>
            <p className="flex justify-center gap-3">
              <a
                href="https://beautiful-counter-demo.netlify.app/"
                className="bg-white text-gray-500 py-2 px-4 rounded-md"
              >
                Demo
              </a>
              <a
                href="https://github.com/just-talis/react-counter-demo"
                className="bg-white text-gray-500 py-2 px-4 rounded-md"
              >
                Code
              </a>
            </p>
          </div>
          <img
            className="object-cover h-[250px] w-full"
            alt="demoimage"
            src={Counter}
          />
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 mb-[20px] rounded-[10px] overflow-hidden border border-gray-500">
          <div className="h-[250px] content-div text-center flex flex-col justify-evenly">
            <h4 className="text-lg">Altcamp</h4>
            <p className="flex justify-center gap-3">
              <a
                href="https://thealtcamp.com/"
                className="bg-white text-gray-500 py-2 px-4 rounded-md"
              >
                Demo
              </a>
              <a
                href="https://github.com/AltCamp/altcampv1-frontend"
                className="bg-white text-gray-500 py-2 px-4 rounded-md"
              >
                Code
              </a>
            </p>
          </div>
          <img
            className="object-cover h-[250px] w-full"
            alt="demoimage"
            src={Altcamp}
          />
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 mb-[20px] rounded-[10px] overflow-hidden border border-gray-500">
          <div className="h-[250px] content-div text-center flex flex-col justify-evenly">
            <h4 className="text-lg">Github Api</h4>
            <p className="flex justify-center gap-3">
              <a
                href="https://just-talis-github-profile.web.app/"
                className="bg-white text-gray-500 py-2 px-4 rounded-md"
              >
                Demo
              </a>
              <a
                href="https://github.com/just-talis/github-profile-api"
                className="bg-white text-gray-500 py-2 px-4 rounded-md"
              >
                Code
              </a>
            </p>
          </div>
          <img
            className="object-cover h-[250px] w-full"
            alt="demoimage"
            src={Github}
          />
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 rounded-[10px] overflow-hidden border border-gray-500">
          <div className="h-[250px] content-div text-center flex flex-col justify-evenly">
            <h4 className="text-lg">Meetup Api</h4>
            <p className="flex justify-center gap-3">
              <a
                href="https://randommeetup.netlify.app"
                className="bg-white text-gray-500 py-2 px-4 rounded-md"
              >
                Demo
              </a>
              <a
                href="https://github.com/just-talis/Meetup-Api"
                className="bg-white text-gray-500 py-2 px-4 rounded-md"
              >
                Code
              </a>
            </p>
          </div>
          <img
            className="object-cover h-[250px] w-full"
            alt="demoimage"
            src={Meetup}
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
