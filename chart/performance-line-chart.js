const resultChart = document.getElementById("resultChart");
const winRate = document.getElementById("winRate");

new Chart(resultChart, {
  type: "bar",
  data: {
    labels: [
      "April",
      "May",
      "June",
      "july",
      "August",
      "Septemver",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Golden",
        data: [1, 2, 3, 4, 1, 2, 3, 4],
        borderWidth: 1,
        backgroundColor: "#FFE7C7",
      },
      {
        label: "Red",
        data: [4, 3, 4, 1, 2, 3, 4, 1],
        borderWidth: 1,
        backgroundColor: "#FFB7B7",
      },
      {
        label: "2025",
        data: [2, 4, 1, 2, 3, 4, 1, 2],
        borderWidth: 1,
        backgroundColor: "#8EBFFF",
      },
      {
        label: "2025",
        data: [3, 1, 2, 3, 4, 1, 2, 3],
        borderWidth: 1,
        backgroundColor: "#ffffff",
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: {
        grid: {
          drawBorder: false, // <-- this removes y-axis line
          lineWidth: 0,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1, // This will create labels at 0, 1, 2, 3, 4
          max: 4,
          min: 0,
        },

        grid: {
          drawBorder: false, // <-- this removes y-axis line
          lineWidth: 0,
        },
      },
    },
  },
});

new Chart(winRate, {
  type: "doughnut",
  data: {
    labels: ["Win", "Loss"],
    datasets: [
      {
        label: "Win Rate",
        data: [70, 30],
        backgroundColor: ["#3e0505", "#d2cbb5"],
        hoverOffset: 4,
        borderWidth: 0,
      },
    ],
  },
  options: {
    //cutout: 90, // Adjust this value to control thickness
  },
});
