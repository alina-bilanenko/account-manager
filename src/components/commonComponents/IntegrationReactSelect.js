import React from 'react'
import Select from 'react-select'
import { withStyles, InputLabel, FormHelperText } from '@material-ui/core'
import { stylesSelect } from 'styles/styles'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class IntegrationReactSelect extends React.Component {
  render () {
    const {
      input,
      name,
      label,
      classes,
      meta,
      isMulti,
      indicator,
      options
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
          className={classNames(
            'react-select-container',
            { error: meta.error && meta.touched }
          )}
          value={input.value}
          onChange={input.onChange}
          onBlur={() => input.onBlur(input.value)}
          label={label}
          name={name}
          options={options}
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

IntegrationReactSelect.propTypes = {
  input: PropTypes.object,
  name: PropTypes.string,
  label: PropTypes.string,
  classes: PropTypes.object,
  meta: PropTypes.object,
  isMulti: PropTypes.bool,
  indicator: PropTypes.bool,
  options: PropTypes.array
}

export default withStyles(
  stylesSelect,
  { withTheme: true }
)(IntegrationReactSelect)
