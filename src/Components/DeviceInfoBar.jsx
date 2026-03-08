import React from "react";
import "./DeviceInfoBar.css";

const DeviceInfoBar = () => {
  return (
    <div className="device-info-bar">
      <div className="info-item">
        <span className="key">Panel Name:</span>
        <span className="value">PCC:Panel-1</span>
      </div>

      <div className="info-item">
        <span className="key">Device Name:</span>
        <span className="value">PDB1</span>
      </div>

      <div className="info-item">
        <span className="key">Device ID:</span>
        <span className="value">5</span>
      </div>

      <div className="datefilter">Filter: -
      <input
        type="datetime-local"
       
       
        style={{
          padding: "6px 10px",
          borderRadius: "4px",
          border: "1px solid #ccc"
        }}
      /></div>
    </div>
  );
};

export default DeviceInfoBar;
