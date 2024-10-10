import React from "react";

const Perimeter = ({ x, y, width, height }) => {
  return (
    <React.Fragment>
      {" "}
      <text
        x={x + width / 2} // Center the text on the top side
        y={y - 35} // Place it above the rectangle
        textAnchor="middle"
        fontSize="16"
        fill="black"
      >
        {width}px
      </text>
      {/* Dynamic height on the left side */}
      <text
        x={x - 35} // Place it left of the rectangle
        y={y + height / 2} // Center the text vertically on the left side
        textAnchor="middle"
        fontSize="16"
        fill="black"
        transform={`rotate(-90, ${x - 35}, ${y + height / 2})`} // Rotate text to display vertically
      >
        {height}px
      </text>
      <line
        x1={x}
        y1={y - 25} // A bit above the rectangle to be visible under the width text
        x2={x + width}
        y2={y - 25}
        stroke="black"
        strokeWidth="2"
        markerEnd="url(#arrowhead)" // Add arrowhead
      />
      {/* North-South Arrow (vertical line) */}
      <line
        x1={x - 25} // A bit to the left of the rectangle to be visible under the height text
        y1={y}
        x2={x - 25}
        y2={y + height}
        stroke="black"
        strokeWidth="2"
        markerEnd="url(#arrowhead)" // Add arrowhead
      />
      {/* Define arrowhead marker */}
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="5"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="black" />
        </marker>
      </defs>
    </React.Fragment>
  );
};

export default Perimeter;
