function Welcome({ darkMode }) {
  return (
    <div
      className={`mt-16 rounded-xl shadow-lg p-12 text-center transition-colors duration-300 ${
        darkMode
          ? "bg-slate-800 text-white"
          : "bg-white text-gray-800"
      }`}
    >
      <h2 className="text-4xl font-bold mb-6">
        📈 AI Investment Research Agent
      </h2>

      <p className="text-xl mb-8">
        Search any company to receive an AI-powered investment analysis.
      </p>

      <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">

        <div>📊 Company Overview</div>

        <div>💡 AI Recommendation</div>

        <div>📈 Financial Metrics</div>

        <div>📰 Latest News</div>

        <div>⚖ SWOT Analysis</div>

        <div>📄 PDF Report</div>

      </div>

      <p className="mt-10 text-gray-500">
        Try searching Apple, Tesla, NVIDIA or Microsoft.
      </p>
    </div>
  );
}

export default Welcome;