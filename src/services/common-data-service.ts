import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  function (config: any) {
    //config.headers = { ...config.headers, Authorization: `Bearer ${localStorage.getItem('token')}` };
    config.headers = {...config.headers, Authorization: `Bearer 123`};
    // you can also do other modification in config
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export const REACT_APP_API_URL = 'http://172.16.16.92:7580/api/mobile/';

export default class CommonDataService {
  executeApiCall(path, data) {
    return axiosInstance
      .post(`${REACT_APP_API_URL}${path}`, data)
      .then((res) => res);
  }

  fetchData(path) {
    return axiosInstance.get(`${REACT_APP_API_URL}${path}`).then((res) => res);
  }
}
