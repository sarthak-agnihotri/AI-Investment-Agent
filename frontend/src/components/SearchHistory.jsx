function SearchHistory({ history , darkMode, onSearch }) {
  if (history.length === 0) return null;

  return (
    <div
  className={`rounded-xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
  darkMode
    ? "bg-slate-800 text-white"
    : "bg-white text-black"
}`}
>
      <h2 className="text-xl font-semibold mb-4">
        🕘 Recent Searches
      </h2>

      <div className="flex flex-wrap justify-center sm:justify-start gap-3">
        {history.map((company, index) => (
          <button
  key={index}
  onClick={() => onSearch(company)}
  className={`px-4 py-2 rounded-full transition ${
    darkMode
      ? "bg-blue-900 text-blue-200 hover:bg-blue-800"
      : "bg-blue-100 text-blue-700 hover:bg-blue-200"
  }`}
>
  {company}
</button>
        ))}
      </div>
    </div>
  );
}

export default SearchHistory;