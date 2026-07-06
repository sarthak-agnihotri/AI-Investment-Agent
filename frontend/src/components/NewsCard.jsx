function NewsCard({ news, darkMode }) {
  return (
    <div
  className={`rounded-xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
  darkMode
    ? "bg-slate-800 text-white"
    : "bg-white text-black"
}`}
>
      <h2 className="text-2xl font-bold mb-6">
        📰 Latest News
      </h2>

      <div className="space-y-4">
        {news.map((item, index) => (
          <div
            key={index}
            className={`border rounded-lg p-4 transition ${
  darkMode
    ? "border-slate-700 hover:bg-slate-700"
    : "border-gray-200 hover:bg-gray-50"
}`}
          >
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className={`text-lg font-semibold ${
              darkMode
              ? "text-blue-400 hover:underline"
              : "text-blue-600 hover:underline"
              }`}
              >
              {item.title}
            </a>

            <div
  className={`flex justify-between text-sm mt-2 ${
    darkMode
      ? "text-gray-400"
      : "text-gray-500"
  }`}
>
              <span>{item.source}</span>
              <span>
                {new Date(item.publishedAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsCard;