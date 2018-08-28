import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import MyHobbies from "./MyHobbies";
import { Field } from "redux-form";
import { fieldNames } from "../../consts";

const styles = theme => ({
  root: {
    display: 'flex',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 'normal',
    fontSize: '14px',
    color: '#657C9A',
    flexDirection: 'column'
  },
  label: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 'normal',
    fontSize: '14px',
    color: '#657C9A',
    marginBottom: '10px',
    marginLeft: '-14px'
  }
});

class CheckboxesGroup extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormLabel className={classes.label}>My hobbies</FormLabel>
        <Field name={fieldNames.checkBox1} component={MyHobbies} label="Art"/>
        <Field name={fieldNames.checkBox2} component={MyHobbies} label="Sport, fitness, aerobica and staff like that"/>
        <Field name={fieldNames.checkBox3} component={MyHobbies} label="I just want to play games, I’m not living in this life"/>
        <Field name={fieldNames.checkBox4} component={MyHobbies} label="I’m a female... I’m doing nothing. Every day."/>
        <Field name={fieldNames.checkBox5} component={MyHobbies} label="Guitar, guitar and guitar again. I’m fall in love with it."/>
        <Field name={fieldNames.checkBox6} component={MyHobbies} label="WTF is “hobbies”???"/>
      </div>
    );
  }
}

CheckboxesGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxesGroup);