import React from "react";
import "./Individual-meter-screen.css";

const data = {
  site: { name: "Vishakha", connectivity: "Live", date: "15 July 2023" },
  meters: [
   {"id":"EM2147","power_kw":742.16,"max_kw":1200,"zone":"warning","consumption_kwh":14893.57,"status":"online"},{"id":"EM7812H","power_kw":155.62,"max_kw":1200,"zone":"inactive","consumption_kwh":21901.44,"status":"offline"},{"id":"EM6621","power_kw":998.21,"max_kw":1200,"zone":"critical","consumption_kwh":20331.44,"status":"online"},{"id":"EM9064NG","power_kw":341.11,"max_kw":1200,"zone":"normal","consumption_kwh":11941.82,"status":"offline"},{"id":"EM3390","power_kw":884.55,"max_kw":1200,"zone":"warning","consumption_kwh":20114.65,"status":"online"},{"id":"EM2147","power_kw":742.16,"max_kw":1200,"zone":"warning","consumption_kwh":14893.57,"status":"online"},{"id":"EM7812H","power_kw":155.62,"max_kw":1200,"zone":"inactive","consumption_kwh":21901.44,"status":"offline"},{"id":"EM6621","power_kw":998.21,"max_kw":1200,"zone":"critical","consumption_kwh":20331.44,"status":"online"},{"id":"EM9064NG","power_kw":341.11,"max_kw":1200,"zone":"normal","consumption_kwh":11941.82,"status":"offline"},{"id":"EM3390","power_kw":884.55,"max_kw":1200,"zone":"warning","consumption_kwh":20114.65,"status":"online"},{"id":"EM2147","power_kw":742.16,"max_kw":1200,"zone":"warning","consumption_kwh":14893.57,"status":"online"},{"id":"EM7812H","power_kw":155.62,"max_kw":1200,"zone":"inactive","consumption_kwh":21901.44,"status":"offline"},{"id":"EM6621","power_kw":998.21,"max_kw":1200,"zone":"critical","consumption_kwh":20331.44,"status":"online"},{"id":"EM9064NG","power_kw":341.11,"max_kw":1200,"zone":"normal","consumption_kwh":11941.82,"status":"offline"},{"id":"EM3390","power_kw":884.55,"max_kw":1200,"zone":"warning","consumption_kwh":20114.65,"status":"online"},{"id":"EM2147","power_kw":742.16,"max_kw":1200,"zone":"warning","consumption_kwh":14893.57,"status":"online"},{"id":"EM7812H","power_kw":155.62,"max_kw":1200,"zone":"inactive","consumption_kwh":21901.44,"status":"offline"},{"id":"EM6621","power_kw":998.21,"max_kw":1200,"zone":"critical","consumption_kwh":20331.44,"status":"online"},{"id":"EM9064NG","power_kw":341.11,"max_kw":1200,"zone":"normal","consumption_kwh":11941.82,"status":"offline"},{"id":"EM3390","power_kw":884.55,"max_kw":1200,"zone":"warning","consumption_kwh":20114.65,"status":"online"},{"id":"EM2147","power_kw":742.16,"max_kw":1200,"zone":"warning","consumption_kwh":14893.57,"status":"online"},{"id":"EM7812H","power_kw":155.62,"max_kw":1200,"zone":"inactive","consumption_kwh":21901.44,"status":"offline"},{"id":"EM6621","power_kw":998.21,"max_kw":1200,"zone":"critical","consumption_kwh":20331.44,"status":"online"},{"id":"EM9064NG","power_kw":341.11,"max_kw":1200,"zone":"normal","consumption_kwh":11941.82,"status":"offline"},{"id":"EM3390","power_kw":884.55,"max_kw":1200,"zone":"warning","consumption_kwh":20114.65,"status":"online"},{"id":"EM2147","power_kw":742.16,"max_kw":1200,"zone":"warning","consumption_kwh":14893.57,"status":"online"},{"id":"EM7812H","power_kw":155.62,"max_kw":1200,"zone":"inactive","consumption_kwh":21901.44,"status":"offline"},{"id":"EM6621","power_kw":998.21,"max_kw":1200,"zone":"critical","consumption_kwh":20331.44,"status":"online"},{"id":"EM9064NG","power_kw":341.11,"max_kw":1200,"zone":"normal","consumption_kwh":11941.82,"status":"offline"},{"id":"EM3390","power_kw":884.55,"max_kw":1200,"zone":"warning","consumption_kwh":20114.65,"status":"online"},{"id":"EM2147","power_kw":742.16,"max_kw":1200,"zone":"warning","consumption_kwh":14893.57,"status":"online"},{"id":"EM7812H","power_kw":155.62,"max_kw":1200,"zone":"inactive","consumption_kwh":21901.44,"status":"offline"},{"id":"EM6621","power_kw":998.21,"max_kw":1200,"zone":"critical","consumption_kwh":20331.44,"status":"online"},{"id":"EM9064NG","power_kw":341.11,"max_kw":1200,"zone":"normal","consumption_kwh":11941.82,"status":"offline"},{"id":"EM3390","power_kw":884.55,"max_kw":1200,"zone":"warning","consumption_kwh":20114.65,"status":"online"},{"id":"EM2147","power_kw":742.16,"max_kw":1200,"zone":"warning","consumption_kwh":14893.57,"status":"online"},{"id":"EM7812H","power_kw":155.62,"max_kw":1200,"zone":"inactive","consumption_kwh":21901.44,"status":"offline"},{"id":"EM6621","power_kw":998.21,"max_kw":1200,"zone":"critical","consumption_kwh":20331.44,"status":"online"},{"id":"EM9064NG","power_kw":341.11,"max_kw":1200,"zone":"normal","consumption_kwh":11941.82,"status":"offline"},{"id":"EM3390","power_kw":884.55,"max_kw":1200,"zone":"warning","consumption_kwh":20114.65,"status":"online"},{"id":"EM2147","power_kw":742.16,"max_kw":1200,"zone":"warning","consumption_kwh":14893.57,"status":"online"},{"id":"EM7812H","power_kw":155.62,"max_kw":1200,"zone":"inactive","consumption_kwh":21901.44,"status":"offline"},{"id":"EM6621","power_kw":998.21,"max_kw":1200,"zone":"critical","consumption_kwh":20331.44,"status":"online"},{"id":"EM9064NG","power_kw":341.11,"max_kw":1200,"zone":"normal","consumption_kwh":11941.82,"status":"offline"},{"id":"EM3390","power_kw":884.55,"max_kw":1200,"zone":"warning","consumption_kwh":20114.65,"status":"online"},{"id":"EM2147","power_kw":742.16,"max_kw":1200,"zone":"warning","consumption_kwh":14893.57,"status":"online"},{"id":"EM7812H","power_kw":155.62,"max_kw":1200,"zone":"inactive","consumption_kwh":21901.44,"status":"offline"},{"id":"EM6621","power_kw":998.21,"max_kw":1200,"zone":"critical","consumption_kwh":20331.44,"status":"online"},{"id":"EM9064NG","power_kw":341.11,"max_kw":1200,"zone":"normal","consumption_kwh":11941.82,"status":"offline"},{"id":"EM3390","power_kw":884.55,"max_kw":1200,"zone":"warning","consumption_kwh":20114.65,"status":"online"},{"id":"EM2147","power_kw":742.16,"max_kw":1200,"zone":"warning","consumption_kwh":14893.57,"status":"online"},{"id":"EM7812H","power_kw":155.62,"max_kw":1200,"zone":"inactive","consumption_kwh":21901.44,"status":"offline"},{"id":"EM6621","power_kw":998.21,"max_kw":1200,"zone":"critical","consumption_kwh":20331.44,"status":"online"},{"id":"EM9064NG","power_kw":341.11,"max_kw":1200,"zone":"normal","consumption_kwh":11941.82,"status":"offline"},{"id":"EM3390","power_kw":884.55,"max_kw":1200,"zone":"warning","consumption_kwh":20114.65,"status":"online"},{"id":"EM2147","power_kw":742.16,"max_kw":1200,"zone":"warning","consumption_kwh":14893.57,"status":"online"},{"id":"EM7812H","power_kw":155.62,"max_kw":1200,"zone":"inactive","consumption_kwh":21901.44,"status":"offline"},{"id":"EM6621","power_kw":998.21,"max_kw":1200,"zone":"critical","consumption_kwh":20331.44,"status":"online"},{"id":"EM9064NG","power_kw":341.11,"max_kw":1200,"zone":"normal","consumption_kwh":11941.82,"status":"offline"},{"id":"EM3390","power_kw":884.55,"max_kw":1200,"zone":"warning","consumption_kwh":20114.65,"status":"online"},{"id":"EM2147","power_kw":742.16,"max_kw":1200,"zone":"warning","consumption_kwh":14893.57,"status":"online"},{"id":"EM7812H","power_kw":155.62,"max_kw":1200,"zone":"inactive","consumption_kwh":21901.44,"status":"offline"},{"id":"EM6621","power_kw":998.21,"max_kw":1200,"zone":"critical","consumption_kwh":20331.44,"status":"online"},{"id":"EM9064NG","power_kw":341.11,"max_kw":1200,"zone":"normal","consumption_kwh":11941.82,"status":"offline"},{"id":"EM3390","power_kw":884.55,"max_kw":1200,"zone":"warning","consumption_kwh":20114.65,"status":"online"},{"id":"EM2147","power_kw":742.16,"max_kw":1200,"zone":"warning","consumption_kwh":14893.57,"status":"online"},{"id":"EM7812H","power_kw":155.62,"max_kw":1200,"zone":"inactive","consumption_kwh":21901.44,"status":"offline"},{"id":"EM6621","power_kw":998.21,"max_kw":1200,"zone":"critical","consumption_kwh":20331.44,"status":"online"},{"id":"EM9064NG","power_kw":341.11,"max_kw":1200,"zone":"normal","consumption_kwh":11941.82,"status":"offline"},{"id":"EM3390","power_kw":884.55,"max_kw":1200,"zone":"warning","consumption_kwh":20114.65,"status":"online"},{"id":"EM2147","power_kw":742.16,"max_kw":1200,"zone":"warning","consumption_kwh":14893.57,"status":"online"},{"id":"EM7812H","power_kw":155.62,"max_kw":1200,"zone":"inactive","consumption_kwh":21901.44,"status":"offline"},{"id":"EM6621","power_kw":998.21,"max_kw":1200,"zone":"critical","consumption_kwh":20331.44,"status":"online"},{"id":"EM9064NG","power_kw":341.11,"max_kw":1200,"zone":"normal","consumption_kwh":11941.82,"status":"offline"},{"id":"EM3390","power_kw":884.55,"max_kw":1200,"zone":"warning","consumption_kwh":20114.65,"status":"online"},{"id":"EM2147","power_kw":742.16,"max_kw":1200,"zone":"warning","consumption_kwh":14893.57,"status":"online"},{"id":"EM7812H","power_kw":155.62,"max_kw":1200,"zone":"inactive","consumption_kwh":21901.44,"status":"offline"},{"id":"EM6621","power_kw":998.21,"max_kw":1200,"zone":"critical","consumption_kwh":20331.44,"status":"online"},{"id":"EM9064NG","power_kw":341.11,"max_kw":1200,"zone":"normal","consumption_kwh":11941.82,"status":"offline"},{"id":"EM3390","power_kw":884.55,"max_kw":1200,"zone":"warning","consumption_kwh":20114.65,"status":"online"},{"id":"EM2147","power_kw":742.16,"max_kw":1200,"zone":"warning","consumption_kwh":14893.57,"status":"online"},{"id":"EM7812H","power_kw":155.62,"max_kw":1200,"zone":"inactive","consumption_kwh":21901.44,"status":"offline"},{"id":"EM6621","power_kw":998.21,"max_kw":1200,"zone":"critical","consumption_kwh":20331.44,"status":"online"},{"id":"EM9064NG","power_kw":341.11,"max_kw":1200,"zone":"normal","consumption_kwh":11941.82,"status":"offline"},{"id":"EM3390","power_kw":884.55,"max_kw":1200,"zone":"warning","consumption_kwh":20114.65,"status":"online"},{"id":"EM2147","power_kw":742.16,"max_kw":1200,"zone":"warning","consumption_kwh":14893.57,"status":"online"},{"id":"EM7812H","power_kw":155.62,"max_kw":1200,"zone":"inactive","consumption_kwh":21901.44,"status":"offline"},{"id":"EM6621","power_kw":998.21,"max_kw":1200,"zone":"critical","consumption_kwh":20331.44,"status":"online"},{"id":"EM9064NG","power_kw":341.11,"max_kw":1200,"zone":"normal","consumption_kwh":11941.82,"status":"offline"},{"id":"EM3390","power_kw":884.55,"max_kw":1200,"zone":"warning","consumption_kwh":20114.65,"status":"online"},{"id":"EM2147","power_kw":742.16,"max_kw":1200,"zone":"warning","consumption_kwh":14893.57,"status":"online"},{"id":"EM7812H","power_kw":155.62,"max_kw":1200,"zone":"inactive","consumption_kwh":21901.44,"status":"offline"},{"id":"EM6621","power_kw":998.21,"max_kw":1200,"zone":"critical","consumption_kwh":20331.44,"status":"online"},{"id":"EM9064NG","power_kw":341.11,"max_kw":1200,"zone":"normal","consumption_kwh":11941.82,"status":"offline"},{"id":"EM3390","power_kw":884.55,"max_kw":1200,"zone":"warning","consumption_kwh":20114.65,"status":"online"}
  ]
};

const zoneColor = {
  normal: "#4CAF50",
  warning: "#F9A825",
  critical: "#E53935",
  inactive: "#BDBDBD"
};

function Gauge({ value, max, zone }) {
  const radius = 60;
  const stroke = 12;
  const normalized = Math.min(value / max, 1);
  const circumference = Math.PI * radius;
  const dash = normalized * circumference;

  return (
    <svg width="160" height="100">
      <path
        d={`M20 80 A ${radius} ${radius} 0 0 1 140 80`}
        fill="none"
        stroke="#eee"
        strokeWidth={stroke}
      />
      <path
        d={`M20 80 A ${radius} ${radius} 0 0 1 140 80`}
        fill="none"
        stroke={zoneColor[zone]}
        strokeWidth={stroke}
        strokeDasharray={`${dash} ${circumference}`}
      />
      <text x="80" y="70" textAnchor="middle" className="value">
        {value.toFixed(2)}
      </text>
      <text x="80" y="88" textAnchor="middle" className="unit">
        kW Total
      </text>
    </svg>
  );
}

function MeterCard({ meter }) {
  return (
    <div className={`card ${meter.alert ? "alert" : ""}`}>
      <div className="card-header">
        <span>{meter.id}</span>
        <span className={`dot ${meter.status}`}></span>
      </div>

      <Gauge value={meter.power_kw} max={meter.max_kw} zone={meter.zone} />

      {meter.alert && <div className="alert-text">{meter.alert}</div>}
                  
      <div className="consumption">
        Consumption: {meter.consumption_kwh.toLocaleString()} kWh
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="container">
      <header className="topbar">
        <h2>{data.site.name}</h2>
        <div className="status">
          Connectivity: <span className="live">{data.site.connectivity}</span>
        </div>
        <div>{data.site.date}</div>
      </header>

      <div className="grid">
        {data.meters.map((m) => (
          <MeterCard key={m.id} meter={m} />
        ))}
      </div>
    </div>
  );
}