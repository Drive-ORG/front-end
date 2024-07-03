import { AxiosResponse } from 'axios';

import { api } from '..';
import { apiUrls } from '../urls';
import { LoginApiData, LoginApiResponse, RegisterApiData } from './models';

export const loginApi = ({
  data
}: {
  data: LoginApiData;
}): Promise<AxiosResponse<LoginApiResponse>> => {
  const { method, url } = apiUrls.login;
  return api({ data, method, url }, false);
};

export const registerApi = ({ data }: { data: RegisterApiData }) => {
  const { method, url } = apiUrls.register;
  return api({ data, method, url }, false);
};
