import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import { Add } from "icons";
import Button from "@material-ui/core/Button";
import {fieldNames} from "consts";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  avatar: {
    margin: 'auto',
    display: 'block',
    textTransform: 'lowercase',
    border: 'none',
    textAlign: 'center',
    width: '50%',
    paddingLeft: '0',
    '&:hover': {
      backgroundColor: 'inherit'
    }
  },
  addAvatar: {
    color: '#9BB0CB',
  },
});

function ImageLoader (props) {
  const { classes } = props;

  const AddAvatar = (
    <Typography variant="body2" gutterBottom className={classes.addAvatar}>
      {Add}
      <span>add avatar</span>
    </Typography>
  );

  return (
    <div>
      <input accept="image/*" className={classes.input} id="icon-button-file" name={fieldNames.photo} type="file" />
      <label htmlFor="icon-button-file">
        <Button variant="outlined" component="span"  className={classes.avatar}>
          {AddAvatar}
        </Button>
      </label>
    </div>
  );
}

ImageLoader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageLoader);