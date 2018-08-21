import React, { Fragment } from "react";
import { withStyles, FormLabel, RadioGroup, FormControlLabel } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import classNames from 'classnames';

const styles = theme =>({
  bootstrapFormLabel: {
    fontSize: 14,
    lineHeight: '16px',
    fontWeight: 400,
    color: '#657C9A'
  },
  group: {
    flexDirection: 'row'
  },
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
                  value="female"
                  control={<Radio color="primary" />}
                  label="Female"
                  labelPlacement="end"
                  className={classes.bootstrapFormLabel}
                />
                <FormControlLabel
                  value="male"
                  control={<Radio color="primary" />}
                  label="Male"
                  labelPlacement="end"
                  className={classes.bootstrapFormLabel}
                />
              </RadioGroup>
            </Fragment>
  )};

export default withStyles(styles)(RadioButton);