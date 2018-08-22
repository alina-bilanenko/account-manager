import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css';
import BootstrapInput from "../../collectiveComponents/BootstrapInput";
import RadioButton from 'components/collectiveComponents/RadioButton'
import ButtonGroup from 'components/collectiveComponents/ButtonGroup'
import {profileValidation} from 'Validation/index'
import { Field, reduxForm } from 'redux-form'
import { fieldNames } from "consts";

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
    width: '70%',

  }
});

let Profile = (props) => {
  const {classes, date=moment(), handleSubmit} = props;

  const handleChange = () => {

  };

  return (
    <form onSubmit={handleSubmit} noValidate>
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6} className={classes.gridItem}>
          <div className={classes.container}>
            <Field name={fieldNames.firstName} required={true} label="First name"  component={BootstrapInput} type="text" />
            <Field name={fieldNames.lastName} required={true} label="Last name" component={BootstrapInput} type="text" />
            <DatePicker
              selected={date}
              onChange={handleChange}
              placeholderText="Enter tomorrow"
            />
          </div>
        </Grid>
        <Grid item xs={6} className={classes.gridItem}>
          <div className={classes.container}>
            <Field name={fieldNames.email} required={true} label="Email" component={BootstrapInput} type="text" />
            <Field name={fieldNames.address} required={true} label="Address" component={BootstrapInput} type="text" />
            <RadioButton />
            <ButtonGroup leftName='Back' rightName='Forward'/>
          </div>
        </Grid>
      </Grid>
    </div>
    </form>
  )};

Profile = reduxForm({
  form: 'profile',
  validate: profileValidation
})(Profile);

export default withStyles(styles)(Profile);