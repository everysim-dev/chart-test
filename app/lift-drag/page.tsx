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
import annotationPlugin from "chartjs-plugin-annotation";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
); // Chart.js 모듈 등록

const basicData: ScatterDataPoint[] = [
  { x: 0.023379706, y: 0.176213639 },
  { x: 0.023391628, y: 0.092306373 },
  { x: 0.023814093, y: 0.009480162 },
  { x: 0.024338021, y: 0.244867331 },
  { x: 0.025086304, y: 0.277673946 },
  { x: 0.025348816, y: -0.055822835 },
  { x: 0.026262357, y: 0.32795488 },
  { x: 0.026213644, y: -0.086232572 },
  { x: 0.027619505, y: -0.139275489 },
  { x: 0.029368372, y: 0.421728615 },
  { x: 0.029670685, y: -0.191884801 },
  { x: 0.031296122, y: 0.480790057 },
  { x: 0.031721077, y: -0.23895224 },
  { x: 0.033547738, y: 0.531571932 },
  { x: 0.033877524, y: -0.275397945 },
  { x: 0.03579973, y: 0.579704264 },
  { x: 0.03816078, y: 0.617320888 },
  { x: 0.040355019, y: 0.651354222 },
  { x: 0.042882858, y: 0.69271553 },
  { x: 0.045288131, y: 0.721902742 },
];

const data0deg: ScatterDataPoint[] = [
  { x: 0.024040421, y: 0.17643466 },
  { x: 0.025257472, y: 0.262617195 },
  { x: 0.025756487, y: 0.103115543 },
  { x: 0.026367794, y: 0.342923647 },
  { x: 0.026307978, y: 0.006879398 },
  { x: 0.027759535, y: 0.389253076 },
  { x: 0.027608147, y: -0.059341342 },
  { x: 0.029152297, y: 0.428403698 },
  { x: 0.029336466, y: -0.11074829 },
  { x: 0.030544553, y: 0.471112022 },
  { x: 0.031819386, y: -0.173822235 },
  { x: 0.032366637, y: 0.516815492 },
  { x: 0.034139041, y: -0.22337839 },
  { x: 0.034618478, y: 0.566013201 },
  { x: 0.035582618, y: 0.593677238 },
  { x: 0.0367812, y: -0.271632123 },
  { x: 0.037944718, y: 0.62390759 },
  { x: 0.038614193, y: -0.302701729 },
  { x: 0.04030574, y: 0.661724163 },
  { x: 0.042666911, y: 0.698486298 },
  { x: 0.046533254, y: 0.740288007 },
];

const data30deg: ScatterDataPoint[] = [
  { x: 0.050177168, y: 0.184603086 },
  { x: 0.050842129, y: 0.263090261 },
  { x: 0.051141734, y: 0.101118658 },
  { x: 0.05143373, y: 0.317148976 },
  { x: 0.052010952, y: 0.039812106 },
  { x: 0.052396052, y: 0.357602896 },
  { x: 0.053415746, y: -0.00572183 },
  { x: 0.054216903, y: 0.411987542 },
  { x: 0.054927987, y: -0.050435378 },
  { x: 0.055931943, y: 0.454038467 },
  { x: 0.056870696, y: -0.096660754 },
  { x: 0.057646829, y: 0.497171028 },
  { x: 0.059135743, y: -0.14040165 },
  { x: 0.059684996, y: 0.53614344 },
  { x: 0.061508072, y: -0.18216371 },
  { x: 0.06183013, y: 0.579316537 },
  { x: 0.063879571, y: -0.218088707 },
  { x: 0.064192081, y: 0.610593088 },
  { x: 0.066250776, y: -0.251942488 },
  { x: 0.066553735, y: 0.643959684 },
  { x: 0.068621499, y: -0.282407006 },
  { x: 0.068916088, y: 0.672405573 },
  { x: 0.070884336, y: -0.310594952 },
  { x: 0.070740654, y: 0.700641788 },
];

const data60deg: ScatterDataPoint[] = [
  { x: 0.0576187, y: 0.127367014 },
  { x: 0.057687029, y: 0.214242909 },
  { x: 0.058894473, y: 0.043594125 },
  { x: 0.059182511, y: 0.287473611 },
  { x: 0.060993916, y: -0.024248279 },
  { x: 0.061086819, y: 0.360112673 },
  { x: 0.061966777, y: 0.374625664 },
  { x: 0.06191866, y: -0.043761753 },
  { x: 0.063538925, y: -0.09171844 },
  { x: 0.064674087, y: 0.435615783 },
  { x: 0.065589345, y: -0.138977659 },
  { x: 0.067773064, y: 0.497810681 },
  { x: 0.069470889, y: -0.204157399 },
  { x: 0.069154281, y: 0.510063421 },
  { x: 0.070764736, y: -0.225883979 },
  { x: 0.073553727, y: 0.585044799 },
  { x: 0.073674533, y: -0.26518941 },
  { x: 0.076524, y: 0.624791959 },
  { x: 0.076153489, y: -0.300359472 },
  { x: 0.079309136, y: 0.655353668 },
  { x: 0.082680949, y: 0.695314543 },
];

const data90deg: ScatterDataPoint[] = [
  { x: 0.070788672, y: 0.110344611 },
  { x: 0.072103699, y: 0.191903263 },
  { x: 0.073053383, y: 0.018495524 },
  { x: 0.073383521, y: 0.268890842 },
  { x: 0.072441015, y: 0.08896912 },
  { x: 0.075041714, y: 0.329364163 },
  { x: 0.07531107, y: 0.329364163 },
  { x: 0.077094325, y: -0.10868705 },
  { x: 0.077179669, y: 0.384157535 },
  { x: 0.078944461, y: 0.412508534 },
  { x: 0.079145932, y: -0.164300174 },
  { x: 0.08099248, y: 0.466260002 },
  { x: 0.081303571, y: -0.209141208 },
  { x: 0.082817127, y: 0.493925063 },
  { x: 0.083568107, y: -0.249285719 },
  { x: 0.084683085, y: 0.533654096 },
  { x: 0.086047769, y: -0.2894267 },
  { x: 0.087002202, y: 0.563580512 },
  { x: 0.087858714, y: -0.316737088 },
  { x: 0.089405917, y: 0.603738892 },
  { x: 0.091725172, y: 0.632698741 },
  { x: 0.094039611, y: 0.661901199 },
  { x: 0.096448961, y: 0.696042671 },
];

const Graph: React.FC = () => {
  // 추출한 데이터 사용
  //   const data = {
  //     datasets: [
  //       {
  //         label: "Basic Data",
  //         data: basicData,
  //         backgroundColor: "rgba(182, 49, 78, 0.2)", // 예시 색상
  //         borderColor: "rgba(255, 99, 132, 1)", // 예시 색상
  //         borderWidth: 1,
  //         showLine: false, // 선으로 연결하지 않음
  //       },
  //       {
  //         label: "0 deg",
  //         data: data0deg,
  //         backgroundColor: "rgba(54, 162, 235, 0.2)", // 예시 색상
  //         borderColor: "rgba(54, 162, 235, 1)", // 예시 색상
  //         borderWidth: 1,
  //         showLine: false, // 선으로 연결하지 않음
  //       },
  //       {
  //         label: "30 deg",
  //         data: data30deg,
  //         backgroundColor: "rgba(75, 192, 192, 0.2)", // 예시 색상
  //         borderColor: "rgba(75, 192, 192, 1)", // 예시 색상
  //         borderWidth: 1,
  //         showLine: false, // 선으로 연결하지 않음
  //       },
  //       {
  //         label: "60 deg",
  //         data: data60deg,
  //         backgroundColor: "rgba(153, 102, 255, 0.2)", // 예시 색상
  //         borderColor: "rgba(153, 102, 255, 1)", // 예시 색상
  //         borderWidth: 1,
  //         showLine: false, // 선으로 연결하지 않음
  //       },
  //       {
  //         label: "90 deg",
  //         data: data90deg,
  //         backgroundColor: "rgba(255, 159, 64, 0.2)", // 예시 색상
  //         borderColor: "rgba(255, 159, 64, 1)", // 예시 색상
  //         borderWidth: 1,
  //         showLine: false, // 선으로 연결하지 않음
  //       },
  //     ],
  //   };

  //   // 차트 옵션 설정 (x, y축 범위 및 레이블 조정)
  //   const options: ChartOptions<"scatter"> = {
  //     scales: {
  //       x: {
  //         type: "linear",
  //         position: "bottom",
  //         min: 0,
  //         max: 0.1, // 이미지의 x축 범위에 맞춰 조정
  //         title: {
  //           display: true,
  //           text: "Drag Coefficient",
  //         },
  //       },
  //       y: {
  //         type: "linear",
  //         min: -0.4, // 이미지의 y축 범위에 맞춰 조정
  //         max: 0.8,
  //         title: {
  //           display: true,
  //           text: "Lift Coefficient",
  //         },
  //       },
  //     },
  //     plugins: {
  //       legend: {
  //         position: "top",
  //       },
  //       title: {
  //         display: true,
  //         text: "Lift Coefficient vs. Drag Coefficient",
  //       },
  //     },
  //   };
  // 플러그인 등록
  Chart.register(annotationPlugin);

  const data = {
    datasets: [
      {
        label: "Basic Data",
        data: basicData,
        backgroundColor: "rgba(182, 49, 78, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        showLine: false,
        pointRadius: 5, // 포인트 크기 조정
        pointHoverRadius: 7, // 호버 시 포인트 크기 조정
      },
      {
        label: "0 deg",
        data: data0deg,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        showLine: false,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: "30 deg",
        data: data30deg,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        showLine: false,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: "60 deg",
        data: data60deg,
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
        showLine: false,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: "90 deg",
        data: data90deg,
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
        showLine: false,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options: ChartOptions<"scatter"> = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        min: 0,
        max: 0.1,
        title: {
          display: true,
          text: "Drag Coefficient",
          font: {
            size: 16,
            weight: "bold",
          },
        },
        grid: {
          color: "rgba(200, 200, 200, 0.2)", // 그리드 라인 색상 조정
          lineWidth: 1,
        },
      },
      y: {
        type: "linear",
        min: -0.4,
        max: 0.8,
        title: {
          display: true,
          text: "Lift Coefficient",
          font: {
            size: 16,
            weight: "bold",
          },
        },
        grid: {
          color: "rgba(200, 200, 200, 0.2)",
          lineWidth: 1,
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
          },
          padding: 20,
        },
      },
      title: {
        display: true,
        text: "Lift Coefficient vs. Drag Coefficient",
        font: {
          size: 18,
          weight: "bold",
        },
        padding: {
          top: 10,
          bottom: 10,
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0,0,0,0.7)",
        titleFont: {
          size: 14,
          weight: "bold",
        },
        bodyFont: {
          size: 12,
        },
        padding: 10,
        cornerRadius: 5,
      },
      annotation: {
        annotations: {
          textbox1: {
            type: "label",
            xValue: 0.05,
            yValue: 0.6,
            backgroundColor: "rgba(255,255,255,0.8)",
            borderColor: "rgba(0,0,0,0.8)",
            borderWidth: 1,
            content: ["Angle of Attack", "for Different Degrees"],
            font: {
              size: 14,
            },
            padding: {
              top: 10,
              right: 10,
              bottom: 10,
              left: 10,
            },
            borderRadius: 10,
          },
        },
      },
    },
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <Scatter data={data} options={options} />
      </div>
    </div>
  );
};

export default Graph;
