import React from "react";

const Wire = ({ from, to, type = "rs485", routing = "straight", waypoints = null }) => {
  const styles = {
    rs485: { stroke: "#000", dash: "" },
    ethernet: { stroke: "#555", dash: "4 4" },
    fiber: { stroke: "#000", dash: "10 6" },
  };

  // Generate path based on routing type or custom waypoints
  const generatePath = () => {
    // If custom waypoints are provided, use them
    if (waypoints && waypoints.length > 0) {
      let pathData = `M ${from.x} ${from.y}`;
      waypoints.forEach(point => {
        pathData += ` L ${point.x} ${point.y}`;
      });
      pathData += ` L ${to.x} ${to.y}`;
      return pathData;
    }

    if (routing === "orthogonal" || routing === "routed") {
      // 90-degree routed path
      const midX = (from.x + to.x) / 2;
      return `M ${from.x} ${from.y} L ${midX} ${from.y} L ${midX} ${to.y} L ${to.x} ${to.y}`;
    } else if (routing === "smooth") {
      // Smooth curved path
      const midX = (from.x + to.x) / 2;
      return `M ${from.x} ${from.y} Q ${midX} ${from.y} ${midX} ${(from.y + to.y) / 2} T ${to.x} ${to.y}`;
    }
    // Default: straight line
    return `M ${from.x} ${from.y} L ${to.x} ${to.y}`;
  };

  const pathData = generatePath();

  return (
    <path
      d={pathData}
      stroke={styles[type].stroke}
      strokeDasharray={styles[type].dash}
      strokeWidth="2"
      fill="none"
    />
  );
};

export default Wire;
