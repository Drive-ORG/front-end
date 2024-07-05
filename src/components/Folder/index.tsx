'use client';

import { Delete, FolderTwoTone } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { IconButton, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { deleteFolderApi } from '@/api/methods';
import { websiteUrls } from '@/constants/urls';

import { FolderProps } from './models';

export const Folder = ({ folderInfo }: FolderProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteFolder = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsLoading(true);
    event.stopPropagation();
    deleteFolderApi({ folderId: folderInfo.id })
      .then(() => {
        location.reload();
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const handleOpenFolder = () => {
    router.push(`${websiteUrls.files}/${folderInfo.id}`);
  };

  return (
    <LoadingButton
      loading={isLoading}
      variant='contained'
      color='secondary'
      startIcon={<FolderTwoTone color='primary' />}
      onDoubleClick={handleOpenFolder}
      endIcon={
        <IconButton color='primary' onClick={handleDeleteFolder}>
          <Delete />
        </IconButton>
      }
      size='medium'
    >
      <Typography variant='button' color='black'>
        {folderInfo.name}
      </Typography>
    </LoadingButton>
  );
};
