import React from 'react';
import { withStyles, Button} from '@material-ui/core';
import classNames from "classnames";
import { Link } from 'react-router-dom'

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
  const {classes, leftName, rightName, hidden, url=undefined} = props;

  return (
    <div className={classes.buttonGroup}>
      <Link to={`/create-user/${url}`}>
        <Button variant="contained" color="primary" className={ classNames(classes.button, {[classes.hidden]: hidden} ) }>
          {leftName}
        </Button>
      </Link>
        <Button type="submit" variant="contained" color="primary" className={classes.button}>
          {rightName}
        </Button>
    </div>
  )};

export default withStyles(styles)(ButtonGroup);


