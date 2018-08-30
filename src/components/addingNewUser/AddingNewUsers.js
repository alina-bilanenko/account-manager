import React from 'react'
import {
  withStyles,
  AppBar,
  Tabs,
  Tab,
  Typography
} from '@material-ui/core'
import Account from 'components/addingNewUser/subTabs/Account'
import Capabilities from 'components/addingNewUser/subTabs/Capabilities'
import Contacts from 'components/addingNewUser/subTabs/Contacts'
import Profile from 'components/addingNewUser/subTabs/Profile'
import classNames from 'classnames'
import { stylesAdd } from 'styles'
import { Route } from 'react-router'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import PropsTypes from 'prop-types'
import {addUsers} from 'actions/listOfUsersActions'
import { getFormValues, isValid, reset } from 'redux-form'

const AddingNewUsers = (props) => {

  const {
    classes,
    push,
    handlerAddUsers,
    account,
    profile,
    contacts,
    capabilities,
    isValid,
    resetForm
  } = props
  const tabName = props.match.params.name

  if (!tabName || !['account', 'profile', 'contacts', 'capabilities'].includes(tabName)) {
    props.history.push('/create-user/account')
    return null
  }

  const finish = () => {
    if(
      !isValid.account ||
      !isValid.profile ||
      !isValid.capabilities ||
      !isValid.contacts ||
      !account ||
      !profile ||
      !contacts ||
      !capabilities
    ) return

    let row = {
      ...account,
      ...profile,
      ...contacts,
      ...capabilities
    }
    handlerAddUsers(row);
    resetForm('account');
    resetForm('profile');
    resetForm('contacts');
    resetForm('capabilities');
    push('/create-user/account')
  };

  return (
    <div>
      <Typography
        variant='display1'
        gutterBottom
        className={classes.caption}
      >
        Adding new user
      </Typography>
      <div className={classes.root}>
        <AppBar
          position='static'
          className={classes.header}
        >
          <Tabs
            value={tabName}
            onChange={() => {}}
            classes={{
              indicator: classes.activeTab
            }}
          >
            <Tab
              value='account'
              label={<span style={{ fontSize: '1.5rem' }}>1. Account</span>}
              className={
                classNames(
                  classes.fieldHeader,
                  {
                    [classes.activeTab]: tabName === 'account'
                  }
                )
              }
            />
            <Tab
              value='profile'
              label={<span style={{ fontSize: '1.5rem' }}>2. Profile</span>}
              className={
                classNames(
                  classes.fieldHeader,
                  {
                    [classes.activeTab]: tabName === 'profile'
                  }
                )
              }
            />
            <Tab
              value='contacts'
              label={<span style={{ fontSize: '1.5rem' }}>3. Contacts</span>}
              className={
                classNames(
                  classes.fieldHeader,
                  {
                    [classes.activeTab]: tabName === 'contacts'
                  }
                )
              }
            />
            <Tab
              value='capabilities'
              label={<span style={{ fontSize: '1.5rem' }}>4. Capabilities</span>}
              className={
                classNames(
                  classes.fieldHeader,
                  {
                    [classes.activeTab]: tabName === 'capabilities'
                  }
                )
              }
            />
          </Tabs>
        </AppBar>
        <Route exact path='/create-user/account'
               render={(props) => (
                 <Account
                   {...props}
                   push={push}
                   onSubmit={() => { push('/create-user/profile') }}
                 />
               )}
        />
        <Route exact path='/create-user/profile'
               render={(props) => (
                 <Profile
                   {...props}
                   push={push}
                   onSubmit={() => { push('/create-user/contacts') }}
                 />
               )}
        />
        <Route exact path='/create-user/contacts'
               render={(props) => (
                 <Contacts
                   {...props}
                   push={push}
                   onSubmit={() => { push('/create-user/capabilities') }}
                 />
               )}
        />
        <Route exact path='/create-user/capabilities'
               render={(props) => (
                 <Capabilities
                   {...props}
                   push={push}
                   onSubmit={finish}
                 />
               )}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (props) => {
  return {
    account: getFormValues('account')(props),
    profile: getFormValues('profile')(props),
    contacts: getFormValues('contacts')(props),
    capabilities: getFormValues('capabilities')(props),
    isValid: {
      account: isValid('account')(props),
      profile: isValid('profile')(props),
      contacts: isValid('contacts')(props),
      capabilities: isValid('capabilities')(props)
    },
  }
}

const mapDispatchToProps = {
  push: push,
  handlerAddUsers: addUsers,
  resetForm: reset
}

AddingNewUsers.propTypes = {
  classes: PropsTypes.object,
  push: PropsTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(stylesAdd)(AddingNewUsers))
