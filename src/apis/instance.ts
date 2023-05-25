import axios, { AxiosRequestConfig } from 'axios';

const getAxiosInstance = () => {
  const config: AxiosRequestConfig = {
    // baseURL: '',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    withCredentials: true,
  };

  const instance = axios.create(config);

  return instance;
};

export const instance = getAxiosInstance();
