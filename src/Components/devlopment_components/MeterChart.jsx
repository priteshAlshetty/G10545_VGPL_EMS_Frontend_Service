import Chart from "react-apexcharts";
import './MeterChart.css';

export default function MeterChart({ title, x, series, yTitle }) {

  const options = {

    chart: {
      type: "area",
      height: 350,
      stacked: false,

      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true
      },

      toolbar: {
        show: true,
        autoSelected: "zoom"
      }
    },

    dataLabels: {
      enabled: false
    },

    markers: {
      size: 0
    },

    title: {
      text: title,
      align: "left"
    },

    stroke: {
      curve: "straight",
      width: 3
    },

    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      }
    },

    xaxis: {
      type: "datetime",
      categories: x
    },

    yaxis: {
      title: {
        text: yTitle
      }
    },

    tooltip: {
      shared: true
    }

  };

  return (
    <div className="chart-container">

      <h3>{title}</h3>

      <Chart
        options={options}
        series={series}
        type="area"
        height={300}
      />

    </div>
  );
}