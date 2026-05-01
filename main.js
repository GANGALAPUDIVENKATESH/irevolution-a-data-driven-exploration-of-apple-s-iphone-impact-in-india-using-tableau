// =============================================
// iRevolution - Main JavaScript
// iPhone Impact in India - Data Dashboard
// =============================================

'use strict';

// =============================================
// DATA
// =============================================

const DATA = {
  yearlySales: {
    labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    units: [1.36, 1.86, 2.46, 2.74, 5.14, 6.97, 9.39, 11.31],
    revenue: [1.00, 1.67, 2.37, 2.08, 4.47, 5.88, 8.79, 11.19],
    marketShare: [1.4, 1.8, 2.2, 2.9, 4.2, 5.5, 6.9, 8.2]
  },

  brandShare2024: [
    { brand: 'Apple', share: 8.2, color: '#0071e3' },
    { brand: 'Samsung', share: 17.9, color: '#1428A0' },
    { brand: 'Xiaomi', share: 20.4, color: '#FF6900' },
    { brand: 'Oppo', share: 11.8, color: '#1E1E1E' },
    { brand: 'Vivo', share: 10.1, color: '#415FFF' },
    { brand: 'Others', share: 31.6, color: '#3d3d3f' }
  ],

  regionalData: [
    { state: 'Maharashtra', region: 'West', penetration: 9.2, users: 5650, color: '#0071e3' },
    { state: 'Delhi', region: 'North', penetration: 10.1, users: 4950, color: '#FF9933' },
    { state: 'Karnataka', region: 'South', penetration: 8.5, users: 4580, color: '#34d399' },
    { state: 'Tamil Nadu', region: 'South', penetration: 7.2, users: 3850, color: '#8B5CF6' },
    { state: 'Gujarat', region: 'West', penetration: 6.4, users: 3120, color: '#EC4899' },
    { state: 'West Bengal', region: 'East', penetration: 5.6, users: 2640, color: '#F59E0B' },
    { state: 'Telangana', region: 'South', penetration: 6.8, users: 2520, color: '#10B981' },
    { state: 'Uttar Pradesh', region: 'North', penetration: 3.4, users: 3650, color: '#EF4444' }
  ],

  quarterlyTrend: {
    labels: ['Q1 17', 'Q2 17', 'Q3 17', 'Q4 17',
             'Q1 18', 'Q2 18', 'Q3 18', 'Q4 18',
             'Q1 19', 'Q2 19', 'Q3 19', 'Q4 19',
             'Q1 20', 'Q2 20', 'Q3 20', 'Q4 20',
             'Q1 21', 'Q2 21', 'Q3 21', 'Q4 21',
             'Q1 22', 'Q2 22', 'Q3 22', 'Q4 22',
             'Q1 23', 'Q2 23', 'Q3 23', 'Q4 23',
             'Q1 24', 'Q2 24', 'Q3 24', 'Q4 24'],
    units: [0.28, 0.31, 0.35, 0.42, 0.38, 0.41, 0.45, 0.62, 0.58, 0.65, 0.52, 0.71,
            0.68, 0.45, 0.72, 0.89, 0.95, 0.62, 1.12, 1.45, 1.38, 0.98, 1.52, 1.89,
            1.65, 1.42, 1.98, 2.34, 2.12, 1.87, 2.45, 2.89]
  },

  economicImpact: {
    years: ['2019', '2020', '2021', '2022', '2023', '2024'],
    jobs: [2.5, 8.2, 22.5, 45.8, 78.3, 112.6],
    exports: [45, 180, 620, 1850, 5000, 8500]
  },

  modelPerformance: [
    { model: 'iPhone SE (2020)', price: 399, units: 0.72, share: 'Budget King' },
    { model: 'iPhone 13 Pro', price: 999, units: 1.45, share: 'Premium Leader' },
    { model: 'iPhone 14', price: 799, units: 1.52, share: 'Sweet Spot' },
    { model: 'iPhone 15 Pro', price: 999, units: 2.34, share: 'Top Seller' },
    { model: 'iPhone 16 Pro', price: 1099, units: 2.89, share: 'Current King' }
  ]
};

// =============================================
// CHART RENDERING
// =============================================

function initCharts() {
  renderYearlySalesChart();
  renderMarketShareDonut();
  renderQuarterlyTrend();
  renderEconomicChart();
  renderRegionalBars();
  renderModelTable();
  animateCounters();
  initProgressRings();
}

function renderYearlySalesChart() {
  const canvas = document.getElementById('yearlySalesChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, 'rgba(0, 113, 227, 0.3)');
  gradient.addColorStop(1, 'rgba(0, 113, 227, 0)');

  const gradient2 = ctx.createLinearGradient(0, 0, 0, 300);
  gradient2.addColorStop(0, 'rgba(255, 153, 51, 0.3)');
  gradient2.addColorStop(1, 'rgba(255, 153, 51, 0)');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: DATA.yearlySales.labels,
      datasets: [
        {
          label: 'Units Sold (Millions)',
          data: DATA.yearlySales.units,
          borderColor: '#0071e3',
          backgroundColor: gradient,
          borderWidth: 2.5,
          tension: 0.4,
          fill: true,
          pointBackgroundColor: '#0071e3',
          pointRadius: 5,
          pointHoverRadius: 8,
          yAxisID: 'y'
        },
        {
          label: 'Revenue (USD Billion)',
          data: DATA.yearlySales.revenue,
          borderColor: '#FF9933',
          backgroundColor: gradient2,
          borderWidth: 2.5,
          tension: 0.4,
          fill: true,
          pointBackgroundColor: '#FF9933',
          pointRadius: 5,
          pointHoverRadius: 8,
          yAxisID: 'y'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { intersect: false, mode: 'index' },
      plugins: {
        legend: {
          labels: { color: '#86868b', font: { family: 'DM Sans', size: 12 }, padding: 20 }
        },
        tooltip: {
          backgroundColor: 'rgba(29,29,31,0.95)',
          borderColor: 'rgba(255,255,255,0.1)',
          borderWidth: 1,
          titleColor: '#f5f5f7',
          bodyColor: '#86868b',
          padding: 12,
          cornerRadius: 10
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: { color: '#86868b', font: { family: 'DM Sans', size: 11 } }
        },
        y: {
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: { color: '#86868b', font: { family: 'DM Sans', size: 11 } }
        }
      }
    }
  });
}

function renderMarketShareDonut() {
  const canvas = document.getElementById('marketShareDonut');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const labels = DATA.brandShare2024.map(d => d.brand);
  const values = DATA.brandShare2024.map(d => d.share);
  const colors = DATA.brandShare2024.map(d => d.color);

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels,
      datasets: [{
        data: values,
        backgroundColor: colors,
        borderColor: 'rgba(29,29,31,0.8)',
        borderWidth: 3,
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '70%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#86868b',
            font: { family: 'DM Sans', size: 11 },
            padding: 15,
            usePointStyle: true,
            pointStyle: 'circle'
          }
        },
        tooltip: {
          backgroundColor: 'rgba(29,29,31,0.95)',
          borderColor: 'rgba(255,255,255,0.1)',
          borderWidth: 1,
          titleColor: '#f5f5f7',
          bodyColor: '#86868b',
          padding: 12,
          cornerRadius: 10,
          callbacks: {
            label: (ctx) => ` ${ctx.label}: ${ctx.parsed}%`
          }
        }
      }
    }
  });
}

function renderQuarterlyTrend() {
  const canvas = document.getElementById('quarterlyChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const gradient = ctx.createLinearGradient(0, 0, 0, 200);
  gradient.addColorStop(0, 'rgba(0, 113, 227, 0.4)');
  gradient.addColorStop(1, 'rgba(0, 113, 227, 0.0)');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: DATA.quarterlyTrend.labels,
      datasets: [{
        label: 'Units (Millions)',
        data: DATA.quarterlyTrend.units,
        backgroundColor: DATA.quarterlyTrend.units.map((v, i) =>
          i >= 24 ? '#FF9933' : i >= 16 ? '#0071e3' : 'rgba(0,113,227,0.4)'),
        borderRadius: 4,
        borderSkipped: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(29,29,31,0.95)',
          borderColor: 'rgba(255,255,255,0.1)',
          borderWidth: 1,
          titleColor: '#f5f5f7',
          bodyColor: '#86868b',
          padding: 12,
          cornerRadius: 10
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            color: '#86868b',
            font: { family: 'DM Sans', size: 9 },
            maxRotation: 45
          }
        },
        y: {
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: { color: '#86868b', font: { family: 'DM Sans', size: 10 } }
        }
      }
    }
  });
}

function renderEconomicChart() {
  const canvas = document.getElementById('economicChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: DATA.economicImpact.years,
      datasets: [
        {
          label: 'Manufacturing Jobs (Thousands)',
          data: DATA.economicImpact.jobs,
          backgroundColor: 'rgba(19, 136, 8, 0.7)',
          borderRadius: 6,
          yAxisID: 'y'
        },
        {
          label: 'Export Revenue (USD Million)',
          data: DATA.economicImpact.exports,
          type: 'line',
          borderColor: '#FF9933',
          backgroundColor: 'rgba(255,153,51,0.1)',
          borderWidth: 2.5,
          tension: 0.4,
          fill: true,
          pointBackgroundColor: '#FF9933',
          pointRadius: 5,
          yAxisID: 'y1'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { intersect: false, mode: 'index' },
      plugins: {
        legend: {
          labels: { color: '#86868b', font: { family: 'DM Sans', size: 11 }, padding: 16 }
        },
        tooltip: {
          backgroundColor: 'rgba(29,29,31,0.95)',
          borderColor: 'rgba(255,255,255,0.1)',
          borderWidth: 1,
          titleColor: '#f5f5f7',
          bodyColor: '#86868b',
          padding: 12,
          cornerRadius: 10
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#86868b', font: { family: 'DM Sans', size: 11 } }
        },
        y: {
          position: 'left',
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: { color: '#86868b', font: { family: 'DM Sans', size: 10 } },
          title: { display: true, text: 'Jobs (K)', color: '#86868b', font: { size: 10 } }
        },
        y1: {
          position: 'right',
          grid: { display: false },
          ticks: { color: '#86868b', font: { family: 'DM Sans', size: 10 } },
          title: { display: true, text: 'Revenue (USD M)', color: '#86868b', font: { size: 10 } }
        }
      }
    }
  });
}

function renderRegionalBars() {
  const container = document.getElementById('regionalBars');
  if (!container) return;

  const maxUsers = Math.max(...DATA.regionalData.map(d => d.users));

  container.innerHTML = DATA.regionalData.map(d => `
    <div class="bar-item">
      <div class="bar-label">${d.state}</div>
      <div class="bar-track">
        <div class="bar-fill" style="width: ${(d.users / maxUsers) * 100}%; background: ${d.color};"></div>
      </div>
      <div class="bar-value">${(d.users / 1000).toFixed(1)}M</div>
    </div>
  `).join('');
}

function renderModelTable() {
  const tbody = document.getElementById('modelTableBody');
  if (!tbody) return;

  const colors = ['badge-saffron', 'badge-blue', 'badge-blue', 'badge-green', 'badge-green'];
  tbody.innerHTML = DATA.modelPerformance.map((m, i) => `
    <tr>
      <td><strong>${m.model}</strong></td>
      <td>$${m.price.toLocaleString()}</td>
      <td>${m.units.toFixed(2)}M</td>
      <td><span class="badge ${colors[i]}">${m.share}</span></td>
    </tr>
  `).join('');
}

// =============================================
// COUNTER ANIMATIONS
// =============================================

function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        const decimals = el.dataset.decimals || 0;
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = prefix + current.toFixed(decimals) + suffix;
        }, 16);

        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

// =============================================
// PROGRESS RINGS
// =============================================

function initProgressRings() {
  const rings = document.querySelectorAll('.progress-ring');
  rings.forEach(ring => {
    const circle = ring.querySelector('.ring-progress');
    if (!circle) return;
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const value = parseFloat(ring.dataset.value) / 100;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          circle.style.transition = 'stroke-dashoffset 1.5s cubic-bezier(0.23, 1, 0.32, 1)';
          circle.style.strokeDashoffset = circumference - (value * circumference);
        }, 200);
        observer.unobserve(ring);
      }
    });
    observer.observe(ring);
  });
}

// =============================================
// SCROLL REVEAL
// =============================================

function initScrollReveal() {
  const elements = document.querySelectorAll('.card, .kpi-card, .insight-card, .timeline-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
    observer.observe(el);
  });
}

// =============================================
// NAVBAR SCROLL
// =============================================

function initNavbar() {
  const nav = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(29, 29, 31, 0.95)';
    } else {
      nav.style.background = 'rgba(29, 29, 31, 0.85)';
    }
  }, { passive: true });
}

// =============================================
// TAB SWITCHING
// =============================================

function initTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById(tab.dataset.tab);
      if (target) target.classList.add('active');
    });
  });
}

// =============================================
// MARKET SHARE FILTER
// =============================================

function initFilters() {
  const yearSelect = document.getElementById('yearFilter');
  if (yearSelect) {
    yearSelect.addEventListener('change', () => {
      // In a real implementation, this would filter chart data
      console.log('Filter changed to:', yearSelect.value);
    });
  }
}

// =============================================
// INIT
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  initTabs();
  initFilters();

  if (typeof Chart !== 'undefined') {
    initCharts();
  } else {
    // Load Chart.js dynamically if not available
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js';
    script.onload = initCharts;
    document.head.appendChild(script);
  }
});
