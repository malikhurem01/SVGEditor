import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  getInitialSettings,
  modifyRectangleSettings,
} from "../../services/rectangleService";

import SVG from "./SVG";
import Footer from "./Footer";
import LoadingScreen from "./LoadingScreen";
import ErrorModal from "./ErrorModal";

const Rectangle = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [resizeState, setResizeState] = useState(-1);
  const [resizeHandle, setResizeHandle] = useState(null);
  const [params, setParams] = useState({ x: 600, y: 220 });

  //Ref for cancellation token in case user resizes the rectangle again while it is validating on back-end
  const cancelTokenSource = useRef();

  //Load initial configuration settings for rectangle SVG from JSON file form BACK-END
  useEffect(() => {
    setIsLoading(true);
    getInitialSettings()
      .then(({ data }) => {
        setParams((prevState) => {
          prevState.width = data.data.width;
          prevState.height = data.data.height;
          return prevState;
        });
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setResizeState({
          error: true,
          message: "Server error. Please, try again later.",
        });
        console.log(err);
      });
  }, []);

  //Extract dimensions from response state
  const { x, y, width, height } = params;

  //When user presses on rectangle corner handles
  const handleMouseDown = (e, corner) => {
    e.preventDefault();

    //If user resizes while the server is validating the previous resize, then the previous resize validation in cancelled
    if (isValidating) {
      cancelTokenSource.current.cancel();
    }
    setIsValidating(false);
    setIsLoading(false);
    setResizeState(1);
    setResizeHandle(corner);
  };

  //When user stops resizing
  const handleMouseUp = () => {
    //Add a little timeout just for the sake of user experience
    setTimeout(validateRectangle, 500);
    setResizeHandle(null);
  };

  //Send request to back-end to validate resize and save settings to JSON file
  const validateRectangle = () => {
    setIsValidating(true);
    const requestBody = {
      width,
      height,
    };

    //Cancel token settings
    cancelTokenSource.current = axios.CancelToken.source();
    const cancelToken = cancelTokenSource.current.token;
    modifyRectangleSettings(requestBody, cancelToken)
      .then(() => {
        setIsValidating(false);
        setResizeState(2);
        setTimeout(() => {
          setResizeState(-1);
        }, 3000);
      })
      .catch((err) => {
        //Do not throw exception on FRONT-END if the error is from cancellation
        if (err.code === "ERR_CANCELED") {
          return;
        }
        setIsValidating(false);
        setResizeState({ error: true, message: err.response.data.message });
      });
  };

  //Rectangle resize handler
  const handleMouseMove = (e) => {
    if (resizeHandle) {
      setResizeState(1);
      const newParams = { width, height, x, y };
      if (resizeHandle === "south-east") {
        const newWidth = e.clientX - x;
        const newHeight = e.clientY - y;
        // Enforce minimum width and height
        if (newWidth >= 20) {
          newParams.width = newWidth;
        }
        if (newHeight >= 50) {
          newParams.height = newHeight;
        }
      } else if (resizeHandle === "south-west") {
        const newWidth = width - (e.clientX - x);
        const newHeight = e.clientY - y;
        // Enforce minimum width and height
        if (newWidth >= 20) {
          newParams.width = newWidth;
          newParams.x = e.clientX;
        }
        if (newHeight >= 50) {
          newParams.height = newHeight;
        }
      } else if (resizeHandle === "north-east") {
        const newHeight = height - (e.clientY - y);
        const newWidth = e.clientX - x;
        // Enforce minimum width and height
        if (newWidth >= 20) {
          newParams.width = newWidth;
        }
        if (newHeight >= 50) {
          newParams.height = newHeight;
          newParams.y = e.clientY;
        }
      } else if (resizeHandle === "north-west") {
        const newHeight = height - (e.clientY - y);
        const newWidth = width - (e.clientX - x);
        // Enforce minimum width and height
        if (newWidth >= 20) {
          newParams.width = newWidth;
          newParams.x = e.clientX;
        }
        if (newHeight >= 50) {
          newParams.height = newHeight;
          newParams.y = e.clientY;
        }
      }
      setParams(newParams);
    }
  };

  //Set UI state back to normal. Nothing happens. No message is displayed.
  const handleResizeState = (state) => {
    setResizeState(-1);
  };

  return (
    <React.Fragment>
      {isLoading && <LoadingScreen />}

      {/* When everything is loaded then display the rectangle */}
      {!isLoading && params.width && (
        <SVG
          handleMouseMove={handleMouseMove}
          handleMouseUp={handleMouseUp}
          handleMouseDown={handleMouseDown}
          x={x}
          y={y}
          width={width}
          height={height}
        />
      )}

      {resizeState.error && (
        <ErrorModal
          handleResizeState={handleResizeState}
          error={resizeState.message}
        />
      )}

      {/** Contains space for message display */}
      <Footer isValidating={isValidating} resizeState={resizeState} />
    </React.Fragment>
  );
};

export default Rectangle;
