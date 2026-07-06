const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");
const { ANALYSIS_PROMPT } = require("./prompts");
const parseAIResponse = require("../utils/jsonParser");

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  apiKey: process.env.GEMINI_API_KEY,
});

async function analyzeNode(state) {
  const prompt = `
${ANALYSIS_PROMPT}

Company Name:
${state.company}

Company Profile:
${JSON.stringify(state.profile, null, 2)}

Financials: Metrics:
${JSON.stringify(state.financials, null, 2)}

Latest News:
${JSON.stringify(state.news, null, 2)}
`;
const response = await model.invoke(prompt);
const analysis = parseAIResponse(response.content);
  return {
    ...state,
    analysis,
  };
}

module.exports = {
  analyzeNode,
};