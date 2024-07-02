'use client';

import { Button, Card, CardContent, Grid, Typography } from '@mui/material';

import classes from './index.module.scss';

const HomePage = () => {
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
            <Button variant='outlined' color='primary'>
              <Typography variant='button'>login</Typography>
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default HomePage;
