import React from "react";
import classes from "./Rectangle.module.css";

const SVG = ({ config, handleRectangleClick, children }) => {
  return (
    <svg width="900" height="1000" xmlns="http://www.w3.org/2000/svg">
      <rect
        className={classes.rectangle}
        onClick={handleRectangleClick}
        width={config.width}
        height={config.height}
        x={config.posX}
        y={config.posY}
        fill="white"
        stroke="black"
        strokeWidth="1"
      />
      {children}
    </svg>
  );
};

export default SVG;
