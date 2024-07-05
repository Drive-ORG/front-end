import { TextField } from '@mui/material';
import { useParams } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

import { createFolderApi } from '@/api/methods';
import { CreateFolderApiData } from '@/api/methods/models';

import { Modal } from '../Modal';
import { FolderNameModalProps } from './models';

export const FolderNameModal = ({ isOpen, onClose, onSubmit }: FolderNameModalProps) => {
  const [folderName, setFolderName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  const handleChangeFolderName = (event: ChangeEvent<HTMLInputElement>) => {
    setFolderName(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();

    const bodyParam: CreateFolderApiData = {
      name: folderName,
      parent_folder: Number(params.folderId)
    };

    createFolderApi({ data: bodyParam })
      .then(() => {
        toast.success('folder created');
        onSubmit?.();
        onClose();
      })
      .catch(() => undefined)
      .finally(() => setIsLoading(false));
  };

  return (
    <Modal
      title='folder name'
      open={isOpen}
      maxWidth='md'
      fullWidth
      onClose={onClose}
      onSubmit={handleSubmit}
      submitButtonText='Create'
      isLoading={isLoading}
    >
      <TextField
        fullWidth
        label='enter your folder name'
        value={folderName}
        onChange={handleChangeFolderName}
      />
    </Modal>
  );
};
