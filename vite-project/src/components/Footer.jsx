import React from "react";


const Footer = () => {
  return (
    <footer className="bg-pink-600 text-white py-6 text-center">
      <p className="text-sm md:text-base">
        © {new Date().getFullYear()} Cancer Awareness & Support. All Rights Reserved.
      </p>
      <p className="mt-2 text-xs md:text-sm">
        Built by❤️ Sumar Chimacode
      </p>
    </footer>
  );
};

export default Footer;
