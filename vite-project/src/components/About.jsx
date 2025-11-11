import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-b from-pink-100 via-white to-pink-50 text-center overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-pink-200 rounded-full blur-2xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-300 rounded-full blur-3xl opacity-25"></div>

      {/* Content */}
      <div className="relative container mx-auto max-w-3xl">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-8 tracking-tight"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Our Commitment
        </h2>

        <p
          className="text-lg md:text-xl text-gray-700 leading-relaxed"
          style={{ fontFamily: "Open Sans, sans-serif" }}
        >
          <span className="font-semibold text-pink-600">
            Early detection saves lives.
          </span>{" "}
          Our mission is to provide essential resources, emotional support, and
          reliable information to patients, survivors, and their families. We
          are dedicated to fostering a compassionate community — one that
          spreads awareness, promotes regular health checks, and inspires hope
          in the fight against cancer.
        </p>

        <div className="mt-10">
          <a
            href="#contact"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-transform duration-300 transform hover:scale-105"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
