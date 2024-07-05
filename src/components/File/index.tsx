import { Delete } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { deleteFileApi } from '@/api/methods';
import { ExtensionIcon } from '@/components/ExtensionIcon';
import { useUserData } from '@/hooks/useUserData';

import { FilePreviewModal } from '../FilePreviewModal';
import { FileProps } from './models';

export const File = ({ fileInfo }: FileProps) => {
  const { getUserData } = useUserData();

  const [isLoading, setIsLoading] = useState(false);
  const [isOpenFilePreviewModal, setIsOpenFilePreviewModal] = useState(false);

  const downloadFileId = `download-file-${fileInfo.id}`;

  const handleOpenFilePreviewModal = () => {
    setIsOpenFilePreviewModal(true);
  };

  const handleCloseFilePreviewModal = () => {
    setIsOpenFilePreviewModal(false);
  };

  const handleDownloadFile = () => {
    const downloadFileLink = document.getElementById(downloadFileId);
    downloadFileLink?.click();
  };

  const handleDeleteFile = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsLoading(true);
    event.stopPropagation();
    deleteFileApi({ fileId: fileInfo.id })
      .then(() => {
        toast.success('file deleted');
        getUserData();
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const handleOpenFile = () => {
    if (['png', 'jpg', 'pdf'].includes(fileInfo.type)) {
      handleOpenFilePreviewModal();
    } else {
      handleDownloadFile();
    }
  };

  return (
    <>
      <Link href={fileInfo.file} target='_blank' download id={downloadFileId} />
      <LoadingButton
        loading={isLoading}
        variant='contained'
        color='secondary'
        startIcon={<ExtensionIcon type={fileInfo.type} color='primary' />}
        onDoubleClick={handleOpenFile}
        endIcon={
          <IconButton color='primary' onClick={handleDeleteFile}>
            <Delete />
          </IconButton>
        }
        size='medium'
      >
        <Typography variant='button' color='black'>
          {fileInfo.name}
        </Typography>
      </LoadingButton>
      <FilePreviewModal
        isOpen={isOpenFilePreviewModal}
        onClose={handleCloseFilePreviewModal}
        fileInfo={fileInfo}
      />
    </>
  );
};
