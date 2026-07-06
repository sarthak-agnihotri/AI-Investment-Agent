function parseAIResponse(text) {
  try {
    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleaned);
  } catch (err) {
    throw new Error("Failed to parse AI JSON response.");
  }
}

module.exports = parseAIResponse;