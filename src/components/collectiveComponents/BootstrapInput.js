import React from "react";
import { TextField, withStyles, InputAdornment, IconButton, Icon } from "@material-ui/core";
import {Eye, EyeStrike} from 'icons';

const styles = theme =>({
  bootstrapInput: {
    borderRadius: 0,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #C1CFE0',
    fontSize: 14,
    lineHeight: '16px',
    fontWeight: 500,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    color: '#000000'
  },
  bootstrapFormLabel: {
    fontSize: 14,
    lineHeight: '16px',
    fontWeight: 400,
    color: '#657C9A !important',
    transform: 'translate(0, -5.5px) scale(1)',
  },
  textField: {
    marginBottom: '25px',
  },
  error: {
    borderColor: '#EB5757'
  },
  visibleIcon: {
    marginLeft: theme.spacing.unit*(-6)
  },
  textHelper: {
    color: '#EB5757'
  }
});

const BootstrapInput = (props) => {
  const {classes, label, handleChangeInput, name} = props;
  const showPassword = true;
  const handleClickShowPassword = () => {

  };
  const handleMouseDownPassword = () => {

  };

  return (
     <TextField
       required
       label={label}
       id="bootstrap-input"
       InputProps={{
         disableUnderline: true,
         classes: {
           input: classes.bootstrapInput,
         },
         endAdornment: (
         <InputAdornment position="end">
         <IconButton
         aria-label="Toggle password visibility"
         onClick={handleClickShowPassword}
         onMouseDown={handleMouseDownPassword}
         className={classes.visibleIcon}
         >
         {showPassword ? (<Icon>{Eye}</Icon>): (<Icon>{EyeStrike}</Icon>)}
         </IconButton>
         </InputAdornment>
         )
       }}
       InputLabelProps={{
         shrink: true,
         className: classes.bootstrapFormLabel,
       }}
       helperText="Some important text"
       FormHelperTextProps={{
         classes: {root: classes.textHelper},
       }}
       onChange={handleChangeInput}
       name={name}
       className={classes.textField}
     />
  )
};

export default withStyles(styles)(BootstrapInput);