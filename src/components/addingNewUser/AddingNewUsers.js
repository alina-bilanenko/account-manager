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
import { createUser } from 'actions/createUserAction'
import { push } from 'connected-react-router'

const AddingNewUsers = (props) => {
  // const handleChange = (event, val) => {
  //   props.history.push(`/create-user/${val}`)
  // };

  const { classes, push } = props
  const tabName = props.match.params.name

  if (!tabName || !['account', 'profile', 'contacts', 'capabilities'].includes(tabName)) {
    props.history.push('/create-user/account')
    return null
  }

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
          <Tabs value={tabName} onChange={() => {}}>
            <Tab
              value='account'
              label='1. Account'
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
              label='2. Profile'
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
              label='3. Contacts'
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
              label='4. Capabilities'
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
              onSubmit={() => {}}
            />
          )}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (props) => {
  return {
    user: props.createUser.addNewUser
  }
}

const mapDispatchToProps = {
  changeUser: createUser.addNewUser,
  push: push
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(stylesAdd)(AddingNewUsers))
