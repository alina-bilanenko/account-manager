import React from 'react'
import PropTypes from 'prop-types'
import {
  withStyles,
  Paper,
  Grid,
  Button,
  TablePagination
} from '@material-ui/core'
import PlaceholderUsersList from 'components/listOfUsers/PlaceholderUsersList'
import { Edit, Delete, RedDelete } from 'utils/icons'
import { stylesUsersList } from 'styles/styles'
import classNames from 'classnames'
import ConfirmDeleteDialog from 'components/commonComponents/ConfirmDeleteDialog'
import TablePaginationActionsWrapped from 'components/commonComponents/TablePaginationActions'
import { usersListFields } from 'utils/consts'

function UsersList (props) {
  const {
    classes,
    usersList,
    push,
    deleteUsers,
    editingUser,
    isCreateUser,
    deleteUserInd,
    indDeleteUser,
    openConfirmation,
    changeConfirmation,
    page,
    rowsPerPage,
    changePage,
    changeRowsPerPage,
    loadUsersList,
    count,
    filter
  } = props

  function rowClick (id) {
    editingUser(id)
    if (id) push(`user/${id}`)
  }

  const handleChangeRowsPerPage = event => {
    changeRowsPerPage(event.target.value)
    changePage(1)
    loadUsersList(filter, 1, event.target.value)
  }

  const handleChangePage = (event, page) => {
    if (!event) return
    changePage(page)
    loadUsersList(filter, page, rowsPerPage)
  }

  return (
    <Paper className={classes.root}>
      <Grid container className={classes.usersList}>
        <Grid container className={classes.headerList}>
          {['', 'name', 'company', 'contacts', 'last update', ''].map((item, i) => (
            <Grid item xs={2} sm={2} key={i}>{item}</Grid>
          ))}
        </Grid>
        {usersList.length
          ? <Grid container className={classes.body}>
            {usersList.map(user => {
              return (
                <Grid
                  container
                  className={
                    classNames(
                      classes.row,
                      { [classes.deleteRow]: user.id === indDeleteUser }
                    )}
                  key={user.id}
                >
                  {usersListFields.map((field, i) => (
                    <Grid item xs={2} sm={2} key={i}>
                      {field.column(user, classes)}
                    </Grid>
                  ))}
                  {user.id !== indDeleteUser
                    ? (<Grid item xs={2} sm={2} className={classes.noWrap}>
                      <Button
                        disableRipple
                        className={classNames(
                          classes.button,
                          { [classes.hiddenButtonsEditDelete]: user.id === indDeleteUser }
                        )}
                        onClick={() => rowClick(user.id)}
                      >
                        {Edit}
                      </Button>
                      <Button
                        id='show-delete-button'
                        disableRipple
                        className={classNames(
                          classes.button,
                          { [classes.hiddenButtonsEditDelete]: user.id === indDeleteUser }
                        )}
                        onClick={
                          () => deleteUserInd(
                            user.id === indDeleteUser
                              ? 0
                              : user.id)
                        }
                      >
                        {Delete}
                      </Button>
                    </Grid>)
                    : null
                  }
                  {user.id === indDeleteUser
                    ? (<div
                      className={
                        classNames(
                          classes.columnDelete,
                          { [classes.hiddenDelete]: user.id === indDeleteUser })
                      }
                    >
                      <Button
                        id='delete-button'
                        disableRipple
                        className={classes.deleteButton}
                        onClick={changeConfirmation}
                      >
                        {RedDelete}
                        <span>delete</span>
                        <ConfirmDeleteDialog
                          classes={classes}
                          deleteUserInd={deleteUserInd}
                          openConfirmation={openConfirmation}
                          deleteConfirmation={() => deleteUsers(indDeleteUser)}
                        />
                      </Button>
                    </div>)
                    : null
                  }
                </Grid>
              )
            })}
            <Grid container className={classes.row}>
              <Grid item xs={12} sm={12}>
                <TablePagination
                  count={count}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActionsWrapped}
                  component={'div'}
                  labelDisplayedRows={() =>
                    `${(page - 1) * rowsPerPage + 1}-
                     ${count < rowsPerPage * page
      ? count
      : rowsPerPage * page
    }
                     of ${count}`
                  }
                />
              </Grid>
            </Grid>
          </Grid>
          : <PlaceholderUsersList
            push={push}
            isCreateUser={isCreateUser}
          />
        }
      </Grid>
    </Paper>
  )
}

UsersList.propTypes = {
  classes: PropTypes.object.isRequired,
  usersList: PropTypes.array,
  push: PropTypes.func,
  deleteUsers: PropTypes.func,
  editingUser: PropTypes.func,
  isCreateUser: PropTypes.func,
  deleteUserInd: PropTypes.func,
  indDeleteUser: PropTypes.number,
  openConfirmation: PropTypes.bool,
  changeConfirmation: PropTypes.func,
  changePage: PropTypes.func,
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
  changeRowsPerPage: PropTypes.func,
  count: PropTypes.number,
  filter: PropTypes.string,
  loadUsersList: PropTypes.func
}

export default withStyles(stylesUsersList)(UsersList)
