'use client';

import { CreateNewFolder, FileUpload } from '@mui/icons-material';
import { Button, Divider, Grid, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import { ChangeEvent } from 'react';

import { Folder } from '@/components/Folder';

import classes from './index.module.scss';

const Files = () => {
  const params = useParams();

  const handleAddFolder = () => {};

  const handleAddFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      if (reader) {
        reader.onloadend = () => {
          // setImageUrl(reader.result);
        };

        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <>
      <Grid container spacing={4} justifyContent='flex-end'>
        <Grid item>
          <Button startIcon={<CreateNewFolder />} onClick={handleAddFolder} variant='outlined'>
            <Typography variant='button'>Add new folder</Typography>
          </Button>
        </Grid>
        <Grid item>
          <label htmlFor='upload-image'>
            <Button startIcon={<FileUpload />} component='span' variant='outlined'>
              <Typography variant='button'>Add new file</Typography>
            </Button>
            <input id='upload-image' hidden accept='image/*' type='file' onChange={handleAddFile} />
          </label>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Typography variant='h5'>Folders</Typography>
      <Grid container spacing={4} className={classes.foldersContainer}>
        <Grid item xl={2}>
          <Folder />
        </Grid>
      </Grid>
    </>
  );
};

export default Files;
