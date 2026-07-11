function formatMarketCap(value) {
  if (!value) return "N/A";

  if (value >= 1000000) {
    return (value / 1000000).toFixed(2) + " T USD";
  }

  if (value >= 1000) {
    return (value / 1000).toFixed(2) + " B USD";
  }

  return value.toLocaleString() + " M USD";
}
function CompanyCard({ data, darkMode }) {
  const profile = data.profile;

  return (
    <div className={`rounded-xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
  darkMode
    ? "bg-slate-800 text-white"
    : "bg-white text-black"
}`}>
      <div className="flex items-center gap-4">
        <img
          src={profile.logo}
          alt={profile.name}
          className="w-16 h-16 object-contain"
        />

        <div>
          <h2 className="text-3xl font-bold">{profile.name}</h2>
          <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
            {profile.finnhubIndustry} • {profile.exchange}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        <div>
          <p className="font-semibold">Ticker</p>
          <p>{profile.ticker}</p>
        </div>

        <div>
          <p className="font-semibold">Country</p>
          <p>{profile.country}</p>
        </div>

        <div>
          <p className="font-semibold">Market Cap</p>
          <p>{formatMarketCap(profile.marketCapitalization)}</p>
        </div>

        <div>
          <p className="font-semibold">Website</p>

          <a
            href={profile.weburl}
            target="_blank"
            rel="noreferrer"
            className={ darkMode ? "text-blue-400 hover:underline": "text-blue-600 hover:underline"}
          >
            Visit Website
          </a>
        </div>
      </div>
      {/* Last Updated */}
<div className={`mt-8 pt-4 border-t ${
    darkMode ? "border-slate-600" : "border-gray-300"}`}>
  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
    Last Updated: {new Date().toLocaleString()}
  </p>
</div>
    </div>
  );
}

export default CompanyCard;