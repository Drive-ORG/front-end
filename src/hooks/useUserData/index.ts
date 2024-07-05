import { getUserInfoApi } from '@/api/methods';
import { useAppDispatch } from '@/store';
import { setLoading, setUserData } from '@/store/slices/userDataSlice';

export const useUserData = () => {
  const dispatch = useAppDispatch();

  const getUserData = () => {
    getUserInfoApi()
      .then((response) => {
        dispatch(setUserData(response.data));
      })
      .catch(() => undefined)
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

  return { getUserData };
};
