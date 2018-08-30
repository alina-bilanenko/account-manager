import React from 'react'
import {
  withStyles,
  Typography,
  BottomNavigationAction,
  Grid,
  Card
} from '@material-ui/core'
import { Close, Avatar } from 'icons'
import BootstrapInput from 'components/commonComponents/BootstrapInput'
import ButtonGroup from 'components/commonComponents/ButtonGroup'
import ImageLoader from 'components/addingNewUser/subTabs/ImageLoader'
import { fieldNames } from 'consts'
import { accountValidation, matchInput, confirmPassword } from 'Validation/index'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { collectiveActions } from 'actions/action'
import { stylesAccount } from 'styles'
import PropTypes from 'prop-types'

let Account = (props) => {
  let {
    classes,
    handleSubmit,
    showPassword,
    changeShowPassword,
    showConfirmPassword,
    changeShowConfirmPassword,
    photo,
    push
  } = props

  return (
    <form encType='multipart/form-data' onSubmit={handleSubmit} noValidate>
      <div className={classes.root}>
        <div className={classes.unsavedUserData}>
          <Typography
            variant='body2'
            gutterBottom
            className={classes.unsavedUserDataText}
          >
            You have an unsaved user data. Do you want to complete it?
          </Typography>
          <BottomNavigationAction
            icon='Continue'
            className={classes.unsavedUserDataTextBlack}
          />
          <BottomNavigationAction
            icon={Close}
            className={classes.rightIcons}
          />
        </div>
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
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </form>
  )
}

Account = reduxForm({
  form: 'account',
  destroyOnUnmount: false,
  validate: accountValidation
})(Account)

const selector = formValueSelector('account')

const mapStateToProps = (props) => {
  return {
    showPassword: props.collectiveState.showPassword,
    showConfirmPassword: props.collectiveState.showConfirmPassword,
    photo: selector(props, 'photo')
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
  push: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(stylesAccount)(Account))
