'use client';

import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import FullPageLoading from '@/components/FullPageLoading';
import { websiteUrls } from '@/constants/urls';
import { useAppSelector } from '@/store';

import classes from './index.module.scss';

const HomePage = () => {
  const router = useRouter();
  const userData = useAppSelector((state) => state.userData);

  useEffect(() => {
    if (userData.data.id) {
      router.replace(`${websiteUrls.files}/${userData.data.folder_id}`);
    }
  }, [userData.data]);

  if (userData.isLoading) {
    return <FullPageLoading />;
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container justifyContent='center' spacing={4}>
          <Grid item xs={12}>
            <Typography variant='h4'>Welcome to Drive</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6'>To use Drive you must log in as user or admin</Typography>
          </Grid>
          <Grid item>
            <Link href={websiteUrls.register}>
              <Button variant='outlined' color='primary'>
                <Typography variant='button'>Register</Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link href={websiteUrls.login}>
              <Button variant='contained' color='primary'>
                <Typography variant='button'>login</Typography>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default HomePage;
