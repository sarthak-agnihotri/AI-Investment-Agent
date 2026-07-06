import { useState, useEffect } from "react";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Dashboard from "./components/Dashboard";
import SearchHistory from "./components/SearchHistory";
import Footer from "./components/Footer";

function App() {
  const [result, setResult] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [history, setHistory] = useState(() => {
  const saved = localStorage.getItem("searchHistory");
  return saved ? JSON.parse(saved) : [];
});
useEffect(() => {
  localStorage.setItem("searchHistory", JSON.stringify(history));
}, [history]);

  const handleResult = (data) => {
  setResult(data);

  setHistory((prev) => {
    const updated = [
      data.company,
      ...prev.filter(
        (item) => item.toLowerCase() !== data.company.toLowerCase()
      ),
    ];

    return updated.slice(0, 10);
  });
};

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-slate-900 text-white"
          : "bg-gray-50 text-black"
      }`}
    >
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}/>

      <main className="max-w-6xl mx-auto px-6">
        <SearchBar setResult={handleResult} darkMode={darkMode} selectedCompany={selectedCompany}/>
        <SearchHistory history={history} darkMode={darkMode} onSearch={(company) => setSelectedCompany(company)}/>
        {result ? (<Dashboard data={result} darkMode={darkMode}/>) : (<Welcome darkMode={darkMode} />)}
      </main>

      <Footer darkMode={darkMode}/>
    </div>
  );
}

export default App;