'use client';

import { Delete, FolderTwoTone } from '@mui/icons-material';
import { Button, IconButton, Typography } from '@mui/material';

import { FolderProps } from './models';

export const Folder = ({ name, id }: FolderProps) => {
  const handleDeleteFolder = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  const handleOpenFile = () => {};

  return (
    <>
      <Button
        variant='contained'
        color='secondary'
        startIcon={<FolderTwoTone color='primary' />}
        onDoubleClick={handleOpenFile}
        endIcon={
          <IconButton color='primary' onClick={handleDeleteFolder}>
            <Delete />
          </IconButton>
        }
        size='medium'
      >
        <Typography variant='button' color='black'>
          {name}
        </Typography>
      </Button>
    </>
  );
};
