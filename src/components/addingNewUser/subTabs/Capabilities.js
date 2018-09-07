import React from 'react'
import { withStyles, Grid } from "@material-ui/core";
import BootstrapInput from 'components/commonComponents/BootstrapInput'
import CheckboxesGroup from 'components/commonComponents/CheckboxesGroup'
import ButtonGroup from 'components/commonComponents/ButtonGroup'
import { Field, reduxForm } from 'redux-form'
import { capabilitiesValidation } from 'Validation'
import { fieldNames, myHobbiesList, skills } from "utils/consts";
import IntegrationReactSelect from 'components/commonComponents/IntegrationReactSelect'
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
              <Field
                name={fieldNames.skills}
                label='Skills'
                isMulti
                indicator
                component={IntegrationReactSelect}
                options={skills}
              />
              <Field
                name={fieldNames.additionalInformation}
                label='Additional information'
                component={BootstrapInput}
                type='text'
                maxLength='300'
                multiline
              />
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
