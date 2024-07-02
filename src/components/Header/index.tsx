import { Button, Grid, Hidden, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();

  if (pathname === '/sign-in') {
    return null;
  }
  return (
    <Grid container justifyContent='space-between' alignItems='center' role='main'>
      <Grid item xl={4} lg={4} md={2} sm={6}>
        {/* <Logo /> */}
      </Grid>
      <Grid item xl={5} lg={5} md={5} sm={2}></Grid>
      <Hidden mdDown>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item>
              <Button variant='contained'>
                <Link href='/sign-in'>
                  <Typography color='white' variant='button'>
                    Sign in
                  </Typography>
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </Grid>
  );
};
