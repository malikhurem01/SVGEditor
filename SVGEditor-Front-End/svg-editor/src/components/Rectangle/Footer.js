import React from "react";
import { ReactComponent as LoadingVector } from "../../assets/vectors/loadingVector.svg";

const Footer = ({ isValidating, resizeState }) => {
  return (
    <footer>
      {isValidating && (
        <React.Fragment>
          <h5>Validating</h5>&nbsp;
          <LoadingVector />
        </React.Fragment>
      )}
      {!isValidating && resizeState === 2 && <h5>Save successful</h5>}
      {!isValidating && resizeState === 1 && <h5>Resizing</h5>}
    </footer>
  );
};

export default Footer;
