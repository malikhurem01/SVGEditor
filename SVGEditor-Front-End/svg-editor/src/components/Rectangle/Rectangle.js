import { useState } from "react";
import SVG from "./SVG";

const Rectangle = () => {
  const [resizeHandle, setResizeHandle] = useState(null);
  const [params, setParams] = useState({
    x: 50,
    y: 50,
    width: 200,
    height: 100,
  });

  const { x, y, width, height } = params;
  const handleMouseDown = (e, corner) => {
    e.preventDefault();
    setResizeHandle(corner);
  };

  const handleMouseUp = () => {
    setResizeHandle(null);
  };

  const handleMouseMove = (e) => {
    if (resizeHandle) {
      const newParams = { width, height, x, y };
      if (resizeHandle === "south-east") {
        newParams.width = e.clientX - x;
        newParams.height = e.clientY - y;
      } else if (resizeHandle === "south-west") {
        newParams.width = width - (e.clientX - x);
        newParams.x = e.clientX;
        newParams.height = e.clientY - y;
      } else if (resizeHandle === "north-east") {
        newParams.height = height - (e.clientY - y);
        newParams.y = e.clientY;
        newParams.width = e.clientX - x;
      } else if (resizeHandle === "north-west") {
        newParams.height = height - (e.clientY - y);
        newParams.y = e.clientY;
        newParams.width = width - (e.clientX - x);
        newParams.x = e.clientX;
      }
      setParams(newParams);
    }
  };
  return (
    <SVG
      handleMouseMove={handleMouseMove}
      handleMouseUp={handleMouseUp}
      handleMouseDown={handleMouseDown}
      x={x}
      y={y}
      width={width}
      height={height}
    />
  );
};

export default Rectangle;
