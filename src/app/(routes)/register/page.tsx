'use client';

import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';

import { registerApi } from '@/api/methods';

import classes from './index.module.scss';

const Register = () => {
  const [registerData, setRegisterData] = useState({});

  const handleRegister = () => {
    registerApi();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container justifyContent='center' spacing={4}>
          <Grid item xs={12}>
            <TextField label='email' fullWidth onChange={handleChange} type='email' />
          </Grid>
          <Grid item xs={12}>
            <TextField label='password' fullWidth onChange={handleChange} type='password' />
          </Grid>
          <Grid item xs={12}>
            <TextField label='repeat password' fullWidth onChange={handleChange} type='password' />
          </Grid>
          <Grid item xs={2}>
            <Button fullWidth variant='contained' onClick={handleRegister}>
              <Typography color='white' variant='button'>
                Register
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Register;
