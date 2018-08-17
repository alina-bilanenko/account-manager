import React, { Component } from "react";
import AddingNewUsers from 'components/addingNewUser/AddingNewUsers'
import '../App.css';
import { withStyles } from '@material-ui/core/styles';
import { Grid, BottomNavigationAction, Typography } from '@material-ui/core';
import { Logo, AddUser, ListOfUsers } from 'icons'

const styles = theme =>({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
    background: 'radial-gradient(#4E86E4, #2F68C8)',
    borderRadius: '0',
    height: '60px'
  },
  headerFlex: {
    display: 'flex',
    height: '60px'
  },
  logo: {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'inherit'
  },
  link: {
    textAlign: 'center',
    verticalAlign: 'middle',
    flexDirection: 'row',
    opacity: '0.5',
    '&:focus': {
      opacity: '1'
    }
  },
  icon: {
    marginLeft: theme.spacing.unit,
  },
  text: {
    color: '#FFFFFF',
    lineHeight: '16px',
    fontWeight: 'medium'
  },
});

class App extends Component {

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
                <BottomNavigationAction icon={this.AddNewUser} className={classes.link}/>
                <BottomNavigationAction icon={this.ListAllUsers} className={classes.link}/>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <AddingNewUsers />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
