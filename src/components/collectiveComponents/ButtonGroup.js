import React from 'react';
import { withStyles, Button} from '@material-ui/core';

const styles = theme =>({
  buttonGroup: {
    display: 'flex',
    marginTop: '140px',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: '#5E97F3',
    textTransform: 'none',
    width: '100px',
    height: '40px',
  }
});

const ButtonGroup = (props) => {
  const {classes, leftName, rightName} = props;

  return (
            <div className={classes.buttonGroup}>
              <Button variant="contained" color="primary" className={classes.button}>
                {leftName}
              </Button>
              <Button variant="contained" color="primary" className={classes.button}>
                {rightName}
              </Button>
            </div>
  )};

export default withStyles(styles)(ButtonGroup);


