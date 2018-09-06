import React from 'react'
import { withStyles, Grid } from '@material-ui/core'
import ButtonGroup from 'components/commonComponents/ButtonGroup'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { contactsValidation } from 'Validation'
import { fieldNames, leftColumnContacts } from 'utils/consts'
import InputWithMask from 'components/commonComponents/InputMask'
import RenderPhone from 'components/commonComponents/RenderPhones'
import { stylesContacts } from 'styles/styles'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { saveInLocalStorage } from 'utils/functions'

let Contacts = (props) => {
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
              {leftColumnContacts.map((item, i) => (
                <Field
                  name={item.name}
                  required={item.required}
                  label={item.label}
                  component={item.component}
                  type={item.type}
                  key={i}
                  isMulti={item.isMulti}
                  options={item.options}
                />
              ))}
            </div>
          </Grid>
          <Grid item xs={6} className={classes.gridItem}>
            <div className={classes.container}>
              <Field
                name={fieldNames.fax}
                label='Fax'
                component={InputWithMask}
                type='text'
                required
                mask='+7 (999) 999-99-99'
              />
              <FieldArray
                name={fieldNames.phone}
                component={RenderPhone}
              />
              <ButtonGroup
                push={push}
                url='/create-user/profile'
                isCreateUser={isCreateUser}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </form>
  )
}

Contacts.propTypes = {
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
  withStyles(stylesContacts),
  reduxForm({
    form: 'contacts',
    destroyOnUnmount: false,
    initialValues: {
      phone: ['', ''],
      fax: ''
    },
    validate: contactsValidation,
    onChange: saveInLocalStorage
  })
)(Contacts)
