import React from 'react'
import PropTypes from 'prop-types'
import {
  withStyles,
  Paper,
  Grid,
  Avatar,
  Button
} from '@material-ui/core'
import PlaceholderUsersList from 'components/listOfUsers/PlaceholderUsersList'
import { fieldNames } from 'consts'
import moment from 'moment'
import { Edit, Delete, RedDelete } from 'icons'
import { stylesUsersList } from 'styles'
import classNames from 'classnames'
import ConfirmDeleteDialog from 'components/commonComponents/ConfirmDeleteDialog'

function UsersList (props) {
  const {
    classes,
    usersList,
    push,
    deleteRow,
    editingUser,
    isCreateUser,
    deleteUser,
    indDeleteUser,
    openConfirmation,
    changeConfirmation
  } = props

  const createContact = (user) => {
    return user[fieldNames.phone] &&
    user[fieldNames.phone].length &&
    user[fieldNames.phone][0]
      ? user[fieldNames.phone][0]
      : user[fieldNames.email]
  }

  function rowClick (id) {
    editingUser(id)
    if (id) push(`user/${id}`)
  }

  const deleteConfirmation = (id) => {
    deleteRow(id)
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
                  <Grid item xs={2} sm={2}>
                    <Avatar
                      alt='photo'
                      src={user[fieldNames.photo]}
                      className={classes.bigAvatar}
                    />
                  </Grid>
                  <Grid item xs={2} sm={2}>
                    <span>
                      {`${user[fieldNames.firstName]} ${user[fieldNames.lastName]}`}
                    </span>
                    <br />
                    <span className={classes.userName}>
                      {user[fieldNames.userName]}
                    </span>
                  </Grid>
                  <Grid item xs={2} sm={2}>
                    {user[fieldNames.company]}
                  </Grid>
                  <Grid item xs={2} sm={2}>
                    {createContact(user)}
                  </Grid>
                  <Grid item xs={2} sm={2}>
                    {moment(user[fieldNames.lastUpdate]).fromNow()}
                  </Grid>
                  <Grid item xs={1} sm={1} className={classes.noWrap}>
                    <Button
                      disableRipple
                      className={classes.button}
                      onClick={() => rowClick(user.id)}
                    >
                      {Edit}
                    </Button>
                    <Button
                      disableRipple
                      className={classes.button}
                      onClick={
                        () => deleteUser(user.id === indDeleteUser ? 0 : user.id)
                      }
                    >
                      {Delete}
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    sm={1}
                    className={
                      classNames(
                        classes.columnDelete,
                        { [classes.hiddenDelete]: user.id === indDeleteUser })
                    }
                  >
                    <Button
                      disableRipple
                      className={classes.deleteButton}
                      onClick={changeConfirmation}
                    >
                      {RedDelete}
                      <span>delete</span>
                      <ConfirmDeleteDialog
                        classes={classes}
                        deleteUser={deleteUser}
                        openConfirmation={openConfirmation}
                        deleteConfirmation={() => deleteConfirmation(user.id)}
                      />
                    </Button>
                  </Grid>
                </Grid>
              )
            })}
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
  deleteRow: PropTypes.func,
  editingUser: PropTypes.func,
  isCreateUser: PropTypes.func,
  deleteUser: PropTypes.func,
  indDeleteUser: PropTypes.number,
  openConfirmation: PropTypes.bool,
  changeConfirmation: PropTypes.func

}

export default withStyles(stylesUsersList)(UsersList)
