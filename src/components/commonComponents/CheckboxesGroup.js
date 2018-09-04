import React from 'react'
import { withStyles, FormLabel } from '@material-ui/core'
import MyHobbies from 'components/commonComponents/MyHobbies'
import { Field } from 'redux-form'
import { myHobbiesList } from 'consts'
import { stylesCheckbox } from 'styles'
import PropTypes from 'prop-types'



class CheckboxesGroup extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <FormLabel
          className={classes.label}
        >
          My hobbies
        </FormLabel>
        {myHobbiesList.map((item, ind) => (
          <Field
            key={ind}
            name={item.name}
            component={MyHobbies}
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
