import React from "react";

const Contact = () => {
  return (
    <div className="py-20 bg-white">
      <h2 className="text-center text-gradient text-2xl pb-2" id="Contact">
        Contact Me
      </h2>
      <div className="mx-auto w-full lg:w-1/2 p-6 bg-slate-100 rounded-lg shadow-lg">
        <form
          action="https://formsubmit.co/zach.ecab@gmail.com"
          method="POST"
        >
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-slate-700">
              Email address
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              id="email"
              aria-describedby="email"
              required
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-slate-700">
              Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              id="name"
              required
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 text-slate-700">
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              id="message"
              name="message"
              placeholder="Message"
              style={{ minHeight: "10rem" }}
            ></textarea>
          </div>
          <button type="submit" className="w-full px-3 py-2 text-white bg-indigo-400 rounded-md hover:bg-indigo-600 focus:outline-none">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
