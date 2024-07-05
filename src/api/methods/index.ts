import { AxiosResponse } from 'axios';

import { formatStringByKey } from '@/utils/formatStringByKey';

import { api } from '..';
import { apiUrls } from '../urls';
import {
  CreateFolderApiData,
  CreateFolderApiResponse,
  GetFoldersApiResponse,
  LoginApiData,
  LoginApiResponse,
  RegisterApiData
} from './models';

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

export const createFolderApi = ({
  data
}: {
  data: CreateFolderApiData;
}): Promise<AxiosResponse<CreateFolderApiResponse>> => {
  const { method, url } = apiUrls.createFolder;
  return api({ data, method, url });
};

export const getFoldersApi = ({
  folderId
}: {
  folderId: number;
}): Promise<AxiosResponse<GetFoldersApiResponse>> => {
  const { method, url } = apiUrls.getFolders;
  return api({ method, url: formatStringByKey(url, { folderId }) });
};
