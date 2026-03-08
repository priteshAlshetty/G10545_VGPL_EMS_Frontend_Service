import React, { useState } from "react";

const ClickablePanel = ({ x, y, width, height, title, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        width={width}
        height={height}
        fill={hover ? "#60a5fa" : "#dbeafe"}
        stroke="#000"
        strokeWidth="2"
        rx="4"
        style={{
          cursor: "pointer",
          transition: "all 0.3s ease",
          filter: hover ? "drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))" : "none",
          pointerEvents: "auto",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={onClick}
      />
      <text
        x={width / 2}
        y="25"
        fontSize="16"
        fontWeight="bold"
        textAnchor="middle"
        pointerEvents="none"
        fill={hover ? "#1e40af" : "#000"}
        style={{ transition: "color 0.3s ease" }}
      >
        {title}
      </text>
    </g>
  );
};

export default ClickablePanel;
