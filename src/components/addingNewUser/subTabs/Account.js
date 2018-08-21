import React from 'react';
import { withStyles, Typography, BottomNavigationAction, Grid, Card } from '@material-ui/core';
import { Close } from "icons";
import BootstrapInput from 'components/collectiveComponents/BootstrapInput'
import ButtonGroup from 'components/collectiveComponents/ButtonGroup'
import ImageLoader from 'components/addingNewUser/subTabs/ImageLoader'
import { connect } from 'react-redux'
import { createUser } from "actions/createUserAction";
import { fieldNames } from 'consts'
import { Avatar } from "icons";
import {validate} from 'Validation/index'
import { Field, reduxForm } from 'redux-form'

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
  let { classes, createUser, changeUser, handleChangeInput, handleSubmit } = props;

  const addPhoto = (event) => {
    const files = event.target.files;

    if (!files.length ) {
      return
    }

    let reader = new FileReader();
    let file = files[0];

    reader.onloadend = () => {
      changeUser({...createUser.addNewUser, [fieldNames.photo]: reader.result});
    };

    reader.readAsDataURL(file);
  };


  const ImagePreview = () => {
    if (createUser.addNewUser.photo) {
     return (<img src={createUser.addNewUser.photo} className={classes.imageLoader}/>);
    }

    return <img src={Avatar} />
  };

  return (
    <form onSubmit={handleSubmit(handleSubmit)}>
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

            </Card>
            <ImageLoader addPhoto={addPhoto}/>
          </Grid>
          <Grid item xs={6} className={classes.gridItem}>
            <div className={classes.container}>
              <Field name={fieldNames.userName} component={()=> <BootstrapInput name={fieldNames.userName} label="User name" />} type="text" />
              <Field name={fieldNames.userName} component={()=> <BootstrapInput name={fieldNames.password} label="Password" endAdornment={true} />} type="text" />
              <Field name={fieldNames.userName} component={()=> <BootstrapInput name={fieldNames.password} label="Repeat Password" endAdornment={true} />} type="text" />
              <ButtonGroup leftName='Back' rightName='Forward' hidden={true}/>
            </div>
          </Grid>
        </Grid>
      </div>
    </form>
  )
};


const mapStateToProps = (props) => {
  return {
    createUser: props.createUser
  }
};

const mapDispatchToProps = {
  changeUser: createUser.addNewUser
};

Account = reduxForm({
  // a unique name for the form
  form: 'account',
  validate
})(Account);


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Account));