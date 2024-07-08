"use client"; // Client Component 선언

import React from "react";
import { Scatter } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ScatterDataPoint,
  ChartOptions,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
); // Chart.js 모듈 등록

const Graph: React.FC = () => {
  // y 값 생성 및 x 값 계산
  const yValues: number[] = [];
  for (let y = -5; y <= 5; y += 0.1) {
    yValues.push(y);
  }
  const xValues = yValues.map((y) => y ** 2);

  // 차트 데이터 생성
  const data = {
    datasets: [
      {
        label: "x = y^2",
        data: xValues.map((x, index) => ({
          x,
          y: yValues[index],
        })) as ScatterDataPoint[],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        showLine: true, // 선으로 연결
      },
    ],
  };

  // 차트 옵션 설정
  const options: ChartOptions<"scatter"> = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        min: 0, // min 값 설정
        max: Math.max(...xValues), // max 값 설정
        ticks: {
          callback: (tickValue: string | number) => {
            if (typeof tickValue === "number") {
              return tickValue.toFixed(2);
            }
            return tickValue; // 숫자가 아닌 경우 그대로 반환
          },
        },
        title: {
          display: true,
          text: "x",
        },
      },
      y: {
        type: "linear",
        min: Math.min(...yValues),
        max: Math.max(...yValues),
        ticks: {
          callback: (tickValue: string | number) => {
            if (typeof tickValue === "number") {
              return tickValue.toFixed(2);
            }
            return tickValue; // 숫자가 아닌 경우 그대로 반환
          },
        },
        title: {
          display: true,
          text: "y",
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "x = y^2 Graph",
      },
    },
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <h2 className="text-center text-2xl mb-4">Scatter Example</h2>
        <Scatter data={data} options={options} />
      </div>
    </div>
  );
};

export default Graph;
