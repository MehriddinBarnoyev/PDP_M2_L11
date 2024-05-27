import React, { useRef } from "react";
import { Line, getDatasetAtEvent, getElementAtEvent, getElementsAtEvent } from "react-chartjs-2";
import "chart.js/auto";

export default function SalesDashboard() {
  const chartRef = useRef(null);

  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Sales",
        data: [3800, 3600, 3200, 4005, 3800, 3500, 3800, 4100, 4300, 4000, 3900, 3700],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Sales Dashboard",
        align: "start",
        font: {
          size: 24,
        },
        color: "#fff",
      },
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#fff",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#fff",
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
      },
    },
  };

  const log = (message) => {
    console.log(message);
  };

  const printDatasetEvent = (dataset) => {
    if (!dataset.length) return;
    const datasetIndex = dataset[0].datasetIndex;
    log(data.datasets[datasetIndex].label);
  };

  const printElementAtEvent = (element) => {
    if (!element.length) return;
    const { datasetIndex, index } = element[0];
    log(`${data.labels[index]}: ${data.datasets[datasetIndex].data[index]}`);
  };

  const printElementsAtEvent = (elements) => {
    if (!elements.length) return;
    log(elements.length);
  };

  const clicked = (event) => {
    const chart = chartRef.current;

    if (!chart) return;
    printDatasetEvent(getDatasetAtEvent(chart, event));
    printElementAtEvent(getElementAtEvent(chart, event));
    printElementsAtEvent(getElementsAtEvent(chart, event));
  };

  return (
    <div style={{ backgroundColor: "#E5E5E5", padding: "20px", borderRadius: "15px" }}>
      <Line ref={chartRef} data={data} options={options} onClick={clicked} />
    </div>
  );
}
