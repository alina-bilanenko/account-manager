import React from "react";
import {
  withStyles,
  InputLabel,
  Input,
  FormControl
} from "@material-ui/core";

const styles = {
  root: {
    display: 'flex',
    width: '70%',
    flexDirection: 'row',
    padding: '0 50px'
  },
  cssLabel: {
    color: '#475666',
    '&$cssFocused': {
      color: '#4E86E4',
    },
  },
  cssFocused: {},
  cssUnderline: {
    color: '#475666',
    '&:after': {
      borderBottomColor: '#4E86E4',
    },
  },
}

const SearchListOfUsers = ({ loadUsersList, classes }) => (
  <div className={classes.root}>
    <FormControl className={classes.margin}>
      <InputLabel
        FormLabelClasses={{
          root: classes.cssLabel,
          focused: classes.cssFocused,
        }}
        htmlFor="custom-css-input"
      >
        First name or Last name
      </InputLabel>
      <Input
        classes={{
          underline: classes.cssUnderline,
        }}
        id="custom-css-input"
        onChange={(e)=>{loadUsersList(e.target.value)}}
      />
    </FormControl>
  </div>
)

export default  withStyles(styles)(SearchListOfUsers)