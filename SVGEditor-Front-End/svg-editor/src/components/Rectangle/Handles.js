import React from "react";

const Handles = ({ x, y, width, height, handleMouseDown }) => {
  return (
    <React.Fragment>
      <circle
        cx={x}
        cy={y}
        r="8"
        fill="red"
        onMouseDown={(e) => handleMouseDown(e, "north-west")}
      />
      <circle
        cx={x + width}
        cy={y}
        r="8"
        fill="red"
        onMouseDown={(e) => handleMouseDown(e, "north-east")}
      />
      <circle
        cx={x}
        cy={y + height}
        r="8"
        fill="red"
        onMouseDown={(e) => handleMouseDown(e, "south-west")}
      />
      <circle
        cx={x + width}
        cy={y + height}
        r="8"
        fill="red"
        onMouseDown={(e) => handleMouseDown(e, "south-east")}
      />
    </React.Fragment>
  );
};

export default Handles;
