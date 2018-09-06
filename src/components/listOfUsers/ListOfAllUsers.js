import React, { Component } from 'react'
import { withStyles, Typography } from '@material-ui/core'
import UsersList from 'components/listOfUsers/UsersList'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { stylesList } from 'styles/styles'
import { deleteUsers, editingUser, loadUsers } from 'actions/listOfUsersActions'
import { compose } from 'redux'
import { collectiveActions } from 'actions/action'

class ListOfAllUsers extends Component {
  componentDidMount () {
    this.props.loadUsersList()
  }

  render () {
    const {
      classes,
      usersList,
      push,
      deleteUsers,
      editingUser,
      isCreateUser,
      deleteUserId,
      indDeleteUser,
      openConfirmation,
      changeConfirmation
    } = this.props

    return (
      <div className={classes.root}>
        <Typography
          variant='display1'
          gutterBottom
          className={classes.caption}
        >
          List of users
        </Typography>
        <UsersList
          usersList={usersList}
          push={push}
          deleteRow={id => deleteUsers(id)}
          editingUser={editingUser}
          isCreateUser={isCreateUser}
          indDeleteUser={indDeleteUser}
          deleteUser={deleteUserId}
          openConfirmation={openConfirmation}
          changeConfirmation={changeConfirmation}
        />
      </div>
    )
  }
}

ListOfAllUsers.propTypes = {
  classes: PropTypes.object,
  usersList: PropTypes.array,
  push: PropTypes.func,
  loadUsersList: PropTypes.func,
  deleteUsers: PropTypes.func,
  editingUser: PropTypes.func,
  isCreateUser: PropTypes.func,
  deleteUserId: PropTypes.func,
  indDeleteUser: PropTypes.number,
  openConfirmation: PropTypes.bool,
  changeConfirmation: PropTypes.func
}

const mapStateToProps = (store) => {
  return {
    usersList: store.usersList,
    indDeleteUser: store.collectiveState.deleteUserId,
    openConfirmation: store.collectiveState.openConfirmation
  }
}

const mapDispatchToProps = {
  push: push,
  deleteUsers: deleteUsers,
  editingUser: editingUser,
  loadUsersList: loadUsers,
  isCreateUser: collectiveActions.createUser,
  deleteUserId: collectiveActions.deleteUserId,
  changeConfirmation: collectiveActions.openConfirmation
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(stylesList)
)(ListOfAllUsers)
