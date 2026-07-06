import CompanyCard from "./CompanyCard";
import RecommendationCard from "./RecommendationCard";
import SWOTCard from "./SWOTCard";
import NewsCard from "./NewsCard";
import ExportPDF from "./ExportPDF";

function Dashboard({ data, darkMode }) {
  return (
    <div className="mt-10 space-y-10">

      {/* PDF Export Button */}
      <div className="flex justify-end">
        <ExportPDF data={data} darkMode={darkMode} />
      </div>

      {/* Company Overview */}
      <section>
        <h2
          className={`text-3xl font-bold mb-6 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          📊 Company Overview
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <CompanyCard
            data={data}
            darkMode={darkMode}
          />

          <RecommendationCard
            analysis={data.analysis}
            darkMode={darkMode}
          />
        </div>
      </section>

      {/* SWOT Analysis */}
      <section>
        <h2
          className={`text-3xl font-bold mb-6 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          💡 SWOT Analysis
        </h2>

        <SWOTCard
          analysis={data.analysis}
          darkMode={darkMode}
        />
      </section>

      {/* Latest News */}
      <section>
        <h2
          className={`text-3xl font-bold mb-6 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          📰 Latest News
        </h2>

        <NewsCard
          news={data.news}
          darkMode={darkMode}
        />
      </section>

    </div>
  );
}

export default Dashboard;