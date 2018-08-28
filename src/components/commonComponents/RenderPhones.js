import React from 'react'
import { Field } from 'redux-form'
import InputWithMask from 'components/commonComponents/InputMask'
import { fieldNames } from "consts";
import { Typography, withStyles } from "@material-ui/core";
import { Add, ButtonDelete } from "icons";
import Button from "@material-ui/core/Button/Button";

const styles = theme =>({
  root: {
    listStyle: 'none',
    padding: '0',
    margin: '0'
  },
  addNumber: {
    display: 'block',
    textTransform: 'lowercase',
    border: 'none',
    width: '50%',
    paddingLeft: '0',
    '&:hover': {
      backgroundColor: 'inherit'
    },
    marginTop: '-25px'
  },
  addNumberColor: {
    color: '#657C9A',
  },
  buttonRemove: {
    position: 'absolute',
    right: '-8%',
    top: '40%',
    border: 'none',
    background: 'transparent'
  },
  button: {
    position: 'relative'
  }
});

const RenderPhone = ({ fields, classes }) => {

  return (
    <ul className={classes.root}>
      {fields.map((hobby, index) =>
        <li key={index} className={classes.button}>
          {fields.length > 1 &&
          <button
            type="button"
            onClick={() => {if(fields.length > 1)fields.remove(index)}}
            className={classes.buttonRemove}
          >
            {ButtonDelete}
          </button>}
          <Field
            name={fieldNames.phone}
            type="text"
            component={InputWithMask}
            label={`Phone #${index + 1}`}/>
        </li>
      )}
      {(fields.length < 3) &&
      (<li>
        <Button
          variant="outlined"
          component="span"
          className={classes.addNumber}
          onClick={() => {if(fields.length < 3) fields.push()}}
        >
          <Typography variant="body2" gutterBottom>
            {Add}
            <span className={classes.addNumberColor}>add phone number</span>
          </Typography>
        </Button>
      </li>)}
    </ul>
  );
}

export default withStyles(styles)(RenderPhone);