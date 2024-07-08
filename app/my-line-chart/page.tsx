"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Chart.js 구성 요소 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// 데이터 포인트
const data = {
  labels: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09],
  datasets: [
    {
      label: "Talon 1",
      data: [0.0, 0.15, 0.3, 0.45, 0.6, 0.7, 0.75, 0.78, 0.8],
      borderColor: "black",
      backgroundColor: "black",
      fill: false,
    },
    {
      label: "Talon 2 - 0 degrees",
      data: [-0.1, 0.05, 0.2, 0.35, 0.5, 0.6, 0.65, 0.68, 0.7],
      borderColor: "red",
      backgroundColor: "red",
      fill: false,
    },
    {
      label: "Talon 2 - 30 degrees",
      data: [-0.2, -0.05, 0.1, 0.25, 0.4, 0.5, 0.55, 0.58, 0.6],
      borderColor: "blue",
      backgroundColor: "blue",
      fill: false,
    },
    {
      label: "Talon 2 - 60 degrees",
      data: [-0.3, -0.15, 0.0, 0.15, 0.3, 0.4, 0.45, 0.48, 0.5],
      borderColor: "yellow",
      backgroundColor: "yellow",
      fill: false,
    },
    {
      label: "Talon 2 - 90 degrees",
      data: [-0.4, -0.25, -0.1, 0.05, 0.2, 0.3, 0.35, 0.38, 0.4],
      borderColor: "green",
      backgroundColor: "green",
      fill: false,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Drag Coefficient vs Lift Coefficient",
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Drag Coefficient",
      },
    },
    y: {
      title: {
        display: true,
        text: "Lift Coefficient",
      },
    },
  },
};

const MyLineChart = () => (
  <div className="h-screen flex items-center justify-center">
    <div className="w-full max-w-4xl">
      <Line data={data} options={options} />
    </div>
  </div>
);

export default MyLineChart;
