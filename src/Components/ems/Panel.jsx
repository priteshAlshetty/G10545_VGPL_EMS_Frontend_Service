import React from "react";

const Panel = ({ x, y, width, height, title, children }) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        width={width}
        height={height}
        fill="none"
        stroke="#000"
        strokeWidth="2"
      />
      <text
        x="10"
        y="20"
        fontSize="16"
        fontWeight="bold"
      >
        {title}
      </text>
      {children}
    </g>
  );
};

export default Panel;
