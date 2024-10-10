import React from "react";
import Handles from "./Handles";

const SVG = ({
  handleMouseMove,
  handleMouseUp,
  handleMouseDown,
  x,
  y,
  width,
  height,
}) => {
  return (
    <React.Fragment>
      <svg
        width="100%"
        height="75vh"
        style={{ paddingBottom: "10" }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill="lightblue"
          stroke="black"
          strokeWidth="2"
        />
        <Handles
          x={x}
          y={y}
          width={width}
          height={height}
          handleMouseDown={handleMouseDown}
        />
      </svg>
    </React.Fragment>
  );
};

export default SVG;
