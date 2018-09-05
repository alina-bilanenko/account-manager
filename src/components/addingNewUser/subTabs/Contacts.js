import React from 'react'
import { withStyles, Grid } from '@material-ui/core'
import IntegrationReactSelect from 'components/commonComponents/IntegrationReactSelect'
import BootstrapInput from 'components/commonComponents/BootstrapInput'
import ButtonGroup from 'components/commonComponents/ButtonGroup'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { contactsValidation } from 'Validation'
import { fieldNames } from 'consts'
import InputWithMask from 'components/commonComponents/InputMask'
import RenderPhone from 'components/commonComponents/RenderPhones'
import { stylesContacts } from 'styles'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from "redux";

let Contacts = (props) => {
  const { classes, handleSubmit, push, isCreateUser } = props

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={6} className={classes.gridItem}>
            <div className={classes.container}>
              <Field
                name={fieldNames.company}
                required
                label='Company'
                component={BootstrapInput}
                type='text'
              />
              <Field
                name={fieldNames.gitHubLink}
                label='Github link'
                component={BootstrapInput}
                type='text'
              />
              <Field
                name={fieldNames.facebookLink}
                label='Facebook link'
                component={BootstrapInput}
                type='text'
              />
              <Field
                name={fieldNames.mainLanguage}
                label='Main language'
                isMulti={false}
                component={IntegrationReactSelect}
              />
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
  push: PropTypes.func
}

const mapStateToProps = (store) => {
  return {
    isCreateUser: store.collectiveState.createUser
  }
}


export default compose(
  connect(
    mapStateToProps,
  ),
  withStyles(stylesContacts),
  reduxForm({
    form: 'contacts',
    destroyOnUnmount: false,
    initialValues: {
      phone: ['', ''],
      fax: ''
    },
    validate: contactsValidation
  })
)(Contacts)
