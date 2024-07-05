import { Button, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { websiteUrls } from '@/constants/urls';

export const Header = () => {
  const pathname = usePathname();

  if (['/sign-in', '/register'].includes(pathname)) {
    return null;
  }
  return (
    <Grid container justifyContent='space-between' alignItems='center' role='main'>
      <Grid item xl={4} lg={4} md={2} sm={6}>
        {/* <Logo /> */}
      </Grid>
      <Grid item xl={5} lg={5} md={5} sm={2}></Grid>
      <Grid item sx={{ display: { md: 'block', xs: 'none' } }}>
        <Grid container spacing={2}>
          <Grid item>
            <Button variant='outlined'>
              <Link href={websiteUrls.register}>
                <Typography color='white' variant='button'>
                  Register
                </Typography>
              </Link>
            </Button>
          </Grid>
          <Grid item>
            <Button variant='contained'>
              <Link href={websiteUrls.login}>
                <Typography color='white' variant='button'>
                  Sign in
                </Typography>
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
