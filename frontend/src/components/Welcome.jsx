function Welcome({ darkMode }) {
  return (
    <div
      className={`mt-10 sm:mt-16 rounded-xl shadow-lg p-6 sm:p-8 lg:p-12 text-center transition-colors duration-300 ${
        darkMode
          ? "bg-slate-800 text-white"
          : "bg-white text-gray-800"
      }`}
    >
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
        📈 AI Investment Research Agent
      </h2>

      {/* Subtitle */}
      <p
        className={`text-lg sm:text-xl mb-8 ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Search any company to receive an AI-powered investment analysis.
      </p>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left max-w-4xl mx-auto">
        <div className="flex items-center gap-3 text-lg">
          <span>📊</span>
          <span>Company Overview</span>
        </div>

        <div className="flex items-center gap-3 text-lg">
          <span>💡</span>
          <span>AI Recommendation</span>
        </div>

        <div className="flex items-center gap-3 text-lg">
          <span>📈</span>
          <span>Financial Metrics</span>
        </div>

        <div className="flex items-center gap-3 text-lg">
          <span>📰</span>
          <span>Latest News</span>
        </div>

        <div className="flex items-center gap-3 text-lg">
          <span>⚖</span>
          <span>SWOT Analysis</span>
        </div>

        <div className="flex items-center gap-3 text-lg">
          <span>📄</span>
          <span>Download PDF Report</span>
        </div>
      </div>

      {/* Example Companies */}
      <div
        className={`mt-10 border-t pt-6 ${
          darkMode ? "border-slate-600" : "border-gray-300"
        }`}
      >
        <p
          className={`text-sm sm:text-base ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Try searching{" "}
          <span className="font-semibold text-blue-500">Apple</span>,{" "}
          <span className="font-semibold text-blue-500">Tesla</span>,{" "}
          <span className="font-semibold text-blue-500">NVIDIA</span>, or{" "}
          <span className="font-semibold text-blue-500">Microsoft</span>.
        </p>
      </div>
    </div>
  );
}

export default Welcome;