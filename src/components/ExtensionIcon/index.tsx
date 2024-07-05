import { Abc, Image, Microsoft, PictureAsPdf, Slideshow } from '@mui/icons-material';

import { ExtensionIconProps } from './models';

export const ExtensionIcon = ({ type, ...iconProps }: ExtensionIconProps) => {
  switch (type) {
    case 'png':
    case 'jpg':
      // eslint-disable-next-line jsx-a11y/alt-text
      return <Image {...iconProps} />;
    case 'mkv':
    case 'mp4':
      return <Slideshow {...iconProps} />;
    case 'txt':
      return <Abc />;
    case 'word':
      return <Microsoft />;
    case 'pdf':
      return <PictureAsPdf />;
    default:
      return <></>;
  }
};
