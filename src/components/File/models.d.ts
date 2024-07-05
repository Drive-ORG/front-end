import { FileType } from '@/api/methods/models';

export interface FileProps {
  fileInfo: FileType;
  onRemove?: () => void;
}
