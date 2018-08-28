import React from "react";
import InputMask from 'react-input-mask'
import { FormHelperText, InputLabel, withStyles } from "@material-ui/core";

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
    width: '100%'
  },
  error: {
    borderColor: '#EB5757'
  },
  textHelper: {
    color: '#EB5757'
  },
  inputField: {
    marginBottom: '25px',
  }
});

const InputWithMask = ({input: inputProps, classes, meta, label}) => {

  return (
    <div className={classes.inputField}>
      <InputLabel className={classes.bootstrapFormLabel}>{label}</InputLabel>
      <InputMask mask="+7 (999) 999-99-99"
                 maskChar={'X'}
                 alwaysShowMask={false}
                 className={classes.bootstrapInput}
                 { ...inputProps}
      />
      {meta.touched && meta.error && <FormHelperText className={classes.textHelper}>{meta.error}</FormHelperText>}
    </div>

  );
};

export default withStyles(styles)(InputWithMask);