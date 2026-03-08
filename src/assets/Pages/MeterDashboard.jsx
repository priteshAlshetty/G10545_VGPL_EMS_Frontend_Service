import { useEffect, useState } from "react";
import { getMeterData } from "../api_Integration/Individual_rawdata.js";
import "./MeterDashboard.css";


// import { ImPower } from "react-icons/im";

import StatGroup from "../../Components/devlopment_components/StatGroup.jsx";
import MeterChart from "../../Components/devlopment_components/MeterChart.jsx";

export default function MeterDashboard({ meterId, date }) {

  const [data, setData] = useState(null);
  const [selectedChart, setSelectedChart] = useState('Voltages');

  useEffect(() => {

    async function loadData() {

      const res = await getMeterData({
        meterId: meterId,
        date: date
      });

      setData(res);

    }

    loadData();

  }, [meterId, date]);

  if (!data) return <div>Loading...</div>;

  const latest = data.latest_reading;
  const cont = data.continues_readings;
  const avg = data.avg_reading;

  const getChartData = (type) => {
    switch (type) {
      case 'Voltages':
        return {
          title: 'Voltage Trend',
          series: [
            { name: 'V1', data: cont.voltage_v1 },
            { name: 'V2', data: cont.voltage_v2 },
            { name: 'V3', data: cont.voltage_v3 }
          ],
          yTitle: 'Voltage (V)'
        };
      case 'Currents':
        return {
          title: 'Current Trend',
          series: [
            { name: 'C1', data: cont.current_i1 },
            { name: 'C2', data: cont.current_i2 },
            { name: 'C3', data: cont.current_i3 }
          ],
          yTitle: 'Current (Amp)'
        };
      case 'Frequency':
        return {
          title: 'Frequency Trend',
          series: [
            { name: 'Frequency', data: cont.frequency }
          ],
          yTitle: 'Frequency (Hz)'
        };
      case 'Power Factor':
        return {
          title: 'Power Factor Trend',
          series: [
            { name: 'Power Factor', data: cont.power_factor }
          ],
          yTitle: 'Power Factor'
        };
      case 'Power':
        return {
          title: 'Power Trend',
          series: [
            { name: 'Active Power', data: cont.active_power },
            { name: 'Apparent Power', data: cont.apparent_power },
            { name: 'Reactive Power', data: cont.reactive_power }
          ],
          yTitle: 'Power (kW/kVA/kVAR)'
        };
      case 'Demand':
        return {
          title: 'Demand Trend',
          series: [
            { name: 'kW Demand', data: cont.kw_demand }
          ],
          yTitle: 'Demand (kW)'
        };
      case 'Active Energy':
        return {
          title: 'Active Energy Trend',
          series: [
            { name: 'Active Energy', data: cont.active_energy }
          ],
          yTitle: 'Energy (kWh)'
        };
      case 'Harmonics':
        return {
          title: 'Harmonics Trend',
          series: [
            { name: 'THD V', data: cont.thd_v },
            { name: 'THD I', data: cont.thd_i }
          ],
          yTitle: 'THD (%)'
        };
      default:
        return {
          title: 'Voltage Trend',
          series: [
            { name: 'V1', data: cont.voltage_v1 },
            { name: 'V2', data: cont.voltage_v2 },
            { name: 'V3', data: cont.voltage_v3 }
          ],
          yTitle: 'Voltage (V)'
        };
    }
  };

  const chartData = getChartData(selectedChart);

  return (
    <div className="aa"><video autoPlay loop muted playsInline className="video-background">
      <source src="/backgroundvideo.mp4" type="video/mp4" />
    </video>
      <div className="headerbar">

        <div className="logo-vishakha"><img src="/vishakha.jpg" alt="" /></div>
        <div className="date-selection"><button>Yesterday</button> <button>Today</button>  <input type="date" /></div>
        <div><h2>Panel:{data.panel_id} | Meter: {data.meter_id}</h2>  <select name="panel-id" id=""> <option value=""></option></select></div>
        <div className="logo-mq"><img src="/multiquadrant.jpg" alt="" /></div>
      </div>

      <div className="card-parameter">

     <StatGroup
  title="Voltages"
  items={[
    { label: "V1", value: latest.voltage_v1, unit: "V" },
    { label: <>V1 <span className="Avg-label">Avg</span></>, value: avg.voltage_v1, unit: "V" },

    { label: "V2", value: latest.voltage_v2, unit: "V" },
    { label: <>V2 <span className="Avg-label">Avg</span></>, value: avg.voltage_v2, unit: "V" },

    { label: "V3", value: latest.voltage_v3, unit: "V" },
    { label: <>V3 <span className="Avg-label">Avg</span></>, value: avg.voltage_v3, unit: "V" },
  ]}
/>


        <StatGroup
          title="Currents"
          items={[
            { label: "C1", value: latest.current_i1, unit: "Amp" },
            { label: "C2", value: latest.current_i2, unit: "Amp" },
            { label: "C3", value: latest.current_i3, unit: "Amp" },
          ]}
        />
        <StatGroup
          title="Frequency"
          items={[
            { label: "Frequency", value: latest.frequency, unit: "Hz" },

          ]}
        />
        <StatGroup
          title="Power Factor"
          items={[
            { label: "Power Factor", value: latest.power_factor, unit: "" },

          ]}
        />
        {/* ////////////////////// */}
        <StatGroup
          title="Power"
          items={[
            { label: "Active Power", value: latest.active_power, unit: "kW" },
            { label: "Apparent Power", value: latest.apparent_power, unit: "kVA" },
            { label: "Reactive Power", value: latest.reactive_power, unit: "kVAR" },
          ]}
        />
        <StatGroup
          title="Demand"
          items={[
            { label: "kw demand", value: latest.kw_demand, unit: "kW" },

          ]}
        />
        <StatGroup
          title="Active Energy"
          items={[
            { label: "Active Energy", value: latest.active_energy, unit: "kWh" },

          ]}
        />
        <StatGroup
          title="Harmonics"
          items={[
            { label: "THD V", value: latest.thd_v, unit: "%" },
            { label: "THD I", value: latest.thd_i, unit: "%" },
          ]}
        />

      </div>
<div className="chart-select"><div className="chart-selection-btn">
  <button onClick={() => setSelectedChart('Voltages')}>Voltages</button>
  <button onClick={() => setSelectedChart('Currents')}>Currents</button>
  <button onClick={() => setSelectedChart('Frequency')}>Frequency</button>
  <button onClick={() => setSelectedChart('Power Factor')}>Power Factor</button>
  <button onClick={() => setSelectedChart('Power')}>Power</button>
  <button onClick={() => setSelectedChart('Demand')}>Demand</button>
  <button onClick={() => setSelectedChart('Active Energy')}>Active Energy</button>
  <button onClick={() => setSelectedChart('Harmonics')}>Harmonics</button>

</div></div>
      <MeterChart
        title={chartData.title}
        x={cont.date_time}
        series={chartData.series}
        yTitle={chartData.yTitle}
      />

    </div>
  );
}