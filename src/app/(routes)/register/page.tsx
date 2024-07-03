'use client';

import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

import { registerApi } from '@/api/methods';
import { RegisterApiData } from '@/api/methods/models';

import classes from './index.module.scss';

const Register = () => {
  const [registerData, setRegisterData] = useState<RegisterApiData>({
    email: '',
    password: '',
    password2: '',
    username: ''
  });

  const handleRegister = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    registerApi({ data: registerData })
      .then(() => {
        toast.success('ثبت نام شما با موفقیت انجام شد');
      })
      .catch(() => undefined);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <form onSubmit={handleRegister}>
          <Grid container justifyContent='center' spacing={4}>
            <Grid item xs={12}>
              <TextField
                label='email'
                fullWidth
                onChange={handleChange}
                type='email'
                name='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField label='username' fullWidth onChange={handleChange} name='username' />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='password'
                fullWidth
                onChange={handleChange}
                type='password'
                name='password'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='repeat password'
                fullWidth
                onChange={handleChange}
                type='password'
                name='password'
              />
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth variant='contained' type='submit'>
                <Typography color='white' variant='button'>
                  Register
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default Register;
