import React, { useRef } from "react";
import { Bar, getDatasetAtEvent, getElementAtEvent, getElementsAtEvent } from "react-chartjs-2";
import "chart.js/auto";

export default function StackedBarChart() {
  const chartRef = useRef(null);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Google",
        data: [1100, 800, 1200, 900],
        backgroundColor: "#FF6384",
      },
      {
        label: "Bing",
        data: [300, 250, 400, 350],
        backgroundColor: "#36A2EB",
      },
      {
        label: "Yahoo",
        data: [200, 180, 250, 200],
        backgroundColor: "#FFCE56",
      },
      {
        label: "Ask",
        data: [100, 90, 150, 120],
        backgroundColor: "#4BC0C0",
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Most Popular Search Engines",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Number of visitors in Millions',
        },
        beginAtZero: true,
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
    <div className="mt-5">
      <div className="col">
        <Bar ref={chartRef} data={data} options={options} onClick={clicked} />
      </div>
    </div>
  );
}
