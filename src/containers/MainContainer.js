import React, { Component } from 'react'
import AddingNewUsers from 'components/addingNewUser/AddingNewUsers'
import {
  withStyles,
  Grid,
  BottomNavigationAction,
  Typography
} from '@material-ui/core'
import { Logo, AddUser, ListOfUsers } from 'utils/icons'
import { mainStyles } from 'styles/styles'
import ListOfAllUsers from 'components/listOfUsers/ListOfAllUsers'
import UsersList from 'components/listOfUsers/UserView'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { collectiveActions } from 'actions/action'
import { editingUser } from 'actions/listOfUsersActions'
import { paginationActions } from "actions/paginationActions";

class MainContainer extends Component {
  static AddNewUser (classes) {
    return (
      <Typography
        variant='body2'
        gutterBottom
        className={classes.text}
      >
        {AddUser}
        <span className={classes.icon}>Add new user</span>
      </Typography>
    )
  }

  static ListAllUsers (classes) {
    return (
      <Typography
        variant='body2'
        gutterBottom
        className={classes.text}
      >
        {ListOfUsers}
        <span className={classes.icon}>List of users</span>
      </Typography>
    )
  }

  handlerClickAddUser = () => {
    this.props.isCreateUser(true)
    this.props.changeEditingUser()
  }

  render () {
    const { classes, changePage, setFilter } = this.props
    return (
      <div className={classes.root}>
        <Grid container spacing={0} justify='center'>
          <Grid item xs={12} className={classes.header}>
            <div className={classes.headerFlex}>
              <div className={classes.logo}>
                {Logo}
              </div>
              <div className={classes.logo}>
                <Link
                  to='/create-user/account'
                  className={classes.linkUnderlain}
                  onClick={this.handlerClickAddUser}
                >
                  <BottomNavigationAction
                    icon={MainContainer.AddNewUser(classes)}
                    className={classes.link}
                    disableRipple
                  />
                </Link>
                <Link
                  to='/list-of-user'
                  className={classes.linkUnderlain}
                  onClick={()=>{
                    setFilter('')
                    changePage(1)
                  }}
                >
                  <BottomNavigationAction
                    icon={MainContainer.ListAllUsers(classes)}
                    className={classes.link}
                    disableRipple
                  />
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Switch>
              <Route
                exact
                path='/create-user/:name'
                component={AddingNewUsers}
              />
              <Route
                exact
                path='/list-of-user'
                component={ListOfAllUsers}
              />
              <Route
                exact
                path='/user/:id'
                component={UsersList}
              />
              <Route
                exact
                path='/edit-user/:id'
                component={AddingNewUsers}
              />
              <Route component={AddingNewUsers} />
            </Switch>
          </Grid>
        </Grid>
      </div>
    )
  }
}

MainContainer.propTypes = {
  classes: PropTypes.object,
  isCreateUser: PropTypes.func,
  changeEditingUser: PropTypes.func
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  isCreateUser: collectiveActions.createUser,
  changeEditingUser: editingUser,
  changePage: paginationActions.page,
  setFilter: collectiveActions.filter
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(mainStyles)
)(MainContainer)
