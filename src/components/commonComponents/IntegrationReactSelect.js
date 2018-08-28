import React from 'react';
import Select from 'react-select';
import { withStyles, InputLabel, FormHelperText } from '@material-ui/core';
import { skills, mainLanguage } from "consts";

const styles = theme => ({
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
  textHelper: {
    color: '#EB5757',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  },
});

class IntegrationReactSelect extends React.Component {

  render() {
    const {
      input,
      name,
      label,
      classes,
      meta,
      isMulti
    } = this.props;

    return (
      <div>
        <InputLabel
          className={classes.bootstrapFormLabel}
        >
          {label}
        </InputLabel>
        <Select
          classNamePrefix="react-select"
          className='react-select-container'
          value={input.value}
          onChange={input.onChange}
          onBlur={() => input.onBlur(input.value)}
          label={label}
          name={name}
          options={isMulti? skills :mainLanguage}
          onBlurResetsInput={false}
          placeholder=''
          isMulti={isMulti}
          isClearable={isMulti}
        />
        <FormHelperText
          className={classes.textHelper}
        >
          {meta.touched && meta.error}
        </FormHelperText>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(IntegrationReactSelect);