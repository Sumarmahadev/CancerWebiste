import React, { useState, useEffect, useMemo } from "react";

// 🧠 Typing Heading with gradient color
const TypingHeading = React.memo(() => {
  const phrases = ["Hope", "Strength", "Awareness"];
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout;

    if (!isDeleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 120);
    } else if (!isDeleting && text.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 60);
    } else if (isDeleting && text.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 400);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-wide drop-shadow-lg text-center text-gradient fade-up">
      {text}
      <span className="blinking-cursor"></span>
    </h1>
  );
})
// 🧍 Static section (stays fixed under the heading)
const StaticHeroText = React.memo(() => (
  <div 
    // Responsive padding to adapt layout on all devices
    className="text-center mt-6 relative z-10 fade-up px-4 sm:px-6 md:px-12 lg:px-24"
  >
    <p 
      // Keeps the paragraph visible without hiding text
      className="text-base sm:text-lg md:text-xl font-light italic leading-relaxed drop-shadow-md text-white "
    >
      Together, we stand against cancer — inspiring courage, compassion, and change.
    </p>

    <a
      // Responsive button width and spacing
      href="#contact"
      className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold shadow-lg transform transition-transform hover:scale-105 mb-8 mt-2 w-full sm:w-auto"
    >
      Join the Movement
    </a>
  </div>
));




const Hero = () => {
  const images = useMemo(
    () => [
      "/images/awareness11.png",
      "/images/awareness12.png",
      "/images/awareness13.png",
      "/images/awareness14.png",
      "/images/awareness15.png",
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      10000
    );
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header
      id="hero"
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center items-center text-white"
    >
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-lg py-3 md:py-4 shadow-md z-50">
        <div className="container mx-auto flex flex-wrap justify-center items-center gap-4 md:gap-10 font-medium text-gray-800 text-sm sm:text-base">
          <a href="#about" className="hover:text-pink-600 transition duration-300">
            Our Mission
          </a>
          <a href="#quotes" className="hover:text-pink-600 transition duration-300">
            Inspiration
          </a>
          <a href="#contact" className="hover:text-pink-600 transition duration-300">
            Support
          </a>
        </div>
      </nav>

      {/* 🖼 Background image slideshow */}
      <div className="absolute inset-0">
        {images.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-center bg-cover transition-opacity duration-[2000ms] ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80"></div>
      </div>

      {/* ✨ Hero text section */}
      <div className="relative z-10 text-center px-4 sm:px-8 md:px-12 max-w-3xl mt-20 sm:mt-24 md:mt-32">
        <TypingHeading />
        <StaticHeroText />
      </div>

      {/* 🌊 Decorative wave at bottom */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-16 sm:h-24 md:h-32"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.14,172-41.86,82-16.48,168-17.73,250.72-.39,61.09,12.46,119.86,33.74,182,45.26,86,16,175.53,11.34,261.69-8.11V120H0V97.35A600.21,600.21,0,0,0,321.39,56.44Z"
            opacity=".25"
            fill="#f9fafb"
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default Hero;
