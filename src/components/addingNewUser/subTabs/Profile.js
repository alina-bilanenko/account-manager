import React from 'react';
import { withStyles, Grid, Button } from '@material-ui/core';
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css';
import BootstrapInput from "../../collectiveComponents/BootstrapInput";
import CheckBox from 'components/collectiveComponents/RadioButton'
import ButtonGroup from 'components/collectiveComponents/ButtonGroup'

const styles = theme =>({
  root: {
    backgroundColor: 'rgba(231, 240, 255, 0.2)',
    height: '600px'
  },
  gridItem: {
    flex: '1',
    paddingTop: theme.spacing.unit*7,
    height: '600px',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '50%',

  }
});

const Profile = (props) => {
  const {classes, value = 'female', date=moment()} = props;

  const handleChange = () => {

  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6} className={classes.gridItem}>
          <div className={classes.container}>
            <BootstrapInput label="First name" />
            <BootstrapInput label="Last name" />
            <DatePicker
              selected={date}
              onChange={handleChange}
              placeholderText="Enter tomorrow"
            />
          </div>
        </Grid>
        <Grid item xs={6} className={classes.gridItem}>
          <div className={classes.container}>
            <BootstrapInput label="Email" />
            <BootstrapInput label="Adress" />
            <CheckBox />
            <ButtonGroup leftName='Back' rightName='Forward'/>
          </div>
        </Grid>
      </Grid>
    </div>
  )};

export default withStyles(styles)(Profile);