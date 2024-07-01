import { Grid, Hidden } from '@mui/material';

import { Navbar } from './_components/Navbar';

export const Header = () => {
  return (
    <Grid container justifyContent='space-between' alignItems='center' role='main'>
      <Grid item xl={4} lg={4} md={2} sm={6}>
        {/* <Logo /> */}
      </Grid>
      <Grid item xl={5} lg={5} md={5} sm={2}>
        <Navbar />
      </Grid>
      <Hidden mdDown>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item>{/* ثبت نام */}</Grid>
          </Grid>
        </Grid>
      </Hidden>
    </Grid>
  );
};
