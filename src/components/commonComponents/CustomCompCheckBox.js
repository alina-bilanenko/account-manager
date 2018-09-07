import React from 'react'
import { Checkbox, FormControlLabel, withStyles } from '@material-ui/core'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import { stylesCustomCheckBox } from 'styles/styles'
import PropTypes from 'prop-types'

const CustomCompCheckBox = ({ input, label, classes }) => (
  <FormControlLabel
    control={
      <Checkbox
        checked={
          Boolean(input.value)
        }
        onChange={input.onChange}
        checkedIcon={
          <CheckBoxIcon
            className={classes.sizeIcon}
          />
        }
        classes={{
          root: classes.root,
          checked: classes.checked
        }}
      />
    }
    label={label}
  />
)

CustomCompCheckBox.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  classes: PropTypes.object
}

export default withStyles(stylesCustomCheckBox)(CustomCompCheckBox)
