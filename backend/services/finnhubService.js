const axios = require("axios");

const BASE_URL = "https://finnhub.io/api/v1";

// Existing function
async function getCompanyProfile(symbol) {
  const response = await axios.get(`${BASE_URL}/stock/profile2`, {
    params: {
      symbol,
      token: process.env.FINNHUB_API_KEY,
    },
  });

  return response.data;
}

// NEW function
async function getFinancialMetrics(symbol) {
  const response = await axios.get(`${BASE_URL}/stock/metric`, {
    params: {
      symbol,
      metric: "all",
      token: process.env.FINNHUB_API_KEY,
    },
  });

  return response.data.metric;
}

module.exports = {
  getCompanyProfile,
  getFinancialMetrics,
};