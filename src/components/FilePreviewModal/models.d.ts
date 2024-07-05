import { FileType } from '@/api/methods/models';

export interface FilePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileInfo: FileType;
}
