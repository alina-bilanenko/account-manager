import React from 'react';
import { withStyles, Grid, FormHelperText, Typography } from "@material-ui/core";
import SelectMainLanguage from 'components/collectiveComponents/IntegrationReactSelect'
import BootstrapInput from 'components/collectiveComponents/BootstrapInput'
import ButtonGroup from "components/collectiveComponents/ButtonGroup"
import { Field, reduxForm } from 'redux-form'
import { contactsValidation } from "Validation";
import { fieldNames } from "consts";
import Button from "@material-ui/core/Button/Button";
import { Add } from "icons";
import {InputWithMask} from 'components/collectiveComponents/InputMask'

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
  },
  addNumber: {
    display: 'block',
    textTransform: 'lowercase',
    border: 'none',
    width: '50%',
    paddingLeft: '0',
    '&:hover': {
      backgroundColor: 'inherit'
    }
  },
  addNumberColor: {
    color: '#657C9A',
  }
});

let Contacts = (props) => {
  const {classes, handleSubmit} = props;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={6} className={classes.gridItem}>
            <div className={classes.container}>
              <Field name={fieldNames.company} required={true} label="Company"  component={BootstrapInput} type="text" />
              <Field name={fieldNames.gitHubLink} label="Github link"  component={BootstrapInput} type="text" />
              <Field name={fieldNames.facebookLink}  label="Facebook link"  component={BootstrapInput} type="text" />
              <Field name={fieldNames.mainLanguage}  label="Main language" isMulti={false} component={SelectMainLanguage}/>
            </div>
          </Grid>
          <Grid item xs={6} className={classes.gridItem}>
            <div className={classes.container}>
              <Field name={fieldNames.fax} label="Fax" inputMask={true} component={BootstrapInput} type="text" />
              <Field name={fieldNames.phone} label="Phone #1" inputMask={true} component={BootstrapInput} type="text" />
              <Field name={fieldNames.phone} label="Phone #2" inputMask={true} component={BootstrapInput} type="text" />
              <Field name={fieldNames.phone} label="Phone #2" inputMask={true} component={BootstrapInput} type="text" />
              <Field name={fieldNames.fax} label="Fax" component={InputWithMask} type="text" />
              <div>
                  <Button variant="outlined" component="span" className={classes.addNumber}>
                    <Typography variant="body2" gutterBottom>
                      {Add}
                      <span className={classes.addNumberColor}>add phone number</span>
                    </Typography>
                  </Button>
              </div>
              <ButtonGroup leftName='Back' rightName='Forward'/>
            </div>
          </Grid>
        </Grid>
      </div>
    </form>
  )};

Contacts = reduxForm({
  form: 'contacts',
  destroyOnUnmount: false,
  validate: contactsValidation
})(Contacts);

export default withStyles(styles)(Contacts);