import axios, { AxiosRequestConfig } from 'axios';

const getAxiosInstance = () => {
  const config: AxiosRequestConfig = {
    // baseURL: 'https://api.damda.store/',
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
