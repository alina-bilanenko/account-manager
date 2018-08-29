import React from 'react'
import { Checkbox, FormControlLabel, withStyles } from '@material-ui/core'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import { stylesMyHobbies } from 'styles'

const MyHobbies = ({ input, label, classes }) => (
  <FormControlLabel
    control={
      <Checkbox
        checked={
          !!input.value
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

export default withStyles(stylesMyHobbies)(MyHobbies)
