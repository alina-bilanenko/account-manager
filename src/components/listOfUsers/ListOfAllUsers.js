import React, { Component } from "react";
import { withStyles, Typography } from '@material-ui/core'
import TableList from 'components/listOfUsers/UsersList'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { stylesList } from 'styles'
import {deleteUsers, editingUser, loadUsers } from 'actions/listOfUsersActions'
import { compose } from 'redux'

class ListOfAllUsers extends Component {
  componentDidMount(){
    this.props.loadUsersList()
  }

  render() {
    const { classes, usersList, push, deleteUsers, editingUser } = this.props
    return (
      <div className={classes.root}>
        <Typography
          variant='display1'
          gutterBottom
          className={classes.caption}
        >
          List of users
        </Typography>
        <TableList usersList={usersList} push={push} deleteRow={id => deleteUsers(id)} editingUser={editingUser}/>
      </div>
    )
  }
}

ListOfAllUsers.propTypes = {
  classes: PropTypes.object,
  userList: PropTypes.array,
  push: PropTypes.func
}

const mapStateToProps = (store) => {
  return {
    usersList: store.usersList
  }
}

const mapDispatchToProps = {
  push: push,
  deleteUsers: deleteUsers,
  editingUser: editingUser,
  loadUsersList: loadUsers
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(stylesList)
)(ListOfAllUsers)
