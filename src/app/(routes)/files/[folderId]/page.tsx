'use client';

import { ArrowBack, CreateNewFolder, FileUpload } from '@mui/icons-material';
import { Button, Divider, Grid, IconButton, LinearProgress, Typography } from '@mui/material';
import { useParams, useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { getFoldersApi, uploadFileApi } from '@/api/methods';
import { GetFoldersApiResponse } from '@/api/methods/models';
import { File } from '@/components/File';
import { Folder } from '@/components/Folder';
import { FolderNameModal } from '@/components/FolderNameModal';
import FullPageLoading from '@/components/FullPageLoading';
import { websiteUrls } from '@/constants/urls';
import { useUserData } from '@/hooks/useUserData';
import { useAppSelector } from '@/store';

import classes from './index.module.scss';

const Files = () => {
  const userData = useAppSelector((state) => state.userData);
  const { getUserData } = useUserData();

  const params = useParams();
  const router = useRouter();
  const [isOpenFolderNameModal, setIsOpenFolderNameModal] = useState(false);
  const [folderInfo, setFolderInfo] = useState<GetFoldersApiResponse>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const numberFolderId = Number(params.folderId);
    if (userData.data.id) {
      if (numberFolderId) {
        getFoldersApi({ folderId: Number(params.folderId) })
          .then((response) => {
            setFolderInfo(response.data);
          })
          .catch(() => undefined)
          .finally(() => {
            setIsLoading(false);
          });
      } else {
        router.replace(`${websiteUrls.files}/${userData.data.folder_id}`);
      }
    } else if (!userData.isLoading) {
      toast.error('please login first');
      router.replace(websiteUrls.login);
    }
  }, [userData.data]);

  const handleCloseFolderNameModal = () => {
    setIsOpenFolderNameModal(false);
  };

  const handleOpenFolderNameModal = () => {
    setIsOpenFolderNameModal(true);
  };

  const handleBack = () => {
    router.push(`${websiteUrls.files}/${folderInfo?.parent_folder}`);
  };

  const handleAddFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsLoading(true);
      uploadFileApi({ data: { file }, folderId: Number(params.folderId) })
        .then(() => {
          toast.success('file uploaded');
          getUserData();
        })
        .catch(() => undefined);
    }
  };

  if (isLoading || !userData.data.id) {
    return <FullPageLoading />;
  }

  return (
    <>
      <Grid container spacing={4} justifyContent='space-between'>
        <Grid item xs={12}>
          <Typography>
            Used storage: {userData.data.used_storage_gb} GB / {userData.data.total_storage_gb} GB
          </Typography>
          <LinearProgress
            variant='determinate'
            value={userData.data.used_storage_gb / userData.data.total_storage_gb}
          />
        </Grid>
        <Grid item>
          <IconButton onClick={handleBack}>
            <ArrowBack />
          </IconButton>
        </Grid>
        <Grid item>
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
                <input
                  id='upload-image'
                  hidden
                  accept='.txt, .docx, .pdf, .mp4, .mkv, .png, .jpg'
                  type='file'
                  onChange={handleAddFile}
                />
              </label>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Typography variant='h5'>Folders</Typography>
      <Grid container spacing={4} className={classes.folders_container}>
        {folderInfo?.subfolders.map((folder) => (
          <Grid key={folder.id} item xl={2}>
            <Folder folderInfo={folder} />
          </Grid>
        ))}
      </Grid>
      <Divider className={classes.divider} />
      <Typography variant='h5'>Files</Typography>
      <Grid container spacing={4} className={classes.folders_container}>
        {folderInfo?.files.map((file) => (
          <Grid key={file.id} item xl={2}>
            <File fileInfo={file} />
          </Grid>
        ))}
      </Grid>
      <FolderNameModal isOpen={isOpenFolderNameModal} onClose={handleCloseFolderNameModal} />
    </>
  );
};

export default Files;
