import React from 'react';
import { withStyles, Button} from '@material-ui/core';
import classNames from "classnames";

const styles = theme =>({
  buttonGroup: {
    display: 'flex',
    marginTop: '20%',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: '#5E97F3',
    textTransform: 'none',
    width: '100px',
    height: '40px',
  },
  hidden: {
    visibility: 'hidden'
  }
});

const ButtonGroup = (props) => {
  const {classes, leftName, rightName, hidden, url=undefined, push} = props;

  const handleClickBack = () => {
    if(url)  push(url)
  };

  return (
    <div className={classes.buttonGroup}>
        <Button onClick={handleClickBack} variant="contained" color="primary" className={ classNames(classes.button, {[classes.hidden]: hidden} ) }>
          {leftName}
        </Button>
        <Button type="submit" variant="contained" color="primary" className={classes.button}>
          {rightName}
        </Button>
    </div>
  )};

export default withStyles(styles)(ButtonGroup);


