import classes from "./ResizeCircle.module.css";

const ResizeCircle = ({ cx, cy, onClick, type }) => (
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
    r="5"
    onClick={onClick}
  />
);

export default ResizeCircle;
