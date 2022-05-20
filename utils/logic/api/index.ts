import axios, { AxiosRequestConfig } from "axios";
import Cookies from "universal-cookie";
import config from "../../../config/config.config";

axios.interceptors.request.use(
  (conf: AxiosRequestConfig) => {
    const cookies = new Cookies("token");
    const token = cookies.get("token");
    if (token && conf?.url?.includes(config.api.baseUrl as string)) {
      if (conf.headers === undefined)
        conf.headers = { Authorization: "Bearer " + token };
    }
    return conf;
  },
  (error) => {
    Promise.reject(error);
  }
);

const post = (endpoint: string, body: any) => {
  return axios.post(`${config.api.baseUrl}/${endpoint}`, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const get = (endpoint: string, params: any) => {
  return axios.get(`${config.api.baseUrl}/${endpoint}`, { params });
};

const remove = (endpoint: string) => {
  return axios.delete(`${config.api.baseUrl}/${endpoint}`);
};

const put = (endpoint: string, body: any) => {
  return axios.put(`${config.api.baseUrl}/${endpoint}`, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export { post, get, put, remove };
