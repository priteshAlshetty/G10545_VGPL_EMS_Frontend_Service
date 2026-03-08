import React from "react";

const Meter = ({ x, y, label, value }) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        width="90"
        height="70"
        rx="6"
        fill="#f8fafc"
        stroke="#334155"
      />
      <text x="8" y="18" fontSize="12">
        {label}
      </text>
      <text
        x="8"
        y="42"
        fontSize="14"
        fontWeight="bold"
      >
        {value}
      </text>
    </g>
  );
};

export default Meter;
