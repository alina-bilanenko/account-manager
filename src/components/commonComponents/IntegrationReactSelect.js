import React from 'react'
import Select from 'react-select'
import { withStyles, InputLabel, FormHelperText } from '@material-ui/core'
import { skills, mainLanguage } from 'consts'
import { stylesSelect } from 'styles'

class IntegrationReactSelect extends React.Component {
  render () {
    const {
      input,
      name,
      label,
      classes,
      meta,
      isMulti,
      indicator
    } = this.props

    return (
      <div className={classes.root}>
        <InputLabel
          className={classes.bootstrapFormLabel}
        >
          {label}
        </InputLabel>
        <Select
          classNamePrefix='react-select'
          className='react-select-container'
          value={input.value}
          onChange={input.onChange}
          onBlur={() => input.onBlur(input.value)}
          label={label}
          name={name}
          options={isMulti ? skills : mainLanguage}
          onBlurResetsInput={false}
          placeholder=''
          isMulti={isMulti}
          isClearable={isMulti}
          styles={{
            dropdownIndicator: (base) => ({
              ...base,
              color: '#9BB0CB',
              display: indicator ? base.display : 'none',
              width: '15px',
              height: '22px',
              padding: '0',
              '&:hover': {
                color: '#9BB0CB'
              }
            })
          }}
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

export default withStyles(
  stylesSelect,
  { withTheme: true }
)(IntegrationReactSelect)
