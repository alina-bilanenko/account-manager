import React from 'react'
import { withStyles, FormLabel } from '@material-ui/core'
import CustomCompCheckBox from 'components/commonComponents/CustomCompCheckBox'
import { Field } from 'redux-form'
import { stylesCheckbox } from 'styles/styles'
import PropTypes from 'prop-types'

class CheckboxesGroup extends React.Component {
  render () {
    const { classes, label, options } = this.props

    return (
      <div className={classes.root}>
        <FormLabel
          className={classes.label}
        >
          {label}
        </FormLabel>
        {options.map((item, ind) => (
          <Field
            key={ind}
            name={item.name}
            component={CustomCompCheckBox}
            label={item.title}
          />
        ))}
      </div>
    )
  }
}

CheckboxesGroup.propTypes = {
  classes: PropTypes.object
}

export default withStyles(stylesCheckbox)(CheckboxesGroup)
