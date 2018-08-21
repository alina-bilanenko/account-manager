import React from 'react';
import { withStyles, Grid, Button } from '@material-ui/core';
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css';
import BootstrapInput from "../../collectiveComponents/BootstrapInput";
import CheckBox from 'components/collectiveComponents/RadioButton'
import ButtonGroup from 'components/collectiveComponents/ButtonGroup'
import {validate} from 'Validation/index'
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
  const {classes, value = 'female', date=moment(), handleSubmit} = props;

  const handleChange = () => {

  };

  return (
    <form onSubmit={handleSubmit(handleSubmit)}>
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6} className={classes.gridItem}>
          <div className={classes.container}>
            <Field name={fieldNames.firstName} component={()=> <BootstrapInput required={true} name={fieldNames.firstName} label="First name" />} type="text" />
            <Field name={fieldNames.lastName} component={()=> <BootstrapInput required={true} name={fieldNames.lastName} label="Last name" />} type="text" />
            <DatePicker
              selected={date}
              onChange={handleChange}
              placeholderText="Enter tomorrow"
            />
          </div>
        </Grid>
        <Grid item xs={6} className={classes.gridItem}>
          <div className={classes.container}>
            <Field name={fieldNames.email} component={()=> <BootstrapInput required={true} name={fieldNames.email} label="Email" />} type="text" />
            <Field name={fieldNames.address} component={()=> <BootstrapInput required={true} name={fieldNames.address} label="Address" />} type="text" />
            <CheckBox />
            <ButtonGroup leftName='Back' rightName='Forward'/>
          </div>
        </Grid>
      </Grid>
    </div>
    </form>
  )};

Profile = reduxForm({
  form: 'profile',
  validate
})(Profile);

export default withStyles(styles)(Profile);