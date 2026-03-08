import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  LineElement,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler
);

// White background plugin
const whiteBackgroundPlugin = {
  id: "whiteBackground",
  beforeDraw: (chart) => {
    const { ctx, width, height } = chart;
    ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = "#2B3144";
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
  }
};

const MetricChart = ({ title, data }) => {
  if (!data) return <p>Select a card to view chart</p>;

  const values =
    typeof data === "object" ? Object.values(data) : [data];

  const labels = values.map((_, i) => `Point ${i + 1}`);

  const lineData = {
    labels,
    datasets: [
      {
        label: `${title} Line`,
        data: values,
        borderColor: "#0abb22",
        tension: 0.4,
        fill: true,
        backgroundColor: (context) => {
          const chart = context.chart;
          if (!chart.chartArea) return "rgba(125,238,159,0.25)";

          const { ctx, chartArea } = chart;
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );

          gradient.addColorStop(0, "rgba(87,190,127,0.4)");
          gradient.addColorStop(1, "rgba(108,223,127,0.05)");
          return gradient;
        }
      }
    ]
  };

  const barData = {
    labels,
    datasets: [
      {
        label: `${title} Bars`,
        data: values,
        backgroundColor: "rgba(54, 162, 235, 0.6)"
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false
  };

  return (
    <div
      style={{
        width: "90vw",
        padding: "20px",
        // backgroundColor: "#fff",
        boxSizing: "border-box"
      }}
    >
      <h3 style={{color:"#ffff"}}>{title} Chart</h3>

      <div
        style={{
          display: "flex",
          gap: "20px",
          width: "100%",
          height: "400px"
        }}
      >
        {/* Line Chart */}
        <div style={{ flex: 1,boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3), 0 4px 15px rgba(13, 16, 26, 0.5)" }}>
          <Line
            data={lineData}
            options={options}
            plugins={[whiteBackgroundPlugin]}
          />
        </div>

        {/* Bar Chart */}
        <div style={{ flex: 1 ,boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3), 0 4px 15px rgba(13, 16, 26, 0.5)"}}>
          <Bar
            data={barData}
            options={options}
            plugins={[whiteBackgroundPlugin]}
          />
        </div>
      </div>
    </div>
  );
};

export default MetricChart;
