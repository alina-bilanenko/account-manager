import React from 'react'
import { withStyles, Grid, Icon } from '@material-ui/core'
import BootstrapInput from '../../commonComponents/BootstrapInput'
import RadioButton from 'components/commonComponents/RadioButton'
import ButtonGroup from 'components/commonComponents/ButtonGroup'
import BirthDate from 'components/commonComponents/BirthDate'
import { profileValidation } from 'Validation/index'
import { Field, reduxForm } from 'redux-form'
import { fieldNames } from 'consts'
import { Calendar } from 'icons'
import { stylesProfile } from 'styles'
import PropTypes from 'prop-types'
import GoogleAddress from 'components/commonComponents/GoogleAddress'

let Profile = (props) => {
  const { classes, handleSubmit, push } = props

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={6} className={classes.gridItem}>
            <div className={classes.container}>
              <Field
                name={fieldNames.firstName}
                required
                label='First name'
                component={BootstrapInput}
                type='text'
              />
              <Field
                name={fieldNames.lastName}
                required
                label='Last name'
                component={BootstrapInput}
                type='text'
              />
              <Field
                name={fieldNames.birthDate}
                required
                label='Birth date'
                component={BirthDate}
                type='text'
              >
                <Icon>{Calendar}</Icon>
              </Field>
            </div>
          </Grid>
          <Grid item xs={6} className={classes.gridItem}>
            <div className={classes.container}>
              <Field
                name={fieldNames.email}
                required
                label='Email'
                component={BootstrapInput}
                type='text'
              />
              <Field
                name={fieldNames.address}
                label='Address'
                component={GoogleAddress}
                type='text'
              />
              <Field
                name={fieldNames.gender}
                component={RadioButton}
              />
              <ButtonGroup
                push={push}
                url='/create-user/account'
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </form>
  )
}

Profile = reduxForm({
  form: 'profile',
  destroyOnUnmount: false,
  validate: profileValidation
})(Profile)

Profile.propTypes = {
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
  push: PropTypes.func
}

export default withStyles(stylesProfile)(Profile)
