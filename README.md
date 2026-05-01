# 🍎 iRevolution
## A Data-Driven Exploration of Apple's iPhone Impact in India Using Tableau

> **Academic Data Analytics Project | 2017–2024**

---

## 📖 Project Overview

**iRevolution** is a comprehensive Tableau-based data analytics project that explores how Apple's iPhone reshaped India's smartphone landscape — from a 1.4% niche luxury player in 2017 to an 8.2% mainstream powerhouse in 2024.

The project combines **5 interactive Tableau dashboards**, **5 real-world-style datasets**, and a **web-based summary dashboard** to tell the complete story of one of the most remarkable brand ascents in consumer technology history.

---

## 📁 Project Structure

```
irevolution/
├── index.html                          ← Main web dashboard (open in browser)
├── README.md                           ← This file
├── requirements.txt                    ← Python dependencies
├── package.json                        ← Node.js / frontend config
│
├── datasets/
│   ├── iphone_india_sales.csv          ← Quarterly iPhone sales data (2017–2024)
│   ├── india_smartphone_market_share.csv ← Brand-wise market share comparison
│   ├── regional_adoption_india.csv     ← State-level adoption metrics
│   ├── consumer_demographics.csv       ← Buyer demographics & behavior
│   └── apple_india_economic_impact.csv ← Manufacturing, jobs, exports
│
├── css/
│   ├── style.css                       ← Main stylesheet
│   └── charts.css                      ← Chart-specific styles
│
├── js/
│   └── main.js                         ← Dashboard logic & Chart.js rendering
│
├── tableau_workbooks/
│   └── irevolution_guide.html          ← Step-by-step Tableau build guide
│
├── docs/
│   └── methodology.html               ← Research methodology & sources
│
└── scripts/
    └── data_analysis.py               ← Python EDA script
```

---

## 🚀 Getting Started

### Option 1: View Web Dashboard (No Installation)
1. Open `index.html` in any modern browser (Chrome, Firefox, Edge)
2. That's it — all charts render using Chart.js from CDN

### Option 2: Run Local Server
```bash
# Python (recommended)
python3 -m http.server 8080
# Then open: http://localhost:8080

# OR Node.js
npx http-server -p 8080
```

### Option 3: Run Data Analysis
```bash
# Install Python dependencies
pip install -r requirements.txt

# Run the analysis script
python3 scripts/data_analysis.py
```

---

## 📊 Tableau Dashboards

| # | Dashboard | File | Key Charts |
|---|-----------|------|-----------|
| 1 | Sales Trend Analysis | `dash_01_sales_trend.twbx` | Dual-axis line, quarterly bars, KPI cards |
| 2 | Regional Heatmap | `dash_02_regional.twbx` | India filled map, bubble chart |
| 3 | Consumer Demographics | `dash_03_demographics.twbx` | Stacked bars, treemap, scatter |
| 4 | Economic Impact | `dash_04_economics.twbx` | Combo chart, waterfall, timeline |
| 5 | Forecast 2025–2027 | `dash_05_forecast.twbx` | Forecast chart, confidence intervals |

> **Note:** `.twbx` files require Tableau Desktop 2023.1+ or Tableau Public (free).  
> See `tableau_workbooks/irevolution_guide.html` for complete build instructions.

---

## 📈 Key Findings

| Metric | 2017 | 2024 | Change |
|--------|------|------|--------|
| Market Share | 1.4% | 8.2% | +486% |
| Units Sold | 1.36M | 11.31M | +731% |
| Manufacturing Jobs | 0 | 112,600 | New |
| Export Revenue | $0 | $8.5B | New |
| Apple Stores | 0 | 4 | New |
| Online Sales % | 15% | 70% | +367% |
| Avg Buyer Age | 32 | 25 | -7 yrs |

---

## 🗂️ Datasets

### 1. `iphone_india_sales.csv`
Quarterly iPhone sales in India by model, 2017–2024. Includes units, revenue, market share, selling price, and channel split.

### 2. `india_smartphone_market_share.csv`
Annual market share for Apple, Samsung, Xiaomi, Oppo, Vivo, and Others (2017–2024).

### 3. `regional_adoption_india.csv`
State-level iPhone adoption for 8 major Indian states with socioeconomic indicators.

### 4. `consumer_demographics.csv`
Buyer behavior data segmented by age, income, gender, and purchase channel.

### 5. `apple_india_economic_impact.csv`
Key economic metrics: manufacturing jobs, export revenue, Apple Stores, service centers, tax rates.

---


![image alt](https://github.com/GANGALAPUDIVENKATESH/irevolution-a-data-driven-exploration-of-apple-s-iphone-impact-in-india-using-tableau/blob/57b1fe614653cdc72901527db2787a1ffc2de4ae/Screenshot%202026-05-01%20153328.png) 

## 🛠️ Technology Stack

| Component | Technology |
|-----------|-----------|
| Primary Visualization | Tableau Desktop / Tableau Public |
| Web Dashboard | HTML5, CSS3, JavaScript (ES6+) |
| Charts (Web) | Chart.js 4.4 |
| Data Processing | Python 3.9+ (pandas, numpy) |
| Typography | Playfair Display + DM Sans |

---

## 📚 Data Sources

- **IDC India** — Quarterly smartphone tracker
- **Counterpoint Research** — Premium segment analysis
- **Apple Inc. Annual Reports** — Revenue data
- **MeitY (India)** — PLI scheme, manufacturing data
- **CMIE** — State GDP and income statistics
- **TRAI** — Internet penetration data

> ⚠️ All data is estimated/synthesized from public research reports for educational purposes. Not affiliated with Apple Inc.

---

## 📄 License

MIT License — Free to use for academic and educational purposes.

---

## 👤 Project Info

**iRevolution** | Data Analytics with Tableau  
*A comprehensive study of Apple's extraordinary India journey*

---

*Open `index.html` to start exploring →*
