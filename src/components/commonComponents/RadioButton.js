import React, { Fragment } from 'react'
import {
  withStyles,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@material-ui/core'
import classNames from 'classnames'
import { stylesRadio } from 'styles'
import PropTypes from 'prop-types'

const RadioButton = (props) => {
  const { classes, input, name, ...rest } = props

  return (
    <Fragment>
      <FormLabel
        component='legend'
        className={classes.bootstrapFormLabel}
      >
        Gender
      </FormLabel>
      <RadioGroup
        {...input}
        {...rest}
        aria-label='gender'
        name={name}
        className={
          classNames(
            classes.group,
            classes.bootstrapFormLabel
          )}
        value={
          !input.value
            ? 'male'
            : input.value
        }
        onChange={
          (event, value) => input.onChange(value)
        }
      >
        <FormControlLabel
          value='male'
          classes={{
            label: classes.label
          }}
          control={
            <Radio
              classes={{
                root: classes.radio,
                checked: classes.checked
              }}
            />
          }
          label='Male'
          labelPlacement='end'
          className={classes.bootstrapFormLabel}
        />
        <FormControlLabel
          value='female'
          classes={{
            label: classes.label
          }}
          control={
            <Radio
              classes={{
                root: classes.radio,
                checked: classes.checked
              }}
            />}
          label='Female'
          labelPlacement='end'
          className={classes.bootstrapFormLabel}
        />
      </RadioGroup>
    </Fragment>
  )
}

RadioButton.propTypes = {
  classes: PropTypes.object,
  input: PropTypes.object,
  name: PropTypes.string,
  rest: PropTypes.object
}

export default withStyles(stylesRadio)(RadioButton)
