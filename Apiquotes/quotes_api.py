from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app, origins=["http://localhost:5174"])  

quotes = [
    {
        "quote": "You never know how strong you are until being strong is your only choice.",
        "author": "Bob Marley"
    },
    {
        "quote": "Cancer is a word, not a sentence.",
        "author": "John Diamond"
    },
    {
        "quote": "You beat cancer by how you live, why you live, and in the manner in which you live.",
        "author": "Stuart Scott"
    },
    {
        "quote": "Strength doesn’t come from what you can do. It comes from overcoming the things you once thought you couldn’t.",
        "author": "Rikki Rogers"
    },
    {
        "quote": "Hope is the only thing stronger than fear.",
        "author": "Suzanne Collins"
    },
    {
        "quote": "Sometimes you don’t realize your own strength until you come face to face with your greatest weakness.",
        "author": "Susan Gale"
    },
    {
        "quote": "Faith is daring the soul to go beyond what the eyes can see.",
        "author": "William Newton Clark"
    },
    {
        "quote": "The human spirit is stronger than anything that can happen to it.",
        "author": "C.C. Scott"
    },
    {
        "quote": "Don’t count the days, make the days count.",
        "author": "Muhammad Ali"
    },
    {
        "quote": "Every day is a chance to get stronger, to eat better, to live healthier, and to be the best version of you.",
        "author": "Sumar chimacode"
    }
]

@app.route("/api/quote")
def get_quote():
    """Return one random cancer-related quote."""
    return jsonify(random.choice(quotes))

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5001, debug=True)
