import React from 'react'
import {
  TextField,
  withStyles,
  InputAdornment,
  IconButton,
  Icon
} from '@material-ui/core'
import { Eye, EyeStrike } from 'icons'
import { stylesInput } from 'styles'

const BootstrapInput = (props) => {
  const {
    classes,
    label,
    handleChangeInput,
    name,
    required = false,
    endAdornment = false,
    input: inputProps,
    meta,
    show,
    changeShow,
    type,
    multiline = false,
    maxLength
  } = props

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleClickShowPassword = () => {
    changeShow()
  }

  return (
    <TextField
      required={required}
      label={label}
      type={type}
      multiline={multiline}
      rows={multiline ? '5' : '1'}
      inputProps={{
        maxLength
      }}
      InputProps={{
        disableUnderline: true,
        classes: {
          input: classes.bootstrapInput
        },

        endAdornment: endAdornment ? (
          <InputAdornment position='end'>
            <IconButton
              aria-label='Toggle password visibility'
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              className={classes.visibleIcon}
            >
              {show
                ? (<Icon>{Eye}</Icon>)
                : (<Icon>{EyeStrike}</Icon>)}
            </IconButton>
          </InputAdornment>
        ) : null,
        ...inputProps
      }}
      InputLabelProps={{
        shrink: true,
        className: classes.bootstrapFormLabel
      }}
      helperText={meta.touched && meta.error}
      FormHelperTextProps={{
        classes: { root: classes.textHelper }
      }}
      onChange={handleChangeInput}
      name={name}
      className={classes.textField}
    />
  )
}

export default withStyles(stylesInput)(BootstrapInput)
