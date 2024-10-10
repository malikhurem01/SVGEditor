import React from "react";
import classes from "./Rectangle.module.css";
import ResizeCircle from "./ResizeCircle";

const SVG = ({ clicked, handleRectangleClick, handleResizeCircleClick }) => {
  return (
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect
        className={classes.rectangle}
        onClick={handleRectangleClick}
        width="150"
        height="100"
        x="25"
        y="50"
        fill="white"
        stroke="black"
        strokeWidth="1"
      />
      {clicked && (
        <React.Fragment>
          {/* Circle at the middle of the upper border */}
          <ResizeCircle
            type="height"
            cx="100"
            cy="50"
            onClick={handleResizeCircleClick}
          />
          {/* Circle at the middle of the right border */}
          <ResizeCircle
            type="width"
            cx="175"
            cy="100"
            onClick={handleResizeCircleClick}
          />
        </React.Fragment>
      )}
    </svg>
  );
};

export default SVG;
