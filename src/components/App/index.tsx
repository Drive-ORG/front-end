'use client';

import { useEffect } from 'react';

import { getUserInfoApi } from '@/api/methods';
import { useAppDispatch } from '@/store';
import { setLoading, setUserData } from '@/store/slices/userDataSlice';

import { Header } from '../Header';
import classes from './index.module.scss';
import { AppProps } from './models';

export const App = ({ children }: AppProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getUserInfoApi()
      .then((response) => {
        dispatch(setUserData(response.data));
      })
      .catch(() => undefined)
      .finally(() => {
        dispatch(setLoading(false));
      });
  }, []);

  return (
    <>
      <Header />
      <div className={classes.container}>{children}</div>
    </>
  );
};
