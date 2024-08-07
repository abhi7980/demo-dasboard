import React from "react";
import { Box } from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: Array.from({ length: 17 }, (_, i) => 5 + i * 4), // Labels from 5 to 27
  datasets: [
    {
      label: "Activity",
      data: [
        5000, 10000, 14000, 10000, 5000, 10000, 14000, 5000, 10000, 14000, 5000,
        10000, 14000, 5000, 10000, 14000, 5000, 15000, 10000, 14000, 5000,
        10000,
      ],

      backgroundColor: "rgba(114, 148, 255, 1)",
      borderRadius: 10,
      borderSkipped: false,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "white", // Color of the x-axis labels
        padding: 10,
        stepSize: 4,
      },
      offset: true,
    },
    y: {
      beginAtZero: true,
      grid: {
        color: "#444",
      },
      ticks: {
        color: "white",
        stepSize: 5000, // Control the spacing of the y-axis labels
        callback: function (value) {
          // Custom y-axis labels
          if (value === 5000) return "5k";
          if (value === 10000) return "10k";
          if (value === 15000) return "15k";
          return ""; // Hide other labels
        },
      },
    },
  },
};

const ActivityChart = () => {
  return (
    <Box
      sx={{
        padding: "10px",
        width: "100%",
        height: "300px", // Reduced height
        overflow: "hidden",
      }}
    >
      <Box mt={2}>
        <Bar data={data} options={options} />
      </Box>
    </Box>
  );
};

export default ActivityChart;
