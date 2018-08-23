import React, { Fragment } from "react";
import DatePicker from 'react-datepicker';
import { withStyles, FormHelperText, Icon } from "@material-ui/core";
import moment from 'moment';
import { Calendar } from "icons";
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
    },
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  },
  bootstrapFormLabel: {
    fontSize: 14,
    lineHeight: '16px',
    fontWeight: 400,
    color: '#657C9A !important',
    transform: 'translate(0, -5.5px) scale(1)',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  },
  textHelper: {
    color: '#EB5757',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
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
      <label className={classes.bootstrapFormLabel}>{label}</label>
      <DatePicker
        onChange={onChange}
        placeholderText="DD/MM/YYY"
        dateFormat="DD/MM/YYYY"
        selected={!value? null :value}
        className={classes.bootstrapInput}
        selectsStart
        startDate={moment('01.01.1997')}
        customInput={<InputMask mask="99/99/9999" />}
      />
      {meta.touched && <FormHelperText className={classes.textHelper}>{meta.error}</FormHelperText>}
    </Fragment>
  )
};

export default withStyles(styles)(BirthDate);