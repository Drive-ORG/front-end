import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create();

export const api = async (options?: AxiosRequestConfig, authenticate = true) => {
  const token = localStorage.getItem('');
  const headers = { ...options?.headers } || {};
  if (authenticate) {
    headers.Authorization = `Token ${token}`;
  }
  try {
    const response = await axiosInstance({
      ...options,
      headers,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${options?.url}`
    });
    return response;
  } catch (error) {}
};
