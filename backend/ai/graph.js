const { StateGraph, START, END } = require("@langchain/langgraph");

const { analyzeNode } = require("./nodes");

const graph = new StateGraph({
  channels: {
    company: null,
    symbol: null,
    profile: null,
    financials: null,
    news: null,
    analysis: null,
  },
});

graph.addNode("analyze", analyzeNode);

graph.addEdge(START, "analyze");
graph.addEdge("analyze", END);

module.exports = graph.compile();