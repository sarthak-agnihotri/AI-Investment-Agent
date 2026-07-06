function ScoreBar({ title, value, color }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-semibold">{title}</span>
        <span>{value}/100</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={`${color} h-3 rounded-full transition-all duration-700`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}

function RecommendationCard({ analysis, darkMode }) {
  const recommendationColor =
    analysis.recommendation === "INVEST"
      ? "text-green-600"
      : analysis.recommendation === "HOLD"
      ? "text-yellow-500"
      : "text-red-500";

  return (
    <div
      className={`rounded-xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
  darkMode
    ? "bg-slate-800 text-white"
    : "bg-white text-black"
}`}
    >
      <h2 className="text-2xl font-bold mb-6">
        AI Recommendation
      </h2>

      <h1 className={`text-5xl font-bold mb-8 ${recommendationColor}`}>
        {analysis.recommendation}
      </h1>

      <ScoreBar
        title="Investment Score"
        value={analysis.investmentScore}
        color="bg-green-500"
      />

      <ScoreBar
        title="Risk Score"
        value={analysis.riskScore}
        color="bg-red-500"
      />

      <div className="mt-8">
        <h3 className="font-bold text-lg mb-2">
          AI Reasoning
        </h3>

        <p
          className={`leading-7 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {analysis.reasoning}
        </p>
      </div>
    </div>
  );
}

export default RecommendationCard;