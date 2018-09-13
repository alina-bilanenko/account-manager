import React from 'react'
import { withStyles, Grid } from '@material-ui/core'
import CheckboxesGroup from 'components/commonComponents/CheckboxesGroup'
import ButtonGroup from 'components/commonComponents/ButtonGroup'
import { Field, reduxForm } from 'redux-form'
import { capabilitiesValidation } from 'Validation'
import { myHobbiesList, rightColumnCapabilities } from 'utils/consts'
import { stylesCapabilities } from 'styles/styles'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { saveInLocalStorage } from 'utils/functions'

let Capabilities = (props) => {
  const {
    classes,
    handleSubmit,
    push,
    isCreateUser
  } = props

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={6} className={classes.gridItem}>
            <div className={classes.container}>
              {rightColumnCapabilities.map((field, i) => (
                <Field
                  name={field.name}
                  label={field.label}
                  isMulti={field.isMulti}
                  indicator={field.indicator}
                  component={field.component}
                  options={field.options}
                  type={field.type}
                  maxLength={field.maxLength}
                  multiline={field.multiline}
                  key={i}
                />
              ))}
            </div>
          </Grid>
          <Grid item xs={6} className={classes.gridItem}>
            <div className={classes.container}>
              <CheckboxesGroup
                label='My hobbies'
                options={myHobbiesList}
              />
              <ButtonGroup
                push={push}
                finish
                url='/create-user/contacts'
                isCreateUser={isCreateUser}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </form>
  )
}

Capabilities.propTypes = {
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
  push: PropTypes.func,
  isCreateUser: PropTypes.bool
}

const mapStateToProps = ({ collectiveState }) => {
  return {
    isCreateUser: collectiveState.createUser
  }
}

export default compose(
  connect(
    mapStateToProps
  ),
  withStyles(stylesCapabilities),
  reduxForm({
    form: 'capabilities',
    destroyOnUnmount: false,
    validate: capabilitiesValidation,
    onChange: saveInLocalStorage
  })
)(Capabilities)
