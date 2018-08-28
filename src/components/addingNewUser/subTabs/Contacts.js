import React from 'react';
import { withStyles, Grid } from "@material-ui/core";
import SelectMainLanguage from 'components/commonComponents/IntegrationReactSelect'
import BootstrapInput from 'components/commonComponents/BootstrapInput'
import ButtonGroup from "components/commonComponents/ButtonGroup"
import { Field, FieldArray, reduxForm } from "redux-form";
import { contactsValidation } from "Validation";
import { fieldNames } from "consts";
import InputWithMask from 'components/commonComponents/InputMask'
import RenderPhone from 'components/commonComponents/RenderPhones'

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

let Contacts = (props) => {
  const {classes, handleSubmit, push} = props;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={6} className={classes.gridItem}>
            <div className={classes.container}>
              <Field
                name={fieldNames.company}
                required={true}
                label="Company"
                component={BootstrapInput}
                type="text"
              />
              <Field
                name={fieldNames.gitHubLink}
                label="Github link"
                component={BootstrapInput}
                type="text"
              />
              <Field
                name={fieldNames.facebookLink}
                label="Facebook link"
                component={BootstrapInput}
                type="text"
              />
              <Field
                name={fieldNames.mainLanguage}
                label="Main language"
                isMulti={false}
                component={SelectMainLanguage}
              />
            </div>
          </Grid>
          <Grid item xs={6} className={classes.gridItem}>
            <div className={classes.container}>
              <Field
                name={fieldNames.fax}
                label="Fax"
                component={InputWithMask}
                type="text"
                required={true}
              />
              <FieldArray
                name={fieldNames.phone}
                component={RenderPhone}
              />
              <ButtonGroup
                push={push}
                leftName='Back'
                rightName='Forward'
                url='/create-user/profile'
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </form>
  )};

Contacts = reduxForm({
  form: 'contacts',
  destroyOnUnmount: false,
  validate: contactsValidation,
  initialValues: {
    phone: [null, null]
  }
})(Contacts);

export default withStyles(styles)(Contacts);