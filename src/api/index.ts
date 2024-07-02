import axios, { AxiosRequestConfig } from 'axios';

const baseUrl = process.env.BASE_URL;
const axiosInstance = axios.create();

export const api = async (options?: AxiosRequestConfig) => {
  const token = localStorage.getItem('');
  const headers = { ...options?.headers, Authorization: `bearer ${token}` };
  try {
    const response = await axiosInstance({
      ...options,
      headers,
      url: `${baseUrl}/${options?.url}`
    });
    return response;
  } catch (error) {}
};
