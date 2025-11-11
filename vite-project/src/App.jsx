import { useState } from 'react'
import './App.css'

import Fonts from "./components/Fonts.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Quotes from "./components/Quotes.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
  <div className="relative z-0">
  <Hero />
  <About />
  <Quotes />
  <Contact />
  <Footer />
</div>

  
  );
}
