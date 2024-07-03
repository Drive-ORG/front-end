import axios, { AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';

const axiosInstance = axios.create();

export const api = async (options?: AxiosRequestConfig, authenticate = true) => {
  const headers = { ...options?.headers } || {};
  if (authenticate) {
    const token = localStorage.getItem('token');
    headers.Authorization = `Token ${token}`;
  }

  try {
    const response = await axiosInstance({
      ...options,
      headers,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${options?.url}/`
    });
    return response;
  } catch (error: any) {
    toast.error('مشکلی پیش آمده');
    return Promise.reject(error);
  }
};
