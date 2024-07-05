import { FolderType } from '@/api/methods/models';

export interface FolderProps {
  folderInfo: FolderType;
  onRemove?: () => void;
}
