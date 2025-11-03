import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Chart options
export const options = {
  responsive: true,
  maintainAspectRatio: false, // <-- important for responsiveness
  plugins: {
    legend: {
      position: "top",
      labels: {
        font: { size: 14 },
      },
    },
    title: {
      display: true,
      text: "Holdings",
      font: {
        size: 18,
      },
    },
  },
  scales: {
    x: {
      ticks: { color: "#555" },
      grid: { display: false },
    },
    y: {
      ticks: { color: "#555" },
      grid: { color: "#ddd" },
    },
  },
};

// Responsive Chart Component
export function VerticalGraph({ data }) {
  return (
    <div
      style={{
        width: "100%",
        height: "400px", 
      }}
    >
      <Bar options={options} data={data} />
    </div>
  );
}
