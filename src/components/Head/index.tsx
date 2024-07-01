'use client';

import { responsiveFontSizes, ThemeProvider, useMediaQuery } from '@mui/material';
import { ReactNode } from 'react';

import { applicationTheme } from '@/theme';

import { Header } from '../Header';
import classes from './index.module.scss';

export const Layout = ({ children }: { children: ReactNode }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <ThemeProvider theme={responsiveFontSizes(applicationTheme(prefersDarkMode))}>
      <Header />
      <div className={classes.container}>{children}</div>
    </ThemeProvider>
  );
};
