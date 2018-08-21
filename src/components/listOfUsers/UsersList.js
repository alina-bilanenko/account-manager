import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core';

const styles  = theme => ({
  caption: {
    width: '100%',
    maxWidth: 500,
    fontSize: '2.2rem',
    fontWeight: 'bold',
    lineHeight: '41px',
    color: '#475666',
    textAlign: 'center',
    margin: '1.5em auto 1em auto',
  },
  root: {
    width: '71%',
    margin: 'auto'
  },
});

const UsersList = (props) => {

  const {classes} = props;
  return (
    <div className={classes.root}>
      <Typography variant="display1" gutterBottom className={classes.caption}>
        User Name
      </Typography>

    </div>
  )
};

export default withStyles(styles)(UsersList);