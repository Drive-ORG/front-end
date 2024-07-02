'use client';

import { Delete, FolderTwoTone } from '@mui/icons-material';
import { Button, IconButton, Typography } from '@mui/material';

export const Folder = () => {
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
          Folder Name
        </Typography>
      </Button>
    </>
  );
};
