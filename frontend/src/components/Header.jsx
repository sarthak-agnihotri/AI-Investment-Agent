function Header({ darkMode, setDarkMode }) {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-5">

        {/* Left Side */}
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
            📈 AI Investment Research Agent
          </h1>

          <p className="mt-2 text-sm sm:text-lg text-blue-100">
            Analyze companies using AI, financial data and latest news.
          </p>
        </div>

        {/* Dark Mode Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition w-full sm:w-auto"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

      </div>
    </header>
  );
}

export default Header;