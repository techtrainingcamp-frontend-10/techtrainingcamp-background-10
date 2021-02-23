import axios from 'axios';
import { BASE_URL, TIMEOUT } from "./config";
import { getToken, getID } from "@/store/auth";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
});

// require('../mock/api')

instance.interceptors.request.use(config => {
  const userId = getID()
  const token = getToken()

  if (userId && token) {
    if (!config.data) config.data = {}
    config.data.userId = userId
    config.data.token = token
  }
  return config;
}, err => {

});

instance.interceptors.response.use(res => {
  return res.data;
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log("请求错误");
        break;
      case 401:
        console.log("未授权访问");
        break;
      default:
        console.log("其他错误信息");
    }
  }
  return err;
});

export default instance;

