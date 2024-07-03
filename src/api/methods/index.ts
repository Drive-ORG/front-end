import { api } from '..';
import { apiUrls } from '../urls';
import { LoginApiData, RegisterApiData } from './models';

export const loginApi = ({ data }: { data: LoginApiData }) => {
  const { method, url } = apiUrls.login;
  return api({ data, method, url }, false);
};

export const registerApi = ({ data }: { data: RegisterApiData }) => {
  const { method, url } = apiUrls.register;
  return api({ data, method, url }, false);
};
