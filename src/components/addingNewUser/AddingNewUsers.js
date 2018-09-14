import React, { Component } from 'react'
import {
  withStyles,
  AppBar,
  Tabs,
  Tab,
  Typography
} from '@material-ui/core'
import classNames from 'classnames'
import { stylesAdd } from 'styles/styles'
import { Route } from 'react-router'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import PropsTypes from 'prop-types'
import { addUsers, editingUser, updateUsers } from 'actions/listOfUsersActions'
import { getFormValues, isValid, reset } from 'redux-form'
import ButtonUsersList from 'components/commonComponents/ButtonUsersList'
import { tabList } from 'utils/consts'
import { compose } from 'redux'
import { collectiveActions } from 'actions/action'
import CompleteUnsavedData from 'components/commonComponents/CompleteUnsavedData'
import routesAddUsers from 'utils/routesAddUsers'

class AddingNewUsers extends Component {
  componentDidMount () {
    const tabName = this.props.match.params.name
    if (!tabName || !['account', 'profile', 'contacts', 'capabilities'].includes(tabName)) {
      this.props.push('/create-user/account')
    }

    if (this.props.isCreateUser) this.props.changeEditingUser()
  }

  handleChangeTab = (e, value) => {
    if (!this.props.isCreateUser) this.props.push(`/create-user/${value}`)
  }

  resetAllForm = () => {
    this.props.resetForm('account')
    this.props.resetForm('profile')
    this.props.resetForm('contacts')
    this.props.resetForm('capabilities')
  }

  save = (formName) => {
    const {
      isCreateUser,
      isValid,
      handlerUpdateUsers,
      user,
      formData
    } = this.props
    if (isCreateUser || !isValid[formName]) return
    handlerUpdateUsers(user.id, formData[formName])
  }

  finish = () => {
    const {
      isCreateUser,
      isValid,
      formData,
      handlerAddUsers
    } = this.props

    if (!isCreateUser) return

    if (
      !isValid.account ||
      !isValid.profile ||
      !isValid.capabilities ||
      !isValid.contacts ||
      !formData.account ||
      !formData.profile ||
      !formData.contacts ||
      !formData.capabilities
    ) return

    const row = {
      ...formData.account,
      ...formData.profile,
      ...formData.contacts,
      ...formData.capabilities
    }
    handlerAddUsers(row)
    localStorage.clear()
    this.resetAllForm()
    this.props.changeEditingUser()
    this.props.push('/list-of-user')
  }

  completeData = () => {
    this.props.changeEditingUser(null, true)
  }

  closeComplete = () => {
    this.props.changehasUnsavedData(false)
    localStorage.clear()
  }

  render () {
    const {
      classes,
      push,
      isCreateUser,
      hasUnsavedData
    } = this.props

    const tabName = this.props.match.params.name || 'account'

    return (
      <div className={classes.root}>
        <div className={classes.captions}>
          {!isCreateUser
            ? (<ButtonUsersList url='/list-of-user' push={push} />)
            : null
          }
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
              onChange={this.handleChangeTab}
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
                        [classes.captionEditing]: !isCreateUser,
                        [classes.activeTab]:  tabName === item.name
                      }
                    )}
                />
              ))}
            </Tabs>
          </AppBar>
          {hasUnsavedData && isCreateUser
            ? (<CompleteUnsavedData
              completeData={this.completeData}
              closeComplete={this.closeComplete}
            />)
            : null
          }
          {routesAddUsers.map((route, i) => (
            <Route
              key={i}
              exact
              path={route.path}
              render={(props) => (route.render(props, this.props, this.save, this.finish))}
            />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    isCreateUser: store.collectiveState.createUser,
    formData: {
      account: getFormValues('account')(store),
      profile: getFormValues('profile')(store),
      contacts: getFormValues('contacts')(store),
      capabilities: getFormValues('capabilities')(store)
    },
    isValid: {
      account: isValid('account')(store),
      profile: isValid('profile')(store),
      contacts: isValid('contacts')(store),
      capabilities: isValid('capabilities')(store)
    },
    user: store.collectiveState.editingUser,
    hasUnsavedData: store.collectiveState.hasUnsavedData
  }
}

const mapDispatchToProps = {
  push: push,
  handlerAddUsers: addUsers,
  resetForm: reset,
  handlerUpdateUsers: updateUsers,
  changeEditingUser: editingUser,
  changehasUnsavedData: collectiveActions.hasUnsavedData
}

AddingNewUsers.propTypes = {
  classes: PropsTypes.object,
  push: PropsTypes.func,
  match: PropsTypes.object,
  isCreateUser: PropsTypes.bool,
  changeEditingUser: PropsTypes.func,
  resetForm: PropsTypes.func,
  isValid: PropsTypes.object,
  handlerUpdateUsers: PropsTypes.func,
  changehasUnsavedData: PropsTypes.func,
  hasUnsavedData: PropsTypes.bool,
  user: PropsTypes.object,
  formData: PropsTypes.object,
  handlerAddUsers: PropsTypes.func

}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(stylesAdd)
)(AddingNewUsers)
