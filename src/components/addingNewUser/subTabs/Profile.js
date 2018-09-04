import React from 'react'
import { withStyles, Grid, Icon } from '@material-ui/core'
import BootstrapInput from '../../commonComponents/BootstrapInput'
import GenderRadioBtns from 'components/commonComponents/GenderRadioBtns'
import ButtonGroup from 'components/commonComponents/ButtonGroup'
import BirthDate from 'components/commonComponents/BirthDate'
import { profileValidation } from 'Validation/index'
import { Field, reduxForm } from 'redux-form'
import { fieldNames } from 'consts'
import { Calendar } from 'icons'
import { stylesProfile } from 'styles'
import PropTypes from 'prop-types'
import GoogleAddress from 'components/commonComponents/GoogleAddress'
import { asyncValidateEmail } from "Validation/asyncValidate";
import { connect } from 'react-redux'
import { compose } from "redux";

let Profile = (props) => {
  const { classes, handleSubmit, push, isCreateUser } = props

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
                type='data time'
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
                type='email'
              />
              <Field
                name={fieldNames.address}
                label='Address'
                component={GoogleAddress}
                type='text'
              />
              <Field
                name={fieldNames.gender}
                component={GenderRadioBtns}
              />
              <ButtonGroup
                push={push}
                url='/create-user/account'
                isCreateUser={isCreateUser}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </form>
  )
}

Profile.propTypes = {
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
  push: PropTypes.func
}

const mapStateToProps = (store) => {
  return {
    isCreateUser: store.collectiveState.createUser,
  }
}

export default compose(
  connect(
    mapStateToProps,
  ),
  withStyles(stylesProfile),
  reduxForm({
    form: 'profile',
    destroyOnUnmount: false,
    validate: profileValidation,
    asyncValidate: asyncValidateEmail,
    asyncBlurFields: [fieldNames.email]
  })
)(Profile)
