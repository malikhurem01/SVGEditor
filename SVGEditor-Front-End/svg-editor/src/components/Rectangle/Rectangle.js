import React, { useState } from "react";
import SVG from "./SVG";

const RectangleSVG = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    //toggle rectangle click
    setIsClicked((prevState) => !prevState);
  };

  return <SVG clicked={isClicked} handleRectangleClick={handleClick} />;
};

export default RectangleSVG;
