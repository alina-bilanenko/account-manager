import React from 'react'
import InputMask from 'react-input-mask'
import { FormHelperText, InputLabel, withStyles } from '@material-ui/core'
import { stylesMask } from 'styles'
import PropTypes from 'prop-types'

const InputWithMask = ({
  input: inputProps,
  classes,
  meta,
  label
}) => {
  return (
    <div className={classes.inputField}>
      <InputLabel
        className={classes.bootstrapFormLabel}
      >
        {label}
      </InputLabel>
      <InputMask mask='+7 (999) 999-99-99'
        maskChar={'X'}
        alwaysShowMask={false}
        className={classes.bootstrapInput}
        {...inputProps}
      />
      {meta.touched &&
      meta.error &&
      <FormHelperText
        className={classes.textHelper}
      >
        {meta.error}
      </FormHelperText>
      }
    </div>

  )
}

InputMask.propTypes = {
  inputProps: PropTypes.object,
  classes: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string
}

export default withStyles(stylesMask)(InputWithMask)
