# 📈 AI Investment Research Agent

An AI-powered web application that analyzes publicly traded companies using real-time financial data, company profiles, financial metrics, recent news, and Google Gemini AI to generate investment recommendations, investment scores, risk scores, and SWOT analysis.

The application helps users quickly evaluate companies for investment by combining financial APIs with Generative AI.

---

# 🚀 Live Demo

## 🌐 Frontend (Vercel)

https://ai-investment-agent-phi.vercel.app/

## ⚙️ Backend API (Render)

https://ai-investment-agent-m5cq.onrender.com

## 💻 GitHub Repository

https://github.com/sarthak-agnihotri/AI-Investment-Agent

---

# 📌 Features

- 🔍 Search any public company
- 📊 Company Overview
- 💰 Financial Metrics
- 📰 Latest Company News
- 🤖 AI Investment Recommendation
- 📈 Investment Score
- ⚠ Risk Score
- 💡 SWOT Analysis
- 📄 Download PDF Report
- 🌙 Dark / Light Mode
- 📱 Fully Responsive Design
- 🕘 Search History (Local Storage)
- ⚡ Loading Indicator
- ❌ Error Handling

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- jsPDF

## Backend

- Node.js
- Express.js
- Axios

## AI

- Google Gemini API
- LangChain

## APIs Used

### Finnhub API

- Symbol Search
- Company Profile
- Financial Metrics
- Company News

### Google Gemini API

- Investment Recommendation
- AI Reasoning
- SWOT Analysis

---

# 📂 Project Structure

```
AI-Investment-Agent
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public
│   └── package.json
│
├── backend
│   ├── ai
│   ├── controllers
│   ├── middleware
│   ├── routes
│   ├── services
│   ├── utils
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ How to Run

## 1. Clone Repository

```bash
git clone https://github.com/sarthak-agnihotri/AI-Investment-Agent.git

cd AI-Investment-Agent
```

---

## 2. Install Frontend

```bash
cd frontend

npm install
```

---

## 3. Install Backend

```bash
cd ../backend

npm install
```

---

## 4. Create Environment File

Create a `.env` file inside the **backend** folder.

```env
PORT=5000

FINNHUB_API_KEY=YOUR_FINNHUB_API_KEY

GOOGLE_API_KEY=YOUR_GEMINI_API_KEY
```

---

## 5. Start Backend

```bash
cd backend

npm run dev
```

Backend runs at:

```
http://localhost:5000
```

---

## 6. Start Frontend

```bash
cd frontend

npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 🔑 Required API Keys

## Finnhub

Create a free account:

https://finnhub.io

Generate an API Key and add:

```env
FINNHUB_API_KEY=
```

---

## Google Gemini

Generate API Key:

https://aistudio.google.com/

Add:

```env
GOOGLE_API_KEY=
```

---

# 🌍 Live Application

Instead of running locally, you can directly use the deployed application.

Frontend

https://ai-investment-agent-phi.vercel.app/

Backend

https://ai-investment-agent-m5cq.onrender.com

---

# 🧠 How It Works

The application follows this workflow:

```
User

↓

React Frontend

↓

Axios POST Request

↓

Express Backend

↓

Research Service

↓

Finnhub API

├── Symbol Search

├── Company Profile

├── Financial Metrics

└── Company News

↓

Google Gemini AI

↓

Generates

• Investment Recommendation

• Investment Score

• Risk Score

• SWOT Analysis

• AI Reasoning

↓

Returns JSON

↓

React Dashboard
```

---

# 🏗 Architecture

```
             React Frontend
                    │
                    │
              Axios Request
                    │
                    ▼
            Express REST API
                    │
                    │
         Research Service Layer
          │                  │
          │                  │
          ▼                  ▼
   Finnhub API         Gemini AI
          │                  │
          └──────────┬───────┘
                     ▼
              JSON Response
                     │
                     ▼
             React Dashboard
```

---

# 📋 Application Workflow

1. User enters company name.

2. Frontend sends POST request.

3. Backend searches company symbol.

4. Finnhub returns:

- Company Profile
- Financial Metrics
- Latest News

5. Gemini AI analyzes the data.

6. AI generates:

- Recommendation
- Investment Score
- Risk Score
- SWOT Analysis
- AI Reasoning

7. Frontend displays the dashboard.

8. User can download a PDF report.

---

# ⚖️ Key Decisions & Trade-offs

## Why Finnhub?

Finnhub provides all essential financial information through one API.

It includes:

- Company Profile
- Financial Metrics
- Company News
- Symbol Search

which reduces API complexity.

---

## Why Google Gemini?

Instead of manually creating investment logic, Gemini generates:

- Natural language reasoning
- SWOT analysis
- Investment recommendation

making the application more intelligent.

---

## Why React?

React provides:

- Component-based architecture
- Fast rendering
- Better state management
- Reusable UI

---

## Why Express?

Express is lightweight and integrates easily with external APIs.

---

## Why Local Storage?

Instead of adding a database, search history is stored locally.

Benefits:

- Faster
- Simpler
- No authentication required

---

## Trade-offs

### Free API Limits

Gemini free tier has request limits.

When the quota is exceeded, the application returns a demo AI response to keep the UI functional.

---

### No Authentication

Authentication was intentionally excluded to keep the project focused on AI-powered investment analysis.

---

### No Database

Search history is stored in browser Local Storage.

---

# 📸 Example Runs

## Example 1

### Company

Apple

Recommendation

```
INVEST
```

Investment Score

```
89/100
```

Risk Score

```
28/100
```

Strengths

- Strong Brand
- Loyal Customers
- Large Cash Reserve

Weaknesses

- Premium Pricing
- Dependence on iPhone

---

## Example 2

### Company

Tesla

Recommendation

```
HOLD
```

Investment Score

```
74/100
```

Risk Score

```
46/100
```

Strengths

- EV Market Leader
- Strong Innovation

Weaknesses

- High Valuation

---

## Example 3

### Company

NVIDIA

Recommendation

```
INVEST
```

Investment Score

```
94/100
```

Risk Score

```
22/100
```

Strengths

- AI Chip Leadership
- High Revenue Growth

Weaknesses

- Supply Chain Dependency

---

# 📄 PDF Report

Users can download a professional investment report containing:

- Company Information
- Investment Recommendation
- Investment Score
- Risk Score
- AI Reasoning
- SWOT Analysis

---

# 📷 Screenshots

Add screenshots here.

Example:

```
screenshots/

welcome-page.png

dashboard.png

dark-mode.png

pdf-report.png
```

---

# 🚀 Future Improvements

Given more development time, I would add:

- 📈 Live Stock Price Charts
- 📉 Historical Performance Charts
- 📊 Company Comparison
- ❤️ Watchlist
- 👤 User Authentication
- ☁ MongoDB Database
- 📧 Email Reports
- 🔔 Stock Alerts
- 🌍 Multi-language Support
- 💼 Portfolio Tracker
- 📊 Advanced Financial Ratios
- 🤖 AI Chat Assistant
- 📱 Progressive Web App (PWA)

---

# 👨‍💻 Author

**Sarthak Agnihotri**

B.Tech Computer Science Engineering

MERN Stack Developer

GitHub

https://github.com/sarthak-agnihotri

---

# 📜 License

This project is created for educational, learning, and assignment purposes.