import { SvgIconProps } from '@mui/material';

import { FileExtension } from '@/api/methods/models';

export interface ExtensionIconProps extends SvgIconProps {
  type: FileExtension;
}
