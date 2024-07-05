import { Close } from '@mui/icons-material';
import { Button, Dialog, IconButton, TextField, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

import { createFolderApi } from '@/api/methods';
import { CreateFolderApiData } from '@/api/methods/models';

import classes from './index.module.scss';
import { FolderNameModalProps } from './models';

export const FolderNameModal = ({ isOpen, onClose, onSubmit }: FolderNameModalProps) => {
  const [folderName, setFolderName] = useState('');
  const params = useParams();

  const handleChangeFolderName = (event: ChangeEvent<HTMLInputElement>) => {
    setFolderName(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const bodyParam: CreateFolderApiData = {
      name: folderName
    };

    const folderIdToNumber = Number(params.folderId);

    if (folderIdToNumber) {
      bodyParam.parent_folder = folderIdToNumber;
    }

    createFolderApi({ data: bodyParam }).then(() => {
      toast.success('file created');
      onSubmit?.();
    });
  };

  return (
    <Dialog title='folder name' open={isOpen} maxWidth='md' fullWidth onClose={onClose}>
      <div className={classes.app_bar}>
        <Typography>folder name</Typography>
        <IconButton id='dialog-close-icon' onClick={onClose} size='small'>
          <Close />
        </IconButton>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={classes.content}>
          <TextField
            fullWidth
            label='enter your folder name'
            value={folderName}
            onChange={handleChangeFolderName}
          />
        </div>
        <div className={classes.submit_button_container}>
          <Button fullWidth variant='contained' type='submit'>
            <Typography variant='button' color='white'>
              Create
            </Typography>
          </Button>
        </div>
      </form>
    </Dialog>
  );
};
