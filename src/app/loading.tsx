import { CircularProgress } from '@mui/material';

import classes from './loading.module.scss';

const Loading = () => {
  return (
    <div className={classes.loading_container}>
      <CircularProgress size={72} />
    </div>
  );
};

export default Loading;
