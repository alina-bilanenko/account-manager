import React from 'react';
import { withStyles, Typography, BottomNavigationAction, Grid, Card } from '@material-ui/core';
import { Close } from "icons";
import BootstrapInput from 'components/collectiveComponents/BootstrapInput'
import ButtonGroup from 'components/collectiveComponents/ButtonGroup'
import ImageLoader from 'components/addingNewUser/subTabs/ImageLoader'
import { fieldNames } from 'consts'
import { Avatar } from "icons";
import {accountValidation, matchInput, confirmPassword} from 'Validation/index'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { collectiveActions } from "actions/action";
import { formValueSelector} from 'redux-form';

const styles = theme =>({
  root: {
    backgroundColor: 'rgba(231, 240, 255, 0.2)',
    height: '600px'
  },
  unsavedUserData: {
    backgroundColor: '#5E97F3',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit*3}px`,
  },
  unsavedUserDataText: {
    fontWeight: '500',
    lineHeight: '16px',
    color: '#FFFFFF',
    marginBottom: 0,
  },
  unsavedUserDataTextBlack: {
    fontWeight: '900',
    lineHeight: '16px',
    color: '#FFFFFF',
    padding: '0 !important',
    marginLeft: theme.spacing.unit*2,
  },
  rightIcons: {
    marginLeft: 'auto',
    minWidth: '30px',
    maxWidth: '30px',
    padding: '0 !important',
  },
  gridItem: {
    flex: '1',
    paddingTop: theme.spacing.unit*4,
    height: '600px'
  },
  card: {
    boxShadow: 'none',
    border: '3px solid #5E97F3',
    borderRadius: '50%',
    width: '11rem',
    height: '11rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: 'auto',
    marginTop: theme.spacing.unit*3
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: theme.spacing.unit*12,
  },
  imageLoader: {
    width: '100%',
    height: '100%'
  }
});

let Account = (props) => {
  let {
    classes,
    handleSubmit,
    showPassword,
    changeShowPassword,
    showConfirmPassword,
    changeShowConfirmPassword,
    change,
    photo
  } = props;

  return (
    <form encType="multipart/form-data" onSubmit={handleSubmit} noValidate>
      <div className={classes.root}>
        <div className={classes.unsavedUserData}>
          <Typography variant="body2" gutterBottom className={classes.unsavedUserDataText}>
            You have an unsaved user data. Do you want to complete it?
          </Typography>
          <BottomNavigationAction icon='Continue' className={classes.unsavedUserDataTextBlack}/>
          <BottomNavigationAction icon={Close} className={classes.rightIcons}/>
        </div>
        <Grid container>
          <Grid item xs={6} className={classes.gridItem}>
            <Card className={classes.card}>
              {photo ?
                <img src={photo} alt="" className={classes.imageLoader}/>
                :Avatar}
            </Card>
            <ImageLoader name={fieldNames.photo} onChange={change}/>
          </Grid>
          <Grid item xs={6} className={classes.gridItem}>
            <div className={classes.container}>
              <Field name={fieldNames.userName} label="User name" component={BootstrapInput} type="text"  />
              <Field name={fieldNames.password} label="Password" endAdornment={true} component={BootstrapInput} type={showPassword? "text" : "password"} show={showPassword} changeShow={changeShowPassword}/>
              <Field name={fieldNames.repeatPassword} validate={[confirmPassword, matchInput]} label="Repeat Password" endAdornment={true} component={BootstrapInput} type={showConfirmPassword? "text" : "password"} show={showConfirmPassword} changeShow={changeShowConfirmPassword} />
              <ButtonGroup leftName='Back' rightName='Forward' hidden={true}/>
            </div>
          </Grid>
        </Grid>
      </div>
    </form>
  )
};


Account = reduxForm({
  form: 'account',
  destroyOnUnmount: false,
  validate: accountValidation
})(Account);

const selector = formValueSelector('account')


const mapStateToProps = (props) => {
  return {
    showPassword: props.collectiveState.showPassword,
    showConfirmPassword: props.collectiveState.showConfirmPassword,
    photo: selector(props, 'photo')
  }
};

const mapDispatchToProps = {
  changeShowPassword: collectiveActions.showPassword,
  changeShowConfirmPassword: collectiveActions.showConfirmPassword
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Account));