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
  const { classes, onChange, name } = props;

  const AddAvatar = (
    <Typography variant="body2" gutterBottom className={classes.addAvatar}>
      {Add}
      <span>add avatar</span>
    </Typography>
  );

  function handleFile(e) {
    e.preventDefault();

    const file = e.target.files[0];
    if (!file) {
      return
    }

   // if(file.size > 1000000) {
   //   throw new SubmissionError({
   //     photo: 'Size too big',
   //     _error: 'Size too big!'
   //   })
   // }



    let reader = new FileReader();

    reader.onloadend = () => {
      onChange(fieldNames.photo, reader.result)
    };

    reader.readAsDataURL(file);
  }

  return (
    <div>
      <input accept="image/*" name={name} onChange={handleFile} className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <Button variant="outlined" component="span"  className={classes.avatar}>
          {/*{meta.touched && <FormHelperText id="name-error-text">meta.error </FormHelperText>}*/}
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