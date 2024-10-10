import React, { useState } from "react";
import SVG from "./SVG";
import INITIAL_CONFIGURATION from "./Configuration";

const RectangleSVG = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [rectangle, setRectangle] = useState(INITIAL_CONFIGURATION);
  const handleClick = () => {
    //toggle rectangle click
    setIsClicked((prevState) => !prevState);
  };

  return (
    <SVG
      width={rectangle.WIDTH}
      height={rectangle.HEIGHT}
      clicked={isClicked}
      handleRectangleClick={handleClick}
    />
  );
};

export default RectangleSVG;
