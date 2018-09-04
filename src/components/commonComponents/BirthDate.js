import React, { Fragment, Component } from 'react'
import DatePicker from 'react-datepicker'
import {
  withStyles,
  TextField,
  InputAdornment,
  IconButton,
  Icon
} from '@material-ui/core'
import moment from 'moment'
import { Calendar } from 'icons'
import { stylesBirthDate } from 'styles'
import PropTypes from 'prop-types'
import classNames from 'classnames'

moment.updateLocale('en', {
  week: {
    dow: 1
  },
  weekdaysMin : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
})

const BirthDate = (props) => {
  const { classes, input, label, meta } = props

  return (
    <Fragment>
      <DatePicker
        onChange={input.onChange}
        placeholderText='DD/MM/YYY'
        dateFormat='DD/MM/YYYY'
        selected={!input.value ? null : input.value}
        className={classes.bootstrapInput}
        openToDate={
          !input.value
            ? moment('1997-01-01')
            : input.value
        }
        customInput={
          (<BirthDateInput
            label={label}
            meta={meta}
            classes={classes}
          />)}
      />
    </Fragment>
  )
}

class BirthDateInput extends Component {
  render () {
    const {
      value,
      onClick,
      label,
      type,
      meta,
      classes
    } = this.props

    return (
      <TextField
        label={label}
        type={type}
        value={value}
        onClick={onClick}

        InputProps={{
          disableUnderline: true,
          classes: {
            input: classNames(classes.bootstrapInput, {[classes.error]: meta.error && meta.touched})
          },

          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                aria-label='Toggle password visibility'
                className={classes.visibleIcon}
              >
                <Icon>{Calendar}</Icon>
              </IconButton>
            </InputAdornment>
          )
        }}
        InputLabelProps={{
          shrink: true,
          className: classes.bootstrapFormLabel
        }}
        helperText={meta.touched && meta.error}
        FormHelperTextProps={{
          classes: { root: classes.textHelper }
        }}
        className={classes.textField}
      />
    )
  }
}

BirthDate.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  input: PropTypes.object
}

BirthDateInput.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
  classes: PropTypes.object
}

export default withStyles(stylesBirthDate)(BirthDate)
