import { useState, useEffect } from "react";
import api from "../services/api";

function SearchBar({ setResult, darkMode, selectedCompany }) {
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);

  // Update input when a company is selected from history
  useEffect(() => {
    if (selectedCompany) {
      setCompany(selectedCompany);
    }
  }, [selectedCompany]);

  // Automatically search when history item is clicked
  useEffect(() => {
    if (selectedCompany) {
      handleAnalyze(selectedCompany);
    }
  }, [selectedCompany]);

  const handleAnalyze = async (searchCompany = company) => {
    if (!searchCompany.trim()) {
      alert("Please enter a company name.");
      return;
    }

    setLoading(true);

    try {
      const response = await api.post("/analyze", {
        company: searchCompany,
      });

      setResult(response.data);
      setCompany(searchCompany);
    } catch (error) {
      if (error.response?.status === 429) {
        alert("AI rate limit reached. Please wait 30-60 seconds and try again.");
      } else {
        alert("Something went wrong.");
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`rounded-xl shadow-lg p-8 mt-10 transition-colors duration-300 ${
        darkMode
          ? "bg-slate-800 text-white"
          : "bg-white text-black"
      }`}
    >
      <h2 className="text-2xl font-semibold mb-6">
        Search Company
      </h2>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Example: Apple, Tesla, NVIDIA..."
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAnalyze();
            }
          }}
          className={`flex-1 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 ${
            darkMode
              ? "bg-slate-700 border-slate-600 text-white placeholder-gray-400"
              : "bg-white border-gray-300 text-black"
          }`}
        />

        <button
          onClick={() => handleAnalyze()}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </div>
    </div>
  );
}

export default SearchBar;