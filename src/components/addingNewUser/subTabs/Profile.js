import React from 'react'
import { withStyles, Grid, Icon } from '@material-ui/core'
import ButtonGroup from 'components/commonComponents/ButtonGroup'
import { profileValidation } from 'Validation/index'
import { Field, reduxForm } from 'redux-form'
import { fieldNames, columnProfile } from 'consts'
import { stylesProfile } from 'styles'
import PropTypes from 'prop-types'
import { asyncValidateEmail } from 'Validation/asyncValidate'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { saveInLocalStorage } from 'functions'

let Profile = (props) => {
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
          {columnProfile.map((column, j) => (
            <Grid item xs={6} className={classes.gridItem} key={j}>
              <div className={classes.container}>
                {column.map((item, i) => (
                  <Field
                    name={item.name}
                    required
                    label={item.label}
                    component={item.component}
                    type={item.type}
                    key={i}
                  >
                    {item.icon && <Icon>{item.icon}</Icon>}
                  </Field>
                ))}
                {(columnProfile.length === j + 1) &&
                <ButtonGroup
                  push={push}
                  url='/create-user/account'
                  isCreateUser={isCreateUser}
                />}
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </form>
  )
}

Profile.propTypes = {
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
  withStyles(stylesProfile),
  reduxForm({
    form: 'profile',
    destroyOnUnmount: false,
    validate: profileValidation,
    asyncValidate: asyncValidateEmail,
    asyncBlurFields: [fieldNames.email],
    onChange: saveInLocalStorage
  })
)(Profile)
