import { useEffect, useState } from 'react';

import { getUserInfoApi } from '@/api/methods';
import { User } from '@/api/methods/models';

export const useUserData = () => {
  const [userData, setUserData] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getUserInfoApi()
      .then((response) => {
        setUserData(response.data);
      })
      .catch(() => undefined)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    isLoading,
    userData
  };
};
