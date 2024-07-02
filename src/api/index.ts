import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create();

export const api = async (options?: AxiosRequestConfig) => {
  const token = localStorage.getItem('');
  const headers = { ...options?.headers, Authorization: `bearer ${token}` };
  try {
    const response = await axiosInstance({ ...options, headers });
    return response;
  } catch (error) {}
};
