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

moment.updateLocale('en', {
  week: {
    dow: 1
  },
  weekdaysMin : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
})

const BirthDate = (props) => {
  const { classes, input: { onChange, value }, label, meta } = props

  return (
    <Fragment>
      <DatePicker
        onChange={onChange}
        placeholderText='DD/MM/YYY'
        dateFormat='DD/MM/YYYY'
        selected={!value ? null : value}
        className={classes.bootstrapInput}
        openToDate={
          !value
            ? moment('1997-01-01')
            : value
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
            input: classes.bootstrapInput
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

export default withStyles(stylesBirthDate)(BirthDate)
