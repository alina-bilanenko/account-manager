import React from 'react';
import { withStyles, Button } from '@material-ui/core';

const styles = theme =>({
  button: {
    backgroundColor: '#5E97F3',
    textTransform: 'none',
    display: 'block',
    marginTop: '140px',
    marginLeft: 'auto',
    marginRight: theme.spacing.unit*12,
    width: '100px',
    height: '40px',
  }
});

const BootstrapButton = (props) => {
  const {classes, buttonName } = props;

  return (
          <Button variant="contained" color="primary" className={classes.button}>
            {buttonName}
          </Button>
  )
};

export default withStyles(styles)(BootstrapButton);