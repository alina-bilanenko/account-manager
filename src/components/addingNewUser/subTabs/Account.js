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
import { fieldNames, rightColumnAccount } from 'utils/consts'
import { accountValidation, matchInput, confirmPassword } from 'Validation/index'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { collectiveActions } from 'actions/action'
import { stylesAccount } from 'styles/styles'
import PropTypes from 'prop-types'
import { asyncValidateName } from 'Validation/asyncValidate'
import { compose } from 'redux'
import { saveInLocalStorage } from 'utils/functions'
import { cropActions } from 'actions/cropActions'

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
    isCreateUser,
    changeCrop,
    crop,
    modalOpenDialogCrop,
    changeModalOpenDialogCrop
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
              photo={photo}
              changeCrop={changeCrop}
              crop={crop}
              modalOpenDialogCrop={modalOpenDialogCrop}
              changeModalOpenDialogCrop={changeModalOpenDialogCrop}
            />
          </Grid>
          <Grid item xs={6} className={classes.gridItem}>
            <div className={classes.container}>
              {rightColumnAccount.map((field, i) => (
                <Field
                  key={i}
                  name={field.name}
                  validate= {
                    fieldNames.repeatPassword === field.name
                      ? [confirmPassword, matchInput]
                      : null
                  }
                  label={field.label}
                  endAdornment={field.endAdornment}
                  component={BootstrapInput}
                  type={
                    fieldNames.userName === field.name
                      ? field.type
                      : field.type(showPassword, showConfirmPassword)
                  }
                  show={
                    fieldNames.userName !== field.name
                      ? field.show(showPassword, showConfirmPassword)
                      : null
                  }
                  changeShow={
                    fieldNames.userName !== field.name
                      ? field.changeShow(changeShowPassword, changeShowConfirmPassword)
                      : null
                  }
                />
              ))}
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
    isCreateUser: store.collectiveState.createUser,
    crop: store.cropState.crop,
    modalOpenDialogCrop: store.cropState.modalOpenDialogCrop
  }
}

const mapDispatchToProps = {
  changeShowPassword: collectiveActions.showPassword,
  changeShowConfirmPassword: collectiveActions.showConfirmPassword,
  changeCrop: cropActions.crop,
  changeModalOpenDialogCrop: cropActions.modalOpenDialogCrop
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
  isCreateUser: PropTypes.bool,
  changeCrop: PropTypes.func,
  crop: PropTypes.object,
  modalOpenDialogCrop: PropTypes.bool,
  changeModalOpenDialogCrop: PropTypes.func
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
