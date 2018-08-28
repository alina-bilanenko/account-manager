import React from 'react'
import {Checkbox, FormControlLabel, withStyles}  from '@material-ui/core'
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const styles = {
  root: {
    color: '#C1CFE0',
    width: 30,
    height: 30,
    '&$checked': {
      color: '#4E86E4'
    },
  },
  checked: {},
  sizeIcon: {
    fontSize: 20,
    background: '#4E86E4',
    border: '3px solid #C1CFE0',
    boxSizing: 'border-box'
  },
};
const MyHobbies = ({ input, label, classes }) => (
  <FormControlLabel
    control={
      <Checkbox
        checked={
          input.value
            ? true
            : false
        }
        onChange={input.onChange}
        checkedIcon={
          <CheckBoxIcon
            className={classes.sizeIcon}
          />
        }
        classes={{
          root: classes.root,
          checked: classes.checked,
        }}
      />
    }
    label={label}
  />
);



export default withStyles(styles)(MyHobbies)