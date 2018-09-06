import React from 'react'
import {
  withStyles,
  Grid,
  Card
} from '@material-ui/core'
import { Avatar } from 'utils/icons'
import BootstrapInput from 'components/commonComponents/BootstrapInput'
import ButtonGroup from 'components/commonComponents/ButtonGroup'
import ImageLoader from 'components/addingNewUser/subTabs/ImageLoader'
import { fieldNames } from 'utils/consts'
import { accountValidation, matchInput, confirmPassword } from 'Validation/index'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { collectiveActions } from 'actions/action'
import { stylesAccount } from 'styles/styles'
import PropTypes from 'prop-types'
import { asyncValidateName } from 'Validation/asyncValidate'
import { compose } from 'redux'
import { saveInLocalStorage } from 'utils/functions'

let Account = (props) => {
  const {
    classes,
    handleSubmit,
    showPassword,
    changeShowPassword,
    showConfirmPassword,
    changeShowConfirmPassword,
    photo,
    push,
    isCreateUser
  } = props

  return (
    <form encType='multipart/form-data' onSubmit={handleSubmit} noValidate>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={6} className={classes.gridItem}>
            <Card className={classes.card}>
              {photo
                ? <img
                  src={photo}
                  alt=''
                  className={classes.imageLoader}

                />
                : Avatar}
            </Card>
            <Field
              name={fieldNames.photo}
              component={ImageLoader}
              type='file'
            />
          </Grid>
          <Grid item xs={6} className={classes.gridItem}>
            <div className={classes.container}>
              <Field
                name={fieldNames.userName}
                label='User name'
                component={BootstrapInput}
                type='text'
              />
              <Field
                name={fieldNames.password}
                label='Password'
                endAdornment
                component={BootstrapInput}
                type={showPassword ? 'text' : 'password'}
                show={showPassword}
                changeShow={changeShowPassword}
              />
              <Field
                name={fieldNames.repeatPassword}
                validate={[confirmPassword, matchInput]}
                label='Repeat Password'
                endAdornment
                component={BootstrapInput}
                type={showConfirmPassword ? 'text' : 'password'}
                show={showConfirmPassword}
                changeShow={changeShowConfirmPassword}
              />
              <ButtonGroup
                push={push}
                hidden
                url='profile'
                isCreateUser={isCreateUser}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </form>
  )
}

const selector = formValueSelector('account')

const mapStateToProps = (store) => {
  return {
    showPassword: store.collectiveState.showPassword,
    showConfirmPassword: store.collectiveState.showConfirmPassword,
    photo: selector(store, 'photo'),
    isCreateUser: store.collectiveState.createUser
  }
}

const mapDispatchToProps = {
  changeShowPassword: collectiveActions.showPassword,
  changeShowConfirmPassword: collectiveActions.showConfirmPassword
}

Account.propTypes = {
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
  showPassword: PropTypes.bool,
  changeShowPassword: PropTypes.func,
  showConfirmPassword: PropTypes.bool,
  changeShowConfirmPassword: PropTypes.func,
  photo: PropTypes.string,
  push: PropTypes.func,
  isCreateUser: PropTypes.bool
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(stylesAccount),
  reduxForm({
    form: 'account',
    destroyOnUnmount: false,
    validate: accountValidation,
    asyncValidate: asyncValidateName,
    asyncBlurFields: [fieldNames.userName],
    onChange: saveInLocalStorage
  })
)(Account)
