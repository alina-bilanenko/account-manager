import React, { Component } from 'react'
import AddingNewUsers from 'components/addingNewUser/AddingNewUsers'
import {
  withStyles,
  Grid,
  BottomNavigationAction,
  Typography
} from '@material-ui/core'
import { Logo, AddUser, ListOfUsers } from 'icons'
import { mainStyles } from 'styles'
import ListOfAllUsers from 'components/listOfUsers/ListOfAllUsers'
import UsersList from 'components/listOfUsers/UserView'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class MainContainer extends Component {
  AddNewUser = (
    <Typography
      variant='body2'
      gutterBottom
      className={this.props.classes.text}
    >
      {AddUser}
      <span className={this.props.classes.icon}>Add new user</span>
    </Typography>
  );

  ListAllUsers = (
    <Typography
      variant='body2'
      gutterBottom
      className={this.props.classes.text}
    >
      {ListOfUsers}
      <span className={this.props.classes.icon}>List of users</span>
    </Typography>
  );

  render () {
    const { classes } = this.props
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
                  to={'/create-user/account'}
                  className={classes.linkUnderlain}
                >
                  <BottomNavigationAction
                    icon={this.AddNewUser}
                    className={classes.link}
                    disableRipple
                  />
                </Link>
                <Link to={'/list-of-user'} className={classes.linkUnderlain}>
                  <BottomNavigationAction
                    icon={this.ListAllUsers}
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
  classes: PropTypes.object
}

export default withStyles(mainStyles)(MainContainer)
