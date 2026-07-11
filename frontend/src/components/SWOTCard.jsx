function SWOTSection({ title, lightColor, darkColor, items, darkMode }) {
  return (
    <div
      className={`rounded-lg p-5 ${
        darkMode ? darkColor : lightColor
      }`}
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>

      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className={`flex items-start gap-2 ${
              darkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            <span>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SWOTCard({ analysis, darkMode }) {
  return (
    <div
      className={`rounded-xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
  darkMode
    ? "bg-slate-800 text-white"
    : "bg-white text-black"
}`}
    >
      <h2 className="text-2xl font-bold mb-6">
        SWOT Analysis
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <SWOTSection
          title="💪 Strengths"
          lightColor="bg-green-100"
          darkColor="bg-green-900"
          items={analysis.strengths}
          darkMode={darkMode}
        />

        <SWOTSection
          title="⚠ Weaknesses"
          lightColor="bg-yellow-100"
          darkColor="bg-yellow-900"
          items={analysis.weaknesses}
          darkMode={darkMode}
        />

        <SWOTSection
          title="🚀 Opportunities"
          lightColor="bg-blue-100"
          darkColor="bg-blue-900"
          items={analysis.opportunities}
          darkMode={darkMode}
        />

        <SWOTSection
          title="🔥 Threats"
          lightColor="bg-red-100"
          darkColor="bg-red-900"
          items={analysis.threats}
          darkMode={darkMode}
        />

      </div>
    </div>
  );
}

export default SWOTCard;