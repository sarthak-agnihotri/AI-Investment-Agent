# 📈 AI Investment Research Agent

An AI-powered web application that analyzes publicly listed companies using financial data, recent news, and AI-generated investment insights.

---

## 🚀 Features

- 🔍 Search any publicly listed company (Apple, Tesla, NVIDIA, etc.)
- 🤖 AI-generated investment recommendation (Invest / Hold / Avoid)
- 📊 Investment Score & Risk Score
- 💡 SWOT Analysis
- 📰 Latest Company News
- 🌙 Dark Mode
- 🕘 Search History
- 📄 Download Investment Report as PDF
- 📱 Responsive UI

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- jsPDF

### Backend
- Node.js
- Express.js
- LangGraph
- Google Gemini API
- Finnhub API

---

## 📂 Project Structure

```
AI-Investment-Agent
│
├── backend
│   ├── ai
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── utils
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/AI-Investment-Agent.git
```

### Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```
GEMINI_API_KEY=your_api_key
FINNHUB_API_KEY=your_api_key
PORT=5000
```

Start backend:

```bash
npm run dev
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 📌 APIs Used

- Google Gemini API
- Finnhub API

---

## 👨‍💻 Author

**Sarthak Agnihotri**

GitHub: https://github.com/sarthak-agnihotri

---

## ⭐ Future Improvements

- Stock price charts
- Portfolio tracker
- Compare multiple companies
- AI Chat Assistant
- User authentication
- Watchlist