import React from 'react'
import InputMask from 'react-input-mask'
import { FormHelperText, InputLabel, withStyles } from '@material-ui/core'
import { stylesMask } from 'styles/styles'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const InputWithMask = ({
  input: inputProps,
  classes,
  meta,
  label,
  mask
}) => {
  return (
    <div className={classes.inputField}>
      <InputLabel
        className={classes.bootstrapFormLabel}
      >
        {label}
      </InputLabel>
      <InputMask mask={mask}
        maskChar={'X'}
        alwaysShowMask={false}
        className={classNames(
          classes.bootstrapInput,
          { [classes.error]: meta.error && meta.touched }
        )}
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
