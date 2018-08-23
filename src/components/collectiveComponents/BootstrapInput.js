import React from "react";
import { TextField, withStyles, InputAdornment, IconButton, Icon } from "@material-ui/core";
import {Eye, EyeStrike} from 'icons';
import InputMask from 'react-input-mask'

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
    color: '#000000',
    '& + div': {
      marginLeft: '-16px'
    }
  },
  bootstrapFormLabel: {
    fontSize: 14,
    lineHeight: '16px',
    fontWeight: 400,
    color: '#657C9A !important',
    transform: 'translate(0, -5.5px) scale(1)',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  textField: {
    marginBottom: '25px',
    '&input': {
      borderRadius: 0,
      backgroundColor: theme.palette.common.white,
      border: '1px solid #C1CFE0',
      fontSize: 14,
      lineHeight: '16px',
      fontWeight: 500,
      padding: '10px 12px',
      width: 'calc(100% - 24px)',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      color: '#000000',
      '& + div': {
        marginLeft: '-16px'
      }
    }
  },
  error: {
    borderColor: '#EB5757'
  },
  visibleIcon: {
    marginLeft: theme.spacing.unit*(-4)
  },
  textHelper: {
    color: '#EB5757'
  }
});

const BootstrapInput = (props) => {
  const {classes, label, handleChangeInput, name, required = false, endAdornment = false, input: inputProps, meta, show, changeShow, type, inputMask = false } = props;
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    changeShow();
  };

  return (
    <TextField
      required={required}
      label={label}
      type={type}

      InputProps={{
        inputComponent:  inputMask? (() => (<InputMask mask="+7 (999) 999-99-99"
                                                       maskChar={'X'}
                                                       alwaysShowMask={true}
       />)): null,
        disableUnderline: true,
        classes: {
          input: classes.bootstrapInput,
        },

        endAdornment: endAdornment ? (
          <InputAdornment position="end">
            <IconButton
              aria-label="Toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              className={classes.visibleIcon}
            >
              {show ? (<Icon>{Eye}</Icon>): (<Icon>{EyeStrike}</Icon>)}
            </IconButton>
          </InputAdornment>
        ) : null,
        ...inputProps
      }}
      InputLabelProps={{
        shrink: true,
        className: classes.bootstrapFormLabel,
      }}
      helperText={meta.touched && meta.error}
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