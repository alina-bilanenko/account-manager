import React from 'react';
import { withStyles, Grid} from '@material-ui/core';
import IntegrationReactSelect from 'components/commonComponents/IntegrationReactSelect'
import BootstrapInput from 'components/commonComponents/BootstrapInput'
import CheckboxesGroup from 'components/commonComponents/CheckboxesGroup'
import ButtonGroup from 'components/commonComponents/ButtonGroup'
import { Field, reduxForm } from 'redux-form'
import { capabilitiesValidation } from "Validation";
import { fieldNames } from "../../../consts";
import MyHobbies from 'components/commonComponents/MyHobbies'

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

let Capabilities = (props) => {
  const {classes, handleSubmit, push} = props;

  return (
    <form onSubmit={handleSubmit} noValidate>
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6} className={classes.gridItem}>
          <div className={classes.container}>
            {/*<IntegrationReactSelect isMulti={true}/>*/}
            <Field name={fieldNames.additionalInformation} label="Additional information"  component={BootstrapInput} type="text" />
          </div>
        </Grid>
        <Grid item xs={6} className={classes.gridItem}>
          <div className={classes.container}>
            <CheckboxesGroup />
            <ButtonGroup push={push} leftName='Back' rightName='Finish' url='/create-user/contacts'/>
          </div>
        </Grid>
      </Grid>
    </div>
    </form>
  )};

Capabilities = reduxForm({
  form: 'contacts',
  destroyOnUnmount: false,
  validate: capabilitiesValidation
})(Capabilities);

export default withStyles(styles)(Capabilities);