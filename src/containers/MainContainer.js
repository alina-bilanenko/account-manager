import React, { Component } from "react";
import AddingNewUsers from 'components/addingNewUser/AddingNewUsers'
import { withStyles } from '@material-ui/core/styles';
import { Grid, BottomNavigationAction, Typography } from '@material-ui/core';
import { Logo, AddUser, ListOfUsers } from 'icons'
import { stylesApp } from 'styles'
import ListOfAllUsers from 'components/listOfUsers/ListOfAllUsers'
import UsersList from 'components/listOfUsers/UsersList'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'


class MainContainer extends Component {

  AddNewUser = (
    <Typography variant="body2" gutterBottom className={this.props.classes.text}>
      {AddUser}
      <span  className={this.props.classes.icon}>Add new user</span>
    </Typography>
  );

  ListAllUsers = (
    <Typography variant="body2" gutterBottom className={this.props.classes.text}>
      {ListOfUsers}
      <span  className={this.props.classes.icon}>List of users</span>
    </Typography>
  );

  render() {
    const { classes } = this.props;
    return (
          <div className={classes.root}>
            <Grid container spacing={0} justify='center'>
              <Grid item xs={12} className={classes.header}>
                <div className={classes.headerFlex}>
                  <div className={classes.logo}>
                    {Logo}
                  </div>
                  <div className={classes.logo}>
                    <Link to={'/create-user/account'} >
                      <BottomNavigationAction icon={this.AddNewUser} className={classes.link} />
                    </Link>
                    <Link to={'/list-of-user'} >
                      <BottomNavigationAction icon={this.ListAllUsers} className={classes.link} />
                    </Link>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12}>
               <Switch>
                 <Route exact path='/create-user/:name' component={AddingNewUsers} />
                 <Route exact path='/list-of-user' component={ListOfAllUsers} />
                 <Route exact path='/view-user/' component={UsersList} />
                 <Route exact path='/edit-user/:id' component={AddingNewUsers} />
                 <Route component={AddingNewUsers} />
               </Switch>
              </Grid>
            </Grid>
          </div>
    );
  }
}

export default withStyles(stylesApp)(MainContainer);
