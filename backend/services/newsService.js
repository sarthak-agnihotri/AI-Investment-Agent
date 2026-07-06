const axios = require("axios");

const BASE_URL = "https://newsapi.org/v2/everything";

async function getCompanyNews(company) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: company,
        language: "en",
        sortBy: "publishedAt",
        pageSize: 5,
        apiKey: process.env.NEWS_API_KEY,
      },
    });

    return response.data.articles.map((article) => ({
      title: article.title,
      source: article.source.name,
      publishedAt: article.publishedAt,
      url: article.url,
    }));
  } catch (error) {
    console.error("News API Error:", error.message);
    throw error;
  }
}

module.exports = {
  getCompanyNews,
};