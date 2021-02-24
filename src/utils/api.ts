import axios from "axios";
import { API_URL } from "./constants";
import i18n from "./i18n";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: `${API_URL}`,
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.request && !error.response) {
      // The request was made but no response was received
      toast.error(i18n.t("errors.noResponse"));
    } else if (!error.request && !error.response) {
      // Something happened in setting up the request that triggered an Error
      toast.error(i18n.t("errors.requestSetup"));
    }
    return Promise.reject(error);
  }
);

export default api;
