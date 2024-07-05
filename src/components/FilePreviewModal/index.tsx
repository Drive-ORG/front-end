import { Download } from '@mui/icons-material';
import { FormEvent } from 'react';

import { Modal } from '../Modal';
import { FilePreviewModalProps } from './models';

export const FilePreviewModal = ({ isOpen, onClose }: FilePreviewModalProps) => {
  const handleDownloadFile = (event: FormEvent<HTMLFormElement>) => {};

  return (
    <Modal
      title='file'
      submitButtonText='Download'
      submitButtonProps={{
        startIcon: <Download />
      }}
      onSubmit={handleDownloadFile}
      children={undefined}
      onClose={onClose}
      open={isOpen}
    ></Modal>
  );
};
