import React, { useState } from "react";
import SVG from "./SVG";

const RectangleSVG = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleRectangleClick = () => {
    //toggle rectangle click
    setIsClicked((prevState) => !prevState);
  };
  const handleResizeCircleClick = () => {
    console.log("Circle clicked");
  };
  return (
    <SVG
      clicked={isClicked}
      handleRectangleClick={handleRectangleClick}
      handleResizeCircleClick={handleResizeCircleClick}
    />
  );
};

export default RectangleSVG;
