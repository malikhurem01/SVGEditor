import React from "react";
import classes from "./ErrorModal.module.css";

const ErrorModal = ({ handleResizeState, error }) => {
  const handleCloseModal = () => {
    handleResizeState(-1);
  };
  return (
    <React.Fragment>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>
        <h4>Error</h4>
        <h6>{error}</h6>
        <div className={classes.closeModal} onClick={handleCloseModal}>
          Close
        </div>
      </div>
    </React.Fragment>
  );
};

export default ErrorModal;
