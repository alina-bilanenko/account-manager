import React, { Fragment, Component } from "react";
import DatePicker from 'react-datepicker';
import { withStyles, TextField, InputAdornment, IconButton, Icon } from "@material-ui/core";
import moment from 'moment';
import {Calendar} from "../../icons";

const styles = theme => ({
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
    },
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  bootstrapFormLabel: {
    fontSize: 14,
    lineHeight: '16px',
    fontWeight: 400,
    color: '#657C9A !important',
    transform: 'translate(0, -5.5px) scale(1)',
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    width: '100%'
  },
  textHelper: {
    color: '#EB5757',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
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
  visibleIcon: {
    marginLeft: theme.spacing.unit*(-4)
  },
});

moment.updateLocale('en', {
  week: {
    dow: 1,
  },
  weekdaysMin : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
});

const BirthDate = (props) => {

  const {classes,  input: { onChange, value }, label, meta } = props;

  return (
    <Fragment>
      <DatePicker
        onChange={onChange}
        placeholderText="DD/MM/YYY"
        dateFormat="DD/MM/YYYY"
        selected={!value? null :value}
        className={classes.bootstrapInput}
        openToDate={!value? moment("1997-01-01") :value}
        customInput={(<ExampleCustomInput label={label} meta={meta} classes={classes}/>)}
      />
    </Fragment>
  )
};

class ExampleCustomInput extends Component {

  render() {
    const {value, onClick, label, type, meta, classes} = this.props;

    return (
      <TextField
        label={label}
        type={type}
        value={value}
        onClick={onClick}

        InputProps={{
          disableUnderline: true,
          classes: {
            input: classes.bootstrapInput,
          },

          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="Toggle password visibility"
                className={classes.visibleIcon}
              >
               <Icon>{Calendar}</Icon>
              </IconButton>
            </InputAdornment>
          ),
          }}
        InputLabelProps={{
          shrink: true,
          className: classes.bootstrapFormLabel,
        }}
        helperText={meta.touched && meta.error}
        FormHelperTextProps={{
          classes: {root: classes.textHelper},
        }}
        className={classes.textField}
      />
    );
  }
}


export default withStyles(styles)(BirthDate);