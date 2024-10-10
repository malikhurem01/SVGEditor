import React from "react";
import Handles from "./Handles";
import Perimeter from "./Perimeter";

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
        width="97%"
        height="90%"
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
        <Perimeter x={x} y={y} width={width} height={height} />
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
