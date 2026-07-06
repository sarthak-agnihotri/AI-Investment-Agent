const { getSymbol } = require("./symbolService");
const { getCompanyProfile, getFinancialMetrics,} = require("./finnhubService");
const { getCompanyNews } = require("./newsService");

async function researchCompany(companyName) {
  const symbol = await getSymbol(companyName);

  const profile = await getCompanyProfile(symbol);

  const financials=await getFinancialMetrics(symbol);

  const news = await getCompanyNews(companyName);

  return {
    symbol,
    profile,
    financials,
    news,
  };
}

module.exports = {
  researchCompany,
};