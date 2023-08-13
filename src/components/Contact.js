import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full text-gray-100 bg-[black] py-[100px] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/67189ebc-539f-4c91-be08-897611dbae24"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-purple-950">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Send an email to esthersimon540@gmail.com
          </p>
        </div>
        <input
          className="p-2 bg-purple-900"
          type="text"
          placeholder="Name"
          name="name"
        ></input>
        <input
          className="my-4 p-2 bg-purple-900"
          type="email"
          placeholder="Email"
          name="email"
        ></input>
        <textarea
          className="my-4 p-2 bg-purple-900"
          placeholder="Message"
          name="message"
          rows={10}
        ></textarea>
        <button className="text-white p-2 border-2 hover:bg-purple-900 hover:border-purple-900 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Connect
        </button>
      </form>
    </div>
  );
};

export default Contact;
