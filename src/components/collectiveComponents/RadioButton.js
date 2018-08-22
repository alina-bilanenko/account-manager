import React, { Fragment } from "react";
import { withStyles, FormLabel, RadioGroup, FormControlLabel } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import classNames from 'classnames';

const styles = theme =>({
  bootstrapFormLabel: {
    fontSize: 14,
    lineHeight: '16px',
    fontWeight: 400,
    color: '#657C9A',
  },
  group: {
    flexDirection: 'row'
  },
  radio: {
    color: '#C1CFE0',
    '&$checked': {
      color: '#4E86E4'
    }
  },
  checked: {
    '&, & + $label': {
      color: '#000000',
      fontWeight: '500'
    },
  },
  label: {},
});

const RadioButton = (props) => {
  const {classes, value = 'female',} = props;

  const handleChange = () => {

  };
  return (
    <Fragment>
      <FormLabel component="legend" className={classes.bootstrapFormLabel}>Gender</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender2"
        className={ classNames(classes.group, classes.bootstrapFormLabel) }
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="male"
          classes={{
            label: classes.label,
          }}
          control={<Radio classes={{root: classes.radio, checked: classes.checked}} />}
          label="Male"
          labelPlacement="end"
          className={classes.bootstrapFormLabel}
        />
        <FormControlLabel
          value="female"
          classes={{
            label: classes.label,
          }}
          control={<Radio classes={{root: classes.radio, checked: classes.checked}} />}
          label="Female"
          labelPlacement="end"
          className={classes.bootstrapFormLabel}
        />
      </RadioGroup>
    </Fragment>
  )};

export default withStyles(styles)(RadioButton);