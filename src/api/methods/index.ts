import { AxiosResponse } from 'axios';

import { convertObjectToFormData } from '@/utils/convertObjectToFormData';
import { formatStringByKey } from '@/utils/formatStringByKey';

import { api } from '..';
import { apiUrls } from '../urls';
import {
  CreateFolderApiData,
  CreateFolderApiResponse,
  GetFoldersApiResponse,
  GetUserInfoApiResponse,
  LoginApiData,
  LoginApiResponse,
  RegisterApiData,
  UploadFileApiData
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

export const deleteFolderApi = ({
  folderId
}: {
  folderId: number;
}): Promise<AxiosResponse<GetFoldersApiResponse>> => {
  const { method, url } = apiUrls.deleteFolder;
  return api({ method, url: formatStringByKey(url, { folderId }) });
};

export const uploadFileApi = ({
  folderId,
  data
}: {
  folderId: number;
  data: UploadFileApiData;
}): Promise<AxiosResponse<GetFoldersApiResponse>> => {
  const { method, url } = apiUrls.uploadFile;
  const formData = convertObjectToFormData(data);
  return api({ data: formData, method, url: formatStringByKey(url, { folderId }) });
};

export const deleteFileApi = ({
  fileId
}: {
  fileId: number;
}): Promise<AxiosResponse<GetFoldersApiResponse>> => {
  const { method, url } = apiUrls.deleteFile;
  return api({ method, url: formatStringByKey(url, { fileId }) });
};

export const getUserInfoApi = (): Promise<AxiosResponse<GetUserInfoApiResponse>> => {
  const { method, url } = apiUrls.getUserInfo;
  return api({ method, url });
};
