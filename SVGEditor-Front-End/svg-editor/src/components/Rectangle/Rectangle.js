import React, { useState } from "react";
import SVG from "./SVG";
import INITIAL_CONFIGURATION from "./Configuration";
import ResizeCircle from "./ResizeCircle";

const RectangleSVG = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [config, setConfig] = useState(INITIAL_CONFIGURATION);
  const handleClick = () => {
    //toggle rectangle click
    setIsClicked((prevState) => !prevState);
  };

  const handleSetConfig = (config) => {
    setConfig(config);
  };

  return (
    <SVG config={config} handleRectangleClick={handleClick}>
      {isClicked && (
        <React.Fragment>
          <ResizeCircle
            type="height"
            cx={config.posX + config.width / 2}
            cy={config.posY}
            config={config}
            handleSetConfig={handleSetConfig}
          />
          <ResizeCircle
            type="width"
            cx={config.posX + config.width}
            cy={config.posY + config.height / 2}
            config={config}
            handleSetConfig={handleSetConfig}
          />
        </React.Fragment>
      )}
    </SVG>
  );
};

export default RectangleSVG;
