'use client';

import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';

import classes from './index.module.scss';

const SignIn = () => {
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container justifyContent='center' spacing={4}>
          <Grid item xs={12}>
            <TextField label='email' fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label='password' fullWidth />
          </Grid>
          <Grid item xs={2}>
            <Button fullWidth variant='contained'>
              <Typography color='white' variant='button'>
                Sign in
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SignIn;
