import axios from 'axios';

export function buildAxiosInstance({ baseURL }) {
  const options = {
    baseURL,
    headers: {},
  };
  const instance = axios.create(options);
  return instance;
}

const axiosInstance = buildAxiosInstance({
  baseURL: process.env.NEXT_PUBLIC_API_URL || ''
});

export default axiosInstance;