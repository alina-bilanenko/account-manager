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
import PropTypes from 'prop-types'
import classNames from 'classnames'

const BootstrapInput = (props) => {
  const {
    classes,
    label,
    handleChangeInput,
    name,
    required = false,
    endAdornment = false,
    input,
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
          input: classNames(classes.bootstrapInput, { [classes.error]: meta.error && meta.touched })
        },
        endAdornment: endAdornment ? (
          <InputAdornment position='end'>
            <IconButton
              aria-label='Toggle password visibility'
              onClick={changeShow}
              onMouseDown={handleMouseDownPassword}
              className={classes.visibleIcon}
            >
              {show
                ? (<Icon>{Eye}</Icon>)
                : (<Icon>{EyeStrike}</Icon>)}
            </IconButton>
          </InputAdornment>
        ) : null,
        ...input
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

BootstrapInput.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.string,
  handleChangeInput: PropTypes.func,
  name: PropTypes.string,
  required: PropTypes.bool,
  endAdornment: PropTypes.bool,
  input: PropTypes.object,
  meta: PropTypes.object,
  show: PropTypes.bool,
  changeShow: PropTypes.func,
  type: PropTypes.string,
  multiline: PropTypes.bool,
  maxLength: PropTypes.string
}

export default withStyles(stylesInput)(BootstrapInput)
