import Account from "components/addingNewUser/subTabs/Account";
import Profile from "components/addingNewUser/subTabs/Profile";
import Contacts from "components/addingNewUser/subTabs/Contacts";
import Capabilities from "components/addingNewUser/subTabs/Capabilities";
import React from "react";

const routesAddUsers = [
  {
    path: '/create-user/account',
    render: (renderProps, props, save) => (
      <Account
        {...renderProps}
        push={props.push}
        onSubmit={() => {
          props.isCreateUser
            ? props.push('/create-user/profile')
            : save('account')
        }}
      />
    )
  },
  {
    path: '/create-user/profile',
    render: (renderProps, props, save) => (
      <Profile
        {...renderProps}
        push={props.push}
        onSubmit={() => {
          props.isCreateUser
            ? props.push('/create-user/contacts')
            : save('profile')
        }}
      />
    )
  },
  {
    path: '/create-user/contacts',
    render: (renderProps, props, save) => (
      <Contacts
        {...renderProps}
        push={props.push}
        onSubmit={() => {
          props.isCreateUser
            ? props.push('/create-user/capabilities')
            : save('contacts')
        }}
      />
    )
  },
  {
    path: '/create-user/capabilities',
    render: (renderProps, props, save, finish) => (
      <Capabilities
        {...renderProps}
        push={props.push}
        onSubmit={
          props.isCreateUser
            ? finish
            : () => save('capabilities')
        }
      />
    )
  }
]

export default routesAddUsers