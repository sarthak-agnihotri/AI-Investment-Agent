const ai = require("../lib/gemini");

async function analyzeCompany(company) {

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `
        You are a professional investment analyst.

        Analyze ${company}.

        Give:

        Company Overview

        Strengths

        Weaknesses

        Investment Recommendation

        Keep it concise.
        `
    });

    return response.text;

}

module.exports = {
    analyzeCompany
};