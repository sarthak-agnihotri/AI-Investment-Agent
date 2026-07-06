function Header({ darkMode, setDarkMode }) {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">

        <div>
          <h1 className="text-4xl font-bold">
            📈 AI Investment Research Agent
          </h1>

          <p className="mt-2 text-blue-100 text-lg">
            Analyze companies using AI, financial data and latest news.
          </p>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

      </div>
    </header>
  );
}

export default Header;