import React from 'react'
import { withStyles, Grid } from '@material-ui/core'
import BootstrapInput from 'components/commonComponents/BootstrapInput'
import CheckboxesGroup from 'components/commonComponents/CheckboxesGroup'
import ButtonGroup from 'components/commonComponents/ButtonGroup'
import { Field, reduxForm } from 'redux-form'
import { capabilitiesValidation } from 'Validation'
import { fieldNames } from 'consts'
import IntegrationReactSelect from 'components/commonComponents/IntegrationReactSelect'
import { stylesCapabilities } from 'styles'
import PropTypes from 'prop-types'

let Capabilities = (props) => {
  const { classes, handleSubmit, push } = props

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
              <CheckboxesGroup />
              <ButtonGroup
                push={push}
                finish
                url='/create-user/contacts'
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </form>
  )
}

Capabilities = reduxForm({
  form: 'contacts',
  destroyOnUnmount: false,
  validate: capabilitiesValidation
})(Capabilities)

Capabilities.propTypes = {
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
  push: PropTypes.func
}

export default withStyles(stylesCapabilities)(Capabilities)
