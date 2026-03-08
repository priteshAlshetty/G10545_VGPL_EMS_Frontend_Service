import React from "react";

const SvgButton = ({ x, y, label, fill = "#e5e7eb", stroke = "#111827", onClick }) => {
  return (
    <g
      transform={`translate(${x}, ${y})`}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <rect width="80" height="26" rx="4" fill={fill} stroke={stroke} />
      <text
        x="40"
        y="18"
        fontSize="12"
        textAnchor="middle"
      >
        {label}
      </text>
    </g>
  );
};

export default SvgButton;
