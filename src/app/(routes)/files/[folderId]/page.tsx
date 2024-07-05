'use client';

import { CreateNewFolder, FileUpload } from '@mui/icons-material';
import { Button, Divider, Grid, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';

import { getFoldersApi } from '@/api/methods';
import { File } from '@/components/File';
import { Folder } from '@/components/Folder';
import { FolderNameModal } from '@/components/FolderNameModal';
import FullPageLoading from '@/components/FullPageLoading';

import classes from './index.module.scss';

const Files = () => {
  const params = useParams();
  const [isOpenFolderNameModal, setIsOpenFolderNameModal] = useState(false);
  const [folders, setFolders] = useState<string[]>([]);
  const [files, setFiles] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFoldersApi({ folderId: Number(params.folderId) })
      .then((response) => {
        setFolders(response.data.subFolders);
        setFiles(response.data.files);
      })
      .catch(() => undefined)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleCloseFolderNameModal = () => {
    setIsOpenFolderNameModal(false);
  };

  const handleOpenFolderNameModal = () => {
    setIsOpenFolderNameModal(true);
  };

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

  if (isLoading) {
    return <FullPageLoading />;
  }

  return (
    <>
      <Grid container spacing={4} justifyContent='flex-end'>
        <Grid item>
          <Button
            startIcon={<CreateNewFolder />}
            onClick={handleOpenFolderNameModal}
            variant='outlined'
          >
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
      <Grid container spacing={4} className={classes.folders_container}>
        {folders.map((folder) => (
          <Grid key={folder} item xl={2}>
            <Folder name='' id={0} />
          </Grid>
        ))}
      </Grid>
      <Divider className={classes.divider} />
      <Typography variant='h5'>Files</Typography>
      <Grid container spacing={4} className={classes.folders_container}>
        {files.map((file) => (
          <Grid key={file} item xl={2}>
            <File name='' id={0} />
          </Grid>
        ))}
      </Grid>
      <FolderNameModal isOpen={isOpenFolderNameModal} onClose={handleCloseFolderNameModal} />
    </>
  );
};

export default Files;
