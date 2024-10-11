import axios from "axios";
import { API_URL, routes } from "../configuration/Rectangle_API";

export const getInitialSettings = () => {
  return axios.get(`${API_URL}${routes.initialDimensions}`);
};

export const modifyRectangleSettings = (requestBody, cancelToken) => {
  return axios.put(`${API_URL}${routes.modifySettings}`, requestBody, {
    cancelToken: cancelToken,
  });
};
