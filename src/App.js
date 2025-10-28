/* ========================================
   Admin Dashboard - JavaScript
   Author: ChatGPT
   Lines: 100+
==========================================*/

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Dashboard loaded successfully!");

  // Generate charts using Chart.js
  createSalesChart();
  createUserChart();
  createTrafficChart();

  // Animate user count
  animateCounter("user-count", 12340);
});

/* ================================
   Function: Animate Counter
================================ */
function animateCounter(id, target) {
  const element = document.getElementById(id);
  let count = 0;
  const speed = 50;

  const updateCounter = () => {
    count += Math.ceil(target / 100);
    if (count < target) {
      element.textContent = count.toLocaleString();
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target.toLocaleString();
    }
  };

  updateCounter();
}

/* ================================
   Chart: Monthly Sales
================================ */
function createSalesChart() {
  const ctx = document.getElementById("salesChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Jan","Feb","Mar","Apr","May","Jun",
        "Jul","Aug","Sep","Oct","Nov","Dec"
      ],
      datasets: [
        {
          label: "Sales ($)",
          data: [1200, 1500, 1800, 2200, 2000, 2500, 3000, 3200, 3100, 4000, 4500, 4700],
          backgroundColor: "#3b82f6",
          borderRadius: 5,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: { display: true, text: "Monthly Sales (USD)" },
      },
      scales: {
        y: { beginAtZero: true },
      },
    },
  });
}

/* ================================
   Chart: User Growth
================================ */
function createUserChart() {
  const ctx = document.getElementById("userChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "User Growth",
          data: [500, 1000, 1800, 2600],
          borderColor: "#10b981",
          backgroundColor: "rgba(16,185,129,0.1)",
          fill: true,
          tension: 0.4,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Quarterly User Growth",
        },
      },
      responsive: true,
      scales: {
        y: { beginAtZero: true },
      },
    },
  });
}

/* ================================
   Chart: Traffic Sources
================================ */
function createTrafficChart() {
  const ctx = document.getElementById("trafficChart").getContext("2d");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Organic", "Referral", "Social", "Email"],
      datasets: [
        {
          label: "Traffic Sources",
          data: [45, 25, 20, 10],
          backgroundColor: [
            "#f59e0b",
            "#3b82f6",
            "#10b981",
            "#ef4444",
          ],
          hoverOffset: 10,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Traffic Source Breakdown",
        },
      },
      responsive: true,
    },
  });
}

/* ================================
   Sidebar Interaction (Future use)
================================ */
const sidebarLinks = document.querySelectorAll(".sidebar-menu li");
sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sidebarLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

/* ================================
   Mock API / Data Refresh Feature
================================ */
setInterval(() => {
  console.log("Refreshing dashboard data...");
  // In a real app, you would fetch updated stats here.
}, 10000);
