import { useState } from "react";
import classes from "./ResizeCircle.module.css";

const ResizeCircle = ({ cx, cy, type, config, handleSetConfig }) => {
  const [isResizing, setIsResizing] = useState(false);
  const handleClick = () => {
    console.log("Circle clicked");
  };

  const handleOnMouseMove = (ev) => {
    if (!isResizing) return;
    if (type === "height") {
      const deltaY = ev.movementY;
      const UPDATED_CONFIGURATION = { ...config };
      UPDATED_CONFIGURATION.height = config.height - deltaY;
      UPDATED_CONFIGURATION.posY = config.posY + deltaY;
      handleSetConfig(UPDATED_CONFIGURATION);
    } else if (type === "width") {
      const deltaX = ev.movementX;
      const UPDATED_CONFIGURATION = { ...config };
      UPDATED_CONFIGURATION.width = config.width + deltaX;
      handleSetConfig(UPDATED_CONFIGURATION);
    }
  };

  const handleOnMouseUp = () => {
    setIsResizing(false);
  };

  const handleOnMouseDown = (ev) => {
    setIsResizing(true);
  };

  return (
    <circle
      className={`${classes.resizeCircle} ${
        type === "height"
          ? `${classes.heightResizeCircle}`
          : type === "width"
          ? `${classes.widthResizeCircle}`
          : ""
      }`}
      cx={cx}
      cy={cy}
      r="10"
      onClick={handleClick}
      onMouseDown={handleOnMouseDown}
      onMouseUp={handleOnMouseUp}
      onMouseMove={handleOnMouseMove}
    />
  );
};

export default ResizeCircle;
