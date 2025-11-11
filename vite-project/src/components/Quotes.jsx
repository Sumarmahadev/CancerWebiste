import React, { useState, useEffect } from "react";

const Quotes = () => {
  const [quoteData, setQuoteData] = useState({
    quote: "Loading uplifting thoughts...",
    author: "",
  });
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(true);

  const fetchQuote = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5001/api/quote");
      const data = await response.json();

      setFade(false);
      setTimeout(() => {
        setQuoteData({ quote: data.quote, author: data.author });
        setFade(true);
      }, 400);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuoteData({
        quote:
          "Even in hard times, keep believing — strength comes quietly in persistence.",
        author: "Support Team",
      });
      setFade(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
    const interval = setInterval(fetchQuote, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
  id="quotes"
  className="relative py-20 bg-gradient-to-b from-pink-50 via-white to-pink-100 border-t border-pink-200 text-center overflow-hidden flex flex-col items-center min-h-[100vh]"
>

      <div className="absolute top-10 left-10 w-24 h-24 bg-pink-200 rounded-full blur-2xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-300 rounded-full blur-3xl opacity-25"></div>

      <h2
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-pink-700 mb-10 tracking-tight text-center"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Words of Strength 💖
      </h2>

      <div className="relative bg-white/70 backdrop-blur-lg shadow-xl rounded-3xl p-8 sm:p-10 max-w-2xl w-11/12 md:w-3/4 transition-all duration-500 hover:shadow-2xl">
        {loading ? (
          <p
            className="text-xl text-gray-600"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            Fetching a thought to lift your day...
          </p>
        ) : (
          <div
            className={`transition-all duration-700 ease-in-out ${
              fade ? "opacity-100 blur-0" : "opacity-0 blur-sm"
            }`}
          >
            <blockquote
              className="text-2xl sm:text-3xl italic text-gray-800 leading-snug mb-4"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              “{quoteData.quote}”
            </blockquote>
            <p
              className="text-lg sm:text-xl font-semibold text-pink-600"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              — {quoteData.author || "Anonymous"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Quotes;
