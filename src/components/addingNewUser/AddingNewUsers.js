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
import { addUsers } from 'actions/listOfUsersActions'
import { getFormValues, isValid, reset } from 'redux-form'
import ButtonUsersList from "../commonComponents/ButtonUsersList";
import {tabList} from 'consts'
import { compose } from "redux";

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
    resetForm,
    isCreateUser
  } = props
  const tabName = props.match.params.name

  if (!tabName || !['account', 'profile', 'contacts', 'capabilities'].includes(tabName)) {
    push('/create-user/account')
    return null
  }

  const handleChangeTab = (e, value) => {
    if(!isCreateUser) push(`/create-user/${value}`)
  }

  const resetAllForm = () => {
    resetForm('account')
    resetForm('profile')
    resetForm('contacts')
    resetForm('capabilities')
    push('/create-user/account')
  }

  const save = () => {
    if(isCreateUser) return
  }

  const finish = () => {
    if(!isCreateUser) return

    if (
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
    handlerAddUsers(row)
    resetAllForm();
  }



  return (
    <div className={classes.root}>
      <div className={classes.captions}>
        {!isCreateUser && <ButtonUsersList url='/list-of-user' push={push}/>}
        <Typography
          variant='display1'
          gutterBottom
          className={classes.caption}
        >
          {isCreateUser ? 'Adding new user' : 'Editing'}
        </Typography>
      </div>
      <div>
        <AppBar
          position='static'
          className={classes.header}
        >
          <Tabs
            value={tabName}
            onChange={handleChangeTab}
            classes={{
              indicator: classes.activeTab
            }}
          >
            {tabList.map((item, ind) => (
              <Tab
                key={ind}
                value={item.name}
                label={<span style={{ fontSize: '1.5rem' }}>{item.title}</span>}
                className={
                  classNames(
                    classes.fieldHeader,
                    {
                      [classes.activeTab]: tabName === item.name
                    }
                  )}
              />
            ))}
          </Tabs>
        </AppBar>
        <Route exact path='/create-user/account'
        render={(props) => (
                 <Account
                   {...props}
                   push={push}
                   onSubmit={() => { if(isCreateUser) {
                     push('/create-user/profile')
                   } else save()}}
                 />
               )}
        />
        <Route exact path='/create-user/profile'
               render={(props) => (
                 <Profile
                   {...props}
                   push={push}
                   onSubmit={() => {if(isCreateUser) {
                     push('/create-user/contacts')
                   } else save()}}
                 />
               )}
        />
        <Route exact path='/create-user/contacts'
               render={(props) => (
                 <Contacts
                   {...props}
                   push={push}
                   onSubmit={() => { if(isCreateUser) {
                     push('/create-user/capabilities')
                   } else save()}}
                 />
               )}
        />
        <Route exact path='/create-user/capabilities'
               render={(props) => (
                 <Capabilities
                   {...props}
                   push={push}
                   onSubmit={ isCreateUser ? finish : save}
                 />
               )}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (store) => {
  return {
    isCreateUser: store.collectiveState.createUser,
    account: getFormValues('account')(store),
    profile: getFormValues('profile')(store),
    contacts: getFormValues('contacts')(store),
    capabilities: getFormValues('capabilities')(store),
    isValid: {
      account: isValid('account')(store),
      profile: isValid('profile')(store),
      contacts: isValid('contacts')(store),
      capabilities: isValid('capabilities')(store)
    }
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

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(stylesAdd)
)(AddingNewUsers)
