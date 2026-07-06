const { GoogleGenAI } = require("@google/genai");// Import the GoogleGenAI class from the @google/genai package

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

module.exports = ai;