'use client';

import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';

import { loginApi } from '@/api/methods';

import classes from './index.module.scss';

const SignIn = () => {
  const [loginData, setLoginData] = useState({});

  const handleLogin = () => {
    loginApi();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container justifyContent='center' spacing={4}>
          <Grid item xs={12}>
            <TextField label='email' fullWidth type='email' onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField label='password' fullWidth type='password' onChange={handleChange} />
          </Grid>
          <Grid item xs={2}>
            <Button fullWidth variant='contained' onClick={handleLogin}>
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
