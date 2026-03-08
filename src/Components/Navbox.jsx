import React from 'react';
import './Navbox.css';

const Navbox = () => {
  return (
    <div className="navbox">
      <div className="nav-item">
        <span className="label">Live kW</span>
        <span className="value">12.5</span>
      </div>

      <div className="nav-item">
        <span className="label">Today's kWh</span>
        <span className="value">120</span>
      </div>

      <div className="nav-item">
        <span className="label">Previous Day kWh</span>
        <span className="value">110</span>
      </div>

      <div className="nav-item">
        <span className="label">Power Factor</span>
        <span className="value" style={{color:"green"}}>0.98</span>
      </div>

      <div className="nav-item">
        <span className="label">Live Current(Avg)</span>
        <span className="value">15 A</span>
      </div>

      <div className="nav-item">
        <span className="label">Live Voltage(Avg)</span>
        <span className="value">230 V</span>
      </div>
    </div>
  );
};

export default Navbox;
