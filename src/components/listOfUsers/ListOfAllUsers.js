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
import SearchListOfUsers from 'components/commonComponents/SearchListOfUsers'
import { paginationActions } from 'actions/paginationActions'
import { debounce } from 'debounce'

class ListOfAllUsers extends Component {
  componentDidMount () {
    const {
      loadUsersList,
      filter,
      page,
      rowsPerPage
    } = this.props

    loadUsersList(filter, page, rowsPerPage)
  }

  deleteUsersAndUpdatePage = (id) => {
    const {
      deleteUsers,
      loadUsersList,
      filter,
      page,
      rowsPerPage
    } = this.props

    deleteUsers(id)
    loadUsersList(filter, page, rowsPerPage)
  }

  render () {
    const {
      classes,
      usersList,
      push,
      editingUser,
      isCreateUser,
      deleteUserId,
      indDeleteUser,
      openConfirmation,
      changeConfirmation,
      loadUsersList,
      page,
      rowsPerPage,
      changePage,
      changeRowsPerPage,
      count,
      setFilter,
      filter
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
        <SearchListOfUsers
          loadUsersList={debounce(loadUsersList, 500)}
          setFilter={setFilter}
          filter={filter}
        />
        <UsersList
          usersList={usersList}
          push={push}
          deleteUsers={this.deleteUsersAndUpdatePage}
          editingUser={editingUser}
          isCreateUser={isCreateUser}
          indDeleteUser={indDeleteUser}
          deleteUserInd={deleteUserId}
          openConfirmation={openConfirmation}
          changeConfirmation={changeConfirmation}
          page={page}
          rowsPerPage={rowsPerPage}
          changePage={changePage}
          changeRowsPerPage={changeRowsPerPage}
          loadUsersList={loadUsersList}
          count={count}
          filter={filter}
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
  changeConfirmation: PropTypes.func,
  setFilter: PropTypes.func,
  changePage: PropTypes.func,
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
  changeRowsPerPage: PropTypes.func,
  count: PropTypes.number,
  filter: PropTypes.string
}

const mapStateToProps = (store) => {
  return {
    usersList: store.usersList,
    indDeleteUser: store.collectiveState.deleteUserId,
    openConfirmation: store.collectiveState.openConfirmation,
    page: store.pagination.page,
    rowsPerPage: store.pagination.rowsPerPage,
    count: store.pagination.count,
    filter: store.collectiveState.filter
  }
}

const mapDispatchToProps = {
  push: push,
  deleteUsers: deleteUsers,
  editingUser: editingUser,
  loadUsersList: loadUsers,
  isCreateUser: collectiveActions.createUser,
  deleteUserId: collectiveActions.deleteUserId,
  changeConfirmation: collectiveActions.openConfirmation,
  changePage: paginationActions.page,
  changeRowsPerPage: paginationActions.rowsPerPage,
  setFilter: collectiveActions.filter
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(stylesList)
)(ListOfAllUsers)
