const axios = require("axios");

const BASE_URL = "https://finnhub.io/api/v1";

async function getSymbol(companyName) {
  try {
    const response = await axios.get(
      `${BASE_URL}/search`,
      {
        params: {
          q: companyName,
          token: process.env.FINNHUB_API_KEY,
        },
      }
    );

    if (!response.data.result.length) {
      throw new Error("Company not found");
    }

    return response.data.result[0].symbol;

  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

module.exports = {
  getSymbol,
};