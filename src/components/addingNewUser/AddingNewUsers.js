import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Account from "components/addingNewUser/Account";
import {Capabilities} from "components/addingNewUser/Capabilities";
import {Contacts} from "components/addingNewUser/Contacts";
import {Profile} from "components/addingNewUser/Profile";
import classNames from 'classnames';

const styles = (theme) =>({
  caption: {
    width: '100%',
    maxWidth: 500,
    fontSize: '2.2rem',
    fontWeight: 'bold',
    lineHeight: '41px',
    color: '#475666',
    textAlign: 'center',
    margin: '1.5em auto 1em auto',
  },
  root: {
    width: '71%',
    margin: 'auto'
  },
  header: {
    boxShadow: 'inherit',
    backgroundColor: 'rgba(151, 186, 244, 0.2)',
  },
  fieldHeader: {
    maxWidth: '100%',
    flex: '1',
    fontWeight: 'bold',
    lineHeight: '28px',
    color: '#9BB0CB',
    fontSize: '1.5rem !important',
    textTransform: 'none',
    height: '62px'
  },
  activeTab: {
    color: '#FFFFFF',
    backgroundColor: '#4E86E4'
  },
});


class AddingNewUsers extends Component {
  handleChange = () => {

  };

  render() {
    const {classes, value = 'one'} = this.props;
    return (

      <div>
        <Typography variant="display1" gutterBottom className={classes.caption}>
          Adding new user
        </Typography>
        <div className={classes.root}>
          <AppBar position="static" className={classes.header}>
            <Tabs value={value} onChange={this.handleChange}>
              <Tab value="one" label="1. Account"  className={classNames(classes.fieldHeader, {[classes.activeTab]: value==="one"})} />
              <Tab value="two" label="2. Profile" className={classNames(classes.fieldHeader, {[classes.activeTab]: value ==="two"})}/>
              <Tab value="three" label="3. Contacts" className={classNames(classes.fieldHeader, {[classes.activeTab]: value ==="three"})}/>
              <Tab value="four" label="4. Capabilities" className={classNames(classes.fieldHeader, {[classes.activeTab]: value ==="four"})}/>
            </Tabs>
          </AppBar>
          {value === 'one' && <Account />}
          {value === 'two' && <Profile />}
          {value === 'three' && <Contacts />}
          {value === 'four' && <Capabilities />}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AddingNewUsers);
