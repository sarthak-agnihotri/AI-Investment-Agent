const { researchCompany } = require("../services/researchService");
const investmentGraph = require("../ai/graph");

async function analyze(req, res) {

    let company;
    let research;

    try {

        company = req.body.company;

        research = await researchCompany(company);

        const result = await investmentGraph.invoke({
            company,
            symbol: research.symbol,
            profile: research.profile,
            financials: research.financials,
            news: research.news,
        });

        return res.json({
            success: true,
            company,
            symbol: research.symbol,
            profile: research.profile,
            financials: research.financials,
            news: research.news,
            analysis: result.analysis,
        });

    } catch (error) {

        console.error(error);

        // Gemini quota exceeded
        if (error.status === 429) {

            return res.json({
                success: true,
                company,
                symbol: research?.symbol,
                profile: research?.profile,
                financials: research?.financials,
                news: research?.news,

                analysis: {
                    recommendation: "HOLD",
                    investmentScore: 72,
                    riskScore: 38,

                    reasoning:
                        "Gemini API quota exceeded. Showing demo AI analysis.",

                    strengths: [
                        "Strong brand recognition",
                        "Healthy financial position",
                        "Large customer base",
                        "Consistent innovation"
                    ],

                    weaknesses: [
                        "High valuation",
                        "Intense competition"
                    ],

                    opportunities: [
                        "Expansion into emerging markets",
                        "AI-driven growth"
                    ],

                    threats: [
                        "Economic slowdown",
                        "Government regulations"
                    ],

                    summary:
                        "Demo AI response because Gemini quota has been exceeded."
                }
            });
        }

        return res.status(500).json({
            success: false,
            message: error.message || "Server Error",
        });
    }
}

module.exports = {
    analyze,
};