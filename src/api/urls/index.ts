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
  }
} as const;
