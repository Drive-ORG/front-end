import { Delete } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { IconButton, Typography } from '@mui/material';
import { useState } from 'react';

import { ExtensionIcon } from '@/components/ExtensionIcon';

import { FilePreviewModal } from '../FilePreviewModal';
import { FileProps } from './models';

export const File = ({ fileInfo, onRemove }: FileProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenFilePreviewModal, setIsOpenFilePreviewModal] = useState(false);

  const handleOpenFilePreviewModal = () => {
    setIsOpenFilePreviewModal(true);
  };

  const handleCloseFilePreviewModal = () => {
    setIsOpenFilePreviewModal(false);
  };

  const handleDeleteFile = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsLoading(true);
    event.stopPropagation();
    // deleteFolderApi({ folderId: folderInfo.id })
    //   .then(() => {
    //     toast.success('file removed');
    //     onRemove?.();
    //   })
    //   .catch(() => {
    //     setIsLoading(false);
    //   });
  };

  const handleOpenFile = () => {
    if (['png', 'jpg', 'pdf'].includes(fileInfo.type)) {
      handleOpenFilePreviewModal();
    }
  };

  return (
    <>
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
      <FilePreviewModal isOpen={isOpenFilePreviewModal} onClose={handleCloseFilePreviewModal} />
    </>
  );
};
