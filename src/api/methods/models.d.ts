export interface LoginApiData {
  username: string;
  password: string;
}

export interface LoginApiResponse {
  token: string;
  user: User;
}

export interface User {
  id: number;
  username: string;
  email: string;
  total_storage_gb: number;
  used_storage_gb: number;
}

export interface RegisterApiData {
  username: string;
  email: string;
  password: string;
  password2: string;
}

export interface CreateFolderApiData {
  name: string;
  parent_folder?: number;
}

export interface CreateFolderApiResponse {
  id: number;
  name: string;
  owner: number;
  parent_folder: number;
  subFolders: string[];
  files: string[];
}

export type GetFoldersApiResponse = CreateFolderApiResponse;
