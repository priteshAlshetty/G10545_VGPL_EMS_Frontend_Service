import React, { useState } from "react";

const SplitPanel = ({ x, y, width, height, part1Title, part2Title, onPart1Click, onPart2Click, children }) => {
  const [hoverPart1, setHoverPart1] = useState(false);
  const [hoverPart2, setHoverPart2] = useState(false);

  const halfWidth = width / 2;

  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Part 1 - Left Side - Click area */}
      <rect
        width={halfWidth}
        height={height}
        fill={hoverPart1 ? "#60a5fa" : "#dbeafe"}
        stroke="#000"
        strokeWidth="2"
        rx="4"
        style={{
          cursor: "pointer",
          transition: "all 0.3s ease",
          filter: hoverPart1 ? "drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))" : "none",
          pointerEvents: "auto",
        }}
        onMouseEnter={() => setHoverPart1(true)}
        onMouseLeave={() => setHoverPart1(false)}
        onClick={onPart1Click}
      />
      <text
        x={halfWidth / 2}
        y="25"
        fontSize="16"
        fontWeight="bold"
        textAnchor="middle"
        pointerEvents="none"
        fill={hoverPart1 ? "#1e40af" : "#000"}
        style={{ transition: "color 0.3s ease" }}
      >
        {part1Title}
      </text>

      {/* Part 2 - Right Side - Click area */}
      <rect
        x={halfWidth}
        width={halfWidth}
        height={height}
        fill={hoverPart2 ? "#f87171" : "#fecaca"}
        stroke="#000"
        strokeWidth="2"
        rx="4"
        style={{
          cursor: "pointer",
          transition: "all 0.3s ease",
          filter: hoverPart2 ? "drop-shadow(0 0 8px rgba(239, 68, 68, 0.5))" : "none",
          pointerEvents: "auto",
        }}
        onMouseEnter={() => setHoverPart2(true)}
        onMouseLeave={() => setHoverPart2(false)}
        onClick={onPart2Click}
      />
      <text
        x={halfWidth + halfWidth / 2}
        y="25"
        fontSize="16"
        fontWeight="bold"
        textAnchor="middle"
        pointerEvents="none"
        fill={hoverPart2 ? "#991b1b" : "#000"}
        style={{ transition: "color 0.3s ease" }}
      >
        {part2Title}
      </text>

      {/* Divider line in the middle */}
      <line
        x1={halfWidth}
        y1="0"
        x2={halfWidth}
        y2={height}
        stroke="#000"
        strokeWidth="2"
        pointerEvents="none"
      />

      {/* Render additional children */}
      {children}
    </g>
  );
};

export default SplitPanel;
