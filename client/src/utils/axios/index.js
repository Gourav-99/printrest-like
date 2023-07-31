import axios from "axios";
import store from "../../redux/store";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://13.232.64.82:8080/",
  timeout: 5000,
  headers: {},
});

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error);
    if (error.response.status === 401) {
      store.dispatch({
        type: "LOGOUT",
      });
    }
    return Promise.reject(error);
  }
);

export default instance;
