import classes from "./ResizeCircle.module.css";

const ResizeCircle = ({ cx, cy, type }) => {
  const handleClick = () => {
    console.log("Circle clicked");
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
      r="5"
      onClick={handleClick}
    />
  );
};

export default ResizeCircle;
