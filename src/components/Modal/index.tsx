import { Close } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Dialog as MuiDialog, IconButton, Typography } from '@mui/material';

import classes from './index.module.scss';
import { ModalProps } from './models';

export const Modal = ({
  title,
  onSubmit,
  children,
  onClose,
  submitButtonProps = {},
  submitButtonText,
  isLoading,
  ...props
}: ModalProps) => {
  return (
    <MuiDialog onClose={onClose} {...props}>
      <div className={classes.app_bar}>
        <Typography variant='h6'>{title}</Typography>
        <IconButton id='dialog-close-icon' onClick={onClose} size='small'>
          <Close />
        </IconButton>
      </div>
      <form onSubmit={(event) => onSubmit?.(event)}>
        <div className={classes.content}>{children}</div>
        {onSubmit && (
          <div className={classes.submit_button_container}>
            <LoadingButton
              fullWidth
              loading={isLoading}
              variant='contained'
              type='submit'
              {...submitButtonProps}
            >
              <Typography variant='button' color='white'>
                {submitButtonText}
              </Typography>
            </LoadingButton>
          </div>
        )}
      </form>
    </MuiDialog>
  );
};
