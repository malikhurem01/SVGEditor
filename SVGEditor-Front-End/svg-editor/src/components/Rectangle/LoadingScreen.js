import { ReactComponent as LoadingVector } from "../../assets/vectors/loadingVector.svg";

const LoadingScreen = () => {
  return (
    <div
      style={{
        width: "50%",
        height: "90vh",
        position: "absolute",
        top: 0,
        left: "40%",
        textAlign: "center",
        paddingTop: "40vh",
      }}
    >
      <LoadingVector />
    </div>
  );
};

export default LoadingScreen;
