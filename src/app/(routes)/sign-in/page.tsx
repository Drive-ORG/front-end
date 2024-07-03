'use client';

import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';

import { loginApi } from '@/api/methods';
import { LoginApiData } from '@/api/methods/models';
import { websiteUrls } from '@/constants/urls';

import classes from './index.module.scss';

const SignIn = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState<LoginApiData>({
    password: '',
    username: ''
  });

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginApi({ data: loginData }).then((response) => {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userData', JSON.stringify(response.data.user));
      router.push(websiteUrls.filesRoot);
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <form onSubmit={handleLogin}>
          <Grid container justifyContent='center' spacing={4}>
            <Grid item xs={12}>
              <TextField label='username' fullWidth name='username' onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='password'
                fullWidth
                name='password'
                type='password'
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant='contained' type='submit'>
                <Typography color='white' variant='button'>
                  Sign in
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignIn;
