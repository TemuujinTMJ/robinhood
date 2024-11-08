import { message } from "antd";
import axios from "axios";
import Cookies from "js-cookie";

export const token = Cookies.get("token") || null;
const axiosConfig = {
  baseURL: "https://robinhood.mn/back/api/v1",
  timeout: 30000,
};
export const api = axios.create(axiosConfig);

api.interceptors.response.use(
  function (response: any) {
    const data = response || {};
    if (data?.data?.success && data?.data?.message) {
      message.success(data?.data?.message);
    }
    if (!data?.data?.success && data?.data?.message) {
      message.warning(data?.data?.message);
    }
    return data;
  },
  function (error) {
    if (error?.response?.status === 400) {
      window.location.assign("/");
    }
    message.error(error);

    return Promise.reject(error);
  }
);

api.interceptors.request.use(
  async (conf) => {
    const tokenGet = Cookies.get("token") || null;
    conf.headers["Authorization"] = `Bearer ${tokenGet}`; 
    conf.headers.setContentType("application/json");
    return conf;
  },
  (error) => {
    Promise.reject(error);
  }
);
