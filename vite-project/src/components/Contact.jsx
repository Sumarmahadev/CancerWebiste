import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white text-center border-t border-gray-200 font-[Open_Sans]"
    >
      <div className="container mx-auto max-w-2xl">
        <h2
          className="text-4xl md:text-5xl font-[Inter] font-bold text-pink-700 mb-6"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Contact Us
        </h2>
        <form
          className="space-y-4"
          style={{ fontFamily: "Open Sans, sans-serif" }}
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>
          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-transform transform hover:scale-105 shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
