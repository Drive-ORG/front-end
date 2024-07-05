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
  folder_id: number;
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
  subfolders: FolderType[];
  files: FileType[];
}

export type GetFoldersApiResponse = CreateFolderApiResponse;

export interface FolderType {
  id: number;
  name: string;
}

export type FileExtension = 'png' | 'jpg' | 'mp4' | 'mkv' | 'txt' | 'word' | 'pdf';

export interface FileType {
  id: number;
  name: string;
  type: FileExtension;
  file: string;
  size: number;
}

export interface UploadFileApiData {
  file: File;
}
