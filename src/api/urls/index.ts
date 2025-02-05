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
  },
  deleteFile: {
    method: 'DELETE',
    url: 'files/{{fileId}}'
  },
  getUserInfo: {
    method: 'GET',
    url: 'current-user'
  }
} as const;
