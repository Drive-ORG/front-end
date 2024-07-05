export const apiUrls = {
  login: {
    method: 'POST',
    url: 'login'
  },
  register: {
    method: 'POST',
    url: 'register'
  },
  createFolder: {
    method: 'POST',
    url: 'folders'
  },
  getFolders: {
    method: 'GET',
    url: 'folders/{{folderId}}'
  },
  deleteFolder: {
    method: 'DELETE',
    url: 'folders/{{folderId}}'
  },
  uploadFile: {
    method: 'POST',
    url: 'folders/{{folderId}}/files'
  }
} as const;
