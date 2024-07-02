import { api } from '..';
import { apiUrls } from '../urls';
import { LoginApiData, RegisterApiData } from './models';

export const loginApi = ({ data }: { data: LoginApiData }) => {
  const { method, url } = apiUrls.login;
  api({ data, method, url });
};

export const registerApi = ({ data }: { data: RegisterApiData }) => {
  const { method, url } = apiUrls.register;
  api({ data, method, url });
};
