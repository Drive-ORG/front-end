import { urls } from '../../constants/urls';
import { api } from '..';
import { LoginApiData, RegisterApiData } from './models';

export const loginApi = ({ data }: { data: LoginApiData }) => {
  const { method, url } = urls.login;
  api({ data, method, url });
};

export const registerApi = ({ data }: { data: RegisterApiData }) => {
  const { method, url } = urls.register;
  api({ data, method, url });
};
