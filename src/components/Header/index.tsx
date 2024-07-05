import { AddToDrive } from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { websiteUrls } from '@/constants/urls';
import { useAppSelector } from '@/store';

export const Header = () => {
  const pathname = usePathname();
  const userData = useAppSelector((state) => state.userData);

  if (['/sign-in', '/register'].includes(pathname) || userData.isLoading) {
    return <></>;
  }

  return (
    <Grid container justifyContent='space-between' alignItems='center' role='main'>
      <Grid item xl={4} lg={4} md={2} sm={6}>
        <Link href={`${websiteUrls.files}/${userData.data.folder_id}`}>
          <AddToDrive color='action' />
        </Link>
      </Grid>
      <Grid item xl={5} lg={5} md={5} sm={2}></Grid>
      {userData.data.id ? (
        <Grid item>
          <Typography variant='h6'>{userData.data.username}</Typography>
        </Grid>
      ) : (
        <>
          <Grid item sx={{ display: { md: 'block', xs: 'none' } }}>
            <Grid container spacing={2}>
              <Grid item>
                <Link href={websiteUrls.register}>
                  <Button variant='outlined'>
                    <Typography color='white' variant='button'>
                      Register
                    </Typography>
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Link href={websiteUrls.login}>
                  <Button variant='contained'>
                    <Typography color='white' variant='button'>
                      Sign in
                    </Typography>
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};
