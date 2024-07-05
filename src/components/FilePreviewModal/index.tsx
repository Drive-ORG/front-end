/* eslint-disable @next/next/no-img-element */
import { Download } from '@mui/icons-material';
import Link from 'next/link';
import { FormEvent } from 'react';

import { Modal } from '../Modal';
import { FilePreviewModalProps } from './models';

export const FilePreviewModal = ({ isOpen, onClose, fileInfo }: FilePreviewModalProps) => {
  const handleDownloadFile = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const downloadFileLink = document.getElementById('download-file');
    downloadFileLink?.click();
  };

  return (
    <Modal
      title='file'
      submitButtonText='Download'
      submitButtonProps={{
        startIcon: <Download />,
        type: 'submit'
      }}
      onSubmit={handleDownloadFile}
      onClose={onClose}
      open={isOpen}
    >
      <Link href={fileInfo.file} target='_blank' download id='download-file' />
      {['jpg', 'png'].includes(fileInfo.type) ? (
        <img src={fileInfo.file} alt={fileInfo.name} />
      ) : fileInfo.type ? (
        <embed src={fileInfo.file} title={fileInfo.name} />
      ) : (
        <></>
      )}
    </Modal>
  );
};
